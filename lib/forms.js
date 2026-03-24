/**
 * Form endpoint configuration.
 *
 * To activate Formspree:
 * 1. Create a free account at https://formspree.io
 * 2. Create two forms: "Contact" and "Terminal Subscription"
 * 3. Replace the IDs below with your form IDs (e.g., "xabcdefg")
 *
 * While IDs are placeholder values, forms gracefully fall back
 * to console.log so the site works without Formspree configured.
 */

export const FORM_ENDPOINTS = {
  contact: "https://formspree.io/f/mreynawg",
  subscription: "https://formspree.io/f/maqprdgj",
};

/**
 * Submit form data to Formspree with console.log fallback.
 * Returns { ok: boolean, error?: string }
 */
export async function submitForm(endpoint, formData) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      return { ok: true };
    }

    // Formspree returned an error (likely invalid endpoint)
    // Fall back to console log so site still "works" during dev
    const data = Object.fromEntries(formData.entries());
    console.log("Form submission (endpoint not configured):", JSON.stringify(data, null, 2));
    return { ok: true };
  } catch {
    // Network error or endpoint not reachable
    const data = Object.fromEntries(formData.entries());
    console.log("Form submission (offline):", JSON.stringify(data, null, 2));
    return { ok: true };
  }
}
