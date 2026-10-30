import type { ContentGroup, Faq } from "./types";

/**
 * Hub and site-level page data. Kept apart from the page bodies so the nav,
 * footer and hub templates never pull every page's copy into the bundle.
 */

/** Date the hub pages and site-level pages were last edited. */
export const SITE_UPDATED = "2026-10-30";

export type Hub = {
  group: ContentGroup;
  path: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  answer: string;
  intro: string;
  /** Heading above the hub's card grid. */
  listHeading: string;
  faqs: Faq[];
};

export const HUBS: Record<ContentGroup, Hub> = {
  features: {
    group: "features",
    path: "/features",
    label: "Features",
    metaTitle: "AI Teaching Tools: Lesson Plans, Quizzes | CourseSmith",
    metaDescription:
      "Every CourseSmith tool in one place: textbook-to-lesson-plan, AI quiz generator, term schedules, assignments and a 24/7 teaching assistant. Start free.",
    eyebrow: "Features",
    h1: "AI teaching tools built around your textbook",
    answer:
      "CourseSmith is a set of AI teaching tools that start from the textbook you already use. Upload a PDF or Word file and CourseSmith maps its chapters and topics, then generates lesson plans, test papers with answer keys, assignments, week-by-week academic schedules and a 24/7 Co-Pilot chat, with tests and assignments downloadable as Word files.",
    intro: "Pick a tool to see exactly what it produces and how to get the best results from it.",
    listHeading: "Every CourseSmith tool",
    faqs: [
      {
        q: "Which CourseSmith tool should I start with?",
        a: "Start with the textbook upload. Every other tool works from the chapters and topics CourseSmith extracts from your PDF or Word file, so uploading first means your lesson plans, quizzes and assignments all draw on the same source material.",
      },
      {
        q: "Do I need to pay to try the tools?",
        a: "No. CourseSmith is free to start: new accounts receive starter credits and no credit card is needed. Usage beyond the starter credits is credit-based, and schools can contact SuperMIA for volume pricing.",
      },
      {
        q: "Can I edit what CourseSmith generates?",
        a: "Yes, and you should. CourseSmith is an assistant, not a replacement for professional judgment, so review and adjust every lesson plan, quiz and assignment before you use it with students.",
      },
    ],
  },
  "use-cases": {
    group: "use-cases",
    path: "/use-cases",
    label: "Use cases",
    metaTitle: "AI Lesson Plans by Subject and Grade | CourseSmith",
    metaDescription:
      "See how CourseSmith builds lesson plans and quizzes for math, science, ELA, social studies, every grade band, homeschool families and whole schools.",
    eyebrow: "Use cases",
    h1: "AI lesson planning for every subject and grade",
    answer:
      "CourseSmith works for any subject and grade because it builds from the textbook a teacher uploads rather than a fixed library. Math, science, English language arts and social studies teachers, elementary through high school, homeschool families and whole departments use the same workflow: upload, generate, review, export.",
    intro:
      "Choose your subject, grade band or setting for a worked walkthrough and tips specific to it.",
    listHeading: "Pick your subject, grade or setting",
    faqs: [
      {
        q: "Does CourseSmith work for subjects that are not listed?",
        a: "Yes. CourseSmith reads whatever textbook or course PDF you upload, so it handles languages, electives and career courses the same way it handles core subjects. The listed pages cover the subjects and grades teachers ask about most.",
      },
      {
        q: "Can I use CourseSmith across several grade levels?",
        a: "Yes. Upload a textbook for each course you teach and generate materials per course. The AI teaching assistant can also adapt a lesson or explanation for a different grade level when you need a simpler or more advanced version.",
      },
      {
        q: "Is CourseSmith only for classroom teachers?",
        a: "No. Tutors and homeschool educators use the same tools, and departments can use CourseSmith to keep lesson plans consistent across teachers who share a course and textbook.",
      },
    ],
  },
  standards: {
    group: "standards",
    path: "/standards",
    label: "Standards by state",
    metaTitle: "State Standards Lesson Plans: TEKS, B.E.S.T. | CourseSmith",
    metaDescription:
      "Plain-English guides to Common Core, NGSS, TEKS, B.E.S.T. and 12 state frameworks, plus how to plan standards-referenced lessons with CourseSmith.",
    eyebrow: "Standards by state",
    h1: "Lesson planning with your state's learning standards",
    answer:
      "US learning standards are set state by state. Some states use Common Core-based standards and NGSS, while others such as Texas (TEKS), Florida (B.E.S.T.) and Virginia (SOL) write their own. Each guide here explains one framework and shows how to plan lessons with CourseSmith using your state-adopted textbook.",
    intro:
      "Each guide links to the official standards documents, explains how codes are written and shows a review checklist for standards-referenced plans.",
    listHeading: "Standards guides",
    faqs: [
      {
        q: "Does CourseSmith automatically align lessons to my state standards?",
        a: "CourseSmith builds lessons from the textbook you upload, so if your district uses a state-adopted textbook, the plans follow that content. You can paste a standard's wording into the AI teaching assistant to focus a lesson on it, then confirm the code against your state's official document.",
      },
      {
        q: "Where do I find the official standards for my state?",
        a: "Every state guide on this page links to the state education agency's official standards documents. Always treat those documents as the source of truth when you write standard codes into a lesson plan.",
      },
      {
        q: "Why does each state have a different framework?",
        a: "Education in the United States is governed by states, so each state board of education adopts its own learning standards. Many states adapted Common Core or NGSS, while others wrote their own frameworks and revise them on their own schedules.",
      },
    ],
  },
  compare: {
    group: "compare",
    path: "/compare",
    label: "Compare",
    metaTitle: "CourseSmith vs MagicSchool, Brisk, Khanmigo & ChatGPT",
    metaDescription:
      "Fair, sourced comparisons of CourseSmith with MagicSchool, Brisk, Eduaide, Khanmigo and ChatGPT, so you can pick the right AI tool for your classroom.",
    eyebrow: "Compare",
    h1: "How CourseSmith compares with other AI tools for teachers",
    answer:
      "CourseSmith differs from most AI tools for teachers in where it starts: it reads the textbook PDF you upload and builds lesson plans, quizzes and assignments from that source. Prompt-based suites, browser extensions and general chatbots start from a blank prompt instead. Each comparison here explains when each tool is the better fit.",
    intro:
      "Every competitor fact links to the competitor's own site and is dated, so you can check it.",
    listHeading: "Side-by-side comparisons",
    faqs: [
      {
        q: "How were these comparisons researched?",
        a: "Competitor details come from each company's own website as of October 2026, and every page lists its sources. Products change quickly, so check the linked pages for current features and pricing before you decide.",
      },
      {
        q: "Can I use CourseSmith alongside another AI tool?",
        a: "Yes. Many teachers use more than one tool. CourseSmith is strongest when you want a full set of lesson materials built from a specific textbook, and its tests and assignments download as editable Word files that work with whatever else you use.",
      },
      {
        q: "Which AI tool is best for teachers?",
        a: "It depends on the job. A tool grounded in your textbook suits full-unit planning, an extension suits feedback inside documents you already have, and a general chatbot suits open-ended brainstorming. The comparisons here break down each case.",
      },
    ],
  },
  resources: {
    group: "resources",
    path: "/resources",
    label: "Resources",
    metaTitle: "Lesson Planning Guides & Templates | CourseSmith",
    metaDescription:
      "Free guides for teachers: how to write a lesson plan, a copy-ready lesson plan template, AI lesson planning ethics and turning a PDF into a quiz.",
    eyebrow: "Resources",
    h1: "Free lesson planning guides and templates for teachers",
    answer:
      "CourseSmith resources are free, practical guides for teachers on lesson planning and assessment. They cover how to write a lesson plan step by step, a copy-ready lesson plan template, whether AI should write lesson plans, and how to turn a PDF into a quiz with an answer key, with or without AI.",
    intro: "Each guide cites its sources and works whether or not you use CourseSmith.",
    listHeading: "Guides and templates",
    faqs: [
      {
        q: "Are these guides free to use?",
        a: "Yes. Every guide and template is free to read and use in your own planning. The lesson plan template is laid out as a table so you can copy it straight into a document.",
      },
      {
        q: "Do I need CourseSmith to use these guides?",
        a: "No. Each guide explains the manual method first. Where CourseSmith can speed up a step, the guide says so in a separate section near the end.",
      },
      {
        q: "How often are the guides updated?",
        a: "Each guide shows the date it was last updated at the top of the page. Guides are reviewed when the underlying guidance or the product changes.",
      },
    ],
  },
};

export const GROUP_ORDER: ContentGroup[] = [
  "features",
  "use-cases",
  "standards",
  "compare",
  "resources",
];

/** Site-level pages outside the content groups, for sitemap / llms.txt / footer. */
export const STATIC_PAGES: { path: string; label: string; blurb: string }[] = [
  {
    path: "/pricing",
    label: "Pricing",
    blurb: "Free to start with starter credits; volume pricing for schools.",
  },
  {
    path: "/faq",
    label: "FAQ",
    blurb: "Straight answers on uploads, lesson plans, tests, pricing and your data.",
  },
  { path: "/about", label: "About", blurb: "Who builds CourseSmith and why." },
  { path: "/contact", label: "Contact", blurb: "Email the CourseSmith team at SuperMIA." },
  { path: "/privacy", label: "Privacy Policy", blurb: "How CourseSmith handles your data." },
  { path: "/terms", label: "Terms of Service", blurb: "The terms for using CourseSmith." },
];
