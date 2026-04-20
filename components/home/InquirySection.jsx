"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { trackFormSubmit } from "@/lib/tracking";

const LANE_PREFILLS = {
  "1:grade-query": {
    polymerType: "",
    details:
      "Commodity polymer pricing request.\n\nGrade: \nDestination: \nVolume (MT): \nRequired delivery window: ",
  },
  "2:engineering-substitution": {
    polymerType: "",
    details:
      "Chinese equivalent request for Western-premium engineering grade.\n\nWestern grade currently used (e.g., DuPont Zytel 70G33L): \nApplication: \nKey performance specs to match: \nDestination: \nAnnual volume (MT): ",
  },
  "3:brand-approval": {
    polymerType: "rPP or rPET",
    details:
      "Recycled polymer supply for brand-approval pathway.\n\nEnd product: \nBrand customer / audit requirement: \nCertification needed (GRS / ISCC PLUS / EUCERTPLAST / other): \nAnnual volume (MT): \nTarget brand-approval timeline: ",
  },
};

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [utmParams, setUtmParams] = useState({});
  const [polymerTypeValue, setPolymerTypeValue] = useState("");
  const [detailsValue, setDetailsValue] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    for (const key of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ]) {
      const val = params.get(key);
      if (val) utm[key] = val;
    }
    setUtmParams(utm);

    const lane = params.get("lane");
    const context = params.get("context");
    const prefillKey = lane && context ? `${lane}:${context}` : null;
    const prefill = prefillKey ? LANE_PREFILLS[prefillKey] : null;
    if (prefill) {
      if (prefill.polymerType) setPolymerTypeValue(prefill.polymerType);
      if (prefill.details) setDetailsValue(prefill.details);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    for (const [key, val] of Object.entries(utmParams)) {
      formData.append(key, val);
    }

    const polymerType = formData.get("polymerType") || "General";
    formData.append("_subject", `New Requirement: ${polymerType}`);
    formData.append("_replyto", formData.get("email"));

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result.ok) {
      setSubmitted(true);
      trackFormSubmit("inquiry");
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
        {/* Header copy */}
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
            GET STARTED
          </div>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
            Start with one question
          </h2>
          <p className="font-sans text-base text-body-text leading-relaxed max-w-[640px] mx-auto">
            You don&apos;t need to sign a contract, schedule a demo, or sit
            through a pitch deck. Tell us what you need — a polymer type, a
            grade, an application — and we&apos;ll show you what the broader
            China market can offer.
          </p>
        </div>

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
              You&apos;ll receive a response within one to two business days
              with matched grades, current CFR pricing for your destination,
              and documentation details. Check your email.
            </p>
            <p className="font-sans text-xs text-muted">
              Want market intelligence while you wait?{" "}
              <Link
                href="/polymer-compass#subscribe"
                className="text-teal hover:text-teal-light transition-colors duration-150"
              >
                Subscribe to The Polymer Compass
              </Link>{" "}
              — free, twice weekly.
            </p>
          </div>
        ) : (
          /* ---- Form ---- */
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_formtype" value="requirement" />

              {/* Polymer type */}
              <div>
                <label htmlFor="inq-polymer" className={labelClasses}>
                  Polymer type *
                </label>
                <input
                  id="inq-polymer"
                  name="polymerType"
                  required
                  className={inputClasses}
                  placeholder="e.g., PP, HDPE, PVC, PA6, ABS, PET"
                  value={polymerTypeValue}
                  onChange={(e) => setPolymerTypeValue(e.target.value)}
                />
              </div>

              {/* Tell us what you need — freeform */}
              <div>
                <label htmlFor="inq-details" className={labelClasses}>
                  Tell us what you need
                </label>
                <textarea
                  id="inq-details"
                  name="details"
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="e.g., HDPE blow molding MFI 0.35 for water tanks, 50 MT/month, FDA food contact approved, equivalent to Marlex HHM 5202BN"
                  value={detailsValue}
                  onChange={(e) => setDetailsValue(e.target.value)}
                />
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="inq-destination" className={labelClasses}>
                  Destination country or port *
                </label>
                <input
                  id="inq-destination"
                  name="destination"
                  required
                  className={inputClasses}
                  placeholder="e.g., Ho Chi Minh City, Manila, Istanbul"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="inq-company" className={labelClasses}>
                  Company *
                </label>
                <input
                  id="inq-company"
                  name="company"
                  required
                  autoComplete="organization"
                  className={inputClasses}
                  placeholder="Your company name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="inq-email" className={labelClasses}>
                  Email address *
                </label>
                <input
                  id="inq-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>

              {error && (
                <p className="text-ticker-red text-sm font-sans">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto bg-gold text-navy-deep font-semibold text-base tracking-wider px-10 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit requirement"}
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
              Free market intelligence for polymer distributors. Twice weekly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
