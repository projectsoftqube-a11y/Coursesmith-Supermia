import type { ContentPage } from "./types";

const UTORONTO_BACKWARD_DESIGN = {
  label: "University of Toronto, Open UToronto: Backward Design",
  url: "https://ocw.utoronto.ca/backward-design/",
};
const CMU_OBJECTIVES = {
  label: "Carnegie Mellon University, Eberly Center: Learning Objectives",
  url: "https://www.cmu.edu/teaching/designteach/design/learningobjectives.html",
};
const EDUTOPIA_EXIT_SLIP = {
  label: "Edutopia (Rebecca Alber): A Favorite Formative Assessment: The Exit Slip",
  url: "https://www.edutopia.org/blog/formative-assessment-exit-slip-rebecca-alber",
};
const ED_AI_REPORT = {
  label:
    "U.S. Department of Education, Office of Educational Technology: Artificial Intelligence and the Future of Teaching and Learning (May 2023)",
  url: "https://files.eric.ed.gov/fulltext/ED631097.pdf",
};
const IES_AI_BLOG = {
  label: "Institute of Education Sciences, REL Northeast & Islands: AI in K-12 Education (2026)",
  url: "https://ies.ed.gov/learn/blog/ai-k-12-education-good-bad-and-guardrails-consider",
};
const UNESCO_GENAI = {
  label: "UNESCO: Guidance for Generative AI in Education and Research",
  url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
};
const WATERLOO_MCQ = {
  label:
    "University of Waterloo, Centre for Teaching Excellence: Designing Multiple-Choice Questions",
  url: "https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/designing-multiple-choice-questions",
};
const WATERLOO_QUESTION_TYPES = {
  label:
    "University of Waterloo, Centre for Teaching Excellence: Exam Questions: Types, Characteristics, and Suggestions",
  url: "https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/exam-questions-types-characteristics-and-suggestions",
};
const JHU_MCQ = {
  label:
    "Johns Hopkins University, The Innovative Instructor: Tips for Writing Effective Multiple Choice Questions",
  url: "https://ii.library.jhu.edu/2016/12/15/tips-for-writing-effective-multiple-choice-questions/",
};

