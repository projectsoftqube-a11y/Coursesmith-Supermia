import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { pageHead, webPageNode } from "@/lib/seo";
import { HOME_FAQS } from "@/content/home";
import { SITE_UPDATED } from "@/content/hubs";

import { SmoothScroll } from "@/components/site/SmoothScroll";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { UploadSection } from "@/components/site/UploadSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { DemoVideoSection } from "@/components/site/DemoVideoSection";
import { BrochureSection } from "@/components/site/BrochureSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinaleSection, SiteFooter } from "@/components/site/FinaleSection";

const HOME_TITLE = "CourseSmith: AI Lesson Plans, Quizzes & Curriculum Tools";
const HOME_DESCRIPTION =
  "CourseSmith turns textbook PDFs into lesson plans, quizzes, assignments and term schedules with AI. A teaching assistant by SuperMIA. Start free.";

const head = pageHead({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  graph: [
    webPageNode({
      path: "/",
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      dateModified: SITE_UPDATED,
      faqs: HOME_FAQS,
    }),
  ],
});

export const metadata: Metadata = head.metadata;

export default function Index() {
  return (
    <main>
      <JsonLd data={head.jsonLd} />
      <SmoothScroll />
      <SiteNav />
      <Hero />
      <ProblemSection />
      <UploadSection />
      <WorkflowSection />
      <DemoVideoSection />
      <BrochureSection />
      <FAQSection />
      <FinaleSection />
      <SiteFooter />
    </main>
  );
}
