import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { UploadSection } from "@/components/site/UploadSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { BrochureSection } from "@/components/site/BrochureSection";
import { FAQSection } from "@/components/site/FAQSection";
import { FinaleSection, SiteFooter } from "@/components/site/FinaleSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CourseSmith: AI Lesson Plans, Quizzes & Curriculum Tools" },
      {
        name: "description",
        content:
          "CourseSmith turns textbooks, notes and PDFs into complete lesson plans, quizzes, assignments and rubrics with AI. An AI teaching operating system by SuperMIA.",
      },
      {
        property: "og:title",
        content: "CourseSmith: AI Lesson Plans, Quizzes & Curriculum Tools",
      },
      {
        property: "og:description",
        content:
          "CourseSmith turns textbooks, notes and PDFs into complete lesson plans, quizzes, assignments and rubrics with AI. An AI teaching operating system by SuperMIA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: absoluteUrl("/logo.png") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/logo.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SmoothScroll />
      <SiteNav />
      <Hero />
      <ProblemSection />
      <UploadSection />
      <WorkflowSection />
      <BrochureSection />
      <FAQSection />
      <FinaleSection />
      <SiteFooter />
    </main>
  );
}
