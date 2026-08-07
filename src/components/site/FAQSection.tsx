import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Eyebrow } from "./Reveal";
import { HelpCircle, ChevronDown, Mail } from "lucide-react";

const FAQS = [
  {
    q: "What do I need to upload to get started?",
    a: "Just a textbook PDF. CourseSmith reads the file, extracts its chapters, sections and key topics, and turns them into a structured course outline you can build from. There is no setup, no template to fill in and no training required.",
  },
  {
    q: "What exactly does a generated lesson plan include?",
    a: "Each plan covers a full 45-minute class: a warm-up, direct instruction, interactive activities, homework assignments and project work.",
  },
  {
    q: "How do the quizzes and answer keys work?",
    a: "You choose how many questions you want and CourseSmith builds the quiz from your uploaded material, mixing multiple choice, short answer and long answer questions. Every quiz ships with a detailed answer key and explanations for each response.",
  },
  {
    q: "What can the 24/7 AI teaching assistant help with?",
    a: "Ask it to explain a tricky concept, brainstorm classroom activities, adapt material for a different grade level, or generate extra resources on the spot.",
  },
  {
    q: "Does it keep my whole syllabus consistent?",
    a: "Yes. CourseSmith connects chapters and topics across your entire syllabus into a live curriculum built on educational standards, so prerequisites stay in the right order and you do not end up with gaps between units.",
  },
  {
    q: "How do I get my materials out of CourseSmith?",
    a: "Export any lesson plan, quiz or assignment as a clean, print-ready document or PDF worksheet in one click, ready to hand out in class or share with your department.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface py-12 md:py-16 border-b border-border/50"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="blueprint absolute inset-0 opacity-25 [mask-image:radial-gradient(75%_65%_at_50%_50%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      </div>

      {/* Mascot: decorative, anchored bottom-right. Only shown from xl up, where the
          centered max-w-3xl accordion leaves enough clear gutter to sit in. */}
      <motion.img
        src="/mascot.png"
        alt=""
        aria-hidden="true"
        width={716}
        height={1447}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 right-4 hidden h-auto w-[140px] select-none xl:block 2xl:right-10 2xl:w-[168px]"
      />

      <div className="mx-auto w-full max-w-[1100px] px-4 xs:px-6 md:px-10">
        {/* Centered Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Got Questions?</Eyebrow>
          </div>

          <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.1]">
            Frequently Asked Questions. <br />
            <span className="font-highlight bg-gradient-to-r from-brand via-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Everything You Need to Know.
            </span>
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Clear answers about uploads, lesson plans, quizzes and exporting your materials.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-7 space-y-4 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-border/80 bg-card shadow-soft overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-medium text-ink transition-colors hover:text-brand xs:p-5"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-border/40 px-4 pb-4 pt-3 xs:px-5 xs:pb-5"
                    >
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
