"use client";

import { useState } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { trackCTA, trackFormSubmit, getAttribution } from "@/lib/tracking";
import RevealDiv from "@/components/RevealDiv";

const samplePrompts = [
  "Send me a free sample of coated GCC for PP filler masterbatch \u2014 1250 mesh, high whiteness, shipping to Manila.",
  "I need HDPE blow molding grade, MFI 0.35, for water tanks. Shipping to Ho Chi Minh City.",
  "What\u2019s the Chinese equivalent of LG Chem ME9180?",
];

export default function ConversationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    const attribution = getAttribution();
    for (const [key, val] of Object.entries(attribution)) {
      if (val) formData.append(key, val);
    }

    const polymerType = formData.get("polymerType") || "General";
    formData.append("_subject", `New Requirement: ${polymerType}`);
    formData.append("_replyto", formData.get("email"));

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result.ok) {
      setSubmitted(true);
      trackFormSubmit("inquiry", attribution);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150";
  const labelClasses =
    "block font-sans text-[11px] font-bold uppercase tracking-[3px] text-body-text mb-2";

  return (
    <section
      id="inquiry"
      className="bg-navy-deep py-24 px-6 lg:px-10 scroll-mt-24"
    >
      <div className="max-w-[640px] mx-auto">
        {/* Header */}
        <RevealDiv>
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              TRY IT
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-4 leading-tight">
              Ask anything about our materials.
            </h2>
            <p className="font-sans text-base text-body-text leading-relaxed">
              Filler specs. Grade equivalents. Pricing. Document verification.
              Alternatives to your current supplier.
            </p>
          </div>
        </RevealDiv>

        {/* Sample prompts */}
        <RevealDiv delay={100}>
          <div className="space-y-3 mb-10">
            {samplePrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() =>
                  trackCTA("cta_click", "Sample Prompt Click", prompt)
                }
                className="w-full text-left bg-white/[0.03] border border-white/[0.08] rounded-lg px-5 py-4 font-mono text-sm text-body-text hover:border-teal/30 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
              >
                {prompt}
              </button>
            ))}
          </div>
        </RevealDiv>

        {/* Divider to form */}
        <RevealDiv delay={200}>
          <div className="border-t border-white/[0.08] pt-8 mb-8">
            <p className="font-sans text-sm text-muted text-center mb-6">
              Prefer email?
            </p>
          </div>
        </RevealDiv>

        {submitted ? (
          /* ---- Confirmation ---- */
          <div className="bg-white/[0.03] border border-teal/20 rounded-xl p-8 lg:p-10 text-center">
            <div className="w-12 h-12 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#2E8B8B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Requirement received
            </h3>
            <p className="font-sans text-base text-body-text leading-relaxed mb-6 max-w-[520px] mx-auto">
              You&apos;ll receive a response within 24 hours with matched
              grades, current CFR pricing for your destination, and
              documentation details. Check your email.
            </p>
            <p className="font-sans text-xs text-muted">
              Want market intelligence while you wait?{" "}
              <Link
                href="/polymer-compass#subscribe"
                className="text-teal hover:text-teal-light transition-colors duration-150"
              >
                Subscribe to The Polymer Compass
              </Link>{" "}
              &mdash; free.
            </p>
          </div>
        ) : (
          /* ---- Form ---- */
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_formtype" value="requirement" />

              {/* Polymer type */}
              <div>
                <label htmlFor="conv-polymer" className={labelClasses}>
                  Material *
                </label>
                <input
                  id="conv-polymer"
                  name="polymerType"
                  required
                  className={inputClasses}
                  placeholder="e.g., GCC filler, PP, HDPE, PVC, PA6, ABS"
                />
              </div>

              {/* Tell us what you need */}
              <div>
                <label htmlFor="conv-details" className={labelClasses}>
                  Tell us what you need
                </label>
                <textarea
                  id="conv-details"
                  name="details"
                  rows={3}
                  className={`${inputClasses} resize-none`}
                  placeholder="e.g., HDPE blow molding MFI 0.35 for water tanks, 50 MT/month, FDA food contact approved, equivalent to Marlex HHM 5202BN"
                />
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="conv-destination" className={labelClasses}>
                  Destination country or port *
                </label>
                <input
                  id="conv-destination"
                  name="destination"
                  required
                  className={inputClasses}
                  placeholder="e.g., Ho Chi Minh City, Manila, Istanbul"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="conv-company" className={labelClasses}>
                  Company *
                </label>
                <input
                  id="conv-company"
                  name="company"
                  required
                  autoComplete="organization"
                  className={inputClasses}
                  placeholder="Your company name"
                />
              </div>

              {/* Email + WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="conv-email" className={labelClasses}>
                    Email address *
                  </label>
                  <input
                    id="conv-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="conv-whatsapp" className={labelClasses}>
                    WhatsApp / phone — optional
                  </label>
                  <input
                    id="conv-whatsapp"
                    name="whatsapp"
                    type="text"
                    autoComplete="tel"
                    className={inputClasses}
                    placeholder="+62…"
                  />
                </div>
              </div>

              {error && (
                <p className="text-ticker-red text-sm font-sans">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto bg-gold text-navy-deep font-semibold text-base tracking-wider px-10 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Ask us"}
              </button>
            </form>
          </div>
        )}

        {/* Secondary CTA */}
        {!submitted && (
          <div className="mt-12 pt-8 border-t border-white/[0.08] text-center">
            <p className="font-sans text-sm text-body-text mb-1">
              <Link
                href="/polymer-compass#subscribe"
                className="text-teal hover:text-teal-light font-medium transition-colors duration-150"
              >
                Subscribe to The Polymer Compass
              </Link>
            </p>
            <p className="font-sans text-xs text-muted">
              Free market intelligence for polymer distributors.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
