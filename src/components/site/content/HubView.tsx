import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { catalogGroup, type CatalogEntry } from "@/content/catalog";
import { SITE_UPDATED, type Hub } from "@/content/hubs";
import { visualFor } from "@/content/visuals";
import { cn } from "@/lib/utils";
import { Eyebrow, Reveal } from "../Reveal";
import { Container, CtaBand, FaqBand, PageHero, PageShell, PrimaryCta } from "./blocks";

/** Pages a hub lists, in display order. Shared with the hub's ItemList schema. */
export function hubPages(hub: Hub): CatalogEntry[] {
  return catalogGroup(hub.group);
}

/** Bento spans: a navy lead cell, two beside it, then rows that always close evenly. */
function cellSpan(index: number, total: number) {
  if (index === 0) return "lg:col-span-7 lg:row-span-2";
  if (index <= 2) return "lg:col-span-5";
  const rest = total - 3;
  const position = index - 3;
  const lastRow = rest % 3;
  if (lastRow === 1 && position === rest - 1) return "lg:col-span-12";
  if (lastRow === 2 && position >= rest - 2) return "lg:col-span-6";
  return "lg:col-span-4";
}

export function HubView({ hub }: { hub: Hub }) {
  const pages = hubPages(hub);
  const [lead, ...others] = pages;

  return (
    <PageShell>
      <PageHero
        eyebrow={hub.eyebrow}
        title={hub.h1}
        answer={hub.answer}
        answerLabel="In short"
        visual={visualFor(hub.path)}
        cardTitle={hub.label}
        updated={SITE_UPDATED}
        actions={<PrimaryCta />}
      />

      <section className="relative bg-surface py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 blueprint [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)] opacity-25" />
          <div className="absolute top-1/2 left-1/2 -z-10 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />
        </div>
        <Container>
          <Reveal className="mx-auto max-w-3xl pb-8 text-center">
            <div className="flex justify-center">
              <Eyebrow>{hub.eyebrow}</Eyebrow>
            </div>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              {hub.listHeading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{hub.intro}</p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {lead ? (
              <li className={cn("sm:col-span-2", cellSpan(0, pages.length))}>
                <Reveal className="h-full">
                  <a
                    href={lead.path}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-primary text-white shadow-lift"
                  >
                    <span className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" />
                    <span className="relative block p-5 xs:p-7 sm:p-9">
                      <h3 className="font-display text-xl leading-tight font-extrabold text-white xs:text-2xl sm:text-4xl">
                        {lead.label}
                      </h3>
                      <span className="mt-3 block max-w-lg text-sm leading-relaxed text-white/70">
                        {lead.blurb}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-soft">
                        Open {lead.label}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </span>
                    <span className="relative mt-auto block overflow-hidden px-5 xs:px-7 sm:px-9">
                      <Image
                        src={visualFor(lead.path).src}
                        alt=""
                        width={1024}
                        height={1024}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="h-56 w-full rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                      />
                    </span>
                  </a>
                </Reveal>
              </li>
            ) : null}
            {others.map((p, i) => (
              <li key={p.path} className={cellSpan(i + 1, pages.length)}>
                <Reveal delay={i * 0.04} className="h-full">
                  <a
                    href={p.path}
                    className="group flex h-full flex-col rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
                  >
                    <h3 className="font-display text-xl leading-tight font-extrabold text-ink transition-colors group-hover:text-brand">
                      {p.label}
                    </h3>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.blurb}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Open {p.label}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqBand faqs={hub.faqs} tinted={false} />
      <CtaBand />
    </PageShell>
  );
}
