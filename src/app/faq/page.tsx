import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/JsonLd";
import { ALL_FAQS, FAQ_GROUPS, FAQ_PAGE } from "@/content/faq";
import {
  CtaBand,
  FaqBand,
  PageHero,
  PageShell,
  PrimaryCta,
  SecondaryCta,
} from "@/components/site/content/blocks";
import { visualFor } from "@/content/visuals";
import { pageHead, webPageNode } from "@/lib/seo";

const head = pageHead({
  path: FAQ_PAGE.path,
  title: FAQ_PAGE.metaTitle,
  description: FAQ_PAGE.metaDescription,
  graph: [
    webPageNode({
      path: FAQ_PAGE.path,
      title: FAQ_PAGE.metaTitle,
      description: FAQ_PAGE.metaDescription,
      dateModified: FAQ_PAGE.dateModified,
      faqs: ALL_FAQS,
    }),
  ],
});

export const metadata: Metadata = head.metadata;

export default function Page() {
  return (
    <>
      <JsonLd data={head.jsonLd} />
      <FaqPage />
    </>
  );
}

function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={FAQ_PAGE.eyebrow}
        title={FAQ_PAGE.h1}
        answer={FAQ_PAGE.answer}
        visual={visualFor(FAQ_PAGE.path)}
        cardTitle={FAQ_PAGE.navLabel}
        updated={FAQ_PAGE.dateModified}
        actions={
          <>
            <PrimaryCta />
            <SecondaryCta href="mailto:hello@supermia.ai?subject=CourseSmith%20question">
              Email us your question
            </SecondaryCta>
          </>
        }
      />
      {FAQ_GROUPS.map((g, i) => (
        <FaqBand
          key={g.id}
          id={g.id}
          heading={g.title}
          intro={g.intro}
          faqs={g.faqs}
          openFirst={i === 0}
          tinted={i % 2 === 0}
          mascot={i === 0}
        />
      ))}
      <CtaBand
        title="Try it on one chapter."
        text="Upload your textbook, pick the chapter you teach next and see the lesson plan, test and answer key CourseSmith drafts. You review everything before it reaches your class."
      />
    </PageShell>
  );
}
