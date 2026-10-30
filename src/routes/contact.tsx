import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_PAGE } from "@/content/site-pages";
import { SitePageView, sitePageHead } from "@/components/site/content/SitePageView";

export const Route = createFileRoute("/contact")({
  head: () => sitePageHead(CONTACT_PAGE),
  component: ContactPage,
});

function ContactPage() {
  return <SitePageView page={CONTACT_PAGE} />;
}
