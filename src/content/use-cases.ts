import type { ContentPage } from "./types";

const DATE = "2026-10-30";

export const USE_CASE_PAGES: ContentPage[] = [
  // ---------------------------------------------------------------- MATH
  {
    slug: "math",
    group: "use-cases",
    navLabel: "Math",
    navBlurb: "Math lesson plans, tests and practice built from your textbook",
    metaTitle: "AI Math Lesson Plan Generator | CourseSmith",
    metaDescription:
      "Turn your math textbook into lesson plans and tests with an Easy, Medium and Hard mix, rendered equations and an answer key. Start free, no card needed.",
    eyebrow: "Use case: Math",
    h1: "AI math lesson plan generator built from your own textbook",
    answer:
      "CourseSmith is an AI math lesson plan generator that reads the math textbook you upload and builds lesson plans, tests and assignments from its chapters and topics. Tests mix multiple choice, short answer, long answer and fill-in-the-blank questions at an Easy, Medium and Hard ratio you set, with equations rendered properly and an answer key.",
    definition:
      "An AI math lesson plan generator is a tool that drafts math lessons, practice sets and assessments from source material so a teacher can review, adjust and teach them.",
    takeaways: [
      "CourseSmith builds math lesson plans from the chapters and topics of the textbook you upload, so examples and vocabulary match the book students use.",
      "A CourseSmith math plan includes learning objectives, an in-depth explanation, a step-by-step plan for each delivery method you choose, homework and a project idea.",
      "CourseSmith math tests let you set the share of Easy, Medium and Hard questions, and equations render properly in both the questions and the answer key.",
      "Tests and assignments download as editable Word files, so a teacher can change numbers or wording before making copies.",
      "Teachers should solve every answer key problem by hand before class, because AI output can contain arithmetic or reasoning errors.",
    ],
    sections: [
      {
        heading: "What does a strong math lesson look like?",
        paragraphs: [
          'A strong math lesson starts from what students already know, models one new idea with worked examples, and leaves real time for students to practice and explain their thinking. The Common Core Standards for Mathematical Practice name habits such as "Make sense of problems and persevere in solving them" and "Attend to precision" that many teachers build into every class.',
          "CourseSmith gives you the core of that lesson rather than a fixed script. You set the lecture length in minutes and pick one or more delivery methods, and the plan returns learning objectives, an in-depth explanation of the topic, a step-by-step delivery plan for each method, homework and a project idea. If you like to open with a warm-up problem from the previous topic, add it yourself.",
        ],
      },
      {
        heading: "Which CourseSmith outputs fit a math class?",
        paragraphs: [
          "Almost every CourseSmith output maps onto a routine math teachers already run. The table shows where each one fits.",
        ],
        table: {
          caption: "CourseSmith outputs and how a math teacher uses them",
          columns: ["Output", "What it gives a math teacher", "Where it fits"],
          rows: [
            [
              "Learning objectives",
              "What students should be able to do by the end of the lesson",
              "Posted goal and exit check",
            ],
            [
              "Direct instruction plan",
              "A step-by-step sequence for modeling the procedure",
              "Mini-lesson",
            ],
            [
              "Interactive activity or game plan",
              "Steps for partner problems or a practice game",
              "Guided practice",
            ],
            [
              "Real-world use cases plan",
              "Steps for applying the skill to prices, maps or data",
              "Application and word problems",
            ],
            [
              "Test with answer key",
              "Four question types, point values and a difficulty mix",
              "Quizzes and unit tests",
            ],
            [
              "Assignment",
              "Practice questions with answers, downloadable as Word",
              "Homework and review",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 7 chapter on ratios?",
        paragraphs: [
          "Here is an example of how a teacher might work through a grade 7 chapter on ratios and proportional relationships. The steps describe the workflow, not a specific classroom.",
        ],
        steps: [
          {
            name: "Upload the textbook",
            text: "Upload the course textbook as a PDF or DOCX file up to 40 MB and enter the book name, subject and grade. CourseSmith generates the chapters and topics, which you can rename, add to or delete.",
          },
          {
            name: "Plan the unit rates lesson",
            text: "Pick the ratios chapter and the unit rates topic, choose Direct instruction and Real-world use cases, and set a 50-minute lecture.",
          },
          {
            name: "Ask the Co-Pilot",
            text: "Ask the CourseSmith Co-Pilot for a second way to explain unit rates with a double number line, for students who miss it the first time.",
          },
          {
            name: "Build the test",
            text: "Request six multiple choice questions, two fill-in-the-blank items and three long-answer problems worth more points, with a 40, 40, 20 Easy, Medium and Hard mix.",
          },
          {
            name: "Check and download",
            text: "Turn on Show answer, solve every problem yourself, then download the test as an editable Word file.",
          },
        ],
      },
      {
        heading: "How does the difficulty mix work in a math test?",
        paragraphs: [
          "The difficulty mix lets you set what percentage of questions are Easy, Medium and Hard, and the three numbers must add up to 100. A quick check after one topic might lean Easy, while a unit test might put more weight on Medium and Hard problems.",
          "Equations render properly in CourseSmith tests, so fractions, exponents and expressions read the way they look in the textbook. That matters when a misplaced exponent changes the whole problem.",
        ],
      },
      {
        heading: "Can CourseSmith make math worksheets from a textbook?",
        paragraphs: [
          "CourseSmith does not have a separate worksheet tool, but its assignment generator turns textbook chapters into practice sets that fill the same role. You choose the question types, how many of each and their point values, and the assignment comes with answers.",
          "Assignments download as editable Word files. You can delete a problem, change a number or add your own before making copies, and every lesson plan also includes homework you can assign.",
        ],
      },
      {
        heading: "Why use multi-step long-answer questions in math tests?",
        paragraphs: [
          "Multi-step long-answer questions show how a student reasons, not just whether the final number is right. A student who sets up a proportion correctly but makes a sign error has a different gap than one who never sets it up at all.",
          "In CourseSmith you set the points for each question type, so long-answer problems can carry more weight than multiple choice. Decide your partial-credit steps before you start scoring, using the answer key as the expected final result.",
        ],
      },
      {
        heading: "What should a math teacher verify before class?",
        paragraphs: [
          "Treat every CourseSmith output as a first draft that you check line by line. The Terms are clear that AI output can be inaccurate, so the review step is yours.",
        ],
        bullets: [
          "Solve every answer key problem by hand and confirm the final values.",
          "Check that numbers in word problems produce clean answers where you want them.",
          "Confirm the method matches the one your textbook teaches.",
          "Make sure problems stay within the topics taught so far in the unit.",
          "Read word problems aloud to catch confusing wording or unrealistic contexts.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith work for algebra, geometry and other high school math courses?",
        a: "Yes. CourseSmith works from whatever math textbook you upload, so it can plan lessons for pre-algebra, algebra, geometry, statistics or precalculus. Lesson plans and tests follow the chapters and topics in your book. For higher-level courses, check notation and multi-step solutions with extra care before class.",
      },
      {
        q: "Can CourseSmith align math lessons to Common Core standard codes?",
        a: "CourseSmith does not tag lessons with standard codes. It builds from the textbook you upload, so if your district adopted a Common Core-based book, plans follow that content. You can paste a standard into the Co-Pilot and ask it to work toward that goal, then confirm the code against the official document.",
      },
      {
        q: "Can I get easier and harder versions of the same math problem?",
        a: "Yes. Ask the CourseSmith Co-Pilot to adapt a problem for a different grade level or to add an extra step for a challenge version. For tests, you can also shift the Easy, Medium and Hard percentages so the overall paper matches the group taking it.",
      },
      {
        q: "How much does it cost to try CourseSmith for math?",
        a: "CourseSmith is free to start. New accounts get free starter credits with no credit card required, and AI credits are used as you generate. Schools and math departments that want volume pricing can contact SuperMIA at hello@supermia.ai.",
      },
    ],
    sources: [
      {
        label: "Common Core State Standards: Standards for Mathematical Practice",
        url: "https://www.thecorestandards.org/Math/Practice/",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/standards/common-core",
      "/use-cases/middle-school",
      "/features/ai-assignment-generator",
    ],
    primaryKeyword: "ai math lesson plan generator",
    secondaryKeywords: ["math quiz generator", "math worksheets from textbook"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- SCIENCE
  {
    slug: "science",
    group: "use-cases",
    navLabel: "Science",
    navBlurb: "Science lessons, lab activity ideas and tests from your textbook",
    metaTitle: "AI Science Lesson Plan Generator | CourseSmith",
    metaDescription:
      "Build science lesson plans, lab activity ideas and tests with answer keys from the textbook you already teach. Start free with starter credits today.",
    eyebrow: "Use case: Science",
    h1: "AI science lesson plan generator for the textbook you teach",
    answer:
      "CourseSmith is an AI science lesson plan generator that reads your science textbook and turns its chapters and topics into lesson plans, tests and assignments. Teachers can choose an interactive activity or real-world delivery method and ask the Co-Pilot for lab activity ideas, then review every procedure for accuracy and safety before class.",
    definition:
      "An AI science lesson plan generator is a tool that drafts science lessons, investigations and assessments from source material for a teacher to review and adapt.",
    takeaways: [
      "CourseSmith builds science lesson plans from the chapters and topics of your uploaded textbook, so the content matches the book your students use.",
      "Strong science lessons pair a phenomenon or question with an investigation, and the Interactive activity and Real-world use cases delivery methods fit that pattern.",
      "The CourseSmith Co-Pilot can brainstorm lab activity ideas, but the teacher must check every procedure against school safety rules.",
      "CourseSmith science tests mix multiple choice, short answer, long answer and fill-in-the-blank questions, and they download as editable Word files.",
    ],
    sections: [
      {
        heading: "What does a strong science lesson look like?",
        paragraphs: [
          "A strong science lesson opens with a question or observable event, gives students a way to investigate it, and ends with them explaining what they found using evidence. Reading about science matters, but students learn the ideas best when they also do something with them.",
          "Many states use the Next Generation Science Standards (NGSS) as a framework, which describes learning in three dimensions: practices, crosscutting concepts and disciplinary core ideas. Our NGSS page explains how teachers can use CourseSmith alongside that framework. CourseSmith does not tag lessons with NGSS performance expectations; you confirm those against the official standards.",
        ],
      },
      {
        heading: "Which CourseSmith outputs fit a science class?",
        paragraphs: [
          "A CourseSmith lesson plan includes learning objectives, an in-depth explanation, a step-by-step plan for each delivery method you pick, homework and a project idea. The table shows how each part serves a science class.",
        ],
        table: {
          caption: "How CourseSmith lesson plan parts map to a science class",
          columns: ["Plan part", "Science use", "What to add yourself"],
          rows: [
            [
              "Learning objectives",
              "What students should explain or model by the end",
              "A driving question for the board",
            ],
            [
              "In-depth explanation",
              "Background on the core idea for your own preparation",
              "Diagrams from your textbook",
            ],
            [
              "Interactive activity or game plan",
              "Steps for a demonstration or simple investigation",
              "Materials checked against your supply closet",
            ],
            [
              "Real-world use cases plan",
              "Steps for linking the idea to everyday phenomena",
              "Local examples students recognize",
            ],
            [
              "Project idea",
              "A longer investigation or model-building task",
              "Timeline and safety sign-off",
            ],
          ],
        },
      },
      {
        heading: "How can CourseSmith help with lab activity ideas?",
        paragraphs: [
          "The CourseSmith Co-Pilot can brainstorm classroom activities on demand, including lab and demonstration ideas for the chapter you are teaching. Ask for options that use common materials, fit one class period, or work as a teacher demonstration when equipment is limited.",
          "Choosing the Interactive activity or game delivery method also gives you a step-by-step activity plan inside the lesson. Treat both as a starting list, not a tested lab protocol, and run every idea through your school's safety procedures before students touch anything.",
        ],
      },
      {
        heading: "How would CourseSmith handle a grade 8 chapter on chemical reactions?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 8 chapter on chemical reactions. It describes the workflow, not a specific school.",
        ],
        steps: [
          {
            name: "Upload and outline",
            text: "Upload the physical science textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Plan the first lesson",
            text: "Pick the topic on signs of a chemical reaction, choose Interactive activity and Real-world use cases, and set the lecture length to match your period.",
          },
          {
            name: "Ask for a safer option",
            text: "Ask the Co-Pilot for a low-risk investigation students can do in pairs to observe gas production, using materials you already have.",
          },
          {
            name: "Build a test",
            text: "Request multiple choice on evidence of reactions, fill-in-the-blank vocabulary items, and one long-answer question on conservation of mass.",
          },
          {
            name: "Review and download",
            text: "Check the science, the materials and the safety steps, then download the test as an editable Word file.",
          },
        ],
      },
      {
        heading: "What makes a good science quiz?",
        paragraphs: [
          "A good science quiz asks students to apply an idea, not just repeat a definition. Long-answer questions that ask students to explain a result using evidence show far more than a list of vocabulary items.",
          "CourseSmith lets you choose chapters or the full book, set the number of questions and points for each type, and pick an Easy, Medium and Hard mix. Use fill-in-the-blank items for key terms and save long answers for reasoning, then use the Show answer toggle to check the key.",
        ],
      },
      {
        heading: "What should a science teacher verify before class?",
        paragraphs: [
          "Science output needs two checks: is it correct, and is it safe. AI output can be inaccurate, and the CourseSmith Terms make the teacher responsible for reviewing it.",
        ],
        bullets: [
          "Confirm every scientific claim and definition against your textbook.",
          "Check materials, quantities and steps for any hands-on activity.",
          "Run lab ideas through your school or district safety rules and required protective equipment.",
          "Make sure test answers are unambiguous and match the unit's vocabulary.",
          "Verify any standard you cite against the official document.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith work for biology, chemistry, physics and earth science?",
        a: "Yes. CourseSmith works from the science textbook you upload, so it can plan for life science, earth and space science, physical science, biology, chemistry or physics. The quality of the output follows the quality of the source chapter, so a clear, complete textbook file gives the best results.",
      },
      {
        q: "Are CourseSmith lessons aligned to NGSS?",
        a: "CourseSmith does not auto-align or tag lessons to NGSS performance expectations. Plans follow the textbook you upload. If you paste a performance expectation into the Co-Pilot, it can work toward it, and you confirm the match against the official NGSS document before listing it in your plan.",
      },
      {
        q: "Can CourseSmith write a full lab procedure with safety steps?",
        a: "The Co-Pilot can draft activity ideas and procedures, but it cannot inspect your room, equipment or chemicals. Use its draft as a starting point, then check every step, quantity and safety note against your school's lab safety rules before any student carries it out.",
      },
      {
        q: "Can I use CourseSmith to reteach a concept students missed?",
        a: "Yes. Ask the Co-Pilot to explain the concept a different way, offer an analogy, or adapt the material for a lower grade level. You can then generate a short follow-up test on the same topic, weighted toward Easy questions, to check whether the reteach worked.",
      },
    ],
    sources: [
      {
        label: "Next Generation Science Standards: Three Dimensions",
        url: "https://www.nextgenscience.org/three-dimensions",
      },
    ],
    related: [
      "/standards/ngss",
      "/features/ai-teaching-assistant",
      "/features/textbook-to-lesson-plan",
      "/use-cases/high-school",
    ],
    primaryKeyword: "ai science lesson plan generator",
    secondaryKeywords: ["science quiz generator", "lab activity ideas"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- ELA
  {
    slug: "english-language-arts",
    group: "use-cases",
    navLabel: "English Language Arts",
    navBlurb: "ELA lessons and text-dependent reading quizzes from your anthology",
    metaTitle: "AI ELA Lesson Plan Generator | CourseSmith",
    metaDescription:
      "Create ELA lesson plans and reading comprehension quizzes with text-dependent questions from your anthology or textbook. Start free, no credit card.",
    eyebrow: "Use case: English language arts",
    h1: "AI ELA lesson plan generator for reading and writing classes",
    answer:
      "CourseSmith is an AI ELA lesson plan generator that reads the anthology or English textbook you upload and builds lesson plans, reading comprehension tests and writing assignments from its chapters. Tests can mix multiple choice, short answer, long answer and fill-in-the-blank questions that send students back to the text, with an answer key for the teacher.",
    definition:
      "An AI ELA lesson plan generator is a tool that drafts English language arts lessons, reading questions and writing tasks from a text for a teacher to review.",
    takeaways: [
      "CourseSmith builds ELA lesson plans from the anthology or textbook you upload, so questions refer to the texts your students actually read.",
      "Text-dependent questions, which students can answer only by reading closely, are the core of a strong reading comprehension quiz.",
      "CourseSmith long-answer questions work well as short constructed responses or writing prompts that require evidence from the text.",
      "ELA teachers should check that every quote and detail in a generated question matches the original text exactly.",
    ],
    sections: [
      {
        heading: "What does a strong ELA lesson look like?",
        paragraphs: [
          'A strong ELA lesson centers on a text, asks students to read it closely, and has them talk or write about it using evidence. The Common Core College and Career Readiness anchor standard for reading begins: "Read closely to determine what the text says explicitly and to make logical inferences from it."',
          "That means the best questions cannot be answered from general knowledge or a summary. A CourseSmith lesson plan gives you learning objectives, an in-depth explanation of the selection, a step-by-step delivery plan for each method you choose, homework and a project idea, and you can steer each part toward close reading, discussion and writing.",
        ],
      },
      {
        heading: "What are text-dependent questions, and can CourseSmith write them?",
        paragraphs: [
          "Text-dependent questions are questions students can answer only by returning to the passage, such as asking which detail shows a character's change of heart. CourseSmith builds tests from the chapters of your uploaded book, so you can generate questions tied to the selections in it rather than generic prompts.",
          "Ask for a mix: multiple choice on word meaning in context, short answers on key details, and one long-answer question that requires students to cite evidence. Then read each question against the text and cut any that a student could answer without reading.",
        ],
      },
      {
        heading: "Which question types fit a reading comprehension quiz?",
        paragraphs: [
          "Each CourseSmith question type covers a different reading skill. The table shows a practical split.",
        ],
        table: {
          caption: "CourseSmith question types for an ELA reading quiz",
          columns: ["Question type", "ELA skill it checks", "Example prompt"],
          rows: [
            [
              "Multiple choice",
              "Vocabulary in context, key details, sequence",
              'What does the word "bitter" suggest about the narrator in paragraph 4?',
            ],
            [
              "Fill in the blanks",
              "Literary terms and key vocabulary",
              "The turning point of a story is called the ____.",
            ],
            [
              "Short answer",
              "Inference with one piece of evidence",
              "Why does the character refuse the offer? Use one detail from the story.",
            ],
            [
              "Long answer",
              "Theme, author's choices, argument with evidence",
              "How does the setting shape the conflict? Cite two passages.",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 9 short story unit?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 9 anthology unit built around a short story. It describes a workflow, not a specific classroom.",
        ],
        steps: [
          {
            name: "Upload the anthology",
            text: "Upload the literature textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates its chapters and topics.",
          },
          {
            name: "Plan the first reading day",
            text: "Pick the story as your topic and choose Direct instruction plus Interactive activity, such as a structured partner discussion.",
          },
          {
            name: "Write the test",
            text: "Request four multiple choice items on vocabulary and details, three short answers on inference, and one long answer on characterization worth more points.",
          },
          {
            name: "Add a writing assignment",
            text: "Generate an assignment with a long-answer argument prompt asking students to take a position on a character's choice using evidence.",
          },
          {
            name: "Check and download",
            text: "Compare every quote against the anthology, then download the test and assignment as editable Word files.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help with English lesson plans beyond reading?",
        paragraphs: [
          "Yes, CourseSmith can plan grammar, vocabulary and writing lessons from the chapters and topics in your English textbook. If your book has a unit on argument writing or comma rules, pick those topics and generate a plan for each lesson.",
          "Academic Schedules can then lay out the whole unit week by week, with each week's main topic, key objectives and chapter references. A writing unit can follow the reading skills taught earlier instead of starting from zero.",
        ],
      },
      {
        heading: "What should an ELA teacher verify before class?",
        paragraphs: [
          "AI can paraphrase when it should quote, and a misquoted line can derail a discussion. Review every output before students see it.",
        ],
        bullets: [
          "Check that each quote, line number or paragraph reference matches the text.",
          "Confirm that answer key interpretations are defensible from the text alone.",
          "Make sure questions do not give away the answer to a later question.",
          "Remove questions a student could answer without reading the passage.",
          "Check reading level and wording for your students.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can CourseSmith make a reading quiz for a novel we read as a class?",
        a: "CourseSmith works from the PDF or DOCX file you upload, up to 40 MB. If you have a digital copy of the text that you are permitted to use, it can build questions from it. Many teachers work from their adopted anthology or textbook, which already contains the selections and supporting material.",
      },
      {
        q: "Does CourseSmith grade student essays?",
        a: "No. CourseSmith creates lesson plans, tests, assignments and answer keys, but it does not grade student work. The expected answers for long-answer questions can help you decide what a complete response should include before you start reading student writing.",
      },
      {
        q: "Can CourseSmith adapt a text-based lesson for younger readers?",
        a: "Yes. Ask the CourseSmith Co-Pilot to adapt the material for a different grade level, such as simplifying question wording or suggesting more scaffolded steps. Review the adapted version to confirm it still requires students to read the actual text closely.",
      },
      {
        q: "Will CourseSmith tag my ELA lessons with Common Core codes?",
        a: "No. CourseSmith does not tag lessons with standard codes. It builds from your uploaded text. You can paste a standard into the Co-Pilot and ask it to shape a lesson toward it, then confirm the code against the official Common Core document yourself.",
      },
    ],
    sources: [
      {
        label:
          "Common Core State Standards: College and Career Readiness Anchor Standards for Reading",
        url: "https://www.thecorestandards.org/ELA-Literacy/CCRA/R/",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/standards/common-core",
      "/use-cases/social-studies",
      "/resources/how-to-make-a-quiz-from-a-pdf",
    ],
    primaryKeyword: "ai ela lesson plan generator",
    secondaryKeywords: ["reading comprehension quiz generator", "english lesson plans"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- SOCIAL STUDIES
  {
    slug: "social-studies",
    group: "use-cases",
    navLabel: "Social Studies",
    navBlurb: "History and civics lessons and quizzes built from your textbook",
    metaTitle: "AI Social Studies Lesson Plan Generator",
    metaDescription:
      "Turn your history or civics textbook into lesson plans, source-based activities and history quizzes with answer keys. Start free with starter credits.",
    eyebrow: "Use case: Social studies",
    h1: "AI social studies lesson plan generator for history and civics",
    answer:
      "CourseSmith is an AI social studies lesson plan generator that reads your history, geography or civics textbook and builds lesson plans, history quizzes and assignments from its chapters and topics. Plans can center on sources and real-world connections, and every test includes an answer key that the teacher checks for accuracy before class.",
    definition:
      "An AI social studies lesson plan generator is a tool that drafts history, civics and geography lessons and assessments from course material for a teacher to review.",
    takeaways: [
      "CourseSmith builds social studies lesson plans from the chapters and topics of your uploaded textbook, so events, people and terms match your course.",
      "Strong history lessons ask students to analyze sources and explain cause and effect, not only recall dates.",
      "CourseSmith history quizzes can combine multiple choice and fill-in-the-blank recall with long-answer questions that ask students to use evidence.",
      "Teachers should verify every date, name and quotation in a generated history lesson against the textbook or the original source.",
    ],
    sections: [
      {
        heading: "What does a strong social studies lesson look like?",
        paragraphs: [
          "A strong social studies lesson poses a question worth investigating, gives students sources to work with, and asks them to build an answer from evidence. Recall of names and dates supports that work but is not the goal on its own.",
          'The Common Core literacy standards for history and social studies in grades 6 to 8 ask students to "Cite specific textual evidence to support analysis of primary and secondary sources." A CourseSmith lesson plan gives you learning objectives, an in-depth explanation, a step-by-step plan for each delivery method, homework and a project idea, and you can steer each part toward that kind of source work.',
        ],
      },
      {
        heading: "Which CourseSmith outputs fit a history class?",
        paragraphs: [
          "Each CourseSmith output supports a familiar social studies routine. The table lines them up.",
        ],
        table: {
          caption: "CourseSmith outputs for a social studies class",
          columns: ["Output", "History or civics use", "Teacher's job"],
          rows: [
            [
              "In-depth explanation",
              "Background on key events, people and vocabulary",
              "Check dates and names",
            ],
            [
              "Direct instruction plan",
              "Steps for a mini-lecture or guided reading",
              "Pick sources from your textbook",
            ],
            [
              "Interactive activity or game plan",
              "Steps for source analysis, a timeline task or a structured debate",
              "Set discussion norms",
            ],
            [
              "Real-world use cases plan",
              "Steps for linking the past to current civic life",
              "Choose balanced current examples",
            ],
            [
              "History quiz",
              "Recall items plus evidence-based long answers",
              "Confirm every answer key fact",
            ],
            [
              "Project idea",
              "A research task, mock hearing or museum exhibit",
              "Set the timeline and expectations",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 8 chapter on the American Revolution?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 8 US history chapter on the causes of the American Revolution. It shows the workflow, not a specific classroom.",
        ],
        steps: [
          {
            name: "Upload the textbook",
            text: "Upload the US history textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Plan the lesson",
            text: "Pick the topic on taxation and protest, choose Direct instruction and Interactive activity, and set the lecture length to your class period.",
          },
          {
            name: "Frame the question",
            text: "Ask the Co-Pilot to frame the lesson around a question such as which grievance mattered most to colonists, using the excerpts printed in your textbook.",
          },
          {
            name: "Build the quiz",
            text: "Request multiple choice on key acts and events, fill-in-the-blank items for terms, and two long-answer questions asking students to explain causes with evidence.",
          },
          {
            name: "Verify and download",
            text: "Check every date and quotation against the textbook, then download the quiz as an editable Word file.",
          },
        ],
      },
      {
        heading: "How does a history quiz generator differ from a recall quiz?",
        paragraphs: [
          "A good history quiz checks whether students can explain why something happened, not only when. CourseSmith lets you choose chapters or the full book, set how many questions of each type to include, and give each type its own point value.",
          "Use multiple choice and fill in the blanks for vocabulary and key events, short answer for cause and effect, and long answer for an argument backed by evidence. Weight the Hard share of the difficulty mix toward the long answers you care about most.",
        ],
      },
      {
        heading: "Can CourseSmith keep a year of history units in order?",
        paragraphs: [
          "Yes, CourseSmith Academic Schedules turn a syllabus into a week-by-week plan. You enter a schedule name, the planned weeks, hours per week and lecture duration, and each week gets a main topic, key objectives and chapter references.",
          "Weeks can be edited and marked Planned or Completed, which helps when testing days or school events compress a chronological course.",
        ],
      },
      {
        heading: "What should a social studies teacher verify before class?",
        paragraphs: [
          "AI can blur dates, misattribute quotes or flatten a complex event. Review every output with that in mind.",
        ],
        bullets: [
          "Check dates, names, places and numbers against the textbook.",
          "Confirm any quotation against the original source, not a paraphrase.",
          "Make sure multiple perspectives are represented fairly.",
          "Review sensitive topics for age-appropriate framing and your district's guidance.",
          "Remove any claim you cannot trace back to a reliable source.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith work for world history, geography, economics and government?",
        a: "Yes. CourseSmith works from the social studies textbook you upload, whether it covers US history, world history, geography, economics or government. The lessons follow the chapters, topics and terms in your book, so a civics text produces civics lessons and a world history text produces world history lessons.",
      },
      {
        q: "Can CourseSmith find primary sources for my lesson?",
        a: "The most reliable sources are those printed in your textbook. If the Co-Pilot suggests an outside source or quotation, find and read the original from an archive or library before using it, because AI can misquote or misattribute. Do not assume a suggested quotation comes from your uploaded book.",
      },
      {
        q: "Can I align social studies lessons to my state's standards?",
        a: "CourseSmith does not tag lessons with state standard codes. It builds from your textbook, so a state-adopted book carries that content into your plans. You can paste a specific standard into the Co-Pilot and ask it to work toward it, then confirm the code in the official document.",
      },
      {
        q: "Can CourseSmith help me prepare a structured debate?",
        a: "Yes. Choose the Interactive activity or game delivery method for a step-by-step activity plan, or ask the Co-Pilot to brainstorm debate positions, guiding questions and roles for the chapter. Review the positions for accuracy and balance before using them with students.",
      },
    ],
    sources: [
      {
        label: "Common Core State Standards: Literacy in History/Social Studies, Grades 6-8",
        url: "https://www.thecorestandards.org/ELA-Literacy/RH/6-8/",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/features/quiz-generator",
      "/use-cases/english-language-arts",
      "/standards/common-core",
    ],
    primaryKeyword: "ai social studies lesson plan generator",
    secondaryKeywords: ["history lesson plan generator", "history quiz generator"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- ELEMENTARY
  {
    slug: "elementary-school",
    group: "use-cases",
    navLabel: "Elementary School",
    navBlurb: "K-5 lesson plans and quizzes across every subject you teach",
    metaTitle: "AI Lesson Plans for Elementary Teachers",
    metaDescription:
      "Plan K-5 lessons in every subject from the textbooks you teach, with short quizzes and answer keys you can edit in Word. Start free, no credit card.",
    eyebrow: "Use case: Elementary school",
    h1: "AI lesson plans for elementary teachers who teach every subject",
    answer:
      "CourseSmith gives elementary teachers AI lesson plans built from the K-5 textbooks they already use, across reading, math, science and social studies. Teachers set the lesson length to fit young attention spans, and the quiz maker writes short tests with answer keys that download as editable Word files for adjusting before printing.",
    definition:
      "An AI lesson planner for elementary teachers is a tool that drafts K-5 lessons and checks for understanding from classroom materials for a teacher to review.",
    takeaways: [
      "CourseSmith works across subjects, so a self-contained elementary teacher can plan reading, math, science and social studies from each subject's textbook.",
      "Strong elementary lessons use short chunks, hands-on activities and frequent checks for understanding.",
      "CourseSmith lets you set the lecture duration in minutes, so a plan can fit a 20-minute mini-lesson as easily as a longer block.",
      "The CourseSmith Co-Pilot can adapt material for a different grade level, which helps when students in one class read at very different levels.",
      "Elementary teachers should review vocabulary, sentence length and directions in every quiz so young students can follow them.",
    ],
    sections: [
      {
        heading: "What does a strong elementary lesson look like?",
        paragraphs: [
          "A strong elementary lesson moves in short chunks, mixes listening with doing, and checks understanding often. Young students learn best when a new idea is modeled, practiced together, and then tried independently.",
          "CourseSmith lets you set the lecture length in minutes and choose delivery methods such as Interactive activity or game. The plan returns learning objectives, an in-depth explanation, a step-by-step plan for each method, homework and a project idea, which you can split across the day with movement breaks in between.",
        ],
      },
      {
        heading: "How do K-5 lesson needs change by grade band?",
        paragraphs: [
          "What you ask CourseSmith for changes a lot between kindergarten and grade 5. The table gives a practical starting point by grade band.",
        ],
        table: {
          caption: "Using CourseSmith across K-5 grade bands",
          columns: ["Grade band", "What to ask for", "What to adjust"],
          rows: [
            [
              "K-1",
              "Short lessons, Interactive activity or game, a few multiple choice items",
              "Read every question aloud; trim text heavily",
            ],
            [
              "2-3",
              "Guided practice, simple multiple choice and fill in the blanks",
              "Check sentence length and sight words",
            ],
            [
              "4-5",
              "Mixed quizzes with short and long answers, small projects",
              "Confirm multi-step directions are clear",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 3 chapter on plant life cycles?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 3 science chapter on plant life cycles. It shows the workflow, not a specific school.",
        ],
        steps: [
          {
            name: "Upload the science book",
            text: "Upload the grade 3 science textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Plan the lesson",
            text: "Pick the topic on seeds and germination, choose Interactive activity and Real-world use cases, and set a 30-minute lecture.",
          },
          {
            name: "Make it hands-on",
            text: "Ask the Co-Pilot for a simple activity, such as observing bean seeds in a clear cup over several days, and add a drawing journal.",
          },
          {
            name: "Write a short quiz",
            text: "Request four multiple choice questions on life cycle stages and one fill-in-the-blank item, mostly Easy.",
          },
          {
            name: "Simplify and print",
            text: "Download the quiz as a Word file, shorten any long sentences, and print it.",
          },
        ],
      },
      {
        heading: "Can one tool cover every subject in a self-contained classroom?",
        paragraphs: [
          "Yes, CourseSmith works for any subject, so you can upload a reading textbook, a math book and a science book and plan each one. Every upload becomes its own set of chapters and topics.",
          "Academic Schedules can lay out each subject week by week from the planned weeks and hours you enter. That is useful when you want reading and science units to share a theme in the same weeks.",
        ],
      },
      {
        heading: "How can elementary teachers use CourseSmith for reading lessons?",
        paragraphs: [
          "Upload the reading textbook or anthology your grade uses, and CourseSmith can plan lessons around each selection. Ask for a direct instruction plan for a read-aloud, an interactive partner-reading activity, and a few questions that send students back to the story.",
          "For early readers, ask the Co-Pilot to turn written questions into oral prompts you can use at the carpet. For grades 4 and 5, add one short written response that asks students to point to a detail in the text.",
        ],
      },
      {
        heading: "How does the elementary quiz maker work?",
        paragraphs: [
          "You choose how many questions of each type to include, from multiple choice and fill in the blanks to short and long answers, and set the points for each. For younger grades, keep quizzes short and set most of the difficulty mix to Easy.",
          "Turn on Show answer to see the answer key. The quiz downloads as an editable Word file, so you can enlarge the font or add picture choices before printing.",
        ],
      },
      {
        heading: "What should an elementary teacher verify before class?",
        paragraphs: [
          "Young students are less able to work around confusing wording, so review matters even more. AI output can be inaccurate, and the teacher has the final say.",
        ],
        bullets: [
          "Check vocabulary and sentence length against your students' reading level.",
          "Confirm every fact and answer against the textbook.",
          "Break multi-step directions into single steps.",
          "Check that materials for activities are safe and easy to find.",
          "Make sure examples and names are familiar and inclusive.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can CourseSmith make lessons for kindergarten?",
        a: "CourseSmith can draft lessons from a kindergarten textbook, and grade is entered as free text, so any level works. Expect to adapt more at that age: shorten the lecture duration, turn written questions into oral checks, and add movement and manipulatives. The Co-Pilot can help you rewrite activities for very young learners.",
      },
      {
        q: "Can CourseSmith help me plan for students reading at different levels?",
        a: "The CourseSmith Co-Pilot can adapt material for a different grade level. You can ask it to rewrite a question set in simpler language, then review the result. CourseSmith does not sort or track students, so you decide which version each group uses.",
      },
      {
        q: "Do I need a separate account for each subject?",
        a: "No. One CourseSmith account can hold several uploaded textbooks, each with its own chapters, topics, lesson plans and tests. AI credits are used as you generate, and new accounts get free starter credits with no credit card required.",
      },
      {
        q: "Can I send homework home as a printable sheet?",
        a: "Yes, through the assignment generator. Assignments download as editable Word files with answers, so you can print a practice sheet for families and keep the answers for yourself. Lesson plans also list homework ideas you can turn into an assignment.",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/use-cases/math",
      "/features/ai-teaching-assistant",
      "/resources/lesson-plan-template",
    ],
    primaryKeyword: "ai lesson plans for elementary teachers",
    secondaryKeywords: ["k-5 lesson plan generator", "elementary quiz maker"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- MIDDLE SCHOOL
  {
    slug: "middle-school",
    group: "use-cases",
    navLabel: "Middle School",
    navBlurb: "Grades 6-8 lesson plans and quizzes for every class period you teach",
    metaTitle: "AI Lesson Plans for Middle School | CourseSmith",
    metaDescription:
      "Plan grades 6-8 lessons from your course textbook, with quizzes and answer keys for every class period you teach. Start free with starter credits.",
    eyebrow: "Use case: Middle school",
    h1: "AI lesson plans for middle school teachers in grades 6-8",
    answer:
      "CourseSmith creates AI lesson plans for middle school teachers by reading the grades 6-8 textbook they teach and building lesson plans, tests and assignments from its chapters and topics. Teachers with several periods of the same course can generate a second test version for later classes and track each week of the term in an academic schedule.",
    definition:
      "An AI lesson planner for middle school is a tool that drafts grades 6-8 lessons, quizzes and homework from course material for a teacher to review.",
    takeaways: [
      "CourseSmith builds grades 6-8 lesson plans from the textbook you upload, so lessons match the course your students follow.",
      "Strong middle school lessons combine clear routines with active tasks, because students at this age need both structure and movement.",
      "A middle school quiz generator helps teachers with several periods of one course by producing more than one version of a test.",
      "CourseSmith teaching analytics show a teacher's own mix of delivery methods and question types, not data about students.",
      "Middle school teachers should check that academic vocabulary is taught before it shows up in a quiz.",
    ],
    sections: [
      {
        heading: "What does a strong middle school lesson look like?",
        paragraphs: [
          "A strong middle school lesson runs on a predictable routine, keeps instruction brief, and gets students talking and working early. Students in grades 6 to 8 are learning to manage several teachers, note-taking and longer assignments at once, so a consistent lesson shape helps.",
          "Every CourseSmith plan has the same parts: learning objectives, an in-depth explanation, a step-by-step plan for each delivery method you pick, homework and a project idea. That consistency makes it easier to build routines students recognize from one day to the next.",
        ],
      },
      {
        heading: "How does CourseSmith help when you teach several periods?",
        paragraphs: [
          "Many middle school teachers teach the same course to several periods a day. CourseSmith lets you plan once from the textbook and then adjust for each group.",
        ],
        table: {
          caption: "Using CourseSmith across several periods of one course",
          columns: ["Need", "What to do in CourseSmith", "Why it helps"],
          rows: [
            [
              "A second test version for a later period",
              "Generate another test from the same chapters",
              "Students cannot pass answers between periods",
            ],
            [
              "A group that needs more support",
              "Ask the Co-Pilot to adapt the material for a lower grade level",
              "Same content, simpler entry point",
            ],
            [
              "A group that finishes early",
              "Use the plan's project idea or raise the Hard share in a practice assignment",
              "Keeps fast finishers working",
            ],
            [
              "A missed day",
              "Edit the week in your academic schedule",
              "The rest of the term stays visible",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 7 chapter on cells?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 7 life science chapter on cell structure. It describes a workflow, not a specific school.",
        ],
        steps: [
          {
            name: "Upload the course book",
            text: "Upload the life science textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Plan the opening lesson",
            text: "Pick the topic on plant and animal cells, choose Direct instruction and Interactive activity or game, and set the lecture to your period length.",
          },
          {
            name: "Add an analogy",
            text: "Ask the Co-Pilot for an analogy activity in which students compare cell parts to parts of a school.",
          },
          {
            name: "Write two test versions",
            text: "Generate a ten-question test for first period and a second one for later periods, each with multiple choice, fill in the blanks and one long answer.",
          },
          {
            name: "Check and download",
            text: "Confirm the science and vocabulary with Show answer on, then download both tests as editable Word files.",
          },
        ],
      },
      {
        heading: "What should a middle school quiz include?",
        paragraphs: [
          "A middle school quiz should check both content and the ability to explain it in writing. CourseSmith lets you set the number of questions and points for each type and choose an Easy, Medium and Hard mix.",
          "A short quiz with mostly multiple choice, a few fill-in-the-blank terms and one long-answer question works well as a topic check. Comparing two versions side by side helps you keep them similar in difficulty.",
        ],
      },
      {
        heading: "How can teaching analytics help a middle school teacher?",
        paragraphs: [
          "CourseSmith teaching analytics show your own activity: courses, lessons planned and taught, assignments and tests. They also analyze your mix of delivery methods and question types and offer AI insights.",
          "If every plan this month used Direct instruction and every test was multiple choice, the dashboard makes that visible. The analytics describe your planning, not student performance.",
        ],
      },
      {
        heading: "What should a middle school teacher verify before class?",
        paragraphs: [
          "AI output can be inaccurate, so every plan and quiz needs your review. Middle school adds a few specific checks.",
        ],
        bullets: [
          "Make sure academic vocabulary is taught before it appears in a quiz.",
          "Check that long-answer questions include clear directions on what to write.",
          "Confirm facts and answers against the textbook.",
          "Review examples for age-appropriate content.",
          "Compare test versions so they are similar in difficulty.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can CourseSmith plan lessons for an advanced or accelerated grade 6-8 class?",
        a: "Yes. CourseSmith builds from whatever textbook you upload, so an accelerated class using a higher-level book gets plans from that book. You can also raise the Hard share of a test's difficulty mix or ask the Co-Pilot for extension problems on any topic.",
      },
      {
        q: "Can I keep my middle school units in the right order across the year?",
        a: "Yes. Academic Schedules take the syllabus, planned weeks, hours per week and lecture duration and build a week-by-week plan with each week's main topic, key objectives and chapter references. You can edit weeks and mark them Planned or Completed as the year goes on.",
      },
      {
        q: "Does CourseSmith align middle school lessons to state standards?",
        a: "CourseSmith does not tag lessons with standard codes or auto-align them. It follows the textbook you upload, so a state-adopted book carries that content into your plans. Paste a specific standard into the Co-Pilot if you want a lesson shaped toward it, then confirm the code yourself.",
      },
      {
        q: "Can students use CourseSmith directly?",
        a: "CourseSmith is built for teachers, tutors and homeschool educators. Teachers generate lesson plans, tests and assignments, review them, and then download tests and assignments as Word files to hand out. Students work only from the materials you choose to share.",
      },
    ],
    related: [
      "/use-cases/math",
      "/use-cases/science",
      "/features/ai-assignment-generator",
      "/standards/common-core",
    ],
    primaryKeyword: "ai lesson plans for middle school",
    secondaryKeywords: ["grades 6-8 lesson plans", "middle school quiz generator"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- HIGH SCHOOL
  {
    slug: "high-school",
    group: "use-cases",
    navLabel: "High School",
    navBlurb: "High school lessons, unit tests and exam review from your textbook",
    metaTitle: "AI Lesson Plans for High School | CourseSmith",
    metaDescription:
      "Plan high school lessons, unit tests and exam review from your course textbook, with a difficulty mix and answer key. Start free, no credit card needed.",
    eyebrow: "Use case: High school",
    h1: "AI lesson plans for high school courses and exam review",
    answer:
      "CourseSmith gives high school teachers AI lesson plans built from the course textbook they upload, plus unit tests and review assignments drawn from chosen chapters or the full book. The high school quiz generator mixes four question types with point values and an Easy, Medium and Hard ratio, and downloads as an editable Word file.",
    definition:
      "An AI lesson planner for high school is a tool that drafts grades 9-12 lessons, assessments and review materials from course content for a teacher to review.",
    takeaways: [
      "CourseSmith builds high school lesson plans from the textbook you upload, which suits content-heavy courses like chemistry, US history and algebra 2.",
      "Teachers with several different course preps can upload each textbook and plan every course in one account.",
      "A CourseSmith test can cover specific chapters or the full book, which makes it useful for unit tests and cumulative exam review.",
      "For AP or other external exams, teachers should check question format and content against the exam provider's official course materials.",
    ],
    sections: [
      {
        heading: "What does a strong high school lesson look like?",
        paragraphs: [
          "A strong high school lesson has a clear objective, moves quickly through new content, and asks students to apply it at a demanding level. Older students can handle longer independent work, but they still need modeling and a check for understanding before they leave.",
          "In CourseSmith you set the lecture duration to match your bell schedule, whether that is 50 minutes or a 90-minute block. The plan returns learning objectives, an in-depth explanation, a step-by-step plan for each delivery method, homework and a project idea.",
        ],
      },
      {
        heading: "Which CourseSmith outputs fit high school tasks?",
        paragraphs: [
          "High school teachers juggle daily lessons, unit tests and exam review. The table shows which output fits each task.",
        ],
        table: {
          caption: "High school tasks and the matching CourseSmith output",
          columns: ["Task", "CourseSmith output", "Notes"],
          rows: [
            [
              "Daily lesson",
              "Lesson plan for one or more topics",
              "Set the lecture length to your schedule",
            ],
            [
              "Topic check",
              "Short test from one chapter",
              "Mostly multiple choice, one long answer",
            ],
            [
              "Unit test",
              "Test from the unit's chapters",
              "You set counts, points and the difficulty mix",
            ],
            [
              "Exam review",
              "Test or assignment from the full book",
              "Lean Medium and Hard for final review",
            ],
            [
              "Long-term project",
              "Project idea from the lesson plan",
              "Add your own milestones and expectations",
            ],
            [
              "Term pacing",
              "Academic schedule",
              "Week-by-week topics, objectives and chapter references",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 11 chemistry chapter on stoichiometry?",
        paragraphs: [
          "Here is an example of how a teacher might plan a grade 11 chemistry chapter on stoichiometry. It shows the workflow, not a specific classroom.",
        ],
        steps: [
          {
            name: "Upload the textbook",
            text: "Upload the chemistry textbook as a PDF or DOCX file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Generate the lessons",
            text: "Create plans for mole ratios, limiting reactants and percent yield, with Direct instruction and Real-world use cases on a 90-minute block.",
          },
          {
            name: "Build the unit test",
            text: "Request multiple choice on concepts and several multi-step long-answer calculations worth more points, with a heavier Medium and Hard mix.",
          },
          {
            name: "Make a review assignment",
            text: "Generate an assignment covering the whole chapter for students to work through before the test.",
          },
          {
            name: "Rework and download",
            text: "Solve every calculation in the answer key yourself, then download the test and assignment as editable Word files.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help with AP and exam review?",
        paragraphs: [
          "CourseSmith can build review tests and assignments from the chapters your course covers, which supports AP, final exam or end-of-course review. It does not claim to match any external exam's format or content.",
          "For AP courses, compare generated questions against the official course description and released materials from the exam provider. Use CourseSmith for content practice across the book, and use official materials for format practice.",
        ],
      },
      {
        heading: "How does CourseSmith handle several course preps?",
        paragraphs: [
          "You can upload a different textbook for each course you teach, and each one gets its own chapters, topics, plans and tests. A teacher with biology and chemistry preps can plan both without mixing materials.",
          "Your teacher persona, which can be filled from your resume, records your subjects, grade range and teaching style. It shapes how every lesson plan and assessment is written across all of your courses.",
        ],
      },
      {
        heading: "What should a high school teacher verify before class?",
        paragraphs: [
          "Higher-level content leaves more room for subtle errors. Review every output before students see it.",
        ],
        bullets: [
          "Rework every multi-step calculation and derivation.",
          "Check terminology against your textbook and course expectations.",
          "Confirm that unit test difficulty matches what you taught.",
          "Compare exam review items with official materials from the exam provider.",
          "Check that long-answer questions state exactly what a full response needs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith aligned to AP course frameworks?",
        a: "No. CourseSmith does not claim alignment to AP or any other external exam. It builds from the textbook you upload. Use it for lessons, practice and review, and check exam-style questions against the official course description and released materials from the exam provider.",
      },
      {
        q: "Can students study from the CourseSmith answer key?",
        a: "Yes, if you choose to share it. The Show answer toggle reveals the answer key for every test, and the Word download lets you prepare a student copy and a key. Review the answers first, since AI output can contain errors.",
      },
      {
        q: "Does CourseSmith work for electives like psychology or computer science?",
        a: "Yes. CourseSmith works for any subject, including electives, as long as you have a textbook or syllabus to upload as a PDF or DOCX file up to 40 MB. The lessons and tests follow that material, so a clear, complete source gives the best results.",
      },
      {
        q: "How is CourseSmith different from using a general chatbot?",
        a: "CourseSmith starts from your uploaded textbook, turns it into chapters and topics, and produces lesson plans and tests in a consistent format with answer keys and Word downloads. A general chatbot starts from a blank prompt each time. Our ChatGPT comparison covers the trade-offs in detail.",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/use-cases/science",
      "/features/curriculum-planner",
      "/compare/chatgpt-for-lesson-planning",
    ],
    primaryKeyword: "ai lesson plans for high school",
    secondaryKeywords: ["high school quiz generator", "AP and exam review"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- HOMESCHOOL
  {
    slug: "homeschool",
    group: "use-cases",
    navLabel: "Homeschool",
    navBlurb: "Daily lessons, a term plan and quizzes from the book you bought",
    metaTitle: "Homeschool Lesson Plan Generator | CourseSmith",
    metaDescription:
      "Turn the homeschool curriculum textbook you bought into daily lessons, a week-by-week schedule and quizzes with answer keys. Start free, no credit card.",
    eyebrow: "Use case: Homeschool",
    h1: "Homeschool lesson plan generator for the curriculum you already own",
    answer:
      "CourseSmith is a homeschool lesson plan generator that reads the curriculum textbook a parent uploads and turns it into lesson plans, a week-by-week academic schedule, quizzes and assignments. Each quiz has an answer key behind a Show answer toggle, which helps a parent teach subjects they have not studied in years and check work with confidence.",
    definition:
      "A homeschool lesson plan generator is a tool that turns curriculum material into daily lessons, schedules and assessments for a parent or tutor to review and teach.",
    takeaways: [
      "CourseSmith builds homeschool lessons from the curriculum textbook a parent already bought, so lessons follow that book's scope and sequence.",
      "CourseSmith Academic Schedules spread a textbook across the planned weeks you choose, with each week's topic, objectives and chapter references.",
      "Quizzes with answer keys help parents teach and check subjects they have not studied recently.",
      "Parents should review every lesson and answer key before teaching, because AI output can contain errors.",
    ],
    sections: [
      {
        heading: "What does a strong homeschool lesson look like?",
        paragraphs: [
          "A strong homeschool lesson is short, focused and responsive to the child in front of you. You can move faster when a child understands and slow down when they do not, which is one of the main advantages of teaching at home.",
          "CourseSmith lets you set the lecture length in minutes, so a plan can be 20 minutes for a young child or longer for a teenager. Each plan includes learning objectives, an in-depth explanation that helps you prepare, a step-by-step plan for each delivery method, homework and a project idea.",
        ],
      },
      {
        heading: "How does CourseSmith work with a purchased homeschool curriculum?",
        paragraphs: [
          "If your curriculum textbook is available as a PDF or DOCX file up to 40 MB, CourseSmith reads it and generates its chapters and topics after you enter the book name, subject and grade. You can rename, add or delete topics to match how you plan to teach it.",
          "Because CourseSmith builds from your book, it does not replace the curriculum you chose. It adds daily plans, quizzes and a schedule around it. Check your publisher's terms for digital copies before uploading.",
        ],
      },
      {
        heading: "Which CourseSmith tools fit a homeschool week?",
        paragraphs: [
          "Most homeschool families need planning, practice and a way to check understanding. The table shows where each CourseSmith tool fits.",
        ],
        table: {
          caption: "CourseSmith tools for a homeschool family",
          columns: ["Homeschool need", "CourseSmith tool", "How a parent uses it"],
          rows: [
            [
              "Spreading a book across the year",
              "Academic schedule",
              "Enter planned weeks and hours per week, then edit weeks as needed",
            ],
            [
              "Knowing what to teach today",
              "Lesson plan for the current topic",
              "Follow the objectives and delivery plan",
            ],
            [
              "Checking understanding",
              "Homeschool quiz maker with answer key",
              "Short quiz at the end of a chapter",
            ],
            [
              "Explaining a hard idea",
              "CourseSmith Co-Pilot",
              "Ask for a simpler explanation or an analogy",
            ],
            [
              "Tracking progress",
              "Plan status and schedule weeks",
              "Mark plans Completed and weeks Completed as you go",
            ],
          ],
        },
      },
      {
        heading: "How would CourseSmith handle a grade 5 math curriculum book?",
        paragraphs: [
          "Here is an example of how a parent might plan with a grade 5 math curriculum book. It describes a workflow, not a specific family.",
        ],
        steps: [
          {
            name: "Set up a persona",
            text: "Set up your teacher persona, which can auto-fill from a resume PDF, then review the subjects, grade range and teaching style so it describes how you teach at home.",
          },
          {
            name: "Upload the book",
            text: "Upload the curriculum file and enter the book name, subject and grade. CourseSmith generates the chapters and topics.",
          },
          {
            name: "Map the term",
            text: "Create an academic schedule with your planned weeks, hours per week and lecture length, and leave room for review before each chapter test.",
          },
          {
            name: "Plan the lesson",
            text: "Generate a plan for adding fractions with unlike denominators, choosing Interactive activity or game and Real-world use cases such as a recipe.",
          },
          {
            name: "Quiz and check",
            text: "Create a six-question quiz, mostly Easy, check it with Show answer, and download it as a Word file.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help when teaching several children at different grades?",
        paragraphs: [
          "Yes, you can upload a separate book for each child's grade and plan each course on its own. The CourseSmith Co-Pilot can also adapt material for a different grade level when siblings study the same topic together.",
          "For example, an older child might get a long-answer question while a younger sibling gets two multiple choice items on the same idea.",
        ],
      },
      {
        heading: "What should a homeschool parent verify?",
        paragraphs: [
          "You are the teacher, so you have the final say on every lesson. AI output can be inaccurate, and the CourseSmith Terms ask users to review and fact-check it.",
        ],
        bullets: [
          "Work through each answer key yourself before checking your child's work.",
          "Compare lessons with the teacher guide that came with your curriculum.",
          "Check any outside facts the Co-Pilot adds against a reliable source.",
          "Make sure activities use safe materials you have at home.",
          "Confirm what records your state expects you to keep.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can CourseSmith replace a homeschool curriculum?",
        a: "CourseSmith works best alongside a curriculum, not instead of one. It builds from the textbook you upload, so the quality and scope of your plans follow that book. If you have not chosen a curriculum yet, pick one first, then use CourseSmith for daily lessons, schedules and quizzes.",
      },
      {
        q: "Is CourseSmith free for homeschool families?",
        a: "CourseSmith is free to start. New accounts get free starter credits with no credit card required, and AI credits are used as you generate. Homeschool co-ops that want to discuss volume options can contact SuperMIA at hello@supermia.ai.",
      },
      {
        q: "Can I use CourseSmith as a homeschool curriculum planner for high school?",
        a: "Yes. Upload the high school textbook for each course and build an academic schedule for each one, with weekly topics, objectives and chapter references. Tests can cover specific chapters or the full book, which helps you check subjects you may not have studied recently.",
      },
      {
        q: "What happens to my uploaded curriculum files?",
        a: "Uploads are stored in private cloud storage, and AI providers process the text under data processing agreements that bar them from using it to train their public models. Deleting a syllabus or lesson plan deletes the associated files. The privacy policy has the full details.",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/features/textbook-to-lesson-plan",
      "/use-cases/elementary-school",
      "/pricing",
    ],
    primaryKeyword: "homeschool lesson plan generator",
    secondaryKeywords: ["homeschool curriculum planner", "homeschool quiz maker"],
    datePublished: DATE,
    dateModified: DATE,
  },

  // ---------------------------------------------------------------- SCHOOLS AND DISTRICTS
  {
    slug: "schools-and-districts",
    group: "use-cases",
    navLabel: "Schools and Districts",
    navBlurb: "Department rollout, shared pacing and volume pricing for schools",
    metaTitle: "AI for Schools and Districts | CourseSmith",
    metaDescription:
      "Roll out AI lesson planning to a department or school, built from your adopted textbooks, with clear privacy terms. Ask about volume pricing today.",
    eyebrow: "Use case: Schools and districts",
    h1: "AI for schools: department rollout built on your adopted textbooks",
    answer:
      "CourseSmith brings AI to schools by helping teachers build lesson plans, tests, assignments and academic schedules from the textbooks a department has already adopted. A department can agree on shared planning conventions, start with a small pilot group, and contact SuperMIA at hello@supermia.ai for volume pricing, while each teacher reviews output before classroom use.",
    definition:
      "AI for schools is the use of artificial intelligence tools by teachers and departments to plan, create and organize instructional material under school oversight.",
    takeaways: [
      "CourseSmith builds from the textbooks a school has already adopted, so planning stays tied to approved course content.",
      "A department that agrees on shared conventions, such as test length, point values and difficulty mix, gets more consistent materials across classrooms.",
      "CourseSmith stores uploads in private cloud storage, and its AI providers process text under agreements that bar training their public models on it.",
      "Schools and departments can contact SuperMIA at hello@supermia.ai for volume pricing.",
      "Every CourseSmith output needs teacher review, because AI is an assistant and not a replacement for professional judgment.",
    ],
    sections: [
      {
        heading: "Why do schools adopt AI planning tools by department?",
        paragraphs: [
          "Departments share courses, textbooks and common assessments, which makes them a natural unit for trying an AI planning tool. Teachers who teach the same course can compare output, agree on conventions, and share what works.",
          "CourseSmith builds from the uploaded textbook, so when every teacher in a department uploads the same adopted book, lesson plans and tests draw on the same content. That gives the team a shared starting point instead of each teacher prompting a blank chatbot.",
        ],
      },
      {
        heading: "How should a department roll out CourseSmith?",
        paragraphs: [
          "A small, structured pilot gives a department real evidence before a wider decision. The steps below are one practical approach.",
        ],
        steps: [
          {
            name: "Pick one course",
            text: "Choose a course several teachers share, such as grade 9 biology, and confirm everyone uses the same adopted textbook.",
          },
          {
            name: "Agree on conventions",
            text: "Decide on shared settings, such as test length, question types, point values and the Easy, Medium and Hard mix.",
          },
          {
            name: "Pilot one unit",
            text: "Each pilot teacher uploads the book to their own account, plans one unit, and reviews every output before teaching it.",
          },
          {
            name: "Compare and share",
            text: "Meet to compare plans and tests, then save the strongest Word downloads in the department's existing shared folder.",
          },
          {
            name: "Decide on scale",
            text: "If the pilot works, contact SuperMIA at hello@supermia.ai to discuss volume pricing for the department or school.",
          },
        ],
      },
      {
        heading: "How does department curriculum planning stay consistent?",
        paragraphs: [
          "Consistency comes from a shared source and shared settings. When teachers plan from the same textbook and agree on test length, point values and difficulty mix, students in different classrooms get comparable materials.",
          "Academic Schedules help with pacing. If every teacher enters the same planned weeks, hours per week and lecture duration, each gets a week-by-week plan with main topics, key objectives and chapter references that the department can compare in a meeting.",
        ],
      },
      {
        heading: "What does CourseSmith do with school data?",
        paragraphs: [
          "The CourseSmith privacy policy sets out how uploaded material is handled. The table summarizes the points school leaders ask about most.",
        ],
        table: {
          caption: "CourseSmith data handling, from the privacy policy",
          columns: ["Question", "What the privacy policy says"],
          rows: [
            ["Where are uploads stored?", "In private cloud storage, such as AWS S3"],
            [
              "How are documents processed?",
              "With large language models and a separate vector database for each document",
            ],
            [
              "Do AI providers train on our material?",
              "Providers such as OpenAI process text under data processing agreements and do not use it to train their public models",
            ],
            [
              "What happens when a teacher deletes content?",
              "Deleting a syllabus, lesson plan or persona deletes the associated files",
            ],
            [
              "Can one teacher see another's content?",
              "Sign-in uses email with a one-time code and token-authenticated access, so users see only their own content",
            ],
          ],
        },
      },
      {
        heading: "What should school leaders set as ground rules?",
        paragraphs: [
          "Clear ground rules protect students and teachers alike. CourseSmith is built to plan from textbook content, so most rules focus on what goes in and who checks what comes out.",
        ],
        bullets: [
          "Upload textbooks and course documents, not student records or personal information.",
          "Require teacher review of every lesson, test and answer key before classroom use.",
          "Verify any standard code against the official document, since CourseSmith does not tag standards.",
          "Run hands-on activities through existing safety procedures.",
          "Review the privacy policy and terms with your technology team before scaling.",
        ],
      },
      {
        heading: "What does CourseSmith not do for schools?",
        paragraphs: [
          "CourseSmith is a planning and content tool for individual teachers. It does not offer team workspaces, sync with learning management systems, grade student work, or report student analytics.",
          "Its teaching analytics cover each teacher's own activity and mix of delivery methods and question types, not student results. Tests and assignments download as editable Word files that teachers share through the systems the school already uses.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does CourseSmith cost for a school or district?",
        a: "CourseSmith is free to start for individual teachers, with free starter credits and no credit card required. Usage is credit-based. Schools, departments and districts can contact SuperMIA at hello@supermia.ai to discuss volume pricing based on the number of teachers involved.",
      },
      {
        q: "Does CourseSmith align lessons to our state standards?",
        a: "CourseSmith does not tag lessons with standard codes or claim state approval. It builds from the textbook you upload, so a state-adopted textbook carries its content into the plans. Teachers can paste a specific standard into the Co-Pilot to shape a lesson, then verify the code in the official document.",
      },
      {
        q: "Can a pilot start with just a few teachers?",
        a: "Yes. Each teacher can sign up on their own and use free starter credits, so a department can run a small pilot without a purchase. Once the team has compared results, a school leader can contact SuperMIA about volume pricing for a wider group.",
      },
      {
        q: "Who is responsible for the accuracy of CourseSmith output?",
        a: "The teacher. The CourseSmith Terms describe it as an assistant, not a replacement for professional judgment, and note that AI output can be inaccurate. Schools should treat every plan, test and answer key as a draft that a qualified teacher reviews before it reaches students.",
      },
    ],
    related: ["/features/curriculum-planner", "/privacy", "/use-cases/high-school", "/contact"],
    primaryKeyword: "ai for schools",
    secondaryKeywords: ["ai for school districts", "department curriculum planning"],
    datePublished: DATE,
    dateModified: DATE,
  },
];
