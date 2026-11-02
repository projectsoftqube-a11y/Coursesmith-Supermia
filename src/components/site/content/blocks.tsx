import { ArrowRight, ArrowUpRight, Check, ChevronDown, GraduationCap, Wand2 } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { describePath } from "@/content/catalog";
import type { ContentSection, ContentTable, Faq, Source } from "@/content/types";
import { visualFor, type Visual } from "@/content/visuals";
import { APP_URL } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { SiteFooter } from "../FinaleSection";
import { Eyebrow, Reveal } from "../Reveal";
import { SiteNav } from "../SiteNav";
import { SmoothScroll } from "../SmoothScroll";

/**
 * Sections for the inner pages, built from the landing page's own language:
 * same nav, footer, container, fonts, Eyebrow, Reveal, cards and CTA styles.
 * All copy is in the server HTML, so the answer block and every FAQ answer reach
 * crawlers that skip JavaScript.
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

const GRADIENT_TEXT =
  "bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text font-highlight text-transparent";

/** Same frame as the landing page's feature section and footer. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1340px] px-4 xs:px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

/** Nav, smooth scrolling and footer, exactly as the landing page uses them. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <SiteNav />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

/** Soft blueprint grid and brand glow behind a section. */
function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 blueprint [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)] opacity-25" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
    </div>
  );
}

/** Keeps the closing words apart so they can take the handwritten accent line. */
function splitHeading(text: string, words = 3) {
  const parts = text.split(" ");
  const accentWords = parts.length > words ? words : Math.ceil(parts.length / 2);
  return {
    lead: parts.slice(0, -accentWords).join(" "),
    accent: parts.slice(-accentWords).join(" "),
  };
}

function TwoToneHeading({ text, className }: { text: string; className?: string }) {
  const { lead, accent } = splitHeading(text);
  return (
    <h2
      className={cn(
        "font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {lead ? `${lead} ` : null}
      <span className={GRADIENT_TEXT}>{accent}</span>
    </h2>
  );
}

function CenteredHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string | undefined;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl pb-8 text-center">
      <div className="flex justify-center">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <TwoToneHeading text={title} className="mt-5" />
      {intro ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{intro}</p> : null}
    </Reveal>
  );
}

/* --------------------------------------------------------------- buttons */

