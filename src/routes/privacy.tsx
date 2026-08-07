import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection, LegalList, Term } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CourseSmith" },
      {
        name: "description",
        content:
          "How CourseSmith collects, uses, shares and safeguards your information when you use our AI-powered teacher assistant services.",
      },
      { property: "og:title", content: "Privacy Policy | CourseSmith" },
      {
        property: "og:description",
        content:
          "How CourseSmith collects, uses, shares and safeguards your information when you use our AI-powered teacher assistant services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="August 7, 2026"
      intro={
        "Welcome to CourseSmith. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our application and use our AI-powered teacher assistant services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application."
      }
    >
      <LegalSection index={1} title="Information We Collect">
        <p>
          We collect personal information that you voluntarily provide to us when you register on
          the application, express an interest in obtaining information about us or our products, or
          otherwise when you interact with us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with
          us and the application, the choices you make, and the products and features you use. The
          personal information we may collect includes the following:
        </p>
        <LegalList
          items={[
            <>
              <Term>Account Information:</Term> Name, email address, passwords, and security data.
            </>,
            <>
              <Term>Teacher Persona Data:</Term> Information provided to build your teaching
              persona, including your resume, professional experience, school affiliations, subjects
              taught, and teaching philosophy.
            </>,
            <>
              <Term>Course Material &amp; Content:</Term> Syllabuses (e.g., PDF uploads), lesson
              plans, assignments, test papers, and academic schedules that you create or upload to
              the platform.
            </>,
            <>
              <Term>Usage Data:</Term> Information about how you interact with our platform,
              including token usage (AI credits), features accessed, and session times.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={2} title="How We Use Your Information">
        <p>
          We use personal information collected via our application for a variety of business
          purposes described below. We process your personal information for these purposes in
          reliance on our legitimate business interests, in order to enter into or perform a
          contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>
        <LegalList
          items={[
            <>
              <Term>To Facilitate Account Creation and Logon Process:</Term> To manage your account
              and keep it in working order.
            </>,
            <>
              <Term>To Provide and Deliver Services:</Term> To power the core AI features of
              CourseSmith, including generating tailored lesson plans, test papers, and academic
              schedules based on your uploaded syllabuses and persona.
            </>,
            <>
              <Term>To Process AI Requests:</Term> Your uploaded documents (such as resumes and
              syllabuses) are processed using secure Large Language Models (LLMs) and vector
              databases to generate educational content.
            </>,
            <>
              <Term>To Manage User Credits:</Term> To monitor and deduct AI token credits based on
              your usage of our generation tools.
            </>,
            <>
              <Term>To Send Administrative Information:</Term> To send you product, service, and new
              feature information and/or information about changes to our terms, conditions, and
              policies.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={3} title="How We Share Your Information">
        <p>
          We only share information with your consent, to comply with laws, to provide you with
          services, to protect your rights, or to fulfill business obligations.
        </p>
        <LegalList
          items={[
            <>
              <Term>Third-Party Service Providers:</Term> We may share your data with third-party
              vendors, service providers, contractors, or agents who perform services for us or on
              our behalf. This specifically includes{" "}
              <Term>Artificial Intelligence (AI) providers (such as OpenAI)</Term> who process your
              text and document data to generate lesson plans and assignments. We ensure that these
              providers are bound by strict data processing agreements and do not use your data to
              train their public models.
            </>,
            <>
              <Term>Cloud Hosting:</Term> Your data, including uploaded files and vector databases,
              is securely hosted on our cloud infrastructure (e.g., AWS S3).
            </>,
            <>
              <Term>Legal Obligations:</Term> We may disclose your information where we are legally
              required to do so in order to comply with applicable law, governmental requests, a
              judicial proceeding, court order, or legal process.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={4} title="How We Keep Your Information Safe">
        <p>
          We have implemented appropriate technical and organizational security measures designed to
          protect the security of any personal information we process. For example:
        </p>
        <LegalList
          items={[
            <>
              Uploaded files (resumes, syllabuses) are securely stored in private cloud storage
              buckets.
            </>,
            <>Vector databases (FAISS) are securely managed and isolated per document.</>,
            <>
              Authentication tokens (JWT) are used to secure all API endpoints and ensure users can
              only access their own generated content.
            </>,
          ]}
        />
        <p>
          However, despite our safeguards and efforts to secure your information, no electronic
          transmission over the Internet or information storage technology can be guaranteed to be
          100% secure.
        </p>
      </LegalSection>

      <LegalSection index={5} title="Your Privacy Rights">
        <p>
          Depending on your region, you may have rights that allow you greater access to and control
          over your personal information. You may review, change, or terminate your account at any
          time.
        </p>
        <LegalList
          items={[
            <>
              <Term>Account Information:</Term> If you would at any time like to review or change
              the information in your account or terminate your account, you can log into your
              account settings and update your user profile or delete your persona.
            </>,
            <>
              <Term>Data Deletion:</Term> When you delete a syllabus, lesson plan, or your persona,
              we automatically delete the associated files from our active cloud storage and vector
              databases.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection index={6} title="Updates to This Notice">
        <p>
          We may update this privacy policy from time to time. The updated version will be indicated
          by an updated &ldquo;Revised&rdquo; date and the updated version will be effective as soon
          as it is accessible. If we make material changes to this privacy policy, we may notify you
          either by prominently posting a notice of such changes or by directly sending you a
          notification.
        </p>
      </LegalSection>

      <LegalSection index={7} title="Contact Us">
        <p>
          If you have questions or comments about this notice, you may email us at{" "}
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