export const RESOURCE_PAGES: ContentPage[] = [
  {
    slug: "how-to-write-a-lesson-plan",
    group: "resources",
    navLabel: "How to Write a Lesson Plan",
    navBlurb: "Step-by-step lesson planning, from objective to exit ticket",
    metaTitle: "How to Write a Lesson Plan in 7 Steps | CourseSmith",
    metaDescription:
      "How to write a lesson plan in 7 steps: objectives, evidence, activities, timing and checks for understanding, plus a components table you can copy.",
    eyebrow: "Teacher guide",
    h1: "How to Write a Lesson Plan, Step by Step",
    answer:
      "To write a lesson plan, start with what students should be able to do by the end of class, decide how you will see evidence of that learning, then plan the activities and timing that get students there. A complete lesson plan includes an objective, materials, a warm-up, instruction, practice, a check for understanding and closure.",
    definition:
      "A lesson plan is a teacher's written road map for a single class period that states the learning objective, the activities and their timing, the materials needed and how student understanding will be checked.",
    takeaways: [
      "Write the learning objective first, using an action verb that describes something students can do and you can observe.",
      "Backward design plans in three stages: identify desired results, determine acceptable evidence, then plan learning experiences and instruction.",
      "Every lesson plan needs a check for understanding, such as an exit ticket, so the next lesson starts from real evidence.",
      "Timing each segment of a 45-minute class keeps direct instruction short enough to leave room for student practice.",
      "AI tools can draft a lesson plan from your textbook, but the teacher still reviews, edits and owns the final plan.",
    ],
    sections: [
      {
        heading: "What should a lesson plan include?",
        paragraphs: [
          "A lesson plan should include a clear objective, the materials you need, a timed sequence of activities, a way to check understanding and a plan for closure or homework. Formats vary by school and district, so treat the components below as a core you can map onto any required template.",
        ],
        table: {
          caption: "Lesson plan components and the question each one answers",
          columns: ["Component", "Purpose", "Question it answers"],
          rows: [
            [
              "Learning objective",
              "States what students will be able to do by the end of class",
              "What will students learn?",
            ],
            [
              "Success criteria",
              "Describes what a strong answer or product looks like",
              "How will students know they got it?",
            ],
            [
              "Materials",
              "Lists texts, handouts, lab supplies and slides",
              "What do I need ready before class?",
            ],
            [
              "Warm-up",
              "Activates prior knowledge in the first few minutes",
              "What do students already know?",
            ],
            ["Direct instruction", "Introduces the new concept or skill", "How will I teach it?"],
            [
              "Guided and independent practice",
              "Gives students time to apply the idea, first with support, then on their own",
              "How will students practice?",
            ],
            [
              "Check for understanding",
              "Collects evidence of learning before students leave",
              "Did they learn it?",
            ],
            [
              "Closure and homework",
              "Summarizes the lesson and extends practice",
              "What comes next?",
            ],
          ],
        },
      },
      {
        heading: "How do you write a lesson plan step by step?",
        paragraphs: [
          "Work backward from the goal: decide the outcome, then the evidence, then the activities. The University of Toronto's summary of Wiggins and McTighe's Understanding by Design describes the same order as identifying desired results, determining acceptable evidence and only then planning learning experiences and instruction.",
        ],
        steps: [
          {
            name: "Identify the goal",
            text: "Read the textbook section or unit plan and name the one or two big ideas students must leave with. If your school requires a standard, copy it word for word from the official document.",
          },
          {
            name: "Write a measurable objective",
            text: "Phrase it as what students will be able to do, with an action verb such as explain, compare, calculate or classify. Avoid verbs like understand that you cannot observe.",
          },
          {
            name: "Decide the evidence",
            text: "Choose how students will show the objective: an exit ticket, a short quiz, a labeled diagram or a one-paragraph explanation. Write that question or task now, before you plan activities.",
          },
          {
            name: "Plan the warm-up",
            text: "Open with a three-to-five-minute task that connects to prior knowledge or surfaces misconceptions, such as one question on the board.",
          },
          {
            name: "Plan instruction and practice",
            text: "Keep direct instruction focused, move to guided practice while you circulate, and finish with independent or partner work that mirrors the evidence task.",
          },
          {
            name: "Set the timing and materials",
            text: "Assign minutes to each segment so the total fits the period, and list every handout, slide and supply you need.",
          },
          {
            name: "Plan closure and reflect",
            text: "End with a summary and the check for understanding, assign homework if it serves the objective, and leave space to note what to change next time.",
          },
        ],
      },
      {
        heading: "How do you write a good learning objective?",
        paragraphs: [
          "A good learning objective is student-centered, measurable and built on an action verb. Carnegie Mellon's Eberly Center advises that objectives describe what students should be able to do, use action verbs, and draw on Bloom's taxonomy as a starting list of verbs.",
          "Compare students will understand photosynthesis with students will explain how plants use light, water and carbon dioxide to make sugar. The second version tells you exactly what to assess and tells students what success looks like.",
        ],
      },
      {
        heading: "How do you check for understanding during a lesson?",
        paragraphs: [
          "Check for understanding at least once mid-lesson and once at the end, using quick tasks that every student answers. Edutopia's Rebecca Alber describes the exit slip as a short response students write at the conclusion of learning, sometimes on a half-sheet with sentence starters, which the teacher then collects.",
          "Mid-lesson checks can be as simple as mini whiteboards, a thumbs-up scale or one multiple-choice question answered with hand signals. Sort exit tickets into got it, almost and not yet, and let those piles shape the next day's warm-up.",
        ],
      },
      {
        heading: "How long should each part of a 45-minute lesson take?",
        paragraphs: [
          "A practical split for a 45-minute class gives roughly a quarter of the time to direct instruction and most of the rest to practice and checking.",
          "Treat these numbers as a starting point, not a rule. Labs, discussions and test reviews need different splits, and a plan that runs long is a signal to cut content rather than closure.",
        ],
        bullets: [
          "Warm-up: 5 minutes",
          "Direct instruction: 10 to 12 minutes",
          "Guided practice: 10 minutes",
          "Independent or partner practice: 10 to 12 minutes",
          "Check for understanding and closure: 5 to 8 minutes",
        ],
      },
      {
        heading: "What are common lesson planning mistakes?",
        paragraphs: [
          "Most lesson planning mistakes come from planning activities before deciding what students should learn. A consistent template, reused every week, catches the rest before class starts.",
        ],
        bullets: [
          "Choosing activities first and writing the objective afterward to fit them.",
          "Writing objectives with verbs like know or understand that cannot be observed.",
          "Planning more content than the period can hold, which squeezes out practice and closure.",
          "Skipping the check for understanding, so the next lesson rests on guesses.",
          "Forgetting materials or setup time for labs and group work.",
        ],
      },
      {
        heading: "Can CourseSmith help you write lesson plans faster?",
        paragraphs: [
          "CourseSmith, an AI teaching assistant built by SuperMIA, drafts lesson plans from the textbook you upload. You upload a textbook PDF or DOCX, CourseSmith organizes it into chapters and topics, and you pick a topic, one or more delivery methods and the lecture length in minutes.",
          "Each draft includes learning objectives, an in-depth explanation of the topic, a step-by-step delivery plan for each method, homework and a project idea. A teaching persona shapes drafts to match how you teach, and because CourseSmith is an assistant, you still add your own warm-up and check for understanding and fact-check every plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a lesson plan be?",
        a: "A daily lesson plan for one class period usually fits on one or two pages. Completeness matters more than length: a short plan that states the objective, timed activities, materials and a check for understanding is more useful than a long narrative. Observed lessons and student teaching often call for more detail, such as scripted questions and expected student answers.",
      },
      {
        q: "What is the difference between a lesson plan and a unit plan?",
        a: "A unit plan covers a sequence of lessons on one topic over days or weeks, including the big ideas and the end-of-unit assessment. A lesson plan covers a single class period and serves one or two objectives from that unit. Writing the unit plan first makes each daily plan faster, because the goals and evidence are already decided.",
      },
      {
        q: "Do I need to include standards in a lesson plan?",
        a: "Many schools and districts require a standard on every plan, especially for observations. Copy the standard text from your state's official document rather than paraphrasing it, then write a student-friendly objective that addresses part of it. If your school does not require standards, a clear objective tied to your curriculum still keeps the lesson focused.",
      },
      {
        q: "How far ahead should teachers plan lessons?",
        a: "A workable rhythm is to outline a week of lessons at a time and finalize each plan a day or two before teaching, adjusting based on exit-ticket results. Mapping the whole unit early, then detailing lessons on a rolling basis, keeps you prepared without locking in plans that student evidence may show need to change.",
      },
      {
        q: "Can I reuse lesson plans from year to year?",
        a: "Yes, and a short reflection note at the end of each plan makes reuse far more effective. Record what ran long, which questions confused students and what the exit tickets showed, then revise before you teach the lesson again. Reused plans should still be checked against your current textbook edition and any updated standards.",
      },
    ],
    sources: [UTORONTO_BACKWARD_DESIGN, CMU_OBJECTIVES, EDUTOPIA_EXIT_SLIP],
    related: [
      "/features/textbook-to-lesson-plan",
      "/resources/lesson-plan-template",
      "/resources/can-ai-write-lesson-plans",
    ],
    primaryKeyword: "how to write a lesson plan",
    secondaryKeywords: [
      "what should a lesson plan include",
      "lesson plan steps",
      "lesson plan components",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "lesson-plan-template",
    group: "resources",
    navLabel: "Lesson Plan Template",
    navBlurb: "Free 45-minute lesson plan template with a grade 6 science example",
    metaTitle: "Free Lesson Plan Template (45 Minutes) | CourseSmith",
    metaDescription:
      "Free lesson plan template for a 45-minute class, with a filled-in grade 6 science example. Copy the table, adapt each section and plan your next lesson.",
    eyebrow: "Free template",
    h1: "Free Lesson Plan Template for a 45-Minute Class",
    answer:
      "A lesson plan template is a reusable outline with fixed sections for the objective, materials, timed activities, check for understanding and homework. The free CourseSmith lesson plan template for a 45-minute class includes a filled-in grade 6 science example on the water cycle, so teachers can copy the structure and swap in their own content.",
    definition:
      "A lesson plan template is a standard document layout that prompts a teacher to fill in the same essential sections, such as objective, activities, timing and assessment, for every lesson.",
    takeaways: [
      "A good lesson plan template keeps the same sections every day, so planning gets faster and nothing gets skipped.",
      "A lesson plan template for a 45-minute class should assign minutes to each segment, from a 5-minute warm-up to a 5-minute exit ticket.",
      "Fill in the objective and the check for understanding before choosing activities.",
      "A template works best when the example content is replaced with your own textbook, students and required standards.",
    ],
    sections: [
      {
        heading: "What is in the free lesson plan template?",
        paragraphs: [
          "The template has thirteen sections, each with a short instruction and a worked example from a grade 6 science lesson on the water cycle. The timed segments add up to 45 minutes.",
        ],
        table: {
          caption: "Lesson plan template for a 45-minute class, with a grade 6 science example",
          columns: ["Section", "What to write", "Example: grade 6 science, the water cycle"],
          rows: [
            [
              "Lesson basics",
              "Subject, grade, date, unit and lesson title",
              "Grade 6 science; Unit: Earth's water; Lesson 3: The water cycle",
            ],
            [
              "Standard or goal",
              "The standard your school requires, copied from the official document, or the unit goal",
              "The water cycle standard your district requires, pasted word for word",
            ],
            [
              "Learning objective",
              "What students will be able to do, with an observable verb",
              "Students will explain how evaporation, condensation and precipitation move water through the water cycle",
            ],
            [
              "Success criteria",
              "What a correct response includes, in student-friendly language",
              "I can name the three processes and describe what causes each one",
            ],
            [
              "Materials",
              "Texts, handouts, supplies and slides",
              "Textbook pages on the water cycle, clear cups, warm water, plastic wrap, ice cubes, diagram handout",
            ],
            [
              "Warm-up (5 min)",
              "A quick task that activates prior knowledge or surfaces misconceptions",
              "Where does a puddle go on a sunny day? Students write one sentence, then share with a partner",
            ],
            [
              "Direct instruction (10 min)",
              "Key vocabulary and the core explanation, with a visual",
              "Introduce evaporation, condensation and precipitation using the textbook diagram",
            ],
            [
              "Guided practice (10 min)",
              "A task students do with your support while you circulate",
              "Water cycle in a cup: warm water covered with plastic wrap, ice on top; students record what forms",
            ],
            [
              "Independent or partner work (10 min)",
              "Practice that mirrors the evidence task",
              "Partners label a blank water cycle diagram and write a caption for each arrow",
            ],
            [
              "Check for understanding (5 min)",
              "An exit ticket or short quiz every student completes",
              "Exit ticket: explain why droplets formed under the plastic wrap",
            ],
            [
              "Closure and homework (5 min)",
              "A one-sentence summary and any homework",
              "Students state one process in their own words; homework: find one example of condensation at home",
            ],
            [
              "Supports and extensions",
              "Help for students who need more support or more challenge",
              "Word bank and labeled diagram for support; extension question on how temperature affects evaporation",
            ],
            [
              "Reflection",
              "Notes after teaching on what to change",
              "Did the cup demonstration work? Which process confused students most?",
            ],
          ],
        },
      },
      {
        heading: "How do you use the lesson plan template?",
        paragraphs: [
          "Fill in the template in backward design order rather than top to bottom. The University of Toronto's summary of Wiggins and McTighe's Understanding by Design sets the sequence as desired results first, acceptable evidence second, and learning experiences and instruction last.",
        ],
        steps: [
          {
            name: "Copy the table",
            text: "Paste the template into a document, spreadsheet or planner, keeping the example column until the format feels familiar.",
          },
          {
            name: "Write the objective and exit ticket first",
            text: "Decide what students will be able to do and write the exact exit ticket question before choosing any activity.",
          },
          {
            name: "Plan activities that lead to the evidence",
            text: "Choose a warm-up, instruction and practice that prepare students to answer the exit ticket well.",
          },
          {
            name: "Set the minutes",
            text: "Adjust each timed segment so the total matches your period length.",
          },
          {
            name: "Add materials and supports",
            text: "List every item you need and note how you will support students who need help or extra challenge.",
          },
          {
            name: "Reflect after teaching",
            text: "Spend two minutes noting what worked and what to change, so next year's version starts stronger.",
          },
        ],
      },
      {
        heading: "How do you write the objective in the template?",
        paragraphs: [
          "Write the objective as what students will be able to do, using an action verb you can observe. Carnegie Mellon's Eberly Center recommends student-centered objectives built on action verbs and points to Bloom's taxonomy for verb choices.",
        ],
        bullets: [
          "Weak: Students will learn about the water cycle.",
          "Stronger: Students will explain how evaporation, condensation and precipitation move water.",
          "Stronger: Students will compare evaporation and condensation using evidence from the cup demonstration.",
        ],
      },
      {
        heading: "Why does the lesson plan template include an exit ticket?",
        paragraphs: [
          "An exit ticket gives you evidence from every student before they leave, which tells you where to start the next lesson. Edutopia's Rebecca Alber describes the exit slip as a short response students write at the conclusion of learning, sometimes on a half-sheet with sentence starters, which the teacher collects.",
          "Write exit ticket questions that match the objective directly. If the objective says explain, the exit ticket should ask students to explain, not to pick a vocabulary word.",
        ],
      },
      {
        heading: "How do you adapt the template for a different period length?",
        paragraphs: [
          "Scale the practice segments first and keep the warm-up and exit ticket about the same length. For a 60-minute period, add time to guided and independent practice; for a 30-minute period, merge them into one task.",
          "Block schedules of 80 to 90 minutes work well with two cycles of instruction and practice, separated by a quick check for understanding. Keeping the same section names across period lengths makes your plans easy to compare from week to week.",
        ],
      },
      {
        heading: "Can CourseSmith fill in a lesson plan template for you?",
        paragraphs: [
          "CourseSmith can supply most of the content for the template, though it uses its own format. It drafts lesson plans from the textbook you upload for the lecture length you set, with learning objectives, an in-depth explanation, a step-by-step delivery plan for each method you choose, homework and a project idea.",
          "Copy what fits into your template, then add the warm-up, exit ticket and materials yourself. CourseSmith is free to start, with starter credits and no credit card needed, and every draft needs your review because AI output can contain errors.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the lesson plan template free to use?",
        a: "Yes. Copy the table into any document, spreadsheet or planner and adapt the sections to match what your school requires. No sign-up is needed to use the template itself. If your district mandates a specific format, keep its headings and use the example column as a guide to what each section should contain.",
      },
      {
        q: "What goes in the standard section if my school does not require one?",
        a: "Write the unit goal or the big idea from your curriculum instead. The section exists to connect the daily objective to something larger, so students and observers can see why the lesson matters. If you later need a standard, copy the exact wording from your state's official document rather than paraphrasing it.",
      },
      {
        q: "How detailed should each section be?",
        a: "Detailed enough that a substitute teacher could run the lesson. That usually means the exact warm-up and exit ticket questions, the key points of direct instruction and clear directions for practice. Routine lessons can be brief, while labs, new units and observed lessons deserve more detail, including expected student answers.",
      },
      {
        q: "Can I use the template for subjects other than science?",
        a: "Yes. The sections are subject-neutral, so the same structure works for math, English language arts, social studies and world languages. Only the example column is science-specific. Replace it with a reading passage, a problem set or a primary source, and keep the timing and the exit ticket.",
      },
      {
        q: "Should a lesson plan include homework every day?",
        a: "Only when the homework serves the objective. A short practice task or a real-world observation, like spotting condensation at home, can reinforce the lesson, while busywork adds checking time without adding learning. It is fine to leave the homework row blank on lab or test days and note the reason.",
      },
    ],
    sources: [UTORONTO_BACKWARD_DESIGN, CMU_OBJECTIVES, EDUTOPIA_EXIT_SLIP],
    related: [
      "/features/textbook-to-lesson-plan",
      "/resources/how-to-write-a-lesson-plan",
      "/use-cases/science",
      "/use-cases/middle-school",
    ],
    primaryKeyword: "lesson plan template",
    secondaryKeywords: ["free lesson plan template", "45 minute lesson plan template"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "can-ai-write-lesson-plans",
    group: "resources",
    navLabel: "Can AI Write Lesson Plans?",
    navBlurb: "Pros, cons and ethics of AI lesson planning for teachers",
    metaTitle: "Can AI Write Lesson Plans? Pros, Cons and Ethics",
    metaDescription:
      "Can AI write lesson plans? Yes, as drafts. See the pros, cons and ethics of AI lesson planning, plus a checklist of what to verify before class.",
    eyebrow: "AI in the classroom",
    h1: "Can AI Write Lesson Plans? What Teachers Should Know",
    answer:
      "AI can write a usable first draft of a lesson plan quickly, but it cannot replace a teacher's judgment. AI lesson plans can contain factual errors, generic activities or content that does not fit your students, so teachers should review, fact-check and adapt every AI-generated lesson plan before using it in class.",
    definition:
      "AI lesson planning is the use of generative AI tools to draft lesson objectives, activities, assessments and materials that a teacher then reviews, edits and approves.",
    takeaways: [
      "AI can draft lesson plans, and the U.S. Department of Education's 2023 AI report calls for keeping humans in the loop whenever AI is used in education.",
      "AI lesson planning is easiest to justify ethically when the teacher reviews every draft, protects student data and stays accountable for what is taught.",
      "The main risks of AI lesson plans are inaccurate facts, generic activities, hidden bias and overtrust in the tool.",
      "AI tools that build from a teacher's own textbook keep drafts closer to the content students actually read.",
    ],
    sections: [
      {
        heading: "Can AI really write a lesson plan?",
        paragraphs: [
          "Yes, AI can produce a complete lesson plan draft with an objective, activities, timing and an assessment. The U.S. Department of Education's Office of Educational Technology noted in its May 2023 report that educators were already exploring how AI can help write or improve lessons and find and adapt materials.",
          "The same report warns that AI can produce output that is inappropriate or wrong, and can provide information that appears authentic but is inaccurate. An AI lesson plan is a starting point, not a finished plan.",
        ],
      },
      {
        heading: "Is it ethical for teachers to use AI?",
        paragraphs: [
          "Using AI to plan is ethical when the teacher stays in control of what is taught, protects student data and reviews the output. The Department's report makes humans in the loop its first recommendation and compares good classroom AI to an electric bike rather than a robot vacuum, because the rider stays fully aware and in control.",
          "The report adds that teachers need to know how to analyze AI-generated lesson plans for flaws and avoid the human tendency to overly trust AI systems. UNESCO's guidance on generative AI similarly calls for a human-centered, age-appropriate approach to using these tools in education.",
          "Transparency matters too. Follow your school or district AI policy, and be open with colleagues about how you use AI in planning.",
        ],
      },
      {
        heading: "What are the pros and cons of AI lesson planning?",
        paragraphs: [
          "The biggest advantage of AI lesson planning is a fast first draft, and the biggest risk is trusting that draft without checking it. The comparison below sets the two side by side.",
        ],
        table: {
          caption: "AI lesson planning pros and cons",
          columns: ["Factor", "Pros", "Cons"],
          rows: [
            [
              "Time",
              "Produces a full first draft quickly, freeing time for feedback and students",
              "Fixing a weak draft can take as long as writing a plan yourself",
            ],
            [
              "Ideas",
              "Suggests activities, examples and questions you might not have considered",
              "Activities can be generic or unrealistic for your room, supplies or schedule",
            ],
            [
              "Accuracy",
              "Explains concepts and generates practice items on demand",
              "Can state false facts with confidence, so every claim needs checking",
            ],
            [
              "Fit",
              "Can adapt material for a different grade level when asked",
              "Does not know your students or what they learned last week",
            ],
            [
              "Consistency",
              "Follows the same structure every time, which helps newer teachers",
              "Can encourage overtrust if teachers stop reading drafts closely",
            ],
            [
              "Privacy",
              "Most planning tasks need no student data at all",
              "Entering student names or records may break school policy",
            ],
          ],
        },
      },
      {
        heading: "What should you check before using an AI lesson plan?",
        paragraphs: [
          "Check facts, alignment, timing, fit, bias, safety and privacy before any AI-generated plan reaches students. CourseSmith's own Terms say the same thing: AI output can be inaccurate, and teachers must review and fact-check it before classroom use.",
        ],
        bullets: [
          "Facts: verify every definition, date, formula and example against your textbook or another trusted source.",
          "Objective: confirm the objective is measurable and matches your curriculum or required standard.",
          "Alignment: make sure the activities and assessment actually lead to the stated objective.",
          "Timing: add up the minutes and cut content that will not fit your period.",
          "Fit: adjust reading level, examples and supports for the students in front of you.",
          "Bias: read examples, names and scenarios for stereotypes or a narrow point of view.",
          "Safety: check any lab or physical activity against your school's safety rules.",
          "Privacy: confirm no student names, grades or records were entered into the tool.",
        ],
      },
      {
        heading: "What does recent research say about AI in classrooms?",
        paragraphs: [
          "Research summaries suggest AI helps most when it supports teachers rather than replacing them. A 2026 Institute of Education Sciences blog from REL Northeast & Islands reported that teacher-mediated and AI-augmented tutoring showed the most promising results, while students who studied with general-purpose chatbots showed lower exam performance and shallower learning.",
          "The authors recommend using AI to support thinking rather than replace it, keeping human relationships central and vetting tools for learning, privacy and access. For lesson planning, use AI to prepare instruction and design activities where students still do the thinking.",
        ],
      },
      {
        heading: "How do you get better lesson plans from AI?",
        paragraphs: [
          "Better input produces better drafts, so give the AI the same context you would give a colleague.",
        ],
        steps: [
          {
            name: "Start from your source material",
            text: "Work from your textbook chapter or notes instead of a bare topic name, so the draft matches what students read.",
          },
          {
            name: "State the context",
            text: "Include grade level, period length, prior knowledge and the exact text of any standard you want to address.",
          },
          {
            name: "Ask for structure",
            text: "Request a measurable objective, timed segments and an exit ticket with an answer key.",
          },
          {
            name: "Iterate",
            text: "Ask for specific revisions, such as a simpler warm-up or a hands-on alternative, instead of accepting the first draft.",
          },
          {
            name: "Review and own it",
            text: "Run the checklist, edit the plan in your own voice and note what you changed.",
          },
        ],
      },
      {
        heading: "How does CourseSmith approach AI lesson planning?",
        paragraphs: [
          "CourseSmith, built by SuperMIA, starts from the textbook you upload rather than from a blank prompt. It organizes the book into chapters and topics, and you choose delivery methods such as direct instruction, an interactive activity or game, or real-world use cases, plus the lecture length in minutes. Each plan includes learning objectives, an in-depth explanation, a step-by-step delivery plan, homework and a project idea.",
          "You can set a teaching persona so drafts reflect your experience and philosophy. Under the CourseSmith privacy policy, AI providers process text under data processing agreements and do not use it to train their public models, and the teacher reviews and approves every plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will AI replace teachers?",
        a: "The U.S. Department of Education's 2023 AI report states that the Department firmly rejects the idea that AI could replace teachers. The report frames educators as the instructional decision makers, with AI reducing their burden. AI can draft materials, but relationships, judgment and classroom management stay with the teacher.",
      },
      {
        q: "Do teachers need to disclose using AI for lesson planning?",
        a: "Check your school or district AI policy first, because rules differ. Even where disclosure is not required, being open with colleagues and administrators builds trust and helps teams share prompts and catch errors. Disclosure matters most when AI-generated materials go directly to students or families.",
      },
      {
        q: "Can AI lesson plans meet state standards?",
        a: "AI can draft a plan aimed at a standard if you paste the exact standard text into your request, but it can misread or invent standard codes. Verify the code and wording against your state's official document, and check that the assessment actually measures what the standard asks students to do.",
      },
      {
        q: "Is it safe to put student information into an AI tool?",
        a: "Avoid entering student names, grades, accommodations or other records into general AI tools unless your district has approved the tool for that data. Lesson planning rarely needs identifiable student information. Describe needs in general terms instead, such as several students reading below grade level.",
      },
      {
        q: "Which AI tool is best for lesson planning?",
        a: "The best tool depends on whether you want a general chatbot or a teacher-specific assistant that works from your materials. Look for tools that build from your own textbook, explain their privacy terms clearly and make review easy. Test any option against the accuracy, fit and privacy checklist before adopting it.",
      },
    ],
    sources: [ED_AI_REPORT, IES_AI_BLOG, UNESCO_GENAI],
    related: [
      "/features/textbook-to-lesson-plan",
      "/compare/chatgpt-for-lesson-planning",
      "/resources/how-to-write-a-lesson-plan",
      "/privacy",
    ],
    primaryKeyword: "can ai write lesson plans",
    secondaryKeywords: ["is it ethical for teachers to use ai", "ai lesson planning pros and cons"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
  {
    slug: "how-to-make-a-quiz-from-a-pdf",
    group: "resources",
    navLabel: "How to Make a Quiz from a PDF",
    navBlurb: "Turn a PDF or your notes into a quiz with a clear answer key",
    metaTitle: "How to Make a Quiz from a PDF: Manual and AI Methods",
    metaDescription:
      "How to make a quiz from a PDF: a manual method, an AI method, question types and tips for strong distractors and answer keys. Build your next quiz today.",
    eyebrow: "Assessment guide",
    h1: "How to Make a Quiz from a PDF or Your Notes",
    answer:
      "To make a quiz from a PDF, pick the pages that match your learning objective, list the key facts and concepts, write questions in a mix of formats, add plausible distractors and build an answer key that explains each correct answer. AI tools such as CourseSmith can draft the quiz from an uploaded textbook PDF for teacher review.",
    definition:
      "A PDF-to-quiz workflow is a process for turning the content of a PDF document, such as a textbook chapter or class notes, into assessment questions with an answer key.",
    takeaways: [
      "A good quiz starts from the learning objective, not from whatever facts are easiest to pull out of the PDF.",
      "Mixing multiple choice, short answer and long answer questions tests both recall and deeper understanding.",
      "Strong distractors are based on common student mistakes and match the correct answer in length and wording.",
      "Every quiz needs an answer key, ideally with a short explanation for each correct response.",
      "AI can turn a textbook PDF into a draft quiz, but the teacher should check every question and answer before students see it.",
    ],
    sections: [
      {
        heading: "How do you make a quiz from a PDF manually?",
        paragraphs: [
          "Make a quiz from a PDF manually by working from your objective to the key content, then to questions and an answer key. The manual method works for any PDF, including scanned notes, and gives you full control over every question.",
        ],
        steps: [
          {
            name: "Define the objective",
            text: "Write one sentence describing what the quiz should show, such as students can explain how a bill becomes a law.",
          },
          {
            name: "Mark the key content",
            text: "Highlight the definitions, processes, examples and diagrams in the PDF that serve the objective, and skip side details.",
          },
          {
            name: "Choose question types",
            text: "Match each key point to a format: multiple choice for concepts with common misconceptions, short answer for explanations, long answer for analysis.",
          },
          {
            name: "Write the questions",
            text: "Use your own wording rather than copying sentences from the PDF, so students cannot answer by recognizing the text.",
          },
          {
            name: "Write distractors and the answer key",
            text: "Draft plausible wrong options, then record the correct answer with one sentence explaining why it is right.",
          },
          {
            name: "Review and format",
            text: "Read the quiz as a student would, fix ambiguous wording, vary the position of correct answers and set the layout for print or screen.",
          },
        ],
      },
      {
        heading: "How do you turn notes into a quiz?",
        paragraphs: [
          "Turn notes into a quiz by first rewriting them as a short list of claims students should be able to recall or explain. Each claim becomes one question, and any gaps in your notes show what you have not yet taught.",
          "For handwritten or scanned notes, type the key points before writing questions, because unclear notes produce unclear questions. Fill-in-the-blank items work well from notes, and the University of Waterloo's Centre for Teaching Excellence suggests removing only one or two key words, usually near the end of the sentence.",
        ],
      },
      {
        heading: "How do you make a quiz from a PDF with CourseSmith?",
        paragraphs: [
          "CourseSmith, an AI teaching assistant built by SuperMIA, drafts quizzes from the textbook you upload. It is designed for textbook PDFs, and DOCX files are also accepted.",
        ],
        steps: [
          {
            name: "Upload the PDF",
            text: "Upload your textbook as a PDF or DOCX file of up to 40 MB, and CourseSmith organizes it into chapters and topics.",
          },
          {
            name: "Choose the scope",
            text: "Select specific chapters or the full book for the test.",
          },
          {
            name: "Set question types and marks",
            text: "For multiple choice, short answer, long answer and fill in the blanks, set how many questions you want and the marks per question.",
          },
          {
            name: "Set the difficulty mix",
            text: "Split the questions across Easy, Medium and Hard as percentages that total 100.",
          },
          {
            name: "Check the answer key",
            text: "Use the Show answer toggle to reveal the answer key, and verify every answer against the textbook.",
          },
          {
            name: "Download and edit",
            text: "Download the test as an editable Word (.docx) file and fix anything inaccurate or off-level before students see it.",
          },
        ],
      },
      {
        heading: "Which question types should a quiz include?",
        paragraphs: [
          "Choose the format that matches what the objective asks students to do. The table summarizes guidance from the University of Waterloo's Centre for Teaching Excellence.",
        ],
        table: {
          caption: "Quiz question types compared",
          columns: ["Question type", "Best for", "Watch out for", "Tip"],
          rows: [
            [
              "Multiple choice",
              "Covering a broad range of content quickly",
              "Writing several plausible distractors takes time",
              "Include at least three options and spread correct answers across letters",
            ],
            [
              "True/false",
              "Spotting popular misconceptions",
              "Students have a 50 percent chance of guessing correctly",
              "Ask students to correct the false statements",
            ],
            [
              "Matching",
              "Recognition and recall of terms and definitions",
              "Mixing unrelated content, such as dates and people, confuses students",
              "Keep the list to 10 to 15 items and order choices logically",
            ],
            [
              "Short answer",
              "Explanations where guessing is difficult",
              "Scoring takes effort and can be subjective",
              "Ask specific, direct questions in your own words",
            ],
            [
              "Long answer",
              "Analysis, synthesis and evaluation",
              "Few items fit in one quiz, and scoring is slow",
              "Use clear wording and a scope that fits the time allowed",
            ],
          ],
        },
      },
      {
        heading: "How do you write good distractors?",
        paragraphs: [
          "Good distractors are wrong answers that look right to a student who has not mastered the idea. Waterloo's guidance says distractors for conceptual questions should represent common student mistakes, and distractors should be similar in length and language to the correct answer.",
          "If you cannot think of a third plausible distractor, use fewer options. Waterloo notes that three-option items perform about as well as four- or five-option items, largely because plausible distractors are hard to write.",
        ],
        bullets: [
          "Base each distractor on a real misconception, such as confusing evaporation with boiling.",
          "Keep options grammatically parallel so the correct answer does not stand out.",
          "Make sure exactly one option is correct.",
          "Avoid all of the above and none of the above, which let students use partial knowledge to find the answer.",
          "List options in a logical order, such as numerical or alphabetical.",
          "Phrase the stem as a clear question and remove irrelevant detail from it.",
        ],
      },
      {
        heading: "What makes a good answer key?",
        paragraphs: [
          "A good answer key lists the correct answer for every item and explains why it is correct, so students can learn from mistakes and colleagues can score consistently. For short and long answers, list the key points a full-credit response must include, along with a sample response.",
          "Note which misconception each distractor targets. When many students choose the same wrong option, the answer key tells you exactly what to reteach.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I make a quiz from a scanned PDF?",
        a: "Yes, if the text is readable. Scanned PDFs are images of pages, so copy-paste and AI tools may not pick up the text unless the file has been through optical character recognition. If a scan is blurry or handwritten, type the key points first, then build questions from your typed list.",
      },
      {
        q: "How many questions should a quiz have?",
        a: "Match the length to the time available and the objective. A five-minute check for understanding might use three to five questions, while a 20-minute chapter quiz might combine ten multiple choice items with one or two short answers. Cover every key point in the objective at least once, and cut questions that test trivia.",
      },
      {
        q: "Should I copy questions straight from the textbook?",
        a: "Use textbook review questions as a starting point, but rewrite them in your own words. Students who have already seen the chapter questions can answer from memory without understanding, and rewording lets you target misconceptions you noticed in class. Waterloo's guidance likewise recommends your own wording for short-answer questions.",
      },
      {
        q: "Can AI make a quiz from my notes?",
        a: "AI tools can draft questions from notes if the notes are typed and clearly organized. CourseSmith is designed around textbook PDFs and DOCX files, so structured documents give the best results. Whatever tool you use, check that each question matches what you taught and that the answer key is correct before students see it.",
      },
      {
        q: "How do I stop students from guessing on a quiz?",
        a: "Use plausible distractors based on real mistakes, avoid patterns in the position of correct answers and include short-answer items, where guessing is difficult. For true/false items, asking students to correct the false statements removes much of the guessing advantage and shows you what they actually understand.",
      },
    ],
    sources: [WATERLOO_QUESTION_TYPES, WATERLOO_MCQ, JHU_MCQ],
    related: [
      "/features/quiz-generator",
      "/features/textbook-to-lesson-plan",
      "/features/ai-assignment-generator",
      "/resources/how-to-write-a-lesson-plan",
    ],
    primaryKeyword: "how to make a quiz from a pdf",
    secondaryKeywords: ["pdf to quiz", "turn notes into a quiz"],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
  },
];
