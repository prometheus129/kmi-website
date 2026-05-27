/**
 * Form endpoint configuration — Formspree (David Wu account).
 */

export const FORM_ENDPOINTS = {
  contact: "https://formspree.io/f/mreynawg",
  subscription: "https://formspree.io/f/maqprdgj",
  // Requirement form — shares the contact endpoint for now.
  // Submissions include _formtype=requirement, a descriptive _subject line,
  // and _replyto so David can reply directly from Formspree notifications.
  // TODO: Create a dedicated Formspree form for inquiry submissions.
  // Separate endpoints enable separate dashboards, auto-responders,
  // and notification routing. Log into Formspree → create new form →
  // replace this endpoint ID.
  inquiry: "https://formspree.io/f/mreynawg",
  // Assistant waitlist — shares contact endpoint until dedicated form created.
  // Submissions tagged with _formtype=assistant-waitlist for filtering.
  // TODO: Create dedicated Formspree form for waitlist signups →
  // replace this endpoint ID. Original placeholder "xwpegvjy" was never
  // created in Formspree (returned 404, verified 2026-04-16).
  waitlist: "https://formspree.io/f/mreynawg",
  // Co-development pilot applications — dedicated Formspree form
  // "Kantor Co-Development Applications" (created 2026-05-28).
  // Submissions also include _formtype=codev-pilot for filtering/analytics.
  // Notification email: david.xiaowu@gmail.com.
  // Note: auto-responder to submitters requires Formspree paid plan; not
  // configured yet. Until then, manual reply within 48 hours is the
  // committed turnaround.
  codev: "https://formspree.io/f/xdajyayq",
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
