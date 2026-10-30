import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { ogCard, ogPaths } from "@/lib/og-card";
import { ogSlug, pathFromOgSlug } from "@/lib/og-path";

/** One prerendered 1200×630 Open Graph card per indexable page. */
export function generateStaticParams() {
  return ogPaths().map((path) => ({ slug: ogSlug(path) }));
}

const asset = (file: string) => readFile(join(process.cwd(), "src/assets", file));

/** Fonts and logo, read once and cached so every card can be prerendered. */
async function loadAssets() {
  "use cache";
  const [heading, body, logo] = await Promise.all([
    asset("fonts/nunito-latin-800-normal.woff"),
    asset("fonts/poppins-latin-500-normal.woff"),
    asset("logo.png"),
  ]);
  // Cached values are serialized, so pass the binaries through as base64.
  return {
    heading: heading.toString("base64"),
    body: body.toString("base64"),
    logo: `data:image/png;base64,${logo.toString("base64")}`,
  };
}

/** base64 → a standalone ArrayBuffer, which is what ImageResponse expects. */
function toArrayBuffer(base64: string): ArrayBuffer {
  const bytes = Buffer.from(base64, "base64");
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

export async function GET(_request: Request, { params }: RouteContext<"/og/[slug]">) {
  const { slug } = await params;
  const card = ogCard(pathFromOgSlug(slug));
  if (!card) return new Response("Not found", { status: 404 });

  const assets = await loadAssets();
  const titleSize = card.title.length > 60 ? 54 : card.title.length > 40 ? 62 : 70;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background: "#F8FAFC",
        backgroundImage:
          "radial-gradient(circle at 100% 40%, rgba(46,167,245,0.45), rgba(46,167,245,0) 48%), linear-gradient(to right, rgba(46,167,245,0.07) 1px, rgba(46,167,245,0) 1px), linear-gradient(to bottom, rgba(46,167,245,0.07) 1px, rgba(46,167,245,0) 1px)",
        backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        color: "#0B1D51",
        fontFamily: "Poppins",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
      <img src={assets.logo} width={415} height={64} alt="" />

      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
        <span
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "8px 18px",
            borderRadius: 999,
            background: "rgba(46,167,245,0.12)",
            color: "#0369A1",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {card.eyebrow}
        </span>
        <span
          style={{
            fontFamily: "Nunito",
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1,
          }}
        >
          {card.title}
        </span>
        <span style={{ fontSize: 26, color: "#475569" }}>{card.subtitle}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            display: "flex",
            padding: "14px 26px",
            borderRadius: 999,
            background: "#2EA7F5",
            color: "#FFFFFF",
            fontSize: 24,
          }}
        >
          Free to start for teachers →
        </span>
        <span style={{ fontSize: 24, color: "#0369A1" }}>coursesmith.supermia.ai</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Nunito", data: toArrayBuffer(assets.heading), weight: 800, style: "normal" },
        { name: "Poppins", data: toArrayBuffer(assets.body), weight: 500, style: "normal" },
      ],
    },
  );
}
