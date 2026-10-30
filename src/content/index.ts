import type { ContentGroup, ContentPage } from "./types";
import { FEATURE_PAGES } from "./features";
import { USE_CASE_PAGES } from "./use-cases";
import { STANDARDS_PAGES_A } from "./standards-a";
import { STANDARDS_PAGES_B } from "./standards-b";
import { STANDARDS_PAGES_C } from "./standards-c";
import { STANDARDS_PAGES_D } from "./standards-d";
import { STANDARDS_PAGES_E } from "./standards-e";
import { STANDARDS_PAGES_F } from "./standards-f";
import { STANDARDS_PAGES_G } from "./standards-g";
import { STANDARDS_PAGES_H } from "./standards-h";
import { COMPARE_PAGES } from "./compare";
import { RESOURCE_PAGES } from "./resources";
import { GROUP_ORDER } from "./hubs";

/**
 * Every page body, eagerly imported. Server-only consumers (sitemap, llms.txt,
 * the catalog generator and the SEO audit) use this; routes load their group
 * lazily through loadGroup() instead so client bundles stay small.
 */
export const PAGES_BY_GROUP: Record<ContentGroup, ContentPage[]> = {
  features: FEATURE_PAGES,
  "use-cases": USE_CASE_PAGES,
  standards: [
    ...STANDARDS_PAGES_A,
    ...STANDARDS_PAGES_B,
    ...STANDARDS_PAGES_C,
    ...STANDARDS_PAGES_D,
    ...STANDARDS_PAGES_E,
    ...STANDARDS_PAGES_F,
    ...STANDARDS_PAGES_G,
    ...STANDARDS_PAGES_H,
  ],
  compare: COMPARE_PAGES,
  resources: RESOURCE_PAGES,
};

export const ALL_PAGES: ContentPage[] = GROUP_ORDER.flatMap((g) => PAGES_BY_GROUP[g]);

/** One page by group and slug, or undefined when the slug does not exist. */
export function getContentPage(group: ContentGroup, slug: string): ContentPage | undefined {
  return PAGES_BY_GROUP[group].find((page) => page.slug === slug);
}
