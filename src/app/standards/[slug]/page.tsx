import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { ContentPageView, contentCrumbs } from "@/components/site/content/ContentPageView";
import { getContentPage, PAGES_BY_GROUP } from "@/content";
import { contentPageHead } from "@/content/schema";

const GROUP = "standards";

export function generateStaticParams() {
  return PAGES_BY_GROUP[GROUP].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/standards/[slug]">): Promise<Metadata> {
  const page = getContentPage(GROUP, (await params).slug);
  return page ? contentPageHead(page, contentCrumbs(page)).metadata : {};
}

export default async function Page({ params }: PageProps<"/standards/[slug]">) {
  const page = getContentPage(GROUP, (await params).slug);
  if (!page) notFound();
  const head = contentPageHead(page, contentCrumbs(page));
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <ContentPageView page={page} />
    </>
  );
}
