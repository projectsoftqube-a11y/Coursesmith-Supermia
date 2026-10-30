// SEO / AEO / GEO verification against a running server (dev, preview or production).
//   node scripts/seo-audit.mjs [baseUrl]      default http://localhost:8080
// Crawls every URL in /sitemap.xml and fails (exit 1) on any violation. Checks the raw
// server HTML only, the way non-JavaScript AI crawlers see it.
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE = (process.argv[2] ?? "http://localhost:8080").replace(/\/+$/, "");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
const all = (html, re) => [...html.matchAll(re)].map((m) => m[1]);

async function get(url) {
  const res = await fetch(url, { redirect: "manual" });
  return {
    status: res.status,
    type: res.headers.get("content-type") ?? "",
    body: await res.text(),
  };
}

// 1. Catalog drift (nav/footer index vs page bodies).
try {
  execFileSync(process.execPath, [path.join(root, "scripts/gen-catalog.mjs"), "--check"], {
    stdio: "pipe",
  });
} catch (e) {
  fail("catalog.gen.ts", String(e.stderr || e.message).trim());
}

// 2. Machine-readable endpoints.
const endpoints = {
  "/sitemap.xml": "xml",
  "/robots.txt": "text/plain",
  "/llms.txt": "text/plain",
  "/llms-full.txt": "text/plain",
};
const texts = {};
for (const [p, type] of Object.entries(endpoints)) {
  const r = await get(BASE + p);
  texts[p] = r.body;
  if (r.status !== 200) fail(p, `status ${r.status}`);
  if (!r.type.includes(type)) fail(p, `content-type ${r.type}`);
}
if (!/Sitemap: https?:\/\/\S+\/sitemap\.xml/.test(texts["/robots.txt"] ?? ""))
  fail("/robots.txt", "no Sitemap line");
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "OAI-SearchBot"])
  if (!texts["/robots.txt"]?.includes(`User-agent: ${bot}`))
    fail("/robots.txt", `${bot} not listed`);

const locs = all(texts["/sitemap.xml"] ?? "", /<loc>([^<]+)<\/loc>/g);
const paths = locs.map((u) => new URL(u).pathname);
const pathSet = new Set(paths);
if (!paths.length) fail("/sitemap.xml", "no URLs");

