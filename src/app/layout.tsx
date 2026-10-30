import type { Metadata, Viewport } from "next";
import { Kalam, Nunito, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { SITE_NAME, SITE_URL } from "@/lib/seo";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-nunito-family",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins-family",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam-family",
  display: "swap",
});

// Page-level title, description, canonical, Open Graph and JSON-LD come from
// pageHead() in each route; only document-wide tags live here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME}: AI Lesson Plans, Quizzes & Curriculum Tools`,
  applicationName: SITE_NAME,
  appleWebApp: { title: SITE_NAME },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b1d51",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${poppins.variable} ${kalam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
