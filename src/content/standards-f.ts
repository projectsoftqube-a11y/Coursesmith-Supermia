import type { ContentPage } from "./types";

export const STANDARDS_PAGES_F: ContentPage[] = [
  // ---------------------------------------------------------------- Montana
  {
    slug: "montana",
    group: "standards",
    navLabel: "Montana",
    navBlurb: "Montana Content Standards, IEFA context and MAST testlets explained",
    metaTitle: "Montana Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Montana lessons from your own textbook. Read MT math codes, see where IEFA context appears, and track the 2026 math and 2027 ELA changes. Start free.",
    eyebrow: "Standards: Montana Content Standards",
    h1: "Montana standards lesson plans, from MT math codes to Indian Education for All",
    answer:
      "Montana standards lesson plans draw on content standards adopted by the Board of Public Education and codified in Title 10, Chapter 53 of the Administrative Rules of Montana. New math standards took effect July 1, 2026, and new ELA standards follow in July 2027. CourseSmith drafts from your textbook; you paste the standard and confirm it with OPI.",
    definition:
      "The Montana Content Standards is the set of K-12 academic standards adopted by the Montana Board of Public Education and codified in Title 10, Chapter 53 of the Administrative Rules of Montana, which districts use to build their own local curriculum.",
    takeaways: [
      "Montana's Board of Public Education formally adopts the content standards and sets revision schedules in coordination with the Office of Public Instruction.",
      "The Montana PK-12 Mathematics Content Standards took effect July 1, 2026, and a K-8 code such as MT.4.OA.3 reads state, grade, domain and standard number.",
      "Several Montana math standards say they should incorporate cultural context relating to Montana Indigenous Peoples and local communities.",
      "OPI lists a July 2027 implementation date for the new ELA standards and still labels the 2011 ELA documents as current.",
      "Montana teachers add each MT code by hand, because CourseSmith drafts from the textbook and does not tag Montana standards.",
    ],
    sections: [
      {
        heading: "Who sets Montana's content standards?",
        paragraphs: [
          "The Montana Board of Public Education formally adopts the content standards, and OPI says the board determines revision schedules in coordination with the Office of Public Instruction. The adopted standards are codified in Title 10, Chapter 53 of the Administrative Rules of Montana.",
          "Each revision cycle moves through research, drafting, negotiated rulemaking, an adoption phase and then school implementation. The math standards document is clear that the standards do not dictate curriculum or pedagogy; they drive the curriculum each district writes.",
        ],
        table: {
          caption: "Montana revision cycles as listed on OPI's standards pages",
          columns: ["Subject", "Status on OPI's pages", "In classrooms from"],
          rows: [
            [
              "Mathematics",
              "PK-12 standards document marked adopted 2025, implemented 2026",
              "July 1, 2026",
            ],
            [
              "English Language Arts and Literacy",
              "New 2027 standards formally adopted; 2011 documents still labeled current",
              "July 2027",
            ],
            ["World Languages", "In the professional learning phase", "July 1, 2026"],
            [
              "Science, social studies, arts, health enhancement, CTE and others",
              "Revision timelines listed as TBD as of July 2025",
              "Not yet scheduled",
            ],
          ],
        },
      },
      {
        heading: "How do you read a Montana math standard code?",
        paragraphs: [
          "A K-8 Montana math code reads MT, grade, domain abbreviation, then standard number. MT.4.NBT.3 is grade 4, Number and Operations in Base Ten, standard 3: use place value understanding to round multi-digit whole numbers to any place. The MT prefix marks a standard Montana has codified in its own rules.",
          "High school codes add a Core or Plus designation and a conceptual category before the domain. MT.CORE.NUM.REAL.1, for example, asks students to use reasoning to establish properties of integer exponents, including scientific notation. OPI also publishes a machine-readable version of the standards through Montana Satchel.",
        ],
      },
      {
        heading: "How does Indian Education for All show up in the standards?",
        paragraphs: [
          "Indian Education for All is written into the standards themselves. The math standards document cites Article X, Section 1(2) of the Montana Constitution and the related statutes, and says the standards reflect the mandate to teach the heritage and contemporary contributions of American Indians in a culturally responsive manner.",
          "Some standards make this explicit. MT.4.OA.3 asks grade 4 students to solve multistep problems in context with whole numbers, and it adds that the standard should incorporate cultural context relating to Montana Indigenous Peoples and local communities. Appendix D of the math standards gives IEFA integration guidelines, which are worth reading before you plan those lessons.",
        ],
      },
      {
        heading: "What changes for ELA in 2027?",
        paragraphs: [
          "The Board has formally adopted new 2027 ELA standards, and OPI lists July 2027 as their implementation date. OPI says the date was chosen to give districts time to prepare between the new math and ELA standards.",
          "Until then, OPI's ELA page labels the 2011 standards documents as current. OPI has posted a guidance document for the new standards and runs free monthly implementation webinars, so 2026-27 is a sensible year to compare your reading textbook with the new expectations.",
        ],
      },
      {
        heading: "Which Montana tests measure the standards?",
        paragraphs: [
          "The Montana Aligned to Standards Through-Year assessment, MAST, tests ELA and math in grades 3 to 8 through shorter testlets given across the school year. OPI says math testlets are scheduled at the school level to match content recently taught, and students receive a Through-Year Score Report at the end of the year.",
          "Science is measured by the Montana Science Assessment in grades 5 and 8, and grade 11 students take the ACT with Writing for ELA, math and science. Students with significant cognitive disabilities take the DLM alternate assessments instead.",
        ],
      },
      {
        heading: "How do Montana teachers use CourseSmith with the Montana Content Standards?",
        paragraphs: [
          "CourseSmith works as a drafting assistant for the textbook your district uses. You bring the MT standard and any local or tribal context, and the code goes into the plan only after you check it in OPI's document.",
        ],
        steps: [
          {
            name: "Upload your textbook or unit",
            text: "Add the PDF or DOCX with the book name, subject and grade, then tidy the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style, so plans fit the Montana classroom you actually teach.",
          },
          {
            name: "Paste the MT standard and context note",
            text: "Copy the full standard, such as MT.4.OA.3 with its cultural context sentence, into Co-Pilot and ask for an activity that uses local or tribal context you provide.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question that you can use as a check before a MAST math testlet.",
          },
          {
            name: "Confirm in OPI's document",
            text: "Open the official PK-12 standards on OPI's site, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag Montana standards or add IEFA content?",
        a: "No. CourseSmith does not tag or align output to Montana codes, and it is not approved by the Board of Public Education or OPI. It drafts from the textbook you upload. For IEFA context, supply the local or tribally vetted material yourself and review every draft before teaching it.",
      },
      {
        q: "Which math standards should I cite in 2026-27?",
        a: "Cite the Montana PK-12 Mathematics Content Standards, which took effect July 1, 2026. If your textbook was built on Common Core, OPI's Appendix A lists how the new Montana standards correspond to Common Core standards, which helps you match old chapters to new codes.",
      },
      {
        q: "Can CourseSmith help me prepare for MAST testlets?",
        a: "It can turn the chapters you just taught into a short practice test with an answer key. It has no access to MAST items and makes no claim to predict them. Because schools schedule math testlets to follow recent instruction, a quick check right after a unit is the natural fit.",
      },
      {
        q: "Should I plan ELA against the 2011 or 2027 standards?",
        a: "OPI lists July 2027 as the implementation date for the new ELA standards and labels the 2011 documents as current until then. Many teachers plan with the current standards while reading OPI's guidance document for the new ones. Your district's curriculum office makes the final call.",
      },
      {
        q: "How much does CourseSmith cost for Montana teachers?",
        a: "Montana teachers can start free: sign-up includes free starter credits and asks for no credit card. Each generation then uses credits. Schools and districts can email hello@supermia.ai about volume pricing.",
      },
    ],
    sources: [
      {
        label: "Montana OPI: Content Standards Revision",
        url: "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Standards-Revision",
      },
      {
        label: "Montana OPI: Mathematics Content Standards",
        url: "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Mathematics-Standards",
      },
      {
        label:
          "Montana OPI: Montana PK-12 Mathematics Content Standards (adopted 2025, implemented 2026)",
        url: "https://opifiles.mt.gov/Portals/182/Page%20Files/K-12%20Content%20Standards%20%26%20Revision/Math/PK-12%20Montana%20Math%20Standards_PUBLIC.pdf",
      },
      {
        label: "Montana OPI: English Language Arts and Literacy Standards",
        url: "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/English-Language-Arts-Literacy-Standards",
      },
      {
        label: "Montana OPI: Montana Comprehensive Assessment System (MontCAS)",
        url: "https://opi.mt.gov/Leadership/Assessment-Accountability/MontCAS/",
      },
      {
        label: "Montana OPI: What is MAST? Through-Year Score Report overview",
        url: "https://opifiles.mt.gov/Portals/182/Page%20Files/MAST/2024-2025%20Standards%20&%20Manuals/TY%20Report%20Overview_General.pdf",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/use-cases/elementary-school",
      "/standards/common-core",
    ],
    primaryKeyword: "montana standards lesson plans",
    secondaryKeywords: [
      "montana content standards lesson plans",
      "montana math standards 2026",
      "indian education for all lesson planning",
      "MAST testlet practice",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Montana",
      code: "US-MT",
      framework: "Montana Content Standards",
      adoptingBody: "Montana Board of Public Education",
      officialUrl:
        "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Standards-Revision",
    },
  },

  // ---------------------------------------------------------------- Nebraska
  {
    slug: "nebraska",
    group: "standards",
    navLabel: "Nebraska",
    navBlurb: "Nebraska CCR standards, MA indicator codes and NSCAS Growth explained",
    metaTitle: "Nebraska Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Draft Nebraska lesson plans from your textbook. Learn how MA.4.N.1.c codes read, which standards are current after 2026, and how NSCAS fits. Start free.",
    eyebrow: "Standards: Nebraska's College and Career Ready Standards",
    h1: "Nebraska standards lesson plans built from the textbook you teach",
    answer:
      "Nebraska standards lesson plans follow content area standards approved by the Nebraska State Board of Education, which state law says must be reviewed and updated every seven years. Current versions include 2021 ELA, 2022 math and 2024 science standards. CourseSmith drafts plans and tests from your textbook, and you paste the indicator and verify it with NDE.",
    definition:
      "Nebraska's College and Career Ready Standards is the name the Nebraska State Board of Education gives its approved academic standards for subjects including English language arts, mathematics and science, which school districts must adopt within one year of approval.",
    takeaways: [
      "Nebraska Revised Statute 79-760.01 requires the State Board of Education to adopt measurable academic content standards and to plan their review and update every seven years.",
      "The State Board approved the current ELA standards on September 2, 2021, the mathematics standards on September 2, 2022, and the science standards on September 6, 2024.",
      "A Nebraska math code such as MA.4.N.1.c names the content area, grade, strand, standard and indicator, in that order.",
      "In September 2026 the State Board did not approve revised social studies standards, so the 2019 social studies standards remain in place.",
      "Nebraska teachers confirm every indicator in NDE's documents, because CourseSmith does not tag Nebraska codes.",
    ],
    sections: [
      {
        heading: "What does Nebraska law require of its standards?",
        paragraphs: [
          "Nebraska law requires the State Board of Education to adopt measurable academic content standards in reading, writing, mathematics, science and social studies, and to plan a review and update of those standards every seven years. NDE adds that districts have one year to adopt the state-approved standards for ELA, mathematics, science and social studies.",
          "NDE describes the standards as a framework for local curriculum. The math standards document says they should drive local decisions about instructional materials and about interim, formative and summative assessments, which makes the textbook you plan from a direct link to the state document.",
        ],
        table: {
          caption: "Nebraska content area standards and State Board approval dates",
          columns: ["Subject", "Official name", "State Board approval"],
          rows: [
            [
              "English language arts",
              "Nebraska's College and Career Ready Standards for English Language Arts",
              "September 2, 2021",
            ],
            [
              "Mathematics",
              "Nebraska's College and Career Ready Standards for Mathematics",
              "September 2, 2022",
            ],
            [
              "Science",
              "Nebraska's College and Career Ready Standards for Science",
              "September 6, 2024",
            ],
            ["Social studies", "Nebraska Social Studies Standards", "November 8, 2019"],
            [
              "Computer science and technology",
              "Nebraska Computer Science and Technology Standards",
              "February 2, 2024",
            ],
            ["World languages", "Nebraska World Language Standards", "September 6, 2019"],
          ],
        },
      },
      {
        heading: "How do you read a Nebraska math code?",
        paragraphs: [
          "A Nebraska math code lists the content area, grade, strand, standard number and, where one exists, a lowercase indicator letter. In MA.4.N.1.c, MA is mathematics, 4 is grade 4, N is the Number strand, 1 is the Numeric Relationships standard and c is the indicator: recognize a digit in one place represents ten times what it represents in the place to its right.",
          "The K-8 standards sit in four strands, Number, Algebra, Geometry and Data, with Ratios and Proportions added only in grades 6 and 7. NDE calls indicators an integral part of the standard to be taught and assessed, while the e.g. statements are guidance for a locally determined curriculum.",
        ],
      },
      {
        heading: "What happened to the social studies revision?",
        paragraphs: [
          "The 2019 social studies standards are still the ones to plan against. NDE released a first draft of revised social studies standards on May 20, 2026, took public input through June 10, 2026, and asked the State Board to vote in the fall.",
          "NDE's September 2026 board report states that board members did not approve the revised standards and that the 2019 standards will remain in place. If you drafted units from the 2026 proposal, check each one against the 2019 document before teaching it.",
        ],
      },
      {
        heading: "Which tests measure Nebraska's standards?",
        paragraphs: [
          "The Nebraska Student-Centered Assessment System, NSCAS, measures ELA and math in grades 3 to 8 through a through-year model with fall, winter and spring tests. NDE's technical report describes the spring test as the summative component used for accountability, with on-grade items only, and spring testing adds science in grades 5 and 8.",
          "In high school, Nebraska adopted the ACT for statewide testing in 2016-17, and NDE's assessment page lists ACT test events in March and April 2027. Students with the most significant cognitive disabilities take NSCAS Alternate, with a window of March 29 to May 7, 2027.",
        ],
      },
      {
        heading:
          "How do Nebraska teachers use CourseSmith with the College and Career Ready Standards?",
        paragraphs: [
          "CourseSmith fits Nebraska planning when you treat it as a drafting tool for your district's adopted textbook. The indicator comes from you, and it goes into the plan only after you check it in NDE's document.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Add the PDF or DOCX of the book your district adopted, with its name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or fill in your school, grade range and teaching style so every plan reflects how you teach.",
          },
          {
            name: "Paste the indicator, not just the standard",
            text: "Copy the full indicator, such as MA.4.N.1.c, into Co-Pilot and ask for an activity built around its verb, such as recognize, compare or explain.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in NDE's standards document",
            text: "Open the official PDF from NDE's content area standards page, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label plans with Nebraska standard codes?",
        a: "No. CourseSmith does not tag or align output to Nebraska codes, and it is not approved by the State Board of Education or NDE. It drafts from the textbook you upload. You paste the indicator you are teaching, check it in NDE's document and write the code into your plan.",
      },
      {
        q: "Should I cite the standard or the indicator?",
        a: "Cite the indicator when one exists, such as MA.4.N.1.c, because NDE treats indicators as an integral part of the standard to be taught and assessed. The standard, such as MA.4.N.1, names the broader skill. Not every standard has indicators, so cite the standard alone when it stands by itself.",
      },
      {
        q: "Which social studies standards should I use in 2026-27?",
        a: "Use the 2019 Nebraska Social Studies Standards, approved November 8, 2019. The State Board did not approve the revised draft in September 2026, and NDE's board report says the 2019 standards remain in place. Watch NDE's site for any later revision.",
      },
      {
        q: "Can CourseSmith build practice for NSCAS?",
        a: "CourseSmith can turn the chapters you taught into a practice test with an answer key, but it has no access to NSCAS items and makes no claim to predict them. A short test after each unit gives you your own checkpoint between the fall, winter and spring NSCAS tests.",
      },
      {
        q: "What are the e.g. statements in Nebraska's math standards?",
        a: "They are examples that NDE says give guidance on topics a locally determined curriculum may include. They are not extra requirements. Use them to judge whether a textbook example fits the indicator, then let your district curriculum decide which examples you teach.",
      },
    ],
    sources: [
      {
        label: "Nebraska Department of Education: Content Area Standards",
        url: "https://www.education.ne.gov/contentareastandards/",
      },
      {
        label:
          "NDE: Nebraska's College and Career Ready Standards for Mathematics (approved September 2, 2022)",
        url: "https://www.education.ne.gov/wp-content/uploads/2023/05/Nebraskas-College-and-Career-Ready-Standards-for-Mathematics-Final-062723.pdf",
      },
      {
        label:
          "NDE: Seeking Public Input on College and Career Ready Standards for Social Studies Draft",
        url: "https://www.education.ne.gov/press_release/nde-seeking-public-input-on-college-and-career-ready-standards-for-social-studies-draft/",
      },
      {
        label: "NDE: Board Report for September 2026",
        url: "https://www.education.ne.gov/boardreport/september-2026/",
      },
      {
        label: "NDE: 2023-2024 NSCAS Growth Technical Report",
        url: "https://www.education.ne.gov/wp-content/uploads/2025/01/2024-NSCAS-Growth-Technical-Report-v3.pdf",
      },
      {
        label: "NDE: Statewide Assessment",
        url: "https://www.education.ne.gov/assessment/",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/features/quiz-generator",
      "/use-cases/math",
      "/standards/ngss",
    ],
    primaryKeyword: "nebraska standards lesson plans",
    secondaryKeywords: [
      "nebraska college and career ready standards lesson plans",
      "nebraska math standards codes",
      "nebraska social studies standards 2019",
      "NSCAS practice tests",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Nebraska",
      code: "US-NE",
      framework: "Nebraska's College and Career Ready Standards",
      adoptingBody: "Nebraska State Board of Education",
      officialUrl: "https://www.education.ne.gov/contentareastandards/",
    },
  },

  // ---------------------------------------------------------------- Nevada
  {
    slug: "nevada",
    group: "standards",
    navLabel: "Nevada NVACS",
    navBlurb: "NVACS, Nevada social studies codes and SBAC, explained for planners",
    metaTitle: "Nevada NVACS Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Nevada lessons from your textbook against the NVACS. Read SS.4 social studies codes, see which state tests apply, and verify with NDE. Start free.",
    eyebrow: "Standards: Nevada Academic Content Standards",
    h1: "Nevada Academic Content Standards lesson plans, drafted from your textbook",
    answer:
      "Nevada lesson plans follow the Nevada Academic Content Standards (NVACS), which define what students should know and be able to do by the end of each grade. Science standards are based on NGSS, and social studies standards were revised in 2018 with Nevada history and multicultural themes. CourseSmith drafts from your textbook, and you verify each NVACS code with NDE.",
    definition:
      "The Nevada Academic Content Standards (NVACS) is the set of K-12 standards that defines what Nevada students should know and be able to do by the end of each grade, serving as the foundation for local curriculum and instruction.",
    takeaways: [
      "Nevada's Council to Establish Academic Standards was created to develop rigorous, measurable standards, with its scope of work set out in NRS 389.500 to 389.540.",
      "NDE states that the NVACS are not curriculum, instructional practices or teaching strategies but the foundation for them.",
      "The Nevada social studies standards, revised in September 2018, code each standard by grade and number, such as SS.4.11 in grade 4's Nevada: Past and Present.",
      "Nevada students take the Smarter Balanced Assessment in grades 3-8, science tests in grades 5, 8 and high school, and the ACT in grade 11.",
      "CourseSmith does not tag NVACS codes, so Nevada teachers paste the standard and confirm it in NDE's documents.",
    ],
    sections: [
      {
        heading: "Who develops Nevada's academic standards?",
        paragraphs: [
          "Nevada's Council to Establish Academic Standards was created to develop rigorous, measurable academic standards in nine subject areas, including English language arts, mathematics and science. NDE points to NRS 389.500 to 389.540 for the council's scope of work.",
          "For science, NDE says K-12 science stakeholders, the Nevada Board of Education and the Nevada Department of Education worked together to adopt the current standards. NDE's Office of Teaching and Learning posts the standards by subject, from computer science and English language arts to world languages.",
        ],
      },
      {
        heading: "How are Nevada's social studies standards organized?",
        paragraphs: [
          "Nevada's social studies standards, revised in September 2018, pair a fixed set of disciplinary skills with six color-coded content themes. The skills run from constructing compelling questions to taking informed action, and the themes carry the history, civics and other content for each grade.",
          "Science is organized differently. NDE says the science standards are based on the Next Generation Science Standards and the NRC Framework, with a focus on practices, crosscutting concepts and core ideas.",
        ],
        table: {
          caption: "Content themes in the Nevada social studies standards",
          columns: ["Theme", "Code letter", "Examples of sub-themes"],
          rows: [
            ["History", "H", "Power and politics; identity; people and ideas; Nevada history"],
            [
              "Multicultural",
              "MC",
              "Social justice, consciousness and action; respectful engagement with diverse people",
            ],
            [
              "Civics",
              "C",
              "Civic and political institutions; civic dispositions and democratic principles",
            ],
            [
              "Geography",
              "G",
              "Geographic representations; human environment interaction; population and movement",
            ],
            ["Economics", "E", "Exchange and markets; national economy; global economy"],
            [
              "Financial literacy",
              "FL",
              "Financial decision-making; savings and spending; credit and debit",
            ],
          ],
        },
      },
      {
        heading: "How do you read a Nevada social studies standard?",
        paragraphs: [
          "Each Nevada social studies standard is coded to its grade level and a number within the set. In grade 4, Nevada: Past and Present, SS.4.11 asks students to evaluate why Nevada became a state and its role in national politics, under the history theme of power and politics.",
          "Every grade opens with the same disciplinary skills, which grow more complex each year, such as SS.4.1, generate compelling questions to explore the history of Nevada. K-5 standards are grade specific, while grades 6-8 and 9-12 are banded by content area, such as U.S. History (1877-Present) or Civics and Economics.",
        ],
      },
      {
        heading: "Which Nevada laws shape social studies planning?",
        paragraphs: [
          "Several Nevada laws add required content to social studies, and NDE lists them on its social studies page. The 2018 standards note that multicultural standards were a new requirement of Nevada law, so a textbook written for a national market may not cover them on its own.",
        ],
        bullets: [
          "AB234 (2015): multicultural education",
          "SB322 (2017): civics test",
          "SB107 (2017): ethnic and diversity content",
          "SB249 (2017) and SB314 (2019): financial literacy",
          "AB231 (2021): Holocaust education",
          "SB194 (2021), AB19 (2021) and AB261 (2021): civics seal, social studies requirements, and diversity and inclusion in standards and instructional materials",
        ],
      },
      {
        heading: "Which tests measure the NVACS?",
        paragraphs: [
          "Nevada uses the Smarter Balanced Assessment, SBAC, in grades 3 to 8, and state science tests in grades 5, 8 and high school. Grade 11 students take the ACT as Nevada's college and career readiness assessment.",
          "NDE's Office of Assessments also lists the i-Ready Diagnostic in reading for grades K-3, the Nevada Alternate Assessment for grades 3-12 and the WIDA English language proficiency assessment for grades K-12.",
        ],
      },
      {
        heading: "How do Nevada teachers use CourseSmith with the NVACS?",
        paragraphs: [
          "CourseSmith supports NVACS planning as a drafting assistant for the materials you teach from. You choose the standard and add Nevada-specific content, and the code goes into the plan only after you check it in NDE's document.",
        ],
        steps: [
          {
            name: "Upload your textbook and Nevada materials",
            text: "Add the textbook PDF or DOCX, and for grade 4 social studies a Nevada history packet if your book is national, then review the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style, so plans match the students and schedule you actually teach.",
          },
          {
            name: "Paste the NVACS standard",
            text: "Copy the full standard, such as SS.4.11, into Co-Pilot and ask for an inquiry activity that opens with a compelling question.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in NDE's document",
            text: "Open the subject's standards PDF on NDE's site, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to the NVACS?",
        a: "No. CourseSmith does not tag or align output to NVACS codes, and it is not approved by the Nevada State Board of Education or NDE. It drafts from the textbook you upload. You paste the standard you target, verify it in NDE's documents and write the code into the plan yourself.",
      },
      {
        q: "How do I teach grade 4 Nevada history with a national textbook?",
        a: "Upload the Nevada materials your school uses, such as a state history unit, alongside or instead of the national book. CourseSmith only knows what you upload, so the SS.4 standards about Nevada statehood, people and geography need Nevada sources behind them.",
      },
      {
        q: "Do my social studies plans need multicultural content?",
        a: "The 2018 Nevada social studies standards include a multicultural theme alongside history, civics, geography, economics and financial literacy, and NDE notes it was a new requirement of Nevada law. Check each grade's MC standards and make sure your sources cover them before you plan.",
      },
      {
        q: "Can CourseSmith build SBAC practice tests?",
        a: "CourseSmith can turn textbook chapters into a practice test with multiple choice, short answer, long answer and fill in the blanks questions. It has no access to Smarter Balanced items and makes no claim to predict them, so treat its tests as classroom checks, not SBAC simulations.",
      },
    ],
    sources: [
      {
        label: "Nevada Department of Education: Office of Teaching and Learning",
        url: "https://doe.nv.gov/offices/office-of-teaching-and-learning",
      },
      {
        label: "NDE: Council to Establish Academic Standards",
        url: "https://doe.nv.gov/boards-commissions-councils/council-to-establish-academic-standards/",
      },
      {
        label: "NDE: Science",
        url: "https://doe.nv.gov/offices/office-of-teaching-and-learning/science",
      },
      {
        label: "NDE: Social Studies",
        url: "https://doe.nv.gov/offices/office-of-teaching-and-learning/social-studies",
      },
      {
        label: "NDE: Nevada Academic Content Standards for Social Studies (revised September 2018)",
        url: "https://webapp-strapi-paas-prod-nde-001.azurewebsites.net/uploads/NVAC_Sfor_Social_Studies_ea0a1df6ac.pdf",
      },
      {
        label: "NDE: Office of Assessments",
        url: "https://doe.nv.gov/offices/office-of-assessment-data-and-accountability-management-adam/office-of-assessments",
      },
    ],
    related: [
      "/use-cases/social-studies",
      "/features/textbook-to-lesson-plan",
      "/features/ai-assignment-generator",
      "/standards/ngss",
    ],
    primaryKeyword: "nevada standards lesson plans",
    secondaryKeywords: [
      "NVACS lesson plans",
      "nevada academic content standards social studies",
      "nevada history grade 4 lesson plans",
      "SBAC practice tests nevada",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Nevada",
      code: "US-NV",
      framework: "Nevada Academic Content Standards (NVACS)",
      adoptingBody: "Nevada State Board of Education",
      officialUrl: "https://doe.nv.gov/offices/office-of-teaching-and-learning",
    },
  },

  // ---------------------------------------------------------------- New Hampshire
  {
    slug: "new-hampshire",
    group: "standards",
    navLabel: "New Hampshire",
    navBlurb: "NH CCRS, local competencies and NH SAS, explained for lesson planners",
    metaTitle: "New Hampshire Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan New Hampshire lessons from your textbook: how NH CCRS, local competencies and Ed 306 fit together, which NH SAS tests apply, and how to verify. Free.",
    eyebrow: "Standards: New Hampshire College and Career Ready Standards",
    h1: "New Hampshire standards lesson plans for a competency-based state",
    answer:
      "New Hampshire standards lesson plans start from the College and Career Ready Standards set by the State Board of Education, but local boards build the curriculum and competencies students are assessed on. CourseSmith drafts plans and tests from your textbook; you paste the standard or local competency and check it against state and district documents.",
    definition:
      "The New Hampshire College and Career Ready Standards (NH CCRS) is the State Board of Education's framework of academic standards, built from knowledge, skills and work-study practices, that local school boards use to develop curriculum and competencies.",
    takeaways: [
      "The NH CCRS have three components: knowledge, skills and work-study practices.",
      "Under the Ed 306 rules the State Board adopted on December 12, 2024, the board reviews each content area's standards on a ten-year cycle and may revisit a standard sooner.",
      "Local boards that do not adopt the state standards must set alternatives that meet at least the level of rigor of the state standards.",
      "New Hampshire high school credit is based on demonstrating competencies, not on time spent achieving them.",
      "New Hampshire teachers confirm standards and competencies themselves, because CourseSmith drafts from the textbook and does not tag codes.",
    ],
    sections: [
      {
        heading: "What are the New Hampshire College and Career Ready Standards?",
        paragraphs: [
          "The NH CCRS are the state's academic standards, organized into three components: knowledge, skills and work-study practices. The Department of Education lists standards in mathematics, English language arts and literacy, science, social studies, technology, early learning, the arts, career development and physical education.",
          "Work-study practices cover habits such as creativity, collaboration, communication, critical thinking, persistence and self-regulation. The department also notes that district schools, public charter schools and private schools adopt their own curriculum, so your district's documents matter as much as the state's.",
        ],
      },
      {
        heading: "How do state standards and local competencies fit together?",
        paragraphs: [
          "The State Board sets the standards, and local school boards turn them into curriculum and competencies. In the Ed 306 minimum standards adopted December 12, 2024, Ed 306.26 says the board reviews each content area's standards on a ten-year cycle, and local boards that decline the state standards must create alternatives of at least equal rigor.",
          "Competencies decide credit in high school. The Ed 306.27 standard says credit is based on demonstrating district or graduation competencies, not on time spent, and that the local school board must require competency assessments for all high school courses.",
        ],
        table: {
          caption: "Layers a New Hampshire lesson plan may need to reference",
          columns: ["Layer", "Who sets it", "What it tells you"],
          rows: [
            [
              "NH CCRS academic standards",
              "State Board of Education",
              "Knowledge and skills for each content area",
            ],
            [
              "Work-study practices",
              "Defined in state law and rules",
              "Habits such as collaboration, communication and self-regulation",
            ],
            [
              "Course and graduation competencies",
              "Local school board",
              "What students must demonstrate to earn credit",
            ],
            [
              "Competency assessments",
              "Local school district, or the department where none exists",
              "How each high school course checks the competencies",
            ],
          ],
        },
      },
      {
        heading: "How do you read a New Hampshire science standard?",
        paragraphs: [
          "New Hampshire's science standards are the Next Generation Science Standards, which the State Board adopted in November 2016 to replace the state's 2006 science framework. NGSS performance expectations read grade, discipline and core idea, then number.",
          "In 5-PS1-1, 5 is grade 5, PS1 is the physical science core idea Matter and Its Interactions, and 1 is the first expectation: develop a model to describe that matter is made of particles too small to be seen. Quote the full expectation in your plan, since the verb, here develop a model, shapes the activity.",
        ],
      },
      {
        heading: "Which state tests measure the standards?",
        paragraphs: [
          "The New Hampshire Statewide Assessment System, NH SAS, tests ELA and math in grades 3 to 8. Science is tested in grades 5 and 8 and in the second year of high school.",
          "Students with the most significant cognitive disabilities take the Dynamic Learning Maps alternate assessment instead, as their IEP indicates. Older reports list science in grade 11, so check the current NH SAS schedule on the department's assessment page before planning a high school science review.",
        ],
      },
      {
        heading: "How do New Hampshire teachers use CourseSmith with the NH CCRS?",
        paragraphs: [
          "CourseSmith fits a competency-based school when you use it to draft from the textbook and then check the result against your local competency. The standard or competency comes from you, and you confirm it before it goes into the plan.",
        ],
        steps: [
          {
            name: "Upload the course textbook",
            text: "Add the PDF or DOCX your course uses, with the book name, subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans match how you run your classroom.",
          },
          {
            name: "Paste the standard and the competency",
            text: "Copy the state standard and your district's course competency into Co-Pilot, and ask which planned objectives give students a chance to demonstrate it.",
          },
          {
            name: "Draft the plan and an assessment",
            text: "Generate the lesson plan, then a test or assignment with marks per question and an answer key or marking guide, downloadable as Word for local editing.",
          },
          {
            name: "Confirm in state and district documents",
            text: "Check the wording against the department's standards page and your district's competency list, then record both in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag NH CCRS codes or local competencies?",
        a: "No. CourseSmith does not tag or align output to New Hampshire standards or competencies, and it is not approved by the State Board or the Department of Education. It drafts from the textbook you upload. You paste the standard or competency and confirm it in official state and district documents.",
      },
      {
        q: "Should my plan cite a state standard or a local competency?",
        a: "Follow your district's template. Local boards turn the state standards into course and graduation competencies, and high school credit depends on demonstrating those competencies. Many teachers list the competency students are working toward and the state standard behind it.",
      },
      {
        q: "Can CourseSmith write a competency assessment for my course?",
        a: "It can draft a test or assignment from the chapters you choose, with question types, marks and an answer key or marking guide. Your local school district approves competency assessments, so treat the draft as a starting point and edit the Word file to match your competency rubric.",
      },
      {
        q: "Which science standards does my New Hampshire science plan follow?",
        a: "New Hampshire adopted the Next Generation Science Standards in November 2016, so cite NGSS performance expectations such as 5-PS1-1. Upload the science textbook your school uses, paste the expectation into Co-Pilot, and check that the planned activity matches the expectation's verb.",
      },
    ],
    sources: [
      {
        label: "New Hampshire Department of Education: College and Career Ready Standards",
        url: "https://www.education.nh.gov/who-we-are/division-of-learner-support/bureau-of-instructional-support/career-and-college-ready-standards",
      },
      {
        label: "NH Department of Education: Ed 306 Adopted Text, December 12, 2024",
        url: "https://www.education.nh.gov/sites/g/files/ehbemt326/files/inline-documents/sonh/2024-41_adopted-text_0.pdf",
      },
      {
        label: "NH Department of Education: Ed 306.27 Standard Regulation",
        url: "https://www.education.nh.gov/sites/g/files/ehbemt326/files/inline-documents/sonh/ed-306.27-standard-regulation.pdf",
      },
      {
        label: "NH Department of Education: State Board Adopts New Academic Standards for Science",
        url: "https://www.education.nh.gov/news-and-media/new-hampshire-state-board-education-adopts-new-academic-standards-science",
      },
      {
        label: "NH Department of Education: Office of Assessment",
        url: "https://www.education.nh.gov/who-we-are/division-of-education-and-analytic-resources/bureau-assessment-and-accountability/office-assessment",
      },
      {
        label: "NGSS: 5-PS1-1 Matter and Its Interactions",
        url: "https://www.nextgenscience.org/pe/5-ps1-1-matter-and-its-interactions",
      },
    ],
    related: [
      "/features/ai-assignment-generator",
      "/features/quiz-generator",
      "/use-cases/high-school",
      "/standards/ngss",
    ],
    primaryKeyword: "new hampshire standards lesson plans",
    secondaryKeywords: [
      "NH college and career ready standards lesson plans",
      "new hampshire competency based lesson planning",
      "ed 306 competencies",
      "NH SAS practice tests",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "New Hampshire",
      code: "US-NH",
      framework: "New Hampshire College and Career Ready Standards (NH CCRS)",
      adoptingBody: "New Hampshire State Board of Education",
      officialUrl:
        "https://www.education.nh.gov/who-we-are/division-of-learner-support/bureau-of-instructional-support/career-and-college-ready-standards",
    },
  },

  // ---------------------------------------------------------------- New Mexico
  {
    slug: "new-mexico",
    group: "standards",
    navLabel: "New Mexico",
    navBlurb: "NM CCSS, STEM Ready! science and 2022 social studies, for planners",
    metaTitle: "New Mexico Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Draft New Mexico lesson plans from your textbook. See how STEM Ready! science, the extra 15% ELA standards and 2022 social studies work. Start free today.",
    eyebrow: "Standards: New Mexico content standards",
    h1: "New Mexico standards lesson plans, from STEM Ready! science to NM-MSSA",
    answer:
      "New Mexico standards lesson plans draw on content standards the Public Education Department adopts as rules in Title 6, Chapter 29 of the New Mexico Administrative Code, including Common Core ELA and math, STEM Ready! science and 2022 social studies standards. CourseSmith drafts from your textbook; you paste the standard and confirm it in PED's documents.",
    definition:
      "New Mexico's content standards is the set of K-12 standards adopted by the New Mexico Public Education Department under Title 6, Chapter 29 of the New Mexico Administrative Code, Standards for Excellence.",
    takeaways: [
      "New Mexico uses the Common Core State Standards in ELA and math, plus an additional 15% of state-specific ELA standards focused on cultural responsiveness that are not state-assessed.",
      "The New Mexico STEM Ready! Science Standards combine the full NGSS with six New Mexico-specific standards and took effect July 1, 2018.",
      "New Mexico's social studies standards, published in the New Mexico Register in February 2022, have six strands, including ethnic, cultural and identity studies.",
      "The NM-MSSA tests ELA and math at the end of grades 3-8, and the NM-ASR tests science in grades 5, 8 and 11.",
      "New Mexico teachers verify each standard in PED's documents, since CourseSmith does not tag standard codes.",
    ],
    sections: [
      {
        heading: "Which standards do New Mexico teachers plan against?",
        paragraphs: [
          "New Mexico's content standards are adopted as rules in Title 6, Chapter 29 of the New Mexico Administrative Code, and PED posts the current set on its adopted content standards page. Several subjects adopt a national set and add New Mexico-specific standards on top.",
        ],
        table: {
          caption: "Selected New Mexico content standards and their rules",
          columns: ["Subject", "Standards", "Rule and timing"],
          rows: [
            [
              "English language arts",
              "Common Core State Standards plus an additional 15% of state-specific standards on cultural responsiveness",
              "Title 6, Chapter 29 NMAC; the 15% is not state-assessed",
            ],
            ["Mathematics", "Common Core State Standards", "Title 6, Chapter 29 NMAC"],
            [
              "Spanish language arts",
              "Spanish Language Arts Common Core Standards plus a state-specific 15%",
              "6.29.15 NMAC, effective July 1, 2018",
            ],
            [
              "Science",
              "New Mexico STEM Ready! Science Standards: NGSS plus six New Mexico-specific standards",
              "6.29.10 NMAC, effective July 1, 2018",
            ],
            [
              "Social studies",
              "New Mexico Social Studies Standards",
              "6.29.11 NMAC, New Mexico Register dated February 22, 2022",
            ],
            ["Arts", "New Mexico Core Arts Standards", "6.29.2 NMAC, effective July 1, 2018"],
          ],
        },
      },
      {
        heading: "What are the New Mexico-specific science standards?",
        paragraphs: [
          "PED describes STEM Ready! as the NGSS in their entirety plus six New Mexico-specific standards, which carry an NM suffix. Several sit under a Science and Society topic, such as 5-SS-1 NM: communicate information from books, reliable media or outside sources that describes how scientists and engineers across New Mexico have improved existing technologies, developed new ones, or improved society.",
          "Others extend NGSS topics with local context. MS-ESS3-3 NM asks middle school students to describe the advantages and disadvantages of technologies related to local industries and energy production, so a national science textbook will need New Mexico examples added before you teach it.",
        ],
      },
      {
        heading: "How are the 2022 social studies standards organized?",
        paragraphs: [
          "The social studies standards have six strands: civics; economics and personal financial literacy; geography; history; ethnic, cultural and identity studies; and inquiry. They are organized by anchor standards, with anchors 1 through 22 discipline based and 23 through 27 inquiry based, and each anchor is unpacked into grade-level performance indicators.",
          "Grade 4 indicators center on New Mexico, such as 4.22: describe and identify the regions and four provinces that make up New Mexico's land surface. Each grade opens with inquiry standards, which the document says are meant to be used alongside the content standards throughout the course.",
        ],
      },
      {
        heading: "Which tests measure New Mexico's standards?",
        paragraphs: [
          "The New Mexico Measures of Student Success and Achievement, NM-MSSA, is the end-of-year summative test for ELA and math in grades 3 to 8, and the New Mexico Assessment of Science Readiness, NM-ASR, measures the STEM Ready! standards in grades 5, 8 and 11. All grade 11 students are expected to take the spring SAT School Day, and students with the most significant cognitive disabilities take the Dynamic Learning Maps alternate assessment.",
          "NM-MSSA and NM-ASR are available in Spanish for qualifying English learners. PED's April 2026 memo adds that, beginning in spring 2027, a Spanish-language SAT School Day Reading and Writing form replaces the grade 11 Spanish SBA Reading form as an accommodated option.",
        ],
      },
      {
        heading: "How do New Mexico teachers use CourseSmith with the state's standards?",
        paragraphs: [
          "CourseSmith supports New Mexico planning as a drafting assistant for your textbook and the local materials you add to it. You bring the standard and the New Mexico context, and the code goes into the plan only after you check it in PED's document.",
        ],
        steps: [
          {
            name: "Upload your textbook and local sources",
            text: "Add the textbook PDF or DOCX, plus any New Mexico readings your school uses, with the book name, subject and grade, and review the chapters and topics.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style, including whether you teach in a bilingual program.",
          },
          {
            name: "Paste the standard, including any NM suffix",
            text: "Copy the full standard, such as 5-SS-1 NM or social studies indicator 4.22, into Co-Pilot and ask for an activity that uses the New Mexico context it names.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in PED's document",
            text: "Open the standard on PED's adopted content standards page, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by the New Mexico Public Education Department?",
        a: "No. CourseSmith is not reviewed or approved by PED, and it does not tag or align output to New Mexico codes. It drafts from the textbook you upload. You paste the standard you are teaching, confirm it in PED's documents and write the code into your plan.",
      },
      {
        q: "Do I need to teach the extra 15% ELA standards if they are not tested?",
        a: "PED lists the state-specific 15% as part of New Mexico's ELA standards, focused on cultural responsiveness, while noting they are not state-assessed. Teach them as part of your curriculum, and use your own readings and community sources, since a national textbook is unlikely to address them.",
      },
      {
        q: "How do I add New Mexico context to a national science textbook?",
        a: "Upload a New Mexico reading or local case study alongside the textbook, then paste an NM-suffixed standard such as MS-ESS3-3 NM into Co-Pilot and ask for an activity built on that source. CourseSmith only draws on what you upload, so local examples must come from you.",
      },
      {
        q: "Can I plan Spanish language arts lessons with CourseSmith?",
        a: "Yes, if you upload the Spanish-language textbook your program uses as the source. Paste the Spanish Language Arts standard you target and review every draft carefully. CourseSmith has no translation feature, so it will not convert an English plan into Spanish for you.",
      },
      {
        q: "Can CourseSmith create NM-MSSA or NM-ASR practice?",
        a: "CourseSmith can turn chapters you taught into a practice test with an answer key and a difficulty mix. It has no access to NM-MSSA or NM-ASR items and makes no claim to predict them, so use its tests as classroom checks.",
      },
    ],
    sources: [
      {
        label: "New Mexico PED: New Mexico Adopted Content Standards",
        url: "https://web.ped.nm.gov/bureaus/instructional-materials/new-mexico-adopted-content-standards/",
      },
      {
        label: "New Mexico PED: Recently Adopted Rules",
        url: "https://web.ped.nm.gov/bureaus/policy-innovation-measurement/rulemaking/recently-adopted-rule/",
      },
      {
        label: "New Mexico PED: NM STEM Ready! Science Standards",
        url: "https://web.ped.nm.gov/bureaus/math-and-science-bureau/nm-stem-ready-science/nm-stem-ready-science-standards/",
      },
      {
        label: "New Mexico PED: NM STEM Ready! New Mexico Specific Standards (May 4, 2018)",
        url: "https://web.ped.nm.gov/wp-content/uploads/2025/01/NM-6-Specific-Standards-Framework.pdf",
      },
      {
        label: "New Mexico PED: New Mexico Social Studies Standards (February 2022)",
        url: "https://web.ped.nm.gov/wp-content/uploads/2025/01/NM-Standards-508.pdf",
      },
      {
        label:
          "New Mexico PED: School Year 2026-27 Assessment Program Requirements (April 23, 2026)",
        url: "https://web.ped.nm.gov/wp-content/uploads/2026/04/School-Year-2026%E2%80%9327-Assessment-Program-Requirements-Memo.pdf",
      },
    ],
    related: [
      "/standards/ngss",
      "/use-cases/science",
      "/features/textbook-to-lesson-plan",
      "/use-cases/social-studies",
    ],
    primaryKeyword: "new mexico standards lesson plans",
    secondaryKeywords: [
      "new mexico stem ready science standards lesson plans",
      "new mexico social studies standards 2022",
      "new mexico 15 percent ela standards",
      "NM-MSSA practice tests",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "New Mexico",
      code: "US-NM",
      framework: "New Mexico Content Standards (Title 6, Chapter 29 NMAC)",
      adoptingBody: "New Mexico Public Education Department",
      officialUrl:
        "https://web.ped.nm.gov/bureaus/instructional-materials/new-mexico-adopted-content-standards/",
    },
  },

  // ---------------------------------------------------------------- North Dakota
  {
    slug: "north-dakota",
    group: "standards",
    navLabel: "North Dakota",
    navBlurb: "ND content standards, 2023 math and ELA, and ND A+ testing explained",
    metaTitle: "North Dakota Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Draft North Dakota lesson plans from your textbook. Decode 2023 math codes like 3.NO.NF.4, see the review timeline and ND A+ tests, then verify. Try free.",
    eyebrow: "Standards: North Dakota Content Standards",
    h1: "North Dakota standards lesson plans, matched to the 2023 math and ELA standards",
    answer:
      "North Dakota standards lesson plans follow the North Dakota Content Standards published by the Department of Public Instruction, which are reviewed every five to seven years by teams of North Dakota educators. Schools were expected to implement the 2023 math standards in 2024-25. CourseSmith drafts from your textbook; you paste the standard and verify it with NDDPI.",
    definition:
      "The North Dakota Content Standards is the set of K-12 academic standards published by the North Dakota Department of Public Instruction, developed by committees of North Dakota educators, and used as the foundation for the ND A+ assessment system.",
    takeaways: [
      "North Dakota reviews its content standards every five to seven years, with committees of North Dakota educators and public comment on the drafts.",
      "The 2023 ELA and mathematics standards were revised in 2022-2023 and first assessed in spring 2025.",
      "A North Dakota math code such as 3.NO.NF.4 names the grade, category, sub-category and standard number.",
      "ND A+ replaced the NDSA in spring 2025 and tests ELA and math in grades 3-8 and 10, and science in grades 4, 8 and 10.",
      "CourseSmith does not tag North Dakota codes, so teachers verify each standard in NDDPI's documents.",
    ],
    sections: [
      {
        heading: "How does North Dakota review its content standards?",
        paragraphs: [
          "NDDPI reviews the North Dakota Content Standards every five to seven years. A team of North Dakota educators reviews each discipline, considering advances in the field, national standards and other states' standards, and the drafts are published for public comment before further revision.",
          "The 2023 math committee shows the process: it met over five two-day sessions from July 2022 to May 2023, revised its work after two rounds of public comment, and went through two reviews by a committee representing business interests, parents and the public. Science is still on its 2019 standards, posted as Rev 2 dated December 10, 2019.",
        ],
        table: {
          caption: "North Dakota standards review timeline, per NDDPI",
          columns: ["Subject", "Revision", "Completion", "Implementation", "Assessment"],
          rows: [
            ["English language arts", "2022-2023", "Summer 2023", "2023-2025", "Spring 2025"],
            ["Mathematics", "2022-2023", "Summer 2023", "2023-2025", "Spring 2025"],
            ["Physical education", "2023-2024", "Summer 2024", "2024-2026", "Not listed"],
            [
              "Computer science and cybersecurity",
              "2024-2025",
              "Summer 2025",
              "2025-2027",
              "Not listed",
            ],
            ["Financial literacy", "2024-2025", "Summer 2025", "2025-2027", "Not listed"],
            ["Health", "2025-2026", "Summer 2026", "2026-2028", "Not listed"],
            ["Social studies", "2025-2026", "Late fall 2026", "2026-2028", "Not listed"],
          ],
        },
      },
      {
        heading: "How do you read a 2023 North Dakota math code?",
        paragraphs: [
          "A North Dakota math code reads grade or grade span, category, sub-category, then standard number. In 3.NO.NF.4, 3 is grade 3, NO is the Number and Operations category, NF is the fractions sub-category, and 4 is the standard: recognize whole numbers as fractions and express fractions that are equivalent to whole numbers.",
          "The four categories are Number and Operations, Algebraic Reasoning, Geometry and Measurement, and Data, Probability, and Statistics. Many standards carry a clarification column, and NDDPI's revision log added one to 3.NO.NF.4 in May 2024 stating that learners go beyond 1, so always plan from the current revision.",
        ],
      },
      {
        heading: "What changed from the 2017 math standards?",
        paragraphs: [
          "The 2023 standards split high school into two grade spans rather than broad categories, which NDDPI says allows more specific identification of the standards assessed in grades 9-10. They also replace the 2017 mathematical practices with math attributes that summarize those practices and align with the 2022 North Dakota Learning Continuum.",
          "NDDPI expected schools and districts to implement the 2023 standards during the 2024-25 school year. Its crosswalk between the 2017 and 2023 standards, dated July 27, 2023, is the fastest way to see which textbook chapters still map cleanly and which need new material.",
        ],
      },
      {
        heading: "Which tests measure North Dakota's standards?",
        paragraphs: [
          "ND A+, the North Dakota Academic Progression of Learning and Understanding of Students, is the state's assessment system, and NDDPI calls the content standards its foundation. It began in spring 2025, replacing the NDSA.",
          "ND A+ connects formative tools, interim assessments given at checkpoints through the year, and a summative test. The summative covers ELA and math in grades 3-8 and 10, and science in grades 4, 8 and 10.",
        ],
      },
      {
        heading: "How do North Dakota teachers use CourseSmith with the content standards?",
        paragraphs: [
          "CourseSmith fits North Dakota planning when you use it to draft from your adopted textbook and bring the standard yourself. The code goes into the plan only after you check it in the current NDDPI document.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style, so every plan reflects how you run your classroom.",
          },
          {
            name: "Paste the standard with its clarification",
            text: "Copy the full standard and its clarification, such as 3.NO.NF.4 and the note that learners go beyond 1, into Co-Pilot and ask for an activity that meets both.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in the current NDDPI document",
            text: "Open the latest revision of the standards on NDDPI's site, confirm the code, wording and clarification, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag North Dakota standard codes?",
        a: "No. CourseSmith does not tag or align output to North Dakota codes, and it is not approved by the Department of Public Instruction. It drafts from the textbook you upload. You paste the standard you target, check it in NDDPI's current document and write the code into your plan.",
      },
      {
        q: "My math textbook was written for the 2017 standards. Can I still use it?",
        a: "Yes, with a check. Use NDDPI's 2017 to 2023 crosswalk to find chapters that still match and gaps you need to fill. Upload the textbook, paste the 2023 standard into Co-Pilot and ask how a planned lesson addresses it, then add material where the book falls short.",
      },
      {
        q: "Which version of the 2023 math standards should I use?",
        a: "Use the latest revision posted on NDDPI's mathematics page, listed as Rev 2 dated June 27, 2024 at the time of writing. The revision log records clarifications and corrected standard descriptions, so an older printout may differ from what is assessed.",
      },
      {
        q: "Can CourseSmith help with ND A+ interim checkpoints?",
        a: "CourseSmith can turn the chapters you taught into a short test with an answer key before an interim checkpoint. It has no access to ND A+ items and makes no claim to predict them, so treat its tests as your own classroom checks.",
      },
      {
        q: "Which social studies standards should I plan with right now?",
        a: "NDDPI's timeline shows the social studies revision running in 2025-2026, with completion targeted for late fall 2026 and implementation in 2026-2028. Keep planning with the current standards and watch NDDPI's standards pages for the new version and its implementation guidance.",
      },
    ],
    sources: [
      {
        label: "North Dakota DPI: Standards Review",
        url: "https://www.nd.gov/dpi/districtsschools/north-dakota-education-content-standards/standards-review",
      },
      {
        label: "North Dakota DPI: Mathematics Content Standards",
        url: "https://www.nd.gov/dpi/districtsschools/north-dakota-education-content-standards/mathematics",
      },
      {
        label: "North Dakota DPI: Mathematics Content Standards K-12, July 2023 (Rev 2)",
        url: "https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/REV2.2024.06.27%20Math%20Content%20Standards%20Final.pdf",
      },
      {
        label: "North Dakota DPI: Science Content Standards",
        url: "https://www.nd.gov/dpi/districtsschools/north-dakota-education-content-standards/science",
      },
      {
        label: "North Dakota DPI: ND A+",
        url: "https://www.nd.gov/dpi/districtsschools/assessment/nd-plus",
      },
    ],
    related: [
      "/use-cases/math",
      "/features/curriculum-planner",
      "/features/quiz-generator",
      "/standards/common-core",
    ],
    primaryKeyword: "north dakota standards lesson plans",
    secondaryKeywords: [
      "north dakota content standards lesson plans",
      "north dakota 2023 math standards",
      "ND A+ assessment practice",
      "north dakota standards review timeline",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "North Dakota",
      code: "US-ND",
      framework: "North Dakota Content Standards",
      adoptingBody: "North Dakota Department of Public Instruction",
      officialUrl:
        "https://www.nd.gov/dpi/districtsschools/north-dakota-education-content-standards",
    },
  },
];
