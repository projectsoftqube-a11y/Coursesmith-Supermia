import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { ALL_FAQS, FAQ_GROUPS, FAQ_PAGE } from "@/content/faq";
import { PageShell } from "@/components/site/content/ContentPageView";
import {
  AnswerBlock,
  Breadcrumbs,
  Container,
  CtaBand,
  EyebrowPill,
  FaqList,
  HeroBackdrop,
  PageMeta,
  PrimaryCta,
  SecondaryCta,
} from "@/components/site/content/blocks";
import { breadcrumbNode, pageHead, webPageNode } from "@/lib/seo";

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: FAQ_PAGE.navLabel, path: FAQ_PAGE.path },
];

const head = pageHead({
  path: FAQ_PAGE.path,
  title: FAQ_PAGE.metaTitle,
  description: FAQ_PAGE.metaDescription,
  graph: [
    webPageNode({
      path: FAQ_PAGE.path,
      title: FAQ_PAGE.metaTitle,
      description: FAQ_PAGE.metaDescription,
      crumbs: CRUMBS,
      dateModified: FAQ_PAGE.dateModified,
      faqs: ALL_FAQS,
    }),
    breadcrumbNode(FAQ_PAGE.path, CRUMBS),
  ],
});

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <FaqPage />
    </>
  );
}

function FaqPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-surface pt-28 pb-14 md:pt-36 md:pb-20">
        <HeroBackdrop />
        <Container>
          <Breadcrumbs crumbs={CRUMBS} />
          <div className="mt-8 max-w-3xl motion-safe:animate-in motion-safe:duration-700 motion-safe:fade-in motion-safe:slide-in-from-bottom-3">
            <EyebrowPill>{FAQ_PAGE.eyebrow}</EyebrowPill>
            <h1 className="mt-5 font-display text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl lg:text-[3.4rem]">
              {FAQ_PAGE.h1}
            </h1>
            <AnswerBlock text={FAQ_PAGE.answer} />
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryCta />
              <SecondaryCta href="mailto:hello@supermia.ai?subject=CourseSmith%20question">
                Email us your question
              </SecondaryCta>
            </div>
            <PageMeta updated={FAQ_PAGE.dateModified} />
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-3">
              <nav
                aria-label="FAQ topics"
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-soft lg:sticky lg:top-28"
              >
                <p className="font-display text-sm font-bold text-ink">Topics</p>
                <ol className="mt-3 space-y-1 text-sm">
                  {FAQ_GROUPS.map((g) => (
                    <li key={g.id}>
                      <a
                        href={`#${g.id}`}
                        className="block rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-ink"
                      >
                        {g.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
            <div className="min-w-0 space-y-14 lg:col-span-9 lg:max-w-3xl">
              {FAQ_GROUPS.map((g, i) => (
                <FaqList
                  key={g.id}
                  id={g.id}
                  heading={g.title}
                  intro={g.intro}
                  faqs={g.faqs}
                  openFirst={i === 0}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Try it on one chapter."
        text="Upload your textbook, pick the chapter you teach next and see the lesson plan, test and answer key CourseSmith drafts. You review everything before it reaches your class."
      />
    </PageShell>
  );
}
