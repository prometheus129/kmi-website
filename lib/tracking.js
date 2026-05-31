/**
 * GA4 event tracking + lead attribution utilities.
 * Requires gtag to be loaded (injected by app/layout.js).
 */

const FIRST_TOUCH_KEY = "kmi_first_touch";

export function trackCTA(action, label, destination) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: "CTA",
      event_label: label,
      destination: destination,
    });
  }
}

export function trackFormSubmit(formName) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "Form",
      event_label: formName,
    });
  }
}

/**
 * Capture first-touch attribution once per session.
 * Stores the original referrer + landing page so it survives internal
 * navigation (e.g. land on an article from Bing, then go to /inquiry).
 * Idempotent: only writes on the first page of a session. Safe to call
 * on every page mount.
 */
export function captureFirstTouch() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(FIRST_TOUCH_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const data = {
      referrer: document.referrer || "direct",
      landing_page: window.location.pathname + window.location.search,
      landing_title: document.title || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      first_seen: new Date().toISOString(),
    };
    sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode / blocked) — skip silently
  }
}

/**
 * Read attribution for attaching to a form submission.
 * Prefers the stored first-touch values; falls back to live values so a
 * submission always carries a referrer + landing page even if storage failed.
 */
export function getAttribution() {
  if (typeof window === "undefined") return {};
  let ft = {};
  try {
    const raw = sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (raw) ft = JSON.parse(raw);
  } catch {
    // ignore parse/storage errors
  }
  return {
    referrer: ft.referrer || document.referrer || "direct",
    landing_page:
      ft.landing_page || window.location.pathname + window.location.search,
    landing_title: ft.landing_title || document.title || "",
  };
}
