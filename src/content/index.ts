import type { ContentGroup, ContentPage } from "./types";
import { FEATURE_PAGES } from "./features";
import { USE_CASE_PAGES } from "./use-cases";
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
  compare: COMPARE_PAGES,
  resources: RESOURCE_PAGES,
};

export const ALL_PAGES: ContentPage[] = GROUP_ORDER.flatMap((g) => PAGES_BY_GROUP[g]);

/** One page by group and slug, or undefined when the slug does not exist. */
export function getContentPage(group: ContentGroup, slug: string): ContentPage | undefined {
  return PAGES_BY_GROUP[group].find((page) => page.slug === slug);
}
