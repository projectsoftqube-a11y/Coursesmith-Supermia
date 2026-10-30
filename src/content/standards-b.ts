import type { ContentPage } from "./types";

export const STANDARDS_PAGES_B: ContentPage[] = [
  {
    slug: "virginia-sol",
    group: "standards",
    navLabel: "Virginia SOL",
    navBlurb: "Plan Virginia Standards of Learning lessons from your textbook",
    metaTitle: "Virginia SOL Lesson Plans | CourseSmith",
    metaDescription:
      "Build Virginia SOL lesson plans and tests from your division's adopted textbook, then check each code against VDOE's documents. Start free today.",
    eyebrow: "Virginia standards",
    h1: "Virginia SOL lesson plans built from the textbook your division adopted",
    answer:
      "Virginia SOL lesson plans start from the Standards of Learning set by the Virginia Board of Education, and each subject is revised on its own schedule. CourseSmith reads your division's adopted textbook, drafts lesson plans and tests from its chapters, and lets you paste an SOL into its Co-Pilot chat, while you confirm every code against VDOE documents.",
    definition:
      "The Virginia Standards of Learning (SOL) is the set of K-12 content standards approved by the Virginia Board of Education that defines expectations for each grade or course and forms the basis for Virginia's state SOL tests.",
    takeaways: [
      "Virginia revises its Standards of Learning subject by subject, so one school year can run on 2023 math standards and 2018 science standards at the same time.",
      "The Virginia Board of Education approved the 2023 Mathematics SOL on August 31, 2023, and math instruction and state assessments moved to them in 2024-2025.",
      "New SOL tests for the 2023 History and Social Science standards were scheduled for first use in the spring 2026 test administration.",
      "CourseSmith does not tag Virginia SOL codes; it plans from your uploaded textbook, and you confirm each code in VDOE's official standards document.",
    ],
    sections: [
      {
        heading: "Which Virginia SOL documents are current in each subject?",
        paragraphs: [
          "Each subject has its own current SOL document, because Virginia reviews standards on a seven-year cycle instead of all at once. As of October 2026, VDOE bulletins reference the 2023 Mathematics SOL, the 2024 English SOL, the 2018 Science SOL, the 2023 History and Social Science SOL and the 2024 Computer Science SOL.",
          "Check the year printed on a standards document before you plan from it. When English moved to the 2024 SOL, VDOE posted a clean copy and a crosswalk so teachers could see how the expectations shifted from the previous version.",
        ],
        table: {
          caption:
            "Current Virginia SOL by subject and what VDOE has announced (as of October 2026)",
          columns: ["Subject", "Current SOL version", "What VDOE has announced"],
          rows: [
            [
              "Mathematics",
              "2023, approved August 31, 2023",
              "Instruction and state assessments based on the 2023 standards from 2024-2025",
            ],
            [
              "English",
              "2024, approved March 28, 2024",
              "Clean copy and crosswalk document posted for teachers",
            ],
            [
              "History and Social Science",
              "2023, adopted April 2023",
              "New SOL assessments first given in spring 2026, with test blueprints posted",
            ],
            [
              "Science",
              "2018",
              "New end-of-course Earth Science and Chemistry tests first given in spring 2026",
            ],
            ["Computer Science", "2024", "Covered in VDOE's K-5 STEM implementation webinars"],
          ],
        },
      },
      {
        heading: "How are 2023 Virginia math SOL codes written?",
        paragraphs: [
          "A 2023 math SOL code has three parts: the grade, a strand abbreviation and a standard number. In 3.NS.2, the 3 means grade 3, NS is the Number and Number Sense strand, and 2 is the standard's place within that strand.",
          "Other strand abbreviations in the 2023 math documents include CE for Computation and Estimation, MG for Measurement and Geometry, and PFA for Patterns, Functions and Algebra. VDOE's own resources cite codes this way, such as 6.NS.3 and 7.PFA.1 in its Algebra Readiness materials.",
          "When you reuse a plan written before 2024-2025, search the 2023 document for the skill instead of trusting the old code. VDOE's Understanding the Standards documents for the 2023 math SOL add detail on what each standard expects.",
        ],
      },
      {
        heading: "What should a Virginia SOL lesson plan show?",
        paragraphs: [
          "Start with the planning template your school division or principal asks for, then make sure each plan names the exact SOL, states an objective a student can demonstrate, and checks understanding in a way that matches the standard's verb. A plan that says students will compare and order numbers should include a task where they actually compare and order them.",
          "For tested grades and courses, read VDOE's test blueprints next to the standards. VDOE has posted blueprints for the new History and Social Science tests, and students can try released questions through its SOL Practice Items page.",
        ],
      },
      {
        heading: "How do you build a Virginia SOL lesson plan in CourseSmith?",
        paragraphs: [
          "CourseSmith gives you a draft to review, not a finished compliance document. The plan it generates contains learning objectives, an in-depth explanation of the topic, a step-by-step delivery plan for each method you chose, homework and a project idea.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Upload your division's adopted textbook as a PDF or DOCX file up to 40 MB, then enter the book name, subject and grade. CourseSmith organizes it into chapters and topics you can rename or trim.",
          },
          {
            name: "Choose topics and delivery methods",
            text: "Pick the chapter and topics that teach the SOL, choose direct instruction, an interactive activity or game, real-world use cases or a mix, and set the lesson length in minutes.",
          },
          {
            name: "Paste the SOL into Co-Pilot",
            text: "Copy the standard's full wording from the VDOE document into CourseSmith Co-Pilot and ask which parts of your plan address it and what activity could cover a missing piece.",
          },
          {
            name: "Verify and record the code",
            text: "Open the official SOL document for your subject, confirm the code and wording, and write the SOL into your division's lesson plan template.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help you prepare students for SOL tests?",
        paragraphs: [
          "CourseSmith can draft practice tests from your textbook chapters, but it does not reproduce VDOE test items or predict SOL test content. You set how many multiple choice, short answer, long answer and fill-in-the-blank questions to include, the marks for each, and an Easy, Medium and Hard mix.",
          "Use the Show answer toggle to review the answer key, then download the test as an editable Word file. Compare the question style with VDOE's released practice items before you treat any draft as SOL preparation.",
        ],
      },
      {
        heading: "How does a full year of SOL teaching fit into one schedule?",
        paragraphs: [
          "An academic schedule in CourseSmith turns your textbook into a week-by-week plan with a main topic, key objectives and chapter references for each week. Enter the planned weeks, hours per week and lecture duration, then mark weeks Planned or Completed as the year moves.",
          "For courses with spring SOL tests, the schedule shows which chapters still need teaching before the testing window. Check it against your division's pacing guide and testing calendar, since CourseSmith does not know local test dates.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith know the Virginia SOL codes?",
        a: "No. CourseSmith does not tag or match output to SOL codes, and VDOE has not approved or endorsed it. It reads the textbook you upload. If you paste an SOL's wording into Co-Pilot, it can discuss how a lesson addresses that standard, but you confirm the code in the official document.",
      },
      {
        q: "Where are the official Virginia SOL documents?",
        a: "VDOE posts each subject's current standards, along with crosswalks and Understanding the Standards documents, on its K-12 standards and instruction pages at doe.virginia.gov. VDOE also announces revisions and Board approvals through its TeacherDirect and Virginia Education Update email bulletins.",
      },
      {
        q: "Can I use CourseSmith for Virginia science while the 2018 SOL are current?",
        a: "Yes. CourseSmith works from whatever textbook you upload, so a science teacher can plan against the 2018 Science SOL while a math colleague plans against the 2023 Mathematics SOL. Paste the specific standard you are teaching so Co-Pilot works from the version your course uses.",
      },
      {
        q: "Is CourseSmith free for Virginia teachers?",
        a: "CourseSmith is free to start, with free starter credits on sign-up and no credit card required. Each generation uses AI credits after that. School divisions that want volume pricing for several teachers can contact SuperMIA at hello@supermia.ai.",
      },
      {
        q: "Can I adapt an SOL lesson for a different grade?",
        a: "You can ask CourseSmith Co-Pilot to adapt material for a different grade level, which helps when a skill appears in grade 4 and returns in grade 5. Check the adapted version against that grade's SOL, because the same topic can carry a different scope one grade later.",
      },
    ],
    sources: [
      {
        label: "VDOE: Board of Education Approves 2023 Math Standards of Learning",
        url: "https://content.govdelivery.com/accounts/VADOE/bulletins/36ddb55",
      },
      {
        label: "VDOE TeacherDirect, April 10, 2024 (2024 English SOL approval)",
        url: "https://content.govdelivery.com/accounts/VADOE/bulletins/395ab4c",
      },
      {
        label: "VDOE Virginia Education Update, August 15, 2025 (new SOL assessments)",
        url: "https://content.govdelivery.com/accounts/VADOE/bulletins/3edbbe1",
      },
      {
        label: "VDOE: Standards of Learning for Mathematics",
        url: "https://www.doe.virginia.gov/teaching-learning-assessment/instruction/mathematics/standards-of-learning-for-mathematics",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/standards/north-carolina",
      "/use-cases/social-studies",
    ],
    primaryKeyword: "virginia SOL lesson plans",
    secondaryKeywords: [
      "virginia standards of learning lesson plans",
      "2023 math SOL lesson plans",
      "SOL test practice",
      "VDOE standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Virginia",
      code: "US-VA",
      framework: "Virginia Standards of Learning (SOL)",
      adoptingBody: "Virginia Board of Education",
      officialUrl:
        "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction",
    },
  },
  {
    slug: "north-carolina",
    group: "standards",
    navLabel: "North Carolina SCOS",
    navBlurb: "NC Standard Course of Study lessons through the 2026 transition",
    metaTitle: "North Carolina Standard Course of Study Lesson Plans",
    metaDescription:
      "Plan NC Standard Course of Study lessons from your district's textbook, track the 2026 ELA and math transition, and verify codes with NC DPI. Try it free.",
    eyebrow: "North Carolina standards",
    h1: "North Carolina Standard Course of Study lesson plans for a state in transition",
    answer:
      "North Carolina Standard Course of Study lesson plans follow the NCSCOS adopted by the NC State Board of Education, and both ELA and math are moving to 2026 versions. CourseSmith turns your district's textbook into draft plans and tests, accepts an NC standard pasted into Co-Pilot, and leaves code verification to you using NC DPI's official documents.",
    definition:
      "The North Carolina Standard Course of Study (NCSCOS) is the set of K-12 content standards adopted by the NC State Board of Education, which NC DPI's Office of Teaching and Learning reviews, revises and supports in schools.",
    takeaways: [
      "The NC State Board of Education adopted a 2026 ELA Standard Course of Study on January 8, 2026, for implementation in the 2027-2028 school year.",
      "The 2026 K-12 Mathematics Standard Course of Study was adopted on October 1, 2026, and its implementation begins with the 2028-2029 school year.",
      "Until those dates, NC DPI keeps the 2017 ELA standards in place and its math resources support the 2017 K-12 Mathematics Standard Course of Study.",
      "CourseSmith does not add NC codes for you, so every code you record should come from NC DPI's own documents.",
    ],
    sections: [
      {
        heading: "Which NC Standard Course of Study is in force right now?",
        paragraphs: [
          "As of October 2026, North Carolina classrooms teach the 2017 ELA and 2017 math standards while 2026 replacements wait their turn. NC DPI lists the 2026 ELA SCOS for implementation in 2027-2028 and the 2026 K-12 math SCOS for implementation beginning in 2028-2029, after an installation period.",
          "Science moved earlier. NC DPI's science page says the current science standards were approved by the State Board in 2023 and implemented in 2024, while social studies is still in its review phase with no adoption date published.",
        ],
        table: {
          caption: "Where each NCSCOS subject stands, October 2026",
          columns: ["Subject", "Standards taught now", "What comes next"],
          rows: [
            [
              "English Language Arts",
              "2017 ELA SCOS, in place for 2025-2026 and 2026-2027",
              "2026 ELA SCOS, adopted January 8, 2026, implemented 2027-2028",
            ],
            [
              "Mathematics",
              "2017 K-12 Mathematics SCOS",
              "2026 K-12 Mathematics SCOS, adopted October 1, 2026, implemented from 2028-2029",
            ],
            [
              "Science",
              "Standards approved in 2023, implemented in 2024",
              "No revision listed on NC DPI's science page",
            ],
            [
              "Social Studies",
              "Existing standards while review continues",
              "Review data being analyzed by independent researchers",
            ],
          ],
        },
      },
      {
        heading: "How are North Carolina math standard codes written?",
        paragraphs: [
          "North Carolina's 2017 math codes start with an NC prefix, which separates them from Common Core codes. In NC.3.OA.1, NC marks the state standard, 3 is the grade, OA is the Operations and Algebraic Thinking domain, and 1 is the standard number.",
          "Publisher correlation charts sometimes print a Common Core code where your plan needs the NC version, so look the skill up yourself. NC DPI's grade-level unpacking documents, several revised in June 2025, explain what each standard means in classroom terms.",
        ],
      },
      {
        heading: "What do EOG and EOC tests mean for your lesson plans?",
        paragraphs: [
          "NC DPI's End-of-Grade tests measure performance on the Standard Course of Study in reading and mathematics for grades 3 through 8 and in science for grades 5 and 8. End-of-Course tests cover English II, NC Math 1, NC Math 3 and Biology.",
          "If you teach a tested grade or course, plan backward from the standards those tests measure. Keep the transition dates in view too: a grade 4 math plan written today still targets the 2017 standards.",
        ],
      },
      {
        heading: "How do you turn an NCSCOS standard into a CourseSmith lesson?",
        paragraphs: [
          "The workflow starts with the material your district already uses and ends with your own check against NC DPI.",
        ],
        steps: [
          {
            name: "Load the district textbook",
            text: "Upload the textbook your district uses for the course as a PDF or DOCX file of up to 40 MB, type in the subject and grade, and review the chapters and topics CourseSmith lays out.",
          },
          {
            name: "Set up your teaching persona",
            text: "Add your experience, grade range and teaching style, or upload a resume to fill them in, so plans read like the way you already teach.",
          },
          {
            name: "Generate the plan",
            text: "Select the topics that carry the NC standard, choose one or more delivery methods, and enter the lesson length in minutes.",
          },
          {
            name: "Check against the unpacking document",
            text: "Paste the standard and its unpacking notes into Co-Pilot, ask what the plan misses, then confirm the NC code on NC DPI's site before you record it.",
          },
        ],
      },
      {
        heading: "How should you plan across the 2026 transition?",
        paragraphs: [
          "Plan for the standards your students are taught and tested on this year, and treat the 2026 documents as preparation. For ELA that means the 2017 standards through 2026-2027; for math, the current standards stay in effect through the 2027-2028 installation period.",
          "When the new standards arrive, you can plan again from the same uploaded textbook if your district keeps it. Paste the 2026 standard text into Co-Pilot and ask how an existing lesson compares, so the shift becomes a revision task instead of a blank page.",
        ],
      },
      {
        heading: "Can CourseSmith write EOG-style practice tests?",
        paragraphs: [
          "CourseSmith can draft chapter tests from your textbook, but it does not copy NC DPI released forms or claim to match EOG or EOC items. Choose chapters or the full book, decide how many questions of each type to include, from multiple choice to fill in the blanks, assign marks, and pick an Easy, Medium and Hard mix.",
          "Download the result as an editable Word file. Then compare it with NC DPI's released test forms, such as the grade 3 mathematics EOG released form, to judge whether difficulty and format suit your students.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to the NC Standard Course of Study?",
        a: "No. CourseSmith does not label output with NCSCOS codes, and NC DPI has not reviewed or approved it. Plans come from the textbook you upload. You can paste an NC standard into Co-Pilot and ask how a lesson addresses it, then confirm the code yourself on NC DPI's site.",
      },
      {
        q: "Where does NC DPI publish the standards?",
        a: "NC DPI's K-12 Standards, Curriculum and Instruction pages link to each subject, including Arts Education, English Language Arts, Healthful Living, Mathematics, Science, Social Studies and World Languages. Career and Technical Education, Computer Science and Digital Learning standards sit on their own office pages.",
      },
      {
        q: "Should I start using the 2026 math standards now?",
        a: "Not for regular instruction unless your district says so. NC DPI states that the current math standards stay in effect through the 2027-2028 installation period and that implementation of the 2026 standards begins in 2028-2029. Reading the new document early still helps you spot what will change.",
      },
      {
        q: "Can CourseSmith help K-2 teachers in North Carolina?",
        a: "Yes. Early-grade teachers can upload their reading or math materials and generate lessons that use an interactive activity or game. NC DPI also lists a K-2 Math Assessment resource on its mathematics page, which is worth reading alongside the standards when you plan.",
      },
      {
        q: "What does CourseSmith cost a North Carolina teacher?",
        a: "Nothing to start. New accounts receive free starter credits, and sign-up needs no credit card. Usage is credit-based, with credits used for each generation. Districts that want volume pricing can contact SuperMIA at hello@supermia.ai.",
      },
    ],
    sources: [
      {
        label: "NC DPI: K-12 Standards, Curriculum and Instruction",
        url: "https://www.dpi.nc.gov/districts-schools/classroom-resources/k-12-standards-curriculum-and-instruction",
      },
      {
        label: "NC DPI: Science Standard Course of Study",
        url: "https://www.dpi.nc.gov/districts-schools/classroom-resources/k-12-standards-curriculum-and-instruction/standard-course-study/science",
      },
      {
        label: "NC DPI: End-of-Grade (EOG) tests",
        url: "https://www.dpi.nc.gov/districts-schools/accountability-and-testing/state-tests/end-grade-eog",
      },
      {
        label: "NC DPI: End-of-Course (EOC) tests",
        url: "https://www.dpi.nc.gov/districts-schools/accountability-and-testing/state-tests/end-course-eoc",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/virginia-sol",
      "/standards/common-core",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "north carolina standard course of study lesson plans",
    secondaryKeywords: [
      "NCSCOS lesson plans",
      "NC math standards lesson plans",
      "EOG practice tests",
      "2026 NC ELA standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "North Carolina",
      code: "US-NC",
      framework: "North Carolina Standard Course of Study (NCSCOS)",
      adoptingBody: "North Carolina State Board of Education",
      officialUrl:
        "https://www.dpi.nc.gov/districts-schools/classroom-resources/k-12-standards-curriculum-and-instruction",
    },
  },
  {
    slug: "pennsylvania",
    group: "standards",
    navLabel: "Pennsylvania Core",
    navBlurb: "PA Core Standards lessons with codes you can read and verify",
    metaTitle: "Pennsylvania Core Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Draft Pennsylvania Core Standards lesson plans and tests from your school's textbook, decode PA Core codes, and verify them with PDE. Start for free.",
    eyebrow: "Pennsylvania standards",
    h1: "Pennsylvania Core Standards lesson plans that start from your school's textbook",
    answer:
      "Pennsylvania Core Standards lesson plans follow academic standards that the Pennsylvania State Board of Education issues as state regulations, so they must anchor curriculum in public schools. CourseSmith builds plans and tests from your school's textbook, lets you paste a PA Core standard into Co-Pilot, and leaves code checks to you using PDE and SAS documents.",
    definition:
      "The Pennsylvania Core Standards is the name for Pennsylvania's academic standards in English language arts and mathematics, which took effect on March 1, 2014, as state regulations issued by the Pennsylvania State Board of Education.",
    takeaways: [
      "Pennsylvania's academic standards are promulgated as state regulations, so they must be used as the basis for curriculum and instruction in public schools.",
      "The PA Core Standards for English language arts and mathematics took effect on March 1, 2014.",
      "A PA Core math code such as CC.2.1.3.C.1 encodes the subject, standard area, grade, strand and standard number in fixed positions.",
      "Pennsylvania's newer science, technology and engineering standards took effect on July 1, 2025.",
      "CourseSmith does not tag PA Core codes; teachers confirm every code in PDE's official documents.",
    ],
    sections: [
      {
        heading: "Why do Pennsylvania's standards carry extra weight?",
        paragraphs: [
          "Pennsylvania's standards have the force of regulation. The State Board of Education says the standards are promulgated as state regulations and must be used as the basis for curriculum and instruction in public schools, with curriculum, instruction and assessment requirements set out in its Chapter 4 regulations.",
          "The standards documents themselves say they are not a curriculum. School entities use them to build a local curriculum, so a strong lesson plan traces back to both the standard and the curriculum your school adopted.",
        ],
      },
      {
        heading: "How do you read a PA Core Standards code?",
        paragraphs: [
          "A PA Core math code reads left to right from broad to narrow. CC.2.1.3.C.1 is a grade 3 mathematics standard in Numbers and Operations, strand C, which covers Numbers and Operations in Fractions.",
          "Math has four standard areas: 2.1 Numbers and Operations, 2.2 Algebraic Concepts, 2.3 Geometry, and 2.4 Measurement, Data, and Probability. PDE notes that these areas reflect the reporting categories in the Assessment Anchors and Eligible Content.",
        ],
        table: {
          caption: "Anatomy of the PA Core math code CC.2.1.3.C.1",
          columns: ["Position", "Value", "Meaning"],
          rows: [
            ["Prefix", "CC", "Marks a PA Core Standard"],
            ["Subject", "2", "Mathematics"],
            ["Standard area", "1", "Numbers and Operations"],
            ["Grade", "3", "Grade 3"],
            ["Strand", "C", "Numbers and Operations: Fractions"],
            ["Standard number", "1", "First standard in that strand for the grade"],
          ],
        },
      },
      {
        heading: "What are Assessment Anchors and Eligible Content?",
        paragraphs: [
          "Assessment Anchors and Eligible Content are PDE documents that add detail to the standards. PDE's math standards document describes them as closely aligned with the revised standards and an invaluable source for greater detail.",
          "For a tested grade, read the eligible content under a standard before you choose textbook topics. The PSSA assesses English language arts and math in grades 3 through 8 and science in grades 5 and 8, while the Keystone Exams are end-of-course assessments in Algebra I, Literature and Biology.",
        ],
      },
      {
        heading: "Which Pennsylvania standards changed recently?",
        paragraphs: [
          "Science and several career and finance subjects have new standards, while ELA and math remain the 2014 PA Core. Integrated science, environment, ecology, technology and engineering standards published in July 2022 took effect July 1, 2025, and new Career Education and Work, Economics, Family and Consumer Sciences and Personal Finance standards took effect July 1, 2026.",
          "The State Board lists Arts and Humanities, Civics and Government, Geography, History, and Health, Safety and Physical Education standards that took effect January 11, 2003. If your science textbook was written before 2025, compare it with the newer environmental literacy and sustainability content before relying on it.",
        ],
      },
      {
        heading: "How do you plan a PA Core lesson with CourseSmith?",
        paragraphs: [
          "Each CourseSmith plan arrives with objectives, a topic explanation, step-by-step delivery for every method you picked, homework and a project idea, ready for your review.",
        ],
        steps: [
          {
            name: "Upload the curriculum textbook",
            text: "Upload the textbook from your school entity's adopted curriculum (PDF or DOCX, no larger than 40 MB). CourseSmith extracts its chapters and topics for you to adjust.",
          },
          {
            name: "Find the standard and eligible content",
            text: "Look up the standard in PDE's standards document or on the SAS portal at pdesas.org, and copy its full wording with any eligible content.",
          },
          {
            name: "Generate and question the plan",
            text: "Generate a plan for the matching topics with your delivery methods and class length, then paste the standard into Co-Pilot and ask which objectives address it.",
          },
          {
            name: "Record the verified code",
            text: "Confirm that the subject, area, grade and strand positions match the official document, then record the code in your school's planning template.",
          },
        ],
      },
      {
        heading: "Can CourseSmith build PSSA or Keystone practice?",
        paragraphs: [
          "CourseSmith can turn textbook chapters into practice tests, but it has no access to PSSA or Keystone items and makes no claim to predict them. For a Keystone course, pick the chapters behind a module, set question counts and marks for each type, and choose a difficulty mix.",
          "Download the test as a Word file you can edit. Compare its demands with the eligible content for that course before students see it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by PDE?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the Pennsylvania Department of Education or the State Board, and it does not tag PA Core codes. It drafts from your uploaded textbook, and you verify any standard you cite in PDE's documents or on the SAS portal.",
      },
      {
        q: "What is the SAS portal?",
        a: "SAS, the Standards Aligned System, is PDE's portal at pdesas.org, where the PA Core standards documents and related materials are hosted. It is a practical place to look up a standard and its eligible content before you record a code in a lesson plan.",
      },
      {
        q: "Why do PA Core math codes have so many parts?",
        a: "Each position narrows the scope. The subject digit separates math from other subjects, the area digit picks one of four standard areas, the grade follows, and the strand letter and final number point to one standard. Reading them in order tells you exactly where a skill sits.",
      },
      {
        q: "Can I plan the newer science standards with CourseSmith?",
        a: "Yes, if you upload the science textbook or materials your school uses. Paste the standard text into Co-Pilot and ask how a planned lesson addresses it. Since the standards took effect in 2025, confirm that older materials cover the newer environmental literacy and sustainability content.",
      },
      {
        q: "How much does CourseSmith cost for Pennsylvania teachers?",
        a: "Pennsylvania teachers can begin at no cost: sign-up includes free starter credits and asks for no credit card. Generations then draw on AI credits as you create plans and tests. Schools and departments can ask SuperMIA at hello@supermia.ai about volume pricing.",
      },
    ],
    sources: [
      {
        label: "Pennsylvania State Board of Education: State Academic Standards",
        url: "https://www.pa.gov/en/agencies/stateboard/resources/regulations--policy/state-academic-standards.html",
      },
      {
        label: "PDE: Academic Standards for Mathematics, PA Core Standards (March 1, 2014)",
        url: "https://static.pdesas.org/content/documents/PA%20Core%20Standards%20Mathematics%20PreK-12%20March%202014.pdf",
      },
      {
        label: "PDE: Pennsylvania System of School Assessment (PSSA)",
        url: "https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/pennsylvania-system-of-school-assessment-pssa",
      },
      {
        label: "PDE: Keystone Exams",
        url: "https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/keystone-exams",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/standards/new-jersey",
      "/standards/ngss",
      "/use-cases/high-school",
    ],
    primaryKeyword: "pennsylvania core standards lesson plans",
    secondaryKeywords: [
      "PA Core standards lesson plans",
      "PA Core codes explained",
      "eligible content lesson planning",
      "PSSA practice tests",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Pennsylvania",
      code: "US-PA",
      framework: "Pennsylvania Core Standards and Pennsylvania Academic Standards",
      adoptingBody: "Pennsylvania State Board of Education",
      officialUrl:
        "https://www.pa.gov/en/agencies/stateboard/resources/regulations--policy/state-academic-standards.html",
    },
  },
  {
    slug: "new-jersey",
    group: "standards",
    navLabel: "New Jersey NJSLS",
    navBlurb: "NJSLS lesson plans from your textbook, with codes you verify",
    metaTitle: "New Jersey Student Learning Standards Lesson Plans",
    metaDescription:
      "Create New Jersey Student Learning Standards lesson plans and tests from your adopted textbook, read 2023 NJSLS codes, and verify them with NJDOE. Free.",
    eyebrow: "New Jersey standards",
    h1: "New Jersey Student Learning Standards lesson plans, from textbook to verified code",
    answer:
      "New Jersey Student Learning Standards lesson plans follow the NJSLS adopted by the New Jersey State Board of Education across nine content areas, with revised 2023 ELA and math standards set for curriculum use from September 2024. CourseSmith drafts plans and tests from your adopted textbook, and you confirm each NJSLS code against NJDOE's official pages.",
    definition:
      "The New Jersey Student Learning Standards (NJSLS) is the set of K-12 learning goals adopted by the New Jersey State Board of Education across nine content areas, from which local education agencies build curriculum and instruction.",
    takeaways: [
      "The New Jersey State Board of Education adopted the 2023 NJSLS for English language arts and mathematics on October 4, 2023.",
      "NJDOE set September 2024 as the curriculum implementation date for both the 2023 NJSLS-ELA and the 2023 NJSLS for mathematics.",
      "A 2023 NJSLS-ELA code such as RL.CR.3.1 names a domain, a strand, a grade and a standard number, in that order.",
      "CourseSmith does not tag NJSLS codes; you paste the standard into Co-Pilot and verify the code on NJDOE's website.",
    ],
    sections: [
      {
        heading: "What does the NJSLS cover?",
        paragraphs: [
          "The NJSLS sets learning goals in nine content areas: Career Readiness, Life Literacies and Key Skills; Comprehensive Health and Physical Education; Computer Science and Design Thinking; English Language Arts; Mathematics; Science; Social Studies; Visual and Performing Arts; and World Languages.",
          "NJDOE describes the standards as a foundation from which LEAs build curriculum and instruction. Your district's curriculum is therefore the bridge between a standard and the textbook pages you actually teach.",
        ],
      },
      {
        heading: "What changed in the 2023 ELA and math standards?",
        paragraphs: [
          "The 2023 revisions strengthened early literacy and added data literacy. In ELA, NJDOE enhanced K-5 foundational reading expectations, added newly developed K-5 Foundational Writing standards and a set of K-12 ELA practices, and separated expectations for informational and literary texts more clearly.",
          "In math, the revision added early data literacy standards, new early elementary standards on monetary value and money, and shifts in grade 8 and high school content to strengthen algebra progressions. If your textbook was written for the earlier standards, those are the places to check for gaps.",
        ],
      },
      {
        heading: "How do you read a 2023 NJSLS-ELA code?",
        paragraphs: [
          "Every 2023 NJSLS-ELA code begins with four parts: domain, strand, grade and standard number. RL.CR.3.1 is Reading Literary Texts, Close Reading of Text, grade 3, standard 1, and RI.CR.3.1 applies the same expectation to informational texts.",
          "Each strand supports a matching anchor statement, and NJDOE's code guide lists them all. L.VL.6.3, for example, is standard 3 for grade 6 in the Language domain's vocabulary strand.",
        ],
        table: {
          caption: "Domains and strand abbreviations in 2023 NJSLS-ELA codes",
          columns: ["Domain code", "Domain", "Strand abbreviations"],
          rows: [
            [
              "RL and RI",
              "Reading Literary Texts and Reading Informational Texts",
              "CR, CI, IT, TS, PP, MF, AA, CT",
            ],
            ["W", "Writing", "AW, IW, NW, WP, WR, SE, RW"],
            ["SL", "Speaking and Listening", "PE, II, ES, PI, UM, AS"],
            ["L", "Language", "RF, WF, SS, KL, VL, VI"],
          ],
        },
      },
      {
        heading: "Which state tests connect to the NJSLS?",
        paragraphs: [
          "For spring 2027, NJDOE's schedule lists the NJSLA-A in ELA for grades 3 through 9 and in math from grade 3 through high school, plus NJSLA-Science in grades 5, 8 and 11. The NJGPA-A graduation proficiency assessment is given to grades 11 and 12 in fall, spring and summer windows.",
          "For high school math, the NJSLA-A uses Algebra I, Geometry or Algebra II for federal accountability. The 2027 spring window for NJSLA-A and NJSLA-Science runs April 19 to May 21, which is the date to plan your unit calendar around.",
        ],
      },
      {
        heading: "How do you plan an NJSLS lesson in CourseSmith?",
        paragraphs: [
          "Four steps take you from the district textbook to a plan you can defend in a curriculum review.",
        ],
        steps: [
          {
            name: "Start with the adopted textbook",
            text: "Upload the textbook named in your district curriculum, as a PDF or DOCX of 40 MB or less, and check the chapter and topic list CourseSmith builds from it.",
          },
          {
            name: "Pull the standard from NJDOE",
            text: "Open the 2023 NJSLS page for your grade on nj.gov and copy the full text of the standard, including its code.",
          },
          {
            name: "Draft the lesson",
            text: "Choose the topics, one or more delivery methods and a duration in minutes; your teaching persona shapes the tone and approach of the plan.",
          },
          {
            name: "Ask Co-Pilot for a standards check",
            text: "Paste the standard into Co-Pilot and ask where the plan addresses each part, then confirm the code against NJDOE's code guide before writing it into your district template.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help teachers in untested NJSLS content areas?",
        paragraphs: [
          "Yes, because CourseSmith works from any uploaded course material, not only ELA and math textbooks. A health, world languages or computer science teacher can upload course materials, generate lesson plans and assignments, and build a week-by-week academic schedule for the term.",
          "Assignments include answers and download as editable Word files. The verification step stays the same: paste the NJSLS standard for that content area into Co-Pilot and confirm the code on NJDOE's site.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith aligned to the NJSLS?",
        a: "CourseSmith does not tag or align output to NJSLS codes, and NJDOE has not approved it. It builds from the textbook you upload. When you paste a standard into Co-Pilot, it can explain how a lesson connects to it, but the final code check against NJDOE's documents is yours.",
      },
      {
        q: "Where do I find the official 2023 NJSLS?",
        a: "NJDOE posts the standards on its Office of Standards pages at nj.gov/education/standards, organized by the nine content areas. The 2023 NJSLS-ELA has a page for each grade, plus a guide to its alphanumeric codes and a page of reading domain anchor statements.",
      },
      {
        q: "Can CourseSmith write lessons for the K-5 Foundational Writing standards?",
        a: "Yes, if your materials cover spelling, letter formation, grammar or sentence composition. Upload them, generate a lesson that uses an interactive activity or game, and paste the specific Foundational Writing standard into Co-Pilot to check coverage before you teach it.",
      },
      {
        q: "Can I make NJSLA-style practice tests?",
        a: "CourseSmith drafts tests from your textbook chapters using four question types, including multiple choice and fill in the blanks, with the counts, marks and Easy, Medium and Hard mix you set. It does not reproduce NJSLA-A items, so compare drafts with NJDOE's assessment resources.",
      },
      {
        q: "Does CourseSmith cost money?",
        a: "CourseSmith is free to start, and sign-up includes free starter credits with no credit card. Usage after that is credit-based. New Jersey districts interested in volume pricing for a department or school can email SuperMIA at hello@supermia.ai.",
      },
    ],
    sources: [
      {
        label:
          "NJDOE memo: Adoption of the Revised NJSLS in ELA and Mathematics (October 18, 2023)",
        url: "https://www.nj.gov/education/broadcasts/2023/oct/18/AdoptionoftheRevisedNewJerseyStudentLearningStandardsinEnglishLanguageArtsandMathematics.pdf",
      },
      {
        label: "NJDOE: Understanding the 2023 NJSLS-ELA Alphanumeric Codes",
        url: "https://www.nj.gov/education/standards/ela/2023/codes.shtml",
      },
      {
        label: "NJDOE: New Jersey Student Learning Standards",
        url: "https://www.nj.gov/education/standards/",
      },
      {
        label: "NJDOE: Statewide Assessment Testing Schedule 2026-27",
        url: "https://www.nj.gov/education/assessment/resources/district/statewide_schedule_2627.shtml",
      },
    ],
    related: [
      "/features/ai-assignment-generator",
      "/standards/pennsylvania",
      "/standards/common-core",
      "/use-cases/english-language-arts",
    ],
    primaryKeyword: "new jersey student learning standards lesson plans",
    secondaryKeywords: [
      "NJSLS lesson plans",
      "2023 NJSLS ELA codes",
      "NJSLA practice tests",
      "New Jersey curriculum planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "New Jersey",
      code: "US-NJ",
      framework: "New Jersey Student Learning Standards (NJSLS)",
      adoptingBody: "New Jersey State Board of Education",
      officialUrl: "https://www.nj.gov/education/standards/",
    },
  },
  {
    slug: "ohio",
    group: "standards",
    navLabel: "Ohio Learning Standards",
    navBlurb: "Ohio's Learning Standards lessons, plus the 2026 ELA changes",
    metaTitle: "Ohio Learning Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Build Ohio Learning Standards lesson plans and tests from your district's textbook, prepare for the 2026 ELA revision, and verify codes yourself. Free.",
    eyebrow: "Ohio standards",
    h1: "Ohio Learning Standards lesson plans, with the model curriculum as a guide",
    answer:
      "Ohio Learning Standards lesson plans follow Ohio's Learning Standards, the state's K-12 content standards, alongside model curricula that districts may draw on but are not required to use. CourseSmith works from the textbook your district adopted to draft lessons and quizzes, can discuss any Ohio standard you paste into Co-Pilot, and leaves the final code check to you.",
    definition:
      "Ohio's Learning Standards is the set of K-12 academic content standards that Ohio publishes for each subject, paired with model curricula that offer instructional support but that districts are not required to use.",
    takeaways: [
      "Ohio's Learning Standards for Mathematics in use as of October 2026 were adopted by the State Board of Education in February 2017.",
      "Ohio published revised K-8 English language arts standards in 2026, aligned with the science of reading, while grades 9-12 keep the 2017 standards.",
      "The Ohio Department of Education and Workforce describes 2026-2027 as a transition year and 2027-2028 as the first year of implementation for the revised ELA standards.",
      "Ohio law states that districts are not required to use all or any part of a model curriculum.",
      "CourseSmith does not tag Ohio standard codes; teachers verify each code in the official standards documents.",
    ],
    sections: [
      {
        heading: "How do Ohio's Learning Standards differ from the model curriculum?",
        paragraphs: [
          "The standards say what students should learn; the model curriculum offers support for teaching it. Ohio Revised Code 3301.079 provides for both, and it states that nothing in the section requires a district to use all or any part of a model curriculum.",
          "Your lesson plan answers to the standard and to your district's adopted curriculum, while the model curriculum is a reference you can draw on. Ohio's grade 3 math model curriculum, for example, lists connections across standards such as 3.OA.1 and 3.NF.1.",
        ],
      },
      {
        heading: "Which Ohio standards are current in core subjects?",
        paragraphs: [
          "English language arts is the subject in motion. The revised K-8 standards extend Reading Foundations (decoding) through grade 8 and add Writing Foundations (spelling and handwriting) to grades K-8, and the Department says Ohio's State Tests in English language arts will be revised to align with the new standards, as applicable.",
        ],
        table: {
          caption:
            "Ohio's Learning Standards and required state tests in core subjects (as of October 2026)",
          columns: ["Subject", "Current standards", "Required Ohio state tests"],
          rows: [
            [
              "English language arts",
              "2026 revised K-8 standards; 2017 standards for grades 9-12",
              "Grades 3-8 and the English language arts II end-of-course exam",
            ],
            [
              "Mathematics",
              "2017 standards, adopted February 2017",
              "Grades 3-8 plus Algebra I and geometry (or integrated math I and II) end-of-course exams",
            ],
            [
              "Science",
              "See the Department's science standards and model curriculum page",
              "Grades 5 and 8 plus one high school science end-of-course exam",
            ],
            [
              "Social studies",
              "See the Department's social studies standards page",
              "American history and American government end-of-course exams",
            ],
          ],
        },
      },
      {
        heading: "How are Ohio math standard codes written?",
        paragraphs: [
          "Ohio's 2017 math codes put the grade first, then the domain and the standard number. In 3.OA.1, 3 is grade 3, OA is Operations and Algebraic Thinking, and 1 is the first standard in that domain, which asks students to interpret products such as 5 x 7 as 5 groups of 7 objects.",
          "Read the notes under each standard as carefully as the codes. The same grade 3 document limits fraction work to denominators of 2, 3, 4, 6 and 8, a detail worth catching before you plan from a textbook chapter that goes further.",
        ],
      },
      {
        heading: "How should Ohio ELA teachers plan through the 2026 transition?",
        paragraphs: [
          "During 2026-2027, plan with the standards your district tells you to teach and use the transition year to study the revised K-8 document. The Department has scheduled professional learning and model curriculum development for that year, with 2027-2028 as the first year of implementation.",
          "For K-8 teachers, the largest planning change is foundational skills in the upper grades, since decoding now runs through grade 8 and spelling and handwriting appear in every K-8 grade. Grades 9-12 teachers keep planning from the unchanged 2017 standards.",
        ],
      },
      {
        heading: "How do you build an Ohio lesson plan in CourseSmith?",
        paragraphs: [
          "CourseSmith handles the drafting, while the standards check remains a teacher task.",
        ],
        steps: [
          {
            name: "Upload your district's textbook",
            text: "Add the adopted textbook as a PDF or DOCX up to 40 MB. CourseSmith splits it into chapters and topics, and you can rename, add or delete any of them.",
          },
          {
            name: "Match topics to the standard",
            text: "Select the topics that teach the Ohio standard and pick delivery methods; for a grade 3 fractions lesson, real-world use cases such as sharing food fit naturally.",
          },
          {
            name: "Set the class length",
            text: "Enter the duration your bell schedule allows, whether 40, 50 or 90 minutes, and CourseSmith fits the step-by-step delivery plan to it.",
          },
          {
            name: "Verify with the official document",
            text: "Paste the standard into Co-Pilot to check coverage, then confirm the code and any limits, like the grade 3 denominator list, in the Department's standards PDF.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help with Ohio end-of-course exam practice?",
        paragraphs: [
          "CourseSmith can turn the chapters of a high school textbook into practice tests, but it does not use items from Ohio's State Tests. Teachers of end-of-course subjects such as Algebra I, geometry or American government can choose question types, counts, marks and an Easy, Medium and Hard mix.",
          "Each test downloads as an editable Word file with an answer key you reveal through the Show answer toggle. Review every question before students see it, because AI output can contain errors.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Ohio Department of Education and Workforce?",
        a: "No. CourseSmith has no approval or endorsement from the Department, and it does not label lessons with Ohio standard codes. It drafts from the textbook you upload. You can paste a standard into Co-Pilot for a coverage check, then verify the code yourself in the official document.",
      },
      {
        q: "Do I have to follow Ohio's model curriculum?",
        a: "Ohio law states that districts are not required to use all or any part of a model curriculum, so your district decides how to use it. It still offers instructional supports and connections between standards, which you can paste into Co-Pilot alongside a standard when you plan.",
      },
      {
        q: "Will Ohio's ELA tests change with the 2026 standards?",
        a: "The Department says Ohio's State Tests in English language arts will be revised to align with the new standards, as applicable. It names 2027-2028 as the first year of implementation, so watch the Department's testing pages for the timing of any test changes.",
      },
      {
        q: "Is there a free way to try CourseSmith?",
        a: "Yes. A new CourseSmith account opens with free starter credits, and no credit card is requested. Each later generation draws down AI credits. Ohio districts can contact SuperMIA at hello@supermia.ai to ask about volume pricing.",
      },
      {
        q: "What happens to the textbook files I upload?",
        a: "Uploads are kept in private cloud storage, and AI providers such as OpenAI process text under data processing agreements that bar training their public models on it. Deleting a syllabus, lesson plan or persona deletes its associated files, and sign-in uses an emailed one-time code.",
      },
    ],
    sources: [
      {
        label:
          "Ohio Department of Education and Workforce: Ohio's Learning Standards for English Language Arts",
        url: "https://education.ohio.gov/Topics/Learning-in-Ohio/English-Language-Art/English-Language-Arts-Standards",
      },
      {
        label:
          "Ohio Department of Education and Workforce: Ohio's Learning Standards for Mathematics",
        url: "https://education.ohio.gov/Topics/Learning-in-Ohio/Mathematics/Ohio-s-Learning-Standards-in-Mathematics",
      },
      {
        label: "Ohio Revised Code 3301.079: Academic content standards and model curricula",
        url: "https://codes.ohio.gov/ohio-revised-code/section-3301.079",
      },
      {
        label:
          "Ohio Legislative Service Commission: Assessments required under state and federal law",
        url: "https://www.lsc.ohio.gov/assets/organizations/legislative-service-commission/files/assessments-required-under-state-and-federal-law.pdf",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/standards/michigan",
      "/standards/common-core",
      "/use-cases/math",
    ],
    primaryKeyword: "ohio learning standards lesson plans",
    secondaryKeywords: [
      "ohio's learning standards lesson plans",
      "ohio model curriculum",
      "2026 ohio ELA standards",
      "ohio end-of-course exam practice",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Ohio",
      code: "US-OH",
      framework: "Ohio's Learning Standards",
      adoptingBody:
        "Ohio Department of Education and Workforce (earlier versions adopted by the State Board of Education)",
      officialUrl:
        "https://education.ohio.gov/Topics/Learning-in-Ohio/OLS-Graphic-Sections/Learning-Standards",
    },
  },
  {
    slug: "illinois",
    group: "standards",
    navLabel: "Illinois Learning Standards",
    navBlurb: "Illinois Learning Standards lessons, including social science",
    metaTitle: "Illinois Learning Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Illinois Learning Standards lessons and tests from your district's textbook, pair social science standards, and verify codes with ISBE. Start free.",
    eyebrow: "Illinois standards",
    h1: "Illinois Learning Standards lesson plans grounded in your district's textbook",
    answer:
      "Illinois Learning Standards lesson plans follow standards adopted by the Illinois State Board of Education, which use the Common Core for ELA and math, the NGSS for science and Illinois-written standards for social science. CourseSmith drafts plans and practice tests from your district's textbook and responds to standard text pasted into Co-Pilot, while ISBE documents stay your source for codes.",
    definition:
      "The Illinois Learning Standards is the set of K-12 expectations adopted by the Illinois State Board of Education (ISBE) that describes what students should know and be able to do in each subject at each grade.",
    takeaways: [
      "Illinois adopted the Common Core State Standards for English language arts and math in June 2010 as part of the Illinois Learning Standards.",
      "ISBE adopted the Next Generation Science Standards as the Illinois Learning Standards for science in January 2014.",
      "Revised Illinois Learning Standards for Social Science were adopted for implementation in the 2022-2023 school year and pair inquiry skills with disciplinary concepts.",
      "CourseSmith leaves Illinois codes to the teacher: it plans from uploaded material, and any code you record should come from ISBE's documents.",
    ],
    sections: [
      {
        heading: "What do the Illinois Learning Standards include?",
        paragraphs: [
          "The Illinois Learning Standards combine nationally developed frameworks with Illinois-written standards. ELA and math incorporate the Common Core, adopted in June 2010; science uses the NGSS, adopted in January 2014; and social science uses Illinois's own standards, revised for implementation in 2022-2023.",
          "Because ELA, math and science share codes with national frameworks, CourseSmith's Common Core and NGSS pages explain those code formats in depth. Social science codes are specific to Illinois, so they get closer attention below.",
        ],
        table: {
          caption:
            "Illinois Learning Standards by subject and the state test that covers them (2026-27)",
          columns: ["Subject", "Basis of the standards", "State test listed by ISBE"],
          rows: [
            [
              "English language arts",
              "Common Core State Standards, adopted June 2010",
              "Illinois Assessment of Readiness (IAR), grades 3-8",
            ],
            [
              "Mathematics",
              "Common Core State Standards, adopted June 2010",
              "Illinois Assessment of Readiness (IAR), grades 3-8",
            ],
            [
              "Science",
              "Next Generation Science Standards, adopted January 2014",
              "Illinois Science Assessment (ISA), grades 5 and 8",
            ],
            [
              "Social science",
              "Illinois standards revised for 2022-2023: inquiry skills plus disciplinary concepts",
              "Not part of the IAR or ISA",
            ],
          ],
        },
      },
      {
        heading: "How are Illinois social science codes structured?",
        paragraphs: [
          "Illinois social science codes start with SS, then a strand abbreviation, a standard number and a grade or grade band. SS.IS.1.3-5 is an inquiry skills standard for grades 3 through 5 about developing essential questions, and SS.CV.3.3 is a grade 3 civics standard about how decisions are made in the classroom, school and community.",
          "ISBE posts grade-level documents that list each code. Because the standards were revised for 2022-2023, check any code taken from an older plan against ISBE's current social science document before you reuse it.",
        ],
      },
      {
        heading: "Why do inquiry and content standards appear together in one plan?",
        paragraphs: [
          "ISBE advises using the inquiry standards simultaneously with the disciplinary standards, so an Illinois social science lesson usually names one of each. A civics lesson might pair an inquiry standard on developing questions with a concept from the Civic and Political Institutions area.",
          "The 2022 revision also introduced six Domains of Competency that inform the inquiry arc. When you paste both standards into CourseSmith Co-Pilot, ask it to suggest an essential question students can investigate with your textbook chapter.",
        ],
      },
      {
        heading: "How does a CourseSmith plan come together for an Illinois classroom?",
        paragraphs: [
          "A CourseSmith lesson plan opens with learning objectives and an in-depth explanation of the topic, then lays out delivery steps for each method you selected and closes with homework and a project idea. You can mark each plan Draft, Ready to teach or Completed.",
        ],
        steps: [
          {
            name: "Upload what your district adopted",
            text: "Add the course textbook or syllabus as a PDF or DOCX of up to 40 MB, add the subject and grade, and look over the chapters and topics CourseSmith finds.",
          },
          {
            name: "Pick topics, methods and length",
            text: "Choose the topics, then combine direct instruction, an interactive activity or game, and real-world use cases for a class period of the length you set.",
          },
          {
            name: "Pair standards in Co-Pilot",
            text: "Paste the full text of the Illinois standard, or an inquiry standard and a disciplinary standard together for social science, into Co-Pilot and ask how the plan covers them.",
          },
          {
            name: "Confirm on ISBE's site",
            text: "Look up each code in ISBE's standards documents and record it in your district's planning template.",
          },
        ],
      },
      {
        heading: "How do IAR and ISA dates shape a unit calendar?",
        paragraphs: [
          "For 2026-27, ISBE lists online IAR testing in ELA and math for grades 3-8 from March 1 to April 16, 2027, and the ISA for grades 5 and 8 from March 1 to April 30, 2027. Content you want students to have seen before testing needs to land before March.",
          "A CourseSmith academic schedule maps your textbook week by week, with each week's main topic, objectives and chapter references. Set the planned weeks and hours per week so priority chapters fall before the window, then mark weeks Completed as you go.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag Illinois Learning Standards codes?",
        a: "No. Illinois codes are not added to CourseSmith output, and ISBE has not endorsed the product. It plans from the material you upload. Paste a standard into Co-Pilot to discuss how a lesson addresses it, then confirm the code in ISBE's documents before you record it.",
      },
      {
        q: "Are Illinois ELA and math codes the same as Common Core codes?",
        a: "Illinois adopted the Common Core State Standards for ELA and math in June 2010, so the codes follow the Common Core pattern. Check ISBE's documents for any Illinois notes, and see CourseSmith's Common Core page for a walk-through of how those codes are built.",
      },
      {
        q: "Where are ISBE's standards documents?",
        a: "ISBE's Standards and Courses page links to the Illinois Learning Standards by subject, including arts, mathematics, science, social science, world languages and social and emotional learning, with downloadable PDFs. A separate resources page holds grade-level documents and educator resources.",
      },
      {
        q: "Can CourseSmith make practice tests before the IAR?",
        a: "CourseSmith drafts tests from your textbook chapters with the question types, counts, marks and difficulty mix you choose, and you can download them as editable Word files. It does not use IAR items, so treat the drafts as classroom practice and review each question first.",
      },
      {
        q: "How do Illinois teachers get started?",
        a: "Create a free CourseSmith account at app.coursesmith.supermia.ai; new users get free starter credits and no credit card is required. Upload a textbook, set up your teaching persona and generate a first plan. Districts can email hello@supermia.ai about volume pricing.",
      },
    ],
    sources: [
      {
        label: "ISBE: New Illinois Learning Standards incorporating the Common Core (FAQ)",
        url: "https://www.isbe.net/documents/ccs_faq.pdf",
      },
      {
        label: "ISBE: Development of the Next Generation Science Standards (fact sheet)",
        url: "https://www.isbe.net/Documents/development-of-ngss-fact-sheet.pdf",
      },
      {
        label: "ISBE: Illinois Learning Standards for Social Science",
        url: "https://www.isbe.net/Documents/IL-Social-Science-Standards.pdf",
      },
      {
        label: "ISBE: 2026-27 Illinois State Assessment Dates",
        url: "https://www.isbe.net/Documents/State-Assessment-Dates-2026-27.pdf",
      },
    ],
    related: [
      "/features/ai-teaching-assistant",
      "/standards/ngss",
      "/standards/michigan",
      "/use-cases/social-studies",
    ],
    primaryKeyword: "illinois learning standards lesson plans",
    secondaryKeywords: [
      "illinois social science standards lesson plans",
      "ISBE standards",
      "IAR practice tests",
      "illinois inquiry standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Illinois",
      code: "US-IL",
      framework: "Illinois Learning Standards",
      adoptingBody: "Illinois State Board of Education (ISBE)",
      officialUrl: "https://www.isbe.net/Pages/Standards-Courses.aspx",
    },
  },
  {
    slug: "michigan",
    group: "standards",
    navLabel: "Michigan K-12 Standards",
    navBlurb: "Michigan K-12 Standards lessons matched to each grade's tests",
    metaTitle: "Michigan K-12 Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Build Michigan K-12 Standards lesson plans and tests from your district's textbook, see which state test each grade takes, and verify codes. Start free.",
    eyebrow: "Michigan standards",
    h1: "Michigan K-12 Standards lesson plans, matched to the tests your grade takes",
    answer:
      "Michigan K-12 Standards lesson plans rest on decisions by the Michigan State Board of Education, including Common Core-based ELA and math from 2010 and NGSS-based science from 2015. Upload your district's textbook and CourseSmith drafts lessons and tests from its chapters; paste a Michigan standard into Co-Pilot to discuss coverage, then check the code in Michigan Department of Education documents.",
    definition:
      "The Michigan K-12 Standards is the set of academic content standards adopted by the Michigan State Board of Education and published by the Michigan Department of Education (MDE) for each subject.",
    takeaways: [
      "The Michigan State Board of Education adopted the Common Core State Standards for ELA and math on June 15, 2010.",
      "The Michigan K-12 Science Standards, adopted in November 2015, are based on the NGSS and replaced science standards from 2006.",
      "MDE lists the Michigan K-12 Social Studies Standards as dated June 2019.",
      "Michigan tests different subjects at different grades, so useful practice depends on whether your students take M-STEP, a PSAT or the Michigan Merit Examination.",
      "CourseSmith does not tag Michigan standard codes; teachers verify every code against MDE's documents.",
    ],
    sections: [
      {
        heading: "What are the Michigan K-12 Standards made of?",
        paragraphs: [
          "Michigan's core standards come from three State Board decisions. The Board adopted the Common Core for ELA and math on June 15, 2010, adopted new science standards in November 2015, and MDE lists the current social studies standards as dated June 2019.",
          "The 2010 motion added technical subjects to the ELA standards, so literacy standards for history, science and technical subjects belong to the same set. The 2015 science standards replaced the 2006 standards and introduced science and engineering practices.",
        ],
      },
      {
        heading: "Which Michigan test does each grade take?",
        paragraphs: [
          "Michigan matches different tests to different grades, and the mix changes in middle and high school. MDE's guide to state assessments lists M-STEP for ELA and math in grades 3-7, the PSAT 8/9 and PSAT 10 for ELA and math in grades 8-10, and M-STEP science and social studies in grades 5, 8 and 11.",
          "In grade 11, the Michigan Merit Examination has three required parts: the SAT, the WIN Work Readiness assessments, and M-STEP science and social studies. Check MDE's guide each year, because older MDE parent guides placed science and social studies tests in different grades.",
        ],
        table: {
          caption: "Michigan state assessments by grade, per MDE's guide to state assessments",
          columns: ["Grade", "ELA and math", "Science and social studies"],
          rows: [
            ["3, 4, 6 and 7", "M-STEP", "Not tested"],
            ["5", "M-STEP", "M-STEP science and social studies"],
            ["8", "PSAT 8/9", "M-STEP science and social studies"],
            ["9", "PSAT 8/9", "Not tested"],
            ["10", "PSAT 10", "Not tested"],
            [
              "11",
              "SAT, within the Michigan Merit Examination",
              "M-STEP science and social studies, within the Michigan Merit Examination",
            ],
          ],
        },
      },
      {
        heading: "How should you plan when the grade 8-11 test is a PSAT or SAT?",
        paragraphs: [
          "Plan from the Michigan K-12 Standards and treat the PSAT or SAT as one measure of them, not as the curriculum. MDE's guide describes the PSAT 8/9 and PSAT 10 as measuring ELA and math and preparing students for the SAT given to every high school junior.",
          "A grade 9 English plan therefore still cites a Michigan ELA standard from the 2010 adoption. Build lessons from the textbook your district adopted, and add a short practice set only when it fits the unit you are teaching.",
        ],
      },
      {
        heading: "How do you plan a Michigan lesson with CourseSmith?",
        paragraphs: ["Here is the sequence from upload to a verified standard."],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Upload the course textbook or syllabus your district uses (PDF or DOCX, 40 MB maximum), and enter the book name, subject and grade so CourseSmith can build the chapters and topics.",
          },
          {
            name: "Build your persona from a resume",
            text: "Upload a resume to fill in your school, experience, subjects and teaching style, then review it so every plan reflects how you teach.",
          },
          {
            name: "Generate for your class length",
            text: "Pick the topics and delivery methods, enter the lecture duration in minutes and generate the lesson plan.",
          },
          {
            name: "Check the standard with Co-Pilot and MDE",
            text: "Paste the Michigan standard into Co-Pilot, ask what the plan covers and what it misses, and confirm the code in MDE's standards document before recording it.",
          },
        ],
      },
      {
        heading: "Can CourseSmith help science teachers with three-dimensional standards?",
        paragraphs: [
          "Yes, as a drafting partner, though you decide how each dimension shows up in class. Michigan's science performance expectations combine disciplinary core ideas, science and engineering practices, and crosscutting concepts, so paste all three parts of a standard into Co-Pilot and have it point to where your plan handles each one.",
          "Choosing the interactive activity or game method can bring a practice such as planning an investigation into the lesson. Confirm the performance expectation code with MDE's science standards before you record it.",
        ],
      },
      {
        heading: "How can one academic schedule cover a Michigan school year?",
        paragraphs: [
          "A CourseSmith academic schedule spreads your textbook across the weeks you plan to teach, listing each week's main topic, key objectives and chapter references. You enter a schedule name, the syllabus, how many weeks you plan, weekly hours and the length of each lecture.",
          "For a grade 5 or grade 8 class, place the chapters that carry tested science and social studies content before your M-STEP window. Your district sets that window within MDE's testing calendar, so confirm the dates locally.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith aligned to the Michigan K-12 Standards?",
        a: "CourseSmith does not tag or align lessons to Michigan codes, and MDE has not approved it. Lessons come from your uploaded textbook. Paste a Michigan standard into Co-Pilot to discuss coverage, then verify the code in MDE's official standards document before it goes into your plan.",
      },
      {
        q: "Where are the Michigan K-12 Standards posted?",
        a: "MDE's Academic Standards page lists the Michigan K-12 Standards by subject, including the social studies standards dated June 2019, with links to each PDF. MDE also keeps State Board press releases online, including the November 2015 announcement of the science standards adoption.",
      },
      {
        q: "Can I use CourseSmith for M-STEP practice?",
        a: "You can draft chapter tests that mix objective and written questions, from fill in the blanks to long answers, set marks and an Easy, Medium and Hard mix, and download them as Word files. CourseSmith does not reproduce M-STEP items, so compare drafts with MDE's sample item sets.",
      },
      {
        q: "Does CourseSmith track how I teach across the year?",
        a: "CourseSmith includes teaching analytics about your own activity, such as courses, lessons planned and taught, assignments and tests, plus your mix of delivery methods and question types. It does not track student performance, so M-STEP and classroom data stay in your district's systems.",
      },
      {
        q: "What does it cost to try CourseSmith in Michigan?",
        a: "Signing up is free, comes with free starter credits and needs no credit card. Ongoing use is credit-based, with AI credits used per generation. Michigan schools may write to SuperMIA at hello@supermia.ai to discuss volume pricing.",
      },
    ],
    sources: [
      {
        label: "MDE: Academic Standards",
        url: "https://www.michigan.gov/mde/services/academic-standards",
      },
      {
        label:
          "MDE press release: State Board Adopts Improved State Science Standards (November 12, 2015)",
        url: "https://www.michigan.gov/mde/news-and-information/press-releases/2015/11/12/state-board-adopts-improved-state-science-standards",
      },
      {
        label: "Michigan State Board of Education minutes, June 15, 2010",
        url: "https://www.michigan.gov/-/media/Project/Websites/mde/2010/07/26/FINAL_June_15_SBE_Minutes_w_Exhibits.pdf?rev=29330a36f64a4731b25cc9373dfca516",
      },
      {
        label: "MDE: Guide to State Assessments",
        url: "https://www.michigan.gov/mde/-/media/Project/Websites/mde/OEAA/General/Guide_to_State_Assessments.pdf",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/ohio",
      "/standards/ngss",
      "/use-cases/science",
    ],
    primaryKeyword: "michigan k-12 standards lesson plans",
    secondaryKeywords: [
      "michigan standards lesson plans",
      "M-STEP practice tests",
      "michigan science standards lessons",
      "MDE academic standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Michigan",
      code: "US-MI",
      framework: "Michigan K-12 Standards",
      adoptingBody: "Michigan State Board of Education",
      officialUrl: "https://www.michigan.gov/mde/services/academic-standards",
    },
  },
];
