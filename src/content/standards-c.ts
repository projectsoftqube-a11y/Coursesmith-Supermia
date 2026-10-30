import type { ContentPage } from "./types";

export const STANDARDS_PAGES_C: ContentPage[] = [
  // ---------------------------------------------------------------- Alabama
  {
    slug: "alabama",
    group: "standards",
    navLabel: "Alabama Course of Study",
    navBlurb: "Alabama Courses of Study, numbered standards and ACAP, explained",
    metaTitle: "Alabama Course of Study Lesson Plans | CourseSmith",
    metaDescription:
      "See how Alabama Courses of Study set minimum content, how numbered standards read and what ACAP tests, then draft lesson plans from your textbook.",
    eyebrow: "Standards: Alabama Course of Study",
    h1: "Alabama Course of Study lesson plans built from your adopted textbook",
    answer:
      "Alabama lesson plans follow the Alabama Course of Study for each subject, which the Alabama State Board of Education adopts and which sets the minimum content of every locally adopted curriculum. CourseSmith drafts plans and tests from your district's textbook, and you paste the numbered content standard and confirm it in the ALSDE document.",
    definition:
      "The Alabama Course of Study is the subject-by-subject set of academic standards adopted by the Alabama State Board of Education that provides the legal foundation for the minimum content of locally adopted curricula in Alabama public schools.",
    takeaways: [
      "Each Alabama Course of Study is adopted by the Alabama State Board of Education and sets the minimum content that a local board's curriculum must include.",
      "Content standards are numbered within each grade, so grade 4 mathematics standard 1, under Operations and Algebraic Thinking, asks students to interpret and write equations for multiplicative comparisons.",
      "The core documents in use are the 2019 mathematics, 2021 English language arts, 2023 science and 2024 social studies courses of study.",
      "The ACAP Summative tests English language arts and math in grades 2 through 8 and science in grades 4, 6 and 8.",
      "CourseSmith drafts from your textbook and does not label output with Alabama standard numbers, so teachers add and verify them.",
    ],
    sections: [
      {
        heading: "Who adopts the Alabama Course of Study and what does it require?",
        paragraphs: [
          "The Alabama State Board of Education adopts a separate course of study for each subject. ALSDE describes the English language arts course of study as the legal foundation for the minimum content of a locally adopted curriculum, which local boards of education approve and make available to each teacher.",
          "Each document is drafted by a State Course of Study Committee, and under state law the board appoints 21 of its 28 members. ALSDE also notes that the state textbook adoption process begins after the board adopts a course of study.",
        ],
        table: {
          caption: "Alabama Course of Study editions in the core subjects",
          columns: ["Subject", "Edition", "Why planners care"],
          rows: [
            [
              "Mathematics",
              "2019",
              "Submitted for State Board adoption at the December 12, 2019 meeting; source of the grade 4 example below",
            ],
            [
              "English Language Arts",
              "2021",
              "Sets the minimum content of a locally adopted ELA curriculum",
            ],
            [
              "Science",
              "2023",
              "Built around science and engineering practices and crosscutting concepts",
            ],
            [
              "Social Studies",
              "2024",
              "Replaced the 2010 edition and uses K-2, 3-5, 6-8 and 9-12 bands plus electives",
            ],
            [
              "Digital Literacy and Computer Science",
              "2025",
              "Listed on ALSDE's academic standards page",
            ],
          ],
        },
      },
      {
        heading: "How do you read an Alabama content standard?",
        paragraphs: [
          "Alabama content standards are numbered within each grade and grouped by content area and cluster. In the 2019 mathematics course of study, grade 4 standards sit under content areas such as Operations and Algebraic Thinking and clusters such as solving problems with whole numbers using the four operations.",
          "Standard 1 in that cluster asks students to interpret and write equations for multiplicative comparisons. Because the numbering restarts in every grade, a plan should name the grade and subject with the number and quote the wording, so a reviewer can find it in the course of study at once.",
        ],
      },
      {
        heading: "What does the 2021 ELA course of study ask districts to do?",
        paragraphs: [
          "The 2021 English language arts course of study defines content standards as statements of what all students should know and be able to do at the end of a grade or course. It expects local education agencies to use those standards to select curriculum materials and create the implementation guides teachers work from.",
          "Because the course of study sets minimum content, local boards can build on it in their own curriculum. Read your district's implementation guide alongside the state document, and check whether ELA materials chosen before 2021 reach every 2021 standard.",
        ],
      },
      {
        heading: "Which test measures the Alabama Course of Study?",
        paragraphs: [
          "The ACAP Summative is Alabama's spring, computer-based, criterion-referenced test of progress on the Alabama Courses of Study. It covers English language arts and mathematics in grades 2 through 8 and science in grades 4, 6 and 8.",
          "Students with the most significant cognitive disabilities take the ACAP Alternate instead, which ALSDE runs as a separate assessment. Because ACAP begins in grade 2, second-grade teachers in Alabama plan toward a state test as well.",
        ],
      },
      {
        heading: "How do Alabama teachers use CourseSmith with the Course of Study?",
        paragraphs: [
          "CourseSmith works as a drafting assistant for the textbook your district adopted. The content standard and its number come from you, and they go into the plan only after you check them against ALSDE's document.",
        ],
        steps: [
          {
            name: "Upload the adopted textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, then tidy the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit how you run an Alabama classroom.",
          },
          {
            name: "Paste the numbered content standard",
            text: "Copy the full wording of the standard, for example grade 4 standard 1 on multiplicative comparisons, into Co-Pilot and ask for an activity that targets it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate a lesson plan for the matching topic, then a short test with marks per question and an Easy, Medium and Hard mix, downloadable as Word.",
          },
          {
            name: "Confirm in the ALSDE document",
            text: "Open the current course of study on alabamaachieves.org, confirm the grade, number and wording, and record the standard the way your district's template expects.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag lesson plans with Alabama Course of Study standards?",
        a: "No. CourseSmith does not tag or align output to Alabama standards, and it is not approved by the Alabama State Board of Education or ALSDE. It drafts from the textbook you upload. You paste the content standard you are teaching, check it in the course of study and write it into the plan yourself.",
      },
      {
        q: "Who writes the Alabama Course of Study?",
        a: "A State Course of Study Committee drafts each document, and under state law the Alabama State Board of Education appoints 21 of its 28 members, who serve one-year terms. The board then adopts the finished course of study, which is why each edition carries a year.",
      },
      {
        q: "Does ACAP really start in grade 2?",
        a: "Yes. The ACAP Summative covers English language arts and math from grade 2 through grade 8. Second-grade teachers can use CourseSmith to draft short checks from the class reader with an answer key, then review and edit them in Word before use.",
      },
      {
        q: "My social studies textbook predates the 2024 course of study. What should I do?",
        a: "Compare it with the 2024 Alabama Course of Study: Social Studies before planning, since that document replaced the 2010 edition. Upload the book you have, then paste each 2024 standard into Co-Pilot and ask which chapters cover it and where gaps remain.",
      },
      {
        q: "Can CourseSmith write ACAP practice tests?",
        a: "CourseSmith builds tests from your textbook chapters, but it has no access to ACAP items and makes no claim to predict them. You choose the chapters, question types, marks and difficulty mix, reveal the answer key and download an editable Word file to adjust before students see it.",
      },
    ],
    sources: [
      {
        label: "ALSDE: Alabama Academic Standards",
        url: "https://www.alabamaachieves.org/acad-stand/",
      },
      {
        label: "ALSDE: 2019 Alabama Course of Study: Mathematics",
        url: "https://www.alabamaachieves.org/wp-content/uploads/2022/09/AS_2022923_2019-Alabama-Mathematics-COS_V1.0.pdf",
      },
      {
        label: "ALSDE: 2021 Alabama Course of Study: English Language Arts",
        url: "https://www.alabamaachieves.org/wp-content/uploads/2021/08/2021-Alabama-English-Language-Arts-Course-of-Study.pdf",
      },
      {
        label: "ALSDE: 2024 Alabama Course of Study: Social Studies",
        url: "https://www.alabamaachieves.org/wp-content/uploads/2025/01/AS_20250110_2024-Alabama-Course-of-Study-Social-Studies_V1.0.pdf",
      },
      {
        label: "ALSDE: Alabama Course of Study: Science 2023",
        url: "https://www.alabamaachieves.org/wp-content/uploads/2024/02/AS_20240213_2023-Alabama-Course-of-Study-Science_V1.0.pdf",
      },
      {
        label: "ALSDE: ACAP Summative and Alternate",
        url: "https://www.alabamaachieves.org/assessment/acap/",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/georgia-gse",
      "/use-cases/elementary-school",
      "/features/quiz-generator",
    ],
    primaryKeyword: "alabama course of study lesson plans",
    secondaryKeywords: [
      "alabama standards lesson plans",
      "alabama course of study math standards",
      "ACAP summative lesson planning",
      "alabama course of study science 2023",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Alabama",
      code: "US-AL",
      framework: "Alabama Course of Study",
      adoptingBody: "Alabama State Board of Education",
      officialUrl: "https://www.alabamaachieves.org/acad-stand/",
    },
  },

  // ---------------------------------------------------------------- Alaska
  {
    slug: "alaska",
    group: "standards",
    navLabel: "Alaska standards",
    navBlurb: "Alaska's 2012 ELA and math standards, (L) codes and AK STAR",
    metaTitle: "Alaska Standards Lesson Plans for AK STAR | CourseSmith",
    metaDescription:
      "Read Alaska's 2012 ELA and math standards, locally assessed (L) codes and AK STAR basics, then draft lesson plans and tests from your textbook. Try free.",
    eyebrow: "Standards: Alaska content standards",
    h1: "Alaska standards lesson plans drafted from the textbook you teach",
    answer:
      "Alaska lesson plans follow content standards adopted by the State Board of Education and Early Development, including English language arts and math standards adopted in 2012 and science standards adopted in June 2019. CourseSmith drafts plans and tests from your textbook, and you paste the standard, such as 4.NBT.1, and verify it with DEED.",
    definition:
      "The Alaska English Language Arts and Mathematics Standards are the K-12 academic standards adopted in June 2012 by the Alaska State Board of Education and Early Development that define what Alaska students should understand and be able to do in those subjects.",
    takeaways: [
      "Alaska's English language arts and mathematics standards were adopted in 2012, and DEED lists whether to keep using them as an issue under consideration.",
      "Alaska math codes read grade, domain and number, so 4.NBT.1 is grade 4, Number and Operations in Base Ten, standard 1.",
      "A math standard followed by (L) is meant to be assessed locally, such as 4.MD.4 on elapsed time between U.S. time zones including Alaska Standard time.",
      "AK STAR tests English language arts and math in grades 3 to 9, and the Alaska Science Assessment covers grades 5, 8 and 10.",
      "CourseSmith drafts from your textbook and leaves Alaska standard codes for the teacher to add and confirm.",
    ],
    sections: [
      {
        heading: "Which Alaska standards are in effect?",
        paragraphs: [
          "DEED's standards page lists each content area with the year of its current standards. English language arts and mathematics date from 2012, science from 2019 and social studies from 2024, and DEED also lists the Alaska Cultural Standards from 1998 alongside the academic subjects.",
          "The 2012 math document says the standards do not tell teachers how to teach. It leaves schools and teachers to decide how to put them into practice and to bring in other state and local standards, including cultural standards.",
        ],
        table: {
          caption: "Selected Alaska standards and the year DEED lists for each",
          columns: ["Content area", "Standards", "Year"],
          rows: [
            ["English Language Arts", "English Language Arts Standards", "2012"],
            ["Mathematics", "Mathematics Standards", "2012"],
            ["Science", "Science Standards of Alaska", "2019"],
            ["Social Studies", "Social Studies", "2024"],
            ["World Languages", "Alaska Native Language Arts K-3 Reading Standards", "2024"],
            ["Computer Science and Digital Literacy", "Computer Science; Digital Literacy", "2019"],
            ["Cultural", "Alaska Cultural Standards", "1998"],
          ],
        },
      },
      {
        heading: "How do you read an Alaska math standard?",
        paragraphs: [
          "An Alaska K-8 math code reads grade, domain abbreviation, then standard number. The document lists eleven K-8 domains, from Counting and Cardinality (CC) to Statistics and Probability (SP), and 4.NBT.1 asks students to recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right.",
          "Alaska's document numbers standards without a cluster letter, so search for 4.NBT.1 rather than a lettered form. Each grade opens with an Instructional Focus section, and high school standards are grouped into six conceptual categories, with districts choosing a traditional Algebra I, Geometry and Algebra II sequence or an integrated approach.",
        ],
      },
      {
        heading: "What does (L) mean after an Alaska math standard?",
        paragraphs: [
          "The 2012 math standards state that any standard followed by (L) is to be locally assessed. Those skills are still required, but your own classroom assessment carries the evidence.",
          "Several (L) standards sit in measurement and data. Grade 4 standard 4.MD.4 asks students to solve real-world problems involving elapsed time between U.S. time zones, including Alaska Standard time, and 4.MD.6 asks them to explain the classification of data using range and mode.",
        ],
      },
      {
        heading: "Which tests measure Alaska's standards?",
        paragraphs: [
          "AK STAR, the Alaska System of Academic Readiness, is the standards-based test in English language arts and mathematics for grades 3 through 9. DEED describes a summative part that addresses the breadth and depth of the standards and a growth part in reading, language usage and mathematics.",
          "The Alaska Science Assessment measures the K-12 Science Standards for Alaska in grades 5, 8 and 10. Students with significant cognitive disabilities take the Dynamic Learning Maps alternate assessment instead.",
        ],
      },
      {
        heading: "Are Alaska's ELA and math standards being reviewed?",
        paragraphs: [
          "DEED's ESSA standards page names whether or not to continue using the current ELA and math standards, adopted in 2012, as one of the issues it is considering. The page gives no timeline for a decision.",
          "Until DEED announces a change, plan against the 2012 documents. Check the DEED standards page before each school year so a new adoption does not catch your unit plans out of date.",
        ],
      },
      {
        heading: "How do Alaska teachers use CourseSmith with the state standards?",
        paragraphs: [
          "CourseSmith drafts from the book in front of your students, which matters in districts where classes use different editions or locally written materials. You supply the Alaska standard, and you confirm it in DEED's document.",
        ],
        steps: [
          {
            name: "Upload your textbook or unit packet",
            text: "Add a PDF or DOCX of up to 40 MB with the book name, subject and grade; a single chapter or a locally written unit works too.",
          },
          {
            name: "Set your teaching persona",
            text: "Describe your school, grade range and teaching style, including multi-grade classes if you teach them, so plans match your setting.",
          },
          {
            name: "Paste the Alaska standard",
            text: "Copy the full standard, such as 4.MD.4 on elapsed time between time zones, into Co-Pilot and ask for an activity built on your textbook's examples.",
          },
          {
            name: "Draft the plan and a local check",
            text: "Generate the lesson plan, then a short test or assignment with an answer key that can serve as your local evidence for an (L) standard.",
          },
          {
            name: "Confirm in the DEED document",
            text: "Open the 2012 math or ELA standards on education.alaska.gov, check the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align lesson plans to Alaska standards?",
        a: "No. CourseSmith does not tag or align output to Alaska standards, and it is not approved by DEED or the State Board of Education and Early Development. It drafts from the textbook you upload, and you add and verify the standard yourself.",
      },
      {
        q: "Should I write 4.NBT.1 or 4.NBT.A.1 on an Alaska plan?",
        a: "Write the code as DEED's 2012 math document prints it, which is 4.NBT.1 with no cluster letter. Lettered forms appear in other states' documents and in some publisher materials, so if your textbook's correlation uses them, translate to the Alaska form when you record the standard.",
      },
      {
        q: "How should I plan for a locally assessed (L) standard?",
        a: "Plan it like any other standard, then build your own assessment, since the evidence comes from your classroom. CourseSmith can draft a short test or assignment from the relevant textbook pages with marks and an answer key, which you edit in Word before giving it.",
      },
      {
        q: "Can I bring the Alaska Cultural Standards into a CourseSmith plan?",
        a: "Yes, as your input. CourseSmith knows only your textbook and what you tell it, so paste the cultural standard you want to address into Co-Pilot along with local context, and ask where the lesson can connect to it. Review the result carefully, since local knowledge has to come from you and your community.",
      },
      {
        q: "Is grade 9 tested in Alaska?",
        a: "Yes. AK STAR covers English language arts and mathematics in grades 3 through 9, so ninth-grade ELA and math teachers plan for a statewide test. Science is tested separately in grades 5, 8 and 10 through the Alaska Science Assessment.",
      },
    ],
    sources: [
      {
        label: "DEED: Alaska Standards and Instruction",
        url: "https://education.alaska.gov/standards",
      },
      {
        label: "DEED: Alaska Mathematics Standards, adopted June 2012",
        url: "https://education.alaska.gov/akstandards/math/adopted_math_edited7.25.22.pdf",
      },
      {
        label: "DEED: ESSA Standards",
        url: "https://education.alaska.gov/akessa/standards",
      },
      {
        label: "DEED: Alaska's Required Statewide Assessments",
        url: "https://education.alaska.gov/assessments/requiredassessments",
      },
      {
        label: "DEED: Alaska Science Assessment",
        url: "https://education.alaska.gov/assessments/science",
      },
      {
        label: "DEED: AK STAR Educator Guide to Assessment Results",
        url: "https://education.alaska.gov/assessments/akstar/EdGuide_AssessmentResults_AKSTAR.pdf",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/standards/common-core",
      "/use-cases/math",
      "/use-cases/middle-school",
    ],
    primaryKeyword: "alaska standards lesson plans",
    secondaryKeywords: [
      "alaska math standards lesson plans",
      "alaska ela standards 2012",
      "AK STAR lesson planning",
      "locally assessed standards alaska",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Alaska",
      code: "US-AK",
      framework: "Alaska Content Standards",
      adoptingBody: "Alaska State Board of Education and Early Development",
      officialUrl: "https://education.alaska.gov/standards",
    },
  },

  // ---------------------------------------------------------------- Arizona
  {
    slug: "arizona",
    group: "standards",
    navLabel: "Arizona standards",
    navBlurb: "Arizona's 2016 ELA and math standards, Essential Standards and AASA",
    metaTitle: "Arizona Standards Lesson Plans for AASA | CourseSmith",
    metaDescription:
      "Learn how Arizona's Academic Standards, codes like 4.NBT.A.1 and AASA Essential Standards work, then draft lesson plans from your textbook. Start free.",
    eyebrow: "Standards: Arizona Academic Standards",
    h1: "Arizona standards lesson plans that start from your classroom textbook",
    answer:
      "Arizona lesson plans follow the Arizona Academic Standards adopted by the Arizona State Board of Education, including English language arts and math standards adopted in December 2016 and the 2018 science standards. CourseSmith drafts plans and tests from your textbook, and you paste a standard such as 4.NBT.A.1 and verify it with ADE.",
    definition:
      "The Arizona Academic Standards are the K-12 content standards adopted by the Arizona State Board of Education that define what students should know and be able to do in each subject, with the current English language arts and mathematics standards adopted in December 2016.",
    takeaways: [
      "Arizona's English language arts and mathematics standards were adopted by the State Board of Education in December 2016, and ADE's 2025 grade-level documents still carry that adoption date.",
      "An Arizona math code reads grade, domain, cluster letter and number, so 4.NBT.A.1 is grade 4, Number and Operations in Base Ten, cluster A, standard 1.",
      "Starting in 2025-2026, ADE named Essential Standards in ELA and math that receive a larger share of AASA items, while all standards stay eligible for the test.",
      "AASA tests ELA and math in grades 3 to 8, and AzSCI tests science in grades 5, 8 and 11.",
      "CourseSmith drafts from your textbook and does not tag Arizona codes or Essential Standards, so teachers add and check them.",
    ],
    sections: [
      {
        heading: "Who adopts Arizona's academic standards?",
        paragraphs: [
          "The Arizona State Board of Education adopts standards at the state level under state statute, and the Arizona Department of Education publishes grade-level documents for teachers. ADE's grade 4 math document, updated in 2025, still lists the standards as adopted in December 2016, so a newer file does not always mean newer standards.",
          "Not every course has board-adopted standards. ADE's math page notes that fourth-credit Quantitative Reasoning and Precalculus standards are not board-adopted, because offering those courses is a local decision.",
        ],
      },
      {
        heading: "How do you read an Arizona math standard?",
        paragraphs: [
          'Arizona math codes read from grade to standard. 4.NBT.A.1 sits under the cluster "Generalize place value understanding for multi-digit whole numbers" and asks students to understand that a digit in one place represents ten times what it represents in the place to its right, and ADE notes that grade 4 work in this domain is limited to whole numbers up to 1,000,000.',
          "ADE's 2017 summary of revisions shows how small wording changes matter, which is worth knowing if your textbook was written for Arizona's earlier standards. Compare the 2016 wording before you reuse an older lesson.",
        ],
        table: {
          caption: "Grade 4 place value changes in Arizona's 2016 math standards",
          columns: ["Standard", "What changed from 2010", "Planning note"],
          rows: [
            [
              "4.NBT.A.1",
              "Dropped the 700 ÷ 70 = 10 example and was flagged as a higher cognitive demand",
              "Ask students to explain the place value relationship, not just compute",
            ],
            [
              "4.NBT.B.4",
              'Changed "the" standard algorithm to "a" standard algorithm',
              "More than one standard written method can meet the standard",
            ],
            [
              "4.NBT.B.6",
              "Strategies and representations were removed from the wording",
              "Check older textbook lessons against the shorter 2016 text",
            ],
          ],
        },
      },
      {
        heading: "What are Arizona's Essential Standards?",
        paragraphs: [
          "Essential Standards are ELA and math standards for grades 3 through 8, drawn from the existing board-approved standards, that receive a larger share of AASA items starting in 2025-2026. ADE says this stays within the current test blueprint adopted by the State Board of Education.",
          "ADE is clear that all standards remain valid and subject to inclusion in each year's AASA. The label helps you weigh class time and extra practice, not drop content.",
        ],
      },
      {
        heading: "Which tests measure Arizona's standards?",
        paragraphs: [
          "AASA, Arizona's Academic Standards Assessment, is the statewide test of English language arts and mathematics for all public school students in grades 3 through 8. It measures the Arizona Academic Standards, with the Essential Standards weighting described above.",
          "AzSCI is Arizona's science assessment, given each spring in grades 5, 8 and 11. ADE says its item specifications and performance level descriptors are aligned with the 2018 Arizona Science Standards.",
        ],
      },
      {
        heading: "How do Arizona teachers use CourseSmith with the state standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook your school uses, and you decide which Arizona standard a lesson targets. That keeps the Essential Standards decision, and the code itself, in your hands.",
        ],
        steps: [
          {
            name: "Upload the classroom textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or fill in your school, grade range and teaching style so plans fit your Arizona classroom.",
          },
          {
            name: "Paste the standard and its cluster",
            text: "Copy the full standard, such as 4.NBT.A.1, with its cluster heading into Co-Pilot and ask for an activity that uses your textbook's examples.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test with marks per question, an Easy, Medium and Hard mix and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in ADE's standards document",
            text: "Open the grade-level standards on azed.gov, confirm the code and wording, and note whether ADE lists it as an Essential Standard.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag Arizona standards or Essential Standards?",
        a: "No. CourseSmith does not tag or align output to Arizona standards, does not know which standards ADE lists as Essential, and is not approved by ADE or the State Board of Education. It drafts from your textbook, and you add and verify the standard yourself.",
      },
      {
        q: "Should I teach only the Essential Standards?",
        a: "No. ADE states that all standards remain valid and subject to inclusion in each year's AASA. Essential Standards receive a larger share of test items, so they are a reasonable guide for where to spend extra practice time, not a list of what to skip.",
      },
      {
        q: "Why can't I find state standards for my Precalculus course?",
        a: "ADE's math page explains that fourth-credit Quantitative Reasoning and Precalculus standards are not board-adopted, because those courses are a local decision. Follow your district's course guidance, and upload the course textbook to CourseSmith to draft plans from it.",
      },
      {
        q: "Which science standards does AzSCI measure?",
        a: "ADE says AzSCI's item specifications and performance level descriptors are aligned with the 2018 Arizona Science Standards, and the test is given in grades 5, 8 and 11. If your science textbook predates 2018, paste each standard into Co-Pilot and ask which chapters address it before you plan.",
      },
      {
        q: "Can CourseSmith build AASA practice tests?",
        a: "CourseSmith creates tests from your textbook chapters, but it has no access to AASA items and makes no claim to predict them. Set question types, marks and a difficulty mix, check the answer key and edit the Word file before students take it.",
      },
    ],
    sources: [
      {
        label: "ADE: Arizona Mathematics Standards",
        url: "https://www.azed.gov/standards-practices/k-12standards/mathematics-standards",
      },
      {
        label: "ADE: Arizona Mathematics Standards, Fourth Grade (2025)",
        url: "https://www.azed.gov/sites/default/files/2025/03/Math%20Grade%204%20Final%202025.pdf",
      },
      {
        label: "ADE: Fourth Grade Summary of Revisions and Planning Guidance",
        url: "https://www.azed.gov/sites/default/files/2017/02/Fourth%20Grade%20Summary%20of%20Revisions%20Updated%20%207-20-17.pdf",
      },
      {
        label: "ADE: English Language Arts and Math Essential Standards",
        url: "https://www.azed.gov/standards-practices/english-language-arts-and-math-essential-standards",
      },
      {
        label: "ADE: AASA",
        url: "https://www.azed.gov/assessment/aasa",
      },
      {
        label: "ADE: AzSCI",
        url: "https://www.azed.gov/assessment/sci",
      },
    ],
    related: ["/features/quiz-generator", "/standards/california", "/use-cases/middle-school"],
    primaryKeyword: "arizona standards lesson plans",
    secondaryKeywords: [
      "arizona academic standards lesson plans",
      "arizona essential standards",
      "AASA lesson planning",
      "arizona math standards 4.NBT",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Arizona",
      code: "US-AZ",
      framework: "Arizona Academic Standards",
      adoptingBody: "Arizona State Board of Education",
      officialUrl: "https://www.azed.gov/standards-practices/k-12standards/mathematics-standards",
    },
  },

  // ---------------------------------------------------------------- Arkansas
  {
    slug: "arkansas",
    group: "standards",
    navLabel: "Arkansas standards",
    navBlurb: "Arkansas 2023 math and ELA codes, revision cycle and ATLAS testing",
    metaTitle: "Arkansas Standards Lesson Plans for ATLAS | CourseSmith",
    metaDescription:
      "Decode Arkansas 2023 math and ELA codes like 4.NPV.1, see what ATLAS tests and when standards are revised, then draft lesson plans from your textbook.",
    eyebrow: "Standards: Arkansas Academic Standards",
    h1: "Arkansas Academic Standards lesson plans drafted from your textbook",
    answer:
      "Arkansas lesson plans follow the Arkansas Academic Standards, which the State Board of Education approves on a revision cycle; the current math and English language arts standards were revised in 2023 for full implementation in 2023-24. CourseSmith drafts plans and tests from your textbook, and you paste a standard such as 4.NPV.1 and verify it with DESE.",
    definition:
      "The Arkansas Academic Standards are the K-12 content standards approved by the Arkansas State Board of Education and published by the Division of Elementary and Secondary Education (DESE) that set what students should learn in each grade and course.",
    takeaways: [
      "The Arkansas State Board of Education unanimously approved revised K-8, Algebra I and Geometry math standards on April 13, 2023, for full implementation in 2023-24.",
      "A 2023 Arkansas math code reads grade, strand and number, so 4.NPV.1 is grade 4, Number and Place Value Concepts, standard 1.",
      "The 2023 ELA standards can add a sub-strand code, as in 5.FR.1.PD for decoding multisyllabic base words.",
      "ATLAS tests English language arts, math and science in grades 3 to 8, ELA in grades 9 and 10, and Algebra I, Geometry and Biology at the end of the course.",
      "CourseSmith drafts from your textbook and leaves Arkansas codes to the teacher to add and verify.",
    ],
    sections: [
      {
        heading: "Who approves Arkansas standards and when were they last revised?",
        paragraphs: [
          "The Arkansas State Board of Education approves the standards that DESE revises, as required by Ark. Code Ann. § 6-15-2906. For the 2023 revision of K-12 English language arts and K-8, Algebra I and Geometry math, DESE took public feedback from March 13 to March 24, 2023, before sending the drafts to the board that spring.",
          "The board unanimously approved the revised math standards on April 13, 2023. DESE's memo said the new standards would be expected in the 2023-2024 school year and thereafter, so any Arkansas math or ELA textbook chosen before then needs a check against the 2023 wording.",
        ],
      },
      {
        heading: "How do you read an Arkansas 2023 standard code?",
        paragraphs: [
          'The 2023 math standards use grade, strand abbreviation and number. 4.NPV.1 reads "Recognize that a digit in a given place represents ten times what it represents in the place to its right," under a Place Value topic whose goal is that students increase base ten place value and rounding concepts.',
          "ELA codes follow the same idea and sometimes add a sub-strand. In 5.FR.1.PD, FR is Foundational Reading and PD marks phonics decoding, while 6.V.1 is a grade 6 vocabulary standard on using general academic and content-specific words accurately.",
        ],
        table: {
          caption: "Strands in the 2023 Arkansas K-5 math standards",
          columns: ["Strand", "Code", "Example"],
          rows: [
            ["Number & Place Value Concepts", "NPV", "4.NPV.1, place value"],
            ["Computation & Algebraic Reasoning", "CAR", "4.CAR.4, multi-digit multiplication"],
            ["Geometry & Measurement", "GM", "1.GM.5, telling time"],
            ["Data Analysis", "DA", "3.DA.2, scaled graphs and line plots"],
          ],
        },
      },
      {
        heading: "What does ATLAS test?",
        paragraphs: [
          "ATLAS, the Arkansas Teaching, Learning & Assessment System, is Arkansas's statewide summative assessment. DESE's ATLAS page lists grades 3 through 8 in English language arts, mathematics and science, end-of-year ELA exams in grades 9 and 10, and end-of-course exams in Algebra I, Geometry and Biology.",
          "Plan against the 2023 wording and read the limits inside each standard closely. For example, 4.NPV.2 asks grade 4 students to read and write whole numbers up to 1,000,000, so a lesson that stops at smaller numbers falls short.",
        ],
      },
      {
        heading: "When will Arkansas revise its standards again?",
        paragraphs: [
          "DESE publishes a standards revision cycle that staggers subjects across years. Its chart lists mathematics for committee work in summer 2031, State Board approval in April 2032 and full implementation in 2033-34.",
          "Other subjects sit at different points on the same chart. Check DESE's revision cycle for your subject before investing in new materials, since new codes arrive with each revision.",
        ],
      },
      {
        heading: "How do Arkansas teachers use CourseSmith with the state standards?",
        paragraphs: [
          "CourseSmith drafts from your textbook, so it works whether or not your materials were written for the 2023 standards. You bring the 2023 standard and confirm it with DESE.",
        ],
        steps: [
          {
            name: "Upload the textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and adjust the chapters and topics CourseSmith creates.",
          },
          {
            name: "Set your teaching persona",
            text: "Enter your school, grade range and teaching style, or upload a resume, so plans fit your Arkansas classroom.",
          },
          {
            name: "Paste the 2023 standard",
            text: "Copy the full 2023 standard, such as 4.NPV.1, into Co-Pilot and ask for an activity that reaches it with your textbook's examples.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test or assignment with marks and an answer key, and download it as Word.",
          },
          {
            name: "Confirm in DESE's standards document",
            text: "Open the 2023 standards on DESE's curriculum pages, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label plans with Arkansas standard codes?",
        a: "No. CourseSmith does not tag or align output to Arkansas standards, and it is not approved by DESE or the Arkansas State Board of Education. It drafts from the textbook you upload. You paste the 2023 standard, check it in DESE's document and write the code into the plan yourself.",
      },
      {
        q: "Can I still use a textbook written before the 2023 standards?",
        a: "You can draft from it, but map each lesson to the 2023 standard by wording, since older correlations use codes that no longer match. Paste the 2023 standard into Co-Pilot and ask which parts of your chapter address it and what is missing.",
      },
      {
        q: "Is grade 10 English tested in Arkansas?",
        a: "Yes. DESE's ATLAS page lists end-of-year ELA exams in grades 9 and 10, along with grades 3 through 8. High school English teachers can use CourseSmith to draft text-based questions from the works they teach and review them before use.",
      },
      {
        q: "Can CourseSmith build Algebra I or Geometry end-of-course practice?",
        a: "CourseSmith builds practice tests from your course textbook, choosing chapters, question types, marks and a difficulty mix. It has no access to ATLAS items and makes no claim to predict them, so compare each draft with the 2023 standards before students use it.",
      },
    ],
    sources: [
      {
        label: "Arkansas State Board of Education: Minutes, April 13, 2023",
        url: "https://dese.ade.arkansas.gov/Files/04-2023_SBE_Minutes_-_DRAFT_20230626130002.pdf",
      },
      {
        label: "DESE: Arkansas Mathematics Standards, Grades K-8, Algebra I, Geometry (2023)",
        url: "https://dese.ade.arkansas.gov/Files/AR_2023_K-8,_Alg,_Geo_Math_Standards_LS_6.21.23_LS.pdf",
      },
      {
        label: "DESE: Arkansas English Language Arts Standards (2023)",
        url: "https://dese.ade.arkansas.gov/Files/AR_2023_K-12_ELA_Standards_LS_7.2023_LS.pdf",
      },
      {
        label:
          "ADE Commissioner's Memo LS-23-059: Public comment on revised ELA and math standards",
        url: "https://adecm.ade.arkansas.gov/ViewApprovedMemo.aspx?Id=5417",
      },
      {
        label: "DESE: ATLAS 3-10",
        url: "https://dese.ade.arkansas.gov/Offices/learning-services/assessment/atlas-3-10",
      },
      {
        label: "DESE: Arkansas Academic Standards Revision Cycle",
        url: "https://dese.ade.arkansas.gov/Files/ARKANSAS_ACADEMIC_STANDARDS_REVISION_CYCLE_LS.pdf",
      },
    ],
    related: [
      "/features/textbook-to-lesson-plan",
      "/standards/texas-teks",
      "/use-cases/math",
      "/features/ai-assignment-generator",
    ],
    primaryKeyword: "arkansas standards lesson plans",
    secondaryKeywords: [
      "arkansas academic standards lesson plans",
      "arkansas 2023 math standards codes",
      "ATLAS assessment lesson planning",
      "arkansas ela standards 2023",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Arkansas",
      code: "US-AR",
      framework: "Arkansas Academic Standards",
      adoptingBody: "Arkansas State Board of Education",
      officialUrl:
        "https://dese.ade.arkansas.gov/Offices/learning-services/curriculum-support/mathematics-standards-and-courses",
    },
  },

  // ---------------------------------------------------------------- Colorado
  {
    slug: "colorado",
    group: "standards",
    navLabel: "Colorado CAS",
    navBlurb: "Colorado Academic Standards, six-year revisions and CMAS testing",
    metaTitle: "Colorado Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Learn how the Colorado Academic Standards are organized, which subjects are under revision and what CMAS tests, then draft lesson plans from your textbook.",
    eyebrow: "Standards: Colorado Academic Standards",
    h1: "Colorado Academic Standards lesson plans grounded in your textbook",
    answer:
      "Colorado lesson plans follow the Colorado Academic Standards, which the Colorado State Board of Education adopts and revises in staggered six-year cycles, while each district adopts local standards that meet or exceed them. CourseSmith drafts plans and tests from your textbook, and you paste the grade level expectation and check it with CDE.",
    definition:
      "The Colorado Academic Standards (CAS) are the state academic standards adopted by the Colorado State Board of Education in 13 content areas, where state law defines a standard as a clear, measurable learning target for what a student should know or be able to do.",
    takeaways: [
      "State law requires the Colorado State Board of Education to adopt and revise standards in staggered six-year cycles, with about a third of content areas revised every two years.",
      "Local education providers must adopt local standards that meet or exceed the state standards and review them every six years.",
      "The board approved targeted climate science revisions in August 2025 for use in 2027-28, and revised high school math standards in May 2026 that take effect in 2028-29.",
      "CMAS tests math and English language arts in grades 3 to 8, science in grades 5, 8 and 11, and social studies in grade 7.",
      "CourseSmith drafts from your textbook and does not tag Colorado standards, so teachers add the expectation and confirm it with CDE.",
    ],
    sections: [
      {
        heading: "Who adopts the Colorado Academic Standards?",
        paragraphs: [
          "The Colorado State Board of Education adopts the state standards in 13 content areas, from comprehensive health to world languages. Under C.R.S. 22-7-1005, the board must adopt and revise standards in staggered six-year cycles, and review committees make recommendations while the board has the final decision.",
          "Colorado leaves curriculum to districts. Local education providers must adopt local standards that meet or exceed the state standards, may adopt the state standards as their own, and must keep their curricula aligned with those standards.",
        ],
      },
      {
        heading: "Which subjects are being revised now?",
        paragraphs: [
          "CDE groups content areas into three review cycles, each with its own adoption years. That staggering means a Colorado teacher can be planning against standards from different years in different subjects.",
        ],
        table: {
          caption: "Colorado's staggered standards review cycles",
          columns: ["Group", "Content areas", "Adoption years", "Current status"],
          rows: [
            [
              "Group 1",
              "Dance, drama and theatre arts, music, social studies, visual arts",
              "2022, 2028, 2034",
              "Revision to be considered in late 2026 or early 2027, with completion by summer 2028",
            ],
            [
              "Group 2",
              "Computer science, English language proficiency, physical education, world languages",
              "2024, 2030, 2036",
              "Approved in 2024; next cycle begins late 2028 or early 2029",
            ],
            [
              "Group 3",
              "Comprehensive health, mathematics, reading, writing and communicating, science",
              "2026, 2032, 2038",
              "Science revised August 2025, high school math May 2026; reading, writing and communicating re-adopted without revisions in December 2024",
            ],
          ],
        },
      },
      {
        heading: "How is a Colorado standard organized?",
        paragraphs: [
          "Each Colorado standard breaks into prepared graduate statements, grade level expectations and evidence outcomes. Prepared graduate statements describe what students need for postsecondary and workforce success, grade level expectations set the concepts and skills for a grade, and evidence outcomes show what mastery looks like.",
          'In fourth grade math, MA.4.NBT.A, "Generalize place value understanding for multi-digit whole numbers," has evidence outcomes on place value relationships such as 700 ÷ 70 = 10, on reading, writing and comparing multi-digit numbers, and on rounding. A plan that cites the expectation should name the evidence outcomes the lesson targets, since one expectation can hold several.',
        ],
      },
      {
        heading: "What is changing in high school math and science?",
        paragraphs: [
          "The board unanimously approved revised high school math standards in May 2026, and CDE says they take effect in the 2028-29 school year after a two-year transition. The revision organizes the high school standards in pathways and replaces the high school portion of the current math standards.",
          "At its August 2025 meeting, the board made targeted revisions to strengthen coverage of climate science in the K-12 science standards. CDE says those revisions will be implemented in the 2027-28 school year, so science teachers using older textbooks should plan to supplement.",
        ],
      },
      {
        heading: "Which tests measure the Colorado Academic Standards?",
        paragraphs: [
          "CMAS, the Colorado Measures of Academic Success, is based on the Colorado Academic Standards. It tests math and English language arts in grades 3 through 8, science in grades 5, 8 and 11, and social studies in grade 7, and grades 3 and 4 can take the Colorado Spanish Language Arts version of the ELA test.",
          "CDE describes CMAS results as one measure of academic progress, not the whole picture. For classroom planning, the grade level expectations behind each tested subject matter more than the test format.",
        ],
      },
      {
        heading: "How do Colorado teachers use CourseSmith with the CAS?",
        paragraphs: [
          "CourseSmith drafts from the textbook your district chose, which suits Colorado's model of district-adopted local standards. You decide which grade level expectation and evidence outcomes a lesson targets.",
        ],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Colorado classroom.",
          },
          {
            name: "Paste the expectation and evidence outcomes",
            text: "Copy the grade level expectation, such as MA.4.NBT.A, and the evidence outcomes you are targeting into Co-Pilot, and ask for activities that produce that evidence.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test with marks, an Easy, Medium and Hard mix and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm with CDE and your district",
            text: "Check the wording in CDE's standards documents and your district's local standards, then record the expectation in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to the Colorado Academic Standards?",
        a: "No. CourseSmith does not tag or align output to the CAS, and it is not approved by CDE or the Colorado State Board of Education. It drafts from your textbook, and you paste and verify the grade level expectation yourself.",
      },
      {
        q: "Which high school math standards should I plan with in 2026-27?",
        a: "Plan with the current standards. CDE says the revised high school math standards take effect in the 2028-29 school year after a two-year transition, so the years before then are a good time to compare your course textbook with the new pathways.",
      },
      {
        q: "Should my plan cite the grade level expectation or the evidence outcome?",
        a: "Cite the grade level expectation, such as MA.4.NBT.A, and name the evidence outcomes the lesson produces. Evidence outcomes describe what mastery looks like, so they are the best guide for writing the quick check at the end of a lesson.",
      },
      {
        q: "Can teachers comment on the social studies revision?",
        a: "Yes. CDE is collecting feedback on the social studies and arts standards, with responses due November 13, 2026, and CDE expects to consider revisions in late 2026 or early 2027 with completion by summer 2028. Check CDE's review and revision page for the latest steps.",
      },
      {
        q: "Is social studies tested in Colorado?",
        a: "Yes. CDE lists a CMAS social studies assessment in grade 7. Middle school teachers can use CourseSmith to draft lessons and practice tests from their social studies textbook, then check them against the 2022 social studies standards.",
      },
    ],
    sources: [
      {
        label: "CDE: Colorado Academic Standards and Essential Skills",
        url: "https://ed.cde.state.co.us/standardsandinstruction/standards",
      },
      {
        label: "CDE: Colorado Academic Standards Review and Revision",
        url: "https://ed.cde.state.co.us/standardsandinstruction/casreviewandrevision",
      },
      {
        label: "CDE: Standards Review Committee, Science",
        url: "https://ed.cde.state.co.us/standardsandinstruction/casreviewandrevision/group3-sciencecommittee",
      },
      {
        label: "CDE News Release: State Board May 2026 meeting",
        url: "https://ed.cde.state.co.us/newsbureau/newsrelease/state-board-may-2026",
      },
      {
        label: "CDE: Mathematics, 2020 Colorado Academic Standards, Grades 3-5",
        url: "https://www.cde.state.co.us/comath/2020cas-ma-3-5",
      },
      {
        label: "CDE: CMAS State Summative Assessments",
        url: "https://ed.cde.state.co.us/assessment/cmas",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/standards/ngss",
      "/use-cases/high-school",
      "/use-cases/science",
    ],
    primaryKeyword: "colorado academic standards lesson plans",
    secondaryKeywords: [
      "colorado standards lesson plans",
      "colorado academic standards revision",
      "CMAS lesson planning",
      "colorado high school math pathways",
      "grade level expectations evidence outcomes",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Colorado",
      code: "US-CO",
      framework: "Colorado Academic Standards (CAS)",
      adoptingBody: "Colorado State Board of Education",
      officialUrl: "https://ed.cde.state.co.us/standardsandinstruction/standards",
    },
  },

  // ---------------------------------------------------------------- Connecticut
  {
    slug: "connecticut",
    group: "standards",
    navLabel: "Connecticut Core",
    navBlurb: "Connecticut Core Standards, NGSS and 2023 social studies codes",
    metaTitle: "Connecticut Core Standards Lesson Plans | CourseSmith",
    metaDescription:
      "See how the Connecticut Core Standards, NGSS and 2023 social studies standards are coded and tested, then draft lesson plans from your textbook. Try free.",
    eyebrow: "Standards: Connecticut Core Standards",
    h1: "Connecticut Core Standards lesson plans built from your district textbook",
    answer:
      "Connecticut lesson plans follow standards adopted by the Connecticut State Board of Education: the Connecticut Core Standards in English language arts and math since 2010, the NGSS since November 2015, and social studies standards published in 2023. CourseSmith drafts plans and tests from your textbook, and you paste and verify the standard.",
    definition:
      "The Connecticut Core Standards are the English language arts and mathematics standards, plus literacy standards for history/social studies, science and technical subjects in grades 6-12, that the Connecticut State Board of Education adopted in 2010.",
    takeaways: [
      "The Connecticut State Board of Education adopted the Connecticut Core Standards in 2010, and school districts develop local curricula based on them.",
      "The board adopted the Next Generation Science Standards by unanimous vote on November 4, 2015, and the NGSS Science Assessment is given in grades 5, 8 and 11.",
      "Smarter Balanced tests English language arts and math in grades 3 to 8, and the Connecticut SAT School Day is the grade 11 test.",
      "A 2023 social studies code such as 5.Civ.3.a reads grade, disciplinary lens, C3-aligned skill number and order of appearance.",
      "CourseSmith drafts from your textbook and leaves Connecticut standard codes to the teacher to add and verify.",
    ],
    sections: [
      {
        heading: "Who adopts Connecticut's standards?",
        paragraphs: [
          "The Connecticut State Board of Education adopts the state's academic standards, and districts write local curricula from them. CSDE describes the Connecticut Core Standards, adopted in 2010, as clear expectations for each grade in English language arts and mathematics, plus literacy in history/social studies, science and technical subjects in grades 6-12.",
          "Science follows a different document. The board adopted the Next Generation Science Standards by unanimous vote on November 4, 2015, so Connecticut science plans cite NGSS performance expectations rather than Core Standards codes.",
        ],
      },
      {
        heading: "How do you read a Connecticut social studies standard?",
        paragraphs: [
          "The Connecticut Elementary and Secondary Social Studies Standards (2023) build on the 2015 social studies frameworks and the C3 Framework's four dimensions of inquiry. Each grade or course has inquiry standards, such as 5.Inq.3.a on gathering relevant evidence from multiple sources about a person, event or issue in United States history, and content standards in history, civics, geography and economics.",
          "In 5.Civ.3.a, students examine the origins and purpose of key provisions of the United States Constitution, with parenthetical examples such as checks and balances and federalism. CSDE says those content suggestions are guidance for designing units, not a checklist of topics.",
        ],
        table: {
          caption: "Anatomy of the Connecticut social studies code 5.Civ.3.a",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade level or course", "5", "Grade 5"],
            ["Disciplinary lens", "Civ", "Civics"],
            ["Skill number", "3", "Skill aligned with the C3 Framework"],
            ["Order of appearance", "a", "First time this skill appears in the course"],
          ],
        },
      },
      {
        heading: "What about the Black and Latino studies course?",
        paragraphs: [
          "In December 2020 the State Board approved a Black and Latino studies curriculum that the State Education Resource Center (SERC) developed with CSDE under Public Act 19-12. Districts could offer the high school elective in 2021-2022 and had to offer it in the school year beginning in fall 2022.",
          "The course is a year-long study of Black and Latino history. Teachers planning it can upload their course readings to CourseSmith as the source material, then check each draft against the state curriculum.",
        ],
      },
      {
        heading: "Which tests measure Connecticut's standards?",
        paragraphs: [
          "CSDE describes the Smarter Balanced assessments as measuring achievement and growth on the Connecticut Core Standards. Since 2015-16, the Connecticut SAT School Day has served as the high school summative assessment in ELA and mathematics in place of Smarter Balanced.",
        ],
        table: {
          caption: "Connecticut summative assessments and 2026-27 windows",
          columns: ["Assessment", "Grades", "2026-27 window"],
          rows: [
            ["Smarter Balanced (ELA and math)", "3-8", "March 22 to May 28, 2027"],
            ["NGSS Science Assessment", "5 and 8", "March 22 to May 28, 2027"],
            ["NGSS Science Assessment", "11", "February 1 to May 28, 2027"],
            ["Connecticut SAT School Day", "11", "March 1 to April 30, 2027"],
            [
              "Connecticut Alternate Assessment (ELA and math)",
              "3-8 and 11",
              "March 22 to May 28, 2027",
            ],
          ],
        },
      },
      {
        heading: "How do Connecticut teachers use CourseSmith with the state standards?",
        paragraphs: [
          "CourseSmith drafts from your district's textbook, which fits Connecticut's model of local curricula built on state standards. You choose the standard, and you confirm it in CSDE's documents.",
        ],
        steps: [
          {
            name: "Upload the district textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Connecticut classroom.",
          },
          {
            name: "Paste the standard",
            text: "Copy the full standard, such as 5.Civ.3.a or an inquiry standard, into Co-Pilot and ask for an inquiry activity built on your textbook's sources.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test or assignment with marks and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in CSDE's documents",
            text: "Open the relevant Connecticut standards document on portal.ct.gov, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is CourseSmith approved by CSDE or aligned to the Connecticut Core Standards?",
        a: "No. CourseSmith is not reviewed or approved by CSDE or the Connecticut State Board of Education, and it does not tag or align output to Connecticut standards. It drafts from the textbook you upload, and you verify any standard you cite.",
      },
      {
        q: "Do the Connecticut Core Standards apply to science and social studies teachers?",
        a: "Partly. The Core Standards include literacy standards for history/social studies, science and technical subjects in grades 6-12, so a middle or high school science lesson can address both an NGSS performance expectation and a literacy standard. Paste both into Co-Pilot when you plan.",
      },
      {
        q: "How should I treat the examples in parentheses in social studies standards?",
        a: "As suggestions. CSDE describes them as guidance for designing engaging units and inquiries, not a checklist of topics to cover. Choose the examples your textbook supports well and note them in your plan.",
      },
      {
        q: "When do juniors take the NGSS Science Assessment?",
        a: "For 2026-27, CSDE lists a grade 11 NGSS window from February 1 to May 28, 2027, earlier than the March 22 start for grades 5 and 8. High school science teachers can draft textbook-based review tests in CourseSmith, but it has no access to state test items.",
      },
    ],
    sources: [
      {
        label: "CSDE: Smarter Balanced Frequently Asked Questions",
        url: "https://portal.ct.gov/-/media/SDE/Student-Assessment/Smarter-Balanced/2022_23-backtoschoolsmarterbalanced_faq_final.pdf",
      },
      {
        label: "CSDE: Science Standards and Resources",
        url: "https://portal.ct.gov/SDE/Science/Science-Standards-and-Resources",
      },
      {
        label: "CSDE: Connecticut Elementary and Secondary Social Studies Standards",
        url: "https://portal.ct.gov/-/media/sde/social-studies/socialstudiesstandards.pdf",
      },
      {
        label: "CSDE: Summative Assessment, End-of-Year",
        url: "https://portal.ct.gov/sde/student-assessment/main-assessment/student-assessment/summative-assessment---end-of-year",
      },
      {
        label:
          "CSDE: Connecticut first state to require high schools offer courses on Black and Latino studies",
        url: "https://portal.ct.gov/sde/press-room/press-releases/2020/ct-first-state-to-require-high-schools-offer-courses-on-black-and-latino",
      },
    ],
    related: [
      "/use-cases/social-studies",
      "/standards/ngss",
      "/standards/new-york",
      "/features/ai-assignment-generator",
    ],
    primaryKeyword: "connecticut core standards lesson plans",
    secondaryKeywords: [
      "connecticut standards lesson plans",
      "connecticut social studies standards 2023",
      "connecticut NGSS lesson plans",
      "smarter balanced connecticut lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Connecticut",
      code: "US-CT",
      framework: "Connecticut Core Standards",
      adoptingBody: "Connecticut State Board of Education",
      officialUrl: "https://portal.ct.gov/SDE/Science/Science-Standards-and-Resources",
    },
  },

  // ---------------------------------------------------------------- Delaware
  {
    slug: "delaware",
    group: "standards",
    navLabel: "Delaware standards",
    navBlurb: "Delaware content standards under Regulation 501, plus DeSSA basics",
    metaTitle: "Delaware Standards Lesson Plans for DeSSA | CourseSmith",
    metaDescription:
      "See how Regulation 501 sets Delaware's standards, from Common Core ELA and math to NGSS, and what DeSSA tests, then draft lesson plans from your textbook.",
    eyebrow: "Standards: Delaware Content Standards",
    h1: "Delaware content standards lesson plans drafted from your textbook",
    answer:
      "Delaware lesson plans follow the state content standards named in Regulation 501, which requires every public school instructional program to align with them; since 2010-2011 the English language arts and math standards have been the Common Core. CourseSmith drafts plans and tests from your textbook, and you paste the standard and confirm it with the Department of Education.",
    definition:
      "The Delaware Content Standards are the state academic standards named in 14 DE Admin. Code 501, which are amended with the approval of the Secretary of Education and the State Board of Education and with which public school instructional programs must align.",
    takeaways: [
      "Regulation 501 requires instructional programs in Delaware public schools to align with 15 named content standards documents, from English language arts to driver education.",
      "Delaware's English language arts and mathematics standards have been the Common Core since the 2010-2011 school year, and the NGSS became its science standards in 2013-2014.",
      "Financial literacy and computer science standards took effect in 2018-19, and media literacy and driver education standards in 2023-2024.",
      "DeSSA tests ELA and math in grades 3 to 8, with the SAT School Day in grade 11, and social studies testing covers grades 4 through 8 and grade 11 beginning in 2025.",
      "CourseSmith drafts from your textbook and leaves Delaware standard codes to the teacher to add and verify.",
    ],
    sections: [
      {
        heading: "What does Regulation 501 require?",
        paragraphs: [
          "Regulation 501 says instructional programs in Delaware public schools shall be in alignment with the state content standards documents. It defines adopted as accepting a set of standards as the basis for curriculum and assessment alignment across the state, on a timeline set by the Department of Education.",
          "The standards may be amended with the approval of the Secretary and the State Board of Education. The regulation also points to Regulation 502 on aligning district curricula to the state standards and Regulation 503 on instructional program requirements.",
        ],
        table: {
          caption: "Delaware content standards with effective dates set in Regulation 501",
          columns: ["Content standards", "Source", "Effective"],
          rows: [
            [
              "English language arts and mathematics",
              "Common Core Standards (NGA and CCSSO)",
              "2010-2011 school year",
            ],
            [
              "Science",
              "Next Generation Science Standards, developed with 26 states including Delaware",
              "2013-2014 school year",
            ],
            ["Financial literacy", "Financial Literacy Content Standards", "2018-19 school year"],
            ["Computer science", "Computer Science Content Standards", "2018-19 school year"],
            ["Media literacy", "Media Literacy Content Standards", "2023-2024 school year"],
            ["Driver education", "Driver Education Content Standards", "2023-2024 school year"],
          ],
        },
      },
      {
        heading: "Does the Department of Education set the curriculum?",
        paragraphs: [
          "No. In social studies, for example, the Delaware Department of Education says it does not create or enforce a specific curriculum, leaving districts and charter schools to decide how the standards are met. Districts choose their own materials within the alignment rules of Regulations 501 and 502.",
          "That makes the textbook your district picked the practical starting point for a lesson. Regulation 501 also calls for integrating the content standards within and across academic and technical curricula, which suits cross-subject planning such as media literacy inside an ELA unit.",
        ],
      },
      {
        heading: "How are Delaware's social studies standards organized?",
        paragraphs: [
          "Delaware's K-12 social studies standards cover civics, economics, geography and history, with end-of-year expectations for each grade. Anchor standards carry the big idea, such as History Anchor Standard One: students will employ chronological concepts in analyzing historical phenomena.",
          "Each anchor has more specific standards beneath it. The Department's grade 8 scope and sequence lists standard 1a under History Anchor Standard One, asking students to examine historical materials relating to a particular region, society or theme, analyze change over time and make logical inferences about cause and effect. Quote that full wording in a plan, since the same anchor spans many grades.",
        ],
      },
      {
        heading: "Which DeSSA tests measure Delaware's standards?",
        paragraphs: [
          "The Delaware System of Student Assessments (DeSSA) includes ELA and mathematics summative tests in grades 3 through 8 provided by the Smarter Balanced consortium, and high school students take the SAT School Day in grade 11. Science is tested in grades 5 and 8 and in high school biology.",
          "Beginning in 2025, students complete state social studies testing in grades 4 through 8 and once in grade 11. Students with significant cognitive disabilities take DeSSA-Alt in ELA and math in grades 3 through 8 and 11.",
        ],
      },
      {
        heading: "How do Delaware teachers use CourseSmith with the content standards?",
        paragraphs: [
          "CourseSmith drafts from your chosen textbook, matching Delaware's model where districts select curriculum and the state sets standards. You choose the standard and confirm it.",
        ],
        steps: [
          {
            name: "Upload your curriculum textbook",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and review the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Delaware classroom.",
          },
          {
            name: "Paste the standard or benchmark",
            text: "Copy the full standard, or the anchor standard and grade-cluster benchmark in social studies, into Co-Pilot and ask for an activity that reaches it.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan, then a short test or assignment with marks and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in the Department's documents",
            text: "Open the standards on education.delaware.gov, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith align plans to Delaware content standards?",
        a: "No. CourseSmith does not tag or align output to Delaware standards, and it is not approved by the Delaware Department of Education or the State Board of Education. It drafts from your uploaded textbook, and you add and verify the standard yourself.",
      },
      {
        q: "Are Delaware's ELA and math standards the Common Core?",
        a: "Regulation 501 states that, effective with the 2010-2011 school year, Delaware's ELA and mathematics content standards are made up of the Common Core Standards. Use the Department's current standards pages to confirm the exact document before you cite a code.",
      },
      {
        q: "How can I plan for the media literacy standards?",
        a: "Media literacy content standards took effect in 2023-2024 under Regulation 501, which also calls for integrating standards across curricula. Upload your ELA or social studies textbook, paste the media literacy standard into Co-Pilot and ask where a planned lesson can address it.",
      },
      {
        q: "Which grades take Delaware's social studies test?",
        a: "Beginning in 2025, students take the state social studies assessment in grades 4 through 8 and once in grade 11. Social studies teachers in those grades can use CourseSmith to draft textbook-based practice tests, though it has no access to DeSSA items.",
      },
      {
        q: "Is high school science tested in Delaware?",
        a: "Yes. DeSSA science is given in grades 5 and 8 and in high school biology. Biology teachers can draft lesson plans and review tests from their course textbook, then check them against the NGSS performance expectations Delaware adopted.",
      },
    ],
    sources: [
      {
        label: "Delaware Administrative Code: 14 DE Admin. Code 501 State Content Standards",
        url: "https://regulations.delaware.gov/api/AdminCode/title14/501/5301b398-0657-4e4c-95a2-21cad6dc9e38",
      },
      {
        label: "Delaware Department of Education: Social Studies Scope and Sequence, Grade 8",
        url: "https://education.delaware.gov/wp-content/uploads/2023/11/2023-24_kacs_social_studies_scope_and_sequence-grade_8.pdf",
      },
      {
        label: "Delaware Department of Education: Social Studies Standards",
        url: "https://education.delaware.gov/educators/academic-support/standards-and-assessments/social-studies/standards/",
      },
      {
        label: "Delaware Department of Education: Social Studies Assessments",
        url: "https://education.delaware.gov/educators/academic-support/standards-and-assessments/social-studies/assessments/",
      },
      {
        label: "Delaware Department of Education: Science Assessments",
        url: "https://education.delaware.gov/educators/academic-support/standards-and-assessments/science/de-science-assessments/",
      },
      {
        label: "Delaware Department of Education: Testing Calendar",
        url: "https://education.delaware.gov/educators/academic-support/standards-and-assessments/testing_calendar/",
      },
    ],
    related: [
      "/standards/common-core",
      "/standards/ngss",
      "/use-cases/schools-and-districts",
      "/features/textbook-to-lesson-plan",
    ],
    primaryKeyword: "delaware standards lesson plans",
    secondaryKeywords: [
      "delaware content standards lesson plans",
      "delaware regulation 501 standards",
      "DeSSA lesson planning",
      "delaware social studies standards",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Delaware",
      code: "US-DE",
      framework: "Delaware Content Standards",
      adoptingBody: "Delaware State Board of Education",
      officialUrl:
        "https://education.delaware.gov/educators/academic-support/standards-and-assessments/",
    },
  },
];
