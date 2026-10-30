import type { ContentPage } from "./types";

export const STANDARDS_PAGES_D: ContentPage[] = [
  // ---------------------------------------------------------------- District of Columbia
  {
    slug: "district-of-columbia",
    group: "standards",
    navLabel: "DC standards",
    navBlurb: "OSSE's Common Core, NGSS and 2023 social studies standards for DC",
    metaTitle: "DC Standards Lesson Plans from Your Textbook | CourseSmith",
    metaDescription:
      "Plan DC lessons against OSSE's Common Core, NGSS and 2023 social studies standards, starting from the textbook you teach. Try CourseSmith free.",
    eyebrow: "Standards: District of Columbia",
    h1: "District of Columbia standards lesson plans built from your textbook",
    answer:
      "DC lesson plans draw on the standards OSSE publishes for every local education agency: Common Core for math and ELA, NGSS for science, and 2023 social studies standards organized into driving concepts. CourseSmith drafts plans and tests from the textbook you upload, and you paste each standard and confirm it in OSSE's documents.",
    definition:
      "The DC Standards of Learning is the set of academic standards the Office of the State Superintendent of Education (OSSE) publishes for the District of Columbia, which every DC local education agency teaching those subjects is required to use.",
    takeaways: [
      "OSSE lists the Common Core State Standards for math and English language arts and the Next Generation Science Standards for science, which the DC State Board of Education adopted in December 2013.",
      "The DC State Board of Education unanimously approved new K-12 social studies standards on June 21, 2023, and OSSE lists them as new for the 2024-25 school year.",
      "DC social studies standards are numbered by grade, such as 3.13, and grouped into driving concepts that OSSE says should frame units of study.",
      "OSSE says DC CAPE 2.0, an updated ELA and math assessment using Smarter Balanced content, launches in the 2026-27 school year.",
      "CourseSmith does not tag DC standard codes, so teachers paste the standard and confirm it in OSSE's documents.",
    ],
    sections: [
      {
        heading: "Which standards do DC schools plan against?",
        paragraphs: [
          "OSSE's DC Standards of Learning page lists one set of standards per subject and says all DC LEAs implementing those subject areas are required to use them. OSSE also notes that standards define what students should know and be able to do, not how teachers should teach.",
          "Three sets on the list are new for 2024-25: social studies, financial literacy, and social and emotional learning. OSSE developed them and the DC State Board of Education approved them.",
        ],
        table: {
          caption: "DC standards by subject, as listed by OSSE",
          columns: ["Subject", "Standards", "Note for planners"],
          rows: [
            [
              "Mathematics",
              "Common Core State Standards",
              "Linked from OSSE to the Common Core website",
            ],
            [
              "English language arts",
              "Common Core State Standards",
              "Linked from OSSE to the Common Core website",
            ],
            [
              "Science",
              "Next Generation Science Standards",
              "Adopted by the DC State Board of Education in December 2013",
            ],
            [
              "Social studies",
              "DC K-12 Social Studies Standards (2023)",
              "Approved June 21, 2023; listed as new for 2024-25",
            ],
            [
              "Financial literacy and SEL",
              "OSSE standards approved by the State Board",
              "Listed as new for 2024-25",
            ],
          ],
        },
      },
      {
        heading: "How are the 2023 DC social studies standards organized?",
        paragraphs: [
          "The standards are organized by grade level and divided into driving concepts, and OSSE tells educators to use each driving concept as the frame for a unit of study. Each standard carries a grade and a number, so 3.13 is the thirteenth grade 3 standard.",
          "Standard 3.13 reads: Identify ancestral lands of the Nacotchtank (or Anacostan), Piscataway and Pamunkey peoples on a map, and describe the political, social and cultural structures of each nation. It sits in grade 3, Geography, History, and Cultures of the District of Columbia, under the driving concept Changing Geography of Washington, DC.",
        ],
      },
      {
        heading: "What changed with DC's new social studies standards?",
        paragraphs: [
          "OSSE says the standards were developed over three years and bring some content earlier. Ancient history moves from grade 7 to grade 2, so younger students meet diverse civilizations sooner.",
          "Grade 8 is now an Action Civics course on civic engagement and democratic principles, and media literacy skills are strengthened in every grade. High school courses include District of Columbia History and Government, which runs from early settlement to contemporary Washington, DC.",
        ],
      },
      {
        heading: "Which tests measure DC's standards?",
        paragraphs: [
          "The District launched the DC Comprehensive Assessments of Progress in Education, DC CAPE, in 2024 for ELA and math. OSSE announced in October 2025 that DC CAPE 2.0 launches in the 2026-27 school year with Smarter Balanced content and a computer-adaptive design that adjusts question difficulty to student performance.",
          "Science is measured by the DC Science Assessment, which OSSE gives in grades 5 and 8 and to students enrolled in high school biology. OSSE says it focuses on sense-making and problem solving, with tasks built around scientific phenomena and engineering design challenges tied to NGSS performance expectations.",
        ],
      },
      {
        heading: "How do DC teachers use CourseSmith with OSSE's standards?",
        paragraphs: [
          "CourseSmith works as a drafting assistant for the material your LEA already uses. The standard and its code come from OSSE's documents, and you decide where each one belongs in the plan.",
        ],
        steps: [
          {
            name: "Upload the course textbook or unit packet",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, then tidy the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so drafts match how you teach in your LEA.",
          },
          {
            name: "Paste the standard and its driving concept",
            text: "Copy the full standard, such as 3.13, plus its driving concept into Co-Pilot and ask for an activity that uses the standard's verbs.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with marks per question and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in OSSE's document",
            text: "Open the official standards file from OSSE's DC Standards of Learning page, check the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label plans with DC or Common Core codes?",
        a: "No. CourseSmith does not tag or align output to DC standard codes, and it is not approved by OSSE or the DC State Board of Education. It drafts from the textbook you upload. You paste the standard you are targeting, check it in OSSE's documents and write the code into the plan yourself.",
      },
      {
        q: "Where do I find the 2023 DC social studies standards?",
        a: "OSSE's DC Standards of Learning page links the K-12 social studies standards as a PDF, along with the financial literacy and social and emotional learning standards. The document opens with statements of practice, then lists each grade and course by driving concept.",
      },
      {
        q: "My textbook is not about Washington, DC. Can I still plan grade 3 lessons?",
        a: "Yes, if you upload the local material you teach from. CourseSmith reads any PDF or DOCX, so a teacher-made packet on DC geography or history works as the source. Paste the grade 3 standard into Co-Pilot and check every local fact against your own materials.",
      },
      {
        q: "Does DC CAPE 2.0 change the standards I teach?",
        a: "OSSE describes DC CAPE 2.0 as a new assessment, not new standards, and its standards page still lists the Common Core for math and ELA. Expect changes in test design, such as computer-adaptive questions, and watch OSSE's assessment pages for details before spring testing.",
      },
    ],
    sources: [
      {
        label: "OSSE: DC Standards of Learning",
        url: "https://osse.dc.gov/service/dc-standards-learning",
      },
      {
        label: "OSSE: Washington, DC K-12 Social Studies Standards (June 2023)",
        url: "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Standards%20in%20English.pdf",
      },
      {
        label: "OSSE: OSSE Adopts New Social Studies Standards for District of Columbia Students",
        url: "https://osse.dc.gov/release/osse-adopts-new-social-studies-standards-district-columbia-students",
      },
      {
        label: "OSSE: Next Generation Science Standards (NGSS)",
        url: "https://osse.dc.gov/service/next-generation-science-standards-ngss-page",
      },
      {
        label: "OSSE: OSSE Announces New DC CAPE 2.0 Statewide Assessments",
        url: "https://osse.dc.gov/release/osse-announces-new-dc-cape-20-statewide-assessments",
      },
      {
        label: "OSSE: DC Science Assessment",
        url: "https://osse.dc.gov/science",
      },
    ],
    related: [
      "/standards/common-core",
      "/standards/ngss",
      "/use-cases/social-studies",
      "/features/textbook-to-lesson-plan",
    ],
    primaryKeyword: "district of columbia standards lesson plans",
    secondaryKeywords: [
      "dc standards lesson plans",
      "dc social studies standards lesson plans",
      "osse standards of learning",
      "dc cape lesson planning",
      "dc ngss lesson plans",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "District of Columbia",
      code: "US-DC",
      framework:
        "DC Standards of Learning (Common Core, NGSS and DC K-12 Social Studies Standards)",
      adoptingBody: "District of Columbia State Board of Education",
      officialUrl: "https://osse.dc.gov/service/dc-standards-learning",
    },
  },

  // ---------------------------------------------------------------- Hawaii
  {
    slug: "hawaii",
    group: "standards",
    navLabel: "Hawaii standards",
    navBlurb: "Revised Hawaiʻi Common Core ELA, the math revision and NGSS, explained",
    metaTitle: "Hawaii Standards Lesson Plans: HCCS and NGSS | CourseSmith",
    metaDescription:
      "Plan lessons for the revised Hawaiʻi Common Core ELA standards, the math revision and NGSS from your own textbook. Learn the codes, then start free.",
    eyebrow: "Standards: Hawaiʻi",
    h1: "Hawaiʻi standards lesson plans that start from your textbook",
    answer:
      "Hawaiʻi lesson plans follow standards approved by the Hawaiʻi State Board of Education: revised Hawaiʻi Common Core Standards for ELA, fully implemented from 2025-26, Common Core math now under revision, and NGSS for science. CourseSmith drafts plans and tests from the textbook you upload, while you paste the standard and confirm it in HIDOE's documents.",
    definition:
      "The Hawaiʻi Common Core Standards is the set of K-12 English language arts and mathematics standards for Hawaiʻi public schools, approved by the Hawaiʻi State Board of Education and revised by the Hawaiʻi State Department of Education (HIDOE).",
    takeaways: [
      "The Hawaiʻi State Board of Education adopted revised Hawaiʻi Common Core Standards for ELA on April 25, 2024, with full implementation beginning in school year 2025-26.",
      "The revised ELA standards add Reading Foundations and Writing Foundations strands and use codes such as 3.RL.3 for grade 3, Reading Literature, standard 3.",
      "In May 2026 HIDOE recommended Board approval of revised math standards, with compliance phased in from 2027-28 for elementary to 2029-30 for high school.",
      "Hawaiʻi students take the Smarter Balanced Assessment in ELA and math in grades 3-8 and 11, and the Hawaiʻi Assessments in Science in grades 5 and 8 and Biology 1.",
      "CourseSmith does not tag Hawaiʻi standard codes, so teachers paste the standard and confirm it in HIDOE's documents.",
    ],
    sections: [
      {
        heading: "Which standards does Hawaiʻi use in each subject?",
        paragraphs: [
          "HIDOE's subject matter standards page names one framework per subject and stresses that standards describe grade-level expectations, not curriculum. ELA and math both sit under the Hawaiʻi Common Core name, while several subjects use national standards.",
          "For science, the Board took up NGSS at its February 16, 2016 meeting, on a committee recommendation to adopt them and implement them fully over four years beginning in 2016-17.",
        ],
        table: {
          caption: "Hawaiʻi standards by subject, as listed by HIDOE",
          columns: ["Subject", "Standards named by HIDOE"],
          rows: [
            ["English language arts", "Hawaiʻi Common Core (revised 2024)"],
            ["Mathematics", "Hawaiʻi Common Core"],
            ["Science", "Next Generation Science Standards (NGSS)"],
            ["Social studies", "Hawaiʻi Core Standards for Social Studies (HCSSS)"],
            ["Physical education", "Hawaiʻi Content and Performance Standards III"],
            ["Health education", "National Health Education Standards"],
            ["Fine arts", "National Core Arts Standards"],
            ["Computer science", "CSTA K-12 Computer Science Standards"],
            ["World languages", "Hawaiʻi World-Readiness Standards for Learning Languages"],
          ],
        },
      },
      {
        heading: "How do you read a revised Hawaiʻi ELA standard?",
        paragraphs: [
          "A revised ELA code reads grade, strand, then standard number. In 3.RL.3, the 3 is grade 3, RL is Reading Literature and the final 3 is the standard, which asks students to describe story elements: using key details, describe characters in a story, including their traits, motivations, and feelings, and explain how their actions contribute to the sequence of events.",
          "Some standards pair an integrated speaking and listening or language standard with the main one. Grade 3's RL.3 is paired with 3.SL.4, which asks students to report on a topic or text, tell a story, or recount an experience, so a single lesson can cover both.",
        ],
        bullets: [
          "K-5 strands: Reading Foundations, Reading Informational, Reading Literature, Writing Foundations, Writing, Speaking and Listening, and Language.",
          "Grades 6-12 keep Reading Foundations and use grade bands 9/10 and 11/12 in high school.",
          "HIDOE's ELA site says there are no priority standards in ELA, so all students should be taught all standards.",
        ],
      },
      {
        heading: "Why did Hawaiʻi revise its ELA standards?",
        paragraphs: [
          "ELA was the first subject reviewed under HIDOE's Curriculum Management System, which its Office of Curriculum and Instructional Design built in 2020 for periodic standards review. A workgroup convened in fall 2022 decided the standards needed revision based on time, the science of reading, early literacy development and local knowledge.",
          "HIDOE recommended that the revised standards take effect in 2024-25 as a training year, with full implementation in 2025-26. Plans written for the original Common Core ELA standards should be checked against the revised wording.",
        ],
      },
      {
        heading: "What is changing in Hawaiʻi's math standards?",
        paragraphs: [
          "HIDOE's May 14, 2026 memo to the Board's Student Achievement Committee recommends approving revised Hawaiʻi Common Core Standards for Mathematics, called HCCS-Math. It notes that Hawaiʻi adopted the Common Core on June 18, 2010 and had not revised the math standards in 15 years.",
          "The revision adds clarifications and limitations to each standard, reorganizes high school standards by course, and creates a new Quantitative Reasoning course. Schools may keep using the original standards during training years but must use HCCS-Math in their compliance year, so check the Board's final action before you rewrite a course.",
        ],
        table: {
          caption: "HIDOE's recommended HCCS-Math timeline (May 2026 memo)",
          columns: ["Level", "Training year", "Compliance year"],
          rows: [
            ["Elementary school", "2026-27", "2027-28"],
            ["Middle school", "2027-28", "2028-29"],
            ["High school", "2027-28 and 2028-29", "2029-30"],
          ],
        },
      },
      {
        heading: "Which tests measure Hawaiʻi's standards?",
        paragraphs: [
          "The Smarter Balanced Assessment covers ELA and math in grades 3-8 and 11, and the Hawaiʻi Assessments in Science cover grades 5 and 8 plus the Biology 1 end-of-course exam. HIDOE also lists end-of-course exams in Algebra 1 and Algebra 2.",
          "Kaiapuni students take the Kaiapuni Assessment of Educational Outcomes, KĀʻEO, in Hawaiian language arts and math in grades 3-8 and science in grades 5 and 8. Students with significant cognitive disabilities take the Hawaiʻi Statewide Alternate Assessment.",
        ],
      },
      {
        heading: "How do Hawaiʻi teachers use CourseSmith with the Hawaiʻi Common Core?",
        paragraphs: [
          "CourseSmith drafts from the book or packet you teach, so it fits either the original or the revised standards. You choose the standard, and the code goes into the plan after you check it.",
        ],
        steps: [
          {
            name: "Upload your textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, grade range and teaching style, or upload a resume, so plans fit your classroom.",
          },
          {
            name: "Paste the standard and any paired standard",
            text: "Copy the full standard, such as 3.RL.3, plus an integrated standard like 3.SL.4, into Co-Pilot and ask how one activity can address both.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with an Easy, Medium and Hard mix and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in HIDOE's document",
            text: "Open the standards document linked from HIDOE's subject matter standards page, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Hawaiʻi Common Core codes?",
        a: "No. CourseSmith does not tag or align output to Hawaiʻi standard codes, and it is not approved by HIDOE or the Hawaiʻi State Board of Education. It drafts from the textbook you upload, and you verify each standard in HIDOE's documents before writing its code into the plan.",
      },
      {
        q: "Should I plan math to the original Common Core or HCCS-Math?",
        a: "Under HIDOE's recommended timeline, schools may use the original standards during training years and must switch in their compliance year, starting with elementary in 2027-28. Confirm the Board's final decision and your school's plan before rewriting units.",
      },
      {
        q: "What does an integrated standard mean in the revised ELA document?",
        a: "Some ELA standards list a speaking and listening or language standard alongside the main standard, such as 3.SL.4 next to 3.RL.3. HIDOE highlights these pairings, which signal that the two skills can be taught together in one lesson.",
      },
      {
        q: "Can Kaiapuni teachers use CourseSmith?",
        a: "CourseSmith drafts from any PDF or DOCX you upload, but it has no translation feature. If you plan in Hawaiian, upload your Hawaiian-language materials as the source and review every draft closely, since the output must match the language and content you teach.",
      },
      {
        q: "Where do I find the official Hawaiʻi standards?",
        a: "HIDOE's subject matter standards page links each subject's standards, including the revised ELA standards as K-12 and grade-level documents. Board memos with adoption dates and timelines are posted on the Hawaiʻi State Board of Education website.",
      },
    ],
    sources: [
      {
        label: "HIDOE: Subject Matter Standards",
        url: "https://hawaiipublicschools.org/academics/subject-matter-standards/",
      },
      {
        label: "HIDOE: Hawaiʻi Common Core Standards for English Language Arts",
        url: "https://sites.google.com/k12.hi.us/hawaiicomoncorestandardsforeng/home",
      },
      {
        label: "Hawaiʻi BOE: Committee Action on Updated ELA Standards (April 11, 2024)",
        url: "https://boe.hawaii.gov/Meetings/Notices/Meeting%20Material%20Library/SAC_04112024_Committee%20Action%20on%20the%20Revised%20Hawaii%20Common%20Core%20Standards%20for%20ELA.pdf",
      },
      {
        label: "Hawaiʻi BOE: Action on Updated Mathematics Standards (May 14, 2026)",
        url: "https://boe.hawaii.gov/wp-content/uploads/20260514_SAC_math.pdf",
      },
      {
        label: "Hawaiʻi BOE: Action on Adoption of NGSS (February 16, 2016)",
        url: "https://boe.hawaii.gov/Meetings/Notices/Documents/2016-02-16%20GBM/GBM_20160216_Action%20on%20NGSS.pdf",
      },
      {
        label: "HIDOE: Types of Testing",
        url: "https://hawaiipublicschools.org/academics/types-of-testing/",
      },
    ],
    related: [
      "/standards/common-core",
      "/use-cases/english-language-arts",
      "/use-cases/elementary-school",
      "/features/quiz-generator",
    ],
    primaryKeyword: "hawaii standards lesson plans",
    secondaryKeywords: [
      "hawaii common core lesson plans",
      "revised hawaii ela standards",
      "hccs math standards",
      "hawaii smarter balanced lesson planning",
      "hawaii ngss lesson plans",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Hawaii",
      code: "US-HI",
      framework: "Hawaiʻi Common Core Standards and Next Generation Science Standards",
      adoptingBody: "Hawaiʻi State Board of Education",
      officialUrl: "https://hawaiipublicschools.org/academics/subject-matter-standards/",
    },
  },

  // ---------------------------------------------------------------- Idaho
  {
    slug: "idaho",
    group: "standards",
    navLabel: "Idaho standards",
    navBlurb: "Idaho Content Standards, mastery standards and the ISAT, explained",
    metaTitle: "Idaho Content Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan Idaho lessons from your own textbook. Learn how Idaho Content Standards codes and mastery standards work, then draft plans and tests. Start free.",
    eyebrow: "Standards: Idaho Content Standards",
    h1: "Idaho Content Standards lesson plans built from your textbook",
    answer:
      "Idaho lesson plans follow the Idaho Content Standards, a statewide minimum that every district builds its own curriculum to meet. The 2022 math standards flag mastery standards for fact fluency, and the ISAT measures student progress. CourseSmith drafts plans and tests from your textbook; you paste each standard and confirm it in the official document.",
    definition:
      "The Idaho Content Standards is the set of state-adopted K-12 academic standards that set a minimum threshold for what Idaho public school students must learn, with each school district responsible for its own curriculum to meet them.",
    takeaways: [
      "Idaho's current ELA, math and science standards are the versions dated January 3, 2022, which took effect July 1, 2022 under Idaho Code 33-118B.",
      "Idaho districts can set more rigorous standards than the state's but cannot fall below the state requirements.",
      "An Idaho math code such as 3.OA.C.7.b gives the grade, domain, cluster, standard number and part.",
      "Idaho labels some math standards as mastery standards, and for single-digit facts that typically means answering within three to five seconds.",
      "The ISAT tests ELA and math in grades 3-8 and 11 and science in grades 5, 8 and 11.",
    ],
    sections: [
      {
        heading: "Who sets the Idaho Content Standards?",
        paragraphs: [
          "The Idaho Department of Education reviews and revises the standards, a task it says comes from the Idaho Legislature and the State Board of Education, and Idaho reviews each subject every six years. The state's standards are a minimum: districts can set more rigorous standards, and each district writes its own curriculum.",
          "The current math, ELA and science standards began with lawmakers. In March 2020 the Legislature directed the State Board of Education to replace the math standards, asking for fewer standards in plainer language and for explicit grade levels at which students master addition, subtraction, multiplication and division facts.",
          "Idaho Code 33-118B made the committee drafts dated January 3, 2022 effective on July 1, 2022, adopted them for five years with a review cycle ending June 30, 2027, and gave districts until June 30, 2024 to adopt curricular materials that reflect them.",
        ],
      },
      {
        heading: "How do you read an Idaho math standard code?",
        paragraphs: [
          "Each Idaho math code combines the grade, the domain, the cluster and the standard number. The standards document gives 1.G.A.1 as its example: a grade 1 Geometry standard, the first standard in cluster A.",
          "Some standards add a lettered part. Grade 3's 3.OA.C.7.b reads: Demonstrate fluency for multiplication within 100. Know from memory all products of two single-digit numbers and related division facts.",
        ],
        table: {
          caption: "Anatomy of the Idaho math code 3.OA.C.7.b",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade", "3", "Third grade"],
            ["Domain", "OA", "Operations and Algebraic Thinking"],
            ["Cluster", "C", "Third cluster in the domain"],
            ["Standard", "7", "Seventh standard in the domain"],
            ["Part", "b", "Second lettered part of the standard"],
          ],
        },
      },
      {
        heading: "What are Idaho's mastery standards?",
        paragraphs: [
          "Mastery standards are the math standards that ask students to calculate accurately, efficiently and flexibly. For standards about knowing single-digit facts from memory, the Idaho document says this typically means generating a response within three to five seconds.",
          "In grade 3 the mastery standards are 3.OA.C.7.b, multiplication facts, and 3.NBT.A.2, fluently adding and subtracting within 1,000. Plans for these standards benefit from short, frequent fluency checks rather than a single end-of-unit test.",
        ],
      },
      {
        heading: "What standards reviews are underway in Idaho?",
        paragraphs: [
          "The Department's review page posts committee rosters and draft standards for mathematics, 9-12 digital literacy and artificial intelligence, with a public comment period that closed October 6, 2026. The page says recommendations for the cycle go to the Legislature in January 2027, and review committees for science and ELA are listed for 2027/2028.",
          "Social studies has already been revised: the current K-12 document notes the standards were up for review in 2023 and shows a creation date of April 23, 2024 and a revision date of November 20, 2025. In summer 2024, educator committees also sorted the core standards into essential standards, which the Department calls a resource, not a mandate.",
        ],
      },
      {
        heading: "Which test measures the Idaho Content Standards?",
        paragraphs: [
          "The Idaho Standards Achievement Test, or ISAT, assesses students in grades 3-8 and 11 on grade-level Idaho content standards in math and ELA. The science ISAT is given only in grades 5, 8 and 11.",
          "The Department says ISAT scores reflect a student's performance in relation to Idaho's grade-level standards, so plans built on the standards and checked against the official document target the content the test reports on.",
        ],
      },
      {
        heading: "How do Idaho teachers use CourseSmith with the Idaho Content Standards?",
        paragraphs: [
          "CourseSmith drafts from the curricular materials your district adopted, which Idaho law required to reflect the 2022 standards. You choose the standard, and you confirm its code before it goes into the plan.",
        ],
        steps: [
          {
            name: "Upload the district's textbook",
            text: "Add the PDF or DOCX of your adopted materials with the book name, subject and grade, then review the chapters and topics CourseSmith builds.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, subjects, grade range and teaching style so every plan reflects how you teach.",
          },
          {
            name: "Paste the standard into Co-Pilot",
            text: "Copy the full standard, such as 3.OA.C.7.b, and tell Co-Pilot whether it is a mastery standard so activities build toward fluency.",
          },
          {
            name: "Draft the plan and a fluency check",
            text: "Generate the lesson plan, then a short test with fill in the blanks items and an answer key for a quick facts check, downloadable as Word.",
          },
          {
            name: "Confirm in the Idaho document",
            text: "Open the Idaho Content Standards PDF for your subject, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Idaho Content Standards codes?",
        a: "No. CourseSmith does not tag or align output to Idaho codes, and it is not approved by the Idaho Department of Education or the State Board of Education. It drafts from the textbook you upload, and you verify each standard in the official document before recording its code.",
      },
      {
        q: "Do I have to teach Idaho's essential standards first?",
        a: "No. The Department describes the essential standards documents as a resource, not a mandate, and says the 2024 work did not revise the adopted standards. Essential standards are the ones teachers explicitly teach, assess more than once and use for intervention.",
      },
      {
        q: "Are Idaho's math standards about to change?",
        a: "Draft math standards were posted for public comment through October 6, 2026, and the Department says the cycle's recommendations go to the Legislature in January 2027. Until a revision is adopted, plan from the 2022 standards posted on the Idaho Content Standards page.",
      },
      {
        q: "Can CourseSmith write ISAT practice tests?",
        a: "CourseSmith builds tests from your textbook chapters, but it has no access to ISAT items and makes no claim to predict them. Choose the chapters you taught, set question counts and marks, pick a difficulty mix, and compare the test with the grade-level standards.",
      },
    ],
    sources: [
      {
        label: "Idaho Department of Education: Idaho Content Standards",
        url: "https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/idaho-content-standards/",
      },
      {
        label: "Idaho Department of Education: Content Standards Review",
        url: "https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/idaho-content-standards/content-standards-review/",
      },
      {
        label: "Idaho Content Standards: Mathematics (January 3, 2022)",
        url: "https://www.sde.idaho.gov/wp-content/uploads/2025/09/Idaho-K-12-State-Standards-for-Mathematics.pdf",
      },
      {
        label: "Idaho Content Standards: K-12 Social Studies",
        url: "https://www.sde.idaho.gov/wp-content/uploads/2026/05/K-12-Social-Studies-Standards.pdf",
      },
      {
        label: "Idaho Department of Education: Idaho Standards Achievement Test (ISAT)",
        url: "https://www.sde.idaho.gov/about-us/departments/assessment-accountability/idaho-standards-achievement-test-isat/",
      },
      {
        label: "Idaho Code 33-118B, Idaho Content Standards (via FindLaw)",
        url: "https://codes.findlaw.com/id/title-33-education/id-st-sect-33-118b/",
      },
    ],
    related: [
      "/use-cases/math",
      "/features/quiz-generator",
      "/features/textbook-to-lesson-plan",
      "/use-cases/elementary-school",
    ],
    primaryKeyword: "idaho standards lesson plans",
    secondaryKeywords: [
      "idaho content standards lesson plans",
      "idaho math mastery standards",
      "idaho essential standards",
      "isat lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Idaho",
      code: "US-ID",
      framework: "Idaho Content Standards",
      adoptingBody: "Idaho State Board of Education and the Idaho Legislature",
      officialUrl:
        "https://www.sde.idaho.gov/about-us/departments/content-and-curriculum/idaho-content-standards/",
    },
  },

  // ---------------------------------------------------------------- Indiana
  {
    slug: "indiana",
    group: "standards",
    navLabel: "Indiana standards",
    navBlurb: "2023 Indiana Academic Standards, essential standards and ILEARN",
    metaTitle: "Indiana Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons for the 2023 Indiana Academic Standards from your own textbook. See how essential standards and ILEARN checkpoints work. Start free.",
    eyebrow: "Standards: Indiana Academic Standards",
    h1: "Indiana Academic Standards lesson plans grounded in your textbook",
    answer:
      "Indiana lesson plans follow the Indiana Academic Standards, which IDOE revises at least every six years and the Indiana State Board of Education adopts. The 2023 prioritized standards mark essential standards with an E, and ILEARN measures them. CourseSmith drafts plans and tests from your textbook, while you paste and verify each standard.",
    definition:
      "The Indiana Academic Standards (IAS) is the set of K-12 learning standards adopted by the Indiana State Board of Education, which Indiana schools implement and Indiana's state assessments measure.",
    takeaways: [
      "The Indiana State Board of Education approved streamlined standards in English/language arts, math, science, social studies and computer science in June 2023.",
      "The 2023 prioritized standards were written to be no more than 75 percent of the prior standards, with about a third defined as essential for mastery by the end of each grade or course.",
      "Essential standards carry gray shading and an E in Indiana's standards documents.",
      "IDOE revises the standards at least once every six years under IC 20-31-3, and its math page says schools begin implementing the 2026 math standards in 2027-28.",
      "CourseSmith does not tag Indiana standard codes, so teachers confirm each one in IDOE's documents.",
    ],
    sections: [
      {
        heading: "Who adopts the Indiana Academic Standards?",
        paragraphs: [
          "The Indiana Department of Education revises each subject's standards at least once every six years under IC 20-31-3, using educator committees and a public comment period. Once the Indiana State Board of Education formally adopts a revision, schools implement it and the state assessments measure it as appropriate.",
          "The 2023 revision came from House Enrolled Act 1251 (2022), which called on IDOE to update the standards around the key skills and traits students need after high school. The State Board approved the streamlined standards in June 2023.",
        ],
      },
      {
        heading: "What are prioritized and essential standards?",
        paragraphs: [
          "Prioritized standards are the slimmed-down 2023 set, written to represent no more than 75 percent of the earlier standards for kindergarten through grade 12. Committees then defined roughly one-third of the prioritized standards as essential for mastery by the end of each grade level or course.",
          "In IDOE's documents, essential standards are marked with gray shading and an E. A practical planning habit is to give essential standards repeated practice and more than one quick check, while the remaining prioritized standards still appear in your scope and sequence.",
        ],
      },
      {
        heading: "Why might an older Indiana code point to the wrong skill?",
        paragraphs: [
          "Indiana codes read grade, strand abbreviation and number, so 3.DA.1 is a grade 3 Data Analysis standard. When the 2023 math standards were streamlined, IDOE's correlation guides note that all standards were renumbered to avoid gaps in sequencing.",
          "That means a code copied from a plan written against the 2020 standards may now name different content. IDOE publishes correlation guides that map 2023 math standards to their 2020 counterparts, so check the guide before reusing an older plan or worksheet.",
        ],
      },
      {
        heading: "Which Indiana standards are changing next?",
        paragraphs: [
          "IDOE's standards page now lists 2026 standards for some subjects, including social studies and mathematics. Its mathematics page says schools should begin implementing the 2026 math standards starting with the 2027-28 school year.",
          "Until then, IDOE's technical report says the ILEARN checkpoints assess the 2023 standards. Keep both versions in view if you are planning a course that runs into 2027-28.",
        ],
        table: {
          caption: "Indiana standards versions named on IDOE pages, as of October 2026",
          columns: ["Subject", "Version IDOE lists", "Planning note"],
          rows: [
            ["English/language arts", "2023 IAS", "Current version"],
            [
              "Mathematics",
              "2023 IAS and 2026 standards",
              "IDOE says to begin implementing the 2026 standards in 2027-28",
            ],
            ["Social studies", "2026 standards", "Posted as grade-level and course documents"],
          ],
        },
      },
      {
        heading: "How does ILEARN measure the standards?",
        paragraphs: [
          "ILEARN for grades 3-8 math and ELA is a through-year assessment with three checkpoints, in fall, winter and spring, and one end-of-year summative test. Under the State Board's June 2023 plan, checkpoints were opt-in in 2024-25 and became the statewide model in 2025-26.",
          "Checkpoints are not part of accountability; IDOE uses them to flag students who need support before the summative, which is the only component used in the state's accountability model. IDOE's technical report says the checkpoints assess the 2023 IAS.",
        ],
      },
      {
        heading: "How do Indiana teachers use CourseSmith with the Indiana Academic Standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook your school adopted. You bring the standard, mark whether it is essential, and confirm its code before the plan is final.",
        ],
        steps: [
          {
            name: "Upload your adopted textbook",
            text: "Add the PDF or DOCX with the book name, subject and grade, then rename, add or delete chapters and topics to match your pacing guide.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans fit your Indiana classroom.",
          },
          {
            name: "Paste the standard and note if it is essential",
            text: "Copy the 2023 standard's full wording into Co-Pilot, say whether it carries an E, and ask for practice that builds toward mastery.",
          },
          {
            name: "Draft the plan and a checkpoint-style quiz",
            text: "Generate the lesson plan, then a short test with marks per question, a difficulty mix and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in IDOE's document",
            text: "Open the 2023 standards or correlation guide on IDOE's site, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith label plans with Indiana Academic Standards codes?",
        a: "No. CourseSmith does not tag or align output to Indiana codes, and it is not approved by IDOE or the Indiana State Board of Education. It drafts from the textbook you upload. You paste the standard, verify it in IDOE's documents and write the code into the plan yourself.",
      },
      {
        q: "Should my plans cover only the essential standards?",
        a: "No. Essential standards are the roughly one-third of prioritized standards that committees defined as essential for mastery by the end of the grade or course. The other prioritized standards remain part of the grade's standards, so use the E mark to decide where to spend extra practice and checks.",
      },
      {
        q: "Can CourseSmith write ILEARN checkpoint practice?",
        a: "CourseSmith can build short tests from your textbook chapters, but it has no access to ILEARN items and makes no claim to predict them. Set a small question count, choose a difficulty mix and compare the questions with the standards your checkpoint covers.",
      },
      {
        q: "My old plans use 2020 codes. Can I keep them?",
        a: "Check them first. IDOE renumbered the standards in 2023, so the same code can now point to different content. Use IDOE's correlation guide for your grade to find the 2023 standard that matches each old code before reusing a plan.",
      },
      {
        q: "When do the 2026 Indiana math standards start?",
        a: "IDOE's mathematics page says schools should begin implementing the 2026 math standards starting with the 2027-28 school year. Until then, IDOE's technical report says ILEARN checkpoints assess the 2023 standards, so plan current courses against the 2023 version.",
      },
    ],
    sources: [
      {
        label: "IDOE: Indiana Academic Standards",
        url: "https://www.in.gov/doe/students/indiana-academic-standards/",
      },
      {
        label: "IDOE: Mathematics standards",
        url: "https://www.in.gov/doe/students/indiana-academic-standards/mathematics/",
      },
      {
        label: "Indiana SBOE: Indiana's Future-Focused Academic Standards (June 7, 2023)",
        url: "https://www.in.gov/sboe/files/6.7.2023-SBOE-slides_Standards-update_FINAL.pdf",
      },
      {
        label: "IDOE: 2023 IAS Correlation Guide, Mathematics Grade 3",
        url: "https://www.in.gov/doe/files/2023-IAS-Correlation-Guide_-Mathematics-Grade-3-.pdf",
      },
      {
        label: "IDOE: ILEARN",
        url: "https://www.in.gov/doe/students/assessment/ilearn",
      },
      {
        label: "IDOE: Annual Technical Report, ILEARN Checkpoint Assessments 2024-2025",
        url: "https://www.in.gov/doe/students/assessment/assessment-files/Checkpoint_Technical%20Report_SP24-25.pdf",
      },
    ],
    related: [
      "/features/curriculum-planner",
      "/features/quiz-generator",
      "/use-cases/middle-school",
      "/standards/ohio",
    ],
    primaryKeyword: "indiana standards lesson plans",
    secondaryKeywords: [
      "indiana academic standards lesson plans",
      "indiana essential standards",
      "2023 indiana academic standards",
      "ilearn checkpoint lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Indiana",
      code: "US-IN",
      framework: "Indiana Academic Standards (IAS)",
      adoptingBody: "Indiana State Board of Education",
      officialUrl: "https://www.in.gov/doe/students/indiana-academic-standards/",
    },
  },

  // ---------------------------------------------------------------- Iowa
  {
    slug: "iowa",
    group: "standards",
    navLabel: "Iowa standards",
    navBlurb: "Iowa Academic Standards: IA codes, revision dates and the state test",
    metaTitle: "Iowa Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons for the Iowa Academic Standards from your own textbook. Learn how IA codes, rigor labels and revision dates work, then start free.",
    eyebrow: "Standards: Iowa Academic Standards",
    h1: "Iowa Academic Standards lesson plans that start from your textbook",
    answer:
      "Iowa lesson plans follow the Iowa Academic Standards, which the Iowa State Board of Education adopts on a published cycle: math in April 2024, ELA in June 2024, science in May 2025 and social studies in January 2026. CourseSmith drafts plans and tests from your textbook; you paste each standard and confirm it in the Department's documents.",
    definition:
      "The Iowa Academic Standards is the set of statewide K-12 standards adopted by the Iowa State Board of Education that all Iowa students are required to learn, setting common expectations for school districts across the state.",
    takeaways: [
      "The Iowa State Board of Education adopted the current math standards on April 29, 2024 and the current ELA and literacy standards on June 20, 2024.",
      "Iowa math codes such as 1.OA.A.1 give the grade, domain, cluster and standard number, and standards unique to Iowa carry IA in the code.",
      "New Iowa Academic Standards for Social Studies were adopted on January 15, 2026, with 2026-27 listed as the implementation year.",
      "Iowa administered a new state summative assessment, developed by Iowa Testing Programs at the University of Iowa, in spring 2026.",
      "CourseSmith does not tag Iowa standard codes, so teachers check each one in the Iowa Department of Education's documents.",
    ],
    sections: [
      {
        heading: "When were Iowa's standards last revised, and when is the next round?",
        paragraphs: [
          "The Iowa Department of Education publishes a revision and implementation timeline so districts can line up curriculum adoption with standards changes. All Iowa students are required to learn the Iowa Academic Standards, and the timeline shows when each subject was last adopted and when the next adoption is expected.",
          "For planners, the most recent implementation year is the date that matters: it is when the newer standards were required in classrooms.",
        ],
        table: {
          caption: "Iowa Standards Revision and Implementation Timeline (selected subjects)",
          columns: ["Subject", "Last adopted", "Required from", "Next adoption"],
          rows: [
            ["Mathematics", "April 2024", "2024-25", "January 2030"],
            ["English/language arts", "June 2024", "2024-25", "June 2029"],
            ["Science", "May 2025", "2025-26", "June 2031"],
            ["Social studies", "January 2026", "2026-27", "June 2032"],
            ["Fine arts", "January 2026", "2026-27", "To be determined"],
          ],
        },
      },
      {
        heading: "How do you read an Iowa math standard?",
        paragraphs: [
          "Iowa's taxonomy codes read grade, domain, cluster and standard number, so 1.OA.A.1 is first grade, Operations and Algebraic Thinking, cluster A, standard 1. Standards unique to Iowa add IA to the code, as in K.CC.IA.A.1: Count backwards by ones from 20 to 0.",
          "Each standard also lists its aspect of rigor, such as conceptual understanding or procedural fluency, and the bundle of mathematical practices to emphasize. Clusters are color-coded as Major, Supporting or Additional, which signals where most instructional time may be needed.",
        ],
        table: {
          caption: "Anatomy of the Iowa-specific code K.CC.IA.A.1",
          columns: ["Part", "Value", "Meaning"],
          rows: [
            ["Grade", "K", "Kindergarten"],
            ["Domain", "CC", "Counting and Cardinality"],
            ["Iowa marker", "IA", "A standard unique to Iowa"],
            ["Cluster", "A", "Know number names and the count sequence backward"],
            ["Standard", "1", "First standard in the cluster"],
          ],
        },
      },
      {
        heading: "How are Iowa's high school math standards organized?",
        paragraphs: [
          "The 2024 math document lists required high school standards by course, Algebra 1, Geometry and Algebra 2, followed by elective standards for Statistics and Probability, Precalculus and Calculus. Course codes lead the taxonomy: A1.N-RN means Algebra 1, the Number conceptual category, the Real Number System domain.",
          "Because standards are grouped by course, a high school teacher can find a course's full set in one place and plan units straight from that list. When a standard includes an italicized for example, Iowa notes that it is an illustration and not part of the standard.",
        ],
      },
      {
        heading: "Which test measures the Iowa Academic Standards?",
        paragraphs: [
          "The Iowa Statewide Assessment of Student Progress, ISASP, is the summative accountability assessment for all Iowa students. It covers English language arts, including reading and writing, and mathematics in grades 3-11, and science in grades 5, 8 and 11.",
          "The Department says Iowa administered a new state summative assessment in spring 2026, developed by Iowa Testing Programs at the University of Iowa and aligned to the ELA and math standards the State Board adopted in 2024.",
        ],
      },
      {
        heading: "How do Iowa teachers use CourseSmith with the Iowa Academic Standards?",
        paragraphs: [
          "CourseSmith drafts from the instructional materials you already use. You supply the standard, including any IA code, and confirm it before the plan is final.",
        ],
        steps: [
          {
            name: "Upload the textbook you teach from",
            text: "Add the PDF or DOCX, up to 40 MB, with the book name, subject and grade, and adjust the chapters and topics to match your course.",
          },
          {
            name: "Set your teaching persona",
            text: "Fill in your school, subjects, grade range and teaching style, or upload a resume, so plans reflect your classroom.",
          },
          {
            name: "Paste the standard with its rigor label",
            text: "Copy the full standard, its cluster and its aspect of rigor into Co-Pilot, and ask for an activity that matches, such as conceptual work with visual models.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan for the matching topic, then a short test with question types and marks you choose and an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in the Iowa document",
            text: "Open the Iowa Academic Standards document for your subject, confirm the code and wording, and add it to your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Iowa Academic Standards codes?",
        a: "No. CourseSmith does not tag or align output to Iowa codes, and it is not approved by the Iowa Department of Education or the State Board of Education. It drafts from the textbook you upload, and you check each standard in the Department's documents before recording its code.",
      },
      {
        q: "What does IA mean in an Iowa math code?",
        a: "IA marks a standard unique to Iowa rather than one shared with other states' standards. For example, K.CC.IA.A.1 asks kindergartners to count backwards by ones from 20 to 0. Treat IA standards like any other required standard when you plan.",
      },
      {
        q: "When do I teach the new Iowa social studies standards?",
        a: "The State Board adopted them on January 15, 2026, and the Department's timeline lists 2026-27 as the implementation year. The standards are posted as a PDF and a spreadsheet on the Department's social studies page.",
      },
      {
        q: "Can CourseSmith label questions as conceptual or procedural?",
        a: "Not automatically. CourseSmith sets an Easy, Medium and Hard mix and question types such as short answer, not Iowa's rigor labels. Paste the standard and its aspect of rigor into Co-Pilot, ask for matching questions, and check the test against the standard.",
      },
    ],
    sources: [
      {
        label: "Iowa Department of Education: Iowa Standards Revision and Implementation Timeline",
        url: "https://educate.iowa.gov/media/12744/download?inline=",
      },
      {
        label: "Iowa Department of Education: Iowa Academic Standards for Mathematics (April 2024)",
        url: "https://educate.iowa.gov/media/9845/download?inline",
      },
      {
        label: "Iowa Department of Education: Mathematics Standards",
        url: "https://educate.iowa.gov/pk-12/standards/academics/mathematics",
      },
      {
        label: "Iowa Department of Education: Literacy Standards",
        url: "https://educate.iowa.gov/pk-12/standards/academics/literacy",
      },
      {
        label: "Iowa Department of Education: Social Studies Standards",
        url: "https://educate.iowa.gov/pk-12/standards/academics/social-studies",
      },
      {
        label: "Iowa Department of Education: Student Assessment",
        url: "https://educate.iowa.gov/pk-12/standards/assessment",
      },
    ],
    related: [
      "/use-cases/math",
      "/use-cases/high-school",
      "/features/textbook-to-lesson-plan",
      "/standards/illinois",
    ],
    primaryKeyword: "iowa standards lesson plans",
    secondaryKeywords: [
      "iowa academic standards lesson plans",
      "iowa math standards 2024",
      "iowa social studies standards 2026",
      "isasp lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Iowa",
      code: "US-IA",
      framework: "Iowa Academic Standards",
      adoptingBody: "Iowa State Board of Education",
      officialUrl: "https://educate.iowa.gov/pk-12/standards",
    },
  },

  // ---------------------------------------------------------------- Kansas
  {
    slug: "kansas",
    group: "standards",
    navLabel: "Kansas standards",
    navBlurb: "Kansas ELA, math and science standards and KAP, for lesson planners",
    metaTitle: "Kansas Standards Lesson Plans for Teachers | CourseSmith",
    metaDescription:
      "Plan Kansas lessons from your own textbook. See how KSDE's 2023 ELA standards and dual-tagged math codes work, then draft plans and tests free.",
    eyebrow: "Standards: Kansas",
    h1: "Kansas standards lesson plans built from your textbook",
    answer:
      "Kansas lesson plans follow standards published by the Kansas State Department of Education, including the 2023 ELA standards built around structured literacy, math standards adopted in 2017 and reviewed in 2024, and NGSS for science. CourseSmith drafts plans and tests from your textbook; you paste each standard and verify it in KSDE's documents.",
    definition:
      "The Kansas standards is the set of K-12 academic standards published by the Kansas State Department of Education (KSDE), such as the Kansas Standards for English Language Arts and Mathematics, that describe what students should know and be able to do at each grade.",
    takeaways: [
      "KSDE's 2023 English Language Arts Standards were reviewed to support each district's use of structured literacy as the explicit, evidence-based approach to teaching literacy.",
      "The Kansas Standards for Mathematics were adopted in 2017 and reviewed in 2024, and each standard shows its 2010 tag in brackets.",
      "Kansas science standards are the Next Generation Science Standards, first adopted in 2013, last reviewed in 2025, with the next review scheduled for 2032.",
      "The Kansas Assessment Program tests ELA and math in grades 3-8 and 10 and science in grades 5, 8 and 11.",
      "CourseSmith does not tag Kansas standard codes, so teachers confirm each code in KSDE's documents.",
    ],
    sections: [
      {
        heading: "Which standards do Kansas teachers plan against?",
        paragraphs: [
          "KSDE's standards page links one set of standards per subject, from ELA and math to history, government and social studies, and social-emotional character development. Districts build curriculum from these standards; the math document states that the standards do not dictate curriculum or teaching methods.",
        ],
        table: {
          caption: "Kansas standards documents, as posted by KSDE",
          columns: ["Subject", "Standards", "Status shown by KSDE"],
          rows: [
            [
              "English language arts",
              "2023 Kansas English Language Arts Standards",
              "Document updated February 2025",
            ],
            ["Mathematics", "Kansas Standards for Mathematics", "Adopted 2017, reviewed 2024"],
            [
              "Science",
              "Kansas Science Standards (NGSS)",
              "First adopted 2013, reviewed 2025, next review 2032",
            ],
            [
              "History, government and social studies",
              "Kansas Standards for History, Government, and Social Studies",
              "Standards, benchmarks and appendices posted",
            ],
            [
              "English learners",
              "Kansas English Language Proficiency (KELP) Standards",
              "Adopted by the Kansas Board of Education in 2018",
            ],
          ],
        },
      },
      {
        heading: "How do you read a Kansas math standard and its two tags?",
        paragraphs: [
          "Each Kansas math standard shows its 2017 code first and its 2010 code in brackets. Grade 3's 3.NBT.1 reads: Use place value understanding to round whole numbers to the nearest 10 or 100. [3.NBT.1] Here both tags match, but for some standards they differ.",
          "KSDE added the 2010 tag so teachers can find older resources filed under the earlier code. Standards created in 2017 show (2017) in place of a 2010 tag, which tells you older materials will not cover them.",
        ],
      },
      {
        heading: "What do the 2023 ELA standards mean for reading lessons?",
        paragraphs: [
          "KSDE says the 2023 ELA standards were reviewed to support each district's use of structured literacy, the explicit and evidence-based approach to teaching literacy skills. Elementary grades are organized into Reading: Foundational, Reading: Literature, Reading: Informational, Writing, and Speaking and Listening.",
          "Foundational codes read strand, grade, standard and part. RF.3.3.c reads: Decode multisyllabic words (e.g., six syllable types, compound words, inflectional endings, etc.). The document marks RF.3.1 and RF.3.2 as not applicable for third grade, so grade 3 foundational lessons start with phonics and word analysis in RF.3.3 and fluency in RF.3.4.",
        ],
        bullets: [
          "Write, speak, read and listen appropriately in all disciplines.",
          "Seek out and work to understand diverse perspectives.",
          "Use knowledge gained from literacy experiences to solve problems.",
          "Create multimodal versions of texts for a range of purposes and audiences.",
          "Self-regulate and monitor growth in writing, speaking, reading and listening.",
        ],
      },
      {
        heading: "Which tests measure the Kansas standards?",
        paragraphs: [
          "The Kansas Assessment Program, KAP, gives annual state assessments in ELA and math to students in grades 3-8 and grade 10. Students in grades 5, 8 and 11 take the annual science assessment.",
          "KSDE posts a yearly Kansas Assessments Overview, including one for 2026-27, so check it for testing windows when you set a unit calendar.",
        ],
      },
      {
        heading: "How do Kansas teachers use CourseSmith with the Kansas standards?",
        paragraphs: [
          "CourseSmith drafts from the textbook or reading program materials you upload. You choose the standard, and you confirm its code and wording in KSDE's document.",
        ],
        steps: [
          {
            name: "Upload your textbook or program materials",
            text: "Add the PDF or DOCX with the book name, subject and grade, and review the chapters and topics CourseSmith creates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans match your classroom routines.",
          },
          {
            name: "Paste the standard into Co-Pilot",
            text: "Copy the full standard, such as RF.3.3.c, and ask for explicit, step-by-step practice that matches its wording.",
          },
          {
            name: "Draft the plan and a quick check",
            text: "Generate the lesson plan with your class length and delivery methods, then a short test with an answer key, downloadable as Word.",
          },
          {
            name: "Confirm in KSDE's document",
            text: "Open the Kansas standards document for your subject, confirm the 2017 code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Kansas standard codes?",
        a: "No. CourseSmith does not tag or align output to Kansas codes, and it is not approved by KSDE or the Kansas State Board of Education. It drafts from the textbook you upload, and you verify each standard in KSDE's documents before writing its code into the plan.",
      },
      {
        q: "What is the bracketed code after a Kansas math standard?",
        a: "It is the standard's 2010 tag. KSDE kept both tags so teachers can find resources filed under the older code. When the 2017 and 2010 tags differ, record the 2017 code in your plan, and use the bracketed tag only to search for older materials.",
      },
      {
        q: "Do I have to teach math topics in the order the standards list them?",
        a: "No. The Kansas math document says that a topic appearing before another in a grade's standards does not mean it must be taught first. Sequence units to fit your textbook and students, then check that the year covers every standard.",
      },
      {
        q: "Can CourseSmith help with structured literacy lessons?",
        a: "CourseSmith drafts from whatever you upload, so add the decodable texts or phonics program pages your school uses. Paste the foundational standard into Co-Pilot, ask for explicit practice, and review every draft against your program's sequence.",
      },
    ],
    sources: [
      {
        label: "KSDE: Standards",
        url: "https://www.ksde.gov/student-success/standards",
      },
      {
        label: "KSDE: Kansas Standards for English Language Arts",
        url: "https://www.ksde.gov/docs/default-source/csas/ela-standards-horizontal-document.pdf?sfvrsn=8ae00a73_11",
      },
      {
        label: "KSDE: Kansas Standards for Mathematics, Grades K-12",
        url: "https://www.ksde.gov/docs/default-source/csas/kansasmathematicsstandardsgradesk-12-2025.pdf?Status=Master&sfvrsn=ab73a196_6",
      },
      {
        label: "KSDE: Science Standards",
        url: "https://www.ksde.gov/student-success/resources-by-subject-area/science/science-standards",
      },
      {
        label: "KSDE: Kansas Assessment Program",
        url: "https://www.ksde.gov/student-success/assessments/kansas-assessment-program",
      },
    ],
    related: [
      "/use-cases/english-language-arts",
      "/use-cases/elementary-school",
      "/standards/ngss",
      "/features/quiz-generator",
    ],
    primaryKeyword: "kansas standards lesson plans",
    secondaryKeywords: [
      "kansas ela standards lesson plans",
      "kansas math standards",
      "kansas structured literacy lesson plans",
      "kap lesson planning",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Kansas",
      code: "US-KS",
      framework:
        "Kansas Standards (English Language Arts, Mathematics, Science and other subjects)",
      adoptingBody: "Kansas State Board of Education",
      officialUrl: "https://www.ksde.gov/student-success/standards",
    },
  },

  // ---------------------------------------------------------------- Kentucky
  {
    slug: "kentucky",
    group: "standards",
    navLabel: "Kentucky KAS",
    navBlurb: "Kentucky Academic Standards, the 2026 reading revision and the KSA",
    metaTitle: "Kentucky Academic Standards Lesson Plans | CourseSmith",
    metaDescription:
      "Plan lessons for the Kentucky Academic Standards from your own textbook, including the revised reading and writing KAS for 2026-27. Start free.",
    eyebrow: "Standards: Kentucky Academic Standards",
    h1: "Kentucky Academic Standards lesson plans grounded in your textbook",
    answer:
      "Kentucky lesson plans follow the Kentucky Academic Standards (KAS), which state law requires the Department of Education to review every six years. Revised KAS for Reading and Writing take effect in 2026-27, and math revisions went to lawmakers in October 2026. CourseSmith drafts plans and tests from your textbook; you paste and verify each standard.",
    definition:
      "The Kentucky Academic Standards (KAS) is the set of K-12 academic standards that the Kentucky Board of Education considers for approval under KRS 158.6453 and the Kentucky Department of Education disseminates to schools.",
    takeaways: [
      "KRS 158.6453 requires the Kentucky Department of Education to review the academic standards every six years, using review committees of Kentucky teachers and higher education representatives.",
      "Revised Kentucky Academic Standards for Reading and Writing were adopted into law in May 2026 and take effect for classroom instruction in the 2026-27 school year.",
      "Proposed revisions to the KAS for Mathematics, presented to the Interim Joint Committee on Education on October 6, 2026, add Foundational, Delta, Plus and Plus Plus codes to high school standards.",
      "House Bill 257 (2026) removes state-level on-demand writing and editing and mechanics assessments starting in 2026-27.",
      "CourseSmith does not tag KAS codes, so Kentucky teachers confirm each standard on KYstandards.org or in KDE's documents.",
    ],
    sections: [
      {
        heading: "How does Kentucky review its academic standards?",
        paragraphs: [
          "KRS 158.6453 requires the Kentucky Department of Education to run a review of the standards every six years. Four review committees cover reading and writing, mathematics, science and social studies, each with at least six Kentucky public school teachers and two higher education representatives who have no ties to curriculum or assessment vendors.",
          "Three advisory panels support each committee, split by grade band. The Kentucky Board of Education then considers the revisions, existing standards stay in place until it approves new ones, and revisions must be implemented no later than the second academic year after the review.",
        ],
        bullets: [
          "Focus on critical knowledge, skills and capacities needed for success in the global economy.",
          "Result in fewer but more in-depth standards to facilitate mastery learning.",
          "Communicate expectations more clearly and concisely to teachers, parents, students and citizens.",
        ],
      },
      {
        heading: "What changed in the KAS for Reading and Writing?",
        paragraphs: [
          "KDE began revising the reading and writing standards in 2024 with input from Kentucky educators, community members and the public, followed by Kentucky Board of Education review and final legislative review. KDE announced in May 2026 that the revised standards were adopted into law, and they are effective for classroom instruction in the 2026-27 school year.",
          "KDE points teachers to its Getting to Know the KAS for Reading and Writing professional learning for the instructional shifts, and it revised its high-quality instructional resource supports in May 2026 to match. If your plans predate 2026-27, compare each cited standard with the 2025 revised document.",
        ],
      },
      {
        heading: "What is changing in the KAS for Mathematics?",
        paragraphs: [
          "KDE's math review ran from August 2025 to October 2026, when recommendations and public feedback went to the Interim Joint Committee on Education. In the first public comment round, respondents approved 97 to 99 percent of standards as-is depending on grade band, so the revision is targeted rather than a rewrite.",
          "KDE's summary of content changes includes 4.OA.3, which now focuses on representing and solving multistep word problems and interpreting results, with order of operations removed, and a new 6.RP.3c that formally introduces percents in grade 6. Until a revision is in effect, plan from the current KAS for Mathematics.",
        ],
        table: {
          caption: "KAS for Mathematics review timeline, as presented by KDE",
          columns: ["Date", "Step"],
          rows: [
            ["August 2025", "Call for standards committee participation opened"],
            ["August-October 2025", "Current standards opened for initial public comment"],
            ["November 2025", "Advisory panels and review committee met on feedback"],
            [
              "January-February 2026",
              "Recommended changes and assessment blueprint released for 30-day comment",
            ],
            ["April and June 2026", "Panels and committee finalized recommendations"],
            [
              "October 6, 2026",
              "Recommendations presented to the Interim Joint Committee on Education",
            ],
          ],
        },
      },
      {
        heading: "How do the proposed high school math codes work?",
        paragraphs: [
          "The draft adds a pathways coding framework that shows how each high school standard contributes to graduation requirements, personalized coursework, postsecondary readiness and advanced study. It also adds coherence statements to the foundational standards to ease the move from grades 6-8.",
        ],
        bullets: [
          "Foundational: required content for the first and second math credits, Algebra I and Geometry or their equivalents.",
          "Delta: recommended content for third and fourth personalized math credits.",
          "Plus (+): recommended content for advanced geometry courses.",
          "Plus Plus (++): standards for calculus and beyond.",
          "Modeling: standards well suited to application and modeling.",
        ],
      },
      {
        heading: "Which tests measure the Kentucky Academic Standards?",
        paragraphs: [
          "The Kentucky Summative Assessment, KSA, covers reading, mathematics, science, social studies and writing at designated grades from grade 3 through high school. KDE has listed writing as on-demand writing plus editing and mechanics.",
          "House Bill 257 (2026) eliminates the state-level on-demand writing and editing and mechanics assessments starting in 2026-27. Superintendents must instead adopt and publish district-wide writing policies that cover writing across all subjects, and KDE has issued Writing Program Guidelines for the transition.",
        ],
      },
      {
        heading: "How do Kentucky teachers use CourseSmith with the KAS?",
        paragraphs: [
          "CourseSmith drafts from the textbook or high-quality instructional resource your school uses. The standard comes from KDE's documents, and you confirm it before the plan is final.",
        ],
        steps: [
          {
            name: "Upload your instructional resource",
            text: "Add the textbook or unit as a PDF or DOCX with the book name, subject and grade, and adjust the chapters and topics CourseSmith generates.",
          },
          {
            name: "Set your teaching persona",
            text: "Upload a resume or enter your school, grade range and teaching style so plans match your Kentucky classroom.",
          },
          {
            name: "Paste the 2026-27 standard",
            text: "Copy the full revised reading and writing standard, or the current math standard, into Co-Pilot and ask for an activity that uses its exact verbs.",
          },
          {
            name: "Draft the plan and a writing task",
            text: "Generate the lesson plan, then a short test or an assignment with a marking guide to support your district's writing program, downloadable as Word.",
          },
          {
            name: "Confirm on KYstandards.org",
            text: "Open the KAS document for your subject on KYstandards.org or KDE's site, confirm the code and wording, and record it in your plan.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does CourseSmith tag plans with Kentucky Academic Standards codes?",
        a: "No. CourseSmith does not tag or align output to KAS codes, and it is not approved by KDE or the Kentucky Board of Education. It drafts from the textbook you upload. You paste the standard, verify it on KYstandards.org or in KDE's documents and write the code into the plan yourself.",
      },
      {
        q: "Which reading and writing standards do I use in 2026-27?",
        a: "Use the revised Kentucky Academic Standards for Reading and Writing, which KDE says are effective for classroom instruction in the 2026-27 school year. The standards document and an implementation guide are linked from KYstandards.org.",
      },
      {
        q: "Are the Kentucky math standards changing this year?",
        a: "Proposed revisions were presented to lawmakers in October 2026, but state law keeps the existing standards in place until the Kentucky Board of Education approves new ones. Plan from the current KAS for Mathematics and watch KDE for an approval and implementation date.",
      },
      {
        q: "Should I still plan writing now that on-demand writing left the state test?",
        a: "Yes. House Bill 257 moved writing to district-wide writing policies that cover all subjects rather than removing it. CourseSmith's assignment generator can draft writing tasks with a marking guide from your textbook, which you adapt to your district's policy.",
      },
    ],
    sources: [
      {
        label: "Kentucky Legislature: KRS 158.6453, Review of academic standards and assessments",
        url: "https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=57837",
      },
      {
        label: "KDE (KYstandards.org): Revised KAS for Reading and Writing adopted into law",
        url: "https://kystandards.org/revised-kentucky-academic-standards-kas-for-reading-and-writing-adopted-into-law/",
      },
      {
        label:
          "KDE: Kentucky Academic Standards for Mathematics, presentation to the Interim Joint Committee on Education (October 6, 2026)",
        url: "https://apps.legislature.ky.gov/CommitteeDocuments/28/44361/5.%20a.%20%20Kentucky%20Academic%20Standards%20for%20Mathematics-%20Presentation.pdf",
      },
      {
        label: "KDE: Kentucky Academic Standards for Mathematics at a Glance",
        url: "https://apps.legislature.ky.gov/CommitteeDocuments/28/44361/5.%20b.%20%20Kentucky%20Academic%20Standards%20for%20Mathematics-%20At%20a%20Glance.pdf",
      },
      {
        label: "KDE: Standards Newsletter, July 9, 2026",
        url: "https://content.govdelivery.com/accounts/KYDE/bulletins/41f9131",
      },
      {
        label: "KDE: Kentucky Summative Assessment",
        url: "https://www.education.ky.gov/AA/Assessments/Pages/KentuckySummativeAssessment-.aspx",
      },
    ],
    related: [
      "/features/ai-assignment-generator",
      "/features/curriculum-planner",
      "/use-cases/math",
      "/use-cases/high-school",
    ],
    primaryKeyword: "kentucky standards lesson plans",
    secondaryKeywords: [
      "kentucky academic standards lesson plans",
      "kas reading and writing 2026",
      "kentucky math standards revision",
      "kentucky summative assessment lesson planning",
      "kystandards.org",
    ],
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    region: {
      name: "Kentucky",
      code: "US-KY",
      framework: "Kentucky Academic Standards (KAS)",
      adoptingBody: "Kentucky Board of Education",
      officialUrl: "https://kystandards.org/",
    },
  },
];
