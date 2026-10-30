import { sitemapXml } from "@/lib/site-index";

// Generated from the content source, never hand-maintained. Prerendered at build.
export function GET() {
  return new Response(sitemapXml(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
