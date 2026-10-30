/**
 * Content model for every inner page. The visible copy, the JSON-LD graph, the
 * sitemap and llms.txt are all derived from these objects, so schema text can
 * never drift from what the page renders.
 */

export type ContentGroup = "features" | "use-cases" | "compare" | "resources";

export type ContentTable = {
  caption: string;
  /** First column is the row header (rendered as <th scope="row">). */
  columns: string[];
  rows: string[][];
};

export type ContentSection = {
  /** Natural-language question where the section answers one. */
  heading: string;
  /** Each paragraph 2–4 sentences; the first sentence answers the heading. */
  paragraphs: string[];
  bullets?: string[];
  /** Rendered as an ordered list; also emitted as HowToStep when present. */
  steps?: { name: string; text: string }[];
  table?: ContentTable;
};

export type Faq = { q: string; a: string };

export type Source = { label: string; url: string };

export type ContentPage = {
  slug: string;
  group: ContentGroup;
  /** Short label for menus and breadcrumbs, e.g. "AI Quiz Generator". */
  navLabel: string;
  /** One line, at most 70 characters, for menus and hub cards. */
  navBlurb: string;
  /** 30–60 characters, primary keyword first. */
  metaTitle: string;
  /** 120–155 characters, reads as ad copy. */
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** 40–60 word standalone answer to the page's core question. */
  answer: string;
  /** One sentence of the form "X is …". */
  definition: string;
  /** 3–5 complete standalone sentences. */
  takeaways: string[];
  sections: ContentSection[];
  /** 4–6 entries. */
  faqs: Faq[];
  /** Outbound citations for factual claims. */
  sources?: Source[];
  /** Site paths of 2–4 related pages, e.g. "/features/quiz-generator". */
  related: string[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** ISO date, e.g. "2026-10-30". */
  datePublished: string;
  dateModified: string;
};
