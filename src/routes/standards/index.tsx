import { createFileRoute } from "@tanstack/react-router";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";

const hub = HUBS["standards"];

export const Route = createFileRoute("/standards/")({
  head: () => hubHead(hub, hubCrumbs(hub), hubPages(hub)),
  component: StandardsHub,
});

function StandardsHub() {
  return <HubView hub={hub} />;
}
