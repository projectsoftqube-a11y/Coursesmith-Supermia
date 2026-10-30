import { createFileRoute } from "@tanstack/react-router";
import { ABOUT_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";

export const Route = createFileRoute("/about")({
  head: () => sitePageHead(ABOUT_PAGE),
  component: AboutPage,
});

function AboutPage() {
  return <SitePageView page={ABOUT_PAGE} />;
}
