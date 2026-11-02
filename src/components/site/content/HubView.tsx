import { ArrowRight } from "lucide-react";
import { catalogGroup, type CatalogEntry } from "@/content/catalog";
import { SITE_UPDATED, type Hub } from "@/content/hubs";
import { visualFor } from "@/content/visuals";
import { BookShell, CtaBand, FaqBand, PageHero, PrimaryCta } from "./blocks";

export function hubCrumbs(hub: Hub) {
  return [
    { name: "Home", path: "/" },
    { name: hub.label, path: hub.path },
  ];
}

/** Pages a hub lists, in display order. Shared with the hub's ItemList schema. */
export function hubPages(hub: Hub): CatalogEntry[] {
  return catalogGroup(hub.group);
}

/** A hub reads like the contents page of a book. */
export function HubView({ hub }: { hub: Hub }) {
  return (
    <BookShell>
      <PageHero
        crumbs={hubCrumbs(hub)}
        eyebrow={hub.eyebrow}
        title={hub.h1}
        answer={hub.answer}
        answerLabel="In short"
        visual={visualFor(hub.path)}
        updated={SITE_UPDATED}
        actions={<PrimaryCta />}
      />
      <section className="contents" aria-labelledby="contents-h">
        <div className="wrap">
          <div className="contents-head">
            <h2 id="contents-h">{hub.listHeading}</h2>
            <p>{hub.intro}</p>
          </div>
          <ol className="contents-list">
            {hubPages(hub).map((p) => (
              <li key={p.path}>
                <a href={p.path} className="entry">
                  <h3>{p.label}</h3>
                  <p>{p.blurb}</p>
                  <ArrowRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <FaqBand faqs={hub.faqs} tinted />
      <CtaBand />
    </BookShell>
  );
}
