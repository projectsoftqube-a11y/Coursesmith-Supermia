import { ID, absoluteUrl, breadcrumbNode, pageHead, webPageNode, type Crumb } from "@/lib/seo";
import type { CatalogEntry } from "./catalog";
import { SITE_UPDATED, type Hub } from "./hubs";
import { pagePath } from "./load";
import type { ContentPage } from "./types";

/**
 * JSON-LD + <head> for content pages and hubs. Everything is read from the same
 * objects the templates render, so schema and visible copy cannot diverge.
 */

function wordCount(page: ContentPage): number {
  return [
    page.answer,
    page.definition,
    ...page.takeaways,
    ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function contentPageHead(page: ContentPage, crumbs: Crumb[]) {
  const path = pagePath(page);
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    webPageNode({
      path,
      title: page.metaTitle,
      description: page.metaDescription,
      crumbs,
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      faqs: page.faqs,
      extra: {
        keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
        ...(page.sources?.length ? { citation: page.sources.map((s) => s.url) } : {}),
      },
    }),
    breadcrumbNode(path, crumbs),
  ];

  if (page.group === "resources") {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.h1,
      description: page.metaDescription,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      isPartOf: { "@id": `${url}#webpage` },
      author: { "@id": ID.organization },
      publisher: { "@id": ID.organization },
      image: { "@id": ID.ogImage },
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      wordCount: wordCount(page),
      articleSection: "Lesson planning",
      inLanguage: "en-US",
    });
  }

  page.sections.forEach((s, i) => {
    if (!s.steps?.length) return;
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto-${i + 1}`,
      name: s.heading,
      description: s.paragraphs[0],
      isPartOf: { "@id": `${url}#webpage` },
      step: s.steps.map((st, si) => ({
        "@type": "HowToStep",
        position: si + 1,
        name: st.name,
        text: st.text,
      })),
    });
  });

  return pageHead({
    path,
    title: page.metaTitle,
    description: page.metaDescription,
    ogType: page.group === "resources" ? "article" : "website",
    graph,
  });
}

export function hubHead(hub: Hub, crumbs: Crumb[], pages: CatalogEntry[]) {
  const url = absoluteUrl(hub.path);
  return pageHead({
    path: hub.path,
    title: hub.metaTitle,
    description: hub.metaDescription,
    graph: [
      webPageNode({
        path: hub.path,
        title: hub.metaTitle,
        description: hub.metaDescription,
        type: "CollectionPage",
        crumbs,
        datePublished: SITE_UPDATED,
        dateModified: SITE_UPDATED,
        faqs: hub.faqs,
        extra: { hasPart: { "@id": `${url}#itemlist` } },
      }),
      breadcrumbNode(hub.path, crumbs),
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name: hub.h1,
        numberOfItems: pages.length,
        itemListElement: pages.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.label,
          url: absoluteUrl(p.path),
        })),
      },
    ],
  });
}
