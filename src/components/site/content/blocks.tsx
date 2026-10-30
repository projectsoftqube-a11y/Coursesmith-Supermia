import { ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3 } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { APP_URL, type Crumb } from "@/lib/seo";
import { describePath } from "@/content/catalog";
import type { ContentSection, ContentTable, Faq, Source } from "@/content/types";

/**
 * Building blocks shared by every inner page. All content renders in the server
 * HTML (no conditional mounting), so crawlers that skip JavaScript still see the
 * answer block, every FAQ answer and the full body copy.
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Hero background: zigzag crayon strokes, blueprint grid and a brand glow. */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -inset-24 -rotate-6 zigzag [mask-image:linear-gradient(115deg,black_0%,black_14%,transparent_42%)] opacity-35" />
      <div className="absolute inset-0 blueprint [mask-image:radial-gradient(75%_65%_at_50%_40%,black,transparent)] opacity-30" />
      <div className="absolute -top-40 left-1/2 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[320px] w-[420px] rounded-full bg-indigo-400/10 blur-[120px]" />
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted-foreground sm:text-sm">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              ) : (
                <>
                  <a href={c.path} className="transition-colors hover:text-brand">
                    {c.name}
                  </a>
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function EyebrowPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 eyebrow text-brand-strong! shadow-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

/** The 40–60 word standalone answer. `.answer-block` is a speakable selector. */
export function AnswerBlock({ text, label = "Quick answer" }: { text: string; label?: string }) {
  return (
    <div className="relative mt-7 overflow-hidden rounded-2xl border border-brand/25 bg-card/95 p-5 shadow-soft backdrop-blur sm:p-6">
      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand via-sky-500 to-indigo-600" />
      <p className="eyebrow text-brand-strong!">{label}</p>
      <p className="answer-block mt-2 text-base leading-relaxed text-ink sm:text-[1.0625rem]">
        {text}
      </p>
    </div>
  );
}

