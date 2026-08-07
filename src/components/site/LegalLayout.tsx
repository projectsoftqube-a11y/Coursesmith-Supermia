import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, FileText, Mail } from "lucide-react";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./FinaleSection";

/**
 * Shared chrome for the legal pages (Terms, Privacy). Keeps the nav and footer
 * identical to the landing page and wraps the policy copy in a readable column.
 */
export function LegalLayout({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main>
      <SiteNav />

      {/* Header */}
      <section className="relative overflow-hidden bg-surface pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="zigzag absolute -inset-24 -rotate-6 opacity-60 [mask-image:linear-gradient(115deg,black_0%,black_22%,transparent_55%)]" />
          <div className="blueprint absolute inset-0 opacity-25 [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)]" />
          <div className="absolute -top-40 left-1/2 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
        </div>

        <div className="mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Own row: the back link must not share a line with the eyebrow. */}
            <div>
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to CourseSmith
              </Link>
            </div>

            <div className="mt-8">
              <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 shadow-soft">
                <FileText className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>

            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft">
              <CalendarDays className="h-3.5 w-3.5 text-brand-soft" />
              Last updated: {updated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="relative bg-background py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl space-y-8"
          >
            {children}

            {/* Contact card */}
            <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-6 text-center shadow-soft sm:p-10">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="blueprint absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]" />
              </div>

              <h2 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                Still have questions?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                We are happy to walk you through anything on this page.
              </p>
              <a
                href="mailto:hello@supermia.ai"
                className="cta-fill mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:text-white sm:px-6"
                style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
              >
                <Mail className="h-4 w-4" />
                hello@supermia.ai
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/** A numbered policy section rendered as a card. */
export function LegalSection({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8">
      <div className="flex items-start gap-4">
        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 font-display text-sm font-extrabold text-brand">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            {title}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bulleted list with brand-tinted markers. */
export function LegalList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
