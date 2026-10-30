# CourseSmith

Marketing site for [CourseSmith](https://coursesmith.supermia.ai), the AI
teaching assistant by SuperMIA that turns a textbook PDF into lesson plans,
tests and assignments.

Built with Next.js 16 (App Router, Cache Components, Turbopack), React 19,
Tailwind CSS v4 and Motion. Every route is prerendered as static HTML.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                | What it does                                              |
| --------------------- | --------------------------------------------------------- |
| `npm run dev`         | Development server                                        |
| `npm run build`       | Production build (prerenders every route and OG card)     |
| `npm run start`       | Serve the production build                                |
| `npm run check`       | Typecheck, lint and Prettier check in one go              |
| `npm run seo:catalog` | Regenerate `src/content/catalog.gen.ts` from page content |
| `npm run seo:audit`   | Verify SEO on a running build (pass its URL)              |

## How the content works

- **Pages are data.** Every inner page is a typed object in `src/content/`
  (features, use cases, state standards, comparisons, resources). The page,
  its JSON-LD graph, `sitemap.xml`, `llms.txt`, `llms-full.txt` and its Open
  Graph card (`/og/[slug]`) are all generated from that object, so schema and
  visible copy cannot drift.
- **Navigation index.** The nav, footer and hub cards read
  `src/content/catalog.gen.ts`. After adding or editing a page, run
  `npm run seo:catalog`; `npm run seo:audit` fails if the catalog is stale.
- **SEO helpers** live in `src/lib/seo.ts` (metadata + entity graph) and
  `src/lib/site-index.ts` (sitemap, robots, llms files). Never add ratings,
  reviews or facts without a real source.

## Environment variables

| Variable               | Purpose                                                                          |
| ---------------------- | -------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Origin for canonicals. Any value other than production also marks pages noindex. |

## Deployment

Deployed on Vercel. `vercel.json` pins the framework preset to Next.js.
