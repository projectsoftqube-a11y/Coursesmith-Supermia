import type { Faq } from "./types";
import { SITE_UPDATED } from "./hubs";

/**
 * /faq, adapted from the SEO content package (Resources / 01 FAQ) with product
 * answers corrected against the app's own code: teacher-set lesson length, no
 * PDF export, Word (.docx) downloads for tests and assignments, no per-answer
 * explanations. Rendered and emitted as FAQPage schema from this one array.
 */

export type FaqGroup = { id: string; title: string; intro: string; faqs: Faq[] };

export const FAQ_PAGE = {
  path: "/faq",
  navLabel: "FAQ",
  metaTitle: "CourseSmith FAQ: Lesson Plans, Quizzes, Pricing and Data",
  metaDescription:
    "CourseSmith FAQ: what to upload, what lesson plans and tests include, Word downloads, the Co-Pilot assistant, starting free and how your files are handled.",
  eyebrow: "FAQ",
  h1: "CourseSmith FAQ: uploads, lesson plans, quizzes and data",
  answer:
    "CourseSmith is an AI teaching assistant that drafts lesson plans, test papers and assignments from a teacher's own textbook. These are straight answers on getting started, what you get, what it costs to start and how your materials are handled, based on the product, its privacy policy and its terms of service.",
  dateModified: SITE_UPDATED,
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    intro: "Start here if you are new to CourseSmith.",
    faqs: [
      {
        q: "What is CourseSmith?",
        a: "CourseSmith is an AI teaching assistant and lesson planner for teachers, built by SuperMIA. You upload a textbook, it maps the chapters and topics, then drafts lesson plans, test papers with answer keys, assignments and week-by-week schedules that you review before class.",
      },
      {
        q: "What do I need to upload to get started?",
        a: "A textbook or syllabus as a PDF or Word (DOCX) file of up to 40 MB, plus the book name, subject and grade. CourseSmith turns it into chapters and topics you can rename, add to or delete. Only upload books and materials you have the right to use, as the Terms of Service require.",
      },
      {
        q: "Who is CourseSmith for?",
        a: "CourseSmith is built for classroom teachers who plan from a textbook. Tutors and homeschool educators use the same tools, and heads of department can email hello@supermia.ai to ask about using it across a department.",
      },
      {
        q: "Who makes CourseSmith?",
        a: "CourseSmith is built by SuperMIA (supermia.ai), a Botfinity Inc. company. The address is 2451 W Grapevine Mills Cir #547, Grapevine, Texas, and the team can be reached at hello@supermia.ai.",
      },
    ],
  },
  {
    id: "lesson-plans",
    title: "Lesson plans",
    intro: "What CourseSmith drafts for each lesson.",
    faqs: [
      {
        q: "Can AI create lesson plans?",
        a: "Yes, as a first draft. CourseSmith turns the topics you pick from a textbook chapter into a lesson plan for the class length you set, and you review and adjust it before teaching. It works best from the material your class uses, which is why CourseSmith starts from your textbook rather than a blank prompt.",
      },
      {
        q: "What exactly does a generated lesson plan include?",
        a: "Each plan includes learning objectives, an in-depth explanation of the topic, a step-by-step delivery plan for each method you choose (direct instruction, an interactive activity or game, or real-world use cases), homework assignments and a project idea.",
      },
      {
        q: "How do I use AI for lesson planning without losing my own approach?",
        a: "Treat the AI draft as a starting point. CourseSmith uses a teacher persona, built from your resume or entered by hand, covering your subjects, experience and teaching style, to shape its drafts, and you decide what stays. Check the plan against the chapter and change what does not fit your class.",
      },
      {
        q: "Is AI lesson planning accurate?",
        a: "Not always, which is why review matters. The Terms of Service say CourseSmith does not guarantee the accuracy of AI-generated content and ask teachers to review and fact-check it. Starting from your own textbook keeps drafts close to the chapter, and reading them against the book helps you catch errors.",
      },
    ],
  },
  {
    id: "quizzes",
    title: "Tests, quizzes and assignments",
    intro: "How assessments are drafted.",
    faqs: [
      {
        q: "How do the quizzes and answer keys work?",
        a: "Choose specific chapters or the full book, then set how many questions and how many marks you want for each question type: multiple choice, short answer, long answer and fill in the blanks. Set an Easy, Medium and Hard mix, and use the Show answer toggle to see the answer key.",
      },
      {
        q: "Can CourseSmith create homework and assignments?",
        a: "Yes. Every lesson plan includes homework and a project idea, and the assignment generator builds practice sets from your chapters with the same question types, marks and answers. Assignments download as editable Word files.",
      },
      {
        q: "Can CourseSmith plan a whole term?",
        a: "Yes. Academic Schedules takes your syllabus, the number of weeks, hours per week and lesson length, and builds a week-by-week plan with each week's main topic, key objectives and chapter references. You can edit any week and mark it Planned or Completed.",
      },
    ],
  },
  {
    id: "assistant",
    title: "The AI teaching assistant",
    intro: "What CourseSmith Co-Pilot is for.",
    faqs: [
      {
        q: "What can the 24/7 AI teaching assistant help with?",
        a: "CourseSmith Co-Pilot is a chat assistant available on every page of the app, at any hour. Ask it to explain a concept, brainstorm classroom activities, adapt material for a different grade level or draft extra resources, and it takes into account the page you are working on.",
      },
      {
        q: "What is an artificial intelligence teaching assistant?",
        a: "An artificial intelligence teaching assistant is software that helps teachers with planning and preparation, such as drafting lessons, writing test questions or suggesting activities. CourseSmith is one example, built around the teacher's own textbook. It supports the teacher's work rather than replacing their judgment.",
      },
      {
        q: "How is CourseSmith different from ChatGPT?",
        a: "A general chatbot starts from your prompt and only sees your textbook if you attach it to that chat. CourseSmith starts from the book you upload, maps its chapters and topics first, and drafts lesson plans, tests, assignments and schedules from that material, following your teacher persona.",
      },
    ],
  },
  {
    id: "downloads",
    title: "Downloads",
    intro: "Getting your materials out of CourseSmith.",
    faqs: [
      {
        q: "How do I get my materials out of CourseSmith?",
        a: "Test papers and assignments download as editable Word (.docx) files, so you can adjust formatting, print them or share them with your department. Lesson plans and schedules stay in your CourseSmith account, where you can open them whenever you plan.",
      },
      {
        q: "Does CourseSmith connect to my LMS?",
        a: "No. CourseSmith does not connect to a learning management system. Test papers and assignments download as Word files you can upload wherever you share materials. To ask about a specific platform, email hello@supermia.ai.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    intro: "What it costs to start.",
    faqs: [
      {
        q: "How much does CourseSmith cost?",
        a: "CourseSmith is free to start, with free starter credits and no credit card needed, so you can upload a textbook and see a lesson plan before you decide anything. Ongoing use is credit-based, and schools can email hello@supermia.ai about volume pricing.",
      },
      {
        q: "Do I need a credit card to start?",
        a: "No. You can create an account and start with free starter credits without entering a credit card.",
      },
    ],
  },
  {
    id: "data",
    title: "Your materials and data",
    intro: "How uploads and generated content are handled.",
    faqs: [
      {
        q: "Who owns what I upload and what CourseSmith creates?",
        a: "The Terms of Service say you keep ownership of original content you upload, such as your resume or your own syllabus, and give CourseSmith a limited license to process and store it to provide the service. You also keep the rights to the lesson plans, schedules and assignments generated for you, subject to rights in third-party material such as a published textbook.",
      },
      {
        q: "Can I upload a published textbook?",
        a: "Only if you have the right or permission to use it. The Terms of Service do not allow uploading copyrighted material without that authority.",
      },
      {
        q: "Is my material used to train AI models?",
        a: "The privacy policy says the AI providers CourseSmith uses are bound by data processing agreements and do not use your data to train their public models. For anything more specific, email hello@supermia.ai.",
      },
      {
        q: "What happens when I delete something?",
        a: "When you delete a syllabus, lesson plan or teacher persona, the privacy policy says the associated files are automatically removed from active cloud storage and the vector databases that hold them. The policy does not mention backups or a retention period.",
      },
      {
        q: "What information does CourseSmith collect?",
        a: "The privacy policy lists account details (name, email and login details), teacher persona details (resume, professional experience, school affiliations, subjects taught and teaching philosophy), the course materials you upload or generate, and usage data such as features used and credits consumed.",
      },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.faqs);
