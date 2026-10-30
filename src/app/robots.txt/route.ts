import { robotsTxt } from "@/lib/site-index";

// Generated from the content source, never hand-maintained. Prerendered at build.
export function GET() {
  return new Response(robotsTxt(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
