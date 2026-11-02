"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type ComponentType } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BookText,
  Bot,
  Building2,
  CalendarRange,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  FileQuestion,
  FileText,
  FlaskConical,
  GraduationCap,
  House,
  Landmark,
  LayoutTemplate,
  MessagesSquare,
  PencilRuler,
  School,
  Shapes,
  Sigma,
  Sparkles,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { catalogGroup, type CatalogEntry } from "@/content/catalog";
import { HUBS } from "@/content/hubs";
import type { ContentGroup } from "@/content/types";
import { APP_URL, CONTACT_EMAIL } from "@/lib/seo";
import { MobileMenu } from "./MobileMenu";

type Icon = ComponentType<{ className?: string }>;

/** One icon per destination, so the menus scan at a glance. */
const ICONS: Record<string, Icon> = {
  "/features/textbook-to-lesson-plan": BookOpen,
  "/features/quiz-generator": ClipboardCheck,
  "/features/curriculum-planner": CalendarRange,
  "/features/ai-assignment-generator": PencilRuler,
  "/features/ai-teaching-assistant": MessagesSquare,
  "/use-cases/math": Sigma,
  "/use-cases/science": FlaskConical,
  "/use-cases/english-language-arts": BookText,
  "/use-cases/social-studies": Landmark,
  "/use-cases/elementary-school": Shapes,
  "/use-cases/middle-school": School,
  "/use-cases/high-school": GraduationCap,
  "/use-cases/homeschool": House,
  "/use-cases/schools-and-districts": Building2,
  "/compare/chatgpt-for-lesson-planning": Bot,
  "/compare/best-ai-tools-for-teachers": Trophy,
  "/resources/how-to-write-a-lesson-plan": FileText,
  "/resources/lesson-plan-template": LayoutTemplate,
  "/resources/can-ai-write-lesson-plans": Sparkles,
  "/resources/how-to-make-a-quiz-from-a-pdf": FileQuestion,
  "/faq": CircleHelp,
};

type MenuDef = {
  group: ContentGroup;
  label: string;
  items: CatalogEntry[];
  feature: { href: string; title: string; text: string };
};

function menus(): MenuDef[] {
  return [
    {
      group: "features",
      label: "Features",
      items: catalogGroup("features"),
      feature: {
        href: "/features/textbook-to-lesson-plan",
        title: "Start with your own textbook",
        text: "Upload a PDF or Word file and plan every chapter from it.",
      },
    },
    {
      group: "use-cases",
      label: "Use cases",
      items: catalogGroup("use-cases"),
      feature: {
        href: "/use-cases/schools-and-districts",
        title: "Planning for a whole department",
        text: "Keep a shared textbook and pacing consistent across teachers.",
      },
    },
    {
      group: "compare",
      label: "Compare",
      items: catalogGroup("compare"),
      feature: {
        href: "/compare/best-ai-tools-for-teachers",
        title: "The best AI tools for teachers",
        text: "A fair guide, sorted by the job you need done.",
      },
    },
    {
      group: "resources",
      label: "Resources",
      items: [
        ...catalogGroup("resources"),
        {
          path: "/faq",
          group: "resources",
          label: "CourseSmith FAQ",
          blurb: "Uploads, lesson plans, tests, pricing and your data",
        },
      ],
      feature: {
        href: "/resources/lesson-plan-template",
        title: "Free lesson plan template",
        text: "A copy-ready template for a 45-minute class.",
      },
    },
  ];
}

/** The schools audience page (the package's "For Schools" top-level item). */
const FOR_SCHOOLS = "/use-cases/schools-and-districts";

const ANNOUNCEMENT = {
  href: "/features/curriculum-planner",
  text: "Plan a whole term week by week with Academic Schedules",
};

