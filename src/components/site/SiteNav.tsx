import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { catalogGroup, standardsSplit, type CatalogEntry } from "@/content/catalog";
import { HUBS } from "@/content/hubs";
import type { ContentGroup } from "@/content/types";
import { APP_URL } from "@/lib/seo";

type MenuDef = {
  group: ContentGroup;
  /** Columns of the link grid inside the panel. */
  cols: string;
  items: CatalogEntry[];
  compact?: boolean;
};

function menus(): MenuDef[] {
  const { national, states } = standardsSplit();
  return [
    { group: "features", cols: "sm:grid-cols-2", items: catalogGroup("features") },
    { group: "use-cases", cols: "sm:grid-cols-3", items: catalogGroup("use-cases") },
    {
      group: "standards",
      cols: "sm:grid-cols-4",
      items: [...national, ...states],
      compact: true,
    },
    { group: "compare", cols: "sm:grid-cols-2", items: catalogGroup("compare") },
    {
      group: "resources",
      cols: "sm:grid-cols-2",
      items: [
        ...catalogGroup("resources"),
        {
          path: "/faq",
          group: "resources",
          label: "CourseSmith FAQ",
          blurb: "Uploads, lesson plans, tests, pricing and your data",
        },
      ],
    },
  ];
}

/** The schools audience page (the package's "For Schools" top-level item). */
const FOR_SCHOOLS = "/use-cases/schools-and-districts";

const MENU_LABEL: Record<ContentGroup, string> = {
  features: "Features",
  "use-cases": "Use cases",
  standards: "Standards",
  compare: "Compare",
  resources: "Resources",
};

export function SiteNav() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ContentGroup | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pad = useTransform(scrollY, [0, 120], [22, 12]);
  const MENUS = menus();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setCondensed(v > 40));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setOpen(false);
      }
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
          ref={navRef}
          aria-label="Main"
          onMouseLeave={() => setActive(null)}
          className={`relative flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 xs:px-4 xs:py-3 md:px-6 ${
            condensed || active ? "glass shadow-soft" : "border border-transparent"
          }`}
        >
          <a href="/" className="group flex min-w-0 shrink items-center">
            <img
              src="/logo.png"
              alt="CourseSmith home"
              width={1608}
              height={248}
              className="h-7 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105 xs:h-8 xs:max-w-none md:h-9"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {MENUS.map((m) => {
              const isActive = active === m.group;
              const panelId = `menu-${m.group}`;
              return (
                <li key={m.group} className="group/item" onMouseEnter={() => setActive(m.group)}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActive(isActive ? null : m.group)}
                    className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "bg-accent text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {MENU_LABEL[m.group]}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* Always rendered so every link is in the server HTML; hidden with CSS. */}
                  <div
                    id={panelId}
                    className={`absolute inset-x-0 top-full pt-3 transition-all duration-200 ${
                      isActive
                        ? "visible translate-y-0 opacity-100"
                        : "pointer-events-none invisible translate-y-1 opacity-0 group-focus-within/item:pointer-events-auto group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100"
                    }`}
                  >
                    <MenuPanel menu={m} onNavigate={() => setActive(null)} />
                  </div>
                </li>
              );
            })}
            <li>
              <a
                href={FOR_SCHOOLS}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                For Schools
              </a>
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="hidden rounded-full px-3 py-2 text-sm font-medium text-primary transition-colors hover:text-brand xl:inline-flex"
            >
              Sign in
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="cta-fill hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white sm:inline-flex"
              style={{ ["--cta-fill" as string]: "var(--color-primary)" }}
            >
              Start Free
            </a>
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl p-3 lg:hidden"
          >
            <ul className="grid gap-1">
              {MENUS.map((m) => (
                <li key={m.group}>
                  <details className="group rounded-xl">
                    <summary className="flex list-none items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-primary hover:bg-accent [&::-webkit-details-marker]:hidden">
                      {MENU_LABEL[m.group]}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="grid gap-0.5 px-2 pt-1 pb-2">
                      {m.items.map((i) => (
                        <li key={i.path}>
                          <a
                            href={i.path}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                          >
                            {i.label}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href={HUBS[m.group].path}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand"
                        >
                          All {MENU_LABEL[m.group].toLowerCase()}{" "}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
              ))}
              {[
                { label: "For Schools", href: FOR_SCHOOLS },
                { label: "Pricing", href: "/pricing" },
                { label: "FAQ", href: "/faq" },
                { label: "Sign in", href: APP_URL },
                { label: "Start Free", href: APP_URL },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-primary hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: MenuDef; onNavigate: () => void }) {
  const hub = HUBS[menu.group];
  return (
    <div className="grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lift lg:grid-cols-[1fr_280px]">
      <ul className={`grid gap-1 p-4 ${menu.cols}`}>
        {menu.items.map((i) => (
          <li key={i.path}>
            <a
              href={i.path}
              onClick={onNavigate}
              className="group/link flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-accent"
            >
              {i.regionCode ? (
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/10 font-display text-[11px] font-extrabold text-brand transition-colors group-hover/link:bg-brand group-hover/link:text-white">
                  {i.regionCode === "US" ? "US" : i.regionCode.replace("US-", "")}
                </span>
              ) : null}
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink group-hover/link:text-brand">
                  {i.label}
                </span>
                {menu.compact ? null : (
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {i.blurb}
                  </span>
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="relative hidden overflow-hidden bg-primary p-6 text-white lg:block">
        <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/35 blur-[80px]" />
        <p className="eyebrow relative !text-brand-soft">{hub.eyebrow}</p>
        <p className="relative mt-3 font-display text-lg leading-snug font-extrabold">{hub.h1}</p>
        <p className="relative mt-2 text-xs leading-relaxed text-white/70">{hub.intro}</p>
        <a
          href={hub.path}
          onClick={onNavigate}
          className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-soft hover:text-white"
        >
          All {MENU_LABEL[menu.group].toLowerCase()} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
