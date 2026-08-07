import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const pad = useTransform(scrollY, [0, 120], [22, 12]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setCondensed(v > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      style={{ paddingTop: pad }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 xs:px-6 md:px-10">
        <nav
          className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 xs:px-4 xs:py-3 md:px-6 ${
            condensed ? "glass shadow-soft" : "border border-transparent"
          }`}
        >
          <a href="#top" className="group flex min-w-0 shrink items-center">
            <img
              src="/logo.png"
              alt="CourseSmith"
              className="h-7 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105 xs:h-8 xs:max-w-none md:h-9"
            />
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-brand transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href="https://app.coursesmith.supermia.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="cta-fill hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white md:inline-flex"
              style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
            >
              Start Free
            </a>
            <button
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 md:hidden"
          >
            <ul className="grid gap-1">
              {[...LINKS, { label: "Start Free", href: "https://app.coursesmith.supermia.ai" }].map(
                (l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-primary hover:bg-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
