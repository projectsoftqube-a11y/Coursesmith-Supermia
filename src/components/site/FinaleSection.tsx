import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Mail, Globe, MapPin } from "lucide-react";
import { Eyebrow } from "./Reveal";

export function FinaleSection() {
  return (
    <section id="start" className="relative overflow-hidden bg-surface py-10 md:py-14">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="zigzag absolute -inset-24 -rotate-6 opacity-80 [mask-image:linear-gradient(115deg,black_0%,black_26%,transparent_60%)]" />
        <div className="zigzag absolute -inset-24 rotate-3 opacity-55 [mask-image:linear-gradient(295deg,black_0%,black_20%,transparent_55%)]" />
        <div className="blueprint absolute inset-0 opacity-25 [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-6 sm:p-10 shadow-lift backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <Eyebrow>Transform Your Teaching</Eyebrow>
              </div>

              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.1]">
                Reclaim Your Sunday Evenings. <br />
                <span className="font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                  Start Building Lessons in Seconds.
                </span>
              </h2>

              <p className="text-base text-muted-foreground sm:text-lg max-w-xl">
                Upload one textbook PDF and get a full lesson plan, a quiz with answer keys and
                ready-to-print assignments back in minutes.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                <a
                  href="https://app.coursesmith.supermia.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cta-fill inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-sm font-medium text-white shadow-glow sm:w-auto sm:px-7"
                  style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
                >
                  <span>Start Building Lessons Free</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Storytelling Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-soft">
                <img
                  src="/finale-teacher.png"
                  alt="Happy teacher using CourseSmith AI copilot"
                  className="h-[300px] sm:h-[360px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-brand/30 bg-card/95 p-3.5 shadow-soft backdrop-blur-md">
                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs font-bold text-ink">
                    <span className="flex items-center gap-1.5 text-emerald-500">
                      <CheckCircle2 className="h-4 w-4" /> Full Unit in Minutes
                    </span>
                    <span className="text-brand text-[11px]">From One PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Only sections that actually exist on the page: every href resolves to a real anchor.
// Anchors are prefixed with "/" so they also resolve from the legal pages.
const FOOTER_COLS = [
  {
    t: "Explore",
    l: [
      { label: "Why CourseSmith", href: "/#problem" },
      { label: "How it works", href: "/#workflow" },
    ],
  },
  {
    t: "Try it",
    l: [
      { label: "Build a lesson", href: "/#features" },
      { label: "Make a quiz", href: "/#features" },
      { label: "Questions", href: "/#faq" },
      { label: "Download brochure", href: "/CourseSmith.pdf" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Ambient brand lighting + hand-drawn zigzag, matching the finale above */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="zigzag absolute -inset-24 -rotate-6 opacity-25 [mask-image:linear-gradient(115deg,black_0%,black_24%,transparent_58%)]" />
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/20 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1340px] px-4 xs:px-6 md:px-10">
        {/* Newsletter / CTA band */}
        <div className="grid gap-6 border-b border-white/10 py-10 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Built for teachers,{" "}
              <span className="font-highlight bg-gradient-to-r from-brand-soft via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                ready for your first lesson.
              </span>
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              Every lesson, quiz and assignment comes classroom-ready. No setup and no credit card
              needed.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="https://app.coursesmith.supermia.ai"
                target="_blank"
                rel="noreferrer noopener"
                className="cta-fill inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:text-white sm:w-auto sm:px-6"
                style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
              >
                Start teaching free
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {/* <a
                href="mailto:hello@supermia.ai"
                className="cta-fill inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white/85 hover:border-brand/60 hover:text-white sm:w-auto sm:px-6"
                style={{ ["--cta-fill" as string]: "var(--color-brand)" }}
              >
                <Mail className="h-4 w-4" />
                Talk to our team
              </a> */}
            </div>
          </div>
        </div>

        {/* Brand + link columns */}
        <div className="grid gap-10 py-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <img
              src="/logo.png"
              alt="CourseSmith"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              CourseSmith is the AI teaching operating system designed by SuperMIA to give teachers
              their time back.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FOOTER_COLS.map((c) => (
              <div key={c.t}>
                <p className="text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                  {c.t}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.l.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-brand-soft"
                      >
                        <span className="h-px w-0 bg-brand-soft transition-all duration-300 group-hover:w-3" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Get in touch */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.16em] text-white uppercase">
                Get in touch
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:hello@supermia.ai"
                    className="flex items-start gap-2.5 text-sm break-words text-white/70 transition-colors hover:text-brand-soft"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                    hello@supermia.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://supermia.ai"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-2.5 text-sm break-words text-white/70 transition-colors hover:text-brand-soft"
                  >
                    <Globe className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                    supermia.ai
                  </a>
                </li>
                <li>
                  <a
                    href="https://supermia.ai/ai-coursesmith/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-start gap-2.5 text-sm break-words text-white/70 transition-colors hover:text-brand-soft"
                  >
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                    About CourseSmith on SuperMIA
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
                  2451 W Grapevine Mills Cir #547, Grapevine, TX 76051
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/65">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p>© {new Date().getFullYear()} CourseSmith by SuperMIA. All rights reserved.</p>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <Link
              to="/privacy"
              className="transition-colors hover:text-brand-soft hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" />
            <Link
              to="/terms"
              className="transition-colors hover:text-brand-soft hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
          <p>
            by{" "}
            <a
              href="https://supermia.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-white transition-colors hover:text-brand-soft"
            >
              SuperMIA
            </a>{" "}
            · <span className="font-semibold text-white">Botfinity Inc.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
