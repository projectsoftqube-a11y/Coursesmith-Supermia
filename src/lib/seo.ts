import type { Metadata } from "next";

import { ogImagePath } from "./og-path";

/**
 * Public origin this marketing site is served from.
 *
 * Canonical and Open Graph URLs must be absolute — crawlers and social scrapers
 * do not resolve site-relative paths, so `/logo.png` silently yields no preview
 * image. The app itself lives on the `app.` subdomain; this is the marketing site.
 *
 * Override with NEXT_PUBLIC_SITE_URL on previews/staging so they never emit production
 * canonicals; any origin other than production is also marked noindex.
 */
export const PRODUCTION_URL = "https://coursesmith.supermia.ai";

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE_URL = (envSiteUrl || PRODUCTION_URL).replace(/\/+$/, "");

export const IS_PRODUCTION = SITE_URL === PRODUCTION_URL;

export const SITE_NAME = "CourseSmith";

export const APP_URL = "https://app.coursesmith.supermia.ai";

export const CONTACT_EMAIL = "hello@supermia.ai";

/** Social preview image, 1200×630. */
export const OG_IMAGE = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "CourseSmith: turn any textbook PDF into lesson plans, quizzes and assignments",
};

/** Turn a site-relative path into an absolute URL for canonical / og tags. */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// ---------------------------------------------------------------------------
// Entity graph. Root entities get stable fragment @ids and every page refers to
// them by @id, so crawlers merge all pages into one coherent entity.
// ---------------------------------------------------------------------------

export const ID = {
  organization: `${PRODUCTION_URL}/#organization`,
  website: `${PRODUCTION_URL}/#website`,
  software: `${PRODUCTION_URL}/#software`,
  brand: `${PRODUCTION_URL}/#brand`,
  logo: `${PRODUCTION_URL}/#logo`,
  ogImage: `${PRODUCTION_URL}/#primaryimage`,
} as const;

type JsonLd = Record<string, unknown>;

/** Selectors the `speakable` spec points at; rendered by the content templates. */
export const SPEAKABLE_SELECTORS = [".answer-block", ".key-takeaways"];

/**
 * Site-wide nodes. Emitted on every page so each page's graph is self-contained
 * and every @id reference resolves within the document.
 *
 * Deliberately absent: sameAs (SuperMIA has no social profiles), foundingDate,
 * a SuperMIA logo, aggregateRating/review.
 */
export function siteNodes(): JsonLd[] {
  return [
    {
      "@type": "Organization",
      "@id": ID.organization,
      name: "SuperMIA",
      legalName: "Botfinity Inc.",
      url: "https://supermia.ai",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2451 W Grapevine Mills Cir #547",
        addressLocality: "Grapevine",
        addressRegion: "TX",
        postalCode: "76051",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        availableLanguage: "English",
      },
      brand: { "@id": ID.brand },
    },
    {
      "@type": "Brand",
      "@id": ID.brand,
      name: SITE_NAME,
      logo: { "@id": ID.logo },
    },
    {
      "@type": "ImageObject",
      "@id": ID.logo,
      url: absoluteUrl("/logo.png"),
      contentUrl: absoluteUrl("/logo.png"),
      width: 1608,
      height: 248,
      caption: SITE_NAME,
    },
    {
      "@type": "ImageObject",
      "@id": ID.ogImage,
      url: absoluteUrl(OG_IMAGE.path),
      contentUrl: absoluteUrl(OG_IMAGE.path),
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
      caption: OG_IMAGE.alt,
    },
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: absoluteUrl("/"),
      name: SITE_NAME,
      description:
        "CourseSmith turns textbook PDFs into lesson plans, quizzes, assignments and course outlines for teachers.",
      publisher: { "@id": ID.organization },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": ID.software,
      name: SITE_NAME,
      url: absoluteUrl("/"),
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web browser",
      description:
        "An AI teaching assistant that reads a textbook PDF or Word file, maps its chapters and topics, and generates lesson plans, test papers with answer keys, assignments and week-by-week academic schedules.",
      image: { "@id": ID.logo },
      brand: { "@id": ID.brand },
      publisher: { "@id": ID.organization },
      audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
      featureList: [
        "Textbook upload (PDF or DOCX) with chapter and topic extraction",
        "Lesson plan generator with teacher-set duration and delivery methods",
        "Test paper generator with marks, difficulty mix and answer keys",
        "Assignment generator with marking guides",
        "Week-by-week academic schedule planner",
        "CourseSmith Co-Pilot AI chat assistant",
        "Teacher persona built from a resume",
        "Teaching analytics",
        "Word (.docx) download for tests and assignments",
      ],
    },
  ];
}

export type Crumb = { name: string; path: string };

export function breadcrumbNode(path: string, crumbs: Crumb[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqEntities(faqs: { q: string; a: string }[]): JsonLd[] {
  return faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));
}

export type WebPageNodeInput = {
  path: string;
  title: string;
  description: string;
  type?: string | string[];
  crumbs?: Crumb[];
  datePublished?: string;
  dateModified?: string;
  faqs?: { q: string; a: string }[];
  about?: JsonLd;
  extra?: JsonLd;
};

/** The page's own WebPage node. FAQ content turns it into a WebPage+FAQPage. */
export function webPageNode(input: WebPageNodeInput): JsonLd {
  const url = absoluteUrl(input.path);
  const baseType = input.type ?? "WebPage";
  const types = Array.isArray(baseType) ? [...baseType] : [baseType];
  if (input.faqs?.length && !types.includes("FAQPage")) types.push("FAQPage");
  return {
    "@type": types.length === 1 ? types[0] : types,
    "@id": `${url}#webpage`,
    url,
    name: input.title,
    description: input.description,
    isPartOf: { "@id": ID.website },
    about: input.about ?? { "@id": ID.software },
    primaryImageOfPage: { "@id": ID.ogImage },
    inLanguage: "en-US",
    ...(input.crumbs && input.crumbs.length > 1
      ? { breadcrumb: { "@id": `${url}#breadcrumb` } }
      : {}),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.faqs?.length ? { mainEntity: faqEntities(input.faqs) } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: SPEAKABLE_SELECTORS },
    ...input.extra,
  };
}

// ---------------------------------------------------------------------------
// Page metadata + JSON-LD. Every route goes through this so the logic lives once.
// ---------------------------------------------------------------------------

export type HeadInput = {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  /** Extra JSON-LD nodes for this page, merged into one @graph with siteNodes(). */
  graph?: JsonLd[];
  noindex?: boolean;
};

export type PageHead = {
  metadata: Metadata;
  /** The page's full @graph, rendered by <JsonLd>. */
  jsonLd: JsonLd;
};

export function pageHead({
  path,
  title,
  description,
  ogType = "website",
  graph = [],
  noindex,
}: HeadInput): PageHead {
  const url = absoluteUrl(path);
  // Each page has its own card (app/og/[slug]); the site-wide OG_IMAGE stays
  // the primaryImageOfPage in the entity graph.
  const image = {
    url: absoluteUrl(ogImagePath(path)),
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: title,
  };
  const indexable = !noindex && IS_PRODUCTION;
  return {
    metadata: {
      title: { absolute: title },
      description,
      robots: indexable
        ? {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          }
        : { index: false, follow: true },
      alternates: { canonical: url },
      openGraph: {
        siteName: SITE_NAME,
        locale: "en_US",
        type: ogType,
        title,
        description,
        url,
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [{ url: image.url, alt: image.alt }],
      },
    },
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [...siteNodes(), ...graph],
    },
  };
}
