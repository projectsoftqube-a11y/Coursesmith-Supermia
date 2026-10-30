import type { ContentPage } from "./types";

export const STANDARDS_PAGES_E: ContentPage[] = [
  // ---------------------------------------------------------------- Louisiana
  {
    slug: "louisiana",
    group: "standards",
    navLabel: "Louisiana",
    navBlurb: "Louisiana Student Standards, BESE review cycles and LEAP 2025 tests",
    metaTitle: "Louisiana Standards Lesson Plans and LEAP | CourseSmith",
    metaDescription:
      "Plan Louisiana Student Standards lessons from your textbook. Read math and ELA codes, track the 2026 ELA revision and LEAP 2025 tests. Start free.",
    eyebrow: "Louisiana standards",
    h1: "Louisiana Student Standards lesson plans built from your own textbook",
    answer:
      "Louisiana standards lesson plans target the Louisiana Student Standards, which the Board of Elementary and Secondary Education (BESE) adopts and LEAP 2025 measures. CourseSmith drafts plans and quizzes from the textbook you upload. You paste the standard you are teaching, such as a math code like 3.NBT.A.3, and confirm it in LDOE's documents.",
    definition:
      "The Louisiana Student Standards are the K-12 academic expectations adopted by the Louisiana Board of Elementary and Secondary Education that set out what students should learn in each grade or course in Louisiana public schools.",
    takeaways: [
      "BESE adopts the Louisiana Student Standards, and the Louisiana Department of Education says BESE policy sets a regular seven-year review cycle for each subject.",
      "A K-8 Louisiana math code such as 3.NBT.A.3 reads as grade, domain, cluster and standard number, while high school codes start with a course abbreviation such as A1 for Algebra I.",
      "BESE approved revised K-12 English language arts standards in 2026 that add cursive and a clearer grammar progression, and LDOE says they take effect in 2027-28.",
      "LEAP 2025 tests English language arts, math, science and social studies, with end-of-course tests in high school courses such as English I, Algebra I and Biology.",
      "CourseSmith does not tag Louisiana standard codes, so teachers add and verify each code themselves.",
    ],
    sections: [
      {
        heading: "Who adopts the Louisiana Student Standards?",
        paragraphs: [
          "BESE adopts the standards, and each subject is published as a numbered BESE bulletin, such as Bulletin 141 for English language arts and Bulletin 142 for mathematics. LDOE's ELA standards document says the standards set what students will learn, while decisions about how to teach them are left to local districts, schools and teachers.",
          "Subjects are reviewed on a rolling basis. LDOE describes a regular seven-year review cycle under BESE policy: the physical education review began in 2025, replacing standards set in 2017, and BESE approved revised physical education standards in August 2026.",
        ],
      },
      {
        heading: "How do you read a Louisiana math standard code?",
        paragraphs: [
          "LDOE's math documents give K-8 codes four parts. In 3.NBT.A.3, the 3 is the grade, NBT is the Number and Operations in Base Ten domain, A is the first cluster in that domain and the final 3 is the standard number.",
          "High school codes have five parts: a course abbreviation, such as A1 for Algebra I, GM for Geometry or A2 for Algebra II, then the conceptual category, the domain, the cluster letter and the standard number. Write the full code in your plan so a colleague can find the exact standard in the course document.",
        ],
        table: {
          caption: "Anatomy of the Louisiana grade 3 math code 3.NBT.A.3",
          columns: ["Position", "Value", "Meaning"],
          rows: [
            ["Grade", "3", "Grade 3"],
            ["Domain", "NBT", "Number and Operations in Base Ten"],
            ["Cluster", "A", "First cluster heading in the domain"],
            ["Standard", "3", "Third standard in that cluster"],
          ],
        },
      },
      {
        heading: "What changed in Louisiana's 2026 ELA standards?",
        paragraphs: [
          "In 2026, on State Superintendent Cade Brumley's recommendation, BESE approved revised K-12 English language arts standards, the first major revision since the 2015-2016 cycle. LDOE says the update strengthens alignment with the science of reading, gives grammar a clearer progression and adds cursive writing, and that it takes effect in the 2027-28 school year.",
          "ELA codes read strand, grade, then anchor standard. RL.2.1 is Reading Standards for Literature, grade 2, anchor standard 1, and it asks students to show they understand key details by asking and answering who, what, where, when, why and how questions. Some standards have lettered parts, so a lesson aimed at one part cites it as, for example, L.2.1c.",
        ],
      },
      {
        heading: "What is happening with the math and social studies standards?",
        paragraphs: [
          "Math went through the same 2025 review as ELA. BESE's March 2026 meeting summary describes proposals to repeal and re-establish Bulletin 142, the math standards, and LDOE now posts Standards Resource Guides for the 2025 Louisiana Student Standards for Mathematics. Check LDOE's math planning page to see which version applies to your grade this year.",
          "Social studies teachers work from the Louisiana Student Standards for Social Studies (2022). LDOE built LEAP social studies field tests for grades 3 to 8 and high school Civics to measure those standards.",
        ],
      },
      {
        heading: "Which LEAP 2025 tests measure the standards?",
        paragraphs: [
          "LEAP 2025 covers English language arts, math, science and social studies in grades 3 to 12, and LDOE says the tests measure the knowledge and skills in each grade's content standards. In high school, LEAP tests are given at the end of courses including English I, English II, Algebra I, Geometry, Biology, Civics and U.S. History.",
          "Some of this is changing. LDOE's parent guide says U.S. History will no longer be an assessment-eligible course in 2027-28 and will move to a district-administered assessment, so U.S. History teachers should check how their course is tested before building review units.",
        ],
      },
      {
        heading: "How do Louisiana teachers use CourseSmith with the Louisiana Student Standards?",
        paragraphs: [
          "CourseSmith works from the textbook your school system adopted. The standard comes from you, and the code goes into the plan only after you have checked it.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, then review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Louisiana classroom.",
          },
          {
            name: "Paste the standard",
            text: "Copy the full standard from the LDOE document, for example a 2026 ELA standard with its lettered part, into Co-Pilot and ask which textbook topic fits it best.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for that topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in the official document",
            text: "Open the LDOE standards document or BESE bulletin, confirm the code, its wording and the version in force for your grade, then add it to the plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag lesson plans with Louisiana Student Standards codes?",
        a: "No. CourseSmith does not tag or align output to Louisiana standard codes, and it is not approved by BESE or the Louisiana Department of Education. It drafts from the textbook you upload. You choose the standard, check it in LDOE's documents and write the code into your plan.",
      },
      {
        q: "Should my plans use the 2026 ELA standards yet?",
        a: "LDOE says the revised ELA standards take effect in the 2027-28 school year. Ask your school system which set your 2026-27 plans should cite.",
      },
      {
        q: "How do I read a Louisiana high school math code?",
        a: "High school codes have five parts: the course abbreviation, such as A1 for Algebra I or GM for Geometry, then the conceptual category, the domain, the cluster letter and the standard number. The course companion documents on LDOE's site list every code for that course.",
      },
      {
        q: "Can CourseSmith write LEAP 2025 practice tests?",
        a: "CourseSmith can build practice tests from your textbook chapters, with multiple choice, short answer, long answer and fill in the blanks questions. It has no access to LEAP items and does not predict test content, so compare your test with LDOE's assessment guides for your grade or course.",
      },
      {
        q: "Can I adapt a Louisiana plan for students working below grade level?",
        a: "Yes. Ask Co-Pilot to adapt a lesson's material for a different grade level, then review the result yourself. LDOE also publishes Louisiana Connectors for students with significant disabilities, which carry their own codes, so check those separately if they apply.",
      },
    ],
    sources: [
      {
        label:
          "LDOE: Louisiana strengthens classroom focus on the science of reading, grammar and cursive writing (April 13, 2026)",
        url: "https://doe.louisiana.gov/about/news-releases/release/2026/04/13/louisiana-strengthens-classroom-focus-on-the-science-of-reading--grammar--and-cursive-writing",
      },
      {
        label:
          "LDOE: Louisiana adopts new K-12 Student Standards for Physical Education (August 20, 2026)",
        url: "https://doe.louisiana.gov/about/news-releases/release/2026/08/20/louisiana-adopts-new-physical-education-standards",
      },
      {
        label: "BESE: March 2026 meetings on academic standards review",
        url: "https://bese.louisiana.gov/about-bese/bese-news/2026/03/13/louisiana-bese-concludes-march-meetings-highlighting-ai-innovation-academic-standards-review-and-student-achievement",
      },
      {
        label: "LDOE: K-12 Louisiana Student Standards for Mathematics",
        url: "https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/louisiana-student-standards-for-k-12-math.pdf",
      },
      {
        label: "LDOE: 2026 K-12 Louisiana Student Standards for English Language Arts",
        url: "https://doe.louisiana.gov/docs/default-source/teacher-toolbox-resources/2026-k-12-louisiana-student-standards-for-english-language-arts.pdf",
      },
      {
        label: "LDOE: Parent Guide to the LEAP 2025 Tests",
        url: "https://doe.louisiana.gov/docs/default-source/assessment/parent-guide-to-the-leap-tests.pdf",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/use-cases/english-language-arts",
      "/standards/texas-teks",
      "/standards/common-core",
    ],
    primaryKeyword: "louisiana standards lesson plans",
    secondaryKeywords: [
      "louisiana student standards lesson plans",
      "louisiana student standards math codes",
      "2026 louisiana ela standards",
      "leap 2025 lesson planning",
      "bese standards review",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Louisiana",
      code: "US-LA",
      framework: "Louisiana Student Standards",
      adoptingBody: "Louisiana Board of Elementary and Secondary Education (BESE)",
      officialUrl: "https://www.louisianabelieves.com/academics/louisiana-student-standards-review",
    },
  },

  // ---------------------------------------------------------------- Maine
  {
    slug: "maine",
    group: "standards",
    navLabel: "Maine",
    navBlurb: "Maine Learning Results, grade-span codes and the paused review cycle",
    metaTitle: "Maine Learning Results Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons to the Maine Learning Results from your own textbook. Decode grade-span codes like QR.A.1, see the review pause and MTYA testing. Start free.",
    eyebrow: "Maine standards",
    h1: "Maine Learning Results lesson plans drafted from the textbook you teach",
    answer:
      "Maine standards lesson plans follow the Maine Learning Results, set in Maine Department of Education Rule Chapter 132 and organized by grade span rather than single grades. CourseSmith drafts plans and tests from your textbook. You paste the performance expectation you are teaching, such as a QR.A.1 math expectation, and check it against the official Chapter 132 standards.",
    definition:
      "The Maine Learning Results are Maine's state content standards, set out in Maine Department of Education Rule Chapter 132, that describe what students should know and be able to do from kindergarten to diploma in eight content areas.",
    takeaways: [
      "Maine law directs the Department of Education, in consultation with the State Board of Education, to establish the system of learning results.",
      "Maine standards are written for grade spans, such as Childhood (K-5), Early Adolescence (6-8) and Adolescence (9-Diploma) in math, rather than for single grades.",
      "A Maine math code such as QR.A.1 reads as strand, grade span and standard number, and each standard lists its performance expectations underneath.",
      "The Maine Department of Education has paused its regular standards review while the Maine Learning Results Taskforce created under LD 1701 completes its work.",
      "CourseSmith does not tag Maine Learning Results codes, so teachers confirm every code in the official standards.",
    ],
    sections: [
      {
        heading: "What are the Maine Learning Results?",
        paragraphs: [
          "The Maine Learning Results are the state's content standards, written into Rule Chapter 132, Learning Results: Parameters for Essential Instruction. Title 20-A, section 6209 of Maine law lists the areas they cover: English language arts, mathematics, science and technology, social studies, life and career readiness, visual and performing arts, health and physical education, and world languages.",
          "Maine also has five Guiding Principles that run through every subject: a clear and effective communicator, a self-directed and lifelong learner, a creative and practical problem solver, a responsible and involved citizen, and an integrative and informed thinker. The 2020 math standards show how each principle looks in math, so a plan can name a principle alongside the content standard.",
        ],
      },
      {
        heading: "How do you read a Maine Learning Results code?",
        paragraphs: [
          "The 2020 math standards use a three-part code: strand, grade span, then standard number. QR.A.1 is Quantitative Reasoning, Adolescence (grades 9 to diploma), standard 1: extend the properties of exponents to rational exponents.",
          "Under each standard sit performance expectations, which the document calls the building blocks of the standard. For QR.A.1, the performance expectation HSN.RN.A.1 asks students to explain how the meaning of rational exponents follows from extending the properties of integer exponents. Cite both in a high school plan: the standard says where you are heading, and the performance expectation names what students show.",
        ],
        table: {
          caption: "How the 2020 Maine math standards are organized",
          columns: ["Part of the code", "Options", "Example in QR.A.1"],
          rows: [
            [
              "Strand",
              "QR Quantitative, AR Algebraic, GR Geometric, SR Statistical Reasoning",
              "QR",
            ],
            [
              "Grade span",
              "C Childhood (K-5), EA Early Adolescence (6-8), A Adolescence (9-Diploma)",
              "A",
            ],
            ["Standard number", "Numbered within the strand and grade span", "1"],
          ],
        },
      },
      {
        heading: "When were Maine's standards last revised?",
        paragraphs: [
          "Revisions to Chapter 132 for English language arts, life and career ready, and mathematics took effect on July 18, 2020. The Department said the math standards were reformatted, edited and streamlined to show the progression of learning across grade spans, and that the ELA language strand was moved to the center of the other strands. It also said there was no fixed date by which school administrative units had to make the switch.",
          "Maine's science, technology and engineering standards, adapted heavily from the Next Generation Science Standards, were signed into law on April 19, 2019. Health, physical education, visual and performing arts, and world languages were revised in 2022. From the 2023 review round, the Legislature's Education and Cultural Affairs Committee declined to authorize proposed science standards and proposed social studies standards, and directed the Department to restart social studies rulemaking.",
        ],
      },
      {
        heading: "Why is Maine's standards review on hold?",
        paragraphs: [
          "Maine law tells the commissioner to review the content standards by content area on a seven-year cycle beginning in the 2025-2026 school year. In 2025, the Legislature also passed Resolve LD 1701, which calls for a statewide look at the purpose, structure and efficacy of the Maine Learning Results.",
          "The Maine Department of Education says it has paused the regular review cycle while the Maine Learning Results Taskforce completes its two-year charge. Before you rewrite a unit for new standards, check the Department's standards review page for news from the taskforce.",
        ],
      },
      {
        heading: "Which Maine assessments connect to the standards?",
        paragraphs: [
          "The Maine Through Year Assessment tests math and reading in grades 3 to 8 and in the second year of high school. It is computer-adaptive, so question difficulty adjusts to each student's responses.",
          "Science is tested separately in grade 5, grade 8 and the third year of high school. Students with the most significant cognitive disabilities take the Multi-State Alternate Assessment in math and ELA instead.",
        ],
      },
      {
        heading: "How do Maine teachers use CourseSmith with the Maine Learning Results?",
        paragraphs: [
          "Because Maine writes standards for grade spans, the useful work is deciding which part of the span your class covers this year. CourseSmith drafts from your textbook, and you decide the standard and the grade-level emphasis.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX for your course with its subject and grade, then rename, add or delete the chapters and topics CourseSmith extracts.",
          },
          {
            name: "Set your teaching persona",
            text: "Enter your school, grades and teaching style, or upload a resume, so plans match how you teach in a Maine classroom.",
          },
          {
            name: "Paste the standard and performance expectation",
            text: "Copy the standard, such as QR.A.1, and the performance expectation you are targeting into Co-Pilot, and ask which textbook topics address it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate a lesson plan for the topic, then a short test with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in Chapter 132",
            text: "Check the code and wording in the Department's standards document for your content area, then add it to your plan or proficiency record.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to the Maine Learning Results?",
        a: "No. CourseSmith does not tag or align output to Maine Learning Results codes, and it is not approved by the Maine Department of Education. It drafts from the textbook you upload. You paste the standard and performance expectation you are teaching and confirm the code in the official Chapter 132 standards.",
      },
      {
        q: "My standard covers grades 6-8. How do I plan for just grade 7?",
        a: "Maine's standards are written for grade spans, so start from your school's scope and sequence to see which part of the span grade 7 covers. Upload the grade 7 textbook, paste the Early Adolescence standard into Co-Pilot and ask which chapters build toward it, then check the plan against your local curriculum.",
      },
      {
        q: "Are new Maine standards coming soon?",
        a: "Not on a fixed date. State law sets a seven-year review cycle starting in 2025-2026, but the Department has paused the regular review while the Maine Learning Results Taskforce created under LD 1701 completes its two-year charge. Watch the Department's standards review page.",
      },
      {
        q: "Do Maine math standards still include the Common Core?",
        a: "Yes. The Department says the 2020 math standards still include the Common Core State Standards. The Common Core codes appear as performance expectations, such as HSN.RN.A.1, under Maine's own strand and grade-span codes.",
      },
      {
        q: "Can CourseSmith help me build a schedule for the year?",
        a: "Yes. The Academic Schedules tool takes your planned weeks, hours per week and lesson length and builds a week-by-week plan from your textbook, listing each week's main topic, key objectives and chapter references. Edit any week before you use it.",
      },
    ],
    sources: [
      {
        label: "Maine Revised Statutes, Title 20-A, section 6209: System of learning results",
        url: "https://legislature.maine.gov/statutes/20-A/title20-Asec6209.html",
      },
      {
        label:
          "Maine DOE: Rule Chapter 132, Learning Results: Parameters for Essential Instruction",
        url: "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/Content%20%26%20Standards%20-%20Rule%20Chapter%20132%20Maine%20Learning%20Results%20-%204.3.2026.pdf",
      },
      {
        label: "Maine DOE: Adolescence Mathematics Standards (2020)",
        url: "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/Standards%20&%20Instruction%20-%20Adolescence%20Math%20Standards%20-%202.18.2020.pdf",
      },
      {
        label:
          "Maine DOE Newsroom: ELA, Life and Career Ready, and Mathematics Standards Updated (July 31, 2020)",
        url: "https://mainedoenews.net/2020/07/31/english-language-arts-life-and-career-ready-and-mathematics-standards-updated/",
      },
      {
        label: "Maine DOE: Standards Review",
        url: "https://www.maine.gov/doe/learning/content/standardsreview",
      },
      {
        label: "Maine DOE: Maine Through Year Assessment, Math and Reading",
        url: "https://www.maine.gov/doe/Testing_Accountability/MECAS/NWEA",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/use-cases/middle-school",
      "/standards/ngss",
      "/standards/common-core",
    ],
    primaryKeyword: "maine standards lesson plans",
    secondaryKeywords: [
      "maine learning results lesson plans",
      "maine learning results math codes",
      "chapter 132 maine learning results",
      "maine through year assessment planning",
      "maine guiding principles lesson plans",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Maine",
      code: "US-ME",
      framework: "Maine Learning Results",
      adoptingBody: "Maine Department of Education, through Rule Chapter 132",
      officialUrl: "https://www.maine.gov/doe/learning/diplomas/MaineLearningResults",
    },
  },

  // ---------------------------------------------------------------- Maryland
  {
    slug: "maryland",
    group: "standards",
    navLabel: "Maryland",
    navBlurb: "Revised MCCRS math codes, MCAP today and the MSTAR switch in 2027",
    metaTitle: "Maryland Standards Lesson Plans (MCCRS) | CourseSmith",
    metaDescription:
      "Draft Maryland lesson plans from your textbook. Learn the revised MCCRS math codes, the July 2025 updates and MCAP's move to MSTAR. Start for free.",
    eyebrow: "Maryland standards",
    h1: "Maryland College and Career Ready Standards lesson plans from your textbook",
    answer:
      "Maryland standards lesson plans follow the Maryland College and Career Ready Standards (MCCRS), which the Maryland State Board of Education updated for math in July 2025 with new domain codes. CourseSmith drafts plans and tests from your textbook. You paste the standard you are teaching and confirm its code in MSDE's crosswalks before it goes in your plan.",
    definition:
      "The Maryland College and Career Ready Standards (MCCRS) are the PreK-12 English language arts and mathematics standards adopted by the Maryland State Board of Education that define what Maryland students should learn in each grade or course.",
    takeaways: [
      "MSDE says the Maryland State Board of Education adopted revised MCCRS for mathematics on July 29, 2025, the first revision since 2010.",
      "The revised math standards rename domains, so a grade 1 cluster once coded 1.NBT.C now appears as 1.NOS.E, Number and Operation Sense.",
      "MSDE's math crosswalks list each 2010 code beside its revised code, which makes them the quickest way to update an older unit plan.",
      "Maryland plans to move grades 3-8 ELA and math testing from MCAP to MSTAR starting with the spring 2027 testing window.",
      "CourseSmith does not tag MCCRS codes, so teachers confirm each code in MSDE's documents.",
    ],
    sections: [
      {
        heading: "What did the State Board change in July 2025?",
        paragraphs: [
          "MSDE says the State Board adopted the revised MCCRS for mathematics on July 29, 2025, and gave as its reason that the math standards had not been revised since 2010. At the same meeting, MSDE asked the board to adopt revised English language arts standards for prekindergarten through grade 12.",
          "The ELA revision followed a statewide Standards and Frameworks Validation Committee that MSDE convened in spring 2024. It added a prekindergarten standard and a How Assessed section drawn from MSDE evidence statements, and trimmed repetition in the knowledge and skills sections.",
        ],
      },
      {
        heading: "How do the revised Maryland math codes work?",
        paragraphs: [
          "Revised codes still read grade, domain, cluster and standard, but several domains have new names. MSDE's grade 1 crosswalk shows 1.NOS.E, in a Number and Operation Sense domain, where the 2010 code was 1.NBT.C, and the grade 4 crosswalk moves operations and algebraic thinking content into an Algebraic Thinking domain coded 4.AT.",
          "Some content also changed domains. The grade 3 crosswalk places the old area-counting standard under a geometric reasoning domain as 3.GR.C.6. Before reusing an older lesson plan, look up each 2010 code in the crosswalk for your grade and replace it with the revised one.",
        ],
        table: {
          caption: "Examples from MSDE's revised math crosswalks",
          columns: ["Grade", "Revised code", "What it shows"],
          rows: [
            [
              "Prekindergarten",
              "PK.NOS.B.6",
              "Prekindergarten now has its own coded math standards",
            ],
            ["Grade 1", "1.NOS.E", "Number and Operation Sense cluster, formerly 1.NBT.C"],
            ["Grade 3", "3.GR.C.6", "Area content placed in a geometric reasoning domain"],
            ["Grade 4", "4.AT.A", "Algebraic Thinking domain, cluster A"],
          ],
        },
      },
      {
        heading: "When do the revised math standards reach classrooms?",
        paragraphs: [
          "Implementation is staged by grade band rather than all at once. MSDE's March 2025 math policy draft described districts shifting curriculum in stages, with full PreK-12 implementation of the revised standards and course progression by the 2028-2029 school year.",
          "Your grade's start year depends on that schedule, so check MSDE's revised standards page and your district's math office before you rewrite a unit. Science runs on a separate track: Maryland adopted the Next Generation Science Standards in June 2013.",
        ],
      },
      {
        heading: "How is Maryland testing changing?",
        paragraphs: [
          "The Maryland Comprehensive Assessment Program (MCAP) tests ELA in grades 3 to 8 and 10, and math in grades 3 to 8, Algebra I, Geometry and Algebra II. MCAP also includes the Maryland Integrated Science Assessment in grades 5 and 8, a high school life science test, and a grade 8 social studies test.",
          "MSDE says 2025-26 was the final year of MCAP for grades 3 to 8. Beginning with the spring 2027 window, March 29 to May 28, grades 3 to 8 move to MSTAR in ELA and math, with shorter tests and faster reporting. MSDE says high school, science and social studies tests do not change in 2026-27.",
        ],
      },
      {
        heading: "How do Maryland teachers use CourseSmith with the MCCRS?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district adopted. The revised code comes from MSDE's crosswalk, not from CourseSmith.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and review the chapters and topics CourseSmith maps.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, grade range and teaching style, or upload a resume, so plans fit your Maryland classroom.",
          },
          {
            name: "Paste the revised standard",
            text: "Copy the standard text from MSDE's grade-level document into Co-Pilot and ask which textbook topics match it, noting any content that moved domains.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan with your delivery methods and class length, then a short test with marks and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in MSDE's crosswalk",
            text: "Check the revised code and its 2010 equivalent in the crosswalk for your grade, then add the code to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label plans with Maryland standard codes?",
        a: "No. CourseSmith does not tag or align output to MCCRS codes, and it is not approved by MSDE or the Maryland State Board of Education. It drafts from the textbook you upload. You paste the standard, confirm the code in MSDE's documents and add it to the plan yourself.",
      },
      {
        q: "My unit plans still use 2010 codes like 1.NBT.C. What should I do?",
        a: "Open MSDE's crosswalk for your grade, which lists each 2010 code beside its revised code, and update the plan once your district starts the revised standards. Some content moved to a different domain, so read the revised standard text rather than swapping letters.",
      },
      {
        q: "Will MSTAR test different content from MCAP?",
        a: "MSDE describes MSTAR as a shorter test with faster reporting and more precise scores for grades 3 to 8 in ELA and math, starting in spring 2027. Follow MSDE's assessment page for test blueprints before you build review units for that window.",
      },
      {
        q: "Can CourseSmith build practice tests for Algebra I?",
        a: "Yes. Upload your Algebra I textbook, choose chapters, and set question counts and marks for multiple choice, short answer, long answer and fill in the blanks questions. CourseSmith has no access to MCAP or MSTAR items, so check your test against MSDE's published materials.",
      },
    ],
    sources: [
      {
        label: "MSDE: Revised Maryland College and Career Ready Standards for Mathematics",
        url: "https://marylandpublicschools.org/about/pages/dcaa/math/revised-standards.aspx",
      },
      {
        label: "Maryland State Board of Education: MCCRS in English Language Arts (July 29, 2025)",
        url: "https://www.marylandpublicschools.org/stateboard/Documents/2025/0729/Maryland-College-and-Career-Ready-Standards-in-English-Language-Arts-A.pdf",
      },
      {
        label: "Maryland State Board of Education: PreK-12 Mathematics Policy (March 2025)",
        url: "https://marylandpublicschools.org/stateboard/Documents/2025/0325/Pre-K-12-Comprehensive-Mathematics-Policy-A.pdf",
      },
      {
        label: "MSDE: Maryland Comprehensive Assessment Program (MCAP) Mathematics",
        url: "https://www.marylandpublicschools.org/about/Pages/DAAIT/Assessment/MCAP/Math.aspx",
      },
      {
        label:
          "MSDE: State MCAP Scores Reach Five-Year High (2025-26 results and MSTAR transition)",
        url: "https://news.maryland.gov/msde/2025-26-mcap-scores/",
      },
    ],
    related: [
      "/use-cases/math",
      "/features/quiz-generator",
      "/standards/common-core",
      "/standards/virginia-sol",
    ],
    primaryKeyword: "maryland standards lesson plans",
    secondaryKeywords: [
      "maryland college and career ready standards lesson plans",
      "revised mccrs math standards",
      "mccrs math crosswalk",
      "mstar maryland assessment",
      "mcap lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Maryland",
      code: "US-MD",
      framework: "Maryland College and Career Ready Standards (MCCRS)",
      adoptingBody: "Maryland State Board of Education",
      officialUrl: "https://marylandpublicschools.org/about/pages/dcaa/math/revised-standards.aspx",
    },
  },

  // ---------------------------------------------------------------- Massachusetts
  {
    slug: "massachusetts",
    group: "standards",
    navLabel: "Massachusetts",
    navBlurb: "Curriculum Frameworks by year, Standards Navigator and MCAS",
    metaTitle: "Massachusetts Curriculum Frameworks Lessons | CourseSmith",
    metaDescription:
      "Plan lessons to the Massachusetts Curriculum Frameworks from your textbook. See each framework's year, read codes like 3.NF.A.2 and plan for MCAS.",
    eyebrow: "Massachusetts standards",
    h1: "Massachusetts Curriculum Frameworks lesson plans built from your textbook",
    answer:
      "Massachusetts standards lesson plans follow the Massachusetts Curriculum Frameworks, which the Board of Elementary and Secondary Education adopts subject by subject, from the 2016 science framework to the 2023 health framework. CourseSmith drafts plans and tests from your textbook. You paste the standard, such as 3.NF.A.2, and confirm it in DESE's framework or Standards Navigator.",
    definition:
      "The Massachusetts Curriculum Frameworks are the subject-by-subject learning standards adopted by the Massachusetts Board of Elementary and Secondary Education and published by the Department of Elementary and Secondary Education (DESE) for prekindergarten through grade 12.",
    takeaways: [
      "Massachusetts publishes a separate Curriculum Framework for each subject, each with its own year, such as 2016 for science and technology/engineering and 2023 for comprehensive health and physical education.",
      "The Board of Elementary and Secondary Education adopted the current English language arts and literacy and mathematics frameworks in March 2017.",
      "A Massachusetts math code such as 3.NF.A.2 reads as grade, domain, cluster and standard, and DESE's Standards Navigator links standards to released MCAS questions.",
      "Since Ballot Question 2 in 2024, high school students earn the Competency Determination through district-certified coursework, while MCAS testing continues.",
      "CourseSmith does not tag Massachusetts framework codes, so teachers confirm every code with DESE.",
    ],
    sections: [
      {
        heading: "Which Massachusetts Curriculum Frameworks are current?",
        paragraphs: [
          "Each subject has its own framework, so the year you cite depends on what you teach. DESE's current frameworks page lists the following, and the newer ones reflect each subject's most recent revision.",
        ],
        table: {
          caption: "Current Massachusetts Curriculum Frameworks, as listed by DESE",
          columns: ["Framework", "Year", "Note for planners"],
          rows: [
            [
              "Science and Technology/Engineering",
              "2016",
              "DESE says it was approved for use in 2016, with minor revisions in 2020",
            ],
            ["Digital Literacy and Computer Science", "2016", "K-12 framework"],
            ["English Language Arts and Literacy", "2017", "Board adopted it in March 2017"],
            ["Mathematics", "2017", "Board adopted it in March 2017"],
            [
              "History and Social Science",
              "2018",
              "Supplement and Civics Project Guidebook updated December 2021",
            ],
            ["Arts", "2019", "Current arts framework"],
            ["World Languages", "2021", "Current world languages framework"],
            [
              "Comprehensive Health and Physical Education",
              "2023",
              "Health and physical education courses",
            ],
            ["Career Technical Education (Chapter 74)", "2024", "For Chapter 74 programs"],
          ],
        },
      },
      {
        heading: "How do you read a Massachusetts math standard?",
        paragraphs: [
          "Math codes read grade, domain, cluster, then standard. 3.NF.A.2 is grade 3, Number and Operations, Fractions, cluster A, standard 2: understand a fraction as a number on the number line and represent fractions on a number line diagram. Its lettered parts, 3.NF.A.2.a and 3.NF.A.2.b, split the skill into representing unit fractions and then any fraction a/b.",
          "The cluster heading frames the lesson. Cluster 3.NF.A reads: develop understanding of fractions as numbers for fractions with denominators 2, 3, 4, 6 and 8. Those denominators are a useful boundary when you choose textbook examples and quiz items.",
        ],
      },
      {
        heading: "What changed in the 2017 ELA and math frameworks?",
        paragraphs: [
          "The Board adopted the revised ELA and literacy and mathematics frameworks in March 2017, and DESE published the final versions on June 29, 2017. DESE said the edits after adoption were limited to correcting typos, copyediting guidance and reformatting.",
          "The 2010 math framework marked Massachusetts additions with MA in the code, such as 2.OA.MA.2.a. DESE's detailed revision list shows that the 2017 revision removed the MA designation in places and folded some of that content into standards such as 2.OA.2, so update older plans that cite MA codes.",
        ],
      },
      {
        heading: "Where do Massachusetts teachers find the standards?",
        paragraphs: [
          "DESE's Standards Navigator is the fastest lookup. It lets you browse by subject, grade and domain, shows how standards connect and progress, and links standards to related MCAS questions, tasks and definitions.",
          "The full framework PDFs add the guiding principles and practice standards, such as the eight Standards for Mathematical Practice, and DESE publishes quick reference guides for grade bands. Use the PDF when you need the context around a standard, and the Navigator when you need the exact code fast.",
        ],
      },
      {
        heading: "How does MCAS connect to the frameworks?",
        paragraphs: [
          "MCAS tests are based on the state's learning standards. Students take ELA and math in grades 3 to 8 and 10, science in grades 5 and 8 and once in high school, usually grade 9 or 10, and civics in grade 8.",
          "Ballot Question 2 changed the high school stakes. DESE's guidance says students now earn the Competency Determination for graduation by completing district-certified coursework in ELA, mathematics and a science discipline, while high school MCAS participation remains required by federal and state law.",
        ],
      },
      {
        heading: "How do Massachusetts teachers use CourseSmith with the Curriculum Frameworks?",
        paragraphs: [
          "CourseSmith works from the textbook or curriculum materials your district uses. You bring the framework standard and confirm it in DESE's tools.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grades and teaching style so plans reflect how you teach.",
          },
          {
            name: "Paste the framework standard",
            text: "Copy the standard and its cluster heading from the Standards Navigator into Co-Pilot and ask for an activity that matches its limits, such as the denominators in 3.NF.A.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm with DESE",
            text: "Check the code, its lettered parts and the framework year in DESE's Navigator or framework PDF, then record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align lessons to the Massachusetts Curriculum Frameworks?",
        a: "No. CourseSmith does not tag or align output to framework codes, and it is not approved by DESE or the Board of Elementary and Secondary Education. It drafts from the textbook you upload. You paste the standard, confirm it in DESE's Standards Navigator or framework, and add the code yourself.",
      },
      {
        q: "Which framework year should my plan cite?",
        a: "Cite the year of the current framework for your subject, such as the 2017 Mathematics Framework or the 2018 History and Social Science Framework. DESE's current frameworks page lists each one, so check it if you are unsure whether a newer version exists.",
      },
      {
        q: "Do MCAS scores still matter after Ballot Question 2?",
        a: "Students no longer need MCAS scores to earn the Competency Determination, but DESE says high school MCAS participation is still required, and some programs, such as the Adams Scholarship and the State Seal of Biliteracy, still use MCAS scores. Districts may also use MCAS in local graduation requirements.",
      },
      {
        q: "Can CourseSmith make MCAS-style practice?",
        a: "CourseSmith builds practice tests from your textbook chapters with the question types, marks and difficulty mix you choose. It has no access to MCAS items. Compare your test with released MCAS questions linked from DESE's Standards Navigator.",
      },
      {
        q: "How much does CourseSmith cost for Massachusetts teachers?",
        a: "You can start free: sign-up includes starter credits and needs no credit card. Each generation uses credits after that, and schools or districts can email hello@supermia.ai about volume pricing.",
      },
    ],
    sources: [
      {
        label: "DESE: Current Curriculum Frameworks",
        url: "https://www.doe.mass.edu/frameworks/current.html",
      },
      {
        label:
          "DESE: 2017 Curriculum Frameworks for ELA and Literacy and Mathematics (June 29, 2017)",
        url: "https://www.doe.mass.edu/news/news.aspx?id=24446",
      },
      {
        label: "DESE: Standards Navigator, Grade 3 Mathematics",
        url: "https://www.doe.mass.edu/frameworks/search/SubjectSearch.aspx?L1=Mathematics&L2=Mathematics.3&L3=Mathematics.3.OA%2CMathematics.3.NBT%2CMathematics.3.NF%2CMathematics.3.MD%2CMathematics.3.G",
      },
      {
        label: "DESE: 2017 Mathematics Framework Detailed Revisions",
        url: "https://www.doe.mass.edu/frameworks/math/2017-06revisions.pdf",
      },
      {
        label: "DESE: Massachusetts Comprehensive Assessment System",
        url: "https://www.doe.mass.edu/mcas/",
      },
      {
        label: "DESE: Update on Student Competency Determinations (December 11, 2024)",
        url: "https://www.doe.mass.edu/commissioner/spec-advisories/2024-1211student-cd-update.html",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/use-cases/elementary-school",
      "/standards/new-york",
      "/standards/common-core",
    ],
    primaryKeyword: "massachusetts standards lesson plans",
    secondaryKeywords: [
      "massachusetts curriculum frameworks lesson plans",
      "massachusetts standards navigator",
      "2017 massachusetts math framework",
      "mcas lesson planning",
      "massachusetts curriculum frameworks list",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Massachusetts",
      code: "US-MA",
      framework: "Massachusetts Curriculum Frameworks",
      adoptingBody: "Massachusetts Board of Elementary and Secondary Education",
      officialUrl: "https://www.doe.mass.edu/frameworks/current.html",
    },
  },

  // ---------------------------------------------------------------- Minnesota
  {
    slug: "minnesota",
    group: "standards",
    navLabel: "Minnesota",
    navBlurb: "Minnesota's ten-year standards cycle, benchmark codes and the MCA",
    metaTitle: "Minnesota Standards Lesson Plans and MCA | CourseSmith",
    metaDescription:
      "Plan Minnesota K-12 Academic Standards lessons from your textbook. See which year each subject takes effect, read benchmark codes and prep for the MCA.",
    eyebrow: "Minnesota standards",
    h1: "Minnesota Academic Standards lesson plans grounded in your textbook",
    answer:
      "Minnesota standards lesson plans follow the Minnesota K-12 Academic Standards, which the commissioner of education revises on a ten-year cycle set in state law and adopts through rulemaking. CourseSmith drafts plans and tests from your textbook. You paste the benchmark you are teaching, such as science benchmark 5L.1.2.1.3, and confirm it in MDE's standards document.",
    definition:
      "The Minnesota K-12 Academic Standards are the statewide standards and benchmarks that the Minnesota commissioner of education adopts by rule for language arts, mathematics, science, social studies, physical education and the arts, with separate rules for health.",
    takeaways: [
      "Minnesota Statutes section 120B.021 requires the commissioner to review and revise the academic standards on a ten-year cycle, with a set start year for each subject.",
      "The 2019 science standards were fully implemented in 2024-25, and the MCA-IV began assessing them that year.",
      "Under MDE's schedule, the 2021 social studies standards reach full implementation in 2026-27, and the 2022 math standards in 2027-28.",
      "Minnesota benchmark codes are numeric, so science benchmark 5L.1.2.1.3 reads as grade and content area, strand, substrand, standard and benchmark.",
      "CourseSmith does not tag Minnesota benchmark codes, so teachers confirm each one in MDE's documents.",
    ],
    sections: [
      {
        heading: "Who sets Minnesota's academic standards?",
        paragraphs: [
          "Minnesota has no state board of education, so the commissioner of education adopts the standards through the state's rulemaking process under chapter 14. Minnesota Statutes section 120B.021 lists the required subjects: language arts, mathematics, science, social studies, physical education, health and the arts.",
          "The law says standards must be clear, concise, objective, measurable and grade-level appropriate, and must not require a specific teaching method or curriculum. Districts and charter schools set their own standards for world languages and career and technical education.",
        ],
      },
      {
        heading: "When does each Minnesota subject change?",
        paragraphs: [
          "The statute starts each subject's review in a fixed school year, and full implementation follows a few years after the standards become rules. MDE's schedule puts the next science revision in 2028-29, English language arts in 2029-30, social studies in 2030-31 and mathematics in 2031-32, and the statute starts the physical education review in 2026-27.",
        ],
        table: {
          caption: "Minnesota standards cycle by subject, from state law and MDE's schedule",
          columns: ["Subject", "Review began", "Current standards", "Full implementation"],
          rows: [
            ["Science", "2018-19", "2019 standards", "2024-25"],
            ["English language arts", "2019-20", "2020 standards", "2025-26"],
            ["Social studies", "2020-21", "2021 standards", "2026-27"],
            [
              "Mathematics",
              "2021-22",
              "2022 standards",
              "2027-28; the 2007 standards apply until then",
            ],
          ],
        },
      },
      {
        heading: "How do you read a Minnesota benchmark code?",
        paragraphs: [
          "Science benchmarks carry a five-part code. In 5L.1.2.1.3, 5L is grade 5 Life Science, 1 is the strand Exploring phenomena or engineering problems, 2 is the substrand Planning and carrying out investigations, 1 is the standard and 3 is the benchmark: plan and conduct an investigation to obtain evidence that plants get the materials they need for growth chiefly from air and water.",
          "Each science benchmark also points back to A Framework for K-12 Science Education, as in (P: 3, CC: 5, CI: LS1) for practice 3, crosscutting concept 5 and core idea LS1. The 2022 math benchmarks use four numbers instead: MDE's example 0.2.4.3 is kindergarten, strand 2 Spatial Reasoning, anchor standard 4, benchmark 3.",
        ],
      },
      {
        heading: "What is changing in Minnesota classrooms right now?",
        paragraphs: [
          "Social studies teachers are in the first year of required full implementation of the 2021 standards in 2026-27. Mathematics teachers are on a longer runway: the 2022 math rules were published in the State Register on April 7, 2025, and MDE says the new standards are fully implemented in 2027-28, with the 2007 standards in place until then.",
          "For math, this means a 2026-27 plan may need to cite the 2007 benchmark while you prepare units for the 2022 version. Note which version a plan uses so the switch in 2027-28 is easier.",
        ],
      },
      {
        heading: "Which MCA tests measure the standards?",
        paragraphs: [
          "The Minnesota Comprehensive Assessments test reading in grades 3 to 8 and 10, mathematics in grades 3 to 8 and 11, and science in grades 5 and 8 and once in high school. The science standards document says the MCA-IV began assessing the 2019 science standards in 2024-25.",
          "Students with significant cognitive disabilities may take an alternate test, the MTAS or Alternate MCA, instead. Check MDE's test specifications to see which math standards each year's MCA assesses before you change a math review unit for 2027-28.",
        ],
      },
      {
        heading: "How do Minnesota teachers use CourseSmith with the Minnesota Academic Standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district uses. You choose the benchmark and check which version of the standards applies this year.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, then review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grades and teaching style so plans fit your Minnesota classroom.",
          },
          {
            name: "Paste the benchmark",
            text: "Copy the full benchmark, including its framework reference for science, into Co-Pilot and ask for an investigation or activity that matches it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in MDE's document",
            text: "Check the benchmark code, wording and standards year in MDE's document for your subject, then add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Minnesota benchmark codes?",
        a: "No. CourseSmith does not tag or align output to Minnesota benchmark codes, and it is not approved by the Minnesota Department of Education. It drafts from the textbook you upload. You paste the benchmark, confirm it in MDE's standards document and add the code yourself.",
      },
      {
        q: "Should my math plans use the 2007 or 2022 standards?",
        a: "MDE says the 2022 math standards are fully implemented in 2027-28 and the 2007 standards remain in place until then. Ask your district which version it wants in 2026-27 plans, and label each plan with the version so you can update it later.",
      },
      {
        q: "Why is there no state board approval date for Minnesota standards?",
        a: "Minnesota has no state board of education for this. The commissioner of education adopts the standards as rules through the chapter 14 rulemaking process, so the dates that matter are rule adoption and the full implementation year.",
      },
      {
        q: "Can CourseSmith help plan a whole science year?",
        a: "Yes. The Academic Schedules tool takes your planned weeks, hours per week and lesson length and builds a week-by-week plan from your textbook, with each week's main topic, key objectives and chapter references. Check the sequence against your district's science scope.",
      },
    ],
    sources: [
      {
        label: "Minnesota Statutes section 120B.021: Required academic standards",
        url: "https://www.revisor.mn.gov/statutes/cite/120B.021",
      },
      {
        label: "MDE: Minnesota Academic Standards in Science, Final (May 2022, edits October 2022)",
        url: "https://www.lrl.mn.gov/docs/2025/mandated/251893.pdf",
      },
      {
        label: "MDE: Academic Standards (K-12)",
        url: "https://education.mn.gov/MDE/dse/stds/",
      },
      {
        label: "MDE: K-12 Mathematics Standards 2022 rulemaking",
        url: "https://education.mn.gov/MDE/about/rule/rule/cr/math/",
      },
      {
        label: "MDE: Minnesota's Academic Standards-Based Assessments",
        url: "https://education.mn.gov/MDE/fam/tests/MinnesotasAcademicStandards-BasedAssessments/",
      },
    ],
    related: [
      "/use-cases/science",
      "/features/curriculum-planner",
      "/standards/ngss",
      "/standards/michigan",
    ],
    primaryKeyword: "minnesota standards lesson plans",
    secondaryKeywords: [
      "minnesota academic standards lesson plans",
      "minnesota benchmark codes explained",
      "2022 minnesota math standards implementation",
      "minnesota science standards 2019",
      "mca lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Minnesota",
      code: "US-MN",
      framework: "Minnesota K-12 Academic Standards",
      adoptingBody: "Minnesota Commissioner of Education, through rulemaking",
      officialUrl: "https://education.mn.gov/MDE/dse/stds/",
    },
  },

  // ---------------------------------------------------------------- Mississippi
  {
    slug: "mississippi",
    group: "standards",
    navLabel: "Mississippi",
    navBlurb: "2025 MS CCRS for ELA and math, 2026 science standards and MAAP",
    metaTitle: "Mississippi Standards Lesson Plans (MS CCRS) | CourseSmith",
    metaDescription:
      "Draft Mississippi CCRS lesson plans from your textbook. See the 2025 ELA and math and 2026 science standards, read MS codes and plan for MAAP. Start free.",
    eyebrow: "Mississippi standards",
    h1: "Mississippi College- and Career-Readiness Standards lesson plans from your textbook",
    answer:
      "Mississippi standards lesson plans follow the Mississippi College- and Career-Readiness Standards (MS CCRS), adopted by the State Board of Education, with 2025 ELA and math standards required from 2025-26 and 2026 science standards from 2026-27. CourseSmith drafts plans and tests from your textbook. You paste the standard, such as 1.NBT.2, and confirm it with MDE.",
    definition:
      "The Mississippi College- and Career-Readiness Standards (MS CCRS) are the K-12 academic standards adopted by the Mississippi State Board of Education that define what students in Mississippi public schools should know in each grade or course.",
    takeaways: [
      "MDE's documents say the 2025 MS CCRS for English language arts and for mathematics became required in the 2025-2026 school year.",
      "The State Board approved the 2026 MS CCRS for Science on November 20, 2025, and MDE set 2026-2027 as the implementation year.",
      "Mississippi math codes such as 1.NBT.2 read as grade, domain and standard number, without the cluster letter used in some other states.",
      "MAAP tests ELA and math in grades 3 to 8, science in grades 5 and 8, and end-of-course exams in Algebra I, English II and Biology.",
      "CourseSmith does not tag MS CCRS codes, so teachers verify each code in MDE's documents.",
    ],
    sections: [
      {
        heading: "Which Mississippi standards are current?",
        paragraphs: [
          "Mississippi updated its core standards in quick succession. MDE's standards page dates the ELA and math standards 2025 and the science standards 2026, and lists standards for the arts, career and technical education, English learners, social-emotional learning and social studies.",
        ],
        table: {
          caption: "Current MS CCRS by subject, from MDE documents",
          columns: ["Subject", "Current standards", "Required or effective"],
          rows: [
            ["English language arts", "2025 MS CCRS for ELA", "School year 2025-2026"],
            ["Mathematics", "2025 MS CCRS for Mathematics", "School year 2025-2026"],
            ["Science", "2026 MS CCRS for Science", "School year 2026-2027"],
            [
              "Social studies",
              "2022 MS CCRS for Social Studies",
              "Five strands: civics, civil rights, economics, geography and history",
            ],
          ],
        },
      },
      {
        heading: "How do you read a Mississippi math standard?",
        paragraphs: [
          "MDE's 2025 math document includes How to Read pages for both grade-level and high school standards. K-8 standards sit under a domain, such as Counting and Cardinality (CC), and a cluster heading, such as Know Number Names and the Count Sequence, with identifiers like K.CC.1.",
          "The identifier itself is three parts: grade, domain abbreviation and standard number. 1.NBT.2 is a grade 1 Number and Operations in Base Ten standard about how the two digits of a two-digit number represent tens and ones. High school standards are grouped by conceptual category, such as Number and Quantity, instead of by grade.",
        ],
      },
      {
        heading: "What changed in the 2025 and 2026 revisions?",
        paragraphs: [
          "MDE published a comparison of the 2016 and 2025 math standards, so teachers can see what moved or changed before reusing older units. The 2025 ELA standards keep four strands, Reading, Writing, Speaking and Listening, and Language, and group grades 9 to 12 into two-year bands.",
          "The 2026 science standards replace the 2018 science framework. MDE describes a light revision informed by a stakeholder survey, since no national updates required a full rewrite. In May 2026, MDE asked the board to start the Administrative Procedures Act process to fix transcription, formatting and other errors found in the science standards, so download the latest version before you cite it.",
        ],
      },
      {
        heading: "Where do Mississippi teachers find support documents?",
        paragraphs: [
          "MDE's Standards Navigators, formerly called Scaffolding Documents, help teachers break down the ELA and math standards by grade, and MDE posts navigators for other subjects such as health, computer science and world languages.",
          "Use the navigator to plan the steps toward a standard and the standards document to confirm the code. Both sit on MDE's site alongside the alternate academic standards for students with significant cognitive disabilities.",
        ],
      },
      {
        heading: "Which MAAP tests measure the standards?",
        paragraphs: [
          "The Mississippi Academic Assessment Program (MAAP) tests English language arts and mathematics every year in grades 3 to 8, and science in grades 5 and 8. In high school, students take end-of-course exams in Algebra I, English II and Biology.",
          "Because the ELA and math standards changed in 2025-26 and science changes in 2026-27, check MDE's assessment pages for blueprints that match the new standards before you build review units.",
        ],
      },
      {
        heading: "How do Mississippi teachers use CourseSmith with the MS CCRS?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district adopted. You supply the standard and confirm its code against the current MDE document.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, then review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Enter your school, grade range and teaching style, or upload a resume, so plans fit how you teach in Mississippi.",
          },
          {
            name: "Paste the standard",
            text: "Copy the standard from the 2025 or 2026 MS CCRS document into Co-Pilot and ask which textbook topic covers it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in the MDE document",
            text: "Check the identifier, wording and standards year in MDE's current document, then add the code to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to the Mississippi standards?",
        a: "No. CourseSmith does not tag or align output to MS CCRS codes, and it is not approved by the Mississippi Department of Education or the State Board of Education. It drafts from the textbook you upload. You paste the standard and confirm its code in MDE's documents.",
      },
      {
        q: "My units were written for the 2016 math standards. What should I check?",
        a: "Start with MDE's comparison of the 2016 and 2025 math standards, which shows what changed. Then paste each 2025 standard into Co-Pilot alongside your textbook topic and ask whether the planned activity still fits the revised wording.",
      },
      {
        q: "Are the 2026 science standards final?",
        a: "The State Board approved them on November 20, 2025, for implementation in 2026-2027. In May 2026, MDE started a process to correct transcription and formatting errors, so download the newest version from MDE's science page before you cite a standard.",
      },
      {
        q: "Can CourseSmith write MAAP practice for English II?",
        a: "CourseSmith can build practice tests and assignments from the English II texts you upload, with the question types, marks and difficulty mix you choose. It has no access to MAAP items, so check your practice against MDE's assessment materials.",
      },
    ],
    sources: [
      {
        label: "MDE: Mississippi College- and Career-Readiness Standards",
        url: "https://mdek12.org/academiceducation/mississipp-college-and-career-readiness-standards/",
      },
      {
        label: "MDE: 2025 MS CCRS for Mathematics",
        url: "https://mdek12.org/wp-content/uploads/sites/38/2025/07/CCRS-MATH-2025-ADA-Version-FINAL-July-14-2025.pdf",
      },
      {
        label: "MDE: 2025 MS CCRS for English Language Arts",
        url: "https://mdek12.org/wp-content/uploads/sites/38/2025/07/2025_MS_CCRS_for_ELA.pdf",
      },
      {
        label: "MDE: 2026 MS CCRS for Science",
        url: "https://mdek12.org/wp-content/uploads/sites/2/2026/07/2026-MS-CCRS-Science_SBE-Approved-07.23.2026_3.pdf",
      },
      {
        label: "MDE: May 21, 2026 State Board agenda",
        url: "https://mdek12.org/mbe/may-21-2026-board-agenda/",
      },
      {
        label: "MDE: Mississippi Academic Assessment Program (MAAP)",
        url: "https://mdek12.org/studentassessment/maap/",
      },
    ],
    related: [
      "/use-cases/high-school",
      "/features/ai-assignment-generator",
      "/standards/georgia-gse",
      "/standards/common-core",
    ],
    primaryKeyword: "mississippi standards lesson plans",
    secondaryKeywords: [
      "mississippi college and career readiness standards lesson plans",
      "2025 ms ccrs math",
      "2026 mississippi science standards",
      "maap lesson planning",
      "ms ccrs codes explained",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Mississippi",
      code: "US-MS",
      framework: "Mississippi College- and Career-Readiness Standards (MS CCRS)",
      adoptingBody: "Mississippi State Board of Education",
      officialUrl:
        "https://mdek12.org/academiceducation/mississipp-college-and-career-readiness-standards/",
    },
  },

  // ---------------------------------------------------------------- Missouri
  {
    slug: "missouri",
    group: "standards",
    navLabel: "Missouri",
    navBlurb: "Missouri Learning Standards, priority standards and MAP tests",
    metaTitle: "Missouri Learning Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Draft Missouri Learning Standards lesson plans from your textbook. Use DESE priority standards, read grade-span codes and plan for MAP tests. Start free.",
    eyebrow: "Missouri standards",
    h1: "Missouri Learning Standards lesson plans drafted from your textbook",
    answer:
      "Missouri standards lesson plans follow the Missouri Learning Standards, whose grade-level and course expectations the Missouri State Board of Education approved in April 2016 and the MAP tests measure. CourseSmith drafts plans and tests from your textbook. You paste the expectation you are teaching, such as a priority standard, and confirm its code in DESE's documents.",
    definition:
      "The Missouri Learning Standards are the K-12 grade-level and course expectations adopted by the Missouri State Board of Education that define the knowledge and skills Missouri students need in each grade and course.",
    takeaways: [
      "Work groups selected under House Bill 1490 wrote Missouri's grade-level expectations in 2014, and the State Board of Education approved them in April 2016.",
      "DESE says the revised standards approved on April 19, 2016, were for implementation beginning in the 2016-2017 school year.",
      "DESE publishes priority standards for ELA and math that name what students need to know, not how teachers should teach it.",
      "Missouri science expectations use grade-span codes such as 6-8.PS1.A.1, which sits under PS1, Matter and Its Interactions.",
      "CourseSmith does not tag Missouri Learning Standards codes, so teachers confirm every code in DESE's documents.",
    ],
    sections: [
      {
        heading: "Where did the Missouri Learning Standards come from?",
        paragraphs: [
          "House Bill 1490 set up the current standards. Work groups selected by legislators wrote the grade-level expectations for grades K-12 in 2014, and after public hearings and comment the Missouri State Board of Education approved them in April 2016.",
          "DESE says the revised standards approved on April 19, 2016, were for implementation beginning in the 2016-2017 school year, and state testing on the new ELA expectations began in 2017-18. DESE's standards files are still the 2016 State Board versions, so a Missouri plan cites the 2016 expectations.",
        ],
      },
      {
        heading: "What are Missouri's priority standards?",
        paragraphs: [
          "Priority standards are a DESE-published subset of the ELA and math expectations to focus on first. DESE says they identify what students need to know but not how students learn or how teachers teach.",
          "Use them to decide which textbook chapters need the most class time. A plan built on a priority standard should still quote the full expectation, since the priority list points to expectations rather than replacing them.",
        ],
      },
      {
        heading: "How do Missouri science codes read?",
        paragraphs: [
          "Science expectations open with a grade or grade span, then the disciplinary core idea, a component letter and a number. 6-8.PS1.A.1 is a middle school expectation in PS1, Matter and Its Interactions, about modeling the atomic composition of molecules, and 9-12.PS1.A.1 is the high school expectation on using the periodic table to predict the properties of elements.",
          "DESE describes its science standards as three-dimensional and adapted from A Framework for K-12 Science Education. DESE also posts an MLS Expectations Coding System document that explains the codes used across ELA, math, science and social studies, so check it when a code format is new to you.",
        ],
        table: {
          caption: "Anatomy of the Missouri science code 6-8.PS1.A.1",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade span", "6-8", "Middle school expectation"],
            ["Core idea", "PS1", "Physical Science 1: Matter and Its Interactions"],
            ["Component", "A", "First component of that core idea"],
            ["Number", "1", "First expectation in that component"],
          ],
        },
      },
      {
        heading: "Where do Missouri teachers find the expectations?",
        paragraphs: [
          "DESE posts the ELA and math expectations as K-5 and 6-12 PDF and Word files and as a K-12 Excel file, which is handy for building a scope and sequence. For math, DESE also publishes expanded expectations by grade and an item specification document that arranges the expectations by domain or strand.",
          "ELA teachers can use DESE's expectations-with-examples documents for each grade band, and science teachers can use the expanded expectations, progressions and crosswalks on DESE's science page.",
        ],
      },
      {
        heading: "Which MAP tests measure the standards?",
        paragraphs: [
          "The Missouri Assessment Program has Grade-Level and End-of-Course tests. All students in grades 3 to 8 in Missouri public and charter schools take Grade-Level tests in English language arts and mathematics, and science in grades 5 and 8.",
          "Four End-of-Course tests are required before graduation: Algebra I, Biology, English II and Government. Optional EOC tests for local use include Algebra II, American History, English I, Geometry, Personal Finance and Physical Science.",
        ],
      },
      {
        heading: "How do Missouri teachers use CourseSmith with the Missouri Learning Standards?",
        paragraphs: [
          "CourseSmith drafts from your district's textbook. The expectation and its code come from DESE's documents, chosen and checked by you.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and edit the chapters and topics CourseSmith extracts.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or fill in your school, grade range and teaching style so plans fit your Missouri classroom.",
          },
          {
            name: "Paste the expectation",
            text: "Copy the expectation, starting with a priority standard where one applies, into Co-Pilot and ask which textbook topics address it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate a plan with your delivery methods and class length, then a short test with marks and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in DESE's documents",
            text: "Check the code and wording in DESE's expectations file or Excel sheet, then add the code to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Missouri Learning Standards codes?",
        a: "No. CourseSmith does not tag or align output to Missouri codes, and it is not approved by DESE or the Missouri State Board of Education. It drafts from the textbook you upload. You paste the expectation, check it in DESE's documents and add the code to your plan.",
      },
      {
        q: "Should I plan from the priority standards or the full expectations?",
        a: "Use both. The priority standards tell you where to spend the most time, and the full expectations give the exact wording and code. DESE notes that the priority standards say what students need to know, not how to teach it, so instructional choices stay with you.",
      },
      {
        q: "Can CourseSmith build practice for the Government end-of-course test?",
        a: "CourseSmith can build practice tests from the government textbook you upload, with multiple choice, short answer, long answer and fill in the blanks questions. It has no access to MAP items, so compare your practice with DESE's assessment materials.",
      },
      {
        q: "Can I adapt a Missouri plan for another grade?",
        a: "Yes. Ask Co-Pilot to adapt a lesson's material for a different grade level, then paste that grade's expectation and check the result yourself. Missouri science uses grade spans such as 6-8, so confirm where your grade sits in the span in your district's curriculum.",
      },
      {
        q: "How much does CourseSmith cost for Missouri teachers?",
        a: "You can start free with starter credits and no credit card. After that, each generation uses credits, and schools or districts can email hello@supermia.ai about volume pricing.",
      },
    ],
    sources: [
      {
        label: "DESE: Missouri Learning Standards",
        url: "https://dese.mo.gov/college-career-readiness/curriculum/missouri-learning-standards",
      },
      {
        label: "DESE: Missouri Learning Standards for Parents",
        url: "https://dese.mo.gov/college-career-readiness/curriculum/mls-for-parents",
      },
      {
        label: "DESE: Priority Standards",
        url: "https://dese.mo.gov/college-career-readiness/curriculum/academic-standards/priority-standards",
      },
      {
        label: "DESE: MLS Science Standards Grades 6-12",
        url: "https://dese.mo.gov/media/pdf/curr-mls-standards-sci-6-12-sboe-2016",
      },
      {
        label: "DESE: Guide to the Missouri Assessment Program",
        url: "https://dese.mo.gov/quality-schools/assessment/guide-missouri-assessment-program",
      },
    ],
    related: [
      "/use-cases/social-studies",
      "/features/quiz-generator",
      "/standards/illinois",
      "/standards/ngss",
    ],
    primaryKeyword: "missouri standards lesson plans",
    secondaryKeywords: [
      "missouri learning standards lesson plans",
      "missouri priority standards",
      "missouri learning standards codes",
      "map end of course lesson planning",
      "missouri grade level expectations",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Missouri",
      code: "US-MO",
      framework: "Missouri Learning Standards",
      adoptingBody: "Missouri State Board of Education",
      officialUrl:
        "https://dese.mo.gov/college-career-readiness/curriculum/missouri-learning-standards",
    },
  },
];
