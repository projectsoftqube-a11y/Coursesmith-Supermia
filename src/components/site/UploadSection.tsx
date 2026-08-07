import { motion } from "motion/react";
import { Eyebrow } from "./Reveal";
import { BookOpen, HelpCircle, Award, Share2, Zap, CheckCircle2 } from "lucide-react";

const STACKED_FEATURES = [
  {
    id: "feature-1",
    number: "01",
    title: "Instant 45-Min Lesson Plan Generator",
    subtitle: "Complete Units from Any Document",
    desc: "Transforms textbook chapters into 45-minute lesson plans with warm-ups, interactive activities, homework assignments, and project works.",
    image: "/section3-output.png",
    icon: BookOpen,
    accent: "text-brand border-brand/30 bg-brand/10",
    badges: ["Direct Instructions", "Homework Assignments", "Project Work"],
  },
  {
    id: "feature-2",
    number: "02",
    title: "Differentiated Quiz & Assessment Builder",
    subtitle: "Auto-Leveled Quizzes with Answer Keys",
    desc: "Generates quizzes at any length you choose, each with detailed answer keys and explanations.",
    image: "/section3-input.png",
    icon: HelpCircle,
    accent: "text-indigo-500 border-indigo-500/30 bg-indigo-500/10",
    badges: ["Multiple Choice", "Short Answer", "Long Answer"],
  },
  {
    id: "feature-3",
    number: "03",
    title: "24/7 AI Teaching Assistant",
    subtitle: "Transparent Criteria for Every Assignment",
    desc: "Ask questions, brainstorm activities, explain concepts, and generate classroom resources in seconds.",
    image: "/teacher-after.png",
    icon: Award,
    accent: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    badges: ["Persona Based", "Quick Answers", "24/7 Availability"],
  },
  {
    id: "feature-4",
    number: "04",
    title: "AI Knowledge & Curriculum Alignment",
    subtitle: "Zero Knowledge Gaps Across Your Syllabus",
    desc: "Connects topics across your entire syllabus into a live curriculum based on educational standards",
    image: "/teacher-before.png",
    icon: Zap,
    accent: "text-cyan-500 border-cyan-500/30 bg-cyan-500/10",
    badges: ["Chapters", "Topics"],
  },
  {
    id: "feature-5",
    number: "05",
    title: "1-Click LMS & PDF Multi-Export",
    subtitle: "Seamless Sync to Canvas, Google & Print",
    desc: "Export and download your generated lesson plans and quizzes as clean, print-ready documents.",
    image: "/section3-output.png",
    icon: Share2,
    accent: "text-purple-500 border-purple-500/30 bg-purple-500/10",
    badges: ["Docs", "PDF Worksheets"],
  },
];

