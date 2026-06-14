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

/** Generic GA4 event passthrough (form_start, form_error, etc.). */
export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

/**
 * Fire once when a user first interacts with a form. Paired with the
 * form_submit/generate_lead events, this is what makes start→complete
 * drop-off measurable (a low landing CVR is then diagnosable as friction
 * vs. traffic quality).
 */
export function trackFormStart(formName) {
  trackEvent("form_start", { event_category: "Form", event_label: formName });
}

/**
 * Fire a GA4 form_submit event tagged with the lead's channel + source.
 * Pass the attribution object from getAttribution() to avoid a second
 * sessionStorage read; if omitted it is fetched here so every form (even
 * ones that don't build their own attribution) still segments by channel.
 *
 * NOTE: `channel`, `referrer`, and the utm_* params land on the event in
 * Realtime/DebugView and BigQuery automatically. To break them down in
 * standard GA4 reports, register them as event-scoped Custom Definitions
 * (Admin → Custom definitions) — `channel` is the one that answers
 * "what % of leads are AI" at a glance.
 */
export function trackFormSubmit(formName, attribution, extras = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  const attr = attribution || getAttribution();
  const params = {
    event_category: "Form",
    event_label: formName,
    channel: attr.channel || "direct",
    referrer: attr.referrer || "direct",
    ...extras,
  };
  if (attr.utm_source) params.utm_source = attr.utm_source;
  if (attr.utm_medium) params.utm_medium = attr.utm_medium;
  if (attr.utm_campaign) params.utm_campaign = attr.utm_campaign;
  window.gtag("event", "form_submit", params);
  // GA4 recommended key event for lead counting. Mark `generate_lead` as a
  // Key Event in GA4 Admin to count qualified leads with channel breakdown.
  // Fired only on a SUCCESSFUL submit (callers must gate on result.ok) so a
  // failed POST never inflates the lead count. `extras` carries e.g. the
  // chosen service tier (request_type) so SKU-level intent is queryable.
  window.gtag("event", "generate_lead", params);
}

/**
 * True when `host` is `domain` or a subdomain of it. Subdomain-safe so that
 * "businessx.com" does not match "x.com" and "evilgoogle.com" does not match
 * "google.com".
 */
function hostMatches(host, domain) {
  return host === domain || host.endsWith("." + domain);
}

/**
 * Classify a raw referrer (full URL, bare hostname, or the literal "direct")
 * into a clean channel bucket. This is the field that makes AI-channel share
 * answerable without opening individual submissions.
 *
 * Buckets: ai_chatgpt | ai_perplexity | ai_claude | ai_gemini | search |
 *          linkedin | x | direct | referral_other
 *
 * gemini.google.com is carved out as ai_gemini BEFORE the google→search check
 * so Gemini-referred leads aren't silently counted as search (which would
 * undercount the headline AI number). Add new hosts to the relevant block.
 */
export function normalizeChannel(referrer) {
  if (!referrer || referrer === "direct") return "direct";

  let host;
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    // Not a parseable URL — treat the raw string as the host.
    host = String(referrer).toLowerCase();
  }
  host = host.replace(/^www\./, "");
  if (!host) return "direct";

  // AI assistants
  if (hostMatches(host, "chatgpt.com") || hostMatches(host, "openai.com"))
    return "ai_chatgpt";
  if (hostMatches(host, "perplexity.ai")) return "ai_perplexity";
  if (hostMatches(host, "claude.ai") || hostMatches(host, "anthropic.com"))
    return "ai_claude";
  if (hostMatches(host, "gemini.google.com")) return "ai_gemini";

  // Search engines
  if (host.startsWith("google.") || host.includes(".google.")) return "search";
  if (hostMatches(host, "bing.com")) return "search";

  // Social / professional
  if (hostMatches(host, "linkedin.com") || host === "lnkd.in")
    return "linkedin";
  if (host === "t.co" || hostMatches(host, "x.com") || hostMatches(host, "twitter.com"))
    return "x";

  return "referral_other";
}

/**
 * Capture first-touch attribution once per session.
 * Stores the original referrer + landing page + UTM tags so they survive
 * internal navigation (e.g. land on an article from Bing or a utm-tagged
 * campaign link, then go to /inquiry).
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
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      first_seen: new Date().toISOString(),
    };
    sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode / blocked) — skip silently
  }
}

/**
 * Read attribution for attaching to a form submission.
 * Single source of truth for every form: prefers the stored first-touch
 * values (which survive internal navigation), falls back to live values so a
 * submission always carries a referrer + channel even if storage failed.
 *
 * UTMs come from first-touch; if first-touch storage failed, falls back to
 * any UTM tags still present in the URL at submit time. `channel` is the
 * normalized referrer bucket — always present (defaults to "direct").
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
  const live = new URLSearchParams(window.location.search);
  const referrer = ft.referrer || document.referrer || "direct";
  return {
    referrer,
    channel: normalizeChannel(referrer),
    landing_page:
      ft.landing_page || window.location.pathname + window.location.search,
    landing_title: ft.landing_title || document.title || "",
    utm_source: ft.utm_source || live.get("utm_source") || "",
    utm_medium: ft.utm_medium || live.get("utm_medium") || "",
    utm_campaign: ft.utm_campaign || live.get("utm_campaign") || "",
    utm_content: ft.utm_content || live.get("utm_content") || "",
    utm_term: ft.utm_term || live.get("utm_term") || "",
  };
}
