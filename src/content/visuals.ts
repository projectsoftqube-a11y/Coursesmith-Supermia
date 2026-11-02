import type { ContentSection } from "./types";

/** Photography for inner pages. Every file is a 1536×1024 WebP in /public/images. */
export type Visual = { src: string; alt: string };

type Photo = Visual & { key: string; tags: string[] };

const photo = (key: string, alt: string, tags: string[]): Photo => ({
  key,
  src: `/images/${key}.webp`,
  alt,
  tags,
});

/** Tags are page slugs or groups; the closest matches are used first on a page. */
const PHOTOS: Photo[] = [
  photo("textbook-and-laptop", "Teacher planning at a desk with a tabbed textbook and a laptop", [
    "features",
    "textbook-to-lesson-plan",
    "khanmigo-alternative",
  ]),
  photo("written-plan-by-hand", "Teacher writing a lesson plan by hand beside an open textbook", [
    "resources",
    "how-to-write-a-lesson-plan",
    "ai-assignment-generator",
  ]),
  photo("blank-plan-flatlay", "Printed lesson plan grid on a desk with a pen, timer and notes", [
    "resources",
    "lesson-plan-template",
  ]),
  photo(
    "term-wall-planner",
    "Teacher studying a weekly planner board of color-coded sticky notes",
    ["curriculum-planner", "eduaide-alternative", "schools-and-districts"],
  ),
  photo("teacher-reviewing-draft", "Teacher reviewing a printed lesson draft with a pen in hand", [
    "resources",
    "can-ai-write-lesson-plans",
    "chatgpt-for-lesson-planning",
  ]),
  photo("comparing-two-plans", "Teacher comparing two printed lesson plans side by side", [
    "compare",
    "magicschool-alternative",
  ]),
  photo("desk-review-laptop", "Teacher reviewing two printed plans at a desk beside a laptop", [
    "compare",
    "brisk-alternative",
    "ai-teaching-assistant",
  ]),
  photo("evening-laptop-sofa", "Teacher working on a laptop on a sofa at home in the evening", [
    "ai-teaching-assistant",
    "chatgpt-for-lesson-planning",
    "contact",
  ]),
  photo("whiteboard-brainstorm", "Teacher sketching a mind map on a classroom whiteboard", [
    "brisk-alternative",
    "ai-assignment-generator",
  ]),
  photo("library-reading-guide", "Teacher reading a printed guide among library bookshelves", [
    "resources",
    "faq",
  ]),
  photo("test-papers-handout", "Teacher handing printed test papers to high school students", [
    "quiz-generator",
    "how-to-make-a-quiz-from-a-pdf",
    "high-school",
  ]),
  photo("marking-answer-key", "Teacher marking printed tests with a red pen at a sunlit desk", [
    "quiz-generator",
    "how-to-make-a-quiz-from-a-pdf",
  ]),
  photo("student-project-table", "Teacher helping students build a cardboard classroom project", [
    "ai-assignment-generator",
    "middle-school",
  ]),
  photo("exit-ticket-door", "Teacher collecting exit slips from students at the classroom door", [
    "lesson-plan-template",
    "how-to-write-a-lesson-plan",
  ]),
  photo("math-chalkboard", "Math teacher drawing geometric shapes on a green chalkboard", ["math"]),
  photo("math-one-to-one", "Teacher helping a student work through a problem at a desk", [
    "math",
    "high-school",
  ]),
  photo("science-lab", "Science teacher guiding students through a beaker experiment", ["science"]),
  photo("ela-discussion", "Teacher leading a book discussion with students seated in a circle", [
    "english-language-arts",
  ]),
  photo("history-map", "Teacher pointing to a large world map in a social studies class", [
    "social-studies",
  ]),
  photo("elementary-rug", "Teacher reading a picture book to young children on a classroom rug", [
    "elementary-school",
  ]),
  photo("elementary-small-group", "Teacher helping children with a plant life cycle craft", [
    "elementary-school",
    "science",
  ]),
  photo("middle-school-groups", "Teacher moving between middle school students working in groups", [
    "middle-school",
  ]),
  photo("high-school-seminar", "Teacher leading a seminar with high school students at a table", [
    "high-school",
    "english-language-arts",
    "social-studies",
  ]),
  photo("high-school-library-study", "High school students studying together at a library table", [
    "high-school",
  ]),
  photo("homeschool-kitchen", "Parent teaching two children at a sunny table at home", [
    "homeschool",
  ]),
  photo("department-meeting", "Group of teachers meeting around a table of books and planners", [
    "schools-and-districts",
    "about",
    "pricing",
  ]),
  photo("two-teachers-planning", "Two teachers planning together over an open binder", [
    "features",
    "schools-and-districts",
    "about",
  ]),
  photo("staff-room-laughing", "Four teachers laughing together over coffee in a staff room", [
    "compare",
    "best-ai-tools-for-teachers",
    "about",
  ]),
  photo("teacher-high-five", "Teacher high-fiving a smiling student in the classroom", ["closing"]),
  photo("happy-teacher-leaving", "Smiling teacher leaving school with a tote bag of books", [
    "closing",
    "pricing",
    "contact",
  ]),
];

