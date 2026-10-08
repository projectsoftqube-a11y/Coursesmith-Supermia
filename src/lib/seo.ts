/**
 * Public origin this marketing site is served from.
 *
 * Canonical and Open Graph URLs must be absolute — crawlers and social scrapers
 * do not resolve site-relative paths, so `/logo.png` silently yields no preview
 * image. The app itself lives on the `app.` subdomain; this is the marketing site.
 */
export const SITE_URL = "https://coursesmith.supermia.ai";

/** Turn a site-relative path into an absolute URL for canonical / og tags. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
