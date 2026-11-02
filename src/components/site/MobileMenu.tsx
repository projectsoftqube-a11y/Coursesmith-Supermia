"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Mail, X } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type RefObject,
} from "react";

gsap.registerPlugin(useGSAP);

export type MobileMenuGroup = {
  key: string;
  label: string;
  hub: { href: string; label: string };
  items: {
    href: string;
    label: string;
    blurb: string;
    icon: ComponentType<{ className?: string }>;
  }[];
};

export type MobileMenuLink = { label: string; href: string };

/**
 * Full-screen mobile menu, choreographed with GSAP:
 * the panel grows out of the menu button, the top-level items rise in turn,
 * and choosing a section slides its pages in like an app screen.
 * One timeline plays forward to open and reverses to close.
 */
export function MobileMenu({
  open,
  onClose,
  groups,
  links,
  appUrl,
  email,
  returnFocusTo,
}: {
  open: boolean;
  onClose: () => void;
  groups: MobileMenuGroup[];
  links: MobileMenuLink[];
  appUrl: string;
  email: string;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
}) {
  const root = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const sectionFx = useRef<{
    open: (key: string) => void;
    close: (key: string, done: () => void) => void;
  } | null>(null);
  const [section, setSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Build the open/close timeline once, paused; reduced motion gets instant states.
  useGSAP(
    (_context, contextSafe) => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const reduce = Boolean(ctx.conditions?.["reduce"]);
          const tl = gsap.timeline({
            paused: true,
            defaults: { ease: "expo.out" },
            onReverseComplete: () => {
              gsap.set(root.current, { visibility: "hidden" });
              setSection(null);
            },
          });
          tl.set(root.current, { visibility: "visible" })
            .fromTo(
              ".mm-backdrop",
              { clipPath: "circle(0% at calc(100% - 2.6rem) 2.4rem)" },
              {
                clipPath: "circle(150% at calc(100% - 2.6rem) 2.4rem)",
                duration: reduce ? 0 : 0.85,
                ease: "power3.inOut",
              },
            )
            .fromTo(
              ".mm-top",
              { autoAlpha: 0, y: -12 },
              { autoAlpha: 1, y: 0, duration: reduce ? 0 : 0.5 },
              reduce ? 0 : "-=0.35",
            )
            // Focus moves in as soon as the close button can take it.
            .add(
              () => {
                if (!tl.reversed()) closeButton.current?.focus({ preventScroll: true });
              },
              reduce ? 0 : "<0.05",
            )
            .fromTo(
              ".mm-row",
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: reduce ? 0 : 0.3, stagger: reduce ? 0 : 0.06 },
              reduce ? 0 : "-=0.3",
            )
            .fromTo(
              ".mm-item-inner",
              { yPercent: 115, rotate: 4 },
              { yPercent: 0, rotate: 0, duration: reduce ? 0 : 0.9, stagger: reduce ? 0 : 0.06 },
              reduce ? 0 : "<",
            )
            .fromTo(
              ".mm-index",
              { autoAlpha: 0, x: -8 },
              { autoAlpha: 1, x: 0, duration: reduce ? 0 : 0.5, stagger: reduce ? 0 : 0.06 },
              reduce ? 0 : "<0.15",
            )
            .fromTo(
              ".mm-foot > *",
              { autoAlpha: 0, y: 24 },
              { autoAlpha: 1, y: 0, duration: reduce ? 0 : 0.6, stagger: reduce ? 0 : 0.08 },
              reduce ? 0 : "-=0.6",
            );
          timeline.current = tl;
          return () => {
            timeline.current = null;
          };
        },
      );

      gsap.set("[data-section]", { xPercent: 100 });

      // Section screens animate on tap, so they are wrapped to stay inside this context.
      const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const safe = contextSafe ?? (<T,>(fn: T) => fn);
      sectionFx.current = {
        open: safe((key: string) => {
          const d = reduce() ? 0 : 1;
          const panel = root.current?.querySelector(`[data-section="${key}"]`);
          if (!panel) return;
          gsap
            .timeline({ defaults: { ease: "expo.out" } })
            .to(".mm-main", { xPercent: -18, autoAlpha: 0, duration: 0.45 * d, ease: "power3.in" })
            .fromTo(
              panel,
              { xPercent: 100, autoAlpha: 1 },
              { xPercent: 0, duration: 0.7 * d },
              "<0.1",
            )
            .fromTo(
              panel.querySelectorAll(".mm-sub"),
              { y: 26, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.6 * d, stagger: 0.045 * d },
              "<0.2",
            );
          panel.querySelector<HTMLElement>("button")?.focus({ preventScroll: true });
        }),
        close: safe((key: string, done: () => void) => {
          const d = reduce() ? 0 : 1;
          const panel = root.current?.querySelector(`[data-section="${key}"]`);
          gsap
            .timeline({ defaults: { ease: "expo.out" }, onComplete: done })
            .to(panel ?? [], { xPercent: 100, duration: 0.5 * d, ease: "power3.in" })
            .to(".mm-main", { xPercent: 0, autoAlpha: 1, duration: 0.6 * d }, "<0.15");
        }),
      };
      setMounted(true);
    },
    { scope: root },
  );

  // Play forward to open, reverse to close; move focus in and back out.
  useEffect(() => {
    const tl = timeline.current;
    if (!tl) return;
    if (open) {
      gsap.set(root.current, { visibility: "visible" });
      tl.timeScale(1).play();
    } else if (tl.progress() > 0) {
      tl.timeScale(2.2).reverse();
      returnFocusTo.current?.focus({ preventScroll: true });
    }
  }, [open, mounted, returnFocusTo]);

  // Lock the page behind the menu.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  /** Slide the main list out and a section's pages in. */
  const openSection = (key: string) => {
    setSection(key);
    requestAnimationFrame(() => sectionFx.current?.open(key));
  };

  const closeSection = useCallback(() => {
    if (section) sectionFx.current?.close(section, () => setSection(null));
  }, [section]);

  // Escape steps back out of a section first, then closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (section) closeSection();
      else onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, section, closeSection, onClose]);

  const rows = [
    ...groups.map((g) => ({
      kind: "group" as const,
      key: g.key,
      label: g.label,
      href: g.hub.href,
    })),
    ...links.map((l) => ({ kind: "link" as const, key: l.href, label: l.label, href: l.href })),
  ];

  return (
    <div
      ref={root}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      inert={!open}
      data-lenis-prevent
      className="invisible fixed inset-0 z-[60] lg:hidden"
    >
      <div className="mm-backdrop absolute inset-0 overflow-hidden bg-primary [clip-path:circle(0%_at_calc(100%-2.6rem)_2.4rem)]">
        <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand/30 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-indigo-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 blueprint opacity-[0.12]" />
      </div>

      <div className="relative flex h-full flex-col">
        {/* Top bar */}
        <div className="mm-top flex h-[72px] shrink-0 items-center justify-between px-5 opacity-0 xs:px-7">
          <Image
            src="/logo.png"
            alt="CourseSmith"
            width={233}
            height={36}
            className="h-6 w-auto brightness-0 invert xs:h-7"
          />
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden">
          {/* Main list */}
          <nav
            aria-label="Mobile"
            className="mm-main absolute inset-0 overflow-y-auto px-5 pt-4 pb-8 xs:px-7"
          >
            <ol className="space-y-1">
              {rows.map((row, i) => (
                <li key={row.key} className="mm-row border-b border-white/10 opacity-0">
                  {row.kind === "group" ? (
                    <button
                      type="button"
                      onClick={() => openSection(row.key)}
                      aria-expanded={section === row.key}
                      className="group flex w-full items-center gap-4 py-3.5 text-left"
                    >
                      <MenuRowLabel index={i} label={row.label} />
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-brand-soft transition-colors group-hover:bg-brand group-hover:text-primary">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </button>
                  ) : (
                    <a
                      href={row.href}
                      onClick={onClose}
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <MenuRowLabel index={i} label={row.label} />
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-brand-soft transition-colors group-hover:bg-brand group-hover:text-primary">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Section screens */}
          {groups.map((g) => (
            <div
              key={g.key}
              data-section={g.key}
              aria-hidden={section !== g.key}
              className={`absolute inset-0 overflow-y-auto px-5 pt-2 pb-8 xs:px-7 ${
                section === g.key ? "visible" : "invisible"
              }`}
            >
              <button
                type="button"
                onClick={closeSection}
                className="mm-sub inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              <p className="mm-sub mt-6 font-display text-4xl font-extrabold tracking-tight text-white">
                {g.label}
              </p>
              <ul className="mt-5 space-y-2">
                {g.items.map((item) => {
                  const Glyph = item.icon;
                  return (
                    <li key={item.href} className="mm-sub">
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-3.5 rounded-2xl bg-white/[0.06] p-3.5 ring-1 ring-white/10 transition-colors active:bg-white/15"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-indigo-500 text-white shadow-glow">
                          <Glyph className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-semibold text-white">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-white/60">
                            {item.blurb}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-brand-soft transition-transform group-hover:translate-x-1" />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <a
                href={g.hub.href}
                onClick={onClose}
                className="mm-sub mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-soft"
              >
                {g.hub.label} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mm-foot relative shrink-0 space-y-3 border-t border-white/10 px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] xs:px-7">
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={appUrl}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center rounded-full px-4 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25"
            >
              Sign in
            </a>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-brand via-sky-400 to-indigo-400 px-4 py-3.5 text-sm font-semibold text-primary shadow-glow"
            >
              Start Free <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 text-xs text-white/55"
          >
            <Mail className="h-3.5 w-3.5" /> {email}
          </a>
        </div>
      </div>
    </div>
  );
}

/** Index and big label, with the label masked so it can rise into view. */
function MenuRowLabel({ index, label }: { index: number; label: string }) {
  return (
    <span className="flex min-w-0 flex-1 items-baseline gap-3">
      <span className="mm-index w-6 shrink-0 font-display text-xs font-bold text-brand-soft tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="block overflow-hidden pb-1">
        <span className="mm-item-inner block font-display text-[2rem] leading-[1.1] font-extrabold tracking-tight text-white xs:text-[2.35rem]">
          {label}
        </span>
      </span>
    </span>
  );
}
