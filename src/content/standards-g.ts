import type { ContentPage } from "./types";

export const STANDARDS_PAGES_G: ContentPage[] = [
  // ---------------------------------------------------------------- Oklahoma
  {
    slug: "oklahoma",
    group: "standards",
    navLabel: "Oklahoma OAS",
    navBlurb: "OAS strands, objectives and OSTP, plus the 2027 ELA revision",
    metaTitle: "Oklahoma Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Read Oklahoma Academic Standards codes like 3.N.1.1, follow the ELA revision due for a 2027 vote, and draft OAS lessons from your textbook. Start free.",
    eyebrow: "Standards: Oklahoma Academic Standards",
    h1: "Oklahoma Academic Standards lesson plans built from your classroom textbook",
    answer:
      "Oklahoma Academic Standards lesson plans cite an objective such as 3.N.1.1, which the Oklahoma State Department of Education publishes by grade and subject. The State Board reviews each subject every six years. CourseSmith drafts plans and tests from your textbook, and you paste the OAS objective and confirm it in OSDE's official document.",
    definition:
      "The Oklahoma Academic Standards (OAS) are the expectations for what Oklahoma students should know and be able to do by the end of each school year, reviewed by the Oklahoma State Board of Education every six years under 70 O.S. § 11-103.6a.",
    takeaways: [
      "Oklahoma law, 70 O.S. § 11-103.6a, requires the State Board to review subject matter standards every six years, in coordination with the textbook adoption cycle.",
      "In OAS mathematics, a code such as 3.N.1.1 names the grade, the strand, the standard and the objective, and objectives are the stepping stones toward each standard.",
      "OSDE lists the 2021 ELA and 2022 math standards as assessed on the OSTP in grades 3 to 8 and on the grade 11 College- and Career-Readiness Assessments starting in spring 2024.",
      "Revised OAS for English language arts opened for public comment on October 21, 2026, with a State Board vote scheduled for February 18, 2027.",
      "CourseSmith does not tag or align output to OAS codes, so Oklahoma teachers paste the objective and verify it in OSDE's documents.",
    ],
    sections: [
      {
        heading: "Who sets the Oklahoma Academic Standards and how often do they change?",
        paragraphs: [
          "The Oklahoma State Board of Education reviews the standards, and state law sets the pace. Under 70 O.S. § 11-103.6a, each subject must be thoroughly reviewed every six years, in step with the textbook adoption cycle, and OSDE says Oklahoma educators and content specialists write, review and give feedback on every draft.",
          "Oklahoma adds a step many states skip. OSDE's new standards page explains that after the State Board votes, revised standards go to the Oklahoma Legislature, and schools begin implementing them only once lawmakers approve.",
        ],
        table: {
          caption: "OAS editions and state assessments as listed by OSDE (page updated July 2026)",
          columns: ["Subject", "Current OAS edition", "How it is assessed"],
          rows: [
            [
              "English Language Arts",
              "OAS 2021",
              "OSTP grades 3-8 and grade 11 CCRA, starting spring 2024",
            ],
            ["Mathematics", "OAS 2022", "OSTP grades 3-8 and grade 11 CCRA, starting spring 2024"],
            [
              "Science",
              "OAS 2020, with a 2026 edition listed",
              "OSTP grades 5 and 8, grade 11 CCRA",
            ],
            ["Social Studies", "OAS 2019, with a 2026 edition listed", "High school U.S. History"],
            ["Computer Science", "OAS 2023", "No state assessment"],
            ["Personal Financial Literacy", "OAS 2024", "Competencies required for graduation"],
          ],
        },
      },
      {
        heading: "How do you read an OAS math code?",
        paragraphs: [
          "An OAS math code reads grade, strand, standard, then objective. In 3.N.1.1, the 3 is third grade, N is the Numbers & Operations strand, the first 1 is standard 3.N.1, which asks students to compare and represent whole numbers up to 100,000 with an emphasis on place value and equality, and the final 1 is the first objective under it.",
          "Objective 3.N.1.1 reads: read, write, discuss, and represent whole numbers up to 100,000, with representations that include numerals, words, pictures, number lines, and manipulatives. OSDE calls objectives the stepping stones to a standard and says they can and should be bundled, so one lesson may cover 3.N.1.1 and 3.N.1.2 together.",
        ],
        table: {
          caption: "Anatomy of the OAS math objective 3.N.1.1",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade", "3", "Third grade"],
            ["Strand", "N", "Numbers & Operations (the others are A, GM and D)"],
            ["Standard", "1", "3.N.1, compare and represent whole numbers up to 100,000"],
            ["Objective", "1", "3.N.1.1, read, write, discuss and represent whole numbers"],
          ],
        },
      },
      {
        heading: "What are Oklahoma's Mathematical Actions and Processes?",
        paragraphs: [
          "The Mathematical Actions and Processes, or MAPs, are seven skills that OSDE wants students to build across PK-12 alongside the four content strands: Numbers & Operations, Algebraic Reasoning & Algebra, Geometry & Measurement, and Data & Probability. They appear as a banner at the top of every grade's standards.",
          "OSDE says it is not intended that every MAP be used with every content standard. Pick the one or two that fit the objective, such as communicating mathematically for a lesson where students explain place value.",
        ],
        bullets: [
          "Develop a Deep and Flexible Conceptual Understanding",
          "Develop Accurate and Appropriate Procedural Fluency",
          "Develop Strategies for Problem Solving",
          "Develop Mathematical Reasoning",
          "Develop a Productive Mathematical Disposition",
          "Develop the Ability to Make Conjectures, Model, and Generalize",
          "Develop the Ability to Communicate Mathematically",
        ],
      },
      {
        heading: "Which Oklahoma standards are being revised now?",
        paragraphs: [
          "English language arts is in revision for the first time since 2021. OSDE opened public comment from October 21 to December 4, 2026, scheduled the State Board vote for February 18, 2027, and expects the legislature to consider the standards in its 2027 session, with schools able to begin implementation in 2027-28 once they are approved.",
          "OSDE's Office of Assessment will decide when the revised ELA standards appear on the OSTP. Elementary ELA textbook adoption follows in 2027 and secondary in 2028, health and physical education standards are also under review, and the review for the next math revision is scheduled to begin in January 2027.",
        ],
      },
      {
        heading: "Which state tests measure the OAS?",
        paragraphs: [
          "The Oklahoma School Testing Program (OSTP) measures the OAS. OSDE lists general assessments in mathematics, English language arts and science for grades 3 to 8 and 11, with grade 11 tested through the College- and Career-Readiness Assessments and a grade 11 U.S. History assessment.",
          "Students with the most significant cognitive disabilities take the Oklahoma Alternate Assessment Program (OAAP), which measures alternate academic standards called Essential Elements. OSDE says all of its assessments are aligned to the Oklahoma Academic Standards.",
        ],
      },
      {
        heading: "How do Oklahoma teachers use CourseSmith with the OAS?",
        paragraphs: [
          "CourseSmith works as a drafting assistant for the textbook your district adopted. The OAS objective comes from you, and it goes into the plan only after you check it against OSDE's document.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, then tidy the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so every plan reads like your Oklahoma classroom.",
          },
          {
            name: "Paste the OAS objective",
            text: "Copy the objective, such as 3.N.1.1, with its full wording into Co-Pilot and ask for an activity built on its verbs: read, write, discuss and represent.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in OSDE's document",
            text: "Check the code and wording in OSDE's standards PDF or the Oklahoma Standards Satchel, then write the objective into your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align lesson plans to the Oklahoma Academic Standards?",
        a: "No. CourseSmith does not tag or align output to OAS codes, and it is not approved by OSDE or the Oklahoma State Board of Education. It drafts from the textbook you upload. You paste the objective you are teaching, confirm it in OSDE's document and add the code to your plan yourself.",
      },
      {
        q: "Should I cite the OAS standard or the objective?",
        a: "Cite the objective, such as 3.N.1.1, because it names the specific competency students show. The standard, such as 3.N.1, describes the broader goal. OSDE encourages bundling objectives, so a plan can list two or three objectives from the same standard when one activity covers them.",
      },
      {
        q: "What is the Oklahoma Standards Satchel?",
        a: "The Satchel is OSDE's online standards library at ok-satchel.commongoodlt.com. It uses the CASE format, which gives each objective a unique digital identifier that learning platforms can read. The PDF versions of the standards remain on OSDE's website if you prefer a printable copy.",
      },
      {
        q: "Will the revised ELA standards change my plans this school year?",
        a: "OSDE says schools can begin implementing the revised ELA standards in 2027-28, after a State Board vote in February 2027 and legislative approval. Until then the OAS-ELA 2021 remain the published standards, so keep citing them and watch OSDE's new standards page for the final version.",
      },
      {
        q: "Can I plan Oklahoma science lessons with CourseSmith?",
        a: "Yes, if you upload the science textbook or unit materials your school uses. Paste the OAS science standard into Co-Pilot and ask how a planned lesson addresses it. OSDE lists a 2026 science edition alongside the 2020 standards, so confirm which edition your district has adopted before citing a code.",
      },
    ],
    sources: [
      {
        label: "OSDE: Oklahoma Academic Standards",
        url: "https://oklahoma.gov/education/services/standards-learning/oklahoma-academic-standards.html",
      },
      {
        label: "OSDE: New Standards (review and revision process)",
        url: "https://oklahoma.gov/education/services/standards-learning/oklahoma-academic-standards/new-standards.html",
      },
      {
        label: "OSDE: Oklahoma Academic Standards for Mathematics",
        url: "https://oklahoma.gov/education/services/standards-learning/mathematics.html",
      },
      {
        label: "OSDE: 2022 Oklahoma Academic Standards for Mathematics (PDF)",
        url: "https://oklahoma.gov/content/dam/ok/en/osde/documents/services/standards-learning/mathematics/2022%20OAS%20Math.pdf",
      },
      {
        label: "OSDE: State Testing Resources",
        url: "https://oklahoma.gov/education/services/assessments/state-testing-resources.html",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/use-cases/math",
      "/standards/texas-teks",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "oklahoma standards lesson plans",
    secondaryKeywords: [
      "oklahoma academic standards lesson plans",
      "OAS math objectives explained",
      "oklahoma mathematical actions and processes",
      "OSTP lesson planning",
      "oklahoma ELA standards revision 2027",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Oklahoma",
      code: "US-OK",
      framework: "Oklahoma Academic Standards (OAS)",
      adoptingBody: "Oklahoma State Board of Education, with approval by the Oklahoma Legislature",
      officialUrl:
        "https://oklahoma.gov/education/services/standards-learning/oklahoma-academic-standards.html",
    },
  },

  // ---------------------------------------------------------------- Oregon
  {
    slug: "oregon",
    group: "standards",
    navLabel: "Oregon Standards",
    navBlurb: "Oregon's ELA.4.RL.1 code format, 2026 ELA standards and OSAS",
    metaTitle: "Oregon Content Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Decode Oregon's new ELA.4.RL.1 standard codes, plan for the 2026 ELA standards arriving in 2028-29, and draft lessons from your own textbook. Start free.",
    eyebrow: "Standards: Oregon academic content standards",
    h1: "Oregon content standards lesson plans drafted from your own textbook",
    answer:
      "Oregon lesson plans cite academic content standards adopted by the State Board of Education under ORS 329.045, such as ELA.4.RL.1 in the 2026 English language arts standards. CourseSmith drafts plans and tests from the textbook you upload, and you paste the Oregon standard and check its code in the Oregon Department of Education's documents.",
    definition:
      "Oregon's academic content standards are the State Board of Education's statements of what Oregon students are expected to know and be able to do in each content area, adopted under ORS 329.045.",
    takeaways: [
      "The Oregon State Board of Education adopts content standards under ORS 329.045, and ODE says they are regularly reviewed and revised.",
      "The State Board adopted new K-12 English Language Arts and Literacy Standards on June 18, 2026, for implementation in the 2028-29 school year.",
      "Oregon's 2026 standards use a shared code format, so ELA.4.RL.1 means English language arts, grade 4, Reading Literature, standard 1.",
      "Under HB 3365 (2025), revised science standards must add climate change content, and the State Board is expected to adopt them in spring 2029.",
      "CourseSmith does not tag Oregon codes, so teachers paste the standard and verify it in ODE's documents.",
    ],
    sections: [
      {
        heading: "Who adopts Oregon's content standards?",
        paragraphs: [
          "The Oregon State Board of Education adopts content standards under ORS 329.045. ODE convenes review panels of educators and content experts, shares draft standards for public input, and then brings them to the board for adoption.",
          "Only the standards themselves are adopted. ODE explains that indicators, which may appear in guidance, are optional and illustrate the breadth and depth of a standard without prescribing instruction.",
        ],
        table: {
          caption:
            "Selected Oregon content standards by the year ODE lists for them (October 2026)",
          columns: ["Content area", "Year listed", "Planning note"],
          rows: [
            ["English Language Arts", "2026", "Adopted June 18, 2026; implemented in 2028-29"],
            ["Mathematics", "2021", "Includes a K-12 Data Reasoning domain"],
            ["Science", "2022", "Replaced the 2014 standards; revision expected spring 2029"],
            ["Social Sciences", "2024", "Revision expected spring 2031"],
            ["Health", "2023", "Revision expected spring 2030"],
            ["Physical Education", "2025", "Listed by ODE as 2025"],
            ["The Arts", "2015", "ODE is monitoring the national arts standards revision"],
          ],
        },
      },
      {
        heading: "How do you read an Oregon standard code?",
        paragraphs: [
          "Oregon's new template codes read content area, grade, domain, then standard number. ODE's own key uses ELA.5.RL.1: English Language Arts, grade 5, Reading Literature, and the first standard for that domain and grade.",
          "In grade 4, ELA.4.RL.1 reads: cite evidence from the text when explaining what the text says explicitly and when drawing inferences from the text. ELA.4.RI.1 carries the same wording for informational text, so a plan built on a nonfiction chapter should cite the RI code, not the RL one.",
        ],
        table: {
          caption: "Anatomy of the Oregon ELA code ELA.4.RL.1",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Content area", "ELA", "English Language Arts"],
            ["Grade level", "4", "Grade 4"],
            ["Domain", "RL", "Reading Literature (RI is Reading Informational)"],
            ["Standard", "1", "First standard for that domain and grade"],
          ],
        },
      },
      {
        heading: "What changes with Oregon's 2026 ELA standards?",
        paragraphs: [
          "The 2026 ELA and Literacy Standards were adopted by the State Board on June 18, 2026, and ODE says they will be implemented in the 2028-29 school year. They are grounded in national research including the science of reading and informed by Oregon's Early Literacy and Adolescent Literacy Frameworks.",
          "The standards are written as end-of-year expectations and are designed to be integrated with the Transformative SEL Standards and the Tribal History/Shared History curriculum. ODE has posted a summary of changes and an FAQ, so ask your district which ELA standards to cite in plans before 2028-29.",
        ],
      },
      {
        heading: "Which Oregon standards are due for revision next?",
        paragraphs: [
          "Science, health and social sciences are next. Under HB 3365 (2025), revised science standards must add content on the causes and effects of climate change, mitigation, adaptation and community resilience, and ODE expects the State Board to adopt revised science standards in spring 2029, health in spring 2030 and social sciences in spring 2031.",
          "The 2022 science standards are built on the National Academies' K-12 Framework for Science Education, and ODE posts a crosswalk to the 2014 standards. The 2021 math standards are organized into learning progressions across algebraic, geometric, numeric and data reasoning, and ODE has moved them into the same new template as ELA.",
        ],
      },
      {
        heading: "Which state tests measure Oregon's standards?",
        paragraphs: [
          "The Oregon Statewide Assessment System (OSAS) measures the standards. Its summative tests cover English language arts and math in grades 3 to 8 and 11 and science in grades 5, 8 and 11, alongside an English language proficiency assessment and the Oregon Extended Assessment for students with significant cognitive disabilities.",
          "ODE notes that Oregon community colleges and public universities agreed in 2015 to use Smarter Balanced scores in their course placement processes.",
        ],
      },
      {
        heading: "How do Oregon teachers use CourseSmith with the content standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook or unit materials your district uses. The Oregon standard is your input, and you confirm its code in ODE's grade-level PDF before it goes into the plan.",
        ],
        steps: [
          {
            name: "Upload the district's materials",
            text: "Add the textbook or unit packet as a PDF or DOCX with the subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans reflect how you teach in Oregon.",
          },
          {
            name: "Paste the Oregon standard",
            text: "Copy the full standard, such as ELA.4.RL.1, into Co-Pilot and ask for an activity where students cite evidence and draw inferences from the assigned text.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan with your delivery methods and class length, then a short test with an answer key that downloads as Word.",
          },
          {
            name: "Confirm in ODE's document",
            text: "Open the ODE grade-level standards PDF, check the domain letters and wording, and record the code in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Oregon Department of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by ODE or the Oregon State Board of Education, and it does not tag or align output to Oregon standard codes. It drafts from the textbook you upload, and you verify every standard you cite in ODE's official documents.",
      },
      {
        q: "Do I need to cite indicators as well as standards?",
        a: "No. ODE describes indicators as optional detail that may appear in guidance to show the breadth and depth of a standard. The standard, such as ELA.4.RL.1, is what the State Board adopts, so cite the standard code and use any indicators to shape the activity.",
      },
      {
        q: "Which ELA standards should I cite before 2028-29?",
        a: "ODE says the 2026 ELA standards will be implemented in the 2028-29 school year, so check with your district about which standards to cite until then. If you start using the new codes early, record the full wording from ODE's 2026 document so colleagues can see exactly what you targeted.",
      },
      {
        q: "Can CourseSmith write OSAS practice tests?",
        a: "CourseSmith can turn textbook chapters into practice tests with marks, a difficulty mix and an answer key, but it has no access to OSAS items and does not predict them. Use it for classroom checks on what you taught, and use ODE's own interim assessments for test-format practice.",
      },
    ],
    sources: [
      {
        label: "ODE: Oregon Content Standards",
        url: "https://www.oregon.gov/ode/educator-resources/standards/Pages/default.aspx",
      },
      {
        label: "ODE: English Language Arts and Literacy Standards",
        url: "https://www.oregon.gov/ode/educator-resources/standards/ela/pages/default.aspx",
      },
      {
        label: "ODE: 2026 ELA and Literacy Standards, Grade 4 (PDF)",
        url: "https://www.oregon.gov/ode/educator-resources/standards/Documents/ODE_2026_ELA_Standards%20-%20Grade%204.pdf",
      },
      {
        label: "ODE: Science Standards",
        url: "https://www.oregon.gov/ode/educator-resources/standards/science/Pages/default.aspx",
      },
      {
        label: "ODE: Mathematics Standards",
        url: "https://www.oregon.gov/ode/educator-resources/standards/mathematics/Pages/default.aspx",
      },
      {
        label: "ODE: Statewide Assessments (OSAS)",
        url: "https://www.oregon.gov/ode/educator-resources/assessment/pages/statewide-assessments.aspx",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/use-cases/english-language-arts",
      "/standards/california",
      "/features/quiz-generator",
    ],
    primaryKeyword: "oregon standards lesson plans",
    secondaryKeywords: [
      "oregon content standards lesson plans",
      "oregon 2026 ELA standards",
      "how to read oregon standard codes",
      "OSAS lesson planning",
      "oregon science standards climate change",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Oregon",
      code: "US-OR",
      framework: "Oregon Academic Content Standards",
      adoptingBody: "Oregon State Board of Education",
      officialUrl: "https://www.oregon.gov/ode/educator-resources/standards/Pages/default.aspx",
    },
  },

  // ---------------------------------------------------------------- Rhode Island
  {
    slug: "rhode-island",
    group: "standards",
    navLabel: "Rhode Island Core",
    navBlurb: "RI Core Standards, curriculum frameworks and RICAS for planners",
    metaTitle: "Rhode Island Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons against the Rhode Island Core Standards, see how RICAS and the four-year review work, and draft from your adopted curriculum. Start free.",
    eyebrow: "Standards: Rhode Island Core Standards",
    h1: "Rhode Island standards lesson plans that start from your adopted curriculum",
    answer:
      "Rhode Island lesson plans in ELA and math follow the Rhode Island Core Standards, which the Council on Elementary and Secondary Education endorsed on March 9, 2021, and which RICAS measures in grades 3 to 8. CourseSmith drafts plans and tests from the curriculum materials you upload, and you confirm each standard in RIDE's documents.",
    definition:
      "The Rhode Island Core Standards are Rhode Island's K-12 standards for English language arts/literacy and mathematics, endorsed by the Council on Elementary and Secondary Education on March 9, 2021, when the state moved away from the Common Core State Standards.",
    takeaways: [
      "The Council on Elementary and Secondary Education endorsed the Rhode Island Core Standards for ELA/Literacy and Mathematics on March 9, 2021.",
      "RIDE grounded the math standards in both the Common Core State Standards for Mathematics and the 2017 Massachusetts Curriculum Framework for Mathematics.",
      "Rhode Island reviews its standards every four years after endorsement, and after the first review in 2025-26 RIDE recommended continued endorsement with no changes.",
      "RICAS, Rhode Island's ELA and math test for grades 3 to 8, uses MCAS tests licensed from Massachusetts.",
      "CourseSmith does not tag or align output to Rhode Island standards, so teachers confirm every code in RIDE's documents.",
    ],
    sections: [
      {
        heading: "Who sets Rhode Island's academic standards?",
        paragraphs: [
          "The Council on Elementary and Secondary Education endorses Rhode Island's standards after RIDE leads a review with public comment and committees of Rhode Island educators. RIDE says that process produced the Rhode Island Core Standards for ELA/Literacy and Mathematics, endorsed on March 9, 2021.",
          "State law goes further than standards. RIGL §§ 16-22-30 to 33, passed in 2019 and amended in 2025, direct RIDE to develop statewide standards and curriculum frameworks and to identify at least five examples of high-quality instructional materials each for ELA, mathematics and science.",
        ],
      },
      {
        heading: "How do the Rhode Island Core Standards differ from Common Core?",
        paragraphs: [
          "The Rhode Island Core Standards keep a Common Core foundation but are a distinct state document. RIDE grounded the math standards in the Common Core State Standards for Mathematics and the Massachusetts Curriculum Framework for Mathematics (2017), and the standards documents credit adaptation from Massachusetts' 2017 work.",
          "RIDE published standard-by-standard comparison tables that place familiar codes, such as K.CC.A.2, beside the Rhode Island Core wording. When a textbook or online resource is labeled with Common Core codes, check the table and quote the Rhode Island wording in your plan.",
        ],
      },
      {
        heading: "How do curriculum frameworks and approved materials fit in?",
        paragraphs: [
          "In Rhode Island, a lesson plan traces back to the standards and to a curriculum chosen from a state-reviewed list. RIDE published ELA and mathematics curriculum frameworks in October 2021 to guide how the standards are taught, and its approved lists of high-quality curriculum materials shape what districts select.",
          "For planning, that means the textbook you upload to CourseSmith should usually be your district's adopted curriculum, not a stand-in. Plans then follow the sequence students already see, and you add the standard from RIDE's documents on top.",
        ],
      },
      {
        heading: "How often are Rhode Island's standards reviewed?",
        paragraphs: [
          "RIDE reviews content standards on a four-year cycle that starts from the date of endorsement. The first review of the ELA and math standards ran during the 2025-26 school year with public feedback, and minutes from the Council's April 28, 2026 meeting show RIDE recommending continued endorsement with no changes and a motion to endorse them as presented.",
          "Other subjects follow their own timelines. The Council endorsed revised Rhode Island Social Studies Standards in February 2023, organized as anchor standards and content standards, and RIDE lists the Next Generation Science Standards as the state's science standards.",
        ],
      },
      {
        heading: "Which tests measure Rhode Island's standards?",
        paragraphs: [
          "RICAS measures ELA and math in grades 3 to 8. Since the 2017-18 school year Rhode Island has licensed Massachusetts' MCAS tests and administered them as RICAS, which is why RIDE publishes released items and alignment materials alongside its own standards.",
        ],
        table: {
          caption: "Rhode Island state assessments as listed by RIDE",
          columns: ["Assessment", "Subjects", "Grades"],
          rows: [
            ["RICAS", "English language arts and mathematics", "3, 4, 5, 6, 7, 8"],
            ["NGSA", "Science", "5, 8, 11"],
            ["PSAT 10", "ELA and mathematics", "10"],
            ["SAT", "ELA and mathematics", "11"],
            [
              "DLM (alternate)",
              "ELA, mathematics and science",
              "ELA and math 3-8 and 11; science 5, 8, 11",
            ],
          ],
        },
      },
      {
        heading: "How do Rhode Island teachers use CourseSmith with the RI Core Standards?",
        paragraphs: [
          "CourseSmith starts from the curriculum materials you upload, which suits Rhode Island's approved-curriculum model. You bring the RI Core standard and verify it, and CourseSmith drafts around the book.",
        ],
        steps: [
          {
            name: "Upload your adopted curriculum",
            text: "Add the teacher or student materials from your district's curriculum as a PDF or DOCX, then check the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Rhode Island classroom.",
          },
          {
            name: "Paste the RI Core standard",
            text: "Copy the standard's Rhode Island wording, not the Common Core version, into Co-Pilot and ask which planned activities address it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then an assignment or short test with answers and a marking guide, downloadable as Word.",
          },
          {
            name: "Confirm in RIDE's documents",
            text: "Check the code and wording against RIDE's standards document or comparison tables before recording it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by RIDE?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the Rhode Island Department of Education or the Council on Elementary and Secondary Education, and it is not on any state curriculum list. It does not tag standards. It drafts from your uploaded materials, and you verify any standard you cite in RIDE's documents.",
      },
      {
        q: "Can I keep using resources labeled with Common Core codes?",
        a: "Often, but check first. RIDE's comparison tables show where the Rhode Island Core wording differs from the Common Core standard with the same code. Quote the Rhode Island version in your plan so the objective matches what the state endorsed and what RICAS is aligned to.",
      },
      {
        q: "Did the 2025-26 review create new ELA or math standards?",
        a: "No new standards were recommended. RIDE reported that its first four-year review found no changes needed and recommended continued endorsement of the Rhode Island Core Standards for ELA/Literacy and Mathematics at the Council's April 28, 2026 meeting. Plans written to the 2021 standards still target the endorsed wording.",
      },
      {
        q: "Can CourseSmith make RICAS practice tests?",
        a: "CourseSmith can build practice tests from your curriculum's chapters, with question types, marks and a difficulty mix you choose, but it has no access to RICAS items. RIDE publishes released RICAS test items, so compare your draft with those before using it as test preparation.",
      },
    ],
    sources: [
      {
        label: "RIDE: Content Standards Review and Revision Process",
        url: "https://ride.ri.gov/instruction-assessment/content-standards",
      },
      {
        label: "RIDE: Council on Elementary and Secondary Education minutes, April 28, 2026",
        url: "https://ride.ri.gov/sites/g/files/xkgbur806/files/2026-05/Encl2a_Minutes_0428_0.pdf",
      },
      {
        label: "RIDE: Curriculum",
        url: "https://ride.ri.gov/instruction-assessment/curriculum",
      },
      {
        label: "RIDE: Social Studies",
        url: "https://ride.ri.gov/instruction-assessment/social-studies",
      },
      {
        label: "RIDE: Families (state assessments)",
        url: "https://ride.ri.gov/Families",
      },
      {
        label: "RIDE: 2021 RICAS Technical Report",
        url: "https://ride.ri.gov/sites/g/files/xkgbur806/files/Portals/0/Uploads/Documents/Instruction-and-Assessment-World-Class-Standards/Assessment/RICAS/2021_RICAS_Technical_Report.pdf",
      },
    ],
    related: [
      "/standards/common-core",
      "/features/curriculum-planner",
      "/use-cases/schools-and-districts",
      "/standards/new-jersey",
    ],
    primaryKeyword: "rhode island standards lesson plans",
    secondaryKeywords: [
      "rhode island core standards lesson plans",
      "RI Core Standards vs Common Core",
      "RICAS lesson planning",
      "rhode island curriculum frameworks",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Rhode Island",
      code: "US-RI",
      framework: "Rhode Island Core Standards for ELA/Literacy and Mathematics",
      adoptingBody: "Rhode Island Council on Elementary and Secondary Education",
      officialUrl: "https://ride.ri.gov/instruction-assessment/content-standards",
    },
  },

  // ---------------------------------------------------------------- South Carolina
  {
    slug: "south-carolina",
    group: "standards",
    navLabel: "South Carolina CCR",
    navBlurb: "SC College- and Career-Ready Standards, SC READY and EOCEP explained",
    metaTitle: "South Carolina Standards Lesson Plans | CourseSmith",
    metaDescription:
      "See when South Carolina's 2024 ELA and 2025 math standards took effect, how SC READY and EOCEP test them, and draft lessons from your textbook. Start free.",
    eyebrow: "Standards: South Carolina College- and Career-Ready Standards",
    h1: "South Carolina standards lesson plans drafted from your textbook",
    answer:
      "South Carolina lesson plans follow the South Carolina College- and Career-Ready Standards, including the 2024 ELA standards assessed from 2024-25 and the 2025 math standards assessed from 2025-26. CourseSmith drafts plans and tests from the textbook you upload, and you paste the standard and verify it in the South Carolina Department of Education's documents.",
    definition:
      "The South Carolina College- and Career-Ready Standards are South Carolina's academic standards approved by the South Carolina State Board of Education, including the 2024 ELA standards and the 2025 mathematics standards.",
    takeaways: [
      "The State Board of Education approved the 2024 South Carolina College- and Career-Ready ELA Standards on January 17, 2023, and they were fully operational and assessed in 2024-25.",
      "The State Board approved the 2025 South Carolina College- and Career-Ready Mathematics Standards on December 12, 2023, and they are fully operational and assessed in 2025-26.",
      "South Carolina law calls for a cyclical review of each academic area, in consultation with the Education Oversight Committee, at least every seven years.",
      "SC READY tests ELA and math in grades 3 to 8, and the End-of-Course Examination Program covers high school courses such as English 2, Algebra 1 and Biology 1.",
      "CourseSmith does not tag or align output to South Carolina standards, so teachers verify every standard in SCDE's documents.",
    ],
    sections: [
      {
        heading: "Who approves South Carolina's standards and how often are they reviewed?",
        paragraphs: [
          "The South Carolina State Board of Education approves the standards, and the Education Oversight Committee has a formal role in reviewing them. Section 59-18-350 of the South Carolina Code requires the State Board, in consultation with the EOC, to provide a cyclical review by academic area, and says each area should be reviewed and updated at least every seven years.",
          "Each review uses a task force of parents, business and industry representatives, community leaders and educators to judge rigor and relevancy. The EOC's academic standards subcommittee listed a cyclical review of the social studies College- and Career-Ready standards on its November 17, 2025 agenda.",
        ],
      },
      {
        heading: "When did the 2024 ELA and 2025 math standards take effect?",
        paragraphs: [
          "Both new sets replaced earlier standards on a staggered schedule. SCDE set aside 2023-24 as a year for local and state-led opportunities to explore and implement the ELA standards before they were assessed, and the math standards followed a year later.",
        ],
        table: {
          caption: "South Carolina College- and Career-Ready Standards for ELA and math",
          columns: ["Standards", "State Board approval", "Fully operational and assessed"],
          rows: [
            ["2024 SC CCR ELA Standards", "January 17, 2023", "2024-25"],
            ["2025 SC CCR Mathematics Standards", "December 12, 2023", "2025-26"],
          ],
        },
      },
      {
        heading: "How should you cite a South Carolina standard in a lesson plan?",
        paragraphs: [
          "Name the edition along with the standard. Because the 2024 ELA and 2025 math standards replaced earlier versions, workbooks and online resources may still carry older codes, so writing 2025 SC CCR Mathematics Standards beside the code removes any doubt about which document you used.",
          "Copy the code and its wording straight from SCDE's standards document for your grade or course rather than from a vendor list. If your textbook predates the new standards, compare its chapter objectives with the current document before you plan from it.",
        ],
      },
      {
        heading: "Which tests measure South Carolina's standards?",
        paragraphs: [
          "SC READY measures ELA and math in grades 3 to 8. State law, in Section 59-18-325, also names science in grades 4, 6 and 8 and social studies in grades 5 and 7, but SCDE notes that budget provisos have suspended some of those grades in recent years, including grade 8 science and grades 5 and 7 social studies in 2024-25.",
          "In high school, the End-of-Course Examination Program (EOCEP) tests core courses, including courses taken in middle school for high school credit. SCDE says English 2 and Algebra 1 meet the high school testing requirements and Biology 1 meets the science requirement.",
        ],
      },
      {
        heading: "Can CourseSmith build SC READY or EOCEP practice?",
        paragraphs: [
          "CourseSmith can turn textbook chapters into practice tests, but it has no access to SC READY or EOCEP items and does not predict them. For an Algebra 1 or English 2 unit, select the chapters you taught, set question counts and marks for each type, choose an Easy, Medium and Hard mix and reveal the answer key.",
          "Download the test as an editable Word file and compare it with the current standards before students see it. Because testing grades can change with each year's provisos, check SCDE's SC READY page for the current grade schedule as well.",
        ],
      },
      {
        heading: "How do South Carolina teachers use CourseSmith with the CCR standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district adopted, and the standard stays your call. The workflow below keeps the edition year attached from the start.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and rename or delete topics so the list matches your pacing.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your South Carolina classroom.",
          },
          {
            name: "Paste the standard with its edition",
            text: "Copy the code and full wording from the 2024 ELA or 2025 math document into Co-Pilot and ask for an activity that matches it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan with your delivery methods and lecture duration, then a short test with marks and an answer key in Word.",
          },
          {
            name: "Confirm in SCDE's document",
            text: "Check the code and wording against SCDE's standards page, then record the edition, code and wording in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the South Carolina Department of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by SCDE, the State Board of Education or the Education Oversight Committee, and it does not tag or align output to South Carolina standards. It drafts from the textbook you upload, and you verify each standard in SCDE's documents.",
      },
      {
        q: "Are the older ELA and math standards still in use?",
        a: "For ELA and math, no. The 2024 ELA standards were fully operational and assessed in 2024-25, and the 2025 math standards in 2025-26. Other subjects follow their own review cycles, so check SCDE's standards pages for the current document in science, social studies and other areas.",
      },
      {
        q: "What does the Education Oversight Committee do with standards?",
        a: "The EOC works with the State Board on the cyclical review that state law requires for each academic area at least every seven years. It also reviews and approves the statewide assessment program. Its meeting agendas are a useful early signal of which subject is under review next.",
      },
      {
        q: "Which grades take SC READY science and social studies this year?",
        a: "It depends on the year. State law names science in grades 4, 6 and 8 and social studies in grades 5 and 7, but budget provisos have suspended some of those tests. Check SCDE's SC READY page before spring so your review units match the grades actually being tested.",
      },
    ],
    sources: [
      {
        label: "SCDE: English Language Arts Standards",
        url: "https://ed.sc.gov/instruction/standards-learning/english-language-arts/standards",
      },
      {
        label: "SCDE: Mathematics Standards",
        url: "https://ed.sc.gov/instruction/standards-learning/mathematics/standards/",
      },
      {
        label: "SCDE: South Carolina College- and Career-Ready Assessments (SC READY)",
        url: "https://ed.sc.gov/tests/middle/sc-ready",
      },
      {
        label: "SCDE: Federal and State Testing Requirements",
        url: "https://www.ed.sc.gov/newsroom/federal-and-state-testing-requirements",
      },
      {
        label: "South Carolina Code of Laws, Title 59, Chapter 18",
        url: "https://www.scstatehouse.gov/code/t59c018.php",
      },
      {
        label: "SC Education Oversight Committee: ASA Subcommittee packet, November 17, 2025",
        url: "https://eoc.sc.gov/sites/eoc/files/Documents/Academic%20Standards%20%26%20Assessments%20Subcommittee%20Packet%20for%2011.17.2025.pdf",
      },
    ],
    related: [
      "/features/quiz-generator",
      "/standards/north-carolina",
      "/standards/georgia-gse",
      "/use-cases/middle-school",
    ],
    primaryKeyword: "south carolina standards lesson plans",
    secondaryKeywords: [
      "south carolina college and career ready standards lesson plans",
      "2025 SC math standards",
      "2024 SC ELA standards",
      "SC READY lesson planning",
      "EOCEP practice tests",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "South Carolina",
      code: "US-SC",
      framework: "South Carolina College- and Career-Ready Standards",
      adoptingBody: "South Carolina State Board of Education",
      officialUrl: "https://ed.sc.gov/instruction/standards-learning/mathematics/standards/",
    },
  },

  // ---------------------------------------------------------------- South Dakota
  {
    slug: "south-dakota",
    group: "standards",
    navLabel: "South Dakota Standards",
    navBlurb: "2026 math codes like 3.N.1, 2025 ELA and the SD testing timeline",
    metaTitle: "South Dakota Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Read South Dakota's new 2026 math codes like 3.N.1, follow the 2025 ELA standards to spring 2027 testing, and draft lessons from your textbook. Start free.",
    eyebrow: "Standards: South Dakota Content Standards",
    h1: "South Dakota content standards lesson plans grounded in your textbook",
    answer:
      "South Dakota lesson plans follow the South Dakota Content Standards, set by the Board of Education Standards and reviewed every five to seven years. The 2025 ELA standards are first assessed in spring 2027, and the 2026 math standards use new codes such as 3.N.1. CourseSmith drafts from your textbook, and you verify codes in the department's documents.",
    definition:
      "The South Dakota Content Standards are the K-12 standards set by the South Dakota Board of Education Standards that describe what students should know and be able to do, without mandating a specific curriculum.",
    takeaways: [
      "South Dakota's content standards are set by the Board of Education Standards and reviewed every five to seven years.",
      "The South Dakota English Language Arts Standards were adopted on April 14, 2025, with a 2025-26 transition year, teaching in 2026-27 and first assessment in spring 2027.",
      "The South Dakota Mathematics Standards adopted on May 4, 2026 introduce a new coding system in which 3.N.1 means grade 3, Numbers, standard 1.",
      "The South Dakota Math and ELA Assessments are given every spring in grades 3 to 8 and 11, and science is tested in grades 5, 8 and 11.",
      "CourseSmith does not tag or align output to South Dakota standards, so teachers verify every code in the department's documents.",
    ],
    sections: [
      {
        heading: "Who sets South Dakota's content standards?",
        paragraphs: [
          "The South Dakota Board of Education Standards sets the content standards, and the Department of Education says they are reviewed every five to seven years. The department's revision timeline, adopted in October 2025, says core content is typically scheduled on a seven-year rotation and career and technical education on a five-year one.",
          "The department is explicit that content standards do not mandate a specific curriculum. Districts choose materials, which is why your lesson plan should start from the textbook your school actually uses.",
        ],
        table: {
          caption:
            "Selected South Dakota content standards by adoption year, as listed by the department",
          columns: ["Content area", "Current standards", "Previous version"],
          rows: [
            ["English Language Arts", "Adopted 2025", "2018"],
            ["Mathematics", "2026", "2018"],
            ["Science", "Adopted 2024", "Not listed"],
            ["Social Studies", "Adopted 2023", "Not listed"],
            ["Oceti Sakowin Essential Understandings and Standards", "Adopted 2025", "2018"],
            ["Computer Science", "Adopted 2025", "Not listed"],
            ["Health Education", "2026", "2018"],
          ],
        },
      },
      {
        heading: "How do South Dakota's 2026 math codes work?",
        paragraphs: [
          "The 2026 math codes read grade, domain, then standard number. The standards are grouped by grade into domains such as Numbers and Geometry, then into clusters such as Place Value, and the department says the consistent codes make standards easier to track across documents and assessments.",
          "In grade 3, standard 3.N.1 sits in the Place Value cluster and reads: use place value understanding to round whole numbers to the nearest 10 or 100. Middle and high school use their own domain letters, such as PR for Proportional Relationships and LF for Linear Functions, Equations, and Inequalities.",
        ],
        table: {
          caption: "K-5 domain codes in the 2026 South Dakota Mathematics Standards",
          columns: ["Code", "Domain"],
          rows: [
            ["N", "Numbers"],
            ["OA", "Operations and Algebraic Thinking"],
            ["M", "Measurement"],
            ["G", "Geometry"],
            ["MF", "Mathematical Fluency"],
            ["F", "Fractions"],
          ],
        },
      },
      {
        heading: "What else changed in the 2026 math standards?",
        paragraphs: [
          "Beyond the codes, the department's summary of changes lists clearer fluency standards, more emphasis on drawings, manipulatives and visual models in the early grades, and more real-world application in measurement, data and functions. The Standards for Mathematical Practice are no longer listed separately and are embedded throughout instead.",
          "Redundant standards were consolidated and wording was simplified. If your math textbook or pacing guide carries codes from the 2018 standards, re-map each unit to the 2026 document before you cite a code, because the old and new numbering do not match.",
        ],
      },
      {
        heading: "What is the timeline for the 2025 ELA standards?",
        paragraphs: [
          "The ELA standards were adopted on April 14, 2025, and the department set 2025-26 as a transition year, 2026-27 as the year to teach to them and spring 2027 as their first assessment. That makes the current school year the first full year of instruction on the new standards.",
          "The revision committee kept the College and Career Readiness anchor standards and their numbering, so codes such as K.RL.1 for Reading Literature stay familiar. The standards also continue to include literacy and writing standards for history/social studies, science and technical subjects in grades 6 to 12.",
        ],
      },
      {
        heading: "Which tests measure South Dakota's standards?",
        paragraphs: [
          "The South Dakota Math and English Language Arts Assessments are given to students in grades 3 to 8 and 11, with a summative test every spring and optional interim assessments during the year. Science is tested in grades 5, 8 and 11, with questions drawn equally from life, physical and earth sciences.",
          "Students with the most significant cognitive disabilities take an alternate science assessment in the same grades. The department also posts an Assessed Standards Timeline, which is the place to check when a newly adopted set, such as the 2026 math standards, reaches the state test.",
        ],
      },
      {
        heading: "How do South Dakota teachers use CourseSmith with the content standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook you upload, which fits a state where standards do not mandate a curriculum. You choose the South Dakota standard, and the code goes into the plan after you check it.",
        ],
        steps: [
          {
            name: "Upload your classroom textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans match how you run your South Dakota classroom.",
          },
          {
            name: "Paste the 2025 or 2026 standard",
            text: "Copy the standard and its wording, such as 3.N.1, into Co-Pilot and ask for an activity that uses visual models or manipulatives.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test or assignment with marks and answers that downloads as Word.",
          },
          {
            name: "Confirm in the department's document",
            text: "Check the code and wording in the current standards PDF, especially for math, where 2018 codes no longer apply.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the South Dakota Department of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the South Dakota Department of Education or the Board of Education Standards, and it does not tag or align output to South Dakota standards. It drafts from the textbook you upload, and you verify each code in the department's documents.",
      },
      {
        q: "Do South Dakota's standards require a particular curriculum?",
        a: "No. The department states that content standards do not mandate a specific curriculum. Districts select their own materials, and the department publishes an Instructional Materials Selection Guide to help. Upload your district's textbook to CourseSmith so plans follow the materials students actually use.",
      },
      {
        q: "My math materials use codes like the 2018 standards. What should I do?",
        a: "Re-map them before you cite anything. The 2026 standards introduced a new coding system, such as 3.N.1 for grade 3 Numbers, and consolidated some standards. Paste the 2026 wording into Co-Pilot when you plan, and record only codes you have confirmed in the 2026 document.",
      },
      {
        q: "Can I plan lessons on the Oceti Sakowin Essential Understandings?",
        a: "Yes, if you upload the materials you teach from. The Oceti Sakowin Essential Understandings and Standards, adopted in 2025, are listed among South Dakota's content standards, and the department links exemplar lessons. Paste the understanding into Co-Pilot and review every draft carefully against your source materials.",
      },
    ],
    sources: [
      {
        label: "South Dakota DOE: Content Standards",
        url: "https://doe.sd.gov/contentstandards/",
      },
      {
        label: "South Dakota DOE: English Language Arts Standards",
        url: "https://doe.sd.gov/contentstandards/ELA.aspx",
      },
      {
        label: "South Dakota DOE: English Language Arts Standards, adopted April 14, 2025 (PDF)",
        url: "https://doe.sd.gov/contentstandards/documents/ELAStandards-25.pdf",
      },
      {
        label: "South Dakota DOE: Mathematics Standards, adopted May 4, 2026 (PDF)",
        url: "https://doe.sd.gov/contentstandards/documents/0526-MathStandards.pdf",
      },
      {
        label: "South Dakota DOE: Standards Revision Timeline (October 2025)",
        url: "https://doe.sd.gov/contentstandards/documents/StandardsTimeline-1025.pdf",
      },
      {
        label: "South Dakota DOE: Math and ELA Assessments",
        url: "https://doe.sd.gov/Assessment/SD-assessments.aspx",
      },
    ],
    related: [
      "/use-cases/math",
      "/features/textbook-to-lesson-plan",
      "/use-cases/elementary-school",
      "/standards/michigan",
    ],
    primaryKeyword: "south dakota standards lesson plans",
    secondaryKeywords: [
      "south dakota content standards lesson plans",
      "2026 south dakota math standards",
      "south dakota ELA standards 2025",
      "how to read south dakota math codes",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "South Dakota",
      code: "US-SD",
      framework: "South Dakota Content Standards",
      adoptingBody: "South Dakota Board of Education Standards",
      officialUrl: "https://doe.sd.gov/contentstandards/",
    },
  },

  // ---------------------------------------------------------------- Tennessee
  {
    slug: "tennessee",
    group: "standards",
    navLabel: "Tennessee Standards",
    navBlurb: "TN Academic Standards, TCAP and the 2029-30 ELA revision explained",
    metaTitle: "Tennessee Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Read Tennessee codes like 3.MD.A.1, see when revised math, science, social studies and ELA standards reach classrooms, and draft lessons from your book.",
    eyebrow: "Standards: Tennessee Academic Standards",
    h1: "Tennessee Academic Standards lesson plans drafted from your textbook",
    answer:
      "Tennessee lesson plans follow the Tennessee Academic Standards, which the State Board of Education must review and approve at least every eight years under state law. A K-8 math code such as 3.MD.A.1 names the grade, domain, cluster and standard. CourseSmith drafts plans and tests from your textbook, and you verify every code in the official documents.",
    definition:
      "The Tennessee Academic Standards are the K-12 standards for English language arts, math, science, social studies and other subjects that the Tennessee State Board of Education reviews and approves under T.C.A. §§ 49-1-311 to 313.",
    takeaways: [
      "Tennessee law charges the State Board of Education to review and approve the ELA, math, science and social studies standards at least every eight years.",
      "TDOE lists revised math standards implemented in 2023-24, science in 2025-26, social studies in 2027-28 and ELA in 2029-30, each with an aligned assessment the same year.",
      "In a Tennessee K-8 math code such as 3.MD.A.1, the standards are numbered consecutively through each domain regardless of cluster.",
      "TCAP is Tennessee's state testing program, with grades 3 to 8 assessments and high school end-of-course exams.",
      "CourseSmith does not tag or align output to Tennessee standards, so teachers verify every code in the official documents.",
    ],
    sections: [
      {
        heading: "Who approves the Tennessee Academic Standards?",
        paragraphs: [
          "The Tennessee State Board of Education approves them. Under T.C.A. §§ 49-1-311 to 313, the board must review and approve the ELA, math, science and social studies standards at least every eight years, through a multi-year process that includes two public feedback surveys and three committee convenings.",
          "State law directs the board to adopt, reject or make only technical, nonsubstantive revisions to the recommended standards. After approval, TDOE develops training, the Textbook and Instructional Materials Quality Commission recommends materials, and districts select State Board-approved textbooks.",
        ],
      },
      {
        heading: "When do revised standards reach Tennessee classrooms?",
        paragraphs: [
          "Tennessee staggers its core subjects, and each new set arrives with an aligned state test in the same year. That gap between final reading and classroom use gives districts time to adopt new textbooks.",
          "The next cycle is already underway. The State Board is reviewing the math standards for statewide implementation in 2031-32, and its science page says the next science review begins in summer 2028 for implementation in 2033-34.",
        ],
        table: {
          caption: "Tennessee core standards revisions as listed by TDOE",
          columns: [
            "Subject",
            "Proposed for final reading",
            "New standards implemented",
            "Aligned assessment",
          ],
          rows: [
            ["Math", "February 2021", "2023-24", "2023-24"],
            ["Science", "October 2022", "2025-26", "2025-26"],
            ["Social Studies", "February 2024", "2027-28", "2027-28"],
            ["English Language Arts", "February 2026", "2029-30", "2029-30"],
          ],
        },
      },
      {
        heading: "How do you read a Tennessee math standard code?",
        paragraphs: [
          "A Tennessee K-8 math code reads grade, domain, cluster, then standard. The standards document uses 3.MD.A.1 as its example: grade 3, the Measurement and Data domain, cluster A, standard 1, with standards numbered consecutively through each domain regardless of cluster.",
          "In grade 4, 4.NBT.A.1 sits in the cluster Generalize place value understanding for multi-digit whole numbers and asks students to recognize place value relationships in whole numbers up to 1,000,000, such as the 7 in 700 being 10 times the 7 in 70. Light green shading on a cluster marks the major work of the grade, and supporting standards have no shading.",
        ],
        table: {
          caption: "Anatomy of the Tennessee math code 4.NBT.A.1",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade", "4", "Grade 4"],
            ["Domain", "NBT", "Number and Operations in Base Ten"],
            ["Cluster", "A", "Generalize place value understanding for multi-digit whole numbers"],
            ["Standard", "1", "First standard in the domain, counted across clusters"],
          ],
        },
      },
      {
        heading: "What is changing in Tennessee English language arts?",
        paragraphs: [
          "Tennessee is finishing a full rewrite of its ELA standards for 2029-30. The State Board reports more than 48,000 public comments during the 2024-2026 revision and 297 educator applications to serve on review committees, the most since it began leading the process in 2015.",
          "The revised standards were on the board's May 19, 2026 agenda for final reading, with staff recommending approval. Until 2029-30, plans should keep citing the current ELA standards, and teachers can use the board's executive summary of key changes to prepare.",
        ],
      },
      {
        heading: "Which tests measure the Tennessee Academic Standards?",
        paragraphs: [
          "The Tennessee Comprehensive Assessment Program (TCAP) measures the standards. In grades 3 to 8, students are assessed in ELA and math along with science and social studies in tested grades, and the ELA test opens with a text-dependent writing prompt.",
          "High school end-of-course exams cover English I and II; Algebra I, Geometry and Algebra II or Integrated Math I, II and III; U.S. History; and Biology. Students with the most significant cognitive disabilities take the MSAA in ELA and math and TCAP-Alt in science and social studies.",
        ],
      },
      {
        heading: "How do Tennessee teachers use CourseSmith with the academic standards?",
        paragraphs: [
          "CourseSmith drafts from the State Board-approved textbook your district selected. You supply the Tennessee standard, and you confirm it before it goes into the plan.",
        ],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, then review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or fill in your school, grade range and teaching style so plans match your Tennessee classroom.",
          },
          {
            name: "Paste the standard and its cluster",
            text: "Copy the standard, such as 4.NBT.A.1, with its cluster heading into Co-Pilot and ask for an activity that builds the cluster's big idea.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and a difficulty mix, downloadable as Word.",
          },
          {
            name: "Confirm in the official document",
            text: "Check the code, wording and major work shading in the State Board's standards document, then add the code to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the Tennessee State Board of Education?",
        a: "No. CourseSmith is not reviewed, approved or endorsed by the State Board, TDOE or the Textbook and Instructional Materials Quality Commission, and it does not tag or align output to Tennessee codes. It drafts from the textbook you upload, and you verify each standard in the official documents.",
      },
      {
        q: "Should I cite the cluster or the standard?",
        a: "Cite the standard, such as 4.NBT.A.1, and use the cluster heading to frame the lesson. The cluster names the big idea a group of standards serves, while the standard is the specific expectation. Because numbering runs through the whole domain, the final digit alone does not tell you the cluster.",
      },
      {
        q: "When do I start teaching the revised ELA standards?",
        a: "Statewide implementation is planned for the 2029-30 school year, after textbook review and local adoption. Until then, plan to the current ELA standards and confirm any changes in the State Board's final documents rather than in drafts or summaries.",
      },
      {
        q: "Can CourseSmith make TCAP practice tests?",
        a: "CourseSmith can turn your textbook chapters into practice tests with question types, marks and an Easy, Medium and Hard mix, but it has no access to TCAP items and does not predict them. Compare each draft with the standard and with TDOE's published test information before using it for review.",
      },
    ],
    sources: [
      {
        label: "TDOE: Academic Standards",
        url: "https://www.tn.gov/education/districts/academic-standards.html",
      },
      {
        label: "Tennessee State Board of Education: Standards Review",
        url: "https://www.tn.gov/sbe/committees-and-initiatives/standards-review.html",
      },
      {
        label:
          "State Board of Education: 2029-2030 TN ELA Standards Revision, May 19, 2026 agenda item",
        url: "https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/2026-sbe-meetings/may-19%2c-2026-sbe-meeting/05-19-26%20VII%20F%202029-30%20TN%20ELA%20Standards%20Cover.pdf",
      },
      {
        label: "State Board of Education: Tennessee Mathematics Standards (2021)",
        url: "https://www.tn.gov/content/dam/tn/stateboardofeducation/documents/standards/math-standards-recommendation-committee-2020/2021%20Math%20Standards%20Edited%20October%202021.pdf",
      },
      {
        label: "TDOE: Overview of Testing in Tennessee",
        url: "https://www.tn.gov/education/districts/lea-operations/assessment/testing-overview.html",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/georgia-gse",
      "/use-cases/high-school",
      "/features/quiz-generator",
    ],
    primaryKeyword: "tennessee standards lesson plans",
    secondaryKeywords: [
      "tennessee academic standards lesson plans",
      "how to read tennessee math standards",
      "TCAP lesson planning",
      "tennessee ELA standards 2029-30",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Tennessee",
      code: "US-TN",
      framework: "Tennessee Academic Standards",
      adoptingBody: "Tennessee State Board of Education",
      officialUrl: "https://www.tn.gov/education/districts/academic-standards.html",
    },
  },
];
