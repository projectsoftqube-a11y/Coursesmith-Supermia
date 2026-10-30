import type { ContentSection, Faq } from "./types";
import { SITE_UPDATED } from "./hubs";

/** Site-level pages (pricing, about, contact). Same content model as the inner pages. */
export type SitePage = {
  path: string;
  navLabel: string;
  schemaType: "WebPage" | "AboutPage" | "ContactPage";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  answer: string;
  takeaways: string[];
  sections: ContentSection[];
  faqs: Faq[];
  dateModified: string;
};

/** Rendered as the pricing cards and as the comparison table, from one list. */
export const PRICING_OPTIONS = [
  {
    name: "Free start",
    tag: "Free",
    audience: "Any teacher trying CourseSmith",
    includes: "Free starter credits, every tool, no credit card",
    start: "Sign up at app.coursesmith.supermia.ai",
  },
  {
    name: "Monthly credits",
    tag: "Credits",
    audience: "Teachers using CourseSmith every week",
    includes: "A monthly credit allowance through the SuperMIA Agent Marketplace",
    start: "Continue from your CourseSmith account",
  },
  {
    name: "Schools and districts",
    tag: "Volume",
    audience: "Departments and whole schools",
    includes: "Volume pricing for many teachers",
    start: "Email hello@supermia.ai",
  },
];

export const PRICING_PAGE: SitePage = {
  path: "/pricing",
  navLabel: "Pricing",
  schemaType: "WebPage",
  metaTitle: "CourseSmith Pricing: Free to Start, Credit-Based",
  metaDescription:
    "Start CourseSmith free with starter credits and no credit card. Pay only for the AI generations you use, with volume pricing for schools and districts.",
  eyebrow: "Pricing",
  h1: "CourseSmith pricing: start free, pay for what you generate",
  answer:
    "CourseSmith is free to start. New teachers receive free starter credits on sign-up with no credit card required, and each AI generation uses credits. Ongoing use runs on a monthly credit allowance through the SuperMIA Agent Marketplace, and schools or districts can contact SuperMIA for volume pricing.",
  takeaways: [
    "CourseSmith is free to start and does not ask for a credit card at sign-up.",
    "Every new account receives free starter credits to try lesson plans, test papers and assignments.",
    "CourseSmith usage is credit-based, so credits are used each time the AI generates material.",
    "Schools, departments and districts can email hello@supermia.ai for volume pricing.",
  ],
  sections: [
    {
      heading: "How much does CourseSmith cost?",
      paragraphs: [
        "CourseSmith costs nothing to start. You create an account, receive free starter credits and can upload a textbook and generate materials straight away, without entering card details.",
        "After the starter credits, CourseSmith runs on credits. The SuperMIA product page lists CourseSmith at 200 credits per month through the SuperMIA Agent Marketplace, where SuperMIA's AI agents are offered.",
      ],
    },
    {
      heading: "How do CourseSmith credits work?",
      paragraphs: [
        "Credits are the unit CourseSmith uses to measure AI work. Each time CourseSmith generates something for you, such as a lesson plan, a test paper, an assignment or a schedule, credits are deducted from your balance.",
        "Your balance is shown in your account, so you can see how many credits remain before you generate more material.",
      ],
    },
    {
      heading: "Which option fits you?",
      paragraphs: [
        "Most individual teachers start with the free starter credits and continue on the monthly credit allowance. Schools usually want one arrangement for several teachers, which is what volume pricing is for.",
      ],
      table: {
        caption:
          "CourseSmith options as of October 2026. Prices are not published; contact SuperMIA for school quotes.",
        columns: ["Option", "Who it is for", "What you get", "How to start"],
        rows: PRICING_OPTIONS.map((o) => [o.name, o.audience, o.includes, o.start]),
      },
    },
    {
      heading: "What is included with every account?",
      paragraphs: [
        "Every CourseSmith account includes the full set of tools. Credits decide how much you generate, not which features you can open.",
      ],
      bullets: [
        "Textbook upload as PDF or Word (DOCX) with chapter and topic mapping",
        "A teacher persona built from your resume or entered by hand",
        "Lesson plans with your chosen duration and delivery methods",
        "Test papers and assignments with marks, answer keys and Word downloads",
        "Week-by-week academic schedules for a term",
        "CourseSmith Co-Pilot, the AI chat assistant on every page of the app",
        "Teaching analytics on your own planning activity",
      ],
    },
  ],
  faqs: [
    {
      q: "Is CourseSmith really free to start?",
      a: "Yes. You can sign up without a credit card and receive free starter credits. That is enough to upload a textbook and try lesson plans, test papers and assignments before you decide whether to keep using CourseSmith.",
    },
    {
      q: "What happens when my starter credits run out?",
      a: "Generating new material uses credits, so once your starter credits are spent you continue on a monthly credit allowance through the SuperMIA Agent Marketplace. Everything you already generated stays in your account.",
    },
    {
      q: "Do you offer pricing for schools and districts?",
      a: "Yes. Schools, departments and districts can email hello@supermia.ai to discuss volume pricing for several teachers. Include how many teachers and which subjects or grades you plan to cover.",
    },
    {
      q: "Are some features locked behind a paid plan?",
      a: "No. Every account can use every CourseSmith tool. Credits measure how much AI generation you use rather than unlocking extra features.",
    },
  ],
  dateModified: SITE_UPDATED,
};

