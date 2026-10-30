import type { ContentPage } from "./types";

const DATE = "2026-10-30";

const MAGICSCHOOL_SOURCES = [
  { label: "MagicSchool homepage (as of October 2026)", url: "https://www.magicschool.ai/" },
  { label: "MagicSchool pricing (as of October 2026)", url: "https://www.magicschool.ai/pricing" },
  {
    label: "MagicSchool Lesson Plan tool (as of October 2026)",
    url: "https://www.magicschool.ai/tools/lesson-plan",
  },
];

const BRISK_SOURCES = [
  { label: "Brisk Teaching homepage (as of October 2026)", url: "https://www.briskteaching.com/" },
  {
    label: "Brisk plans and pricing (as of October 2026)",
    url: "https://www.briskteaching.com/plans",
  },
  { label: "Brisk FAQ (as of October 2026)", url: "https://www.briskteaching.com/faq" },
];

const EDUAIDE_SOURCES = [
  { label: "Eduaide.ai homepage (as of October 2026)", url: "https://www.eduaide.ai/" },
  { label: "Eduaide.ai pricing (as of October 2026)", url: "https://www.eduaide.ai/pricing" },
];

const KHANMIGO_SOURCES = [
  { label: "Khanmigo homepage (as of October 2026)", url: "https://www.khanmigo.ai/" },
  {
    label: "Khan Academy blog: Why we're offering Khanmigo for teachers for free",
    url: "https://blog.khanacademy.org/?p=16409",
  },
  {
    label: "Khan Academy for teachers (as of October 2026)",
    url: "https://www.khanacademy.org/teachers",
  },
];

const CS_EXPORT =
  "Tests and assignments download as editable Word (.docx) files; lesson plans are not exported";
const CS_PRICING = "Free to start with starter credits, no credit card; credit-based usage";
const CS_ANSWER_KEY = "Yes, a Show answer toggle reveals the answer key";

