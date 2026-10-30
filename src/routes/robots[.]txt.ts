import { createFileRoute } from "@tanstack/react-router";
import { robotsTxt } from "@/lib/site-index";

// Generated from the content source, never hand-maintained.
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(robotsTxt(), {
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=86400",
          },
        }),
    },
  },
});
