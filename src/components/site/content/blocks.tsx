import { ArrowRight, ArrowUpRight, Menu, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { catalogGroup, describePath, type CatalogEntry } from "@/content/catalog";
import { HUBS } from "@/content/hubs";
import type { ContentGroup, ContentSection, ContentTable, Faq, Source } from "@/content/types";
import { visualFor, type Visual } from "@/content/visuals";
import { APP_URL, CONTACT_EMAIL, type Crumb } from "@/lib/seo";
import { cn } from "@/lib/utils";

import { figtree, fraunces } from "./fonts";
import "./book.css";

/**
 * Parts of the inner-page "textbook". Everything renders on the server with no
 * client JavaScript: motion and layout live in book.css, so crawlers that skip
 * scripts still get the answer block, every FAQ answer and the full copy.
 * Internal links are plain anchors so pages use cross-document view transitions.
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

/* ---------------------------------------------------------------- chrome */

const MENU: { group: ContentGroup; label: string }[] = [
  { group: "features", label: "Features" },
  { group: "use-cases", label: "Use cases" },
  { group: "compare", label: "Compare" },
  { group: "resources", label: "Resources" },
];

const FOR_SCHOOLS = "/use-cases/schools-and-districts";

const FAQ_ENTRY: CatalogEntry = {
  path: "/faq",
  group: "resources",
  label: "CourseSmith FAQ",
  blurb: "Uploads, lesson plans, tests, pricing and your data",
};

function menuEntries(group: ContentGroup): CatalogEntry[] {
  return group === "resources" ? [...catalogGroup(group), FAQ_ENTRY] : catalogGroup(group);
}

function Masthead() {
  return (
    <header className="masthead">
      <nav aria-label="Main" className="wrap masthead-bar">
        <Link href="/" className="masthead-logo">
          <Image src="/logo.png" alt="CourseSmith home" width={233} height={36} priority />
        </Link>

        <ul className="masthead-menu">
          {MENU.map(({ group, label }) => (
            <li key={group}>
              <a href={HUBS[group].path}>{label}</a>
              <div className="panel">
                <div className="wrap panel-grid">
                  <div>
                    <p className="kicker">{label}</p>
                    <p className="panel-title">{HUBS[group].h1}</p>
                  </div>
                  <ul className="panel-links">
                    {menuEntries(group).map((e) => (
                      <li key={e.path}>
                        <a href={e.path}>
                          <strong>{e.label}</strong>
                          <span>{e.blurb}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <li>
            <a href={FOR_SCHOOLS}>For Schools</a>
          </li>
        </ul>

        <div className="masthead-actions">
          <a href={APP_URL} className="masthead-signin" target="_blank" rel="noopener">
            Sign in
          </a>
          <a href={APP_URL} className="btn btn--solid" target="_blank" rel="noopener">
            Start free
          </a>
          <button
            type="button"
            className="menu-toggle"
            popoverTarget="site-menu"
            aria-label="Open menu"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div id="site-menu" popover="auto" className="menu-sheet">
        <button
          type="button"
          className="menu-toggle menu-close"
          popoverTarget="site-menu"
          popoverTargetAction="hide"
          aria-label="Close menu"
        >
          <X aria-hidden="true" />
        </button>
        {MENU.map(({ group, label }) => (
          <details key={group} name="site-menu">
            <summary>{label}</summary>
            <ul>
              <li>
                <a href={HUBS[group].path}>{HUBS[group].label} overview</a>
              </li>
              {menuEntries(group).map((e) => (
                <li key={e.path}>
                  <a href={e.path}>{e.label}</a>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <a href={FOR_SCHOOLS}>For Schools</a>
        <a href="/pricing">Pricing</a>
        <a href={APP_URL} target="_blank" rel="noopener">
          Sign in
        </a>
      </div>
    </header>
  );
}

function BackCover() {
  const cols = [
    ...MENU.map(({ group, label }) => ({
      title: label,
      href: HUBS[group].path,
      links: catalogGroup(group).map((e) => ({ label: e.label, href: e.path })),
    })),
    {
      title: "Company",
      href: "/about",
      links: [
        { label: "About CourseSmith", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
        { label: "How it works", href: "/#workflow" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="backcover">
      <div className="wrap">
        <div className="backcover-top">
          <div className="backcover-brand">
            <Image src="/logo.png" alt="CourseSmith" width={233} height={36} />
            <p>
              CourseSmith is the AI teaching operating system designed by SuperMIA to give teachers
              their time back.
            </p>
            <address>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <br />
              <a href="https://supermia.ai" target="_blank" rel="noopener">
                supermia.ai
              </a>
              <br />
              <a href="https://supermia.ai/ai-coursesmith/" target="_blank" rel="noopener">
                CourseSmith on SuperMIA
              </a>
              <br />
              2451 W Grapevine Mills Cir #547, Grapevine, TX 76051
            </address>
          </div>
          <nav aria-label="Footer" className="backcover-cols">
            {cols.map((c) => (
              <section key={c.title}>
                <h2>
                  <a href={c.href}>{c.title}</a>
                </h2>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>
        <div className="backcover-legal">
          <ul>
            <li>© {process.env.BUILD_YEAR} CourseSmith by SuperMIA. All rights reserved.</li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
          <p>
            by{" "}
            <a href="https://supermia.ai" target="_blank" rel="noopener">
              SuperMIA
            </a>{" "}
            · Botfinity Inc. | Design &amp; Develop by{" "}
            <a href="https://softqubes.com/" target="_blank" rel="noopener">
              Softqube Technologies LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Skip link, reading progress, masthead, content and back cover for any inner page. */
export function BookShell({ children }: { children: ReactNode }) {
  return (
    <div className={cn("book", fraunces.variable, figtree.variable)}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true" />
      <Masthead />
      <main id="main">{children}</main>
      <BackCover />
    </div>
  );
}

/* --------------------------------------------------------------- buttons */

export function PrimaryCta({ children = "Start free for teachers" }: { children?: ReactNode }) {
  return (
    <a href={APP_URL} target="_blank" rel="noopener" className="btn btn--solid">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export function SecondaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="btn btn--line">
      {children}
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

/* ---------------------------------------------------------------- opener */

/** Sets the closing words apart so they can take the highlighter. */
function accentSplit(text: string, words = 3) {
  const parts = text.split(" ");
  if (parts.length <= words) return { lead: "", accent: text };
  return { lead: parts.slice(0, -words).join(" "), accent: parts.slice(-words).join(" ") };
}

function RunningHead({ crumbs, updated }: { crumbs: Crumb[]; updated?: string }) {
  return (
    <div className="running-head">
      <nav aria-label="Breadcrumb">
        <ol>
          {crumbs.map((c, i) => (
            <li key={c.path}>
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <a href={c.path}>{c.name}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {updated ? (
        <p>
          Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
      ) : null}
    </div>
  );
}

/** Chapter opener. `.answer-block` is a speakable selector. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  answer,
  answerLabel = "Quick answer",
  visual,
  actions,
  updated,
  minutes,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  answer: string;
  answerLabel?: string;
  visual: Visual;
  actions?: ReactNode;
  updated?: string;
  minutes?: number;
}) {
  const { lead, accent } = accentSplit(title);
  return (
    <header className="opener">
      <div className="wrap">
        <RunningHead crumbs={crumbs} {...(updated ? { updated } : {})} />
        <p className="kicker opener-kicker">{eyebrow}</p>
        <h1 className="opener-title">
          {lead ? `${lead} ` : null}
          <em>{accent}</em>
        </h1>
        <div className="opener-body">
          <div>
            <p className="kicker opener-label">{answerLabel}</p>
            <p className="answer-block">{answer}</p>
            {actions ? <div className="opener-actions">{actions}</div> : null}
            {minutes ? (
              <p className="opener-meta">
                <span>{minutes} min read</span>
              </p>
            ) : null}
          </div>
          <figure className="taped">
            <div className="taped-photo">
              <Image
                src={visual.src}
                alt={visual.alt}
                fill
                priority
                sizes="(min-width: 900px) 40vw, 100vw"
              />
            </div>
            <figcaption className="note">{visual.alt}</figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------- overview */

export type TocItem = { id: string; label: string };

/** Table of contents beside the legal-pad summary. `.key-takeaways` is speakable. */
export function Overview({ toc, takeaways }: { toc: TocItem[]; takeaways: string[] }) {
  return (
    <section className="overview" aria-label="Page overview">
      <div className="wrap overview-grid">
        <nav className="toc" aria-labelledby="contents">
          <h2 id="contents">In this guide</h2>
          <ol>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <aside className="pad" aria-labelledby="key-takeaways">
          <h2 id="key-takeaways">Key takeaways</h2>
          <ul className="key-takeaways">
            {takeaways.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function KeyTerm({ term, text }: { term: string; text: string }) {
  return (
    <section className="keyterm" aria-label="Key term">
      <dl className="wrap">
        <dt>Key term: {term}</dt>
        <dd>{text}</dd>
      </dl>
    </section>
  );
}

/* -------------------------------------------------------------- chapters */

function DataTable({ table }: { table: ContentTable }) {
  const ours = table.columns.findIndex((c) => /coursesmith/i.test(c));
  return (
    <div className="table-scroll rise" role="region" aria-label={table.caption} tabIndex={0}>
      <table className="data">
        <caption>{table.caption}</caption>
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th key={c} scope="col" className={i === ours ? "is-ours" : undefined}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={c} className={c === ours ? "is-ours" : undefined}>
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

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const timelineName = (index: number) => `--chapter-${index + 1}`;

/** Text chapter: sticky heading beside the copy, sides alternating. */
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
  const visual = index % 3 === 1 ? visualFor(seed, index + 1) : null;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className={cn("chapter", index % 2 === 1 && "chapter--flip")}
      style={{ viewTimelineName: timelineName(index) } as CSSProperties}
    >
      <div className="wrap chapter-grid">
        <header className="chapter-head">
          <span className="chapter-num" aria-hidden="true" />
          <h2 id={`${id}-h`}>{section.heading}</h2>
        </header>
        <div className="chapter-copy">
          {section.paragraphs.map((p) => (
            <p key={p} className="rise">
              {p}
            </p>
          ))}
          {section.bullets ? <Checks items={section.bullets} /> : null}
          {visual ? (
            <figure className="fig">
              <div className="fig-photo">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(min-width: 1000px) 55vw, 100vw"
                />
              </div>
              <figcaption>{visual.alt}.</figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/** Data chapter: heading and note above a table that runs the full width. */
function TableChapter({ section, index }: { section: ContentSection; index: number }) {
  const id = slugify(section.heading);
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className="chapter chapter--table"
      style={{ viewTimelineName: timelineName(index) } as CSSProperties}
    >
      <div className="wrap">
        <div className="chapter-grid">
          <header>
            <span className="chapter-num" aria-hidden="true" />
            <h2 id={`${id}-h`}>{section.heading}</h2>
          </header>
          <div className="chapter-copy">
            {section.paragraphs.map((p) => (
              <p key={p} className="rise">
                {p}
              </p>
            ))}
            {section.bullets ? <Checks items={section.bullets} /> : null}
          </div>
        </div>
        {section.table ? <DataTable table={section.table} /> : null}
      </div>
    </section>
  );
}

/** Procedure chapter on the chalkboard. Four or more steps pin and travel sideways. */
function StepsChapter({ section, index }: { section: ContentSection; index: number }) {
  const id = slugify(section.heading);
  const steps = section.steps ?? [];
  const name = timelineName(index);
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className={cn("chapter board", steps.length > 3 && "board--pin")}
      style={
        {
          viewTimelineName: name,
          "--timeline": name,
          "--steps": steps.length,
          paddingBlock: 0,
        } as CSSProperties
      }
    >
      <div className="board-frame">
        <div className="wrap board-head">
          <header>
            <span className="chapter-num" aria-hidden="true" />
            <h2 id={`${id}-h`}>{section.heading}</h2>
          </header>
          <div className="board-copy">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <ol className="board-track">
          {steps.map((step) => (
            <li key={step.name} className="board-step">
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Picks the chapter layout from what the section actually contains. */
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

/** Article body with thumb tabs on the page edge that follow the chapter in view. */
export function Chapters({ sections, seed }: { sections: ContentSection[]; seed: string }) {
  return (
    <div
      style={{ timelineScope: sections.map((_, i) => timelineName(i)).join(", ") } as CSSProperties}
    >
      <article>
        {sections.map((section, index) => (
          <Chapter key={section.heading} section={section} index={index} seed={seed} />
        ))}
      </article>
      <nav className="tabs" aria-label="Chapters">
        <ol>
          {sections.map((section, index) => (
            <li key={section.heading}>
              <a
                href={`#${slugify(section.heading)}`}
                title={section.heading}
                aria-label={section.heading}
                style={{ animationTimeline: timelineName(index) } as CSSProperties}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

/* --------------------------------------------------------- closing parts */

/**
 * Native <details>: every answer is in the server HTML, and the text is the exact
 * string fed to FAQPage schema.
 */
export function FaqBand({
  faqs,
  heading = "Review questions",
  id = "faq",
  intro,
  openFirst = true,
  tinted,
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
    <section id={id} aria-labelledby={`${id}-h`} className={cn("review", tinted && "review--tint")}>
      <div className="wrap review-grid">
        <div className="review-side">
          <p className="kicker">Check your understanding</p>
          <h2 id={`${id}-h`}>{heading}</h2>
          {intro ? <p className="review-intro">{intro}</p> : null}
          {mascot ? (
            <div className="review-fox">
              <Image src="/mascot-left.webp" alt="" width={400} height={605} />
              <p className="note">
                Still stuck? Ask at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          ) : null}
        </div>
        <div className="review-list">
          {faqs.map((f, i) => (
            <details key={f.q} className="qa" open={openFirst && i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <span className="qa-mark" aria-hidden="true">
                  <Plus size={16} />
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  return (
    <section id="sources" className="references" aria-labelledby="sources-h">
      <div className="wrap references-grid">
        <h2 id="sources-h">References</h2>
        <ol>
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Index cards pointing to related pages. */
export function RelatedGrid({
  paths,
  heading = "Continue reading",
}: {
  paths: string[];
  heading?: string;
}) {
  const items = paths
    .map((p) => ({ path: p, info: describePath(p) }))
    .filter((x): x is { path: string; info: { label: string; blurb: string } } => !!x.info);
  if (!items.length) return null;
  return (
    <section className="continue" aria-labelledby="continue-h">
      <div className="wrap">
        <h2 id="continue-h">{heading}</h2>
        <ul className="cards">
          {items.map(({ path, info }) => (
            <li key={path}>
              <a href={path} className="index-card">
                <span className="note">Next up</span>
                <strong>{info.label}</strong>
                <span>{info.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Closing call to action: the page's assignment. */
export function CtaBand({
  title = "Turn your next textbook chapter into a full lesson.",
  text = "Upload a textbook PDF and get a lesson plan built for your class length, a test paper with an answer key and assignments you can download as Word files. Free to start, no credit card needed.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="assignment" aria-labelledby="assignment-h">
      <Image src="/mascot.webp" alt="" width={360} height={728} className="assignment-fox" />
      <div className="wrap">
        <p className="note assignment-kicker">Your assignment</p>
        <h2 id="assignment-h">{title}</h2>
        <p>{text}</p>
        <div className="assignment-actions">
          <PrimaryCta />
          <SecondaryCta href="/pricing">See pricing</SecondaryCta>
        </div>
      </div>
    </section>
  );
}
