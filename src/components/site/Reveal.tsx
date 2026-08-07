import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const word: Variants = {
  hidden: { y: "0.5em", opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Word-by-word blur-to-focus reveal for headings. */
export function WordReveal({
  text,
  className,
  as = "h2",
  highlight = [],
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  highlight?: string[];
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const Tag = motion[as];

  return (
    <div ref={ref}>
      <Tag
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delayChildren: delay }}
        className={cn(className)}
      >
        {text.split(" ").map((w, i) => (
          <motion.span key={`${w}-${i}`} variants={word} className="inline-block">
            <span className={highlight.includes(w.replace(/[.,]/g, "")) ? "text-brand" : undefined}>
              {w}
            </span>
            {i < text.split(" ").length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

/** Generic fade / rise reveal wrapper. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("eyebrow inline-flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-brand/50" />
      <span>{children}</span>
      <span className="h-px w-8 bg-brand/50" />
    </div>
  );
}
