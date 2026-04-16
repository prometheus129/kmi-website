"use client";

import { useState } from "react";
import RevealDiv from "@/components/RevealDiv";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { trackCTA } from "@/lib/tracking";

export default function AssistantTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setError(false);
    trackCTA("waitlist_signup", "Assistant Beta", email);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("_formtype", "assistant-waitlist");
    formData.append("_subject", "Assistant Waitlist Signup");
    formData.append("_replyto", email);
    formData.append("source", "assistant-teaser");
    formData.append("timestamp", new Date().toISOString());

    const result = await submitForm(FORM_ENDPOINTS.waitlist, formData);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(true);
    }
    setSubmitting(false);
  };

  return (
    <section className="bg-navy-deep py-12 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(46,139,139,0.2) 0%, transparent 60%)" }} />

      <RevealDiv>
        <div className="max-w-[640px] mx-auto text-center relative z-10">
          <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
            COMING MAY 2026
          </div>
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-tight mb-4">
            Free procurement assistant for China-origin polymers
          </h3>
          <p className="font-sans text-base text-body-text leading-relaxed mb-6">
            Ask about any grade — specs, pricing, compliance for your
            destination. Verify your shipping documents before customs does. On
            WhatsApp. No signup required.
          </p>

          {submitted ? (
            <p className="font-sans text-sm text-teal font-medium">
              You&apos;re on the list. We&apos;ll message you when it&apos;s
              live.
            </p>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-150 disabled:opacity-50"
                >
                  {submitting ? "..." : "Join early access"}
                </button>
              </form>
              {error && (
                <p className="font-sans text-xs text-ticker-red mt-2">
                  Something went wrong. Try again or email{" "}
                  <a href="mailto:david@kantor-m.com" className="underline">
                    david@kantor-m.com
                  </a>
                </p>
              )}
            </>
          )}
        </div>
      </RevealDiv>
    </section>
  );
}
