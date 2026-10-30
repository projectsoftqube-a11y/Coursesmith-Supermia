import { createFileRoute, notFound } from "@tanstack/react-router";
import { loadPage } from "@/content/load";
import { contentPageHead } from "@/content/schema";
import { ContentPageView, contentCrumbs } from "@/components/site/content/ContentPageView";

export const Route = createFileRoute("/resources/$slug")({
  // Page bodies load lazily so each group ships as its own chunk, not in every bundle.
  loader: async ({ params }) => {
    const page = await loadPage("resources", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) =>
    loaderData ? contentPageHead(loaderData.page, contentCrumbs(loaderData.page)) : {},
  component: ResourcesPage,
});

function ResourcesPage() {
  const { page } = Route.useLoaderData();
  return <ContentPageView page={page} />;
}