// 3. Every sitemap URL.
const titles = new Map();
const descs = new Map();
const report = [];
for (const p of paths) {
  const r = await get(BASE + p);
  if (r.status !== 200) {
    fail(p, `status ${r.status}${r.status >= 300 && r.status < 400 ? " (redirect)" : ""}`);
    continue;
  }
  const html = r.body;
  const title = decode(all(html, /<title>([\s\S]*?)<\/title>/g)[0] ?? "");
  const desc = decode(all(html, /<meta name="description" content="([^"]*)"/g)[0] ?? "");
  const canonical = all(html, /<link rel="canonical" href="([^"]*)"/g);
  const robots = all(html, /<meta name="robots" content="([^"]*)"/g)[0] ?? "";
  const ogImage = all(html, /<meta property="og:image" content="([^"]*)"/g);
  const headings = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const h1 = headings.filter((h) => h === 1).length;
  const body = decode(
    html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " "),
  );
  const words = body.split(" ").filter((w) => /[a-z]/i.test(w)).length;

  if (title.length < 15 || title.length > 60) fail(p, `title length ${title.length}: "${title}"`);
  if (desc.length < 70 || desc.length > 155) fail(p, `description length ${desc.length}`);
  titles.set(title, [...(titles.get(title) ?? []), p]);
  descs.set(desc, [...(descs.get(desc) ?? []), p]);
  if (canonical.length !== 1) fail(p, `${canonical.length} canonical tags`);
  else if (new URL(canonical[0]).pathname !== p)
    fail(p, `canonical ${canonical[0]} is not self-referencing`);
  if (!/max-snippet:-1/.test(robots)) fail(p, `robots meta "${robots}"`);
  if (!ogImage.length || !ogImage[0].startsWith("http")) fail(p, "missing absolute og:image");
  if (h1 !== 1) fail(p, `${h1} <h1> elements`);
  for (let i = 1; i < headings.length; i++)
    if (headings[i] - headings[i - 1] > 1) {
      fail(p, `heading skip h${headings[i - 1]} → h${headings[i]}`);
      break;
    }

  // JSON-LD: parse, every @id reference resolves, no empty/undefined values.
  const blocks = all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  if (blocks.length !== 1) fail(p, `${blocks.length} JSON-LD blocks (want one @graph)`);
  let types = [];
  for (const raw of blocks) {
    let data;
    try {
      data = JSON.parse(decode(raw.replace(/<[^>]+>/g, "")));
    } catch (e) {
      try {
        data = JSON.parse(raw);
      } catch {
        fail(p, `JSON-LD does not parse: ${e.message}`);
        continue;
      }
    }
    const graph = data["@graph"] ?? [];
    const ids = new Set(graph.map((n) => n["@id"]).filter(Boolean));
    types = graph.flatMap((n) => [].concat(n["@type"]));
    const walk = (v, where) => {
      if (v === null || v === undefined || v === "")
        return fail(p, `empty JSON-LD value at ${where}`);
      if (typeof v === "string" && /undefined|\bnull\b|TODO|lorem/i.test(v))
        return fail(p, `placeholder JSON-LD value at ${where}: ${v}`);
      if (Array.isArray(v)) return v.forEach((x, i) => walk(x, `${where}[${i}]`));
      if (typeof v === "object") {
        const keys = Object.keys(v);
        if (keys.length === 1 && keys[0] === "@id" && !ids.has(v["@id"]))
          fail(p, `@id reference does not resolve: ${v["@id"]}`);
        for (const k of keys) walk(v[k], `${where}.${k}`);
      }
    };
    walk(graph, "@graph");
    for (const t of ["Organization", "WebSite", "SoftwareApplication"])
      if (!types.includes(t)) fail(p, `JSON-LD missing ${t}`);
    // FAQ schema text must be character-identical to rendered text.
    for (const node of graph) {
      const nodeTypes = [].concat(node["@type"]);
      if (!nodeTypes.includes("FAQPage")) continue;
      for (const q of node.mainEntity ?? []) {
        if (!body.includes(q.name)) fail(p, `FAQ question not rendered verbatim: "${q.name}"`);
        if (!body.includes(q.acceptedAnswer?.text ?? "∅"))
          fail(p, `FAQ answer not rendered verbatim for: "${q.name}"`);
      }
    }
    if (p !== "/" && !types.includes("BreadcrumbList")) fail(p, "no BreadcrumbList");
  }
  if (p !== "/" && p !== "/privacy" && p !== "/terms" && !html.includes('class="answer-block'))
    fail(p, "answer block not in server HTML");

  // Internal links resolve to sitemap URLs (or known files / home anchors).
  for (const href of all(html, /<a [^>]*href="(\/[^"#?]*)[^"]*"/g)) {
    const clean = href.replace(/\/+$/, "") || "/";
    if (!pathSet.has(clean) && !/\.(pdf|png|jpg|xml|txt)$/.test(clean))
      fail(p, `internal link to non-sitemap URL ${href}`);
  }
  report.push({ p, title: title.length, desc: desc.length, h1, words, ld: types.length });
}
for (const [t, ps] of titles)
  if (ps.length > 1) fail("titles", `duplicate "${t}" on ${ps.join(", ")}`);
for (const [d, ps] of descs)
  if (ps.length > 1) fail("descriptions", `duplicate on ${ps.join(", ")}`);

// 4. Trailing-slash and unknown URLs.
const nf = await get(`${BASE}/this-page-does-not-exist`);
if (nf.status !== 404) fail("404", `unknown URL returned ${nf.status}`);

console.log(`Audited ${report.length} URLs from ${BASE}/sitemap.xml\n`);
console.log("path".padEnd(52), "title", "desc", "h1", "words", "ld-nodes");
for (const r of report)
  console.log(
    r.p.padEnd(52),
    String(r.title).padEnd(5),
    String(r.desc).padEnd(4),
    String(r.h1).padEnd(2),
    String(r.words).padEnd(5),
    r.ld,
  );
console.log();
if (problems.length) {
  console.log(`✗ ${problems.length} problem(s):`);
  for (const pr of problems) console.log(`  - ${pr}`);
  process.exitCode = 1;
} else {
  console.log("✓ all checks passed");
}
