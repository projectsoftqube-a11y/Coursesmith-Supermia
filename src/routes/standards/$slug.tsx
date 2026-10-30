import { createFileRoute, notFound } from "@tanstack/react-router";
import { loadPage } from "@/content/load";
import { contentPageHead } from "@/content/schema";
import { ContentPageView, contentCrumbs } from "@/components/site/content/ContentPageView";

export const Route = createFileRoute("/standards/$slug")({
  // Page bodies load lazily so each group ships as its own chunk, not in every bundle.
  loader: async ({ params }) => {
    const page = await loadPage("standards", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) =>
    loaderData ? contentPageHead(loaderData.page, contentCrumbs(loaderData.page)) : {},
  component: StandardsPage,
});

function StandardsPage() {
  const { page } = Route.useLoaderData();
  return <ContentPageView page={page} />;
}
