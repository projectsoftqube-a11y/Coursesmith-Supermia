import type { ReactNode } from "react";
import { catalogGroup, type CatalogEntry } from "@/content/catalog";
import { SITE_UPDATED, type Hub } from "@/content/hubs";
import { PageShell } from "./ContentPageView";
import {
  AnswerBlock,
  Breadcrumbs,
  Container,
  CtaBand,
  EyebrowPill,
  FaqList,
  HeroBackdrop,
  LinkCard,
  PageMeta,
  PrimaryCta,
} from "./blocks";

export function hubCrumbs(hub: Hub) {
  return [
    { name: "Home", path: "/" },
    { name: hub.label, path: hub.path },
  ];
}

/** Pages a hub lists, in display order. Shared with the hub's ItemList schema. */
export function hubPages(hub: Hub): CatalogEntry[] {
  return catalogGroup(hub.group);
}

export function HubView({ hub }: { hub: Hub }) {
  const pages = hubPages(hub);

  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-surface pt-28 pb-14 md:pt-36 md:pb-20">
        <HeroBackdrop />
        <Container>
          <Breadcrumbs crumbs={hubCrumbs(hub)} />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="motion-safe:animate-in motion-safe:duration-700 motion-safe:slide-in-from-bottom-3 lg:col-span-8">
              <EyebrowPill>{hub.eyebrow}</EyebrowPill>
              <h1 className="mt-5 font-display text-[2.125rem] leading-[1.08] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl lg:text-[3.4rem]">
                {hub.h1}
              </h1>
              <AnswerBlock text={hub.answer} label="In short" />
              <PageMeta updated={SITE_UPDATED} />
            </div>
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-3xl bg-primary p-7 text-white shadow-lift">
                <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand/30 blur-[90px]" />
                <p className="relative font-display text-5xl font-extrabold">{pages.length}</p>
                <p className="relative mt-1 text-sm text-white/75">
                  {pages.length === 1 ? "page" : "pages"} in {hub.label}
                </p>
                <p className="relative mt-5 text-sm leading-relaxed text-white/80">{hub.intro}</p>
                <div className="relative mt-6">
                  <PrimaryCta>Start free</PrimaryCta>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 md:py-20">
        <Container className="space-y-14">
          <CardGroup title={hub.listHeading} pages={pages} />
          <div className="max-w-3xl">
            <FaqList faqs={hub.faqs} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </PageShell>
  );
}

function CardGroup({ title, pages }: { title: string; pages: CatalogEntry[] }): ReactNode {
  if (!pages.length) return null;
  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <LinkCard key={p.path} href={p.path} title={p.label} blurb={p.blurb} />
        ))}
      </div>
    </div>
  );
}
