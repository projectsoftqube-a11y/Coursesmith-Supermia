import { createFileRoute } from "@tanstack/react-router";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";

const hub = HUBS["compare"];

export const Route = createFileRoute("/compare/")({
  head: () => hubHead(hub, hubCrumbs(hub), hubPages(hub)),
  component: CompareHub,
});

function CompareHub() {
  return <HubView hub={hub} />;
}
