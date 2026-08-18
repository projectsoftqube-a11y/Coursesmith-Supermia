import { motion } from "motion/react";
import { useState } from "react";
import { Play, Youtube, ArrowUpRight, Check } from "lucide-react";
import { Eyebrow, WordReveal } from "./Reveal";

const VIDEO_ID = "8IFU8kAQfh4";
const VIDEO_TITLE = "CourseSmith - AI Teaching Assistant for Educators";
const WATCH_URL = `https://www.youtube.com/shorts/${VIDEO_ID}`;

/**
 * Click-to-load facade. The YouTube player is roughly a megabyte of script and
 * sets third-party cookies on load, so we render a local poster first and only
 * mount the iframe once the visitor actually presses play. nocookie + autoplay
 * so the single click still starts the video.
 */
const EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&playsinline=1&rel=0&modestbranding=1`;

const BEATS = [
  "Upload a textbook PDF — no setup, no template to fill in",
  "Chapters, sections and key topics extracted automatically",
  "Lesson plans, quizzes and assignments, ready to print",
];

export function DemoVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-b border-border/50 bg-surface py-12 md:py-16"
    >
      {/* Background lighting, matching the neighbouring bands */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-25 [mask-image:radial-gradient(72%_60%_at_50%_45%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-[1140px] px-4 xs:px-6 md:px-10">
        {/* Copy first in the DOM, so small screens read the heading before the
            player and desktop lays it out on the left without order overrides. */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>See it in action</Eyebrow>
            </div>

            <WordReveal
              as="h2"
              text="Watch CourseSmith do the work."
              highlight={["do", "the", "work."]}
              className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl"
            />

            <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
              A short look at how a textbook PDF turns into lesson plans, quizzes and assignments —
              start to finish, in the real product.
            </p>

            <ul className="mx-auto grid max-w-xl gap-2.5 text-left lg:mx-0">
              {BEATS.map((beat) => (
                <li key={beat} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm text-muted-foreground">{beat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="cta-fill inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-sm font-medium text-white shadow-glow sm:w-auto sm:px-7"
                style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
              >
                <Play className="h-4 w-4 fill-current" />
                <span>Play the demo</span>
              </button>

              <a
                href={WATCH_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-brand/35 bg-brand/8 px-5 py-3.5 text-sm font-semibold text-brand transition-colors duration-300 hover:border-brand/60 hover:bg-brand/14 sm:w-auto sm:px-6"
              >
                <Youtube className="h-4 w-4" />
                <span>Watch on YouTube</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[320px]">
              {/* soft brand glow so the frame lifts off the band */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-5 -z-10 rounded-[3rem] bg-brand/20 blur-[55px]"
              />

              <div className="relative overflow-hidden rounded-[2.2rem] border border-border bg-card p-2 shadow-lift">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.7rem] bg-primary">
                  {playing ? (
                    <iframe
                      src={EMBED_URL}
                      title={VIDEO_TITLE}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label={`Play video: ${VIDEO_TITLE}`}
                      className="group absolute inset-0 h-full w-full cursor-pointer"
                    >
                      <img
                        src="/demo-poster.jpg"
                        alt=""
                        width={720}
                        height={1280}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* legibility scrim for the caption and play control */}
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/25"
                      />

                      {/* pulsing ring behind the play button */}
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50 motion-safe:animate-ping"
                      />

                      <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>

                      <span className="absolute inset-x-0 bottom-0 p-4 text-left">
                        <span className="block text-sm font-semibold text-white">
                          Watch the demo
                        </span>
                        <span className="mt-0.5 block text-xs text-white/75">
                          Tap to play — it stays on this page
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