export function PrimaryCta({ children = "Start Free for Teachers" }: { children?: ReactNode }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener"
      className="cta-fill inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-primary-foreground shadow-soft hover:text-white"
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
      className="group cta-fill inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-card/90 px-6 py-3.5 text-sm font-medium text-primary backdrop-blur-md hover:border-brand/40 hover:text-white"
      style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

/* ------------------------------------------------------------------ hero */

/** Two-column opening matching the landing hero. `.answer-block` is a speakable selector. */
export function PageHero({
  eyebrow,
  title,
  answer,
  answerLabel = "Quick answer",
  visual,
  cardTitle,
  actions,
  updated,
  minutes,
}: {
  eyebrow: string;
  title: string;
  answer: string;
  answerLabel?: string;
  visual: Visual;
  cardTitle?: string;
  actions?: ReactNode;
  updated?: string;
  minutes?: number;
}) {
  const { lead, accent } = splitHeading(title);
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-10 xs:pt-28 md:pt-32 md:pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-brand/20 via-sky-400/15 to-indigo-500/20 blur-[110px]" />
        <div className="absolute -top-20 right-0 h-[420px] w-[520px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute inset-0 blueprint [mask-image:radial-gradient(75%_65%_at_50%_40%,black,transparent)] opacity-25" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="text-left lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand shadow-soft backdrop-blur-md">
              <GraduationCap className="h-4 w-4" />
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[1.75rem] leading-[1.12] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem]">
              {lead ? <span className="block">{lead} </span> : null}
              <span className={cn("block", GRADIENT_TEXT)}>{accent}</span>
            </h1>
            <p className="mt-6 eyebrow">{answerLabel}</p>
            <p className="answer-block mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {answer}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>
            ) : null}
            {updated ? (
              <p className="mt-6 text-sm text-muted-foreground">
                Last updated <time dateTime={updated}>{formatDate(updated)}</time>
                {minutes ? ` · ${minutes} min read` : null}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            <div className="group relative rounded-3xl border border-brand/20 bg-card/90 p-3 shadow-lift backdrop-blur-xl sm:p-4">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-soft">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={1024}
                  height={1024}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-[260px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-[380px] md:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                <div className="absolute right-3 bottom-3 left-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/80 bg-card/95 p-3 shadow-soft backdrop-blur-md sm:right-4 sm:bottom-4 sm:left-4 sm:p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Wand2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs leading-none font-semibold text-ink">
                        {cardTitle ?? "CourseSmith"}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Built from your own textbook
                      </p>
                    </div>
                  </div>
                  <span className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
                    Teacher reviewed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- overview */

export type TocItem = { id: string; label: string };

/**
 * Bento overview: navy takeaways panel beside the definition and page contents.
 * `.key-takeaways` is a speakable selector.
 */
export function Overview({
  toc,
  takeaways,
  term,
  definition,
}: {
  toc: TocItem[];
  takeaways: string[];
  term?: string;
  definition?: string;
}) {
  return (
    <section className="relative bg-surface py-12 md:py-16">
      <SectionGlow />
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <aside
              aria-labelledby="key-takeaways"
              className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-primary p-5 text-white shadow-lift xs:p-7 sm:p-9"
            >
              <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" />
              <div className="relative">
                <h2
                  id="key-takeaways"
                  className="font-display text-xl leading-tight font-extrabold !text-white xs:text-2xl sm:text-4xl"
                >
                  Key Takeaways
                </h2>
                <ul className="key-takeaways mt-6 space-y-4">
                  {takeaways.map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/80 sm:text-base"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/25 text-brand-soft">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          {definition ? (
            <Reveal delay={0.08} className="lg:col-span-5">
              <dl className="h-full rounded-3xl border border-brand/30 bg-card p-6 shadow-soft sm:p-7">
                <dt className="eyebrow">{term ? `What is ${term}?` : "Definition"}</dt>
                <dd className="mt-3 font-display text-lg leading-snug font-extrabold text-ink sm:text-xl">
                  {definition}
                </dd>
              </dl>
            </Reveal>
          ) : null}

          <Reveal delay={0.14} className={cn("lg:col-span-5", !definition && "lg:row-span-2")}>
            <nav
              aria-labelledby="on-this-page"
              className="h-full rounded-3xl border border-border/80 bg-card p-6 shadow-soft sm:p-7"
            >
              <h2 id="on-this-page" className="font-display text-lg font-extrabold text-ink">
                On this page
              </h2>
              <ol className="mt-3 space-y-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group/link flex items-start gap-2 rounded-xl py-1.5 text-sm leading-snug text-muted-foreground transition-colors hover:text-brand"
                    >
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand transition-transform duration-300 group-hover/link:translate-x-1" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- chapters */

function DataTable({ table }: { table: ContentTable }) {
  const ours = table.columns.findIndex((c) => /coursesmith/i.test(c));
  return (
    <Reveal className="overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-lift">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="caption-bottom border-t border-border/70 px-5 py-3 text-left text-xs text-muted-foreground">
          {table.caption}
        </caption>
        <thead>
          <tr className="bg-primary text-white">
            {table.columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={cn("px-5 py-4 font-display font-bold", i === ours && "bg-brand")}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-t border-border/70 transition-colors hover:bg-surface">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="sticky left-0 max-w-40 bg-card px-5 py-4 align-top font-semibold text-ink sm:max-w-none lg:static"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={c}
                    className={cn(
                      "px-5 py-4 align-top leading-relaxed text-muted-foreground",
                      c === ours && "bg-brand/10 font-medium text-ink",
                    )}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

const sectionTone = (index: number) => (index % 2 === 0 ? "bg-background" : "bg-surface");

function PhotoCard({ visual }: { visual: Visual }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-lift">
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1024}
        height={1024}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px]"
      />
    </div>
  );
}

/** Navy checklist panel, echoing the landing bento's lead cell. */
function ChecklistCard({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-primary p-6 text-white shadow-lift sm:p-8">
      <div className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-brand/25 blur-[100px]" />
      <ul className="relative space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/25 text-brand-soft">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Copy beside a checklist or photo, sides alternating. */
function SplitChapter({
  section,
  index,
  seed,
}: {
  section: ContentSection;
  index: number;
  seed: string;
}) {
  const id = slugify(section.heading);
  const flip = index % 2 === 1;
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-12 md:py-16", sectionTone(index))}>
      <SectionGlow />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className={cn("lg:col-span-7", flip && "lg:order-last")}>
            <Eyebrow>{`Part ${index + 1}`}</Eyebrow>
            <TwoToneHeading text={section.heading} className="mt-4" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="min-w-0 lg:col-span-5">
            {section.bullets ? (
              <ChecklistCard items={section.bullets} />
            ) : (
              <PhotoCard visual={visualFor(seed, index + 1)} />
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Heading above a table that fills the container. */
function TableChapter({ section, index }: { section: ContentSection; index: number }) {
  const id = slugify(section.heading);
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-12 md:py-16", sectionTone(index))}>
      <SectionGlow />
      <Container>
        <CenteredHeader
          eyebrow={`Part ${index + 1}`}
          title={section.heading}
          intro={section.paragraphs[0]}
        />
        {section.paragraphs.slice(1).map((p) => (
          <p key={p} className="mx-auto mb-6 max-w-3xl text-center text-base text-muted-foreground">
            {p}
          </p>
        ))}
        {section.bullets ? (
          <div className="mb-6">
            <ChecklistCard items={section.bullets} />
          </div>
        ) : null}
        {section.table ? <DataTable table={section.table} /> : null}
      </Container>
    </section>
  );
}

/** Numbered step cards, using the landing page's faded numerals. */
function StepsChapter({ section, index }: { section: ContentSection; index: number }) {
  const id = slugify(section.heading);
  const steps = section.steps ?? [];
  const columns = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-12 md:py-16", sectionTone(index))}>
      <SectionGlow />
      <Container>
        <CenteredHeader
          eyebrow={`Part ${index + 1}`}
          title={section.heading}
          intro={section.paragraphs[0]}
        />
        <ol className={cn("grid gap-4 sm:grid-cols-2", columns)}>
          {steps.map((step, i) => (
            <li key={step.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="group relative flex h-full flex-col rounded-3xl border border-border/80 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                  <span className="font-display text-4xl font-extrabold text-brand/30 transition-colors group-hover:text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-extrabold text-ink">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        {section.paragraphs.slice(1).map((p) => (
          <p key={p} className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
            {p}
          </p>
        ))}
        {section.bullets ? (
          <div className="mt-6">
            <ChecklistCard items={section.bullets} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

/** Picks the section layout from what the content actually holds. */
export function Chapter({
  section,
  index,
  seed,
}: {
  section: ContentSection;
  index: number;
  seed: string;
}) {
  if (section.steps?.length) return <StepsChapter section={section} index={index} />;
  if (section.table) return <TableChapter section={section} index={index} />;
  return <SplitChapter section={section} index={index} seed={seed} />;
}

export function Chapters({ sections, seed }: { sections: ContentSection[]; seed: string }) {
  return (
    <article>
      {sections.map((section, index) => (
        <Chapter key={section.heading} section={section} index={index} seed={seed} />
      ))}
    </article>
  );
}

/* --------------------------------------------------------- closing parts */

/** Landing-style accordion on native <details>; answers stay in the server HTML. */
export function FaqBand({
  faqs,
  heading = "Frequently Asked Questions",
  id = "faq",
  intro,
  openFirst = true,
  tinted = true,
  mascot = true,
}: {
  faqs: Faq[];
  heading?: string;
  id?: string;
  intro?: string;
  openFirst?: boolean;
  tinted?: boolean;
  mascot?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden border-b border-border/50 py-12 md:py-16",
        tinted ? "bg-surface" : "bg-background",
      )}
    >
      <SectionGlow />
      {mascot ? (
        <Image
          src="/mascot.webp"
          alt=""
          width={360}
          height={728}
          className="pointer-events-none absolute right-4 bottom-0 hidden h-auto w-[140px] select-none xl:block 2xl:right-10 2xl:w-[168px]"
        />
      ) : null}
      <div className="mx-auto w-full max-w-[1100px] px-4 xs:px-6 md:px-10">
        <CenteredHeader eyebrow="Got Questions?" title={heading} intro={intro} />
        <div className="mx-auto mt-3 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={openFirst && i === 0}
              className="group overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 text-left xs:p-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans text-sm font-medium tracking-normal text-ink transition-colors group-hover:text-brand">
                  {f.q}
                </h3>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-brand" />
              </summary>
              <p className="border-t border-border/40 px-4 pt-3 pb-4 text-xs leading-relaxed text-muted-foreground xs:px-5 xs:pb-5 sm:text-sm">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section id="sources" className="bg-background py-10">
      <Container>
        <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-extrabold text-ink">Sources</h2>
          <ol className="mt-3 grid list-decimal gap-x-10 gap-y-2 pl-5 text-sm sm:grid-cols-2">
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
        </div>
      </Container>
    </section>
  );
}

/** Photo-topped cards for the next pages to read. */
export function RelatedGrid({
  paths,
  heading = "Keep Exploring CourseSmith Guides",
}: {
  paths: string[];
  heading?: string;
}) {
  const items = paths
    .map((p) => ({ path: p, info: describePath(p) }))
    .filter((x): x is { path: string; info: { label: string; blurb: string } } => !!x.info);
  if (!items.length) return null;
  return (
    <section className="relative bg-surface py-12 md:py-16">
      <SectionGlow />
      <Container>
        <CenteredHeader eyebrow="Read Next" title={heading} />
        <ul
          className={cn(
            "grid gap-4 sm:grid-cols-2",
            items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {items.map(({ path, info }, i) => (
            <li key={path}>
              <Reveal delay={i * 0.06} className="h-full">
                <a
                  href={path}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
                >
                  <span className="block overflow-hidden">
                    <Image
                      src={visualFor(paths[0] ?? path, i).src}
                      alt=""
                      width={1024}
                      height={1024}
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-display text-lg leading-tight font-extrabold text-ink transition-colors group-hover:text-brand">
                      {info.label}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {info.blurb}
                    </span>
                    <ArrowRight className="mt-4 h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Closing card in the style of the landing finale. */
export function CtaBand({
  title = "Turn your next textbook chapter into a full lesson.",
  text = "Upload a textbook PDF and get a lesson plan built for your class length, a test paper with an answer key and assignments you can download as Word files. Free to start, no credit card needed.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-24 -rotate-6 zigzag [mask-image:linear-gradient(115deg,black_0%,black_26%,transparent_60%)] opacity-80" />
        <div className="absolute inset-0 blueprint [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)] opacity-25" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-6 shadow-lift backdrop-blur-xl sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-5 text-center sm:text-left lg:col-span-7">
              <div className="flex justify-center sm:justify-start">
                <Eyebrow>Transform Your Teaching</Eyebrow>
              </div>
              <TwoToneHeading text={title} />
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">{text}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start">
                <PrimaryCta>Start Building Lessons Free</PrimaryCta>
                <SecondaryCta href="/pricing">See pricing</SecondaryCta>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-soft">
                <Image
                  src="/finale-teacher.webp"
                  alt="Teacher holding a tablet in a bright classroom while students work in groups"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-[280px] w-full object-cover sm:h-[340px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
