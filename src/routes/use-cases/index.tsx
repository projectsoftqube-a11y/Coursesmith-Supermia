import { createFileRoute } from "@tanstack/react-router";
import { HUBS } from "@/content/hubs";
import { hubHead } from "@/content/schema";
import { HubView, hubCrumbs, hubPages } from "@/components/site/content/HubView";

const hub = HUBS["use-cases"];

export const Route = createFileRoute("/use-cases/")({
  head: () => hubHead(hub, hubCrumbs(hub), hubPages(hub)),
  component: UseCasesHub,
});

function UseCasesHub() {
  return <HubView hub={hub} />;
}
