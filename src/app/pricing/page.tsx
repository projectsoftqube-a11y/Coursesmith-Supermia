import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { PRICING_OPTIONS, PRICING_PAGE } from "@/content/site-pages";
import { Reveal } from "@/components/site/Reveal";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";
import { Container } from "@/components/site/content/blocks";
import { cn } from "@/lib/utils";
import { APP_URL, CONTACT_EMAIL } from "@/lib/seo";

const head = sitePageHead(PRICING_PAGE);

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <PricingPage />
    </>
  );
}

function PricingPage() {
  return <SitePageView page={PRICING_PAGE} band={<PricingCards />} />;
}

function PricingCards() {
  return (
    <section aria-label="CourseSmith options" className="relative bg-background py-12 md:py-16">
      <Container>
        <ul className="grid gap-4 lg:grid-cols-3">
          {PRICING_OPTIONS.map((o, i) => {
            const featured = i === 0;
            const href = i === 2 ? `mailto:${CONTACT_EMAIL}` : APP_URL;
            return (
              <li key={o.name}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-8",
                      featured
                        ? "border-border/80 bg-primary text-white shadow-lift"
                        : "border-border/80 bg-card shadow-soft",
                    )}
                  >
                    {featured ? (
                      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" />
                    ) : null}
                    <p
                      className={cn(
                        "relative font-display text-4xl font-extrabold sm:text-5xl",
                        featured ? "text-white" : "text-ink",
                      )}
                    >
                      {o.tag}
                    </p>
                    <h2
                      className={cn(
                        "relative mt-2 font-display text-xl font-extrabold",
                        featured ? "text-white" : "text-ink",
                      )}
                    >
                      {o.name}
                    </h2>
                    <p
                      className={cn(
                        "relative mt-3 text-sm",
                        featured ? "text-white/70" : "text-muted-foreground",
                      )}
                    >
                      {o.audience}
                    </p>
                    <p
                      className={cn(
                        "relative mt-2 flex-1 text-sm leading-relaxed",
                        featured ? "text-white/85" : "text-ink",
                      )}
                    >
                      {o.includes}
                    </p>
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                      className={cn(
                        "cta-fill relative mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-center text-sm font-medium [overflow-wrap:anywhere]",
                        featured
                          ? "bg-brand text-white hover:text-white"
                          : "border border-border bg-card text-primary hover:text-white",
                      )}
                      style={{
                        ["--cta-fill" as string]: featured
                          ? "var(--color-brand-soft)"
                          : "var(--color-primary)",
                      }}
                    >
                      {o.start}
                    </a>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
