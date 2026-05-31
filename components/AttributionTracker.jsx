"use client";

import { useEffect } from "react";
import { captureFirstTouch } from "@/lib/tracking";

/**
 * Invisible component mounted globally in the root layout.
 * On the first page of a session it records the original referrer + landing
 * page into sessionStorage, so the search engine that brought a visitor in
 * (e.g. Bing/Google) survives internal navigation to /inquiry before they
 * submit a form. Renders nothing.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureFirstTouch();
  }, []);
  return null;
}