export const ABOUT_PAGE: SitePage = {
  path: "/about",
  navLabel: "About",
  schemaType: "AboutPage",
  metaTitle: "About CourseSmith: The AI Teaching Assistant by SuperMIA",
  metaDescription:
    "CourseSmith is an AI teaching assistant built by SuperMIA, a Botfinity Inc. product from Grapevine, Texas, that turns your textbook into lesson materials.",
  eyebrow: "About",
  h1: "About CourseSmith",
  answer:
    "CourseSmith is an AI teaching assistant built by SuperMIA, the AI agent platform from Botfinity Inc. in Grapevine, Texas. It reads the textbook a teacher uploads, maps its chapters and topics, and generates lesson plans, test papers, assignments and term schedules from that material, with the teacher reviewing every output.",
  takeaways: [
    "CourseSmith is built by SuperMIA, an AI agent platform from Botfinity Inc.",
    "CourseSmith starts from the teacher's own textbook rather than a blank prompt.",
    "Teachers review and fact-check every CourseSmith output before using it in class.",
    "Uploaded documents are not used to train public AI models.",
  ],
  sections: [
    {
      heading: "What is CourseSmith?",
      paragraphs: [
        "CourseSmith is an AI teaching operating system for teachers. You upload a textbook or syllabus as a PDF or Word file, and CourseSmith turns it into a structured map of chapters and topics that every other tool builds from.",
        "From that map, CourseSmith generates lesson plans, test papers and assignments with answer keys, and week-by-week academic schedules. CourseSmith Co-Pilot, an AI chat assistant, is available on every page of the app.",
      ],
    },
    {
      heading: "Who builds CourseSmith?",
      paragraphs: [
        "CourseSmith is built by SuperMIA, the AI agent platform operated by Botfinity Inc. at 2451 W Grapevine Mills Cir #547, Grapevine, TX 76051. CourseSmith is one of the agents SuperMIA offers through its Agent Marketplace.",
      ],
    },
    {
      heading: "What principles shape CourseSmith?",
      paragraphs: [
        "CourseSmith is designed around a few commitments that come straight from its terms and privacy policy.",
      ],
      bullets: [
        "Teachers stay in charge: CourseSmith is an assistant, not a replacement for professional judgment.",
        "Your source comes first: materials are generated from the textbook you upload.",
        "Your data stays yours: you keep ownership of what you upload and what is generated for you.",
        "Privacy by default: AI providers process data under agreements that bar training public models on it.",
      ],
    },
    {
      heading: "Who is CourseSmith for?",
      paragraphs: [
        "CourseSmith is for K-12 teachers in any subject, plus tutors and homeschool educators who teach from a textbook. Departments use it to plan consistently from a shared book, and schools can arrange volume pricing.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is CourseSmith a SuperMIA product?",
      a: "Yes. CourseSmith is built and operated by SuperMIA, the AI agent platform from Botfinity Inc., and is available as an agent in the SuperMIA Agent Marketplace. You sign in to CourseSmith at app.coursesmith.supermia.ai.",
    },
    {
      q: "Does CourseSmith replace lesson planning by teachers?",
      a: "No. CourseSmith drafts lesson plans, tests and assignments from your textbook, but the terms of service are clear that teachers must review, fact-check and adapt every output before using it with students.",
    },
    {
      q: "How does CourseSmith handle my uploaded files?",
      a: "Uploads are stored in private cloud storage and processed only to provide the service. AI providers such as OpenAI process the text under data processing agreements and do not use it to train their public models. Deleting a syllabus deletes its files.",
    },
    {
      q: "How can I contact the CourseSmith team?",
      a: "Email hello@supermia.ai for support, school pricing, privacy questions or partnership requests. The contact page lists the mailing address for Botfinity Inc. in Grapevine, Texas.",
    },
  ],
  dateModified: SITE_UPDATED,
};

export const CONTACT_PAGE: SitePage = {
  path: "/contact",
  navLabel: "Contact",
  schemaType: "ContactPage",
  metaTitle: "Contact CourseSmith | Support and School Pricing",
  metaDescription:
    "Email hello@supermia.ai for CourseSmith support, school and district pricing, privacy requests or partnerships. Botfinity Inc., Grapevine, Texas.",
  eyebrow: "Contact",
  h1: "Contact the CourseSmith team",
  answer:
    "The CourseSmith team can be reached by email at hello@supermia.ai for account support, school and district volume pricing, privacy and data requests, and partnership questions. CourseSmith is operated by SuperMIA, a Botfinity Inc. company at 2451 W Grapevine Mills Cir #547, Grapevine, Texas 76051.",
  takeaways: [
    "The CourseSmith team answers support, pricing and privacy questions at hello@supermia.ai.",
    "Schools and districts should include their teacher count when asking for volume pricing.",
    "Account owners can delete syllabi, lesson plans and their persona from inside the app.",
  ],
  sections: [
    {
      heading: "How do I reach CourseSmith support?",
      paragraphs: [
        "Email hello@supermia.ai and describe what you were doing when the problem happened. Including the name of the syllabus, lesson plan or test paper involved makes it faster to look into.",
      ],
    },
    {
      heading: "What should I include in a request?",
      paragraphs: [
        "Different requests need different details, so a little context up front saves a reply.",
      ],
      table: {
        caption: "What to include when you email hello@supermia.ai.",
        columns: ["Request", "What to include"],
        rows: [
          [
            "Account or technical support",
            "Your account email, the page you were on and what you expected to happen",
          ],
          [
            "School or district pricing",
            "School name, number of teachers, and the subjects and grades to cover",
          ],
          [
            "Privacy or data request",
            "Your account email and whether you want to review, correct or delete data",
          ],
          ["Partnerships and press", "Your organization and a short description of the proposal"],
        ],
      },
    },
    {
      heading: "Where is CourseSmith based?",
      paragraphs: [
        "CourseSmith is operated by SuperMIA, a Botfinity Inc. company. The mailing address is 2451 W Grapevine Mills Cir #547, Grapevine, TX 76051, United States.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I delete my CourseSmith data myself?",
      a: "Yes. You can delete a syllabus, lesson plan or your teacher persona inside the app, and the associated files are removed from active cloud storage. For anything you cannot do yourself, email hello@supermia.ai.",
    },
    {
      q: "Is there a phone number for CourseSmith?",
      a: "CourseSmith support is handled by email at hello@supermia.ai, which lets the team look into your account details before replying. Schools that need a call can request one in their email.",
    },
    {
      q: "How do schools get a CourseSmith quote?",
      a: "Email hello@supermia.ai with your school or district name, how many teachers will use CourseSmith, and the subjects and grades involved. SuperMIA replies with volume pricing options.",
    },
  ],
  dateModified: SITE_UPDATED,
};

export const SITE_PAGES: SitePage[] = [PRICING_PAGE, ABOUT_PAGE, CONTACT_PAGE];
