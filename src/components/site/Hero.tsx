import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, Play, GraduationCap, Wand2 } from "lucide-react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-10 xs:pt-28 md:pt-32 md:pb-12"
    >
      {/* Dynamic Animated Vector & Light Orbs Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Interactive Mouse Spotlight */}
        <motion.div
          style={{
            x: spotlightX,
            y: spotlightY,
          }}
          className="absolute -top-[250px] -left-[250px] h-[500px] w-[500px] rounded-full bg-brand/12 blur-[120px] transition-opacity duration-500"
        />

        {/* Floating Gradient Orb 1 (Brand Cyan) */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-brand/20 via-sky-400/15 to-indigo-500/20 blur-[110px]"
        />

        {/* Floating Gradient Orb 2 (Sky Blue) */}
        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 70, -50, 0],
            scale: [1, 0.85, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-indigo-500/15 via-brand/20 to-sky-400/20 blur-[130px]"
        />

        {/* Blueprint Grid Overlay */}
        <div className="blueprint absolute inset-0 opacity-40 [mask-image:radial-gradient(80%_80%_at_50%_40%,black_30%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 xs:px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Teacher Value Proposition */}
          <div className="text-left lg:col-span-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand shadow-soft backdrop-blur-md"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Built Exclusively for Teachers</span>
            </motion.div>

            {/* Main Headline (Plus Jakarta Sans) */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display mt-6 text-[1.75rem] font-extrabold tracking-tight text-ink xs:text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.12] sm:leading-[1.08]"
            >
              <span className="block">Transform Any Subject Into</span>
              <span className="block font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
                Complete Courses in Seconds.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Turn raw textbook PDFs into standards-aligned lesson plans, differentiated quizzes and
              assignments, instantly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="https://app.coursesmith.supermia.ai">
                Start Free for Teachers
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href="#features"
                style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
                className="cta-fill group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border bg-card/90 px-5 py-3.5 text-sm font-medium text-primary backdrop-blur-md hover:border-brand/40 hover:text-white sm:w-auto sm:px-6"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Play className="h-2.5 w-2.5 fill-current" />
                </span>
                Watch 2-Min Demo
              </a>
            </motion.div>
          </div>

          {/* Right Column: Featured Teacher Storytelling Image Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-3xl border border-brand/20 bg-card/90 p-3 sm:p-4 shadow-lift backdrop-blur-xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-soft">
                <img
                  src="/hero-teacher.png"
                  alt="Teacher empowered by CourseSmith AI"
                  className="h-[260px] sm:h-[380px] md:h-[480px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-border/80 bg-card/95 p-3 shadow-soft backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Wand2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-ink leading-none">
                        Classroom Magic Enabled
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-1">
                        Empowering teachers with instant AI-crafted lessons
                      </p>
                    </div>
                  </div>
                  <span className="rounded-lg bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
                    PDF to lesson
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
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
