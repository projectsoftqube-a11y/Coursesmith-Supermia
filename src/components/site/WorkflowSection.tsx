import { motion } from "motion/react";
import { Eyebrow } from "./Reveal";
import { FileText, Sparkles, Share2, Check, ArrowDown } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Upload Textbook PDF",
    desc: "Upload any textbook PDF, and CourseSmith automatically reads and processes the content.",
    icon: FileText,
    badge: "PDF Import",
    accent: "text-brand",
    chip: "border-brand/30 bg-brand/10 text-sky-700",
    outputs: ["Biology.pdf", "History.pdf", "Physics.pdf"],
  },
  {
    num: "02",
    title: "Extract Chapters & Topics",
    desc: "CourseSmith intelligently extracts chapters, sections, and key topics from your textbook to instantly create a structured course outline.",
    icon: Sparkles,
    badge: "AI Content Extraction",
    accent: "text-indigo-600",
    chip: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600",
    outputs: ["12 Chapters", "85 Topics", "Course Outline"],
  },
  {
    num: "03",
    title: "1-Click Sync & Print",
    desc: "Export finished lesson plans, auto-graded quizzes and assignments straight to your print-ready PDF.",
    icon: Share2,
    badge: "Generated Lesson Plans",
    accent: "text-emerald-500",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700",
    outputs: ["Direct Instructions", "Interactive Activities", "Real-world Examples"],
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="relative overflow-hidden bg-background py-12 md:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute top-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1140px] px-4 xs:px-6 md:px-10">
        {/* Header */}
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Mascot: decorative, sits in the gutter left of the header column and is
              bottom-aligned to it. Anchored to the header rather than the section
              because the step cards below span the full container width. */}
          <motion.img
            src="/mascot-left.png"
            alt=""
            aria-hidden="true"
            width={971}
            height={1469}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute right-full bottom-0 mr-3 hidden h-auto w-[120px] select-none xl:block 2xl:mr-5 2xl:w-[140px]"
          />

          <div className="flex justify-center">
            <Eyebrow>Simple 3-Step Process</Eyebrow>
          </div>

          <h2 className="font-display mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            From Blank Page to Complete Unit.
            <br />
            <span className="font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              In 3 Simple Steps.
            </span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            CourseSmith automates the heavy lifting of curriculum planning, so you can focus on
            inspiring your students.
          </p>
        </div>

        {/* Stepped rows: numerals sit in the margin, content reads left to right */}
        <div className="mt-12 space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <article className="group relative grid grid-cols-1 items-center gap-5 overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift xs:p-6 sm:p-8 lg:grid-cols-12 lg:gap-8">
                  {/* Numeral rail */}
                  <div className="flex items-center gap-3 xs:gap-5 lg:col-span-4">
                    <span
                      className={`font-display text-4xl leading-none font-extrabold tabular-nums xs:text-5xl sm:text-6xl ${step.accent} opacity-25 transition-opacity duration-500 group-hover:opacity-100`}
                    >
                      {step.num}
                    </span>

                    <span className="hidden h-14 w-px bg-border sm:block" />

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${step.chip}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="lg:col-span-5">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-[10px] font-semibold xs:text-[11px] ${step.chip}`}
                    >
                      {step.badge}
                    </span>

                    <h3 className="font-display mt-3 text-xl font-extrabold text-ink sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>

                  {/* Output receipt */}
                  <div className="lg:col-span-3">
                    <div className="rounded-2xl border border-border/70 bg-surface p-3.5 xs:p-4">
                      <p className="text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                        Output
                      </p>
                      <ul className="mt-3 space-y-2">
                        {step.outputs.map((o, oi) => (
                          <motion.li
                            key={o}
                            initial={{ opacity: 0, x: -6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.12 + 0.3 + oi * 0.08 }}
                            className="flex items-center gap-2 text-xs font-medium text-ink"
                          >
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand/15">
                              <Check className="h-2.5 w-2.5 text-brand" />
                            </span>
                            {o}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Flow arrow between rows */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-brand shadow-soft">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