export function PrimaryCta({ children = "Start free for teachers" }: { children?: ReactNode }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener"
      className="cta-fill inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:text-white"
      style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export function SecondaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="cta-fill inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-primary hover:border-brand/40 hover:text-white"
      style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export function PageMeta({ updated, minutes }: { updated: string; minutes?: number }) {
  return (
    <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-4 w-4 text-brand" />
        Last updated <time dateTime={updated}>{formatDate(updated)}</time>
      </span>
      {minutes ? (
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-4 w-4 text-brand" />
          {minutes} min read
        </span>
      ) : null}
    </p>
  );
}

/** Navy card of standalone takeaways. `.key-takeaways` is a speakable selector. */
export function KeyTakeaways({
  items,
  title = "Key takeaways",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <aside
      aria-labelledby="key-takeaways"
      className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-lift sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-24 -rotate-6 zigzag [mask-image:linear-gradient(200deg,black_0%,black_30%,transparent_70%)] opacity-20" />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/30 blur-[90px]" />
      </div>
      <div className="relative">
        <h2
          id="key-takeaways"
          className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl"
        >
          {title}
        </h2>
        <ul className="key-takeaways mt-5 space-y-4">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/25 text-brand-soft">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function Definition({ term, text }: { term: string; text: string }) {
  return (
    <dl className="rounded-2xl border border-border/80 bg-surface p-5 sm:p-6">
      <dt className="eyebrow text-brand-strong!">Definition: {term}</dt>
      <dd className="mt-2 text-base leading-relaxed text-ink">{text}</dd>
    </dl>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepList({ steps }: { steps: { name: string; text: string }[] }) {
  return (
    <ol className="relative space-y-5 border-l-2 border-dashed border-brand/30 pl-8">
      {steps.map((s, i) => (
        <li key={s.name} className="relative">
          <span className="absolute top-0 -left-[2.95rem] grid h-9 w-9 place-items-center rounded-xl bg-brand font-display text-sm font-extrabold text-white shadow-glow">
            {i + 1}
          </span>
          <h3 className="font-display text-lg font-extrabold text-ink">{s.name}</h3>
          <p className="mt-1.5">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** A genuine <table>: answer engines parse these far better than styled divs. */
export function DataTable({ table }: { table: ContentTable }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-soft">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <caption className="caption-bottom border-t border-border/70 px-5 py-3 text-left text-xs text-muted-foreground">
          {table.caption}
        </caption>
        <thead>
          <tr className="bg-primary text-white">
            {table.columns.map((c) => (
              <th key={c} scope="col" className="px-5 py-3.5 font-display font-bold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-t border-border/70 even:bg-surface/70">
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row" className="px-5 py-3.5 align-top font-semibold text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={ci} className="px-5 py-3.5 align-top leading-relaxed">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SectionView({ section }: { section: ContentSection }) {
  return (
    <section id={slugify(section.heading)} className="scroll-mt-28">
      <h2 className="font-display text-2xl leading-tight font-extrabold tracking-tight text-ink sm:text-[1.875rem]">
        {section.heading}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
        {section.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {section.bullets ? <BulletList items={section.bullets} /> : null}
        {section.steps ? (
          <div className="pt-2">
            <StepList steps={section.steps} />
          </div>
        ) : null}
        {section.table ? (
          <div className="pt-2">
            <DataTable table={section.table} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

/**
 * FAQ list on native <details>: every answer is in the server HTML and the text
 * is the exact string fed to FAQPage schema.
 */
export function FaqList({
  faqs,
  heading = "Frequently asked questions",
  id = "faq",
  intro,
  openFirst = true,
}: {
  faqs: Faq[];
  heading?: string;
  id?: string;
  intro?: string;
  openFirst?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.875rem]">
        {heading}
      </h2>
      {intro ? <p className="mt-2 text-base text-muted-foreground">{intro}</p> : null}
      <div className="mt-5 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={openFirst && i === 0}
            className="group rounded-2xl border border-border/80 bg-card shadow-soft transition-shadow open:shadow-lift"
          >
            <summary className="flex list-none items-center justify-between gap-4 p-5 text-left font-display text-base font-bold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-bold">{f.q}</h3>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-brand" />
            </summary>
            <p className="border-t border-border/50 px-5 pt-4 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section
      id="sources"
      className="scroll-mt-28 rounded-2xl border border-border/80 bg-surface p-5 sm:p-6"
    >
      <h2 className="font-display text-lg font-extrabold text-ink">Sources</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener"
              className="break-words text-primary underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function LinkCard({
  href,
  title,
  blurb,
  badge,
  headingLevel = "h3",
}: {
  href: string;
  title: string;
  blurb: string;
  badge?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <a
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
    >
      <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/15" />
      {badge ? (
        <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-indigo-600 font-display text-sm font-extrabold text-white shadow-glow">
          {badge}
        </span>
      ) : null}
      <Heading className="font-display text-lg leading-snug font-extrabold text-ink transition-colors group-hover:text-brand">
        {title}
      </Heading>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong">
        Open {title}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

export function RelatedGrid({
  paths,
  heading = "Keep exploring",
}: {
  paths: string[];
  heading?: string;
}) {
  const items = paths
    .map((p) => ({ path: p, info: describePath(p) }))
    .filter((x): x is { path: string; info: { label: string; blurb: string } } => !!x.info);
  if (!items.length) return null;
  return (
    <section className="relative bg-surface py-14 md:py-16">
      <Container>
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          {heading}
        </h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ path, info }) => (
            <LinkCard key={path} href={path} title={info.label} blurb={info.blurb} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Closing conversion band, styled like the landing page finale. */
export function CtaBand({
  title = "Turn your next textbook chapter into a full lesson.",
  text = "Upload a textbook PDF and get a lesson plan built for your class length, a test paper with an answer key and assignments you can download as Word files. Free to start, no credit card needed.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background py-14 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-7 shadow-lift sm:p-12">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -inset-24 rotate-3 zigzag [mask-image:linear-gradient(295deg,black_0%,black_22%,transparent_58%)] opacity-50" />
            <div className="absolute inset-0 blueprint [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)] opacity-25" />
          </div>
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow text-brand-strong!">Start free</p>
              <h2 className="mt-3 font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <PrimaryCta />
              <SecondaryCta href="/pricing">See pricing</SecondaryCta>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