function ItemIcon({ path, className }: { path: string; className?: string }) {
  const Glyph = ICONS[path] ?? ArrowLeftRight;
  return <Glyph className={className} />;
}

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ContentGroup | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setOpen(false), []);
  const MENUS = menus();
  const currentGroup = MENUS.find((m) => pathname.startsWith(HUBS[m.group].path))?.group;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActive(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  const pillKey = hovered ?? active;

  return (
    <header className="fixed inset-x-0 top-0 z-50 motion-safe:animate-in motion-safe:duration-700 motion-safe:fade-in motion-safe:slide-in-from-top-3">
      {/* Announcement strip: folds away once the page scrolls */}
      <div
        className={`hidden overflow-hidden transition-[grid-template-rows] duration-500 md:grid ${
          scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        }`}
      >
        <div className="min-h-0">
          <a
            href={ANNOUNCEMENT.href}
            className="group relative flex h-9 items-center justify-center gap-3 overflow-hidden bg-gradient-to-r from-primary via-[oklch(0.33_0.12_262)] to-primary text-xs font-medium text-white/85"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent motion-safe:animate-[sheen_5s_ease-in-out_infinite]"
            />
            <span className="relative inline-flex items-center gap-1 rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold tracking-wide text-primary uppercase">
              <Sparkles className="h-3 w-3" />
              Feature
            </span>
            <span className="relative">{ANNOUNCEMENT.text}</span>
            <ArrowRight className="relative h-3.5 w-3.5 text-brand-soft transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div
        className={`mx-auto w-full max-w-[1400px] px-3 transition-[padding] duration-500 xs:px-6 md:px-10 ${
          scrolled ? "pt-2" : "pt-3"
        }`}
      >
        <nav
          ref={navRef}
          aria-label="Main"
          onMouseLeave={() => {
            setActive(null);
            setHovered(null);
          }}
          className={`relative rounded-full bg-gradient-to-r from-brand/40 via-border to-indigo-400/40 p-px transition-shadow duration-500 ${
            scrolled || active ? "shadow-lift" : "shadow-soft"
          }`}
        >
          <div
            className={`flex h-14 items-center justify-between gap-3 rounded-full pr-2 pl-4 backdrop-blur-xl transition-colors duration-500 xs:pl-5 lg:h-[60px] ${
              scrolled || active ? "bg-white/95" : "bg-white/80"
            }`}
          >
            <Link href="/" className="group flex min-w-0 shrink items-center">
              <Image
                width={233}
                height={36}
                src="/logo.png"
                alt="CourseSmith home"
                priority
                className="h-6 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105 xs:h-7 xs:max-w-none"
              />
            </Link>

            <ul className="hidden items-center lg:flex">
              {MENUS.map((m) => {
                const isActive = active === m.group;
                const isCurrent = currentGroup === m.group;
                const panelId = `menu-${m.group}`;
                return (
                  <li
                    key={m.group}
                    className="group/item"
                    onMouseEnter={() => {
                      setActive(m.group);
                      setHovered(m.group);
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      onClick={() => setActive(isActive ? null : m.group)}
                      onFocus={() => setHovered(m.group)}
                      className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive || isCurrent
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {pillKey === m.group ? (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      ) : null}
                      {m.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${isActive ? "rotate-180 text-brand" : ""}`}
                      />
                      {isCurrent ? (
                        <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                      ) : null}
                    </button>
                    {/* Always rendered so every link is in the server HTML; shown with CSS. */}
                    <div
                      id={panelId}
                      className={`absolute inset-x-0 top-full origin-top pt-3 transition-all duration-300 ease-out ${
                        isActive
                          ? "visible scale-100 opacity-100"
                          : "pointer-events-none invisible scale-[0.98] opacity-0 group-focus-within/item:pointer-events-auto group-focus-within/item:visible group-focus-within/item:scale-100 group-focus-within/item:opacity-100"
                      }`}
                    >
                      <MenuPanel menu={m} onNavigate={() => setActive(null)} />
                    </div>
                  </li>
                );
              })}
              <li
                onMouseEnter={() => {
                  setActive(null);
                  setHovered("schools");
                }}
              >
                <a
                  href={FOR_SCHOOLS}
                  onFocus={() => setHovered("schools")}
                  className={`relative flex rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === FOR_SCHOOLS
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {pillKey === "schools" ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  For Schools
                </a>
              </li>
            </ul>

            <div className="flex shrink-0 items-center gap-1.5">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent xl:inline-flex"
              >
                Sign in
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="group relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-brand via-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-px sm:inline-flex"
              >
                <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-[left] duration-700 group-hover:left-[130%]" />
                <span className="relative">Start Free</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                ref={toggleRef}
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white transition-transform active:scale-95 lg:hidden"
              >
                <span className="absolute h-0.5 w-4 -translate-y-1 rounded-full bg-current" />
                <span className="absolute h-0.5 w-4 translate-y-1 rounded-full bg-current" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu
        open={open}
        onClose={closeMenu}
        returnFocusTo={toggleRef}
        appUrl={APP_URL}
        email={CONTACT_EMAIL}
        groups={MENUS.map((m) => ({
          key: m.group,
          label: m.label,
          hub: { href: HUBS[m.group].path, label: `All ${m.label.toLowerCase()}` },
          items: m.items.map((i) => ({
            href: i.path,
            label: i.label,
            blurb: i.blurb,
            icon: ICONS[i.path] ?? ArrowLeftRight,
          })),
        }))}
        links={[
          { label: "For Schools", href: FOR_SCHOOLS },
          { label: "Pricing", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
    </header>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: MenuDef; onNavigate: () => void }) {
  const hub = HUBS[menu.group];
  return (
    <div className="overflow-hidden rounded-[28px] border border-border/80 bg-white shadow-lift">
      <div className="grid lg:grid-cols-[1fr_320px]">
        <ul className="grid content-start gap-1 p-3 sm:grid-cols-2 xl:p-4">
          {menu.items.map((i) => (
            <li key={i.path}>
              <a
                href={i.path}
                onClick={onNavigate}
                className="group/link flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-surface"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-indigo-500/10 text-brand transition-all duration-300 group-hover/link:from-brand group-hover/link:to-indigo-500 group-hover/link:text-white group-hover/link:shadow-glow">
                  <ItemIcon path={i.path} className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1 text-sm font-semibold text-ink">
                    {i.label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {i.blurb}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={menu.feature.href}
          onClick={onNavigate}
          className="group/feature relative m-3 hidden overflow-hidden rounded-[22px] bg-gradient-to-br from-primary via-[oklch(0.3_0.11_262)] to-indigo-900 p-5 text-white lg:flex lg:flex-col"
        >
          <span className="pointer-events-none absolute inset-0 blueprint opacity-20" />
          <span className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand/40 blur-[70px] transition-transform duration-700 group-hover/feature:scale-125" />
          <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-indigo-500 shadow-glow transition-transform duration-500 group-hover/feature:scale-110 group-hover/feature:-rotate-6">
            <ItemIcon path={menu.feature.href} className="h-6 w-6" />
          </span>
          <span className="relative mt-auto block pt-10">
            <span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase backdrop-blur">
              Featured
            </span>
            <span className="mt-2 block font-display text-lg leading-tight font-extrabold">
              {menu.feature.title}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-white/75">
              {menu.feature.text}
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-soft">
              Explore
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/feature:translate-x-1" />
            </span>
          </span>
        </a>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border/70 bg-surface px-6 py-3">
        <p className="text-xs text-muted-foreground">{hub.intro}</p>
        <a
          href={hub.path}
          onClick={onNavigate}
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:text-primary"
        >
          All {menu.label.toLowerCase()} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
