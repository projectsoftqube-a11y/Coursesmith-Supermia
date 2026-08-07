import { motion } from "motion/react";
import { Download, FileText, Check, ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal, WordReveal } from "./Reveal";

/** Public path of the brochure PDF, served straight from /public. */
const BROCHURE = "/CourseSmith.pdf";

const INSIDE = [
  "The full feature walkthrough, tool by tool",
  "How CourseSmith fits an existing scheme of work",
  "Rollout options for departments and whole schools",
  "Answers to the questions IT and leadership ask first",
];

export function BrochureSection() {
  return (
    <section id="brochure" className="relative overflow-hidden bg-surface py-10 md:py-14">
      {/* Background lighting, matching the finale band */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="zigzag absolute -inset-24 rotate-3 opacity-50 [mask-image:linear-gradient(295deg,black_0%,black_22%,transparent_58%)]" />
        <div className="blueprint absolute inset-0 opacity-20 [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1300px] px-4 xs:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-brand/30 bg-card p-6 shadow-lift backdrop-blur-xl sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left: the pitch */}
            <div className="space-y-5 text-center sm:text-left lg:col-span-7">
              <div className="flex justify-center sm:justify-start">
                <Eyebrow>Take it to your team</Eyebrow>
              </div>

              <WordReveal
                as="h2"
                text="Everything about CourseSmith, in one PDF."
                highlight={["PDF."]}
                className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl"
              />

              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Sharing this with a head of department or your IT lead? Download the brochure and
                send it on — no form, no email address, just the file.
              </p>

              <ul className="mx-auto grid max-w-xl gap-2.5 text-left sm:mx-0">
                {INSIDE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start">
                <a
                  href={BROCHURE}
                  download
                  className="cta-fill inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-sm font-medium text-white shadow-glow sm:w-auto sm:px-7"
                  style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
                >
                  <Download className="h-4 w-4" />
                  <span>Download the brochure</span>
                </a>

                <a
                  href={BROCHURE}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-brand/35 bg-brand/8 px-5 py-3.5 text-sm font-semibold text-brand transition-colors duration-300 hover:border-brand/60 hover:bg-brand/14 sm:w-auto sm:px-6"
                >
                  <FileText className="h-4 w-4" />
                  <span>View in browser</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <p className="text-xs text-muted-foreground/80">PDF · 3.5 MB</p>
            </div>

            {/* Right: the document itself, as an object on a desk */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <a
                  href={BROCHURE}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open the CourseSmith brochure"
                  className="relative mx-auto block w-full max-w-[320px]"
                >
                  {/* the sheet behind, so it reads as a stack */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -rotate-3 rounded-2xl border border-border/60 bg-card"
                  />

                  <span className="relative block overflow-hidden rounded-2xl border border-brand/30 bg-primary shadow-soft">
                    {/* cover */}
                    <span className="relative flex aspect-[3/4] flex-col justify-between p-6">
                      {/* cover artwork, sitting behind the type */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-[15%] bottom-[28%] overflow-hidden"
                      >
                        <img
                          src="/section3-output.png"
                          alt=""
                          className="h-full w-full scale-[1.04] object-cover opacity-60"
                        />
                        <span className="absolute inset-0 bg-gradient-to-b from-primary via-primary/20 to-primary" />
                      </span>

                      <span className="relative flex items-center justify-between">
                        <img
                          src="/logo.png"
                          alt=""
                          className="h-6 w-auto object-contain brightness-0 invert"
                        />
                        <span className="rounded-full border border-white/20 bg-primary/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm">
                          PDF
                        </span>
                      </span>

                      <span className="relative block">
                        <span className="block font-display text-2xl leading-tight font-extrabold text-white">
                          CourseSmith
                        </span>
                        <span className="mt-1.5 block text-sm text-white/70">
                          The AI teaching operating system
                        </span>
                        <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-soft">
                          <Download className="h-3.5 w-3.5" />
                          Tap to open
                        </span>
                      </span>
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
