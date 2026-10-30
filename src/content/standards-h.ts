import type { ContentPage } from "./types";

export const STANDARDS_PAGES_H: ContentPage[] = [
  // ---------------------------------------------------------------- Utah
  {
    slug: "utah",
    group: "standards",
    navLabel: "Utah Core",
    navBlurb: "Utah Core Standards, SEEd codes and the USBE revision timeline",
    metaTitle: "Utah Core Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Utah Core Standards lessons from your own textbook. Read SEEd and math codes, track USBE revision phases and verify every code. Start free.",
    eyebrow: "Utah standards",
    h1: "Utah Core Standards lesson plans built from your classroom textbook",
    answer:
      "Utah Core Standards lesson plans target standards that the Utah State Board of Education establishes for every public school, such as SEEd Standard 3.1.1 or math Standard 3.NF.1. CourseSmith drafts plans and tests from the textbook you upload, you paste the Utah standard into Co-Pilot, and you confirm its code and wording in USBE's official document.",
    definition:
      "The Utah Core Standards are the K-12 standards that the Utah State Board of Education establishes under Utah Code 53E-4-202 to identify the knowledge, skills and competencies students should gain in each content area.",
    takeaways: [
      "The Utah State Board of Education establishes the Utah Core Standards for public schools, as Utah Code 53E-4-202 requires.",
      "USBE's revision timeline names seven years as the traditional period between revision cycles, although the Board can cue a revision at any time.",
      "A Utah SEEd code such as Standard 3.1.1 reads as grade 3, strand 1, standard 1, and each standard combines a practice, a crosscutting concept and a core idea.",
      "USBE's October 2025 timeline shows mathematics under revision, with adoption and introduction estimated for 2026-27 and implementation for 2027-28.",
      "CourseSmith drafts from your textbook and leaves Utah standard codes for the teacher to add and verify.",
    ],
    sections: [
      {
        heading: "Who sets the Utah Core Standards?",
        paragraphs: [
          "The Utah State Board of Education (USBE) sets them. USBE's standards page cites Utah Code 53E-4-202, under which the Board shall establish the core standards for Utah public schools, and describes standards that increase in depth and complexity from year to year.",
          "USBE organizes the standards by content area: Driver Education, English Language Arts, Fine Arts, Health Education, Library Media, Mathematics, Physical Education, Science, Social Studies and World Language. Early Learning Standards cover ages 3 to 5, and USBE says preschool standards are being integrated with K-12 standards as revisions occur.",
          "The standards describe proficiency, not lessons. The SEEd document states that a standard does not dictate curriculum, so the textbook and sequence come from your district.",
        ],
      },
      {
        heading: "How does USBE revise a set of Utah standards?",
        paragraphs: [
          "Board Policy 3002 outlines the revision process, and USBE's timeline names seven years as the traditional period between cycles. The Board may cue a revision at any time, and once cued a subject moves through four phases.",
          "The phases matter for planning because a newly adopted set is not tested right away. In tested areas, assessment items reflect new standards only in the fourth phase.",
        ],
        table: {
          caption:
            "USBE's four phases for revised Utah Core Standards (timeline updated October 2025)",
          columns: ["Phase", "Typical length", "What happens"],
          rows: [
            [
              "1. Review and Revision",
              "About two years",
              "A writing committee drafts standards for Board review, the public gives feedback, and a final draft goes to the Board for approval",
            ],
            [
              "2. Adoption and Introduction",
              "Up to one more school year",
              "USBE creates crosswalks, core guides and parent guides, and drafts new items in tested areas",
            ],
            [
              "3. Implementation",
              "One more school year",
              "Local education agencies implement the standards and new assessment items are piloted",
            ],
            [
              "4. Implementation + Assessment",
              "One more school year, tested areas only",
              "Assessment items are released and reporting categories reflect the new standards",
            ],
          ],
        },
      },
      {
        heading: "Which Utah standards are changing now?",
        paragraphs: [
          "Mathematics, Physical Education and Driver Education were under revision in USBE's October 2025 timeline. USBE's mathematics page says the P-12 mathematics standards are in the revision process, and it still publishes the K-12 standards the Board adopted in January 2016.",
        ],
        table: {
          caption: "Selected Utah content areas in USBE's revision timeline (updated October 2025)",
          columns: ["Content area", "Last revised", "Status for 2025-26"],
          rows: [
            [
              "Mathematics",
              "2016",
              "Under revision; adoption estimated 2026-27, implementation estimated 2027-28",
            ],
            [
              "Physical Education",
              "2016",
              "Under revision; adoption estimated 2026-27, implementation estimated 2027-28",
            ],
            [
              "Driver Education",
              "2018",
              "Under revision; adoption estimated 2025-26, implementation estimated 2026-27",
            ],
            ["English Language Arts", "2021", "Not under revision; Phase 4"],
            ["Science (elementary)", "2019", "Not under revision; Phase 4"],
            ["Science (middle school)", "2017", "Not under revision; Phase 4"],
            ["Social Studies (elementary)", "2022", "Not under revision; Phase 3"],
            ["Social Studies (secondary)", "2016", "Not under revision; Phase 3"],
          ],
        },
      },
      {
        heading: "How do you read a Utah standard code?",
        paragraphs: [
          "A Utah SEEd code reads grade, strand, then standard. Standard 3.1.1 sits in Strand 3.1, Weather and Climate Patterns, and asks students to analyze and interpret data to reveal patterns that indicate typical weather conditions expected during a particular season.",
          "In the SEEd document, science and engineering practices are bolded, crosscutting concepts are underlined, and related core idea codes such as (ESS2.D) follow in parentheses. Emphasis statements are a required part of the standard, while example statements only clarify it, so copy the emphasis text into your plan.",
          'Utah math codes name grade, domain and number. Standard 3.NF.1 in the Number and Operations—Fractions strand reads "Understand that a unit fraction has a numerator of one and a non-zero denominator." High school standards are organized as Secondary Mathematics I, II and III.',
        ],
      },
      {
        heading: "Which tests measure the Utah Core Standards?",
        paragraphs: [
          "RISE is USBE's summative program for English language arts, mathematics, science and writing. USBE's RISE page lists mathematics in grades 3 to 8, science in grades 4 to 8 and writing in grades 5 and 8.",
          "Students in grades 9 and 10 take Utah Aspire Plus in reading, math and science. USBE describes it as a hybrid of ACT Aspire and Utah Core test items, so a high school quick check should still trace back to the Utah standard you taught.",
        ],
      },
      {
        heading: "How do Utah teachers use CourseSmith with the Utah Core Standards?",
        paragraphs: [
          "CourseSmith works best as the drafting step between your textbook and the Utah standard you chose. It does not label output with Utah codes, so the code goes in only after you check it.",
        ],
        steps: [
          {
            name: "Upload the course textbook",
            text: "Add the PDF or DOCX of the book your class uses, up to 40 MB, with the book name, subject and grade, then tidy the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload your resume or fill in your school, grade range and teaching style so drafts match how you run your Utah classroom.",
          },
          {
            name: "Paste the Utah standard",
            text: "Copy the full standard from USBE's document, including any emphasis statement, into Co-Pilot and ask for an activity that uses its practice verb.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in the USBE document",
            text: "Open the current standards file for your subject on schools.utah.gov, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag lessons with Utah Core codes?",
        a: "No. CourseSmith does not tag or align output to Utah Core Standards codes, and it is not approved by the Utah State Board of Education. It drafts from the textbook you upload. You paste the standard you are targeting, check it in USBE's document and write the code into the plan yourself.",
      },
      {
        q: "Should I plan math from the 2016 standards or the revision?",
        a: "Plan from the standards USBE has adopted. Its mathematics page says the P-12 standards are in the revision process, and the October 2025 timeline estimates adoption in 2026-27 and implementation in 2027-28. Check USBE's mathematics page for your district's start date before you switch codes.",
      },
      {
        q: "What is the difference between emphasis and example statements in SEEd?",
        a: "The SEEd document says emphasis statements highlight a required part of the learning needed to satisfy a standard, while example statements only clarify its meaning and are not required for instruction. Paste the emphasis statement into Co-Pilot with the standard so the draft covers it.",
      },
      {
        q: "Can I use CourseSmith for Secondary Mathematics I?",
        a: "Yes, if you upload the textbook or unit materials your school uses for the course. CourseSmith builds chapters and topics from that file, and you paste the Secondary Mathematics I standard you are teaching into Co-Pilot. Review every draft against USBE's high school standards file.",
      },
    ],
    sources: [
      {
        label: "Utah State Board of Education: Utah Core Standards",
        url: "https://schools.utah.gov/curr/utahcorestandards",
      },
      {
        label: "USBE: Utah Core Standards Revision Timeline (updated October 2025)",
        url: "https://www.schools.utah.gov/curr/utahcorestandards/Standards%20Revision%20Timeline%2011.4.25.pdf.pdf",
      },
      {
        label: "USBE: Utah Science with Engineering Education (SEEd) Standards",
        url: "https://schools.utah.gov/curr/science/_science_/UtahSEEdStandards.pdf",
      },
      {
        label: "USBE: Utah Core Standards for Mathematics",
        url: "https://www.schools.utah.gov/curr/mathematics/core",
      },
      {
        label: "USBE: RISE assessment",
        url: "https://schools.utah.gov/assessment/assessments/rise",
      },
      {
        label: "USBE: Utah Aspire Plus",
        url: "https://schools.utah.gov/assessment/assessments/utahaspireplus",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/ngss",
      "/use-cases/science",
      "/use-cases/math",
    ],
    primaryKeyword: "utah core standards lesson plans",
    secondaryKeywords: [
      "utah seed standards lesson plans",
      "utah core standards revision timeline",
      "how to read utah standard codes",
      "RISE test lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Utah",
      code: "US-UT",
      framework: "Utah Core Standards",
      adoptingBody: "Utah State Board of Education",
      officialUrl: "https://schools.utah.gov/curr/utahcorestandards",
    },
  },

  // ---------------------------------------------------------------- Vermont
  {
    slug: "vermont",
    group: "standards",
    navLabel: "Vermont",
    navBlurb: "National standards Vermont adopted, plus EQS and proficiency rules",
    metaTitle: "Vermont Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Vermont lessons from your textbook against the Common Core, NGSS and other standards the State Board adopted, with proficiency-based diplomas in mind.",
    eyebrow: "Vermont standards",
    h1: "Vermont standards lesson plans for a proficiency-based system",
    answer:
      "Vermont standards lesson plans draw on national frameworks that the State Board of Education adopted, including the Common Core for math and ELA and the NGSS for science, plus local proficiency-based graduation requirements. CourseSmith drafts plans and tests from your uploaded textbook, and you paste the standard and confirm it in the Agency of Education's documents.",
    definition:
      "Vermont's state standards are the national frameworks, such as the Common Core State Standards and the Next Generation Science Standards, that the Vermont State Board of Education has adopted for each content area.",
    takeaways: [
      "For each content area on the Agency of Education's standards page, Vermont's State Board of Education has adopted a national framework rather than a state-written set.",
      "The Agency of Education says the State Board adopted the Next Generation Science Standards for Vermont in 2013.",
      "Each supervisory union board must keep its written and delivered curriculum aligned with the standards approved by the State Board.",
      "Local graduation policy in Vermont must define proficiency-based graduation requirements based on standards adopted by the State Board.",
      "The VTCAP tests ELA and math in grades 3 to 9 and science in grades 5, 8 and 11.",
    ],
    sections: [
      {
        heading: "Which standards has Vermont adopted?",
        paragraphs: [
          "Vermont plans against national frameworks. The Agency of Education's Content Areas and Standards page lists, for each subject, the framework the State Board of Education adopted, so a Vermont plan usually cites a Common Core or NGSS code rather than a Vermont-specific one.",
        ],
        table: {
          caption: "Standards adopted by the Vermont State Board of Education, by content area",
          columns: ["Content area", "Adopted standards"],
          rows: [
            ["Mathematics", "Common Core State Standards: Math"],
            ["English language arts", "Common Core State Standards: ELA"],
            ["Science", "Next Generation Science Standards; ISTE Standards for Student Learning"],
            ["Social studies", "College, Career, and Civic Life (C3) Framework"],
            ["Financial literacy", "Jump$tart National Standards for Personal Finance Education"],
            ["World languages", "ACTFL World-Readiness Standards for Learning Languages"],
            ["Visual and performing arts", "National Core Arts Standards"],
            [
              "Health and physical education",
              "SHAPE America National Health Education and National Physical Education Standards",
            ],
            [
              "English language proficiency",
              "WIDA English Language Development Standards Framework, 2020 Edition",
            ],
          ],
        },
      },
      {
        heading: "How do you read the codes Vermont teachers use?",
        paragraphs: [
          'Because Vermont adopted national frameworks, the codes come from those frameworks. In science, NGSS performance expectation 5-PS1-1 reads as grade 5, physical science core idea PS1, expectation 1: "Develop a model to describe that matter is made of particles too small to be seen."',
          "NGSS expectations include a clarification statement. For 5-PS1-1 it suggests evidence such as adding air to expand a basketball or dissolving sugar in water, which gives you ready activity ideas to compare with your textbook's examples. The Agency's science page notes that the NGSS promote three-dimensional learning, so a plan should name the practice and crosscutting concept as well as the content.",
        ],
      },
      {
        heading: "What do the Education Quality Standards require?",
        paragraphs: [
          "The Education Quality Standards are the State Board's Series 2000 rules on what a quality education looks like in Vermont public schools. The Agency says the updated rules take effect July 1, 2025, revising rules first approved in 2013 that took effect April 5, 2014.",
          "Under these rules each supervisory union board must ensure its written and delivered curriculum is aligned with the standards approved by the State Board. Each school must give students annual learning opportunities that allow them to demonstrate proficiency in the required content areas.",
        ],
      },
      {
        heading: "How do proficiency-based graduation requirements shape a lesson?",
        paragraphs: [
          "They make evidence the goal. The Series 2000 rules say a student meets graduation requirements by demonstrating evidence of proficiency in the required curriculum, and local graduation policy must define proficiency-based graduation requirements based on State Board standards.",
          "Where schools use credits, the rules say credits must specify the proficiencies demonstrated and shall not be based on time spent in learning. A Vermont lesson plan therefore works best when it names the local proficiency it builds toward and ends with student work that can serve as evidence.",
        ],
      },
      {
        heading: "Which state tests measure these standards?",
        paragraphs: [
          "The Vermont Comprehensive Assessment Program (VTCAP) is the state test. The Agency says its ELA and mathematics tests, given annually in grades 3 to 9, assess mastery of the Common Core State Standards.",
          "VTCAP science is given in grades 5, 8 and 11 and assesses mastery of the Next Generation Science Standards. Because the state test uses the national frameworks, a code you verify for a lesson is the same code the test is built around.",
        ],
      },
      {
        heading: "How do Vermont teachers use CourseSmith with these standards?",
        paragraphs: [
          "CourseSmith handles the drafting from your textbook, and you handle the standard and the local proficiency it supports. It does not label output with Common Core, NGSS or local proficiency codes.",
        ],
        steps: [
          {
            name: "Upload your textbook or unit packet",
            text: "Add the PDF or DOCX your class uses, up to 40 MB, with the book name, subject and grade, then adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, grade range and teaching style, or upload a resume, so plans match how you teach in your supervisory union.",
          },
          {
            name: "Paste the standard and the proficiency",
            text: "Copy the Common Core or NGSS standard plus your school's related proficiency statement into Co-Pilot, and ask what evidence of learning the lesson should produce.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan with its homework and project idea, then a short test or assignment with marks and an answer key as an editable Word file.",
          },
          {
            name: "Confirm in the official documents",
            text: "Check the code and wording against the framework linked from the Agency of Education's standards page and your local proficiency scale before recording it.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Vermont Agency of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the Agency of Education or the State Board, and it does not tag or align output to Common Core, NGSS or local proficiency codes. It drafts from the textbook you upload, and you verify every standard you cite.",
      },
      {
        q: "Does Vermont have its own math or ELA standards?",
        a: "The Agency's standards page lists the Common Core State Standards as the adopted standards for math and ELA, so Vermont teachers use Common Core codes. Our Common Core page explains how those codes are built. Your supervisory union's curriculum and proficiency statements add the local layer.",
      },
      {
        q: "Can CourseSmith score student work against proficiency scales?",
        a: "No. CourseSmith generates lesson plans, test papers and assignments with marks and answer keys, but it does not collect or grade student work. Because tests and assignments download as editable Word files, you can add your school's proficiency scale or rubric before giving them to students.",
      },
      {
        q: "Which grades take the VTCAP science test?",
        a: "The Agency of Education says VTCAP science is given in grades 5, 8 and 11 and is designed to assess mastery of the Next Generation Science Standards. ELA and math are tested annually in grades 3 to 9.",
      },
    ],
    sources: [
      {
        label: "Vermont Agency of Education: Content Areas and Standards",
        url: "https://education.vermont.gov/student-learning/content-areas",
      },
      {
        label: "Vermont Agency of Education: Science",
        url: "https://education.vermont.gov/student-learning/content-areas/science",
      },
      {
        label: "Vermont Agency of Education: Education Quality Standards",
        url: "https://education.vermont.gov/education-quality-assurance/education-quality-standards",
      },
      {
        label: "Vermont State Board of Education: Rule Series 2000, Education Quality Standards",
        url: "https://education.vermont.gov/sites/aoe/files/documents/edu-state-board-rules-series-2000.pdf",
      },
      {
        label: "Vermont Agency of Education: 2024-2025 Statewide Assessment Results",
        url: "https://education.vermont.gov/press-release/vermont-agency-education-releases-2024-2025-statewide-assessment-results",
      },
      {
        label: "Next Generation Science Standards: 5-PS1-1 Matter and Its Interactions",
        url: "https://www.nextgenscience.org/pe/5-ps1-1-matter-and-its-interactions",
      },
    ],
    related: [
      "/standards/common-core",
      "/standards/ngss",
      "/features/ai-assignment-generator",
      "/use-cases/high-school",
    ],
    primaryKeyword: "vermont standards lesson plans",
    secondaryKeywords: [
      "vermont proficiency-based graduation requirements",
      "vermont education quality standards",
      "VTCAP lesson planning",
      "vermont common core and ngss",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Vermont",
      code: "US-VT",
      framework:
        "Standards adopted by the Vermont State Board of Education (Common Core State Standards, NGSS and other national frameworks)",
      adoptingBody: "Vermont State Board of Education",
      officialUrl: "https://education.vermont.gov/student-learning/content-areas",
    },
  },

  // ---------------------------------------------------------------- Washington
  {
    slug: "washington",
    group: "standards",
    navLabel: "Washington",
    navBlurb: "New WA math and ELA standards, data science codes and the 2027-28 move",
    metaTitle: "Washington Learning Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Washington lessons from your textbook during the switch to new math and ELA standards. Decode WA data science codes and verify each one with OSPI.",
    eyebrow: "Washington standards",
    h1: "Washington K-12 Learning Standards lesson plans during the 2026-27 transition",
    answer:
      "Washington lesson plans target the Washington State K–12 Learning Standards, which OSPI is revising subject by subject; new math and ELA standards were adopted in 2026 for required use in 2027-28. CourseSmith drafts plans and tests from your uploaded textbook, and you paste the standard and confirm it in OSPI's published document.",
    definition:
      "The Washington State K–12 Learning Standards are the subject-by-subject learning standards that Washington's Office of Superintendent of Public Instruction (OSPI) adopts and publishes for public schools.",
    takeaways: [
      "OSPI formally adopted revised K–12 mathematics standards through Bulletin 023-26 in June 2026 and revised English language arts standards in August 2026.",
      "OSPI gives educators the 2026-27 school year to explore the new math and ELA standards and requires their use with students in 2027-28.",
      "The new math standards add data science at every grade, and measurement codes such as 5.MD.B.2 became M.5.DA.MD.2.",
      "OSPI says new math items begin field testing in spring 2027 and will count toward student scores no earlier than spring 2029.",
      "CourseSmith does not tag Washington codes, so teachers paste the standard and verify it in OSPI's document.",
    ],
    sections: [
      {
        heading: "Where do Washington's learning standards stand in 2026?",
        paragraphs: [
          "Washington is mid-transition. OSPI's review page and 2026 bulletins show math and ELA newly adopted, science in initial adoption and other subjects earlier in the cycle, so the subject you teach decides which document to plan from this year.",
        ],
        table: {
          caption: "Status of selected Washington learning standards, as reported by OSPI in 2026",
          columns: ["Subject", "Status", "Key dates"],
          rows: [
            [
              "Mathematics",
              "Formally adopted (Bulletin 023-26)",
              "Adoption statement dated June 18, 2026; required with students in 2027-28",
            ],
            [
              "English language arts",
              "Formally adopted after initial adoption (Bulletin 006-26)",
              "Initial adoption March 12, 2026; formal adoption August 2026; required in 2027-28",
            ],
            [
              "Science",
              "Initial adoption (Bulletin 035-26)",
              "Feedback October 15 to December 13, 2026; formal adoption planned spring or summer 2027",
            ],
            [
              "Physical education",
              "Draft open for public comment",
              "Covered in Bulletin 035-26, October 2026",
            ],
            [
              "Educational technology and computer science",
              "Review beginning with an educator survey",
              "2026",
            ],
          ],
        },
      },
      {
        heading: "What does initial adoption mean for a Washington teacher?",
        paragraphs: [
          "Initial adoption is a stage OSPI added to its revision process in January 2025. Districts can begin implementing a subject's standards while OSPI collects feedback from classroom use, and the standards are finalized at formal adoption.",
          "Text can change between the two. OSPI's FAQ says the initial ELA standards were revised after survey feedback, including the removal of reading standard 7, so a plan written from an initial-adoption document should be rechecked against the final one.",
        ],
      },
      {
        heading: "How do the new Washington math codes read?",
        paragraphs: [
          "The new math codes start with M, then grade, domain and number. Data science standards follow the pattern M.[grade].DA.DS.[number] under a Data Analysis domain, and OSPI kept existing Common Core codes where it could, so 5.MD.B.2 became M.5.DA.MD.2.",
          "Some standards are labeled PRIORITY in the final document, such as M.3.DA.DS.3. The data science standards follow an inquiry cycle of formulating questions, collecting data, analyzing and interpreting, which suits a multi-day lesson sequence.",
          "During 2026-27 your district may still list the older codes in plans. Use whichever set your district names, and quote the code exactly as it appears in OSPI's document.",
        ],
      },
      {
        heading: "What changed in the new ELA standards?",
        paragraphs: [
          "OSPI lists three headline shifts. Argumentative, narrative and expository writing are embedded in a unified Writing domain organized by genre, purpose and the writing process, and foundational skills are elevated to a primary domain.",
          "Media literacy and digital citizenship are new, and OSPI says districts will need to evaluate whether additional materials are necessary. The same applies to data science in math, so check whether your current textbook covers these areas before you plan from it.",
        ],
      },
      {
        heading: "Which state tests measure Washington's standards?",
        paragraphs: [
          "Smarter Balanced tests cover ELA and math in grades 3 to 8 and 10, and the Washington Comprehensive Assessment of Science (WCAS) covers grades 5, 8 and 11. These are OSPI's state tests for accountability.",
          "Test changes trail the new standards. OSPI expects summative assessments to be phased in fully by 2029-30, new math items begin field testing in spring 2027, and its FAQ says instruction aligned to the new standards will still prepare students for the existing tests during the transition.",
        ],
      },
      {
        heading: "How do Washington teachers use CourseSmith with the learning standards?",
        paragraphs: [
          "CourseSmith drafts from the materials you upload, which matters in a transition year when your textbook may predate the new standards. It does not tag output with Washington codes.",
        ],
        steps: [
          {
            name: "Upload your textbook and supplements",
            text: "Add the course textbook as a PDF or DOCX, up to 40 MB, plus any district unit packet for new content such as data science or media literacy.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, grade range and teaching style, or upload a resume, so drafts match your classroom.",
          },
          {
            name: "Paste the Washington standard",
            text: "Copy the standard, old or new code as your district directs, into Co-Pilot and ask which part of the uploaded material addresses it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in OSPI's document",
            text: "Open the subject's standards page on ospi.k12.wa.us, confirm the code and wording in the final adopted version, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align lessons to the Washington learning standards?",
        a: "No. CourseSmith does not tag or align output to Washington standard codes, and it is not approved by OSPI. It drafts from the textbook and materials you upload. You paste the standard you are targeting, check it in OSPI's document and add the code to the plan yourself.",
      },
      {
        q: "My math textbook has no data science chapter. Can CourseSmith fill the gap?",
        a: "CourseSmith builds plans from what you upload, so it will not invent coverage your book lacks. Upload a data science unit packet your district or you wrote as a PDF or DOCX, plan from that file, and paste the M.[grade].DA.DS standard into Co-Pilot as you work.",
      },
      {
        q: "Should my 2026-27 plans use the old or new codes?",
        a: "OSPI describes 2026-27 as the year to explore and begin using the new math and ELA standards, with required use in 2027-28. Follow your district's direction on which codes appear in plans this year, and quote whichever code you use exactly as OSPI publishes it.",
      },
      {
        q: "Will the Smarter Balanced test change right away?",
        a: "No. OSPI says new math items begin field testing in spring 2027, field test items do not affect scores, and the new items will count no earlier than spring 2029. OSPI expects summative assessments to be phased in fully by the 2029-30 school year.",
      },
      {
        q: "Are Washington's science standards changing too?",
        a: "Yes. OSPI announced initial adoption of revised K-12 science standards in October 2026 through Bulletin 035-26, with feedback open until December 13, 2026 and formal adoption planned for spring or summer 2027. OSPI's Excel version cross-references the 2013 Next Generation Science Standards.",
      },
    ],
    sources: [
      {
        label: "OSPI: Washington State Learning Standards Review",
        url: "https://ospi.k12.wa.us/student-success/learning-standards-instructional-materials/washington-state-learning-standards-review",
      },
      {
        label: "OSPI: Learning Standards Review FAQs",
        url: "https://ospi.k12.wa.us/student-success/learning-standards-instructional-materials/washington-state-learning-standards-review/learning-standards-review-faqs",
      },
      {
        label: "OSPI: Mathematics K–12 Learning Standards",
        url: "https://ospi.k12.wa.us/student-success/resources-subject-area/mathematics/mathematics-k-12-learning-standards",
      },
      {
        label: "OSPI: English Language Arts Learning Standards",
        url: "https://ospi.k12.wa.us/student-success/resources-subject-area/english-language-arts/english-language-arts-learning-standards",
      },
      {
        label: "OSPI: 2026 Bulletins",
        url: "https://ospi.k12.wa.us/about-ospi/bulletins",
      },
      {
        label: "OSPI: State Testing",
        url: "https://ospi.k12.wa.us/student-success/testing/state-testing",
      },
    ],
    related: [
      "/standards/common-core",
      "/use-cases/math",
      "/use-cases/english-language-arts",
      "/features/curriculum-planner",
    ],
    primaryKeyword: "washington standards lesson plans",
    secondaryKeywords: [
      "washington k-12 learning standards",
      "WA math 2026 data science standards",
      "new washington ela standards",
      "smarter balanced lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Washington",
      code: "US-WA",
      framework: "Washington State K–12 Learning Standards",
      adoptingBody: "Washington Office of Superintendent of Public Instruction (OSPI)",
      officialUrl:
        "https://ospi.k12.wa.us/student-success/learning-standards-instructional-materials/washington-state-learning-standards-review",
    },
  },

  // ---------------------------------------------------------------- West Virginia
  {
    slug: "west-virginia",
    group: "standards",
    navLabel: "West Virginia CCRS",
    navBlurb: "WV Policy 2520 standards, M.3.15-style codes and WVGSA testing",
    metaTitle: "West Virginia Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan West Virginia lessons from your textbook. Learn how Policy 2520 standards and codes like M.3.15 work, then verify each code in the official rule.",
    eyebrow: "West Virginia standards",
    h1: "West Virginia College- and Career-Readiness Standards lesson plans from your textbook",
    answer:
      "West Virginia lesson plans cite the College- and Career-Readiness Standards, which the West Virginia Board of Education adopts as numbered Policy 2520 rules, with codes such as M.3.15. CourseSmith drafts plans and tests from the textbook you upload, and you paste the standard and check it in the policy's current official text.",
    definition:
      "The West Virginia College- and Career-Readiness Standards are the K-12 content standards that the West Virginia Board of Education adopts as Policy 2520 rules, one policy per content area, such as Policy 2520.2B for mathematics.",
    takeaways: [
      "Each West Virginia content area has its own Policy 2520 rule in the state's Code of State Rules, such as Policy 2520.2B for mathematics.",
      "West Virginia's current mathematics standards took effect July 1, 2024, amending the version that took effect July 1, 2016.",
      "A West Virginia math code has three parts, so M.3.15 means mathematics, grade 3, standard 15.",
      "The WVGSA tests ELA and math in grades 3 to 8 and science in grades 5 and 8, and grade 11 students take the SAT School Day.",
      "CourseSmith drafts from your textbook and does not tag Policy 2520 codes, so teachers add and verify them.",
    ],
    sections: [
      {
        heading: "Why are West Virginia's standards written as policies?",
        paragraphs: [
          "The West Virginia Board of Education has the responsibility of establishing education standards, and it adopts each content area's standards as a numbered policy filed as a rule with the Secretary of State. That gives every subject its own effective date, which you can look up in the Code of State Rules.",
          "Each new version amends the one before it, so the effective date tells you which version a plan should quote.",
        ],
        table: {
          caption: "Active Policy 2520 standards in the Code of State Rules, core subjects",
          columns: ["Policy", "Content area", "Current version effective"],
          rows: [
            ["2520.1A", "English Language Arts", "August 10, 2020"],
            ["2520.2B", "Mathematics", "July 1, 2024"],
            ["2520.3C", "Science", "July 1, 2022"],
            ["2520.4", "Social Studies", "July 1, 2025"],
          ],
        },
      },
      {
        heading: "How do you read a West Virginia math code?",
        paragraphs: [
          "A West Virginia math code has three parts separated by periods: the content code, the grade level or course, and the standard number. Policy 2520.2B gives M.3.1 as mathematics, grade 3, standard 1, and M.C.1 as mathematics, calculus, standard 1.",
          'Numbers run continuously through a grade rather than restarting in each cluster. M.3.15 sits in grade 3 Number and Operations—Fractions and reads "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b."',
          "The policy defines clusters as groups of standards and domains as broad components of a content area. Grade 6, for example, has five domains: Ratios and Proportional Reasoning, The Number System, Expressions and Equations, Geometry, and Statistics and Probability.",
        ],
      },
      {
        heading: "Why should a plan quote the instructional note too?",
        paragraphs: [
          "Instructional notes set the limits of a standard. M.3.15 carries the note that fractions in the standard are limited to denominators of 2, 3, 4, 6 and 8, and M.3.8 is limited to problems posed with whole numbers and having whole-number answers.",
          "A textbook chapter can range beyond those limits. Paste the note with the standard when you draft, and trim activities or test items that go past it.",
        ],
      },
      {
        heading: "What changed in the 2024 mathematics standards?",
        paragraphs: [
          "Policy 2520.2B says the 2024 standards came from an intensive review of the standards placed into policy on July 1, 2016. Teachers and higher education representatives met in summer and fall 2022, a stakeholder team evaluated the draft in January 2023, and the policy notes several changes within grade levels and courses.",
          "The policy also asks teachers to integrate content standards with the Mathematical Habits of Mind, such as making sense of problems and persevering in solving them. For grade 3 it names four critical areas: multiplication and division within 100, fractions, area, and two-dimensional shapes.",
        ],
      },
      {
        heading: "Which state tests measure the standards?",
        paragraphs: [
          "The West Virginia General Summative Assessment (WVGSA) is an online, adaptive test of ELA and math in grades 3 to 8, with science in grades 5 and 8. Grade 11 students take the SAT School Day as the high school test.",
          "WVDE also administers the West Virginia Alternate Summative Assessment. CourseSmith can build practice tests from textbook chapters, but it has no access to WVGSA or SAT items.",
        ],
      },
      {
        heading: "How do West Virginia teachers use CourseSmith with the CCR standards?",
        paragraphs: [
          "CourseSmith covers the drafting from your textbook; the Policy 2520 code and its instructional note come from you.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Add the textbook your county uses as a PDF or DOCX, up to 40 MB, with the book name, subject and grade, then tidy the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload your resume or fill in your school, grade range and teaching style so drafts match your classroom.",
          },
          {
            name: "Paste the standard and its note",
            text: "Copy the Policy 2520 standard with any instructional note into Co-Pilot, and ask for an activity that stays inside the note's limits.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in the current policy",
            text: "Open the active version of the policy in the Code of State Rules, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the West Virginia Department of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the West Virginia Board of Education or WVDE, and it does not tag or align output to Policy 2520 codes. It drafts from your uploaded textbook, and you verify each code in the current policy text.",
      },
      {
        q: "Where do I find the official text of a Policy 2520 standard?",
        a: "Each policy is filed with the West Virginia Secretary of State, whose Code of State Rules lists every version with its effective date and links to the full text. Policy 2520.2B for mathematics, for example, is Title-Series 126-044BB, effective July 1, 2024. WVDE also lists its policies online.",
      },
      {
        q: "Can I reuse math plans written before July 2024?",
        a: "Recheck them first. Policy 2520.2B amended the version effective July 1, 2016, and the policy notes changes within grade levels and courses. Compare any code and wording in an older plan with the current policy before you reuse it.",
      },
      {
        q: "Can CourseSmith write WVGSA practice tests?",
        a: "CourseSmith writes practice tests from the textbook chapters you choose, with multiple choice, short answer, long answer and fill in the blanks questions, marks and an answer key. It has no access to WVGSA items, so compare each question with the standard and its instructional note.",
      },
    ],
    sources: [
      {
        label:
          "WV Secretary of State: Policy 2520.2B, College- and Career-Readiness Standards for Mathematics (126CSR44BB)",
        url: "https://apps.sos.wv.gov/adlaw/csr/rule.aspx?rule=126-044BB",
      },
      {
        label: "WV Secretary of State: Policy 2520.2B final rule text (effective July 1, 2024)",
        url: "https://apps.sos.wv.gov/adlaw/csr/readfile.aspx?DocId=56641&Format=PDF",
      },
      {
        label: "WV Secretary of State: Policy 2520.1A, Standards for English Language Arts",
        url: "https://apps.sos.wv.gov/adlaw/csr/rule.aspx?rule=126-044AA",
      },
      {
        label: "WV Secretary of State: Policy 2520.3C, Standards for Science",
        url: "https://apps.sos.wv.gov/adlaw/csr/rule.aspx?rule=126-044CC",
      },
      {
        label: "WV Secretary of State: Policy 2520.4, Standards for Social Studies",
        url: "https://apps.sos.wv.gov/adlaw/csr/rule.aspx?rule=126-044D",
      },
      {
        label: "WVDE: General Summative Assessment",
        url: "https://wvde.us/academics/assessment/general-summative-assessment",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/use-cases/math",
      "/use-cases/middle-school",
    ],
    primaryKeyword: "west virginia standards lesson plans",
    secondaryKeywords: [
      "west virginia college and career readiness standards",
      "policy 2520 lesson plans",
      "west virginia math standards codes",
      "WVGSA lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "West Virginia",
      code: "US-WV",
      framework: "West Virginia College- and Career-Readiness Standards (Policy 2520 series)",
      adoptingBody: "West Virginia Board of Education",
      officialUrl: "https://wvde.us/policies/",
    },
  },

  // ---------------------------------------------------------------- Wisconsin
  {
    slug: "wisconsin",
    group: "standards",
    navLabel: "Wisconsin Standards",
    navBlurb: "Wisconsin's model standards, subject codes and the Forward Exam",
    metaTitle: "Wisconsin Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Wisconsin Academic Standards lessons from your district's textbook. Decode math, ELA and science codes and verify each in DPI's documents. Start free.",
    eyebrow: "Wisconsin standards",
    h1: "Wisconsin Academic Standards lesson plans that start from your district's textbook",
    answer:
      "Wisconsin lesson plans follow the Wisconsin Academic Standards, which the State Superintendent adopts as a model that locally elected school boards may adopt, with codes such as M.3.NF.A.1. CourseSmith drafts plans and tests from your uploaded textbook, and you paste the standard your district adopted and confirm it in DPI's documents.",
    definition:
      "The Wisconsin Academic Standards are statements, adopted by Wisconsin's State Superintendent of Public Instruction, of what students should know and be able to do in each subject, which local school boards adopt voluntarily.",
    takeaways: [
      "In Wisconsin, state standards serve as a model, and locally elected school boards adopt academic standards for their own districts.",
      "The State Superintendent adopted the current science standards on November 13, 2017, ELA standards on May 27, 2020, and mathematics standards on May 10, 2021.",
      "A Wisconsin math code such as M.3.NF.A.1 reads as math, grade 3, Number and Operations—Fractions, cluster A, standard 1.",
      "The Forward Exam tests ELA and math in grades 3 to 8, science in grades 4 and 8, and social studies in grades 4, 8 and 10.",
      "CourseSmith does not tag Wisconsin codes, so teachers paste and verify the standard their district adopted.",
    ],
    sections: [
      {
        heading: "Are Wisconsin's academic standards required?",
        paragraphs: [
          "Not directly. DPI's standards documents say that in Wisconsin all state standards serve as a model, locally elected school boards adopt academic standards in each subject area, and adopting the state standards is voluntary.",
          "DPI also separates standards from curriculum. Standards say what students should know and be able to do, while curriculum is the program a local district devises, including lessons, instructional materials and techniques. Your plan should cite the standard your board adopted and follow your district's curriculum.",
        ],
      },
      {
        heading: "How does DPI review and revise a set of standards?",
        paragraphs: [
          "DPI's process starts with a notice of intent to review a subject and a public comment period. The State Superintendent's Standards Review Council examines the comments and may recommend revision.",
        ],
        bullets: [
          "The State Superintendent decides whether to pursue a revision.",
          "A state writing committee drafts standards for all grade levels.",
          "The draft is opened for feedback from the public, educators, stakeholders and the Legislature.",
          "The Standards Review Council reviews the draft again.",
          "The State Superintendent determines adoption.",
        ],
      },
      {
        heading: "How do Wisconsin standard codes read across subjects?",
        paragraphs: [
          "Each subject has its own code pattern, so read the prefix first. The table uses examples printed in DPI's current standards documents.",
          "The 2021 math standards also flag notation you should keep in a plan. Where a number changed from 2010, the new code appears with the old one, as in M.K.CC.C.7 [WI.2010.K.CC.C.6]; (M) marks mathematical modeling and (F2Y) marks content for the first two years of high school.",
        ],
        table: {
          caption: "Reading Wisconsin standard codes, with examples from DPI's documents",
          columns: ["Subject (year adopted)", "Example code", "How to read it"],
          rows: [
            [
              "Mathematics (2021)",
              "M.3.NF.A.1",
              "Math, grade 3, Number and Operations—Fractions, cluster A, standard 1: understand a unit fraction as the quantity formed when a whole is partitioned into equal parts",
            ],
            [
              "English language arts (2020)",
              "R.3.1",
              "Reading, grade 3, standard 1: develop and answer questions to locate relevant and specific details in a text to support an answer or inference",
            ],
            [
              "Science (2017)",
              "SCI.LS1.A.1",
              "Science, life science standard 1, learning priority A, performance indicator for the K-2 band, suggested for grade 1",
            ],
          ],
        },
      },
      {
        heading: "Which tests measure Wisconsin's standards?",
        paragraphs: [
          "Wisconsin uses three summative tests across grades 3 to 11. DPI's 2026-27 schedule also lists DLM, the Wisconsin Alternate Assessment for students with the most significant cognitive disabilities, alongside each one.",
        ],
        table: {
          caption: "Wisconsin summative academic assessments for 2026-27, per DPI",
          columns: ["Grade", "Test", "Subjects"],
          rows: [
            ["3, 5, 6, 7", "Forward Exam", "ELA and mathematics"],
            ["4 and 8", "Forward Exam", "ELA, mathematics, science and social studies"],
            ["9 and 10", "PreACT Secure", "English, mathematics, reading and science"],
            ["10", "Forward Exam", "Social studies"],
            ["11", "The ACT with writing", "English, mathematics, reading, science and writing"],
          ],
        },
      },
      {
        heading: "How do Wisconsin teachers use CourseSmith with the academic standards?",
        paragraphs: [
          "CourseSmith drafts from the curriculum materials your district already chose, which fits Wisconsin's local-control model. It does not label output with Wisconsin codes.",
        ],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Add the textbook from your district's curriculum as a PDF or DOCX, up to 40 MB, with the book name, subject and grade, then review the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload your resume or enter your school, grade range and teaching style so plans fit your classroom.",
          },
          {
            name: "Paste your board's standard",
            text: "Copy the standard your school board adopted, including any (M) or (F2Y) notation, into Co-Pilot and ask which planned objectives address it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in DPI's document",
            text: "Open the subject's standards document from dpi.wi.gov, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Wisconsin DPI?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the Department of Public Instruction, and it does not tag or align output to Wisconsin standard codes. It drafts from the textbook you upload, and you confirm every standard you cite in DPI's documents or your district's adopted list.",
      },
      {
        q: "My district adopted its own standards. Which should I paste?",
        a: "Paste the standard your school board adopted. DPI says the state standards serve as a model and local boards adopt academic standards for their communities, so your district's list is the one your plans answer to. CourseSmith works the same way whichever wording you paste.",
      },
      {
        q: "What do (M) and (F2Y) mean in Wisconsin math standards?",
        a: "In the 2021 Wisconsin Standards for Mathematics, (M) marks standards especially valuable for mathematical modeling in grades 6 to 12, and (F2Y) marks content all students should complete in their first two years of high school math. Keep both markers when you paste a standard into Co-Pilot.",
      },
      {
        q: "Can CourseSmith write Forward Exam or PreACT practice?",
        a: "CourseSmith writes practice tests from the textbook chapters you choose, with your question types, marks and difficulty mix. It has no access to Forward Exam, PreACT Secure or ACT items and does not predict them, so review each question against the standard before students see it.",
      },
    ],
    sources: [
      {
        label: "DPI: Wisconsin Standards for Mathematics (adopted May 10, 2021)",
        url: "https://dpi.wi.gov/sites/default/files/imce/standards/pdf/MathematicsStandards2021.pdf",
      },
      {
        label: "DPI: Wisconsin Standards for English Language Arts (adopted May 27, 2020)",
        url: "https://dpi.wi.gov/sites/default/files/imce/standards/pdf/ELAStandards2020.pdf",
      },
      {
        label: "DPI: Wisconsin Standards for Science (adopted November 13, 2017)",
        url: "https://dpi.wi.gov/sites/default/files/imce/standards/pdf/ScienceStandards2017.pdf",
      },
      {
        label: "DPI: 2026-27 Wisconsin Summative Academic Assessments by Grade",
        url: "https://dpi.wi.gov/media/54310/download?inline=",
      },
    ],
    related: [
      "/standards/common-core",
      "/use-cases/schools-and-districts",
      "/features/quiz-generator",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "wisconsin standards lesson plans",
    secondaryKeywords: [
      "wisconsin academic standards lesson plans",
      "wisconsin math standards codes",
      "forward exam lesson planning",
      "wisconsin science standards SCI codes",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Wisconsin",
      code: "US-WI",
      framework: "Wisconsin Academic Standards",
      adoptingBody:
        "Wisconsin State Superintendent of Public Instruction (Department of Public Instruction)",
      officialUrl: "https://dpi.wi.gov/standards",
    },
  },

  // ---------------------------------------------------------------- Wyoming
  {
    slug: "wyoming",
    group: "standards",
    navLabel: "Wyoming WYCPS",
    navBlurb: "Wyoming content vs performance standards, 2023 sets and WY-TOPP",
    metaTitle: "Wyoming Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Wyoming WYCPS lessons from your textbook. Learn content vs performance standards, the reduced 2023 sets and WY-TOPP changes, then verify each code.",
    eyebrow: "Wyoming standards",
    h1: "Wyoming Content and Performance Standards lesson plans from your own textbook",
    answer:
      "Wyoming lesson plans follow the Wyoming Content and Performance Standards (WYCPS), which the State Board of Education adopts through Chapter 10 rules and districts teach and assess locally. CourseSmith drafts plans and tests from the textbook you upload, and you paste the WYCPS standard and confirm it in the Department of Education's grade-level document.",
    definition:
      "The Wyoming Content and Performance Standards (WYCPS) are the statewide standards in ten content areas, adopted by the Wyoming State Board of Education in Chapter 10 rules, that define what students should know and how well they must show it.",
    takeaways: [
      "Wyoming separates Content Standards, which students must be taught, from Performance Standards, which districts assess through their own District Assessment System.",
      "The State Board reduced the number of standards in its 2023 sets, adopted in Chapter 10 rules on July 17, 2024, and districts had to implement math and science by the start of 2025-26.",
      "Wyoming's 2012 ELA standards remained the sole adopted set in the department's 2025 grade-level documents while a new ELA set moved through review.",
      "State law requires each content area to be reviewed every nine years, and districts get three school years to implement new standards.",
      "WY-TOPP tests ELA and math in grades 3 to 10 and science in grades 4, 8 and 10, and the state pays for every junior to take the ACT.",
    ],
    sections: [
      {
        heading: "What is the difference between Content and Performance Standards?",
        paragraphs: [
          "Content Standards are what students should know and be able to do by the end of a grade or band. The Wyoming Department of Education says they cannot be further prioritized at the local level, and all students must receive instruction on every content standard unless it is designated as elective.",
          "Performance Standards are the standards students are also assessed on through the district's own assessment system. The state's performance level descriptors (PLDs) describe how good is good enough, and the Proficient PLD is the performance standard. Which content areas carry Performance Standards depends on the grade band.",
        ],
        table: {
          caption: "State-level requirements for the 2023 WYCPS sets, from Chapter 10 rules (2024)",
          columns: [
            "Grade band",
            "Math",
            "Science",
            "Health and Safety; PE",
            "Fine and Performing Arts; Computer Science",
          ],
          rows: [
            ["K-2", "Content and Performance", "Content only", "Content only", "Content only"],
            [
              "3-5",
              "Content and Performance",
              "Content and Performance",
              "Content only",
              "Content only",
            ],
            [
              "6-8",
              "Content and Performance",
              "Content and Performance",
              "Content only",
              "Content and Performance, elective",
            ],
            [
              "9-12",
              "Content and Performance",
              "Content and Performance",
              "Content and Performance",
              "Content and Performance, elective",
            ],
          ],
        },
      },
      {
        heading: "Which Wyoming standards are new?",
        paragraphs: [
          "Six content areas have 2023 sets, adopted in Chapter 10 Rules on Standards on July 17, 2024, after a State Board resolution to reduce the number of standards. Math and science replaced their 2021 editions by the start of 2025-26, while computer science, physical education, health and safety, and fine and performing arts follow by the start of 2026-27.",
          "For math, science and computer science, the department says the wording of the standards did not change, but the number of standards was reduced. ELA is different: the department's 2025 grade-level documents list the 2012 ELA standards as the sole adopted set until a new set is adopted, and the State Board sought public input on proposed 2026 social studies standards through September 27, 2026.",
        ],
      },
      {
        heading: "How do you read a Wyoming math code?",
        paragraphs: [
          'A Wyoming math code reads grade, domain and number. 1.OA.1 is grade 1, Operations and Algebraic Thinking, standard 1: "Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions."',
          "Because the 2023 math set dropped standards without renumbering the rest, numbers skip. In grade 1, 1.OA.1 is followed by 1.OA.6 and 1.OA.7, so copy codes exactly from the current document rather than assuming a sequence.",
          "The department's grade-level documents compile every active set, including outgoing ones during a transition. Check that the heading over a standard says it is the currently adopted set before you quote it.",
        ],
      },
      {
        heading: "How are Wyoming standards reviewed and phased in?",
        paragraphs: [
          "A Standards Review Committee of educators, parents, business and community members writes the standards, and the State Board of Education approves them after multiple rounds of input. The department says the work usually takes 9 to 18 months, plus 4 to 6 months for input and rules promulgation.",
          "State law requires each content area to be reviewed every nine years. After adoption, districts have three school years to build the new standards into curriculum, instruction and district assessments, and schools decide how standards are taught and which materials are used.",
        ],
      },
      {
        heading: "How does WY-TOPP measure the standards?",
        paragraphs: [
          "WY-TOPP is Wyoming's general summative test, taken by about 99 percent of students. It covers ELA and math in grades 3 to 10 and science in grades 4, 8 and 10, while WY-ALT serves students with significant cognitive disabilities, and the state pays for every junior to take the ACT.",
          "The reduced math and science standards changed reporting. The 2023 sets were assessed in spring 2026, and because there are no longer enough standards for domain-specific scores, math and science results are a single score and performance level per content area. From 2026-27, writing in grades 5, 7 and 9 is embedded in a single ELA assessment instead of given separately.",
        ],
      },
      {
        heading: "How do Wyoming teachers use CourseSmith with the WYCPS?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district selected; Wyoming leaves curriculum and materials to districts, and the WYCPS code and PLD come from you.",
        ],
        steps: [
          {
            name: "Upload your district textbook",
            text: "Add the textbook as a PDF or DOCX, up to 40 MB, with the book name, subject and grade, then adjust the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, grade range and teaching style, or upload a resume, so drafts match your classroom.",
          },
          {
            name: "Paste the standard and its PLD",
            text: "Copy the WYCPS content standard, and the Proficient PLD where a Performance Standard applies, into Co-Pilot and ask for an activity that produces that level of work.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks and an Easy, Medium and Hard mix for your district assessment evidence.",
          },
          {
            name: "Confirm in the WDE document",
            text: "Open the current grade-level WYCPS document from edu.wyoming.gov, confirm the code is in the currently adopted set, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Wyoming Department of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the Wyoming Department of Education or the State Board, and it does not tag or align output to WYCPS codes. It drafts from your uploaded textbook, and you confirm each standard in the department's current documents.",
      },
      {
        q: "Can my district skip some Wyoming content standards?",
        a: "Not unless they are electives. The department says Content Standards are the state standards, cannot be further prioritized at the local level, and every student must receive instruction on each one unless Chapter 10 marks that content as elective. Districts do choose curriculum, materials and pacing.",
      },
      {
        q: "Why did WY-TOPP math reports stop showing domain scores?",
        a: "The 2023 math and science sets have fewer standards, and the department says there are no longer enough standards and items for domain-specific scores. Starting in 2025-26, WY-TOPP math and science results are a single score and performance level for each content area.",
      },
      {
        q: "Is the 2012 ELA set still the one to plan from?",
        a: "The department's 2025 grade-level documents list the 2012 ELA standards as the sole adopted set until a new set is adopted through the Standards Review Process. Check the department's Standards Review page for the latest ELA status before you start a new course plan.",
      },
      {
        q: "How can a CourseSmith test help with Performance Standards?",
        a: "Performance Standards are assessed through your district's own assessment system, so classroom tests can supply evidence. CourseSmith builds tests from your textbook with marks, an answer key and a difficulty mix; you compare each item with the Proficient PLD and edit the Word file as needed.",
      },
    ],
    sources: [
      {
        label: "Wyoming Department of Education: WYCPS Fact Sheet",
        url: "https://edu.wyoming.gov/wp-content/uploads/2025/01/WYCPS-Fact-Sheet.pdf",
      },
      {
        label: "WDE: All Currently-Adopted Grade 1 Standards",
        url: "https://edu.wyoming.gov/wp-content/uploads/2024/07/2025-Grade-1-Comprehensive-WYCPS_no-PLDs_public.pdf",
      },
      {
        label: "WDE: Standards Review",
        url: "https://edu.wyoming.gov/transparency/content-performance-standards/standards-review",
      },
      {
        label: "WDE: Standards and Assessment 101 (May 2026)",
        url: "https://edu.wyoming.gov/wp-content/uploads/2026/05/SA-101-Session.pdf",
      },
      {
        label: "WDE: WY-TOPP Fall Interim Window Opening memo (August 24, 2026)",
        url: "https://edu.wyoming.gov/sups-memo/8-24-2026-wy-topp-fall-interim-window-opening/",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/features/textbook-to-lesson-plan",
      "/use-cases/schools-and-districts",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "wyoming standards lesson plans",
    secondaryKeywords: [
      "wyoming content and performance standards",
      "WYCPS lesson plans",
      "wyoming performance level descriptors",
      "WY-TOPP lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Wyoming",
      code: "US-WY",
      framework: "Wyoming Content and Performance Standards (WYCPS)",
      adoptingBody: "Wyoming State Board of Education",
      officialUrl: "https://edu.wyoming.gov/transparency/content-performance-standards/",
    },
  },
];
