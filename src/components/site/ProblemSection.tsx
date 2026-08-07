import { motion } from "motion/react";
import { Eyebrow } from "./Reveal";
import { Clock, Sparkles, Sun, Check } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden bg-surface py-10 md:py-14">
      {/* Background Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-30 [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10">
        {/* Minimal Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>A Story of Two Classrooms</Eyebrow>
          </div>

          <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.1]">
            From Midnight Overload <br />
            <span className="font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              To Classroom Joy.
            </span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            See how AI automation gives teachers their evenings back while delivering richer
            lessons.
          </p>
        </div>

        {/* Storytelling Side-by-Side Visual Cards */}
        <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: The Old Way (Stressed Teacher) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-card p-3 xs:p-4 shadow-lift transition-all duration-500 hover:-translate-y-1 hover:border-red-500/40"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/teacher-before.png"
                alt="Late night teacher burnout before CourseSmith"
                className="h-[220px] xs:h-[280px] sm:h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-card/95 px-3 py-1.5 text-[10px] font-medium text-red-500 shadow-soft xs:px-3.5 xs:text-xs backdrop-blur-md">
                <Clock className="h-3.5 w-3.5" />
                <span>Sunday 11:47 PM · 11+ Hours Spent</span>
              </div>

              {/* Floating Bottom Content */}
              <div className="absolute bottom-3 left-3 right-3 xs:bottom-4 xs:left-4 xs:right-4 rounded-2xl border border-border/70 bg-card/95 p-3 xs:p-4 shadow-soft backdrop-blur-md">
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                  <h3 className="font-display min-w-0 flex-1 text-sm font-extrabold text-ink xs:text-base">
                    The Traditional Manual Grind
                  </h3>
                  <span className="shrink-0 rounded bg-red-500/10 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-red-500">
                    High Stress
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Overwhelmed with manual lesson retyping, scattered papers, and late night prep
                  burnout.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: The CourseSmith Way (Happy Classroom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-3 xs:p-4 shadow-lift transition-all duration-500 hover:-translate-y-1 hover:border-brand/60 hover:shadow-glow"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <img
                src="/teacher-after.png"
                alt="Happy teacher in bright classroom with CourseSmith AI"
                className="h-[220px] xs:h-[280px] sm:h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-card/95 px-3 py-1.5 text-[10px] font-medium text-emerald-500 shadow-soft xs:px-3.5 xs:text-xs backdrop-blur-md">
                <Sun className="h-3.5 w-3.5 text-emerald-500" />
                <span>Monday 9:00 AM · 15-Min Weekly Prep</span>
              </div>

              {/* Floating Bottom Content */}
              <div className="absolute bottom-3 left-3 right-3 xs:bottom-4 xs:left-4 xs:right-4 rounded-2xl border border-brand/30 bg-card/95 p-3 xs:p-4 shadow-soft backdrop-blur-md">
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1.5">
                  <h3 className="font-display min-w-0 flex-1 text-sm font-extrabold text-ink xs:text-base">
                    The CourseSmith Copilot
                  </h3>
                  <span className="shrink-0 rounded bg-success/10 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-success">
                    Minutes, not hours
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Energized, present, and inspiring happy students with instant AI-crafted lessons.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
