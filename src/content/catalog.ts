import { CATALOG, type CatalogEntry } from "./catalog.gen";
import { GROUP_ORDER, HUBS, STATIC_PAGES } from "./hubs";
import type { ContentGroup } from "./types";

export { CATALOG, type CatalogEntry } from "./catalog.gen";

/**
 * Lightweight index of every page (path, label, blurb) for the nav, footer,
 * hub cards and related links. Generated from the page bodies by
 * `node scripts/gen-catalog.mjs`; scripts/seo-audit.mjs fails if it drifts.
 */

export function catalogGroup(group: ContentGroup): CatalogEntry[] {
  return CATALOG.filter((e) => e.group === group);
}

/** Standards entries split into national frameworks and states (A–Z). */
export function standardsSplit() {
  const all = catalogGroup("standards");
  return {
    national: all.filter((e) => e.regionCode === "US"),
    states: all
      .filter((e) => e.regionCode && e.regionCode !== "US")
      .sort((a, b) => (a.regionName ?? "").localeCompare(b.regionName ?? "")),
  };
}

/**
 * Menus and the footer cannot list every state, so they show the national
 * frameworks, the largest states, and a link to the full standards hub.
 */
const NAV_STATE_PATHS = new Set(
  [
    "texas-teks",
    "california",
    "florida-best",
    "new-york",
    "georgia-gse",
    "north-carolina",
    "pennsylvania",
    "ohio",
    "illinois",
    "michigan",
    "new-jersey",
    "virginia-sol",
  ].map((slug) => `/standards/${slug}`),
);

export function standardsNavEntries(): CatalogEntry[] {
  const { national, states } = standardsSplit();
  const hasDc = states.some((e) => e.regionCode === "US-DC");
  return [
    ...national,
    ...states.filter((e) => NAV_STATE_PATHS.has(e.path)),
    {
      path: "/standards",
      group: "standards",
      label: hasDc ? `All ${states.length - 1} states + DC` : `All ${states.length} states`,
      blurb: "Every state's standards, explained for lesson planning",
    },
  ];
}

/** Label + blurb for any internal path, used by related-link cards. */
export function describePath(path: string): { label: string; blurb: string } | undefined {
  const entry = CATALOG.find((e) => e.path === path);
  if (entry) return { label: entry.label, blurb: entry.blurb };
  const hub = GROUP_ORDER.map((g) => HUBS[g]).find((h) => h.path === path);
  if (hub) return { label: hub.label, blurb: hub.intro };
  const page = STATIC_PAGES.find((s) => s.path === path);
  return page ? { label: page.label, blurb: page.blurb } : undefined;
}
