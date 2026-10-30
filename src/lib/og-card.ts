import { ALL_PAGES } from "@/content";
import { GROUP_ORDER, HUBS, STATIC_PAGES } from "@/content/hubs";
import { pagePath } from "@/content/load";

import { indexEntries } from "./site-index";

/** Text on a page's Open Graph card, read from the same content the page renders. */
export type OgCard = { eyebrow: string; title: string; subtitle: string };

const LEGAL: Record<string, string> = {
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
};

function buildCards(): Map<string, OgCard> {
  const cards = new Map<string, OgCard>();
  cards.set("/", {
    eyebrow: "AI teaching assistant",
    title: "Turn any textbook into lesson plans, tests & assignments with AI.",
    subtitle: "Upload a PDF or Word file. Get classroom-ready drafts.",
  });
  for (const group of GROUP_ORDER) {
    const hub = HUBS[group];
    cards.set(hub.path, { eyebrow: hub.label, title: hub.h1, subtitle: hub.intro });
  }
  for (const page of ALL_PAGES) {
    cards.set(pagePath(page), {
      eyebrow: HUBS[page.group].label,
      title: page.h1,
      subtitle: page.navBlurb,
    });
  }
  for (const page of STATIC_PAGES) {
    cards.set(page.path, {
      eyebrow: "CourseSmith",
      title: LEGAL[page.path] ?? page.label,
      subtitle: page.blurb,
    });
  }
  return cards;
}

const CARDS = buildCards();

/** Paths that get a card: exactly the indexable URLs in the sitemap. */
export function ogPaths(): string[] {
  return indexEntries().map((entry) => entry.path);
}

export function ogCard(path: string): OgCard | undefined {
  return CARDS.get(path);
}
