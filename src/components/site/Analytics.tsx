import { GoogleTagManager } from "@next/third-parties/google";
import { IS_PRODUCTION } from "@/lib/seo";

const GTM_ID = "GTM-5K4LBRW6";

/** Live site only, so local runs and Vercel previews never reach the reports. */
const TRACKING_ENABLED =
  IS_PRODUCTION && process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

/** GTM is the single hub: GA4 and every other tag are configured in the container. */
export function Analytics() {
  if (!TRACKING_ENABLED) return null;
  return <GoogleTagManager gtmId={GTM_ID} />;
}

/** GTM's fallback for visitors with JavaScript off; goes first inside <body>. */
export function GtmNoscript() {
  if (!TRACKING_ENABLED) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
