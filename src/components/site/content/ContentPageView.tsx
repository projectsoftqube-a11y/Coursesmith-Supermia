import { List } from "lucide-react";
import type { ReactNode } from "react";
import { SiteNav } from "../SiteNav";
import { SiteFooter } from "../FinaleSection";
import { HUBS } from "@/content/hubs";
import { readingMinutes } from "@/content/load";
import type { ContentPage } from "@/content/types";
import type { Crumb } from "@/lib/seo";
import {
  AnswerBlock,
  Breadcrumbs,
  Container,
  CtaBand,
  Definition,
  EyebrowPill,
  FaqList,
  HeroBackdrop,
  KeyTakeaways,
  PageMeta,
  PrimaryCta,
  RelatedGrid,
  SecondaryCta,
  SectionView,
  slugify,
  SourceList,
} from "./blocks";

/** Nav + footer around any inner page. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

export function contentCrumbs(page: ContentPage): Crumb[] {
  const hub = HUBS[page.group];
  return [
    { name: "Home", path: "/" },
    { name: hub.label, path: hub.path },
    { name: page.navLabel, path: `/${page.group}/${page.slug}` },
  ];
}

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
      {/* Hero: H1, standalone answer, CTA and takeaways all above the fold */}
      <section className="relative isolate overflow-hidden bg-surface pt-28 pb-14 md:pt-36 md:pb-20">
        <HeroBackdrop />
        <Container>
          <Breadcrumbs crumbs={contentCrumbs(page)} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="motion-safe:animate-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-3 lg:col-span-7">
              <EyebrowPill>{page.eyebrow}</EyebrowPill>
              <h1 className="mt-5 font-display text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl lg:text-[3.4rem]">
                {page.h1}
              </h1>
              <AnswerBlock text={page.answer} />
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryCta />
                <SecondaryCta href={secondary.href}>{secondary.label}</SecondaryCta>
              </div>
              <PageMeta updated={page.dateModified} minutes={readingMinutes(page)} />
            </div>
            <div className="motion-safe:animate-in motion-safe:duration-1000 motion-safe:slide-in-from-bottom-5 motion-safe:fade-in lg:col-span-5 lg:pt-12">
              <KeyTakeaways items={page.takeaways} />
            </div>
          </div>
        </Container>
      </section>

      {/* Body: sticky table of contents beside the article */}
      <section className="relative bg-background py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <aside className="lg:col-span-3">
              <nav
                aria-label="On this page"
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-soft lg:sticky lg:top-28"
              >
                <details className="group lg:hidden">
                  <summary className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                    <List className="h-4 w-4 text-brand" /> On this page
                  </summary>
                  <TocLinks items={toc} />
                </details>
                <div className="hidden lg:block">
                  <p className="flex items-center gap-2 font-display text-sm font-bold text-ink">
                    <List className="h-4 w-4 text-brand" /> On this page
                  </p>
                  <TocLinks items={toc} />
                </div>
              </nav>
            </aside>

            <article className="min-w-0 space-y-12 lg:col-span-9 lg:max-w-3xl">
              <Definition term={term} text={page.definition} />
              {page.sections.map((s) => (
                <SectionView key={s.heading} section={s} />
              ))}
              <FaqList faqs={page.faqs} />
              {page.sources?.length ? <SourceList sources={page.sources} /> : null}
            </article>
          </div>
        </Container>
      </section>

      <RelatedGrid paths={page.related} />
      <CtaBand />
    </PageShell>
  );
}

function TocLinks({ items }: { items: { id: string; label: string }[] }) {
  return (
    <ol className="mt-4 space-y-1 border-l border-border pl-3 text-sm">
      {items.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="-ml-[13px] block border-l-2 border-transparent py-1.5 pl-3 leading-snug text-muted-foreground transition-colors hover:border-brand hover:text-ink"
          >
            {t.label}
          </a>
        </li>
      ))}
    </ol>
  );
}
