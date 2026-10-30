import { createFileRoute } from "@tanstack/react-router";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";

const hub = HUBS["features"];

export const Route = createFileRoute("/features/")({
  head: () => hubHead(hub, hubCrumbs(hub), hubPages(hub)),
  component: FeaturesHub,
});

function FeaturesHub() {
  return <HubView hub={hub} />;
}
