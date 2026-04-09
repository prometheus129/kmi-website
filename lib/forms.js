/**
 * Form endpoint configuration — Formspree (David Wu account).
 */

export const FORM_ENDPOINTS = {
  contact: "https://formspree.io/f/mreynawg",
  subscription: "https://formspree.io/f/maqprdgj",
  // Requirement form — shares the contact endpoint for now.
  // Submissions include _formtype=requirement and a descriptive _subject line.
  // Create a dedicated Formspree form if you want separate inboxes.
  inquiry: "https://formspree.io/f/mreynawg",
};

/**
 * Submit form data to Formspree.
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

    // Formspree returned an error
    return { ok: false, error: "Submission failed. Please try again or contact david@kantor-m.com directly." };
  } catch {
    // Network error
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
