import type { ContentPage } from "./types";

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
