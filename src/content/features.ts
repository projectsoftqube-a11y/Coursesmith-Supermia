import type { ContentPage } from "./types";

export const FEATURE_PAGES: ContentPage[] = [
  {
    slug: "textbook-to-lesson-plan",
    group: "features",
    navLabel: "Textbook to Lesson Plan",
    navBlurb: "Upload a textbook PDF and get lesson plans built from its chapters",
    metaTitle: "Textbook to Lesson Plan: Upload a PDF | CourseSmith",
    metaDescription:
      "Turn a textbook into lesson plans with CourseSmith. Upload a PDF, get chapters and topics, and plan lessons grounded in your own book. Start free today.",
    eyebrow: "Feature: textbook to lesson plan",
    h1: "Turn your textbook into lesson plans, chapter by chapter",
    answer:
      "CourseSmith turns a textbook into lesson plans by reading the PDF or DOCX file you upload, organizing it into chapters and topics, and generating plans from the topics you choose. Each plan includes learning objectives, an in-depth explanation, a step-by-step delivery plan, homework assignments and a project idea, all based on your own book.",
    definition:
      "Textbook to lesson plan is the process of converting the chapters of an assigned textbook into ready-to-teach class plans, and CourseSmith automates it with AI that works from the file you upload.",
    takeaways: [
      "CourseSmith builds lesson plans from the textbook you upload, not from a generic prompt.",
      "Teachers upload a PDF or DOCX file of up to 40 MB with the book name, subject and grade, and CourseSmith generates chapters and topics they can rename, add or delete.",
      "Each plan includes learning objectives, an in-depth explanation, a step-by-step delivery plan for each chosen method, homework assignments and a project idea.",
      "Teachers set the lecture duration in minutes, so a plan can fit a 45-minute period, a 60-minute class or a longer block.",
      "Teachers should review and fact-check every plan before classroom use, because AI output can contain errors.",
    ],
    sections: [
      {
        heading: "Why does grounding a lesson plan in your textbook matter?",
        paragraphs: [
          "Grounding matters because students learn from the book in their hands, and a plan that drifts from it creates confusion. A general-purpose AI chatbot answers a prompt from its training data, so its examples, terms and sequence may not match your edition. CourseSmith starts from the file you upload, so plans follow your chapters and use the content students will read.",
          "Grounding also makes review faster. When a plan is built from a chapter you already know, you can check it against the textbook instead of verifying an unfamiliar source line by line.",
        ],
        table: {
          caption: "Generic prompting versus textbook-grounded planning",
          columns: ["Question", "Generic AI chatbot prompt", "CourseSmith with your textbook"],
          rows: [
            [
              "Where does the content come from?",
              "The model's general training data plus your prompt",
              "The textbook PDF or DOCX file you upload",
            ],
            [
              "What order are topics taught in?",
              "Whatever order the model chooses",
              "The chapter and topic order of your book, which you can adjust",
            ],
            [
              "Do vocabulary and examples match?",
              "Often generic, and may differ from your edition",
              "Drawn from the material students read",
            ],
            [
              "How much context do you retype?",
              "Grade, subject and style in every new prompt",
              "Book details and teaching persona are set up once",
            ],
            [
              "What comes back?",
              "Chat text you copy and reformat",
              "A structured plan with objectives, explanation, delivery steps, homework and a project idea",
            ],
          ],
        },
      },
      {
        heading: "How do you turn a textbook into lesson plans with CourseSmith?",
        paragraphs: [
          "You turn a textbook into lesson plans in four steps: upload, review the structure, choose what to teach and generate. Everything runs in the browser at app.coursesmith.supermia.ai, and you can start free without a credit card.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Upload the textbook or syllabus as a PDF or DOCX file of up to 40 MB, then enter the book name, subject and grade. A full book works, and so does a single chapter or a unit packet you wrote.",
          },
          {
            name: "Review chapters and topics",
            text: "CourseSmith generates the book's chapters and topics. Rename, add or delete topics until the structure matches how you teach the course.",
          },
          {
            name: "Choose topics, methods and duration",
            text: "Pick a chapter, one or more topics, one or more delivery methods (Direct instruction, Interactive activity / game, Real-world use cases) and the lecture duration in minutes.",
          },
          {
            name: "Generate, review and set a status",
            text: "Generate the plan, read it against the textbook, then move it from Draft to Ready to teach, and to Completed after the class.",
          },
        ],
      },
      {
        heading: "What makes a textbook upload produce good lesson plans?",
        paragraphs: [
          "A clean, text-based file of the edition you teach produces the best chapters, topics and plans. Scans of photocopied pages can be harder for any AI to read accurately, so use a digital edition when you have one. Setting up your teaching persona before the first plan also matters, because it shapes how every plan is written.",
        ],
        bullets: [
          "Upload the edition your students actually use, so content and terms match their copies.",
          "Enter the grade accurately, since grade is free text and the plans follow it.",
          "Upload your resume to auto-fill your persona with school, experience, subjects, grade range and teaching style, then review it.",
          "Tidy the topic list before planning, because plans inherit any wrong or missing topics.",
          "Upload only material your school license or your own authorship allows you to use.",
        ],
      },
      {
        heading: "What should you check before teaching an AI-generated plan?",
        paragraphs: [
          "Check accuracy, fit and pacing before any plan reaches students. CourseSmith is an assistant, not a replacement for professional judgment, and its Terms state that AI output can be inaccurate. A careful read against the textbook is part of the workflow, not an optional extra.",
        ],
        bullets: [
          "Facts, dates, formulas and definitions match the textbook page.",
          "Learning objectives are realistic for the lecture duration you set.",
          "Activities fit your room, your materials and your class size.",
          "Homework load fits your school's homework policy.",
          "Accommodations for students with IEPs or 504 plans are added by you.",
        ],
      },
      {
        heading: "How do textbook-based plans connect to the rest of your course?",
        paragraphs: [
          "The same uploaded book feeds CourseSmith's test paper generator, assignment generator and academic schedules. From the chapters you plan, you can build a test with an answer key, an assignment with a marking guide, and a week-by-week schedule with chapter references. Tests and assignments download as editable Word files, so you can adjust them before class.",
        ],
      },
      {
        heading: "Does it work with state-adopted textbooks and standards?",
        paragraphs: [
          "CourseSmith works with any textbook you upload, including state-adopted ones, but it does not tag output with standard codes. If your district uses a state-adopted textbook, the plans follow that book's content. You can paste the wording of a standard and ask Co-Pilot to work toward it, then verify the code against the official state document.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I upload one chapter instead of a whole textbook?",
        a: "Yes. CourseSmith reads whatever PDF or DOCX file you give it, up to 40 MB, so a single chapter, a unit packet or your own notes all work. Smaller files are also easier to review, because the chapter and topic list only shows what you plan to teach next. You can upload more material later in the term.",
      },
      {
        q: "Is my uploaded textbook used to train AI models?",
        a: "According to the CourseSmith privacy policy, uploads are stored in private cloud storage, and AI providers such as OpenAI process the text under data processing agreements that stop them from using it to train their public models. Deleting a syllabus, lesson plan or persona also deletes the associated files.",
      },
      {
        q: "Can I plan for 60-minute classes or block periods?",
        a: "Yes. You set the lecture duration in minutes each time you generate a plan, so the same textbook can produce plans for a 45-minute period, a 60-minute class or a longer block. Choosing more than one delivery method for a long block gives the plan more varied steps to fill the time.",
      },
      {
        q: "How much does it cost to turn a textbook into lesson plans?",
        a: "CourseSmith is free to start. New accounts receive free starter credits with no credit card required, and after that AI credits are deducted per generation. Schools and departments that need several teachers can contact SuperMIA at hello@supermia.ai for volume pricing. The pricing page explains how credits work.",
      },
      {
        q: "Can I use a textbook I wrote or a teacher-made packet?",
        a: "Yes. Teacher-made packets, open textbooks and course readers all work as long as they arrive as a PDF or DOCX file. CourseSmith generates chapters and topics in the same way it does for a published book, and you can rename or add topics if your headings are informal or incomplete.",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/curriculum-planner",
      "/resources/how-to-write-a-lesson-plan",
      "/pricing",
    ],
    primaryKeyword: "textbook to lesson plan",
    secondaryKeywords: [
      "pdf to lesson plan",
      "upload a textbook to make lesson plans",
      "turn textbook into lesson plans",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "quiz-generator",
    group: "features",
    navLabel: "Quiz and Test Generator",
    navBlurb: "Quizzes and tests from your textbook, with an answer key and marks",
    metaTitle: "AI Test Generator for Teachers, With Answer Keys",
    metaDescription:
      "Turn a textbook PDF into a quiz or test with CourseSmith. Set question types, marks and difficulty, see the answer key and download an editable Word file.",
    eyebrow: "Feature: AI quiz generator",
    h1: "AI quiz generator that builds tests from your textbook",
    answer:
      "CourseSmith is an AI quiz generator that builds test papers from the textbook you upload, covering chosen chapters or the full book. For each question type you set the number of questions and the marks, choose an Easy, Medium and Hard mix, reveal the answer key, and download the test as an editable Word file.",
    definition:
      "An AI quiz generator is a tool that writes assessment questions and answer keys from source material, which a teacher reviews before giving the quiz to students.",
    takeaways: [
      "CourseSmith writes test questions from specific chapters or the full book you uploaded.",
      "Tests can mix multiple choice, short answer, long answer and fill in the blanks questions, each with its own count and marks.",
      "Teachers set an Easy, Medium and Hard difficulty mix as percentages that total 100.",
      "A Show answer toggle reveals the answer key, and every test downloads as an editable Word (.docx) file.",
      "Teachers should check every question and answer before a test is given, since AI output can be wrong.",
    ],
    sections: [
      {
        heading: "How does CourseSmith turn a PDF into a quiz?",
        paragraphs: [
          "CourseSmith turns a PDF into a quiz by reading your uploaded textbook and writing questions from the chapters you select. The test is drawn from your material rather than general knowledge, so questions use the terms and examples students studied.",
        ],
        steps: [
          {
            name: "Upload the source",
            text: "Upload a textbook or unit packet as a PDF or DOCX file of up to 40 MB, with the book name, subject and grade.",
          },
          {
            name: "Choose the scope",
            text: "Select specific chapters or the full book, matching what you have actually taught.",
          },
          {
            name: "Set question types and marks",
            text: "For each question type, set how many questions you want and the marks per question.",
          },
          {
            name: "Set the difficulty mix",
            text: "Split the test across Easy, Medium and Hard as percentages that add up to 100.",
          },
          {
            name: "Review and download",
            text: "Use the Show answer toggle to check the answer key, then download the test as an editable Word file.",
          },
        ],
      },
      {
        heading: "Which question types does the AI test generator include?",
        paragraphs: [
          "The CourseSmith test generator includes multiple choice, short answer, long answer and fill in the blanks questions. Mixing them lets one test check quick recall, key vocabulary, explanation in a student's own words and longer reasoning.",
        ],
        table: {
          caption: "Question types in a CourseSmith test paper",
          columns: ["Question type", "What it checks", "Good for"],
          rows: [
            [
              "Multiple choice",
              "Recognition and quick checks of understanding",
              "Covering many topics in little time",
            ],
            [
              "Fill in the blanks",
              "Recall of key terms and facts in context",
              "Vocabulary, definitions and formulas",
            ],
            [
              "Short answer",
              "Recall and brief explanation in the student's words",
              "Checking that students can state an idea, not just spot it",
            ],
            [
              "Long answer",
              "Reasoning, analysis and extended explanation",
              "Unit tests and higher-mark questions",
            ],
          ],
        },
      },
      {
        heading: "How do marks and the difficulty mix shape a test?",
        paragraphs: [
          "Marks and difficulty decide what the test rewards. Setting marks per question type lets a long answer question carry more weight than a fill in the blanks item, which matches the effort each one takes. The Easy, Medium and Hard percentages let you weight a review quiz toward easier items and a unit test toward harder ones.",
        ],
      },
      {
        heading: "Why does a quiz generator with an answer key matter?",
        paragraphs: [
          "An answer key matters because it speeds up scoring and gives you a fast way to check the test itself. The Show answer toggle reveals the key on screen, so you can read each question next to its answer before anything is downloaded. If an answer does not hold up against the textbook, the question needs a fix before students see it.",
          "Math and science teachers benefit from proper equation rendering, so formulas in questions and answers display correctly instead of as broken text.",
        ],
      },
      {
        heading: "What should you check before giving an AI-generated quiz?",
        paragraphs: [
          "Check that every question has one defensible answer and that the key is correct. AI-generated questions can be ambiguous, contain two plausible options or assume content you skipped, and CourseSmith's Terms state that teachers must review output before classroom use. The Word file is editable, so fix problems directly in the document.",
        ],
        bullets: [
          "Each multiple choice item has exactly one correct option.",
          "Each blank has only one reasonable word or phrase that fits.",
          "Reading level fits your students, including English learners.",
          "Every answer in the key matches the textbook, not a different source.",
          "The test only covers chapters you have taught.",
        ],
      },
      {
        heading: "How is a textbook-based quiz different from a chatbot quiz?",
        paragraphs: [
          "A textbook-based quiz is written from the pages students studied, while a chatbot quiz is written from a prompt and the model's general training. A general chatbot can produce decent questions, but you usually paste the text in, request a key separately and reformat the result. CourseSmith keeps chapter scope, question types, marks, difficulty and the answer key in one form and returns a Word file.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith score student answers?",
        a: "CourseSmith is built to generate test papers and answer keys, not to collect student work. You give the test in class and score it your usual way, using the answer key and the marks you set for each question type. Because the file is editable Word, you can add your own scoring notes before printing.",
      },
      {
        q: "Can I make a quiz from a PDF that is not a textbook?",
        a: "Yes. Any PDF or DOCX file with clear content works, including a teacher-made reading packet, lab handout or open textbook chapter. CourseSmith builds chapters and topics from it and writes questions from those. Documents with clear headings and complete sentences give better questions than slide decks with only short bullet points.",
      },
      {
        q: "How many questions can a test have?",
        a: "You set the number of questions for each question type every time you generate a test, so the same tool covers a short check for understanding and a longer unit test. Long answer questions take students more time, so a test with several of them should have fewer questions overall to fit your class period.",
      },
      {
        q: "Can I see whether my tests lean too heavily on one question type?",
        a: "Yes. CourseSmith's teaching analytics analyzes your own mix of question types across the tests and assignments you create and adds AI insights. It reflects your activity as a teacher, not student performance, and it is a quick way to notice if every test is mostly multiple choice.",
      },
      {
        q: "Can I use CourseSmith quizzes for homeschool or tutoring?",
        a: "Yes. Homeschool educators and tutors use the same workflow as classroom teachers: upload the curriculum book, choose chapters and generate a test with an answer key. The difficulty mix is useful for one learner, since you can start with mostly easy items and shift toward harder ones over time.",
      },
    ],
    related: [
      "/resources/how-to-make-a-quiz-from-a-pdf",
      "/features/ai-assignment-generator",
      "/use-cases/science",
      "/use-cases/homeschool",
    ],
    primaryKeyword: "ai test generator for teachers",
    secondaryKeywords: ["pdf to quiz", "quiz generator with answer key", "ai test generator"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "curriculum-planner",
    group: "features",
    navLabel: "Curriculum Planner",
    navBlurb: "Week-by-week academic schedules built from your uploaded textbook",
    metaTitle: "AI Curriculum Generator and Course Outline Tool",
    metaDescription:
      "Plan a full term with CourseSmith. Upload a textbook, set weeks and hours, and get a week-by-week schedule with topics and objectives. Start free today.",
    eyebrow: "Feature: AI curriculum generator",
    h1: "AI curriculum generator for week-by-week academic schedules",
    answer:
      "CourseSmith works as an AI curriculum generator by turning your uploaded textbook into chapters and topics, then building an academic schedule from it. You enter the planned weeks, hours per week and lecture duration, and CourseSmith produces a week-by-week plan with each week's main topic, key objectives and chapter references, which you can edit.",
    definition:
      "An AI curriculum generator is a tool that organizes course content into an ordered sequence of topics and weeks, which teachers then adjust to their calendar and local requirements.",
    takeaways: [
      "CourseSmith turns an uploaded textbook into chapters and topics that serve as the course outline.",
      "The Academic Schedules tool uses planned weeks, hours per week and lecture duration to build a week-by-week plan.",
      "Each week lists a main topic, key objectives and chapter references, and every week is editable.",
      "Weeks are marked Planned or Completed, so the schedule doubles as a progress tracker.",
      "Teachers should fit the generated schedule to their school calendar and district pacing guide.",
    ],
    sections: [
      {
        heading: "How does CourseSmith build a course outline from a textbook?",
        paragraphs: [
          "CourseSmith builds a course outline by reading the textbook or syllabus you upload as a PDF or DOCX file of up to 40 MB, together with the book name, subject and grade you enter. It generates the book's chapters and topics, and you can rename, add or delete topics until the list matches your course.",
          "Treat that outline as the foundation for the year. Schedules, lesson plans, tests and assignments all draw on it, so a quick check of chapter and topic names pays off later.",
        ],
      },
      {
        heading: "How does the Academic Schedules tool build a week-by-week plan?",
        paragraphs: [
          "The Academic Schedules tool builds a week-by-week plan from your uploaded syllabus and three numbers you supply: planned weeks, hours per week and lecture duration. Those inputs tell CourseSmith how much class time the term holds, so it can spread the book's topics across it.",
        ],
        steps: [
          {
            name: "Name the schedule",
            text: "Give it a clear name, such as Term 1 Physics, so you can find it later.",
          },
          {
            name: "Choose the syllabus",
            text: "Select the uploaded textbook or syllabus the schedule should cover.",
          },
          {
            name: "Enter time inputs",
            text: "Enter the planned weeks, hours per week and lecture duration for the course.",
          },
          {
            name: "Review each week",
            text: "Read each week's main topic, key objectives and chapter references, and edit any week that needs a change.",
          },
          {
            name: "Track progress",
            text: "Mark each week Completed as you teach it, leaving future weeks as Planned.",
          },
        ],
      },
      {
        heading: "What is the difference between a course outline, curriculum map and schedule?",
        paragraphs: [
          "A course outline lists what is taught, a curriculum map shows how topics build on each other, and a schedule shows when each topic is taught. Teachers often use the terms loosely, but each answers a different planning question.",
        ],
        table: {
          caption: "Planning documents and where CourseSmith fits",
          columns: ["Document", "Question it answers", "What CourseSmith provides"],
          rows: [
            [
              "Course outline",
              "What content does the course cover?",
              "Chapters and topics generated from your textbook, which you can edit",
            ],
            [
              "Curriculum map",
              "How do topics build on each other?",
              "A weekly sequence with chapter references that you check for prerequisite order",
            ],
            [
              "Academic schedule",
              "When is each topic taught?",
              "A week-by-week plan with main topics and key objectives",
            ],
            [
              "Unit materials",
              "What happens in each class?",
              "Lesson plans, test papers with answer keys and assignments",
            ],
          ],
        },
      },
      {
        heading: "How do you keep prerequisites in order with a curriculum mapping tool?",
        paragraphs: [
          "You keep prerequisites in order by reading the weekly main topics in sequence and editing any week that teaches an idea before its foundation. CourseSmith follows the structure of your book, which usually reflects a sensible order, but the final call on sequence belongs to you.",
          "Prerequisite order matters most when you rearrange a book. If you teach chapters out of sequence, check that each moved week still comes after the topics it depends on.",
        ],
      },
      {
        heading: "How do you fit a generated syllabus plan to your school calendar?",
        paragraphs: [
          "You fit the plan by editing weeks around the dates CourseSmith cannot know, such as holidays, testing windows, field trips and assemblies. Enter planned weeks as the number of real teaching weeks rather than calendar weeks, then adjust individual weeks for short or interrupted ones.",
        ],
        bullets: [
          "Every required unit appears, including any your district adds beyond the textbook.",
          "Heavy topics get more weeks than light ones.",
          "Review and assessment weeks are built in before major tests.",
          "The sequence lines up with your district pacing guide, if one exists.",
        ],
      },
      {
        heading: "Does the AI curriculum generator align to state standards?",
        paragraphs: [
          "CourseSmith does not tag schedules with standard codes or auto-align them to a state framework. It builds from the textbook you upload, so if your district uses a state-adopted textbook, the schedule follows that content. You can paste a standard into Co-Pilot and ask it to work toward it, then confirm the code against the official state source.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a department use one curriculum across several teachers?",
        a: "Each CourseSmith account holds its own syllabi and schedules. Teachers in a department can each upload the same adopted textbook so everyone starts from the same chapters and topics, then compare their schedules in planning meetings. Departments and schools can contact SuperMIA at hello@supermia.ai about volume pricing for several teachers.",
      },
      {
        q: "Can I build a schedule from more than one book?",
        a: "Each schedule is built from one uploaded syllabus. If a course uses a main textbook and a supplementary reader, you can combine the relevant parts into one PDF under 40 MB before uploading, or keep separate schedules for each book. Check a combined outline carefully, since two sources may cover the same topic.",
      },
      {
        q: "Is the course outline generator useful for a brand-new course?",
        a: "Yes, it is most useful when you are teaching a course for the first time. Uploading the assigned textbook gives you chapters, topics and a week-by-week schedule, which is a faster starting point than building a scope and sequence from a blank page. Plan to revise the weeks after your first term.",
      },
      {
        q: "How do I track what I have actually taught?",
        a: "Mark each week Completed in the academic schedule and each lesson plan Completed after class. CourseSmith's teaching analytics then shows your own activity, including lessons planned and taught, tests and assignments. It describes your teaching work only and does not track student performance.",
      },
      {
        q: "What does the curriculum generator cost?",
        a: "CourseSmith is free to start, with free starter credits on sign-up and no credit card needed. After that, AI credits are deducted per generation, including schedules and unit materials. The pricing page explains the credit model, and schools can email SuperMIA for volume pricing.",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/use-cases/schools-and-districts",
      "/standards/common-core",
      "/use-cases/high-school",
    ],
    primaryKeyword: "ai curriculum generator",
    secondaryKeywords: ["course outline generator", "curriculum mapping tool", "syllabus planner"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "ai-assignment-generator",
    group: "features",
    navLabel: "AI Assignment Generator",
    navBlurb: "Assignments with marks and a marking guide, built from your textbook",
    metaTitle: "AI Assignment Generator for Homework | CourseSmith",
    metaDescription:
      "Create assignments from your textbook with CourseSmith. Set question types and marks, get answers and a marking guide, and download a Word file.",
    eyebrow: "Feature: AI assignment generator",
    h1: "AI assignment generator for homework and project work",
    answer:
      "CourseSmith is an AI assignment generator that creates assignments from the textbook you upload, using multiple choice, short answer, long answer and fill in the blanks questions with the counts and marks you set. Each assignment includes answers and a marking guide and downloads as an editable Word file, while every lesson plan adds homework and a project idea.",
    definition:
      "An AI assignment generator is a tool that drafts homework tasks and project ideas from course material, which a teacher reviews and adjusts before assigning them.",
    takeaways: [
      "CourseSmith generates assignments from your uploaded textbook rather than from a generic question bank.",
      "Assignments use multiple choice, short answer, long answer and fill in the blanks questions, with counts and marks set by the teacher.",
      "Every assignment includes answers and a marking guide and downloads as an editable Word (.docx) file.",
      "Each CourseSmith lesson plan also includes homework assignments and a project idea on the same topics.",
      "Teachers should check time, materials and instructions before assigning any AI-generated task.",
    ],
    sections: [
      {
        heading: "How does CourseSmith create assignments from your textbook?",
        paragraphs: [
          "CourseSmith creates assignments by writing questions from the textbook you uploaded, using the question types, counts and marks you choose. Because the source is the book students use, questions share the terms, examples and level of detail they saw in class.",
        ],
        steps: [
          {
            name: "Choose the source",
            text: "Pick the uploaded textbook and the content the assignment should cover.",
          },
          {
            name: "Set question types and marks",
            text: "Choose how many multiple choice, short answer, long answer and fill in the blanks questions to include and the marks for each.",
          },
          {
            name: "Review answers and the marking guide",
            text: "Read every question with its answer and the marking guide, and note anything to change.",
          },
          {
            name: "Download and adjust",
            text: "Download the editable Word file, fix any wording, add your instructions and hand it out the way you usually do.",
          },
        ],
      },
      {
        heading: "What is the difference between lesson plan homework and a generated assignment?",
        paragraphs: [
          "Lesson plan homework is short practice attached to a single lesson, while a generated assignment is a standalone, marked set of questions you can download. Project ideas sit alongside both for longer, applied work.",
        ],
        table: {
          caption: "Homework, assignments and project work in CourseSmith",
          columns: ["Option", "Where it comes from", "What you get", "Best for"],
          rows: [
            [
              "Lesson plan homework",
              "Included in every lesson plan",
              "Homework assignments on the lesson's topics",
              "Practice right after a lesson",
            ],
            [
              "Generated assignment",
              "The assignment generator",
              "Questions by type with counts, marks, answers and a marking guide in Word",
              "Take-home checks you score",
            ],
            [
              "Project idea",
              "Included in every lesson plan",
              "A project idea linked to the lesson",
              "Longer, applied work across lessons",
            ],
          ],
        },
      },
      {
        heading: "How can a project ideas generator help a unit?",
        paragraphs: [
          "A project idea gives you a ready starting point tied to the lesson, which is where students connect ideas across several classes. Because every CourseSmith lesson plan includes one, a unit of plans leaves you with several project ideas to choose from. You can ask Co-Pilot to adapt the chosen idea for a different grade level or a shorter timeline.",
        ],
      },
      {
        heading: "How do you get better homework from an AI homework generator?",
        paragraphs: [
          "You get better homework by keeping it tied to what was taught and choosing question types that match the skill. Homework that covers exactly the lesson is easier for students to complete alone and easier for you to check.",
        ],
        bullets: [
          "Cover only content you have already taught.",
          "Use fill in the blanks for vocabulary and long answer for reasoning.",
          "Give long answer questions more marks so the total reflects effort.",
          "Favor questions that need a student's own reasoning or examples from their life.",
        ],
      },
      {
        heading: "What should you check before assigning AI-generated work?",
        paragraphs: [
          "Check time, materials, clarity and the marking guide before any assignment goes home. CourseSmith's Terms state that AI output can be inaccurate and must be reviewed, and homework is where an unclear instruction causes the most frustration because you are not there to explain it. The Word file is editable, so make corrections directly in it.",
        ],
        bullets: [
          "Instructions make sense to a student reading them alone at home.",
          "The time needed fits your school's homework policy.",
          "Materials are available to every student, not only those with extra resources at home.",
          "Answers and the marking guide match the textbook.",
          "Accommodations for students with IEPs or 504 plans are added by you.",
        ],
      },
      {
        heading: "How do assignments fit with classroom tests and plans?",
        paragraphs: [
          "Assignments, tests and lesson plans all draw on the same uploaded textbook, so a single chapter produces a coherent set. Teach the lesson, assign the plan's homework, set a marked assignment from the same chapter, then check learning with a test at the end of the unit. The academic schedule keeps those weeks in order across the term.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can CourseSmith create classroom assignments for any subject?",
        a: "Yes. CourseSmith works with any subject you can upload as a PDF or DOCX file, including math, science, English language arts, social studies and world languages. Assignments reflect the source material, and math equations render properly, so algebra and physics questions keep their formulas intact.",
      },
      {
        q: "Can I edit an assignment before handing it out?",
        a: "Yes. Assignments download as editable Word (.docx) files, so you can reword questions, change point values, add your school header or remove an item before printing. Keep the marking guide in a separate copy if you plan to hand the questions to students.",
      },
      {
        q: "Will students be able to find answers to generated homework online?",
        a: "Generated assignments are drawn from your textbook rather than copied from a public question bank, but any question with a single factual answer can be looked up. Long answer questions that ask students to explain their reasoning or apply an idea to their own life are much harder to shortcut.",
      },
      {
        q: "Is the AI assignment generator free to try?",
        a: "Yes. CourseSmith is free to start, with free starter credits on sign-up and no credit card required. After that, AI credits are deducted per generation. Homeschool families, tutors and individual teachers can begin on starter credits, and schools can contact SuperMIA at hello@supermia.ai for volume pricing.",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/features/textbook-to-lesson-plan",
      "/use-cases/math",
      "/pricing",
    ],
    primaryKeyword: "ai assignment generator",
    secondaryKeywords: [
      "ai homework generator",
      "project ideas generator",
      "classroom assignments",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "ai-teaching-assistant",
    group: "features",
    navLabel: "AI Teaching Assistant",
    navBlurb: "CourseSmith Co-Pilot: a 24/7 AI chat on every page of the app",
    metaTitle: "AI Teaching Assistant for Teachers | CourseSmith",
    metaDescription:
      "Chat with CourseSmith Co-Pilot any time to explain concepts, brainstorm activities and adapt material for another grade level. Start free today.",
    eyebrow: "Feature: AI teaching assistant",
    h1: "CourseSmith Co-Pilot, an AI teaching assistant on every page",
    answer:
      "CourseSmith Co-Pilot is an AI teaching assistant that teachers can chat with 24/7 from any page of the app, and it knows which page you are on. Ask it to explain a tricky concept, brainstorm classroom activities, adapt material for a different grade level or draft extra resources. The teacher stays in control and reviews everything before use.",
    definition:
      "An AI teaching assistant is a chat-based tool that helps teachers plan, explain and adapt instruction, while the teacher keeps responsibility for what is taught.",
    takeaways: [
      "CourseSmith Co-Pilot is an AI chat assistant available 24/7 on every page of the app.",
      "Co-Pilot is aware of the page you are on, so requests need less background.",
      "Teachers use it to explain concepts, brainstorm activities, adapt material for another grade level and draft extra resources.",
      "Co-Pilot drafts and suggests, and the teacher reviews and decides what reaches students.",
      "Specific requests that name the grade, topic and goal get far more useful answers than vague ones.",
    ],
    sections: [
      {
        heading: "What can CourseSmith Co-Pilot help with?",
        paragraphs: [
          "Co-Pilot helps with four kinds of work: explaining a concept, brainstorming activities, adapting material for a different grade level and drafting extra resources. It is built for the moments between full plans, such as preparing a better explanation the night before or finding a new activity when the first one fell flat.",
        ],
        table: {
          caption: "What to ask Co-Pilot and what to check",
          columns: ["Task", "Example request", "What to check before class"],
          rows: [
            [
              "Explain a tricky concept",
              "Explain photosynthesis to grade 6 students using one everyday analogy",
              "The analogy is accurate and does not create a new misconception",
            ],
            [
              "Brainstorm classroom activities",
              "Give me three partner activities to practice equivalent fractions",
              "Materials, room setup and time fit your class",
            ],
            [
              "Adapt for a different grade level",
              "Rewrite this paragraph on the causes of the Civil War for grade 4 readers",
              "Key facts survive the simplification",
            ],
            [
              "Draft extra resources",
              "Write five extra practice problems on solving two-step equations",
              "Every answer is correct and the difficulty matches your students",
            ],
          ],
        },
      },
      {
        heading: "Why does it matter that Co-Pilot knows which page you are on?",
        paragraphs: [
          "Page awareness means you can ask about the task in front of you without explaining where you are in the app. A question asked from the lesson planner or a test paper starts with that context, which keeps requests short. Co-Pilot is not limited to your uploaded document, so paste the textbook passage when you need an answer in your book's exact wording.",
        ],
      },
      {
        heading: "How do you write requests that get useful answers?",
        paragraphs: [
          "You get useful answers by telling Co-Pilot who the students are, what the topic is and what you need back. A vague request produces a generic reply, while a specific one produces something you can use with light edits.",
        ],
        bullets: [
          "Name the grade level and subject in the request.",
          "Paste the textbook passage or standard wording you want it to work from.",
          "Say what format you want, such as a list, a script or a short handout.",
          "Ask for several options, then pick and refine the best one.",
          "Follow up with corrections instead of starting over, such as asking for a simpler version.",
        ],
      },
      {
        heading: "How does the teacher stay in control of an AI assistant for teachers?",
        paragraphs: [
          "The teacher stays in control because Co-Pilot only drafts, and nothing reaches students unless you choose to use it. CourseSmith's Terms describe the product as an assistant, not a replacement for professional judgment, and note that AI output can be inaccurate. Treat every reply like a suggestion from a new colleague: often good, and always worth checking against the textbook and your knowledge of your students.",
        ],
      },
      {
        heading: "When should you use Co-Pilot instead of a generator?",
        paragraphs: [
          "Use Co-Pilot for quick, targeted help and the generators for complete, structured material. The lesson planner produces a full plan with objectives and delivery steps, the test paper generator produces a marked test with an answer key, the assignment generator produces a marked assignment with a marking guide, and Academic Schedules produces a week-by-week plan. Co-Pilot fills the gaps between them, such as one new activity or one passage rewritten for younger readers.",
        ],
      },
      {
        heading: "What should you avoid sharing with an AI chatbot for teachers?",
        paragraphs: [
          "Avoid sharing student names, grades, health information or other personal details in any AI chat. Describe needs in general terms instead, such as asking for a passage rewritten for a struggling reader rather than naming the student. CourseSmith's privacy policy says AI providers process text under data processing agreements and do not use it to train public models, but keeping student data out of prompts is still good practice.",
        ],
      },
      {
        heading: "Is Co-Pilot available all the time and free to try?",
        paragraphs: [
          "Yes, Co-Pilot is available 24/7, including evenings and weekends when most planning happens. CourseSmith is free to start, with free starter credits and no credit card needed, and AI credits are deducted per generation after that. Schools and departments can contact SuperMIA at hello@supermia.ai for volume pricing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Co-Pilot only answer from my textbook?",
        a: "No. Co-Pilot knows which page of CourseSmith you are on, but it is not restricted to your uploaded document and does not cite it. When an answer must match your book, paste the relevant passage into the chat and ask Co-Pilot to work from it, then check the reply against the page.",
      },
      {
        q: "Can Co-Pilot adapt a lesson for students who need extra support?",
        a: "Co-Pilot can adapt material for a different grade level, such as rewriting a passage in simpler language or suggesting a more concrete example. Formal accommodations for students with IEPs or 504 plans remain the teacher's job, so use Co-Pilot for draft ideas and check them against each student's plan.",
      },
      {
        q: "Does Co-Pilot replace a human teaching assistant or aide?",
        a: "No. Co-Pilot helps with planning and preparing material, while a human aide works directly with students, manages the room and knows each child. Think of Co-Pilot as a planning partner that is available at any hour, with every suggestion reviewed by you before use.",
      },
      {
        q: "How is Co-Pilot different from a general AI chatbot?",
        a: "A general AI chatbot is built for any topic and any user and starts every conversation without context. Co-Pilot lives inside CourseSmith on every page, alongside your syllabi, teaching persona, lesson plans, tests, assignments and schedules, and it knows which of those pages you are working on when you ask.",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/compare/chatgpt-for-lesson-planning",
      "/resources/can-ai-write-lesson-plans",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "ai teaching assistant",
    secondaryKeywords: ["ai assistant for teachers", "ai chatbot for teachers"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
];
