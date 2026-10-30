import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";

const hub = HUBS["standards"];
const head = hubHead(hub, hubCrumbs(hub), hubPages(hub));

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <HubView hub={hub} />
    </>
  );
}
