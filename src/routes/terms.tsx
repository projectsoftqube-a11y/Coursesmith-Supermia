import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl } from "@/lib/seo";
import { LegalLayout, LegalSection, LegalList, Term } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | CourseSmith" },
      {
        name: "description",
        content:
          "The Terms of Service governing your access to and use of CourseSmith, the AI teaching assistant platform by SuperMIA.",
      },
      { property: "og:title", content: "Terms of Service | CourseSmith" },
      {
        property: "og:description",
        content:
          "The Terms of Service governing your access to and use of CourseSmith, the AI teaching assistant platform by SuperMIA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/terms") },
      { property: "og:image", content: absoluteUrl("/logo.png") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/logo.png") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="August 7, 2026"
      intro={
        "Welcome to CourseSmith. These Terms of Service (“Terms”) govern your access to and use of the CourseSmith application and services (“Service”). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service."
      }
    >
      <LegalSection index={1} title="Description of Service">
        <p>
          CourseSmith is an AI-powered teaching assistant platform designed to help educators
          generate lesson plans, assignments, test papers, and academic schedules based on uploaded
          syllabuses and teacher personas.
        </p>
      </LegalSection>

      <LegalSection index={2} title="User Accounts and Responsibilities">
        <LegalList
          items={[
            <>
              <Term>Account Registration:</Term> To use certain features, you must register for an
              account. You are responsible for maintaining the confidentiality of your account
              credentials and for all activities that occur under your account.
            </>,
            <>
              <Term>Accurate Information:</Term> You agree to provide accurate and complete
              information when creating your teaching persona and updating your profile.
            </>,
            <>
              <Term>Acceptable Use:</Term> You agree not to use the Service to:
              <LegalList
                className="mt-3"
                items={[
                  <>
                    Upload or generate content that is unlawful, harmful, threatening, abusive,
                    harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                  </>,
                  <>
                    Upload copyrighted materials (such as textbooks or syllabuses) for which you do
                    not have the right or permission to use and process.
                  </>,
                  <>
                    Attempt to reverse engineer, decompile, or hack the Service or its underlying AI
                    models.
                  </>,
                ]}
              />
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={3} title="Artificial Intelligence and Generated Content">
        <LegalList
          items={[
            <>
              <Term>Nature of AI:</Term> CourseSmith utilizes advanced Large Language Models (LLMs)
              to generate educational content. While we strive for high quality, AI-generated
              content may sometimes be inaccurate, incomplete, or inappropriate for your specific
              classroom needs.
            </>,
            <>
              <Term>Teacher Review Required:</Term>{" "}
              <Term>
                You acknowledge that CourseSmith is an assistant, not a replacement for professional
                educator judgment.
              </Term>{" "}
              You are solely responsible for reviewing, fact-checking, and modifying any generated
              lesson plans, test papers, and schedules before using them in an educational setting.
            </>,
            <>
              <Term>No Guarantees:</Term> We do not warrant the accuracy, completeness, or
              usefulness of any AI-generated content provided through the Service.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={4} title="Intellectual Property">
        <LegalList
          items={[
            <>
              <Term>Your Content:</Term> You retain all ownership rights to the original content you
              upload to the Service (e.g., your resume, original syllabuses). By uploading content,
              you grant CourseSmith a limited, non-exclusive license to process and store this data
              solely for the purpose of providing the Service to you.
            </>,
            <>
              <Term>Generated Content:</Term> You retain the rights to the lesson plans, schedules,
              and assignments generated specifically for you through your use of the Service,
              subject to the rights of any underlying third-party materials you provided.
            </>,
            <>
              <Term>Our Intellectual Property:</Term> The CourseSmith application, its design,
              logos, algorithms, and source code are the exclusive property of CourseSmith and its
              licensors.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={5} title="Credits and Usage Limits">
        <LegalList
          items={[
            <>
              Certain features of CourseSmith require the consumption of AI tokens or
              &ldquo;credits.&rdquo; We reserve the right to enforce usage limits, modify the credit
              system, or restrict access if excessive or abusive usage is detected.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={6} title="Termination">
        <p>
          We may terminate or suspend your access to the Service immediately, without prior notice
          or liability, for any reason whatsoever, including without limitation if you breach these
          Terms. Upon termination, your right to use the Service will immediately cease, and your
          persona and generated content may be deleted.
        </p>
      </LegalSection>

      <LegalSection index={7} title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, CourseSmith and its suppliers shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages, including loss
          of profits, data, or use, arising out of or related to your use of the Service or any
          AI-generated content.
        </p>
      </LegalSection>

      <LegalSection index={8} title="Changes to Terms">
        <p>
          We reserve the right to modify or replace these Terms at any time. We will notify you of
          any material changes by posting the new Terms on this page. Your continued use of the
          Service after any such changes constitutes your acceptance of the new Terms.
        </p>
      </LegalSection>

      <LegalSection index={9} title="Contact Information">
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:hello@supermia.ai"
            className="font-semibold text-brand underline-offset-4 transition-colors hover:underline"
          >
            hello@supermia.ai
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
