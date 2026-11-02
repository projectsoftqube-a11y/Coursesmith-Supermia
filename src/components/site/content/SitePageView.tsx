import type { ReactNode } from "react";
import type { SitePage } from "@/content/site-pages";
import { visualFor } from "@/content/visuals";
import { ID, breadcrumbNode, pageHead, webPageNode, type Crumb } from "@/lib/seo";
import {
  BookShell,
  Chapters,
  CtaBand,
  FaqBand,
  Overview,
  PageHero,
  PrimaryCta,
  slugify,
} from "./blocks";

export function sitePageCrumbs(page: SitePage): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: page.navLabel, path: page.path },
  ];
}

export function sitePageHead(page: SitePage, extra: Record<string, unknown>[] = []) {
  const crumbs = sitePageCrumbs(page);
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
        crumbs,
        dateModified: page.dateModified,
        faqs: page.faqs,
        ...(page.schemaType === "WebPage" ? {} : { about: { "@id": ID.organization } }),
      }),
      breadcrumbNode(page.path, crumbs),
      ...extra,
    ],
  });
}

/** Template for pricing / about / contact: opener, overview, chapters, questions. */
export function SitePageView({ page, band }: { page: SitePage; band?: ReactNode }) {
  const toc = [
    ...page.sections.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    { id: "faq", label: "Review questions" },
  ];
  return (
    <BookShell>
      <PageHero
        crumbs={sitePageCrumbs(page)}
        eyebrow={page.eyebrow}
        title={page.h1}
        answer={page.answer}
        visual={visualFor(page.path)}
        updated={page.dateModified}
        actions={<PrimaryCta />}
      />
      {band}
      <Overview toc={toc} takeaways={page.takeaways} />
      <Chapters sections={page.sections} seed={page.path} />
      <FaqBand faqs={page.faqs} />
      <CtaBand />
    </BookShell>
  );
}
