/**
 * GA4 event tracking utilities for CTA clicks and form submissions.
 * Requires gtag to be loaded (injected by app/layout.js).
 */

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
