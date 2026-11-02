import { readingMinutes } from "@/content/load";
import type { ContentPage } from "@/content/types";
import { visualFor } from "@/content/visuals";
import {
  Chapters,
  CtaBand,
  FaqBand,
  Overview,
  PageHero,
  PageShell,
  PrimaryCta,
  RelatedGrid,
  SecondaryCta,
  slugify,
  SourceList,
} from "./blocks";

const SECONDARY_BY_GROUP: Record<ContentPage["group"], { href: string; label: string }> = {
  features: { href: "/features/textbook-to-lesson-plan", label: "See how it works" },
  "use-cases": { href: "/features", label: "Explore the tools" },
  compare: { href: "/compare", label: "All comparisons" },
  resources: { href: "/resources/lesson-plan-template", label: "Free lesson plan template" },
};

export function ContentPageView({ page }: { page: ContentPage }) {
  const toc = [
    ...page.sections.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    { id: "faq", label: "Frequently asked questions" },
  ];
  const secondary =
    page.group === "features" && page.slug === "textbook-to-lesson-plan"
      ? { href: "/features", label: "All features" }
      : SECONDARY_BY_GROUP[page.group];
  const term = page.definition.split(/\s+is\s+/)[0] ?? page.navLabel;

  return (
    <PageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        answer={page.answer}
        visual={visualFor(page.slug)}
        cardTitle={page.navLabel}
        updated={page.dateModified}
        minutes={readingMinutes(page)}
        actions={
          <>
            <PrimaryCta />
            <SecondaryCta href={secondary.href}>{secondary.label}</SecondaryCta>
          </>
        }
      />
      <Overview toc={toc} takeaways={page.takeaways} term={term} definition={page.definition} />
      <Chapters sections={page.sections} seed={page.slug} />
      <FaqBand faqs={page.faqs} />
      {page.sources?.length ? <SourceList sources={page.sources} /> : null}
      <RelatedGrid paths={page.related} />
      <CtaBand />
    </PageShell>
  );
}