const byKey = new Map(PHOTOS.map((p) => [p.key, p]));

/** These show one subject or age group, so they only fill slots on pages they suit. */
const SPECIFIC = new Set([
  "math-chalkboard",
  "math-one-to-one",
  "science-lab",
  "ela-discussion",
  "history-map",
  "elementary-rug",
  "elementary-small-group",
  "middle-school-groups",
  "high-school-seminar",
  "high-school-library-study",
  "homeschool-kitchen",
]);

/** The photo that opens each page. The same key is used on cards that link to that page. */
const OPENERS: Record<string, string> = {
  "/features": "two-teachers-planning",
  "/use-cases": "elementary-small-group",
  "/compare": "staff-room-laughing",
  "/resources": "library-reading-guide",
  "/features/textbook-to-lesson-plan": "textbook-and-laptop",
  "/features/quiz-generator": "test-papers-handout",
  "/features/curriculum-planner": "term-wall-planner",
  "/features/ai-assignment-generator": "student-project-table",
  "/features/ai-teaching-assistant": "evening-laptop-sofa",
  "/use-cases/math": "math-chalkboard",
  "/use-cases/science": "science-lab",
  "/use-cases/english-language-arts": "ela-discussion",
  "/use-cases/social-studies": "history-map",
  "/use-cases/elementary-school": "elementary-rug",
  "/use-cases/middle-school": "middle-school-groups",
  "/use-cases/high-school": "high-school-seminar",
  "/use-cases/homeschool": "homeschool-kitchen",
  "/use-cases/schools-and-districts": "department-meeting",
  "/compare/magicschool-alternative": "comparing-two-plans",
  "/compare/brisk-alternative": "whiteboard-brainstorm",
  "/compare/eduaide-alternative": "term-wall-planner",
  "/compare/khanmigo-alternative": "textbook-and-laptop",
  "/compare/chatgpt-for-lesson-planning": "desk-review-laptop",
  "/compare/best-ai-tools-for-teachers": "staff-room-laughing",
  "/resources/how-to-write-a-lesson-plan": "written-plan-by-hand",
  "/resources/lesson-plan-template": "blank-plan-flatlay",
  "/resources/can-ai-write-lesson-plans": "teacher-reviewing-draft",
  "/resources/how-to-make-a-quiz-from-a-pdf": "marking-answer-key",
  "/pricing": "happy-teacher-leaving",
  "/about": "two-teachers-planning",
  "/contact": "evening-laptop-sofa",
  "/faq": "library-reading-guide",
};

function hash(seed: string): number {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** True when a text section shows a photo rather than a checklist, steps or a table. */
export function sectionHasPhoto(section: ContentSection): boolean {
  return !section.bullets && !section.steps?.length && !section.table;
}

/**
 * Every photo a page shows, picked in one pass so none repeats on that page. A
 * photo can still appear on other pages. Selection is deterministic, so a page
 * looks the same on every build.
 */
export function pagePhotos(
  path: string,
  { sections = [], related = [] }: { sections?: ContentSection[]; related?: string[] } = {},
) {
  const topics = path.split("/").filter(Boolean);
  const used = new Set<string>();

  const score = (p: Photo, extra: string[]) =>
    p.tags.reduce((total, tag) => {
      if (extra.includes(tag)) return total + 4;
      if (tag === topics[topics.length - 1]) return total + 3;
      return topics.includes(tag) ? total + 1 : total;
    }, 0);

  /** Best unused photo for this page; the hash varies ties between pages. */
  const pick = (extra: string[] = []): Photo => {
    const free = PHOTOS.filter(
      (p) => !used.has(p.key) && (!SPECIFIC.has(p.key) || score(p, extra) > 0),
    );
    const best = [...(free.length ? free : PHOTOS)].sort(
      (a, b) => score(b, extra) - score(a, extra) || hash(path + a.key) - hash(path + b.key),
    )[0] as Photo;
    used.add(best.key);
    return best;
  };

  const prefer = (key: string | undefined): Photo => {
    const wanted = key ? byKey.get(key) : undefined;
    if (wanted && !used.has(wanted.key)) {
      used.add(wanted.key);
      return wanted;
    }
    return pick();
  };

  const hero = prefer(OPENERS[path]);
  const relatedPhotos = related.map((target) => prefer(OPENERS[target]));
  const cta = pick(["closing"]);
  const sectionPhotos = sections.map((s) => (sectionHasPhoto(s) ? pick() : null));

  return { hero, related: relatedPhotos, cta, sections: sectionPhotos };
}
