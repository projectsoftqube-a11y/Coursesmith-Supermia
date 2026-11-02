import type { ReactNode } from "react";
import type { SitePage } from "@/content/site-pages";
import { pagePhotos } from "@/content/visuals";
import { ID, pageHead, webPageNode } from "@/lib/seo";
import {
  Chapters,
  CtaBand,
  FaqBand,
  Overview,
  PageHero,
  PageShell,
  PrimaryCta,
  slugify,
} from "./blocks";

export function sitePageHead(page: SitePage, extra: Record<string, unknown>[] = []) {
  return pageHead({
    path: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    graph: [
      webPageNode({
        path: page.path,
        title: page.metaTitle,
        description: page.metaDescription,
        type: page.schemaType,
        dateModified: page.dateModified,
        faqs: page.faqs,
        ...(page.schemaType === "WebPage" ? {} : { about: { "@id": ID.organization } }),
      }),
      ...extra,
    ],
  });
}

/** Template for pricing / about / contact: hero, optional band, sections, questions. */
export function SitePageView({ page, band }: { page: SitePage; band?: ReactNode }) {
  const photos = pagePhotos(page.path, { sections: page.sections });
  const toc = [
    ...page.sections.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    { id: "faq", label: "Frequently asked questions" },
  ];
  return (
    <PageShell>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        answer={page.answer}
        visual={photos.hero}
        cardTitle={page.navLabel}
        updated={page.dateModified}
        actions={<PrimaryCta />}
      />
      {band}
      <Overview toc={toc} takeaways={page.takeaways} />
      <Chapters sections={page.sections} photos={photos.sections} />
      <FaqBand faqs={page.faqs} />
      <CtaBand photo={photos.cta} />
    </PageShell>
  );
}
