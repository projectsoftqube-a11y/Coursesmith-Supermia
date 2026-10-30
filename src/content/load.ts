import type { ContentGroup, ContentPage } from "./types";

/** Lazily load one group's page bodies, so each group ships as its own chunk. */
const LOADERS: Record<ContentGroup, () => Promise<ContentPage[]>> = {
  features: () => import("./features").then((m) => m.FEATURE_PAGES),
  "use-cases": () => import("./use-cases").then((m) => m.USE_CASE_PAGES),
  standards: () =>
    Promise.all([import("./standards-a"), import("./standards-b")]).then(([a, b]) => [
      ...a.STANDARDS_PAGES_A,
      ...b.STANDARDS_PAGES_B,
    ]),
  compare: () => import("./compare").then((m) => m.COMPARE_PAGES),
  resources: () => import("./resources").then((m) => m.RESOURCE_PAGES),
};

export async function loadPage(
  group: ContentGroup,
  slug: string,
): Promise<ContentPage | undefined> {
  const pages = await LOADERS[group]();
  return pages.find((p) => p.slug === slug);
}

export function pagePath(page: Pick<ContentPage, "group" | "slug">): string {
  return `/${page.group}/${page.slug}`;
}

/** Approximate reading time in minutes. */
export function readingMinutes(page: ContentPage): number {
  const text = [
    page.answer,
    ...page.takeaways,
    ...page.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]),
    ...page.faqs.map((f) => f.a),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 230));
}
