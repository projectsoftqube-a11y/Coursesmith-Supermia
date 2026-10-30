import type { ReactNode } from "react";
import type { SitePage } from "@/content/site-pages";
import { ID, breadcrumbNode, pageHead, webPageNode, type Crumb } from "@/lib/seo";
import { PageShell } from "./ContentPageView";
import {
  AnswerBlock,
  Breadcrumbs,
  Container,
  CtaBand,
  EyebrowPill,
  FaqList,
  HeroBackdrop,
  KeyTakeaways,
  PageMeta,
  PrimaryCta,
  SectionView,
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

/** Template for pricing / about / contact: hero, optional feature band, article, FAQ. */
export function SitePageView({ page, band }: { page: SitePage; band?: ReactNode }) {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-surface pt-28 pb-14 md:pt-36 md:pb-20">
        <HeroBackdrop />
        <Container>
          <Breadcrumbs crumbs={sitePageCrumbs(page)} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="motion-safe:animate-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-3 lg:col-span-7">
              <EyebrowPill>{page.eyebrow}</EyebrowPill>
              <h1 className="mt-5 font-display text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl lg:text-[3.4rem]">
                {page.h1}
              </h1>
              <AnswerBlock text={page.answer} />
              <div className="mt-7">
                <PrimaryCta />
              </div>
              <PageMeta updated={page.dateModified} />
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <KeyTakeaways items={page.takeaways} />
            </div>
          </div>
        </Container>
      </section>

      {band}

      <section className="bg-background py-14 md:py-20">
        <Container>
          <article className="mx-auto max-w-3xl space-y-12">
            {page.sections.map((s) => (
              <SectionView key={s.heading} section={s} />
            ))}
            <FaqList faqs={page.faqs} />
          </article>
        </Container>
      </section>

      <CtaBand />
    </PageShell>
  );
}
