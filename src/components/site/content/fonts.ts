import { Figtree, Fraunces } from "next/font/google";

/** Inner-page typefaces. Loaded here, not in the root layout, so home never fetches them. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  variable: "--font-book-display",
  display: "swap",
});

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-book-text",
  display: "swap",
});
