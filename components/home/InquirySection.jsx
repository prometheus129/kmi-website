"use client";

import { useState, useEffect } from "react";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";

const polymerTypes = [
  "PP (Polypropylene)",
  "PE (Polyethylene \u2014 HDPE, LDPE, LLDPE)",
  "PVC",
  "PET",
  "PA (Nylon / Polyamide)",
  "POM",
  "PC",
  "PBT",
  "ABS",
  "Other",
];

const quantities = [
  "1\u201310 MT (trial)",
  "10\u201330 MT",
  "30\u2013100 MT",
  "100\u2013500 MT",
  "500+ MT",
];

const sources = [
  "Google search",
  "LinkedIn",
  "Referral from a colleague",
  "The Polymer Compass newsletter",
  "Industry event",
  "Other",
];

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [utmParams, setUtmParams] = useState({});

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
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    // Append UTM params as hidden fields
    for (const [key, val] of Object.entries(utmParams)) {
      formData.append(key, val);
    }

    // Set Formspree subject line
    const polymerType = formData.get("polymerType") || "General";
    formData.append("_subject", `New Requirement: ${polymerType}`);

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-white/[0.1] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors";
  const labelClasses =
    "block font-sans text-[10px] font-bold uppercase tracking-[2px] text-body-text mb-2";

  return (
    <section
      id="inquiry"
      className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10 scroll-mt-24"
    >
      <div className="max-w-[720px] mx-auto">
        {/* Header copy */}
        <div className="text-center mb-12">
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            GET STARTED
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
            Start with one question
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-[560px] mx-auto">
            You don&apos;t need to sign a contract, schedule a demo, or sit
            through a pitch deck. Tell us what you need — a polymer type, a
            grade, an application — and we&apos;ll show you what the broader
            China market can offer.
          </p>
        </div>

        {submitted ? (
          /* ---- Confirmation ---- */
          <div className="bg-white/[0.03] border border-teal/20 rounded-lg p-8 lg:p-10 text-center">
            <div className="w-12 h-12 bg-teal/10 border border-teal/30 rounded-lg flex items-center justify-center mx-auto mb-5">
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
            <p className="font-sans text-[15px] text-body-text leading-relaxed mb-6 max-w-[480px] mx-auto">
              We&apos;ve received your requirement. Our sourcing team will
              respond within one to two business days with matched grades,
              current CFR pricing for your destination, and documentation
              details. Check your email.
            </p>
            <div className="bg-white/[0.02] rounded-lg p-5 max-w-[480px] mx-auto mb-6">
              <p className="font-sans text-[13px] text-muted leading-relaxed">
                <span className="text-body-text font-semibold">
                  What happens next:
                </span>{" "}
                Our team reviews your requirement and responds with matched
                options, pricing, and documentation for your destination —
                typically within one to two business days.
              </p>
            </div>
            <p className="font-sans text-xs text-muted">
              Want market intelligence while you wait?{" "}
              <a
                href="https://www.linkedin.com/newsletters/the-polymer-compass-7444056500781694976/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light transition-colors"
              >
                Subscribe to The Polymer Compass
              </a>{" "}
              — free, twice weekly.
            </p>
          </div>
        ) : (
          /* ---- Form ---- */
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden fields */}
              <input type="hidden" name="_formtype" value="requirement" />

              {/* Polymer type + Application */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-polymer" className={labelClasses}>
                    Polymer type *
                  </label>
                  <select
                    id="inq-polymer"
                    name="polymerType"
                    required
                    className={inputClasses}
                  >
                    <option value="">Select polymer type</option>
                    {polymerTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="inq-application" className={labelClasses}>
                    Application
                  </label>
                  <input
                    id="inq-application"
                    name="application"
                    className={inputClasses}
                    placeholder="e.g., food packaging, pipe extrusion, automotive connectors"
                  />
                </div>
              </div>

              {/* Grade details */}
              <div>
                <label htmlFor="inq-grade" className={labelClasses}>
                  Grade or specification details
                </label>
                <input
                  id="inq-grade"
                  name="gradeDetails"
                  className={inputClasses}
                  placeholder="e.g., PP homo MFI 12, HDPE blow molding, PA6-GF30 equivalent to Zytel 70G33L"
                />
              </div>

              {/* Quantity + Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-quantity" className={labelClasses}>
                    Estimated quantity (MT/month) *
                  </label>
                  <select
                    id="inq-quantity"
                    name="quantity"
                    required
                    className={inputClasses}
                  >
                    <option value="">Select quantity</option>
                    {quantities.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
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
              </div>

              {/* Specific requirements */}
              <div>
                <label htmlFor="inq-requirements" className={labelClasses}>
                  Any specific requirements
                </label>
                <textarea
                  id="inq-requirements"
                  name="requirements"
                  rows={3}
                  className={`${inputClasses} resize-none`}
                  placeholder="e.g., UL listed, FDA food contact, REACH registered, specific MFI range, color requirements"
                />
              </div>

              {/* Visual divider between requirement and contact info */}
              <div className="border-t border-white/[0.06] pt-5" />

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-name" className={labelClasses}>
                    Your name *
                  </label>
                  <input
                    id="inq-name"
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="inq-company" className={labelClasses}>
                    Company name *
                  </label>
                  <input
                    id="inq-company"
                    name="company"
                    required
                    autoComplete="organization"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  />
                </div>
                <div>
                  <label htmlFor="inq-phone" className={labelClasses}>
                    Phone / WhatsApp
                  </label>
                  <input
                    id="inq-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClasses}
                    placeholder="Include country code, e.g., +84 936 xxx xxx"
                  />
                </div>
              </div>

              {/* How did you find us */}
              <div className="max-w-xs">
                <label htmlFor="inq-source" className={labelClasses}>
                  How did you find us?
                </label>
                <select
                  id="inq-source"
                  name="source"
                  className={inputClasses}
                >
                  <option value="">Select</option>
                  {sources.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-ticker-red text-sm font-sans">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit requirement"}
              </button>
            </form>
          </div>
        )}

        {/* Secondary CTA — below form */}
        {!submitted && (
          <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
            <p className="font-sans text-sm text-body-text mb-1">
              <a
                href="https://www.linkedin.com/newsletters/the-polymer-compass-7444056500781694976/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-light font-medium transition-colors duration-200"
              >
                Subscribe to The Polymer Compass
              </a>
            </p>
            <p className="font-sans text-xs text-muted">
              Free market intelligence for polymer distributors. Twice weekly.
            </p>
            {/* Catalog CTA — uncomment when catalog launches
            <p className="font-sans text-sm text-body-text mt-4">
              <a href="/catalog" className="text-teal hover:text-teal-light font-medium transition-colors duration-200">
                Browse the grade catalog
              </a>
              <span className="text-xs text-muted block mt-0.5">
                Search Chinese polymer grades by properties, application, or Western equivalent.
              </span>
            </p>
            */}
          </div>
        )}
      </div>
    </section>
  );
}
