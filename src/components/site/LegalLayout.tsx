import { type ReactNode } from "react";
import { visualFor } from "@/content/visuals";
import { cn } from "@/lib/utils";
import { BookShell, CtaBand, PageHero, SecondaryCta } from "./content/blocks";

/**
 * Shared chrome for the legal pages (Terms, Privacy): the inner-page opener, then
 * numbered clauses across the full width.
 */
export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  path,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <BookShell>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
        eyebrow={eyebrow}
        title={title}
        answer={intro}
        answerLabel={`Last updated ${updated}`}
        visual={visualFor(path)}
        actions={<SecondaryCta href="mailto:hello@supermia.ai">hello@supermia.ai</SecondaryCta>}
      />
      <div className="wrap">{children}</div>
      <CtaBand
        title="Still have questions?"
        text="We are happy to walk you through anything on this page. Email hello@supermia.ai, or start free and see how CourseSmith handles your materials."
      />
    </BookShell>
  );
}

/** A numbered policy clause: sticky title beside the policy text. */
export function LegalSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  const id = `clause-${index}`;
  return (
    <section className="clause" aria-labelledby={id}>
      <div>
        <h2 id={id}>{title}</h2>
      </div>
      <div className="clause-body">{children}</div>
    </section>
  );
}

/** Bulleted list with brand-tinted markers. */
export function LegalList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Inline emphasis used for the lead-in of a bullet, e.g. "Account Registration:". */
export function Term({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}
