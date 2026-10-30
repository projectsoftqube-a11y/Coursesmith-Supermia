import { ALL_PAGES, PAGES_BY_GROUP } from "@/content";
import { GROUP_ORDER, HUBS, SITE_UPDATED, STATIC_PAGES } from "@/content/hubs";
import { pagePath } from "@/content/load";
import type { ContentPage } from "@/content/types";
import { HOME_FAQS } from "@/content/home";
import { SITE_PAGES, type SitePage } from "@/content/site-pages";
import { FAQ_GROUPS, FAQ_PAGE } from "@/content/faq";
import { absoluteUrl, APP_URL, CONTACT_EMAIL, IS_PRODUCTION, SITE_NAME } from "./seo";

/**
 * The single list of indexable URLs. sitemap.xml, llms.txt and llms-full.txt
 * are generated from it, so a new page shows up everywhere the moment its
 * content object is added.
 */

/** Legal pages carry their own visible "Last updated" date. */
const LEGAL_UPDATED = "2026-08-07";

export type IndexEntry = { path: string; lastmod: string };

export function indexEntries(): IndexEntry[] {
  return [
    { path: "/", lastmod: SITE_UPDATED },
    ...GROUP_ORDER.flatMap((g) => [
      { path: HUBS[g].path, lastmod: SITE_UPDATED },
      ...PAGES_BY_GROUP[g].map((p) => ({ path: pagePath(p), lastmod: p.dateModified })),
    ]),
    ...STATIC_PAGES.map((s) => ({
      path: s.path,
      lastmod: s.path === "/privacy" || s.path === "/terms" ? LEGAL_UPDATED : SITE_UPDATED,
    })),
  ];
}

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function sitemapXml(): string {
  const urls = indexEntries()
    .map(
      (e) =>
        `  <url>\n    <loc>${xmlEscape(absoluteUrl(e.path))}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/** AI crawlers explicitly allowed. Google-Extended / Applebot-Extended govern AI use, not indexing. */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Googlebot",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "Twitterbot",
  "facebookexternalhit",
];

export function robotsTxt(): string {
  if (!IS_PRODUCTION) return "User-agent: *\nDisallow: /\n";
  const disallow = ["/api/", "/_serverFn/"];
  const block = (agent: string) =>
    [`User-agent: ${agent}`, "Allow: /", ...disallow.map((d) => `Disallow: ${d}`)].join("\n");
  return `${[...AI_AGENTS, "*"].map(block).join("\n\n")}\n\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`;
}

const line = (path: string, label: string, blurb: string) =>
  `- [${label}](${absoluteUrl(path)}): ${blurb}`;

export function llmsTxt(): string {
  const groups = GROUP_ORDER.map((g) => {
    const hub = HUBS[g];
    return [
      `## ${hub.label}`,
      "",
      line(hub.path, hub.h1, hub.intro),
      ...PAGES_BY_GROUP[g].map((p) => line(pagePath(p), p.navLabel, p.navBlurb)),
    ].join("\n");
  });
  return [
    `# ${SITE_NAME}`,
    "",
    "> CourseSmith is an AI teaching assistant by SuperMIA (Botfinity Inc.). Teachers upload a textbook as a PDF or Word file and CourseSmith maps its chapters and topics, then generates lesson plans (objectives, explanation, step-by-step delivery, homework and a project idea), test papers and assignments with marks and answer keys, and week-by-week academic schedules. Tests and assignments download as Word files, and a 24/7 Co-Pilot chat helps inside the app. It is free to start, with credit-based usage.",
    "",
    "Built for K-12 teachers, tutors, homeschool educators and school departments in the United States. Teachers review every output before classroom use.",
    "",
    "## Start here",
    "",
    line(
      "/",
      "Home",
      "What CourseSmith does, how the workflow runs and answers to common questions.",
    ),
    line(
      "/pricing",
      "Pricing",
      "Free starter credits, credit-based usage and volume pricing for schools.",
    ),
    `- [Open the app](${APP_URL}): Sign up and upload a textbook.`,
    "",
    ...groups.flatMap((g) => [g, ""]),
    "## Company",
    "",
    ...STATIC_PAGES.filter((s) => s.path !== "/pricing").map((s) => line(s.path, s.label, s.blurb)),
    "",
    "## Optional",
    "",
    line("/llms-full.txt", "Full text", "Every page of this site as clean Markdown in one file."),
    "",
    `Contact: ${CONTACT_EMAIL}`,
    "",
  ].join("\n");
}

function pageMarkdown(p: ContentPage): string {
  const out = [
    `# ${p.h1}`,
    "",
    `URL: ${absoluteUrl(pagePath(p))}`,
    `Last updated: ${p.dateModified}`,
    "",
    p.answer,
    "",
    ...(p.definition ? [p.definition, ""] : []),
    "## Key takeaways",
    "",
    ...p.takeaways.map((t) => `- ${t}`),
    "",
  ];
  for (const s of p.sections) {
    out.push(`## ${s.heading}`, "", ...s.paragraphs.flatMap((x) => [x, ""]));
    if (s.bullets) out.push(...s.bullets.map((b) => `- ${b}`), "");
    if (s.steps) out.push(...s.steps.map((st, i) => `${i + 1}. **${st.name}**: ${st.text}`), "");
    if (s.table) {
      out.push(
        `| ${s.table.columns.join(" | ")} |`,
        `| ${s.table.columns.map(() => "---").join(" | ")} |`,
        ...s.table.rows.map((r) => `| ${r.join(" | ")} |`),
        "",
        `_${s.table.caption}_`,
        "",
      );
    }
  }
  out.push("## Frequently asked questions", "");
  for (const f of p.faqs) out.push(`### ${f.q}`, "", f.a, "");
  if (p.sources?.length) {
    out.push("## Sources", "", ...p.sources.map((s) => `- [${s.label}](${s.url})`), "");
  }
  return out.join("\n");
}

function sitePageMarkdown(p: SitePage): string {
  return pageMarkdown({
    ...p,
    slug: "",
    group: "features",
    navBlurb: "",
    definition: "",
    related: [],
    primaryKeyword: "",
    secondaryKeywords: [],
    datePublished: p.dateModified,
  }).replace(/^URL: .*$/m, `URL: ${absoluteUrl(p.path)}`);
}

function faqMarkdown(): string {
  return [
    `# ${FAQ_PAGE.h1}`,
    "",
    `URL: ${absoluteUrl(FAQ_PAGE.path)}`,
    `Last updated: ${FAQ_PAGE.dateModified}`,
    "",
    FAQ_PAGE.answer,
    "",
    ...FAQ_GROUPS.flatMap((g) => [
      `## ${g.title}`,
      "",
      ...g.faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    ]),
  ].join("\n");
}

export function llmsFullTxt(): string {
  const home = [
    `# ${SITE_NAME}: AI lesson plans, quizzes and curriculum tools`,
    "",
    `URL: ${absoluteUrl("/")}`,
    "",
    "## Frequently asked questions",
    "",
    ...HOME_FAQS.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
  ].join("\n");
  return [
    home,
    ...SITE_PAGES.map(sitePageMarkdown),
    faqMarkdown(),
    ...ALL_PAGES.map(pageMarkdown),
  ].join("\n\n---\n\n");
}
