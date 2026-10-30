import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { CONTACT_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";

const head = sitePageHead(CONTACT_PAGE);

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <ContactPage />
    </>
  );
}

function ContactPage() {
  return <SitePageView page={CONTACT_PAGE} />;
}