export function UploadSection() {
  // Tuple assertion: STACKED_FEATURES is a fixed five-item literal, so each cell is defined.
  const [f1, f2, f3, f4, f5] = STACKED_FEATURES as [Feature, Feature, Feature, Feature, Feature];

  return (
    <section id="features" className="relative bg-surface py-12 md:py-16">
      {/* Background Decorator Lights */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-25 [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />
      </div>

      <div className="mx-auto w-full max-w-[1340px] px-4 xs:px-6 md:px-10">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-3xl pb-8 text-center">
          <div className="flex justify-center">
            <Eyebrow>Complete Feature Suite</Eyebrow>
          </div>

          <h2 className="font-display mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Everything Teachers Need. <br />
            <span className="font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              One Complete Platform.
            </span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Five tools that turn any source material into a finished, standards-aligned unit.
          </p>
        </div>

        {/* Bento grid: asymmetric cells sized to the weight of each feature */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* 01: hero cell: dark, image-led, spans the left half across two rows */}
          <BentoCell className="md:col-span-6 lg:col-span-7 lg:row-span-2" delay={0}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-primary text-white shadow-lift">
              <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" />

              <div className="relative p-5 xs:p-7 sm:p-9">
                <CellHead num={f1.number} icon={f1.icon} tone="dark" />
                <h3 className="font-display mt-5 text-xl leading-tight font-extrabold text-white xs:text-2xl sm:text-4xl">
                  {f1.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/70">{f1.desc}</p>
                <Badges items={f1.badges} tone="dark" />
              </div>

              <div className="relative mt-auto px-5 pb-5 xs:px-7 xs:pb-7 sm:px-9 sm:pb-9">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-soft">
                  <img
                    src={f1.image}
                    alt={f1.title}
                    loading="lazy"
                    className="h-[210px] w-full object-cover sm:h-[300px]"
                  />
                </div>
              </div>
            </div>
          </BentoCell>

          {/* 02: image-topped card */}
          <BentoCell className="md:col-span-3 lg:col-span-5" delay={0.08}>
            <article className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft">
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={f2.image}
                  alt={f2.title}
                  loading="lazy"
                  className="h-[170px] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="relative -mt-10 p-5 xs:p-6 sm:p-7">
                <CellHead num={f2.number} icon={f2.icon} accent={f2.accent} />
                <h3 className="font-display mt-4 text-xl leading-tight font-extrabold text-ink">
                  {f2.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f2.desc}</p>
                <Badges items={f2.badges} />
              </div>
            </article>
          </BentoCell>

          {/* 03: compact text cell */}
          <BentoCell className="md:col-span-3 lg:col-span-5" delay={0.16}>
            <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-soft xs:p-6 sm:p-7">
              <div className="relative">
                <CellHead num={f3.number} icon={f3.icon} accent={f3.accent} />
                <h3 className="font-display mt-4 text-xl leading-tight font-extrabold text-ink">
                  {f3.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f3.desc}</p>
                <Badges items={f3.badges} />
              </div>
            </article>
          </BentoCell>

          {/* 04: wide split cell with side thumbnail */}
          <BentoCell className="md:col-span-6 lg:col-span-7" delay={0.24}>
            <article className="relative flex h-full items-center gap-6 overflow-hidden rounded-3xl border border-border/80 bg-card p-5 shadow-soft xs:p-6 sm:p-7">
              <div className="relative flex-1">
                <CellHead num={f4.number} icon={f4.icon} accent={f4.accent} />
                <h3 className="font-display mt-4 text-xl leading-tight font-extrabold text-ink">
                  {f4.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f4.desc}</p>
                <Badges items={f4.badges} />
              </div>
              <div className="hidden w-40 shrink-0 overflow-hidden rounded-2xl border border-border/60 shadow-soft sm:block">
                <img
                  src={f4.image}
                  alt={f4.title}
                  loading="lazy"
                  className="h-[160px] w-full object-cover"
                />
              </div>
            </article>
          </BentoCell>

          {/* 05: brand-tinted export cell */}
          <BentoCell className="md:col-span-6 lg:col-span-5" delay={0.32}>
            <article className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-secondary via-card to-card p-5 shadow-soft xs:p-6 sm:p-7">
              <div className="relative">
                <CellHead num={f5.number} icon={f5.icon} accent={f5.accent} />
                <h3 className="font-display mt-4 text-xl leading-tight font-extrabold text-ink">
                  {f5.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f5.desc}</p>
                <Badges items={f5.badges} />
              </div>
            </article>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}

type Feature = (typeof STACKED_FEATURES)[number];

function BentoCell({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CellHead({
  num,
  icon: Icon,
  accent,
  tone = "light",
}: {
  num: string;
  icon: React.ElementType;
  accent?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          tone === "dark"
            ? "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-brand-soft"
            : `flex h-11 w-11 items-center justify-center rounded-2xl border ${accent}`
        }
      >
        <Icon className="h-5 w-5" />
      </div>
      <span
        className={`font-mono text-xs font-medium ${
          tone === "dark" ? "text-white/50" : "text-muted-foreground"
        }`}
      >
        FEATURE {num}
      </span>
    </div>
  );
}

function Badges({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((b) => (
        <span
          key={b}
          className={
            tone === "dark"
              ? "inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
              : "inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-surface px-3 py-1 text-xs font-medium text-ink"
          }
        >
          <CheckCircle2
            className={`h-3.5 w-3.5 ${tone === "dark" ? "text-brand-soft" : "text-brand"}`}
          />
          {b}
        </span>
      ))}
    </div>
  );
}
