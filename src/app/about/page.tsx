import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { ABOUT_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";

const head = sitePageHead(ABOUT_PAGE);

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <AboutPage />
    </>
  );
}

function AboutPage() {
  return <SitePageView page={ABOUT_PAGE} />;
}
