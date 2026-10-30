import type { ContentGroup, ContentPage } from "./types";
import { FEATURE_PAGES } from "./features";
import { USE_CASE_PAGES } from "./use-cases";
import { STANDARDS_PAGES_A } from "./standards-a";
import { STANDARDS_PAGES_B } from "./standards-b";
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
  standards: [...STANDARDS_PAGES_A, ...STANDARDS_PAGES_B],
  compare: COMPARE_PAGES,
  resources: RESOURCE_PAGES,
};

export const ALL_PAGES: ContentPage[] = GROUP_ORDER.flatMap((g) => PAGES_BY_GROUP[g]);
