import type { ContentPage } from "./types";

export const STANDARDS_PAGES_A: ContentPage[] = [
  // ---------------------------------------------------------------- Common Core
  {
    slug: "common-core",
    group: "standards",
    navLabel: "Common Core",
    navBlurb: "How CCSS math and ELA codes work, and how to plan lessons against them",
    metaTitle: "Common Core Lesson Plans from Your Textbook | CourseSmith",
    metaDescription:
      "Plan Common Core lessons from the textbook you already teach. Learn how CCSS codes are built and draft plans and tests with CourseSmith. Start free today.",
    eyebrow: "Standards: Common Core State Standards",
    h1: "Common Core lesson plans built from the textbook you teach",
    answer:
      "Common Core lesson plans start from three things: the grade-level math or English language arts standard, its CCSS code, and the textbook chapter that teaches it. CourseSmith drafts plans and tests from the textbook you upload, while you paste the standard you are targeting and confirm its code on the official Common Core website.",
    definition:
      "The Common Core State Standards (CCSS) is a set of grade-level learning goals in mathematics and English language arts developed by the National Governors Association Center for Best Practices and the Council of Chief State School Officers.",
    takeaways: [
      "The Common Core State Standards cover only mathematics and English language arts, including literacy standards for history, science and technical subjects in grades 6 to 12.",
      "A full Common Core code such as CCSS.Math.Content.4.NBT.A.1 names the subject, grade, domain, cluster and standard number in that order.",
      "The standards set learning goals but do not prescribe how teachers should teach or which materials they should use.",
      "CourseSmith builds lesson plans from your uploaded textbook and does not tag output with CCSS codes, so the teacher adds and checks each code.",
    ],
    sections: [
      {
        heading: "What do the Common Core State Standards cover?",
        paragraphs: [
          "The Common Core covers two subjects: mathematics and English language arts. The ELA document also contains literacy standards for history and social studies, science and technical subjects in grades 6 to 12, which the official site says support rather than replace a state's content standards in those subjects.",
          "The official site lists 41 states, the District of Columbia, four territories and the Department of Defense Education Activity as adopters. Several states have since revised or renamed their versions, so a teacher in California, New York, Florida or Georgia should read the state document before relying on a national code.",
          "The standards describe what students should learn at each grade. They leave the choice of curriculum, textbook and teaching method to states, districts and teachers.",
        ],
      },
      {
        heading: "How are Common Core codes written?",
        paragraphs: [
          "A Common Core code reads from general to specific: framework, subject, grade, then the strand or domain and the standard number. Math codes add a cluster letter, because math standards are grouped into clusters, and clusters into larger domains.",
          "Many curriculum guides shorten the code to RL.4.2 or 4.NBT.A.1. Either form is fine in a plan as long as colleagues and administrators can trace it back to the official text.",
        ],
        table: {
          caption: "Anatomy of two grade 4 Common Core codes",
          columns: [
            "Code part",
            "ELA: CCSS.ELA-Literacy.RL.4.2",
            "Math: CCSS.Math.Content.4.NBT.A.1",
          ],
          rows: [
            ["Framework and subject", "CCSS.ELA-Literacy", "CCSS.Math.Content"],
            [
              "Strand or domain",
              "RL, Reading: Literature",
              "NBT, Number and Operations in Base Ten",
            ],
            ["Grade", "4", "4"],
            [
              "Cluster",
              "Not used in ELA codes",
              "A, generalize place value understanding for multi-digit whole numbers",
            ],
            [
              "Standard number",
              "2, determine a theme of a story, drama or poem and summarize the text",
              "1, a digit in one place represents ten times what it represents to its right",
            ],
          ],
        },
      },
      {
        heading: "How is high school organized differently?",
        paragraphs: [
          "High school standards are grouped by band or category instead of by single grade. In ELA, grades 9 and 10 share one set of standards and grades 11 and 12 share another, so a plan should name the band.",
          "High school math is organized into six categories: Number and Quantity, Algebra, Functions, Modeling, Geometry, and Statistics and Probability. A course such as Algebra I draws standards from several categories, so a single unit plan may cite codes from more than one.",
        ],
      },
      {
        heading: "What should a Common Core lesson plan show?",
        paragraphs: [
          "A strong plan states the exact standard, shows how students will practice it, and checks it with a task that matches the standard's verb. Reviewers look for the link between the objective, the activity and the assessment.",
        ],
        bullets: [
          "The full code and the standard text, copied from the official document.",
          "For math, one of the eight Standards for Mathematical Practice, such as MP1, make sense of problems and persevere in solving them.",
          "For ELA, the text students will read and the evidence they will cite.",
          "An exit task or quiz item that asks students to do what the standard says, not a near neighbor of it.",
        ],
      },
      {
        heading: "How do you build Common Core plans with CourseSmith?",
        paragraphs: [
          "You build them by starting from your district's adopted textbook and adding the standard yourself. CourseSmith works from the book you upload, so the plan follows the chapter students actually read.",
        ],
        steps: [
          {
            name: "Upload the textbook",
            text: "Upload the PDF or DOCX of your math or ELA textbook (up to 40 MB) with the book name, subject and grade. CourseSmith generates chapters and topics you can rename, add or delete.",
          },
          {
            name: "Plan the lesson",
            text: "Pick the chapter and topics, choose delivery methods such as direct instruction or an interactive activity, and set the lecture length in minutes.",
          },
          {
            name: "Paste the standard into Co-Pilot",
            text: "Open the CourseSmith Co-Pilot chat, paste the CCSS text, and ask for an activity or exit question that targets that standard.",
          },
          {
            name: "Build the check",
            text: "Create a test paper with multiple choice, short answer, long answer or fill-in-the-blank items, set marks and an Easy, Medium and Hard mix, then download it as a Word file.",
          },
          {
            name: "Verify and label",
            text: "Compare the plan with the official standard text and write the code into your plan yourself.",
          },
        ],
      },
      {
        heading: "Where do you find the official Common Core documents?",
        paragraphs: [
          "The official text lives at thecorestandards.org, organized by subject and grade. The ELA section also holds the College and Career Readiness Anchor Standards and Appendices A, B and C, which explain text complexity and sample texts.",
          "Each standard has its own page with its full identifier, which makes it easy to copy the exact wording into a plan. If your state edited the standards, use the state's own document, since its codes and wording can differ.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith aligned to the Common Core?",
        a: "No tool can make that promise for you, and CourseSmith does not tag or align output to CCSS codes. It builds plans and tests from the textbook you upload. If that textbook was chosen to teach the Common Core, the content follows it, and you confirm the standard by checking the plan against the official text.",
      },
      {
        q: "Do I need the full CCSS identifier in every plan?",
        a: "Most schools accept the short form, such as RL.4.2 or 4.NBT.A.1, as long as it matches the official standard. Check your school's planning template, because some administrators ask for the full code or the full standard text on every plan, especially for formal observations.",
      },
      {
        q: "Can I use Common Core codes if my state renamed its standards?",
        a: "Use your state's codes on official paperwork. Several states kept much of the Common Core content but changed the names, numbering or wording, so a national code may not match your state document. The state pages on this site explain how New York, California, Florida and Georgia write their codes.",
      },
      {
        q: "How should I use the Standards for Mathematical Practice in a plan?",
        a: "Pick one or two practices that the lesson genuinely asks students to use, such as MP3, construct viable arguments and critique the reasoning of others, and name the moment in the lesson where it happens. Listing all eight practices on every plan tells a reviewer very little.",
      },
    ],
    sources: [
      {
        label: "Common Core State Standards Initiative: About the Standards",
        url: "https://www.thecorestandards.org/about-the-standards/",
      },
      {
        label: "Common Core: How to Read the Grade Level Standards (Mathematics)",
        url: "https://www.thecorestandards.org/Math/Content/introduction/how-to-read-the-grade-level-standards/",
      },
      {
        label: "Common Core: English Language Arts Standards",
        url: "https://www.thecorestandards.org/ELA-Literacy/",
      },
      {
        label: "Common Core: Standards for Mathematical Practice",
        url: "https://www.thecorestandards.org/Math/Practice/",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/ngss",
      "/standards/new-york",
      "/use-cases/math",
    ],
    primaryKeyword: "common core lesson plans",
    secondaryKeywords: [
      "ccss lesson plans",
      "common core math lesson plans",
      "common core ela lesson plans",
      "how to read common core standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "United States",
      code: "US",
      framework: "Common Core State Standards (CCSS)",
      adoptingBody:
        "National Governors Association Center for Best Practices and Council of Chief State School Officers",
      officialUrl: "https://www.thecorestandards.org/",
    },
  },

  // ---------------------------------------------------------------- NGSS
  {
    slug: "ngss",
    group: "standards",
    navLabel: "NGSS",
    navBlurb: "Read NGSS performance expectations and plan three-dimensional lessons",
    metaTitle: "NGSS Lesson Plans: Read the Codes, Plan | CourseSmith",
    metaDescription:
      "Learn how NGSS performance expectations, foundation boxes and codes work, then plan science lessons from your own textbook with CourseSmith. Try it free.",
    eyebrow: "Standards: Next Generation Science Standards",
    h1: "NGSS lesson plans that start with the performance expectation",
    answer:
      "NGSS lesson plans are built around performance expectations, the assessable statements in the Next Generation Science Standards, and the three dimensions behind each one: practices, disciplinary core ideas and crosscutting concepts. CourseSmith drafts science plans and tests from your adopted textbook, and you paste the performance expectation you target and confirm its code on nextgenscience.org.",
    definition:
      "The Next Generation Science Standards (NGSS) is a set of K-12 science standards released in April 2013 that combines science and engineering practices, disciplinary core ideas and crosscutting concepts into performance expectations.",
    takeaways: [
      "The NGSS were developed by 26 lead states, coordinated by Achieve, from the National Research Council's Framework for K-12 Science Education.",
      "An NGSS code such as HS-PS1-1 gives the grade or band, the discipline and core idea, and the statement's order in the Framework.",
      "Performance expectations describe what students should do after instruction, not the lesson itself, so the teacher still designs the learning sequence.",
      "CourseSmith plans science lessons from your uploaded textbook and does not tag output with NGSS codes, so the teacher pastes and verifies each performance expectation.",
    ],
    sections: [
      {
        heading: "Who wrote the NGSS and how do states use them?",
        paragraphs: [
          "Achieve coordinated the writing with 26 lead state partners, and the standards were published in April 2013. The National Research Council supplied the Framework the standards are built on, and the National Science Teachers Association and the American Association for the Advancement of Science were critical partners.",
          "Each state decides whether to adopt the NGSS as written or publish its own version. California and New York, for example, maintain state editions, so check the state document your district follows before copying a code.",
        ],
      },
      {
        heading: "How do you read an NGSS performance expectation code?",
        paragraphs: [
          "An NGSS code has three parts: the grade or band, the discipline and core idea, and a closing number. Elementary codes begin with a grade from K to 5, middle school codes begin with MS and high school codes with HS.",
          "The Framework behind the codes lists 11 core ideas: four in life science, four in physical science and three in Earth and space science, split into 39 sub-ideas. The NGSS also add one set of performance expectations for engineering.",
        ],
        table: {
          caption: "Reading three NGSS performance expectation codes",
          columns: ["Code part", "2-PS1-2", "HS-PS1-1", "HS-ESS1-6"],
          rows: [
            ["Grade or band", "Grade 2", "High school", "High school"],
            ["Discipline", "Physical science", "Physical science", "Earth and space science"],
            [
              "Core idea",
              "PS1, Matter and Its Interactions",
              "PS1, Matter and Its Interactions",
              "ESS1, Earth's Place in the Universe",
            ],
            [
              "Closing number",
              "Order the statement appeared as a DCI in the Framework",
              "Same rule",
              "Same rule",
            ],
          ],
        },
      },
      {
        heading: "What sits under each performance expectation?",
        paragraphs: [
          "Three foundation boxes sit under each set of performance expectations and show the parts it was built from. Online, the practices appear in blue, the disciplinary core ideas in orange and the crosscutting concepts in green, while clarification statements and assessment boundaries appear in red.",
          "Clarification statements give examples, and assessment boundaries state the limits of large-scale testing. Below them, connection boxes list related core ideas at the same grade, ideas that come before and after, and connected Common Core math and ELA standards.",
        ],
      },
      {
        heading: "What should an NGSS-based science plan show?",
        paragraphs: [
          "An NGSS plan should show students doing a practice with a core idea while a crosscutting concept frames the thinking. The standards writers say performance expectations are not instructional tasks, and that teachers can use several practices in instruction even when a PE names only one.",
        ],
        bullets: [
          "The PE code and text, plus the specific practice, core idea and crosscutting concept from the foundation boxes.",
          "A phenomenon or design problem that gives students a reason to investigate.",
          "A note on the assessment boundary, so quiz items stay inside it.",
          "A plan for how several lessons add up to the full PE, since one class rarely covers all three dimensions.",
        ],
      },
      {
        heading: "How do you plan NGSS lessons with CourseSmith?",
        paragraphs: [
          "Start with the science textbook your district adopted, then add the performance expectation as context for the assistant. CourseSmith keeps the plan anchored to the chapters students read.",
        ],
        steps: [
          {
            name: "Upload the science textbook",
            text: "Upload the PDF or DOCX with the book name, subject and grade so CourseSmith can generate chapters and topics.",
          },
          {
            name: "Map the unit",
            text: "Create an academic schedule with your planned weeks and hours per week. CourseSmith drafts a week-by-week plan with a main topic, key objectives and chapter references for each week.",
          },
          {
            name: "Choose methods that fit science practices",
            text: "In the lesson planner, combine an interactive activity with real-world use cases so the plan includes an investigation tied to a phenomenon.",
          },
          {
            name: "Bring in the PE",
            text: "Paste the performance expectation and its foundation box text into Co-Pilot and ask for a task where students use the named practice.",
          },
          {
            name: "Check against the source",
            text: "Compare activities and test items with the clarification statement and assessment boundary, then record the PE code in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are the NGSS the same in every state that uses them?",
        a: "No. Some states adopted the NGSS as published, while others, such as California and New York, issued state editions with their own names and documents. Codes are often similar, but always quote the version your state publishes, because that is the document your district's curriculum and state science test follow.",
      },
      {
        q: "Does CourseSmith know every NGSS performance expectation?",
        a: "Do not rely on any AI tool to recall standards text from memory. CourseSmith works from the textbook you upload and from what you type into Co-Pilot, so paste the exact performance expectation from nextgenscience.org or your state document and check the result against it before teaching.",
      },
      {
        q: "Can one lesson cover a whole performance expectation?",
        a: "Usually not. A performance expectation describes what students can do at the end of instruction, and it combines a practice, a core idea and a crosscutting concept. Most teachers spread one PE across several lessons in a unit and use a later assessment to check the full expectation.",
      },
      {
        q: "Where do the engineering standards fit?",
        a: "Engineering design has its own set of performance expectations alongside physical, life, and Earth and space science. Many teachers pair an engineering PE with a science unit, so students apply a core idea while defining a problem, testing solutions and improving a design.",
      },
    ],
    sources: [
      {
        label: "NGSS: Developing the Standards",
        url: "https://www.nextgenscience.org/developing-standards/developing-standards",
      },
      {
        label: "NGSS: How to Read the Next Generation Science Standards (PDF)",
        url: "https://www.nextgenscience.org/sites/default/files/How%20to%20Read%20NGSS%20-%20Final%2008.19.13.pdf",
      },
      {
        label: "NGSS: Understanding the Standards",
        url: "https://www.nextgenscience.org/understanding-standards/understanding-standards",
      },
    ],
    related: [
      "/use-cases/science",
      "/features/curriculum-planner",
      "/standards/california",
      "/standards/common-core",
    ],
    primaryKeyword: "ngss lesson plans",
    secondaryKeywords: [
      "next generation science standards lesson plans",
      "how to read ngss performance expectations",
      "ngss three dimensional lesson plan",
      "ngss codes explained",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "United States",
      code: "US",
      framework: "Next Generation Science Standards (NGSS)",
      adoptingBody: "NGSS Lead States, coordinated by Achieve; adopted individually by each state",
      officialUrl: "https://www.nextgenscience.org/",
    },
  },

  // ---------------------------------------------------------------- Texas TEKS
  {
    slug: "texas-teks",
    group: "standards",
    navLabel: "Texas TEKS",
    navBlurb: "TEKS chapters, student expectations and STAAR, explained for planners",
    metaTitle: "TEKS Lesson Plans: How Texas Standards Work | CourseSmith",
    metaDescription:
      "Learn how TEKS student expectations, 19 TAC chapters and readiness standards work, then draft Texas lesson plans from your textbook. Start free.",
    eyebrow: "Standards: Texas Essential Knowledge and Skills",
    h1: "TEKS lesson plans grounded in your Texas textbook",
    answer:
      "TEKS lesson plans name the knowledge and skills statement and the student expectation being taught, such as 4.2(B), which the State Board of Education publishes in Title 19 of the Texas Administrative Code. CourseSmith drafts plans and tests from your district's textbook, and you paste the student expectation and verify it in TEA's TEKS documents.",
    definition:
      "The Texas Essential Knowledge and Skills (TEKS) is the set of curriculum standards adopted by the Texas State Board of Education that outlines what students are to learn in each course or grade in Texas public schools.",
    takeaways: [
      "The TEKS are adopted by the Texas State Board of Education and codified by subject in chapters of 19 Texas Administrative Code, such as Chapter 111 for mathematics.",
      "Each TEKS code pairs a knowledge and skills statement with a lettered student expectation, so 4.2(B) means grade 4, statement 2, expectation B.",
      "TEA labels assessed student expectations as readiness or supporting standards, which helps teachers decide where to spend the most class time.",
      "TEA says House Bill 8 replaces STAAR beginning in the 2027-28 school year, and the assessed content standards stay the same.",
      "Texas teachers supply the student expectation themselves, because CourseSmith drafts from the textbook and leaves TEKS labeling to the teacher.",
    ],
    sections: [
      {
        heading: "Who adopts the TEKS and where are they published?",
        paragraphs: [
          "The Texas State Board of Education adopts the TEKS after input from educators and other stakeholders, and TEA publishes them for use in every public school. The legal text sits in Title 19, Part 2 of the Texas Administrative Code, one chapter per subject area.",
          "The board reviews and revises each subject on a cycle. For example, it gave final approval to new high school science TEKS on November 20, 2020, and to kindergarten through grade 8 science TEKS on December 1, 2021.",
        ],
        table: {
          caption: "Where each subject's TEKS live in 19 TAC",
          columns: ["19 TAC chapter", "Contents", "Why planners open it"],
          rows: [
            [
              "Chapter 74",
              "Curriculum Requirements",
              "Holds the current ELPS at section 74.4 until the new ELPS take over",
            ],
            ["Chapter 110", "English Language Arts and Reading", "ELAR student expectations"],
            ["Chapter 111", "Mathematics", "Math student expectations by grade and course"],
            ["Chapter 112", "Science", "K-8 and high school science TEKS"],
            ["Chapter 113", "Social Studies", "Social studies TEKS by grade and course"],
            [
              "Chapter 120",
              "Other TEKS, including Subchapter B, English Language Proficiency Standards",
              "Home of the new ELPS",
            ],
            ["Chapter 126", "Technology Applications", "Technology course TEKS"],
            [
              "Chapter 128",
              "Spanish Language Arts and Reading and English as a Second Language",
              "SLAR and ESL student expectations",
            ],
          ],
        },
      },
      {
        heading: "How do you read a TEKS student expectation?",
        paragraphs: [
          'A TEKS code reads as grade, knowledge and skills statement, then student expectation. In grade 4 mathematics, 4.2 is the number and operations statement about place value, and the stem "The student is expected to" introduces lettered expectations such as (B), represent the value of the digit in whole numbers through 1,000,000,000 and decimals to the hundredths.',
          "Plans should quote the lettered expectation, not just the statement number, because one statement can hold eight or more expectations. Use the verb in the expectation, such as represent, compare or interpret, to choose the activity and the test item.",
        ],
      },
      {
        heading: "What are readiness and supporting standards?",
        paragraphs: [
          "TEA's assessed curriculum documents label each tested student expectation as a readiness standard or a supporting standard. In grade 4 math, 4.2(B) and 4.2(G) are readiness standards, while 4.2(A), 4.2(C) and 4.2(D) are supporting standards.",
          "The labels help a teacher weigh how much time a skill needs, but every TEKS expectation is still required content. TEA also notes that the mathematical process standards are not assessed in isolation, so plans should weave them into content lessons.",
        ],
      },
      {
        heading: "Which state tests measure the TEKS?",
        paragraphs: [
          "STAAR has tested reading language arts and math in grades 3 to 8, science in grades 5 and 8, social studies in grade 8, and end-of-course exams in subjects including Algebra I, English I, Biology and US History. TEA reported that the redesigned grade 5 and 8 science tests reflect the revised science TEKS.",
          "Under House Bill 8, TEA says STAAR is replaced beginning in the 2027-28 school year by a new program that may be called the Student Success Tool. TEA's assessed curriculum documents for that tool, revised in August 2026, state that its content standards remain unchanged from the STAAR assessed curriculum.",
        ],
      },
      {
        heading: "What changes are coming for ELPS and literary works?",
        paragraphs: [
          "The board adopted new English Language Proficiency Standards in September 2024, and they took effect in 19 TAC Chapter 120 on February 2, 2025. TEA scheduled them for classroom use in the 2026-27 school year, and until then districts taught the ELPS in section 74.4.",
          "In June 2026 the board gave final approval to required literary works TEKS. Implementation is staggered, starting with kindergarten through grade 5 in 2030-31 and ending with high school English courses in 2033-34.",
        ],
      },
      {
        heading: "How do Texas teachers use CourseSmith with the TEKS?",
        paragraphs: [
          "CourseSmith fits the TEKS workflow when you treat it as a drafting assistant for the textbook your district uses. The student expectation comes from you, and the code goes into the plan only after you check it.",
        ],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or fill in your school, grade range and teaching style so plans match how you run a Texas classroom.",
          },
          {
            name: "Paste the student expectation",
            text: 'Copy the full expectation, including the "student is expected to" stem, into Co-Pilot and ask for a lesson activity that uses its exact verb.',
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test paper with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in the TEA document",
            text: "Open the 19 TAC chapter or TEA's TEKS page, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label lesson plans with TEKS codes?",
        a: "No. CourseSmith does not tag or align output to TEKS codes, and it is not approved by the State Board of Education or TEA. It drafts from the textbook you upload. You add the student expectation you are targeting, check it against the official chapter and write the code into the plan yourself.",
      },
      {
        q: "Should I cite the knowledge and skills statement or the student expectation?",
        a: "Cite the student expectation, such as 4.2(B), because that is the specific skill students must show. The knowledge and skills statement, such as 4.2, describes the broader area. Many campuses also ask for the expectation's wording on the plan so an appraiser can see the match quickly.",
      },
      {
        q: "Will my STAAR-focused plans still work after House Bill 8?",
        a: "TEA's assessed curriculum documents for the replacement program state that its content standards stay the same as the STAAR assessed curriculum, so plans built around the TEKS still target the right skills. Test formats and schedules change, so watch TEA's House Bill 8 page for updates before spring testing.",
      },
      {
        q: "How do I plan for Spanish Language Arts and Reading?",
        a: "SLAR and ESL student expectations sit in 19 TAC Chapter 128, separate from the English ELAR chapter, and TEA also posts the TEKS in Spanish. Upload your SLAR textbook to CourseSmith as the source, paste the Chapter 128 expectation you target, and review every draft closely, since CourseSmith has no translation feature.",
      },
    ],
    sources: [
      {
        label: "Texas Education Agency: Curriculum Standards",
        url: "https://tea.texas.gov/academics/curriculum-standards",
      },
      {
        label: "TEA: Texas Administrative Code, Title 19, Part 2",
        url: "https://tea.texas.gov/laws-and-rules/texas-administrative-code/texas-administrative-code-title-19-part-2",
      },
      {
        label: "TEA: House Bill 8 Student Assessment",
        url: "https://tea.texas.gov/data-reports/student-assessment-overview/house-bill-8-student-assessment",
      },
      {
        label: "TEA: Grade 4 Mathematics Assessment Eligible TEKS (August 2026)",
        url: "https://tea2.tea.texas.gov/data-reports/staar/sst-4-math-assessed-curriculum.pdf",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/florida-best",
      "/standards/common-core",
      "/use-cases/schools-and-districts",
    ],
    primaryKeyword: "TEKS lesson plans",
    secondaryKeywords: [
      "texas teks lesson plans",
      "how to read teks student expectations",
      "teks readiness and supporting standards",
      "staar lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Texas",
      code: "US-TX",
      framework: "Texas Essential Knowledge and Skills (TEKS)",
      adoptingBody: "Texas State Board of Education",
      officialUrl: "https://tea.texas.gov/academics/curriculum-standards",
    },
  },

  // ---------------------------------------------------------------- California
  {
    slug: "california",
    group: "standards",
    navLabel: "California",
    navBlurb: "CA CCSS, CA NGSS and frameworks: what California teachers plan against",
    metaTitle: "California Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons against California's CA CCSS, CA NGSS and ELD standards using your own textbook. See how CA additions and CAASPP tests work. Start free.",
    eyebrow: "Standards: California content standards",
    h1: "California standards lesson plans, from CA CCSS to CA NGSS",
    answer:
      "California standards lesson plans draw on several State Board of Education documents: the California Common Core State Standards for ELA and math, the California Next Generation Science Standards, the ELD standards and subject frameworks. CourseSmith drafts plans from your adopted textbook, and you paste the California standard you target and check it on the CDE site.",
    definition:
      "California's content standards is the collection of subject standards adopted by the California State Board of Education, including the California Common Core State Standards in ELA and math and the California Next Generation Science Standards.",
    takeaways: [
      "California adopted the Common Core for ELA and math on August 2, 2010, with California-specific additions marked in boldface and followed by the letters CA.",
      "The State Board adopted the California Next Generation Science Standards on September 4, 2013, and the California English Language Development Standards on November 7, 2012.",
      "California curriculum frameworks give guidance for teaching each set of standards and set the criteria for state adoption of K-8 instructional materials.",
      "California teachers add each standard code by hand after checking the CDE document, since CourseSmith works from the uploaded textbook rather than a standards database.",
    ],
    sections: [
      {
        heading: "Which standards do California teachers plan against?",
        paragraphs: [
          "California teachers plan against a different State Board document in each subject, adopted in different years. The table lists the core sets and when the board adopted them.",
          "Because the dates differ, a single school can teach from standards written two decades apart. History-social science still uses the content standards adopted in October 1998.",
        ],
        table: {
          caption: "Core California content standards and their adoption",
          columns: ["Subject", "California standards document", "State Board adoption"],
          rows: [
            [
              "English language arts and literacy",
              "California Common Core State Standards for ELA/Literacy",
              "August 2, 2010, modified March 2013",
            ],
            [
              "Mathematics",
              "California Common Core State Standards for Mathematics",
              "August 2, 2010, modified January 2013",
            ],
            [
              "Science",
              "California Next Generation Science Standards (CA NGSS)",
              "September 4, 2013",
            ],
            [
              "English language development",
              "California English Language Development Standards",
              "November 7, 2012",
            ],
            ["History-social science", "History-Social Science Content Standards", "October 1998"],
          ],
        },
      },
      {
        heading: "How are California's Common Core codes different?",
        paragraphs: [
          "California's codes match the national Common Core except where the state added its own content. Those additions appear in boldface and end with the letters CA, so a standard that carries the tag will not appear on the national site.",
          "The California math standards also add a practice standard for higher mathematics, MP3.1, on proof by induction and contradiction. When you plan from a national lesson resource, compare it with the California document to catch tagged additions it leaves out.",
        ],
      },
      {
        heading: "What role do California frameworks play?",
        paragraphs: [
          "Frameworks explain how to teach the standards, while the standards say what students should learn. The Instructional Quality Commission drafts each framework and the State Board adopts it, and each one includes criteria for evaluating instructional materials for the state's K-8 adoption.",
          "The current mathematics framework was adopted in July 2023. Districts may also choose materials the board did not adopt, as long as those materials are aligned with the content standards, so the textbook in your room may come from either path.",
        ],
      },
      {
        heading: "How do California state tests connect to the standards?",
        paragraphs: [
          "The CAASPP system tests the standards in tested grades. Smarter Balanced assessments cover ELA and math in grades 3 to 8 and 11, and the California Science Test covers grades 5 and 8 and one high school grade.",
        ],
        bullets: [
          "Smarter Balanced ELA and math: grades 3 to 8 and grade 11, computer adaptive with performance tasks.",
          "California Science Test (CAST): grades 5 and 8, plus once in grade 10, 11 or 12.",
          "California Alternate Assessments: for students with the most significant cognitive disabilities in the same grades.",
        ],
      },
      {
        heading: "How do you build California plans with CourseSmith?",
        paragraphs: [
          "Use CourseSmith on the content side and the CDE documents on the standards side. The plan follows the textbook your district selected, and the California code is something you add after checking it.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Upload the PDF or DOCX for your course with book name, subject and grade, then tidy the chapters and topics.",
          },
          {
            name: "Flag California additions",
            text: "Before planning, note any standards tagged CA in your grade so you can ask for them by name.",
          },
          {
            name: "Ask Co-Pilot for the targeted activity",
            text: "Paste the California standard text into Co-Pilot and ask for an activity, a real-world example or a discussion question that targets it.",
          },
          {
            name: "Plan the lesson and assessment",
            text: "Generate the lesson plan for the topic, then an assignment or test paper with marks and difficulty levels, downloaded as Word.",
          },
          {
            name: "Check the CDE source",
            text: "Confirm the code and wording in the CDE standards document before you file the plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CA NGSS the same as the national NGSS?",
        a: "California adopted the Next Generation Science Standards for California public schools on September 4, 2013, and publishes them as CA NGSS. Performance expectation codes look like the national ones, but California also publishes its own framework and guidance, so use CDE materials when your district asks which document a plan follows.",
      },
      {
        q: "Does CourseSmith add the CA tags or codes for me?",
        a: "No. Neither the State Board nor the CDE has reviewed or approved CourseSmith, and the tool adds no California codes or alignment of its own. It works from the textbook you upload and the standard you paste into Co-Pilot, and you add the verified code to the plan.",
      },
      {
        q: "How should I plan for English learners in California?",
        a: "The California ELD Standards are meant to be used alongside the ELA standards, so many teachers list both on a plan. CourseSmith's Co-Pilot can help you brainstorm activities or adapt material for a different grade level, but check every suggestion against the ELD document and your students' needs.",
      },
      {
        q: "Where do I find the official California standards documents?",
        a: "The California Department of Education posts each set on its Content Standards page, with links to the full documents and the related curriculum frameworks. Use those files as the reference copy, because older printed versions may lack later corrections or modifications.",
      },
    ],
    sources: [
      {
        label: "California Department of Education: Content Standards",
        url: "https://www.cde.ca.gov/be/st/ss/",
      },
      {
        label: "CDE: Common Core State Standards FAQs",
        url: "https://www.cde.ca.gov/re/cc/ccssfaqs.asp",
      },
      {
        label: "CDE: California Assessment System",
        url: "https://www.cde.ca.gov/ta/tg/ai/caassessmentsystem.asp",
      },
      {
        label: "CDE: All Curriculum Frameworks",
        url: "https://www.cde.ca.gov/ci/cr/cf/allfwks.asp",
      },
    ],
    related: [
      "/standards/ngss",
      "/features/quiz-generator",
      "/use-cases/english-language-arts",
      "/standards/new-york",
    ],
    primaryKeyword: "california standards lesson plans",
    secondaryKeywords: [
      "california common core lesson plans",
      "ca ngss lesson plans",
      "california eld standards lesson plan",
      "caaspp lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "California",
      code: "US-CA",
      framework:
        "California Common Core State Standards and California Next Generation Science Standards",
      adoptingBody: "California State Board of Education",
      officialUrl: "https://www.cde.ca.gov/be/st/ss/",
    },
  },

  // ---------------------------------------------------------------- Florida B.E.S.T.
  {
    slug: "florida-best",
    group: "standards",
    navLabel: "Florida B.E.S.T.",
    navBlurb: "B.E.S.T. benchmark codes, CPALMS and FAST, explained for Florida plans",
    metaTitle: "Florida B.E.S.T. Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Decode B.E.S.T. benchmarks like ELA.4.R.1.1, find them on CPALMS, and draft Florida lesson plans and tests from your own textbook. Start free.",
    eyebrow: "Standards: Florida B.E.S.T.",
    h1: "Florida B.E.S.T. standards lesson plans from your own textbook",
    answer:
      "Florida B.E.S.T. standards lesson plans cite a benchmark code such as ELA.4.R.1.1 or MA.4.NSO.1.2, taken from CPALMS, the state's official standards site. CourseSmith drafts plans and tests from the ELA or math textbook your district adopted, and you paste the benchmark you target and confirm it on CPALMS before teaching.",
    definition:
      "The Benchmarks for Excellent Student Thinking (B.E.S.T.) is the set of K-12 English language arts and mathematics standards adopted by the Florida State Board of Education on February 12, 2020.",
    takeaways: [
      "The Florida State Board of Education adopted the B.E.S.T. standards for K-12 ELA and math on February 12, 2020, by amending Rule 6A-1.09401.",
      "FLDOE calls CPALMS the State of Florida's official source for standards and course descriptions.",
      "A B.E.S.T. code such as MA.4.NSO.1.2 reads as subject, grade, strand, standard and benchmark.",
      "Florida's FAST reading and math tests and the B.E.S.T. Writing test have been aligned to the B.E.S.T. standards since 2022-23.",
      "In Florida, the benchmark on a CourseSmith plan comes from CPALMS and the teacher, not from automatic tagging.",
    ],
    sections: [
      {
        heading: "What do the B.E.S.T. standards replace and cover?",
        paragraphs: [
          "B.E.S.T. covers English language arts and mathematics from kindergarten to grade 12. The State Board adopted both on February 12, 2020, and FLDOE planned full implementation with matching instructional materials in the 2022-23 school year.",
          "Other subjects use separate Florida standards. CPALMS lists science, social studies, computer science, world languages, the arts and English language development as their own subject areas, so a science plan does not cite a B.E.S.T. code.",
        ],
      },
      {
        heading: "How do you read a B.E.S.T. benchmark code?",
        paragraphs: [
          "Read a B.E.S.T. code left to right as subject, grade, strand, standard and benchmark. ELA strands include Foundations (F), Reading (R), Communication (C) and Vocabulary (V), plus the K-12 ELA Expectations coded EE, such as ELA.K12.EE.1.1 on citing evidence.",
          "In the ELA document, reading, communication and vocabulary benchmarks are listed from grade 12 down to kindergarten to help with vertical planning. That layout makes it easy to see the earlier-grade version of a skill when students need a review.",
        ],
        table: {
          caption: "Anatomy of two grade 4 B.E.S.T. benchmarks",
          columns: ["Code part", "ELA.4.R.1.1", "MA.4.NSO.1.2"],
          rows: [
            ["Subject", "ELA, English language arts", "MA, mathematics"],
            ["Grade", "4", "4"],
            ["Strand", "R, Reading", "NSO, Number Sense and Operations"],
            [
              "Standard",
              "1, Reading Prose and Poetry",
              "1, understand place value for multi-digit numbers",
            ],
            [
              "Benchmark",
              "1, how setting, events, conflict and character shape the plot",
              "2, read and write multi-digit whole numbers to 1,000,000 in standard, expanded and word form",
            ],
          ],
        },
      },
      {
        heading: "What does a CPALMS benchmark page tell a teacher?",
        paragraphs: [
          "Each CPALMS benchmark page lists the code, the full text, the subject, grade, strand and parent standard, along with its status, such as State Board Approved. Many pages add examples; the MA.4.NSO.1.2 page shows 275,802 written in expanded form.",
          "Benchmark pages also list related courses, such as Grade 4 Mathematics and Access Mathematics Grade 4. Course descriptions on CPALMS list every standard taught in a course, which makes them the quickest way to see a whole year's scope.",
        ],
      },
      {
        heading: "Which Florida tests measure the B.E.S.T. standards?",
        paragraphs: [
          "FLDOE's statewide reading, writing and math tests have been aligned to B.E.S.T. since 2022-23. The Florida Assessment of Student Thinking is a progress-monitoring test given three times a year.",
        ],
        bullets: [
          "FAST ELA Reading: grades 3 to 10 in the statewide program, given in three windows called PM1, PM2 and PM3.",
          "FAST Mathematics: grades 3 to 8, on the same three-window schedule.",
          "B.E.S.T. Writing: grades 4 to 10, once each spring, with students responding to two to four passages.",
          "Statewide Science Assessment: grades 5 and 8, based on Florida's science standards rather than B.E.S.T.",
        ],
      },
      {
        heading: "How do Florida teachers use CourseSmith with B.E.S.T.?",
        paragraphs: [
          "CourseSmith handles the textbook side of planning, and CPALMS stays your reference for every benchmark. That split keeps drafting fast while the code on the plan comes from the official site.",
        ],
        steps: [
          {
            name: "Open the course description on CPALMS",
            text: "List the benchmarks for your course and pick the one or two this lesson targets.",
          },
          {
            name: "Upload your adopted textbook",
            text: "Add the ELA or math textbook as a PDF or DOCX with book name, subject and grade, and review the chapters and topics.",
          },
          {
            name: "Give Co-Pilot the benchmark",
            text: "Paste the benchmark text and any CPALMS example into Co-Pilot and ask for practice problems or a discussion task in the same format.",
          },
          {
            name: "Generate the plan and a progress check",
            text: "Create the lesson plan for the matching topic, then a short test paper mixing multiple choice and short answer items with set marks, downloaded as Word.",
          },
          {
            name: "Match it back to CPALMS",
            text: "Compare the draft with the benchmark wording and add the code to your plan only when it fits.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CPALMS run by the state?",
        a: "FLDOE describes CPALMS as the State of Florida's official source for standards, course descriptions and vetted resources. The site itself credits Florida State University. Use CPALMS benchmark pages or the FLDOE standards documents, not third-party lists, when you copy a code onto a plan.",
      },
      {
        q: "Does CourseSmith know the B.E.S.T. benchmarks?",
        a: "Not as a built-in list: FLDOE has not reviewed CourseSmith, and the tool never assigns B.E.S.T. codes on its own. It drafts from the textbook you upload. Paste the exact benchmark from CPALMS into Co-Pilot when you want an activity aimed at it, then check the result against the benchmark text.",
      },
      {
        q: "Should I cite the ELA Expectations on every ELA plan?",
        a: "The K-12 ELA Expectations, coded ELA.K12.EE, describe habits such as citing evidence that run through every grade, so many teachers list one alongside the main benchmark when a lesson leans on it. Name the specific expectation students practice rather than listing all of them.",
      },
      {
        q: "Can CourseSmith help me prepare for FAST progress monitoring?",
        a: "CourseSmith can draft practice test papers from your textbook chapters with a chosen mix of question types and difficulty, which suits review between progress-monitoring windows. It does not import FAST results or track students, so use your district's reports to decide which benchmarks to review.",
      },
    ],
    sources: [
      {
        label: "FLDOE: Standards and Instructional Support",
        url: "https://www.fldoe.org/academics/standards/",
      },
      {
        label: "CPALMS: Browse and Search Standards",
        url: "https://www.cpalms.org/public/search/standard",
      },
      {
        label: "CPALMS: Benchmark MA.4.NSO.1.2",
        url: "https://www.cpalms.org/PreviewStandard/PrintStandard/15342?export=true",
      },
      {
        label: "FLDOE: 2026-27 FAST Grades 3-10 Fact Sheet",
        url: "https://www.fldoe.org/file/20102/2627FASTGrd310FS.pdf",
      },
    ],
    related: [
      "/standards/texas-teks",
      "/standards/georgia-gse",
      "/features/ai-assignment-generator",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "florida B.E.S.T. standards lesson plans",
    secondaryKeywords: [
      "best standards lesson plans",
      "cpalms lesson plans",
      "florida best benchmark codes",
      "fast test lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Florida",
      code: "US-FL",
      framework: "Benchmarks for Excellent Student Thinking (B.E.S.T.) Standards",
      adoptingBody: "Florida State Board of Education",
      officialUrl: "https://www.cpalms.org/public/search/standard",
    },
  },

  // ---------------------------------------------------------------- New York
  {
    slug: "new-york",
    group: "standards",
    navLabel: "New York NGLS",
    navBlurb: "NY Next Generation Learning Standards codes, tests and planning tips",
    metaTitle: "New York Next Generation Learning Standards Lesson Plans",
    metaDescription:
      "Learn how New York NGLS codes like 4R1 and NY-4.NBT.1 work and when new tests began, then draft lessons from your textbook with CourseSmith. Try it free.",
    eyebrow: "Standards: New York State Next Generation Learning Standards",
    h1: "New York Next Generation Learning Standards lesson plans",
    answer:
      "New York Next Generation Learning Standards lesson plans cite New York's own codes, such as 4R1 in ELA or NY-4.NBT.1 in math, which the Board of Regents adopted in September 2017. CourseSmith drafts plans and tests from your district's textbook, and you paste the NGLS standard you target and confirm it in the NYSED document.",
    definition:
      "The New York State Next Generation Learning Standards (NGLS) is the set of revised English language arts and mathematics standards adopted by the New York State Board of Regents in September 2017 after a two-year statewide review.",
    takeaways: [
      "The New York Board of Regents adopted the Next Generation ELA and math standards in September 2017, with full implementation starting in September 2022.",
      "New York math codes carry an NY prefix, so NY-4.NBT.1 is the state's version of the Common Core standard 4.NBT.1.",
      "New York ELA codes put the grade first, so 4R1 is the first grade 4 reading standard and 9-10R1 is the same standard for grades 9 and 10.",
      "New grades 3 to 8 ELA and math tests measuring the NGLS were first given in spring 2023.",
      "New York teachers write NGLS codes onto CourseSmith drafts only after matching them to the NYSED wording, because the tool assigns no codes on its own.",
    ],
    sections: [
      {
        heading: "How did New York arrive at the Next Generation standards?",
        paragraphs: [
          "New York revised its Common Core-based ELA and math standards through a two-year statewide review, and the Board of Regents adopted the result in September 2017. NYSED's roadmap moved from raising awareness to building capacity, with full implementation from September 2022.",
          "NYSED states that curriculum decisions are made locally and that the ELA standards include no required reading list. Your district picks the texts and materials, and the standards define the skills.",
        ],
      },
      {
        heading: "How are New York ELA codes written?",
        paragraphs: [
          "New York ELA codes start with the grade, add a strand letter and end with the standard number. 4R1 is grade 4, reading, standard 1, and high school uses band prefixes such as 9-10R1 and 11-12R1.",
          "The grade-level code builds on an anchor standard written without a grade, such as R1. NYSED's ELA document also uses RL and RI tags to show whether a reading standard applies to literary or informational texts, which tells you what kind of passage the lesson needs.",
        ],
      },
      {
        heading: "How are New York math codes written?",
        paragraphs: [
          "New York math codes add an NY prefix to a Common Core-style code: NY, grade, domain and standard number. NYSED's grade 4 crosswalk maps NY-4.NBT.1 to the original 4.NBT.1, so older resources can be traced to the new numbering.",
          "The math standards begin in pre-K, with codes such as NY-PK.OA.2, and some standards have lettered parts, such as NY-6.RP.3d. Cite the lettered part when a lesson covers only one piece of a standard.",
        ],
      },
      {
        heading: "Which New York tests measure these standards?",
        paragraphs: [
          "New York phased in new state tests one exam at a time. The table lists the first administrations NYSED published for tests built on the NGLS and on the state's P-12 Science Learning Standards, which the Regents approved in December 2016.",
        ],
        table: {
          caption: "First New York tests measuring the new standards",
          columns: ["Test", "Standards measured", "First administration"],
          rows: [
            ["Grades 3 to 8 ELA and math tests", "NGLS for ELA and mathematics", "Spring 2023"],
            ["Regents Exam in Algebra I", "NGLS for mathematics", "June 2024"],
            ["Grade 5 and grade 8 science tests", "P-12 Science Learning Standards", "Spring 2024"],
            ["Regents Exam in Geometry", "NGLS for mathematics", "June 2025"],
            [
              "Earth and Space Sciences and Biology Regents",
              "P-12 Science Learning Standards",
              "June 2025",
            ],
            ["Regents Exams in Algebra II and ELA", "NGLS for mathematics and ELA", "June 2026"],
            ["Chemistry and Physics Regents", "P-12 Science Learning Standards", "June 2026"],
          ],
        },
      },
      {
        heading: "How do New York teachers plan with CourseSmith?",
        paragraphs: [
          "Treat CourseSmith as the drafting partner for your district's materials and NYSED as the authority on codes. That split matters in New York, where the state numbering differs from national Common Core lists.",
        ],
        steps: [
          {
            name: "Find the NY standard first",
            text: "Pick the NGLS standard from the NYSED document for your grade, noting whether it is an RL or RI standard or a lettered math part.",
          },
          {
            name: "Upload your course text",
            text: "Upload the textbook or syllabus as a PDF or DOCX with the book name, subject and grade so CourseSmith generates chapters and topics.",
          },
          {
            name: "Paste the standard into Co-Pilot",
            text: "Ask Co-Pilot for a text-based question set or a math task that targets the pasted NGLS standard.",
          },
          {
            name: "Plan the lesson and the Regents-style check",
            text: "Generate the lesson plan, then a test paper with long-answer and short-answer items, marks per question and a difficulty mix, downloaded as Word.",
          },
          {
            name: "Record the NY code",
            text: "Write the NY code into the plan after checking it against the NYSED wording.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use Common Core codes in New York?",
        a: "Use the New York codes on plans and curriculum maps, because state tests are built on the NGLS. Older Common Core resources can still help, and NYSED's crosswalks show how numbering maps, as with NY-4.NBT.1 and 4.NBT.1. Check the wording too, since some standards were revised rather than renumbered.",
      },
      {
        q: "Does CourseSmith align lessons to the NGLS?",
        a: "No. CourseSmith has no NGLS alignment feature, and neither NYSED nor the Board of Regents has endorsed it. It builds plans from the textbook you upload, while you supply the standard in Co-Pilot and confirm the code in the NYSED document before using the plan.",
      },
      {
        q: "Are New York's science standards the same as the NGSS?",
        a: "New York's P-12 Science Learning Standards are built on the National Research Council Framework and the NGSS, using the same three dimensions of practices, core ideas and crosscutting concepts. They are a New York document, so cite New York's version on plans and check its wording before copying a code.",
      },
      {
        q: "Can CourseSmith help with Regents exam review?",
        a: "CourseSmith can turn the chapters of your uploaded course text into test papers with multiple choice, short answer, long answer and fill-in-the-blank questions and a chosen difficulty mix. It does not have Regents exam content, so use NYSED's released exams for format and compare your items with them.",
      },
    ],
    sources: [
      {
        label: "NYSED: Next Generation English Language Arts Learning Standards (PDF)",
        url: "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/nys-next-generation-ela-standards.pdf",
      },
      {
        label: "NYSED: Next Generation Mathematics Learning Standards (PDF)",
        url: "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/nys-next-generation-mathematics-p-12-standards.pdf",
      },
      {
        label: "NYSED: Standards Implementation Timeline Extension",
        url: "https://www.nysed.gov/sites/default/files/programs/charter-schools/standardsimplementationexensionapril.pdf",
      },
      {
        label: "NYSED: Science FAQ",
        url: "https://www.nysed.gov/standards-instruction/science-faq",
      },
    ],
    related: [
      "/standards/common-core",
      "/features/quiz-generator",
      "/use-cases/high-school",
      "/standards/california",
    ],
    primaryKeyword: "new york next generation learning standards lesson plans",
    secondaryKeywords: [
      "ngls lesson plans",
      "new york state learning standards lesson plans",
      "nys next generation ela standards",
      "regents exam lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "New York",
      code: "US-NY",
      framework: "New York State Next Generation Learning Standards (NGLS)",
      adoptingBody: "New York State Board of Regents",
      officialUrl: "https://www.nysed.gov/standards-instruction/ela-guidance-resources",
    },
  },

  // ---------------------------------------------------------------- Georgia
  {
    slug: "georgia-gse",
    group: "standards",
    navLabel: "Georgia GSE",
    navBlurb: "GSE plus Georgia's newer K-12 math and ELA standards, by subject",
    metaTitle: "Georgia Standards of Excellence Lesson Plans | CourseSmith",
    metaDescription:
      "See which Georgia subjects still use the GSE, how codes like S4E1 and 5.PAR.6.1 work, and draft lessons from your textbook with CourseSmith. Start free.",
    eyebrow: "Standards: Georgia Standards of Excellence",
    h1: "Georgia Standards of Excellence lesson plans, subject by subject",
    answer:
      "Georgia Standards of Excellence lesson plans now depend on the subject: science and social studies still use GSE codes such as S4E1 and SS5H1, while math and ELA moved to Georgia's newer K-12 standards. CourseSmith drafts plans from your district's textbook, and you paste the Georgia standard you target and confirm it in GaDOE documents.",
    definition:
      "The Georgia Standards of Excellence (GSE) is the set of K-12 content standards published by the Georgia Department of Education under the State Board of Education, still used for subjects such as science and social studies.",
    takeaways: [
      "Georgia's K-12 Mathematics Standards fully replaced the GSE for math beginning in the 2023-24 school year.",
      "The State Board approved Georgia's K-12 ELA Standards in May 2023, and they were fully implemented in 2025-26 with revised assessments.",
      "GSE science codes such as S4E1 and social studies codes such as SS5H1 remain the codes teachers cite in those subjects.",
      "Georgia's new math codes follow grade, big idea, standard and learning objective, as in 5.PAR.6.1.",
      "Georgia codes on a CourseSmith plan are added by the teacher from GaDOE documents, since CourseSmith builds from the uploaded textbook and assigns no codes.",
    ],
    sections: [
      {
        heading: "Which Georgia subjects still use the GSE?",
        paragraphs: [
          "Science and social studies still use the Georgia Standards of Excellence, while math and English language arts have their own newer documents. A teacher searching for GSE math or ELA codes may be reading superseded material.",
        ],
        table: {
          caption: "Georgia standards by subject",
          columns: ["Subject", "Current Georgia standards", "Status"],
          rows: [
            [
              "Mathematics",
              "Georgia's K-12 Mathematics Standards",
              "Replaced GSE math beginning 2023-24",
            ],
            [
              "English language arts",
              "Georgia's K-12 English Language Arts Standards",
              "Approved May 2023, fully implemented 2025-26",
            ],
            ["Science", "Georgia Standards of Excellence in Science", "Current GSE"],
            ["Social studies", "Georgia Standards of Excellence in Social Studies", "Current GSE"],
          ],
        },
      },
      {
        heading: "How do you read a GSE science or social studies code?",
        paragraphs: [
          "GSE science codes start with S, then the grade and a letter for the field, then the standard number. S4E1 asks fourth graders to obtain, evaluate and communicate information to compare and contrast the physical attributes of stars and planets.",
          "Social studies codes start with SS, then the grade, a letter for the strand and a number, followed by lettered elements. SS5H1 asks students to describe how life changed in America at the turn of the century, and elements a, b and c list the people and changes to cover.",
        ],
      },
      {
        heading: "How do Georgia's new math codes work?",
        paragraphs: [
          "Georgia's math standards are grouped into big ideas, then grade-level standards, then detailed learning objectives. The K-8 big ideas are Numerical Reasoning (NR), Patterning and Algebraic Reasoning (PAR), Geometric and Spatial Reasoning (GSR) and Measurement and Data Reasoning (MDR), with MP for the mathematical practices.",
          "A code such as 5.PAR.6.1 means grade 5, patterning and algebraic reasoning, standard 6, learning objective 1: generate two numerical patterns using two given rules. High school courses add big ideas such as Functional and Graphical Reasoning (FGR), Data and Statistical Reasoning (DSR) and Mathematical Modeling (MM).",
        ],
      },
      {
        heading: "Which Georgia tests measure the standards?",
        paragraphs: [
          "Georgia Milestones end-of-grade tests cover ELA and math in grades 3 to 8, science in grades 5 and 8, and social studies in grade 8. High school students take end-of-course tests in selected courses, and GaDOE has changed that list in recent years, so check the current course list.",
          "GaDOE noted that 2025-26 ELA results would follow a standard-setting process because of the revised ELA standards. When a test is rebuilt around new standards, compare your unit plans with the updated test blueprints.",
        ],
      },
      {
        heading: "How do Georgia teachers plan with CourseSmith?",
        paragraphs: [
          "Start by confirming which Georgia document governs your subject, then let CourseSmith draft from your textbook. The plan stays tied to your chapters, and the Georgia code comes from GaDOE.",
        ],
        steps: [
          {
            name: "Confirm the right document",
            text: "Check whether your course uses a GSE document or one of Georgia's newer K-12 math or ELA documents.",
          },
          {
            name: "Upload the course textbook",
            text: "Add the PDF or DOCX with book name, subject and grade, then rename or remove topics so they match your pacing.",
          },
          {
            name: "Build the term schedule",
            text: "Create an academic schedule with your weeks, hours per week and lecture length to get a week-by-week outline with chapter references.",
          },
          {
            name: "Target the standard in Co-Pilot",
            text: "Paste the standard and its elements or learning objective into Co-Pilot and ask for an activity covering each element.",
          },
          {
            name: "Plan, assess and verify",
            text: "Generate the lesson plan and an assignment or test paper as a Word file, then check the code against GaDOE before filing it.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't I find GSE math standards for this year?",
        a: "Georgia's K-12 Mathematics Standards replaced the GSE for math starting in 2023-24, and GaDOE's transition guidance says the new course standards completely replace the previous ones. Codes now use big ideas, such as 5.PAR.6.1, so older GSE math codes on lesson plans or resources should be updated.",
      },
      {
        q: "Does CourseSmith align plans to the Georgia standards?",
        a: "No. GaDOE has not reviewed CourseSmith, and the tool assigns no GSE, math or ELA codes to what it drafts. It drafts from the textbook you upload. You paste the Georgia standard into Co-Pilot when you want a targeted activity and check the code in the GaDOE document.",
      },
      {
        q: "How should I handle lettered elements in a social studies standard?",
        a: "Treat each lettered element as a planning target. A standard such as SS5H1 lists several people and developments in its elements, so a unit usually spreads them across lessons. List the specific element on each daily plan so an observer can see which part of the standard you are teaching.",
      },
      {
        q: "Where do the old georgiastandards.org links go?",
        a: "The georgiastandards.org address now redirects to a GaDOE page about retiring that site. Use current GaDOE subject pages and the documents GaDOE posts for each subject, and replace old bookmarks in your curriculum maps so colleagues reach the current versions.",
      },
    ],
    sources: [
      {
        label: "GaDOE: English Language Arts",
        url: "https://gadoe.org/learning/english-language-arts/",
      },
      {
        label: "GaDOE: Georgia's K-12 Mathematics Standards Transition Support Document",
        url: "https://lor2.gadoe.org/gadoe/file/2cda3401-c9ed-47f7-8fbc-354808bbce0b/1/GaDOE-Mathematics-Standards-Transition-Support-Document.pdf",
      },
      {
        label: "GaDOE: Georgia's K-12 Mathematics Standards Explanation of Changes",
        url: "https://lor2.gadoe.org/gadoe/file/836e9559-396c-4feb-b0f1-7cdb47371678/1/Georgias-K-12-Mathematics-Standards-Explanation-of-Changes.pdf",
      },
      {
        label: "GaDOE: Georgia Milestones Assessment System",
        url: "https://gadoe.org/assessment-accountability/georgia-milestones/",
      },
    ],
    related: [
      "/standards/florida-best",
      "/features/ai-teaching-assistant",
      "/use-cases/social-studies",
      "/standards/common-core",
    ],
    primaryKeyword: "georgia standards of excellence lesson plans",
    secondaryKeywords: [
      "gse lesson plans",
      "georgia k-12 mathematics standards lesson plans",
      "georgia milestones lesson planning",
      "gse science lesson plans",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Georgia",
      code: "US-GA",
      framework: "Georgia Standards of Excellence (GSE)",
      adoptingBody: "Georgia State Board of Education",
      officialUrl: "https://gadoe.org/learning/social-studies/",
    },
  },
];
