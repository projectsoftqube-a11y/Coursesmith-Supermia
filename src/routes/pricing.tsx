import { createFileRoute } from "@tanstack/react-router";
import { Building2, Coins, Sparkles } from "lucide-react";
import { PRICING_OPTIONS, PRICING_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";
import { Container } from "@/components/site/content/blocks";
import { APP_URL, CONTACT_EMAIL } from "@/lib/seo";

const ICONS = [Sparkles, Coins, Building2];

export const Route = createFileRoute("/pricing")({
  head: () => sitePageHead(PRICING_PAGE),
  component: PricingPage,
});

function PricingPage() {
  return <SitePageView page={PRICING_PAGE} band={<PricingCards />} />;
}

function PricingCards() {
  return (
    <section aria-label="CourseSmith options" className="bg-background pt-14 md:pt-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {PRICING_OPTIONS.map((o, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            const featured = i === 0;
            const href = i === 2 ? `mailto:${CONTACT_EMAIL}` : APP_URL;
            return (
              <div
                key={o.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-7 shadow-soft ${
                  featured
                    ? "border-brand/40 bg-primary text-white shadow-lift"
                    : "border-border/80 bg-card"
                }`}
              >
                {featured ? (
                  <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand/35 blur-[90px]" />
                ) : null}
                <span
                  className={`relative grid h-12 w-12 place-items-center rounded-2xl ${
                    featured ? "bg-white/10 text-brand-soft" : "bg-brand/10 text-brand"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <p
                  className={`relative mt-5 font-display text-4xl font-extrabold ${featured ? "text-white" : "text-ink"}`}
                >
                  {o.tag}
                </p>
                <h2
                  className={`relative mt-1 font-display text-lg font-extrabold ${featured ? "text-white" : "text-ink"}`}
                >
                  {o.name}
                </h2>
                <p className={`relative mt-3 text-sm ${featured ? "text-white/75" : ""}`}>
                  {o.audience}
                </p>
                <p
                  className={`relative mt-2 flex-1 text-sm leading-relaxed ${featured ? "text-white/85" : "text-ink"}`}
                >
                  {o.includes}
                </p>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  className={`cta-fill relative mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                    featured
                      ? "bg-brand text-white hover:text-white"
                      : "border border-border bg-card text-primary hover:text-white"
                  }`}
                  style={{
                    ["--cta-fill" as string]: featured
                      ? "var(--color-brand-soft)"
                      : "var(--color-primary)",
                  }}
                >
                  {o.start}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
