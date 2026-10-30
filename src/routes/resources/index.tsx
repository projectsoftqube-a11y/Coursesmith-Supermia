import { createFileRoute } from "@tanstack/react-router";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";

const hub = HUBS["resources"];

export const Route = createFileRoute("/resources/")({
  head: () => hubHead(hub, hubCrumbs(hub), hubPages(hub)),
  component: ResourcesHub,
});

function ResourcesHub() {
  return <HubView hub={hub} />;
}
