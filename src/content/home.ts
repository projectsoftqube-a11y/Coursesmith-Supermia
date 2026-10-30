import type { Faq } from "./types";

/**
 * Landing-page FAQ. Rendered by FAQSection and emitted as FAQPage schema from
 * the same array, so the two can never drift.
 */
export const HOME_FAQS: Faq[] = [
  {
    q: "What do I need to upload to get started?",
    a: "Just a textbook PDF. CourseSmith reads the file, extracts its chapters, sections and key topics, and turns them into a structured course outline you can build from. There is no setup, no template to fill in and no training required.",
  },
  {
    q: "What exactly does a generated lesson plan include?",
    a: "Each plan covers a full 45-minute class: a warm-up, direct instruction, interactive activities, homework assignments and project work.",
  },
  {
    q: "How do the quizzes and answer keys work?",
    a: "You choose how many questions you want and CourseSmith builds the quiz from your uploaded material, mixing multiple choice, short answer and long answer questions. Every quiz ships with a detailed answer key and explanations for each response.",
  },
  {
    q: "What can the 24/7 AI teaching assistant help with?",
    a: "Ask it to explain a tricky concept, brainstorm classroom activities, adapt material for a different grade level, or generate extra resources on the spot.",
  },
  {
    q: "Does it keep my whole syllabus consistent?",
    a: "Yes. CourseSmith connects chapters and topics across your entire syllabus into a live curriculum built on educational standards, so prerequisites stay in the right order and you do not end up with gaps between units.",
  },
  {
    q: "How do I get my materials out of CourseSmith?",
    a: "Export any lesson plan, quiz or assignment as a clean, print-ready document or PDF worksheet in one click, ready to hand out in class or share with your department.",
  },
];
