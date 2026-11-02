import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { PRICING_OPTIONS, PRICING_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";
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
    <section className="plans" aria-label="CourseSmith options">
      <div className="wrap">
        <ul className="plans-list">
          {PRICING_OPTIONS.map((o, i) => {
            const href = i === 2 ? `mailto:${CONTACT_EMAIL}` : APP_URL;
            return (
              <li key={o.name}>
                <article className={i === 0 ? "plan plan--lead" : "plan"}>
                  <p className="plan-tag">{o.tag}</p>
                  <h2>{o.name}</h2>
                  <dl>
                    <dt>Who it is for</dt>
                    <dd>{o.audience}</dd>
                    <dt>What you get</dt>
                    <dd>{o.includes}</dd>
                  </dl>
                  <a
                    href={href}
                    className={i === 0 ? "btn btn--solid" : "btn btn--line"}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    {o.start}
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