export const COMPARE_PAGES: ContentPage[] = [
  // 1. MagicSchool
  {
    slug: "magicschool-alternative",
    group: "compare",
    navLabel: "MagicSchool Alternative",
    navBlurb: "MagicSchool vs CourseSmith: topic-first tools or textbook-first plans",
    metaTitle: "MagicSchool Alternative for Textbook Lessons | CourseSmith",
    metaDescription:
      "Compare MagicSchool and CourseSmith on starting point, textbook grounding, answer keys, export and pricing. Try CourseSmith free, no credit card.",
    eyebrow: "Compare",
    h1: "A MagicSchool alternative built around your textbook",
    answer:
      "A good MagicSchool alternative depends on where your lessons start. MagicSchool offers 80+ teacher tools that work from a topic, grade and standard you type. CourseSmith starts from the textbook PDF or DOCX you upload, then builds lesson plans of any length you set, tests with answer keys and assignments from its chapters and topics.",
    definition:
      "A MagicSchool alternative is an AI teaching tool a teacher uses in place of, or alongside, MagicSchool for lesson planning, quizzes and classroom materials.",
    takeaways: [
      "As of October 2026, MagicSchool lists 80+ teacher tools and a Forever Free plan, with unlimited generations on its paid Plus plan.",
      "CourseSmith builds lesson plans, tests and assignments from the textbook a teacher uploads, so output follows that book's chapters and topics.",
      "CourseSmith tests mix multiple choice, short answer, long answer and fill-in-the-blank questions, with an answer key behind a Show answer toggle.",
      "MagicSchool is the stronger pick for a wide catalog of quick tools and student-facing activities, while CourseSmith fits teachers who plan chapter by chapter from one book.",
    ],
    sections: [
      {
        heading: "What does MagicSchool do well?",
        paragraphs: [
          "MagicSchool does breadth well. As of October 2026, its homepage lists 80+ teacher tools, including a lesson plan generator, a multiple choice quiz tool, a presentation generator, writing feedback, report card comments and an IEP drafting tool. A teacher who wants one login for many small tasks gets a lot in one place.",
          "Its Lesson Plan tool asks for subject, grade level, standards and available time, then builds those standards into objectives, activities and assessment. MagicSchool's pricing page lists one-click Google and Microsoft exports on every plan, and its Plus plan adds 50+ student tools and student learning insights.",
        ],
      },
      {
        heading: "How is CourseSmith different from MagicSchool?",
        paragraphs: [
          "CourseSmith differs mainly in its starting point. You upload a textbook or syllabus as a PDF or DOCX of up to 40 MB, enter the book name, subject and grade, and CourseSmith generates its chapters and topics, which you can rename, add to or delete.",
          "For a lesson, you pick a chapter and topics, choose one or more delivery methods (direct instruction, interactive activity or game, real-world use cases) and set the lecture length in minutes. Each plan returns learning objectives, an in-depth explanation of the topic, a step-by-step delivery plan for each method, homework assignments and a project idea.",
        ],
      },
      {
        heading: "How do MagicSchool and CourseSmith compare feature by feature?",
        paragraphs: [
          "The two tools solve different first problems: MagicSchool starts from what you type, CourseSmith starts from the book you teach. MagicSchool cells reflect its own website as of October 2026, and any cell its site does not answer reads Not verified.",
        ],
        table: {
          caption: "MagicSchool vs CourseSmith, as of October 2026",
          columns: ["Question", "CourseSmith", "MagicSchool"],
          rows: [
            [
              "Starting point",
              "Your uploaded textbook or syllabus (PDF or DOCX, up to 40 MB)",
              "A subject, grade level, standards and time you enter",
            ],
            [
              "Grounded in your uploaded textbook",
              "Yes, plans and tests come from the book's chapters and topics",
              "District document uploads listed on Enterprise; Not verified for Free or Plus",
            ],
            [
              "Lesson plan format",
              "Teacher-set length; objectives, explanation, delivery plan per method, homework, project idea",
              "Structured plan with standards built into objectives, activities and assessment",
            ],
            ["Quiz answer keys", CS_ANSWER_KEY, "Not verified"],
            [
              "Range of tools",
              "Focused set: lesson planner, tests, assignments, schedules, Co-Pilot chat, teaching analytics",
              "80+ teacher tools; 50+ student tools on Plus",
            ],
            ["Export", CS_EXPORT, "Google and Microsoft exports on all plans"],
            [
              "Pricing model",
              CS_PRICING,
              "Forever Free plan; Plus at USD 8.33 per user per month billed annually or USD 12.99 monthly; Enterprise by quote",
            ],
          ],
        },
      },
      {
        heading: "When should a teacher pick MagicSchool instead?",
        paragraphs: [
          "Pick MagicSchool if your week is full of varied small tasks such as report card comments, professional emails, text rewriting, IEP drafts and writing feedback. CourseSmith does not offer those tools, and MagicSchool covers them under one account.",
          "MagicSchool also fits teachers who want student-facing AI activities, which its pricing page lists on Plus, and districts that need single sign-on, custom privacy agreements and admin controls, which it lists on Enterprise. If you rarely teach from a single textbook, a topic-first tool may suit you better.",
        ],
      },
      {
        heading: "When is CourseSmith the better fit?",
        paragraphs: [
          "CourseSmith fits best when a textbook already defines your course. Its Academic Schedules feature takes the syllabus, planned weeks, hours per week and lecture length, then builds a week-by-week plan with each week's main topic, key objectives and chapter references.",
          "It also suits teachers who want planning and assessment to match the pages students actually read. If your district uses a state-adopted textbook, your plans follow that content, and you can paste a named standard into the CourseSmith Co-Pilot chat, then verify the code against the official document yourself.",
        ],
        bullets: [
          "You teach from one core textbook per course.",
          "You want tests with answer keys drawn from the chapters you just taught.",
          "You want editable Word files you can adjust before handing out.",
        ],
      },
      {
        heading: "How do you try CourseSmith alongside MagicSchool?",
        paragraphs: [
          "Running both tools on the same chapter for one week is the fairest test. Keep whichever output needs fewer edits for your class.",
        ],
        steps: [
          {
            name: "Pick one upcoming chapter",
            text: "Choose a chapter you will teach in the next two weeks so you can judge output against a real lesson.",
          },
          {
            name: "Upload the textbook",
            text: "Sign up free with starter credits, no credit card needed, and upload the textbook PDF or DOCX.",
          },
          {
            name: "Generate a plan and a test",
            text: "Create a lesson plan at your usual class length and a test for that chapter, setting question counts and marks for each type.",
          },
          {
            name: "Review and download",
            text: "Show the answer key, check every item against the book, then download the test as an editable Word file.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a free MagicSchool alternative?",
        a: "Yes. CourseSmith is free to start: you get starter credits on sign-up and no credit card is needed. Usage after that is credit-based, and schools can contact SuperMIA for volume pricing. As of October 2026, MagicSchool also offers a Forever Free plan, so a teacher can try both at no cost before deciding.",
      },
      {
        q: "Can I use MagicSchool and CourseSmith together?",
        a: "Yes. Plenty of teachers keep one tool for small daily tasks and another for chapter planning. You could draft report card comments in MagicSchool and build chapter lesson plans and tests in CourseSmith from the textbook you upload. Neither tool requires you to stop using the other.",
      },
      {
        q: "Does CourseSmith align lessons to state standards automatically?",
        a: "No. CourseSmith builds from the textbook you upload and does not tag output with standard codes. If your textbook is state-adopted, plans follow its content. You can paste a named standard into the Co-Pilot chat and ask it to work toward that standard, then verify the code against your state's official document.",
      },
      {
        q: "Do I need to review what CourseSmith generates?",
        a: "Yes. CourseSmith is an assistant, not a replacement for professional judgment. AI output can be inaccurate, so its terms ask teachers to review and fact-check lesson plans, tests and answer keys before classroom use. Tests and assignments download as editable Word files, so you can correct anything before sharing.",
      },
      {
        q: "What happens to the textbook I upload to CourseSmith?",
        a: "According to the CourseSmith privacy policy, uploads sit in private cloud storage, and AI providers process text under data processing agreements and do not use it to train their public models. Deleting a syllabus, lesson plan or persona deletes the associated files, and token-authenticated access means you only see your own content.",
      },
    ],
    sources: [...MAGICSCHOOL_SOURCES],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/pricing",
      "/compare/best-ai-tools-for-teachers",
    ],
    primaryKeyword: "magicschool alternative",
    secondaryKeywords: ["magicschool vs coursesmith", "free magicschool alternative"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // 2. Brisk
  {
    slug: "brisk-alternative",
    group: "compare",
    navLabel: "Brisk Alternative",
    navBlurb: "Brisk vs CourseSmith: browser extension or whole-textbook planning",
    metaTitle: "Brisk Teaching Alternative for Textbook Planning",
    metaDescription:
      "Brisk Teaching vs CourseSmith: compare starting point, textbook grounding, answer keys, export and pricing. Start CourseSmith free with starter credits.",
    eyebrow: "Compare",
    h1: "A Brisk Teaching alternative for planning a whole course from your textbook",
    answer:
      "The right Brisk Teaching alternative depends on how you plan. Brisk is a Chrome and Edge extension that creates materials from whatever doc, PDF, article or video you have open. CourseSmith turns your whole uploaded textbook into chapters and topics, then builds lesson plans, tests with answer keys, assignments and week-by-week schedules across the term.",
    definition:
      "A Brisk Teaching alternative is an AI tool teachers use instead of, or next to, the Brisk browser extension to create lessons, quizzes and classroom materials.",
    takeaways: [
      "As of October 2026, Brisk describes itself as a free Chrome and Edge extension that works inside Google's Docs and Slides, Microsoft Word, PDFs, web articles and YouTube.",
      "Brisk is strong at feedback on student writing, with glow-and-grow comments and batch feedback on its free plan.",
      "CourseSmith reads an uploaded textbook or syllabus and organizes it into chapters and topics before generating any lesson.",
      "Teachers who work inside open documents and need fast feedback may prefer Brisk, while teachers who plan a full term from one textbook may prefer CourseSmith.",
    ],
    sections: [
      {
        heading: "What does Brisk Teaching do well?",
        paragraphs: [
          "Brisk does in-place work well. As of October 2026, its FAQ calls it a free Chrome and Edge extension that works inside Google's Docs and Slides and Microsoft Word and PowerPoint, plus web articles, PDFs, online textbooks, images and YouTube. You stay in the page you already have open.",
          "From an open source, Brisk's Create option can produce presentations, guided notes, quizzes and practice activities, with grade level and question count set by you. Its free plan lists 20+ tools, unlimited usage, materials in 50+ languages, and feedback tools such as glow-and-grow comments and batch feedback with an upload limit.",
        ],
      },
      {
        heading: "How is CourseSmith different from Brisk?",
        paragraphs: [
          "CourseSmith works at the level of the whole course rather than the open page. You upload a textbook or syllabus as a PDF or DOCX of up to 40 MB, and CourseSmith generates its chapters and topics, which you can rename, add to or delete.",
          "From that structure it generates lesson plans at the length you set, tests, assignments and Academic Schedules that lay out the term week by week. A teaching persona, filled in from your resume, shapes how plans are written, and the CourseSmith Co-Pilot chat on every page handles quick requests like brainstorming an activity.",
        ],
      },
      {
        heading: "How do Brisk and CourseSmith compare side by side?",
        paragraphs: [
          "Brisk and CourseSmith overlap on quizzes and lesson materials but differ on where they run and what they read. Brisk cells come from Brisk's own site as of October 2026, and anything its site does not state reads Not verified.",
        ],
        table: {
          caption: "Brisk Teaching vs CourseSmith, as of October 2026",
          columns: ["Question", "CourseSmith", "Brisk Teaching"],
          rows: [
            [
              "Starting point",
              "Your uploaded textbook or syllabus (PDF or DOCX, up to 40 MB)",
              "Any doc, PDF, article or video open in Chrome or Edge",
            ],
            [
              "Grounded in your uploaded textbook",
              "Yes, the whole book becomes editable chapters and topics",
              "Works from the source you open, including PDFs and online textbooks",
            ],
            ["Where it runs", "Web app", "Chrome and Edge extension; not supported on mobile"],
            ["Quiz answer keys", CS_ANSWER_KEY, "Not verified"],
            [
              "Feedback on student writing",
              "Not a CourseSmith feature",
              "Glow-and-grow comments, next steps and batch feedback",
            ],
            ["Export", CS_EXPORT, "Output as a Google Form, Google Doc or Word doc"],
            [
              "Pricing model",
              CS_PRICING,
              "Free plan for teachers; Premium and Intelligence tiers at custom pricing for schools and districts",
            ],
          ],
        },
      },
      {
        heading: "When should a teacher pick Brisk instead?",
        paragraphs: [
          "Pick Brisk if most of your prep happens inside Google's Docs and Slides or Microsoft Word and you want help without leaving that window. It is also the better fit if feedback on student drafts is your biggest time cost, since its free plan includes feedback tools that CourseSmith does not offer.",
          "Brisk suits teachers who pull from many sources each week, such as a news article on Monday and a video on Wednesday. Its paid school tiers add student AI activities through Brisk Boost and a district admin dashboard, which matters if your school wants a managed rollout.",
        ],
      },
      {
        heading: "When is CourseSmith the better fit than Brisk?",
        paragraphs: [
          "CourseSmith is the better fit when one textbook drives the whole course and you want plans for many chapters, not one page at a time. Because the book is uploaded once, every later lesson, test and assignment draws from the same chapters and topics.",
          "It also helps when you want tests built to a blueprint. You set the number of questions and marks for multiple choice, short answer, long answer and fill in the blanks, choose an Easy, Medium and Hard mix, and download the result as an editable Word file.",
        ],
      },
      {
        heading: "How do you move a unit from Brisk to CourseSmith?",
        paragraphs: [
          "Testing one unit in CourseSmith takes an afternoon, and you can keep Brisk installed for feedback work.",
        ],
        steps: [
          {
            name: "Create a free account",
            text: "Sign up with free starter credits; no credit card is needed.",
          },
          {
            name: "Upload your textbook",
            text: "Upload the PDF or DOCX, enter the book name, subject and grade, and review the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload your resume to fill in experience, subjects and teaching style, then review it.",
          },
          {
            name: "Generate and review the unit",
            text: "Create lesson plans and a test for one unit, check them against the book, then download the test.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is Brisk Teaching free?",
        a: "As of October 2026, Brisk's FAQ describes it as a completely free Chrome and Edge extension, and its plans page lists a free teacher plan with 20+ tools. Schools and districts can buy Premium or Intelligence tiers at custom pricing. New sign-ups get a 14-day premium trial, according to the FAQ.",
      },
      {
        q: "Can CourseSmith run inside a Google Doc like Brisk?",
        a: "No. CourseSmith is a separate web app rather than a browser extension. You upload your textbook there, generate plans and tests, and download tests and assignments as editable Word files. If working inside an open document is essential to you, Brisk is designed for that workflow.",
      },
      {
        q: "Which tool is better for a teacher with no fixed textbook?",
        a: "A teacher without a core textbook may get more from Brisk, because it works from any article, PDF or video you open. CourseSmith is built around an uploaded book or syllabus, so it shines when one text anchors the course and you want lessons that follow its chapter order.",
      },
      {
        q: "Does CourseSmith give feedback on student essays?",
        a: "No. CourseSmith focuses on planning: lesson plans, tests with answer keys, assignments and schedules, plus the Co-Pilot chat. It does not grade or comment on student work, and its analytics cover only the teacher's own activity. Teachers who need writing feedback often pair it with a tool such as Brisk.",
      },
      {
        q: "How does CourseSmith charge after the free credits?",
        a: "CourseSmith uses AI credits deducted per generation. You get free starter credits on sign-up with no credit card, and the supermia.ai product page lists 200 credits per month through the SuperMIA Agent Marketplace. Schools and departments can email hello@supermia.ai for volume pricing. There are no published dollar prices.",
      },
    ],
    sources: [...BRISK_SOURCES],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/compare/magicschool-alternative",
      "/pricing",
    ],
    primaryKeyword: "brisk teaching alternative",
    secondaryKeywords: ["brisk vs coursesmith"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // 3. Eduaide
  {
    slug: "eduaide-alternative",
    group: "compare",
    navLabel: "Eduaide Alternative",
    navBlurb: "Eduaide vs CourseSmith: 110+ templates or textbook-first course plans",
    metaTitle: "Eduaide Alternative for Textbook Lessons | CourseSmith",
    metaDescription:
      "Eduaide vs CourseSmith: compare starting point, uploads, quiz answer keys, export and pricing. Build plans from your own textbook. Start free today.",
    eyebrow: "Compare",
    h1: "An Eduaide alternative that plans the course from your textbook",
    answer:
      "Choosing an Eduaide alternative comes down to breadth versus course structure. Eduaide offers 110+ resource templates and flexible exports. CourseSmith turns an uploaded textbook into chapters and topics, then generates lesson plans, tests with answer keys, assignments and week-by-week schedules in book order. Both tools start free with credits, so testing each on one chapter costs nothing.",
    definition:
      "An Eduaide alternative is an AI planning tool a teacher uses instead of, or with, Eduaide.ai to create lessons, assessments and classroom resources.",
    takeaways: [
      "As of October 2026, Eduaide advertises 110+ classroom resource templates and an Assessment Builder with nine question types.",
      "Eduaide exports to Google's Docs and Forms, DOCX, plain text and PDF, which suits teachers who move work between systems.",
      "CourseSmith reads an uploaded textbook or syllabus and builds its lesson plans and tests from that book's chapters and topics.",
      "Eduaide's free plan and CourseSmith's free start are both credit-based, so a teacher can compare real output before paying anything.",
    ],
    sections: [
      {
        heading: "What does Eduaide do well?",
        paragraphs: [
          "Eduaide does variety well. As of October 2026, its homepage advertises over 110 classroom resource templates, covering lesson plans, discussion activities, graphic organizers and review games built from a topic, objective or source.",
          "Its Assessment Builder offers nine question types with difficulty controls and adjustable length and point values. Evaluators check grade level, text complexity and prior knowledge demands before you teach, and finished work exports to Google's Docs and Forms, DOCX, plain text or PDF.",
        ],
      },
      {
        heading: "How is CourseSmith different from Eduaide?",
        paragraphs: [
          "CourseSmith differs by treating the textbook as the course. You upload a PDF or DOCX of up to 40 MB once, and CourseSmith generates its chapters and topics, which you can rename, add to or delete. Academic Schedules then map the term week by week with each week's main topic, key objectives and chapter references.",
          "Lesson plans run as long as you set and cover the delivery methods you pick, returning objectives, an in-depth explanation, a step-by-step delivery plan, homework and a project idea. Tests mix multiple choice, short answer, long answer and fill in the blanks, with counts, marks and an Easy, Medium and Hard mix you control.",
        ],
      },
      {
        heading: "How do Eduaide and CourseSmith compare?",
        paragraphs: [
          "Eduaide gives you more formats, and CourseSmith gives you a course built from one book. Eduaide cells reflect its homepage and pricing page as of October 2026, and gaps read Not verified.",
        ],
        table: {
          caption: "Eduaide vs CourseSmith, as of October 2026",
          columns: ["Question", "CourseSmith", "Eduaide"],
          rows: [
            [
              "Starting point",
              "Your uploaded textbook or syllabus (PDF or DOCX, up to 40 MB)",
              "A topic, objective or source you provide",
            ],
            [
              "Grounded in your uploaded textbook",
              "Yes, the whole book becomes editable chapters and topics",
              "Uploaded documents as context: limited on Free, up to 3 on Pro",
            ],
            [
              "Resource range",
              "Lesson plans, tests, assignments, schedules, Co-Pilot chat",
              "110+ resource templates, graphic organizers, games, evaluators",
            ],
            ["Quiz answer keys", CS_ANSWER_KEY, "Not verified"],
            [
              "Question types",
              "Multiple choice, short answer, long answer, fill in the blanks; Easy, Medium, Hard mix",
              "Nine question types with difficulty controls",
            ],
            ["Export", CS_EXPORT, "Google's Docs and Forms, DOCX, plain text, PDF"],
            [
              "Pricing model",
              CS_PRICING,
              "Free with 24 credits a month; Pro at USD 49.99 a year; schools by request",
            ],
          ],
        },
      },
      {
        heading: "When should a teacher pick Eduaide instead?",
        paragraphs: [
          "Pick Eduaide if you want a large menu of resource types, such as graphic organizers, review games and discussion activities, for lessons you already planned. Its export list is also wider, and sending a quiz straight to Google Forms is useful if your students answer online.",
          "Eduaide's evaluators that check text complexity and prior knowledge are a good fit for teachers who build their own readings. Its Pro plan, at USD 49.99 a year as of October 2026, lists unlimited generations and Erasmus Document Chat for revisions.",
        ],
      },
      {
        heading: "When is CourseSmith the better fit than Eduaide?",
        paragraphs: [
          "CourseSmith is the better fit when you want the whole term planned from one book rather than individual resources assembled by hand. Lessons, tests and the week-by-week schedule all draw from the same chapters and topics, so the pieces stay consistent.",
          "It also suits teachers who adjust paper tests by hand. Tests and assignments download as editable Word files, and the CourseSmith Co-Pilot chat can adapt material for a different grade level or draft an extra resource when a class needs one.",
        ],
      },
      {
        heading: "How do you compare Eduaide and CourseSmith fairly?",
        paragraphs: [
          "Use the same chapter in both tools and judge the results on accuracy, structure and how much editing they need.",
        ],
        steps: [
          {
            name: "Choose one chapter",
            text: "Pick a chapter with clear learning goals and a known set of key terms.",
          },
          {
            name: "Generate in Eduaide",
            text: "Build a lesson plan and an assessment from the chapter text or topic.",
          },
          {
            name: "Generate in CourseSmith",
            text: "Upload the textbook, then create a lesson plan and a test for the same chapter.",
          },
          {
            name: "Fact-check both",
            text: "Compare every answer against the book and count the edits each version needs.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is Eduaide free?",
        a: "As of October 2026, Eduaide's pricing page lists a free plan with 24 credits a month for core creation workflows, which it says covers up to 8 resources. Eduaide Pro costs USD 49.99 a year and lists unlimited generations. Schools and districts get custom pricing on request.",
      },
      {
        q: "Can I upload a full textbook to Eduaide?",
        a: "Eduaide's pricing page says uploaded-document context is limited on the free plan and that Pro allows up to 3 uploaded documents. It does not state a page or size limit, so check with Eduaide for full-textbook use. CourseSmith is designed around uploading a whole textbook PDF or DOCX of up to 40 MB.",
      },
      {
        q: "Does CourseSmith export to Google Forms?",
        a: "No. CourseSmith does not offer Google Forms export. Tests and assignments download as editable Word (.docx) files, and lesson plans stay in the app. If you deliver quizzes online through Google Forms, Eduaide's export options may suit that workflow better.",
      },
      {
        q: "Is CourseSmith a good fit for homeschool educators?",
        a: "Yes, if you teach from a textbook. CourseSmith serves K-12 teachers, tutors and homeschool educators in any subject and grade. A parent can upload the chosen textbook, build a week-by-week schedule, and generate lesson plans and tests with answer keys, then review each one before use.",
      },
    ],
    sources: [...EDUAIDE_SOURCES],
    related: [
      "/features/quiz-generator",
      "/features/curriculum-planner",
      "/compare/best-ai-tools-for-teachers",
      "/pricing",
    ],
    primaryKeyword: "eduaide alternative",
    secondaryKeywords: ["eduaide vs coursesmith"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // 4. Khanmigo
  {
    slug: "khanmigo-alternative",
    group: "compare",
    navLabel: "Khanmigo Alternative",
    navBlurb: "Khanmigo for teachers vs CourseSmith: content library or your textbook",
    metaTitle: "Khanmigo Alternative for Your Own Textbook | CourseSmith",
    metaDescription:
      "Khanmigo for teachers vs CourseSmith: compare starting point, textbook grounding, answer keys, export and pricing. Plan from your own book, free to start.",
    eyebrow: "Compare",
    h1: "A Khanmigo alternative for teachers who plan from their own textbook",
    answer:
      "The best Khanmigo alternative depends on which content your class follows. Khanmigo's free teacher tools tie lesson planning to Khan Academy's content library. CourseSmith builds lesson plans, tests with answer keys and assignments from the textbook you upload. Teachers whose course follows a district textbook rather than Khan Academy lessons often want that second starting point.",
    definition:
      "A Khanmigo alternative is an AI teaching assistant a teacher uses instead of, or alongside, Khanmigo's teacher tools for lesson planning and assessment.",
    takeaways: [
      "As of October 2026, Khanmigo offers free teacher sign-up, and Khan Academy has said all US teachers get free Khanmigo access through a partnership with Microsoft.",
      "Khanmigo ties its standards-aligned lesson planning to Khan Academy's content library and can draft quiz questions, hooks and exit tickets.",
      "CourseSmith builds lesson plans, tests and assignments from the specific textbook a teacher uploads.",
      "Teachers already using Khan Academy with students may prefer Khanmigo, while teachers anchored to another textbook may prefer CourseSmith.",
    ],
    sections: [
      {
        heading: "What does Khanmigo do well for teachers?",
        paragraphs: [
          "Khanmigo's biggest strength for teachers is cost and content depth. As of October 2026, khanmigo.ai offers free teacher sign-up for adults in listed countries, and Sal Khan wrote that all US teachers get free access thanks to a Microsoft partnership.",
          "Its lesson planning is standards-aligned and tied to Khan Academy's content library. The site lists help with learning objectives, quiz questions, hooks, exit tickets, differentiation and student groupings, plus an on-demand summary of recent student work for classes using Khan Academy.",
        ],
      },
      {
        heading: "How is CourseSmith different from Khanmigo?",
        paragraphs: [
          "CourseSmith differs in its source of truth. Instead of a built-in library, it reads the textbook or syllabus you upload as a PDF or DOCX of up to 40 MB and generates its chapters and topics, which you can rename, add to or delete.",
          "Everything after that comes from your book: lesson plans at the length you set with objectives, an in-depth explanation, a delivery plan for each method you choose, homework and a project idea; tests with answer keys; assignments; and week-by-week schedules. A resume-based teaching persona and the CourseSmith Co-Pilot chat keep output close to how you teach.",
        ],
      },
      {
        heading: "How do Khanmigo and CourseSmith compare?",
        paragraphs: [
          "Khanmigo is built around Khan Academy's content, while CourseSmith is built around whatever textbook you bring. Khanmigo cells come from Khan Academy's own sites as of October 2026, and gaps read Not verified.",
        ],
        table: {
          caption: "Khanmigo for teachers vs CourseSmith, as of October 2026",
          columns: ["Question", "CourseSmith", "Khanmigo for teachers"],
          rows: [
            [
              "Starting point",
              "Your uploaded textbook or syllabus (PDF or DOCX, up to 40 MB)",
              "Khan Academy's content library and the task you choose",
            ],
            [
              "Grounded in your uploaded textbook",
              "Yes, plans and tests come from the book's chapters and topics",
              "Not verified",
            ],
            [
              "Lesson planning",
              "Teacher-set length; delivery plan for direct instruction, interactive activity or game, real-world use cases",
              "Standards-aligned planning tied to Khan Academy content",
            ],
            ["Quiz answer keys", CS_ANSWER_KEY, "Not verified"],
            [
              "Analytics",
              "The teacher's own activity and mix of methods and question types; no student data",
              "On-demand summary of recent student work",
            ],
            ["Export", CS_EXPORT, "Not verified"],
            [
              "Pricing model",
              CS_PRICING,
              "Free teacher sign-up in listed countries; district pricing separate",
            ],
          ],
        },
      },
      {
        heading: "When should a teacher pick Khanmigo instead?",
        paragraphs: [
          "Pick Khanmigo if your students already practice on Khan Academy, because its planning draws on that same content and it can summarize recent student work. That link between planning and student practice is something CourseSmith does not offer.",
          "Khanmigo is also a strong choice if cost is the deciding factor and you mainly need quick hooks, exit tickets and objectives. Note that khanmigo.ai says teachers cannot grant students access on their own; student use comes through school or district implementations.",
        ],
      },
      {
        heading: "When is CourseSmith the better fit than Khanmigo?",
        paragraphs: [
          "CourseSmith is the better fit when your course follows a textbook that is not on Khan Academy, such as a district-adopted literature anthology or a specific chemistry text. Lessons and tests then use the vocabulary, examples and chapter order your students see in that book.",
          "It also suits tutors and homeschool educators who choose their own materials. Upload the book once, and Academic Schedules turn it into a week-by-week plan with each week's main topic, key objectives and chapter references.",
        ],
      },
      {
        heading: "How do you add CourseSmith to a Khanmigo routine?",
        paragraphs: [
          "Many teachers can keep Khanmigo for quick tasks and use CourseSmith for chapter-level planning.",
        ],
        steps: [
          {
            name: "Keep Khanmigo for quick drafts",
            text: "Continue using it for hooks, exit tickets and Khan Academy-linked practice.",
          },
          {
            name: "Upload your core textbook to CourseSmith",
            text: "Sign up free with starter credits and upload the PDF or DOCX for your course.",
          },
          {
            name: "Plan one unit from the book",
            text: "Generate the lesson plans, test and assignment for a single unit.",
          },
          {
            name: "Review before teaching",
            text: "Fact-check every item against the textbook, then download the test and assignment as Word files.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is Khanmigo free for teachers?",
        a: "As of October 2026, khanmigo.ai offers free sign-up for teachers who are 18 or older and live in a listed country or territory. Khan Academy's blog says all US teachers get free access through a partnership with Microsoft. District classroom implementations are priced separately on Khan Academy's site.",
      },
      {
        q: "Can CourseSmith tutor my students like Khanmigo?",
        a: "No. CourseSmith is a teacher-facing assistant for planning, tests, assignments and schedules. Its Co-Pilot chat helps the teacher explain a concept, brainstorm activities or adapt material, but it is not a student tutoring product. Schools wanting student tutoring should look at a tool built for that purpose.",
      },
      {
        q: "Does CourseSmith use Khan Academy content?",
        a: "No. CourseSmith works from the textbook PDF or DOCX you upload, so lesson plans, tests and assignments reflect your book rather than an outside library. If you want Khan Academy videos or exercises in a lesson, you can add them yourself when you teach the plan.",
      },
      {
        q: "Which subjects does CourseSmith support compared with Khanmigo?",
        a: "CourseSmith works for any subject and grade your textbook covers, including STEM, humanities and languages. Because it reads your uploaded book, coverage depends on the book rather than on a fixed content library. Math renders properly in tests, and every generated item still needs teacher review before classroom use.",
      },
    ],
    sources: [...KHANMIGO_SOURCES],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/ai-teaching-assistant",
      "/compare/chatgpt-for-lesson-planning",
      "/use-cases/homeschool",
    ],
    primaryKeyword: "khanmigo alternative",
    secondaryKeywords: ["khanmigo for teachers vs coursesmith"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // 5. ChatGPT
  {
    slug: "chatgpt-for-lesson-planning",
    group: "compare",
    navLabel: "ChatGPT for Lesson Planning",
    navBlurb: "ChatGPT vs an AI lesson planner, plus prompts that work",
    metaTitle: "ChatGPT for Lesson Planning: Prompts and Limits",
    metaDescription:
      "How to use ChatGPT for lesson planning, prompts that work, and when an AI lesson planner built on your textbook saves steps. Try CourseSmith free.",
    eyebrow: "Compare",
    h1: "ChatGPT for lesson planning: what works, what to watch, and when to use a generator",
    answer:
      "ChatGPT for lesson planning works well when you give it detailed context: grade, subject, time, objectives and the source text. A general chatbot only knows what you paste or attach in each chat. An AI lesson planner such as CourseSmith reads your uploaded textbook once and returns structured lesson plans and tests with answer keys from its chapters.",
    definition:
      "ChatGPT for lesson planning is the practice of prompting a general-purpose AI chatbot to draft lesson plans, activities and assessments for a class.",
    takeaways: [
      "A general chatbot produces better lesson plans when the prompt names the grade, subject, class length, objective and source material.",
      "A general chatbot does not know which textbook your class uses unless you supply that text in the conversation.",
      "CourseSmith turns an uploaded textbook into chapters and topics, so each lesson plan and test draws from the same source without re-pasting it.",
      "Whichever tool drafts the plan, the teacher must review and fact-check it before classroom use.",
    ],
    sections: [
      {
        heading: "Can ChatGPT write a good lesson plan?",
        paragraphs: [
          "Yes, a general chatbot can draft a usable lesson plan if the prompt carries enough detail. Vague requests such as a lesson on photosynthesis tend to return generic plans, while a prompt naming grade 7, the class length, the objective and the textbook passage returns something much closer to classroom-ready.",
          "The trade-off is effort. You rebuild that context in every new conversation, decide the format yourself, and check every fact against your source, because chatbots can state errors confidently.",
        ],
      },
      {
        heading: "What ChatGPT lesson plan prompts work best?",
        paragraphs: [
          "The prompts that work best state the class, the constraint and the format in one request. Paste the relevant textbook section directly into the chat so the model works from your material rather than from general knowledge.",
        ],
        bullets: [
          "Write a lesson plan for a 50-minute grade 8 science period on the section pasted below, with a short opener, direct instruction, a pair activity and a check for understanding.",
          "Using only the text below, write 10 quiz questions (6 multiple choice, 3 short answer, 1 long answer) and an answer key.",
          "Rewrite this explanation of ratios for a student reading two grade levels below grade 6, keeping every example from the original.",
          "List three common misconceptions students have about the topic in the text below and a quick activity that addresses each one.",
        ],
      },
      {
        heading: "How does ChatGPT compare with an AI lesson planner?",
        paragraphs: [
          "A general chatbot is flexible, while a lesson plan generator is structured around one job. OpenAI's own feature and plan pages could not be checked for this page, so ChatGPT cells describe general chatbot behavior and mark specifics as Not verified.",
        ],
        table: {
          caption: "General chatbot vs CourseSmith for lesson planning, as of October 2026",
          columns: ["Question", "CourseSmith", "General chatbot such as ChatGPT"],
          rows: [
            [
              "Starting point",
              "Your uploaded textbook or syllabus (PDF or DOCX, up to 40 MB)",
              "A prompt you write",
            ],
            [
              "Grounded in your uploaded textbook",
              "Yes, the book is uploaded once and split into chapters and topics",
              "Only what you paste or attach in the chat; upload limits Not verified",
            ],
            [
              "Lesson plan format",
              "Objectives, explanation, delivery plan per chosen method, homework and a project idea",
              "Whatever format your prompt requests",
            ],
            ["Quiz answer keys", CS_ANSWER_KEY, "Produced if you ask for one"],
            [
              "Memory of your course",
              "Syllabus, persona and schedules saved in your account",
              "Not verified",
            ],
            ["Export", CS_EXPORT, "Not verified"],
            ["Pricing model", CS_PRICING, "Not verified"],
          ],
        },
      },
      {
        heading: "When is ChatGPT the better choice for lesson planning?",
        paragraphs: [
          "A general chatbot is the better choice for open-ended thinking: brainstorming a project idea, writing a parent newsletter, or exploring a topic you have never taught. It handles requests far outside lesson planning, which a focused tool does not.",
          "It also suits teachers who enjoy writing prompts and want full control of every format choice. If you already keep a library of reliable prompts, a chatbot may cover most of your needs.",
        ],
      },
      {
        heading: "When does a textbook-based generator save more steps?",
        paragraphs: [
          "A textbook-based generator saves more steps when you plan many lessons from one book. CourseSmith takes the textbook once, generates its chapters and topics, and lets you pick a chapter, topics, delivery methods and lecture length for each plan instead of writing a fresh prompt.",
          "Tests follow a blueprint you set: question counts and marks for multiple choice, short answer, long answer and fill in the blanks, plus an Easy, Medium and Hard mix. A resume-based teaching persona keeps the tone consistent, and the CourseSmith Co-Pilot chat still takes open questions on every page.",
        ],
      },
      {
        heading: "How do you check an AI-written lesson plan before teaching it?",
        paragraphs: [
          "Treat every AI-written plan, from any tool, as a first draft that needs a teacher's review.",
        ],
        steps: [
          {
            name: "Match it to the source",
            text: "Confirm every fact, date, formula and definition against your textbook.",
          },
          {
            name: "Check the timing",
            text: "Walk through each segment and make sure the activities fit your class period.",
          },
          {
            name: "Work the quiz yourself",
            text: "Answer every question and compare your answers with the answer key.",
          },
          {
            name: "Adjust for your students",
            text: "Change examples, pacing and supports for the class in front of you before teaching.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it okay for teachers to use ChatGPT for lesson planning?",
        a: "Many teachers use general chatbots to draft plans, but check your school or district AI policy first and avoid pasting student personal information. Treat the output as a draft, verify every fact against your materials, and keep your professional judgment in charge of what reaches students.",
      },
      {
        q: "Why does ChatGPT give generic lesson plans?",
        a: "Generic output usually comes from a generic prompt. Without grade level, class length, objective and source text, a chatbot falls back on broad knowledge of the topic. Adding those four details, and pasting the exact textbook section, usually produces a plan that fits your class far better.",
      },
      {
        q: "Can ChatGPT read my whole textbook?",
        a: "That depends on the plan, file size and current OpenAI limits, which could not be verified for this page. A practical approach is to paste one section at a time. CourseSmith is built to take a full textbook PDF or DOCX of up to 40 MB and turn it into chapters and topics.",
      },
      {
        q: "Is CourseSmith built on ChatGPT?",
        a: "CourseSmith's privacy policy says it sends text to AI providers such as OpenAI under data processing agreements, and those providers do not use the data to train their public models. CourseSmith adds textbook upload, a structured lesson format, test blueprints, saved schedules and Word downloads on top of that.",
      },
      {
        q: "Should I write my own prompts or use a lesson plan generator?",
        a: "Write your own prompts if you teach varied topics without a core text and enjoy fine control. Use a lesson plan generator if one textbook anchors your course and you want consistent plans, tests with answer keys and schedules without rebuilding context in every chat. Many teachers use both.",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/resources/can-ai-write-lesson-plans",
      "/compare/best-ai-tools-for-teachers",
    ],
    primaryKeyword: "chatgpt for lesson planning",
    secondaryKeywords: ["chatgpt vs ai lesson planner", "chatgpt lesson plan prompts"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // 6. Best AI tools for teachers
  {
    slug: "best-ai-tools-for-teachers",
    group: "compare",
    navLabel: "Best AI Tools for Teachers",
    navBlurb: "AI lesson planning tools sorted by the job each one does best",
    metaTitle: "Best AI Tools for Teachers in 2026, by Job to Be Done",
    metaDescription:
      "The best AI tools for teachers in 2026, sorted by job: textbook grounding, in-browser help, tool catalogs, free content and exports. Compare and pick.",
    eyebrow: "Compare",
    h1: "The best AI tools for teachers in 2026, sorted by the job you need done",
    answer:
      "The best AI tools for teachers depend on the job. As of October 2026, CourseSmith suits planning from your own textbook, Brisk suits help inside open documents and the browser, MagicSchool suits a large catalog of quick tools, Khanmigo suits free planning tied to Khan Academy content, and Eduaide suits many resource formats and exports.",
    definition:
      "An AI tool for teachers is software that uses generative AI to help educators plan lessons, write assessments, give feedback or prepare classroom materials.",
    takeaways: [
      "No single AI tool is best for every teacher, so this guide sorts tools by the job each one does best rather than by rank.",
      "CourseSmith is built for planning lessons, tests and assignments from a textbook the teacher uploads.",
      "As of October 2026, Brisk, MagicSchool, Khanmigo and Eduaide all offer a free way for teachers to start.",
      "Every AI tool for teachers can produce errors, so review and fact-check output before using it with students.",
    ],
    sections: [
      {
        heading: "How should teachers choose an AI tool in 2026?",
        paragraphs: [
          "Teachers should choose by the job they most need done, not by a single overall ranking. A tool that is excellent for feedback on essays may be weak for planning a term, and the reverse is also true.",
          "Each entry below uses facts from the vendor's own website as of October 2026. Ask four questions of any tool: what it starts from, whether it reads your own materials, how it exports, and what the free option includes.",
        ],
      },
      {
        heading: "Which AI tool is best for grounding lessons in your own textbook?",
        paragraphs: [
          "CourseSmith is built for this job. You upload a textbook or syllabus as a PDF or DOCX of up to 40 MB, it generates chapters and topics, and it builds lesson plans at the length you set, tests with answer keys, assignments and week-by-week schedules from that book.",
          "Two other tools also work from your materials in narrower ways. Eduaide's Pro plan lists up to 3 uploaded documents as context, and Brisk works on PDFs and online textbooks open in your browser.",
        ],
      },
      {
        heading: "Which AI tool works best inside open documents and the browser?",
        paragraphs: [
          "Brisk Teaching fits this job. As of October 2026, it is a free Chrome and Edge extension that works inside Google's Docs and Slides, Microsoft Word, PDFs, articles and YouTube, and can turn an open source into presentations, guided notes and quizzes.",
          "Its free plan also includes feedback tools for student writing, such as glow-and-grow comments and batch feedback. It is not supported on mobile, according to its FAQ.",
        ],
      },
      {
        heading: "Which AI tool offers the widest catalog of teacher tools?",
        paragraphs: [
          "MagicSchool leads on catalog size. As of October 2026, it lists 80+ teacher tools, from lesson plans and quizzes to report card comments, professional emails and IEP drafts, on a Forever Free plan.",
          "Its Plus plan adds unlimited generations and 50+ student tools, and every plan includes Google and Microsoft exports. It suits teachers who want one account for many small, varied tasks.",
        ],
      },
      {
        heading: "Which free AI tool ties into a large content library?",
        paragraphs: [
          "Khanmigo for teachers fits this job. As of October 2026, teacher sign-up is free on khanmigo.ai, and its standards-aligned lesson planning is tied to Khan Academy's content library, with help for hooks, exit tickets and quiz questions.",
          "It is strongest when students already practice on Khan Academy, because it can summarize recent student work. Student access comes through school or district implementations rather than individual teachers.",
        ],
      },
      {
        heading: "Which AI tool offers the most resource formats and exports?",
        paragraphs: [
          "Eduaide fits this job. As of October 2026, it advertises 110+ resource templates, an Assessment Builder with nine question types, and exports to Google's Docs and Forms, DOCX, plain text and PDF.",
          "Its free plan includes 24 credits a month, and Pro costs USD 49.99 a year with unlimited generations. A general chatbot such as ChatGPT can also handle open-ended brainstorming, though it only knows the material you paste into each chat.",
        ],
      },
      {
        heading: "How do the best AI tools for teachers compare at a glance?",
        paragraphs: [
          "The tools differ most in what they start from and how they export. Cells marked Not verified were not stated on the vendor's site when checked in October 2026.",
        ],
        table: {
          caption: "AI tools for teachers by job, as of October 2026",
          columns: [
            "Tool",
            "Best for",
            "Starting point",
            "Quiz answer keys",
            "Export",
            "Free option",
          ],
          rows: [
            [
              "CourseSmith",
              "Grounding in your textbook",
              "Uploaded textbook PDF or DOCX",
              "Show answer toggle",
              "Tests and assignments as editable Word files",
              "Free starter credits, no credit card",
            ],
            [
              "Brisk Teaching",
              "Working inside documents and the browser",
              "Doc, PDF, article or video you open",
              "Not verified",
              "Google Form, Google Doc or Word doc",
              "Free teacher plan",
            ],
            [
              "MagicSchool",
              "Widest tool catalog",
              "Subject, grade, standards and time you enter",
              "Not verified",
              "Google and Microsoft exports",
              "Forever Free plan",
            ],
            [
              "Khanmigo for teachers",
              "Free planning tied to Khan Academy content",
              "Khan Academy content library",
              "Not verified",
              "Not verified",
              "Free teacher sign-up in listed countries",
            ],
            [
              "Eduaide",
              "Many formats and exports",
              "Topic, objective or source",
              "Not verified",
              "Google's Docs and Forms, DOCX, text, PDF",
              "24 credits a month",
            ],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "What is the best free AI tool for teachers?",
        a: "It depends on the task. As of October 2026, Khanmigo offers free teacher sign-up, Brisk and MagicSchool have free teacher plans, and Eduaide gives 24 free credits a month. CourseSmith is free to start with starter credits and no credit card. Try the one that matches your biggest weekly job first.",
      },
      {
        q: "Can I use more than one AI tool for teaching?",
        a: "Yes, and many teachers do. A common pairing is one tool for planning from the textbook and another for feedback on student writing. Keep track of which tool holds which materials, and check that each one meets your school's AI and privacy policies before you upload anything.",
      },
      {
        q: "Which AI lesson planning tools work from my own textbook?",
        a: "CourseSmith is designed to take a whole uploaded textbook and plan from it. As of October 2026, Eduaide Pro accepts up to 3 uploaded documents as context, Brisk works on PDFs and online textbooks you open in Chrome or Edge, and MagicSchool lists district document uploads on its Enterprise plan.",
      },
      {
        q: "Do AI tools for teachers align to state standards?",
        a: "Some vendors describe standards-aligned output, and you should confirm any code against your state's official document. CourseSmith does not tag standard codes; it builds from the textbook you upload, so a state-adopted textbook carries its content into your plans, and you can paste a named standard into the Co-Pilot chat.",
      },
      {
        q: "How were these AI tools for teachers chosen?",
        a: "The guide covers widely used AI tools for K-12 planning and groups them by the job each does best, using each vendor's own website as of October 2026. It is published by the CourseSmith team, which is why CourseSmith appears, and it avoids an overall ranking because needs vary by teacher.",
      },
    ],
    sources: [
      ...BRISK_SOURCES,
      ...MAGICSCHOOL_SOURCES.slice(0, 2),
      ...KHANMIGO_SOURCES.slice(0, 2),
      ...EDUAIDE_SOURCES,
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/compare/magicschool-alternative",
      "/compare/chatgpt-for-lesson-planning",
      "/pricing",
    ],
    primaryKeyword: "best ai tools for teachers",
    secondaryKeywords: ["ai lesson planning tools", "ai tools for teachers 2026"],
    datePublished: DATE,
    dateModified: DATE,
  },
];
