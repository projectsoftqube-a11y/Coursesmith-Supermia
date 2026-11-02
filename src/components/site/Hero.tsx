"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ClipboardList,
  Download,
  FileText,
  GraduationCap,
  NotebookPen,
  Play,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const OUTPUTS = [
  { icon: NotebookPen, title: "Lesson plans", text: "Objectives, delivery steps, homework" },
  { icon: ClipboardList, title: "Test papers", text: "MCQ, short, long, fill-in-the-blank" },
  { icon: BookOpen, title: "Assignments", text: "Set the count and marks per type" },
  { icon: CalendarDays, title: "Academic schedules", text: "Week-by-week term plans" },
];

const SUBJECTS = [
  "Biology",
  "Algebra",
  "World History",
  "Chemistry",
  "English Literature",
  "Geography",
  "Physics",
  "Economics",
  "Computer Science",
  "Civics",
  "Geometry",
  "Earth Science",
];

const LESSON_PARTS = ["Learning objectives", "Step-by-step delivery", "Homework & project idea"];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-24 pb-8 xs:pt-28 md:pt-32 md:pb-10 lg:pt-36"
    >
      {/* Background: static radial glows (no filters, nothing animating) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(40%_45%_at_25%_35%,rgb(14_165_233/0.14),transparent_70%),radial-gradient(40%_50%_at_75%_40%,rgb(99_102_241/0.12),transparent_70%)]" />
        <div className="absolute inset-0 blueprint [mask-image:radial-gradient(80%_80%_at_50%_40%,black_30%,transparent_100%)] opacity-40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 xs:px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left: value proposition */}
          <div className="text-left lg:col-span-6">
            <motion.div {...rise(0)} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand shadow-soft">
                <GraduationCap className="h-4 w-4" />
                Built Exclusively for Teachers
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-success/60 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                By SuperMIA
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-6 font-display text-[1.75rem] leading-[1.12] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl sm:leading-[1.08] md:text-6xl lg:text-[3.6rem] xl:text-[3.9rem]"
            >
              <span className="block">Transform Any Subject Into</span>
              <span className="block bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text pb-1 font-highlight text-transparent">
                Complete Courses in{" "}
                <span className="relative whitespace-nowrap">
                  Seconds.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-3 w-full text-brand/70"
                  >
                    <path
                      d="M2 9 C 60 2, 120 2, 180 6 S 270 10, 298 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      pathLength={1}
                      className="draw-line"
                    />
                  </svg>
                </span>
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Turn raw textbook PDFs into standards-aligned lesson plans, differentiated quizzes and
              assignments, instantly.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="https://app.coursesmith.supermia.ai">
                Start Free for Teachers
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href="#features"
                style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
                className="group cta-fill inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border bg-card/90 px-5 py-3.5 text-sm font-medium text-primary hover:border-brand/40 hover:text-white sm:w-auto sm:px-6"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Play className="h-2.5 w-2.5 fill-current" />
                </span>
                Watch 2-Min Demo
              </a>
            </motion.div>

            {/* What one upload gives you */}
            <motion.ul
              {...rise(0.32)}
              aria-label="What CourseSmith creates"
              className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3"
            >
              {OUTPUTS.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="group flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/80 p-2.5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift sm:items-start sm:gap-3 sm:p-3.5"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-indigo-500/15 text-brand transition-colors duration-300 group-hover:from-brand group-hover:to-indigo-500 group-hover:text-white sm:h-10 sm:w-10">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[13px] leading-tight font-extrabold text-ink sm:text-sm">
                      {title}
                    </span>
                    <span className="mt-0.5 hidden text-xs leading-snug text-muted-foreground sm:block">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: photo with live product cards */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="relative mx-auto max-w-[640px] lg:mr-0 lg:ml-auto"
            >
              {/* Stacked navy plate behind the photo for depth */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-to-br from-primary to-[oklch(0.33_0.12_262)] sm:translate-x-5 sm:translate-y-5"
              >
                <div className="absolute inset-0 rounded-[2rem] blueprint opacity-20" />
              </div>

              <div className="group relative rounded-[2rem] border border-brand/20 bg-card p-2.5 shadow-lift sm:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <Image
                    sizes="(min-width: 1024px) 620px, 100vw"
                    width={1024}
                    height={1024}
                    priority
                    src="/hero-teacher.webp"
                    alt="Teacher empowered by CourseSmith AI"
                    className="h-[340px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 xs:h-[400px] sm:h-[500px] lg:h-[560px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent" />
                </div>
              </div>

              {/* Card 1: upload being mapped */}
              <FloatCard
                delay={0.5}
                drift={0}
                className="top-3 left-3 max-w-[calc(100%-1.5rem)] sm:top-6 sm:left-6 sm:w-[250px] lg:-left-6 xl:-left-10"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rose-500/10 text-rose-500">
                    <FileText className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-ink">Grade 8 Biology.pdf</p>
                    <p className="hidden text-[11px] text-muted-foreground sm:block">
                      PDF or DOCX, up to 40 MB
                    </p>
                  </div>
                </div>
                <div className="mt-3 hidden h-1.5 overflow-hidden rounded-full bg-muted sm:block">
                  <motion.span
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
                    className="block h-full origin-left rounded-full bg-gradient-to-r from-brand to-indigo-500"
                  />
                </div>
                <motion.p
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: reduce ? 0 : 2.9 }}
                  className="mt-0.5 flex items-center gap-1.5 text-[11px] font-semibold text-success sm:mt-2"
                >
                  <Check className="h-3.5 w-3.5" />
                  12 chapters, 85 topics mapped
                </motion.p>
              </FloatCard>

              {/* Card 2: test paper mix */}
              <FloatCard
                delay={0.75}
                drift={1.5}
                className="top-1/2 right-4 hidden w-[250px] -translate-y-1/2 sm:block lg:-right-6 xl:-right-10"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-ink">Test paper</p>
                  <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                    22 questions
                  </span>
                </div>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {["MCQ", "Short", "Long", "Fill-in"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-ink"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11px] font-medium text-muted-foreground">Difficulty mix</p>
                <div className="mt-1.5 flex h-2 gap-1 overflow-hidden rounded-full">
                  {[
                    { w: "40%", c: "bg-emerald-400" },
                    { w: "40%", c: "bg-amber-400" },
                    { w: "20%", c: "bg-rose-400" },
                  ].map((s, i) => (
                    <motion.span
                      key={s.c}
                      initial={{ scaleX: reduce ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      style={{ width: s.w }}
                      transition={{ duration: 0.8, delay: 1.3 + i * 0.15, ease: EASE }}
                      className={`block h-full origin-left rounded-full ${s.c}`}
                    />
                  ))}
                </div>
                <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
                  <span>Easy</span>
                  <span>Medium</span>
                  <span>Hard</span>
                </div>
                <span className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-primary py-1.5 text-[11px] font-semibold text-white">
                  <Download className="h-3.5 w-3.5" />
                  Download as Word
                </span>
              </FloatCard>

              {/* Card 3: lesson plan ready */}
              <FloatCard
                delay={1}
                drift={3}
                className="right-4 bottom-4 left-4 sm:right-auto sm:bottom-6 sm:left-6 sm:w-[290px] lg:-bottom-8 lg:left-8"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-indigo-500 text-white">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-ink">Photosynthesis</p>
                      <p className="text-[11px] text-muted-foreground">Lesson plan · 40 min</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-lg bg-success/10 px-2 py-1 text-[11px] font-semibold text-success">
                    Ready
                  </span>
                </div>
                <ul className="mt-3 hidden space-y-1.5 xs:block">
                  {LESSON_PARTS.map((part, i) => (
                    <motion.li
                      key={part}
                      initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduce ? 0 : 1.6 + i * 0.18, duration: 0.4 }}
                      className="flex items-center gap-2 text-[11px] text-ink"
                    >
                      <span className="grid h-4 w-4 place-items-center rounded-full bg-brand/15 text-brand">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {part}
                    </motion.li>
                  ))}
                </ul>
              </FloatCard>
            </motion.div>
          </div>
        </div>

        {/* Subject strip */}
        <motion.div
          {...rise(0.45)}
          className="mt-14 flex flex-col items-start gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:gap-6 lg:mt-16"
        >
          <p className="shrink-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Works with any textbook
          </p>
          <div className="relative w-full min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max motion-safe:marquee-track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? "true" : undefined}
                  className="flex shrink-0 items-center gap-3 pr-3"
                >
                  {SUBJECTS.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 font-display text-sm font-bold whitespace-nowrap text-ink/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {s}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay,
  drift,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  drift: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`absolute z-10 ${className}`}
    >
      <div
        style={{ animationDelay: `${drift}s` }}
        className="rounded-2xl border border-border/70 bg-white p-3.5 shadow-lift will-change-transform motion-safe:float-slow"
      >
        {children}
      </div>
    </motion.div>
  );
}

/**
 * Primary CTA. On hover a navy panel wipes in from the left edge:
 * the button itself never scales or shifts position.
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
      className={`cta-fill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium ${
        variant === "primary"
          ? "bg-brand text-primary-foreground shadow-soft hover:text-white"
          : "border border-border bg-card text-primary hover:text-white"
      }`}
    >
      {children}
    </a>
  );
}
