/** Photography for inner pages. Every file is a square 1024px WebP in /public. */
export type Visual = { src: string; alt: string };

const LAPTOP: Visual = {
  src: "/section3-output.webp",
  alt: "Laptop open on a classroom desk showing a generated lesson plan",
};
const TABLET: Visual = {
  src: "/section3-input.webp",
  alt: "Teacher working on a tablet at a home desk",
};
const CLASSROOM: Visual = {
  src: "/teacher-after.webp",
  alt: "Teacher laughing with students around a classroom table",
};
const GROUP_WORK: Visual = {
  src: "/finale-teacher.webp",
  alt: "Teacher holding a tablet in a bright classroom while students work in groups",
};
const PLANNING: Visual = {
  src: "/hero-teacher.webp",
  alt: "Teacher holding a tablet showing an AI lesson flow in a classroom",
};

const ALL = [LAPTOP, CLASSROOM, PLANNING, GROUP_WORK, TABLET];

function hash(seed: string): number {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** A stable photo for any page or section, so a page looks the same on every build. */
export function visualFor(seed: string, offset = 0): Visual {
  return ALL[(hash(seed) + offset) % ALL.length] ?? LAPTOP;
}
