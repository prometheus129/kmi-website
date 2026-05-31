"use client";

import { useState, useEffect } from "react";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { trackFormSubmit, getAttribution } from "@/lib/tracking";

export default function CodevApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [utmParams, setUtmParams] = useState({});
  const [verticalPrefill, setVerticalPrefill] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Capture UTM parameters for attribution
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

    // Allow ?vertical=ce or ?vertical=robotics to prefill the dropdown
    // (e.g., for QR codes baked into each one-pager PDF)
    const vertical = params.get("vertical");
    if (vertical === "ce" || vertical === "robotics" || vertical === "other") {
      setVerticalPrefill(vertical);
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

    const attribution = getAttribution();
    for (const [key, val] of Object.entries(attribution)) {
      if (val) formData.append(key, val);
    }

    const company = formData.get("company") || "Unknown";
    const vertical = formData.get("vertical") || "Unknown";
    formData.append(
      "_subject",
      `Co-Dev Pilot Application: ${company} (${vertical})`
    );
    formData.append("_replyto", formData.get("email"));

    const result = await submitForm(FORM_ENDPOINTS.codev, formData);
    if (result.ok) {
      setSubmitted(true);
      trackFormSubmit("codev-pilot");
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150";
  const selectClasses = `${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2394A3B8%27 stroke-width=%272%27%3e%3cpath d=%27M6 9l6 6 6-6%27/%3e%3c/svg%3e')] bg-no-repeat bg-[length:18px] bg-[right_14px_center] pr-12`;
  const labelClasses =
    "block font-sans text-[11px] font-bold uppercase tracking-[3px] text-body-text mb-2";

  if (submitted) {
    return (
      <div className="bg-white/[0.03] border border-teal/20 rounded-xl p-8 lg:p-10 text-center max-w-[640px] mx-auto">
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
          Application received
        </h3>
        <p className="font-sans text-base text-body-text leading-relaxed mb-2 max-w-[520px] mx-auto">
          We&apos;ll come back to you within{" "}
          <strong className="text-white">48 hours</strong> with an initial
          read on your spec and whether it&apos;s a fit for the Q3 pilot
          cohort.
        </p>
        <p className="font-sans text-sm text-muted">
          Every application reaches David Wu (founder) directly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 sm:p-8 lg:p-10 max-w-[720px] mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_formtype" value="codev-pilot" />

        {/* Name + Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="codev-name" className={labelClasses}>
              Your name *
            </label>
            <input
              id="codev-name"
              name="name"
              required
              autoComplete="name"
              className={inputClasses}
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="codev-role" className={labelClasses}>
              Role / title *
            </label>
            <input
              id="codev-role"
              name="role"
              required
              autoComplete="organization-title"
              className={inputClasses}
              placeholder="e.g., Founder, Head of Hardware, Materials Eng."
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="codev-company" className={labelClasses}>
            Company *
          </label>
          <input
            id="codev-company"
            name="company"
            required
            autoComplete="organization"
            className={inputClasses}
            placeholder="Your company"
          />
        </div>

        {/* Email + Phone/WeChat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="codev-email" className={labelClasses}>
              Email *
            </label>
            <input
              id="codev-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClasses}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="codev-contact" className={labelClasses}>
              Phone / WeChat
            </label>
            <input
              id="codev-contact"
              name="phoneOrWechat"
              autoComplete="tel"
              className={inputClasses}
              placeholder="Optional, fastest channel"
            />
          </div>
        </div>

        {/* Applicant type + Vertical */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="codev-applicant" className={labelClasses}>
              You are a... *
            </label>
            <select
              id="codev-applicant"
              name="applicantType"
              required
              defaultValue=""
              className={selectClasses}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="brand">Hardware brand (own product)</option>
              <option value="oem">OEM / contract manufacturer</option>
              <option value="design-agency">Design or product agency</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="codev-vertical" className={labelClasses}>
              Vertical *
            </label>
            <select
              id="codev-vertical"
              name="vertical"
              required
              defaultValue={verticalPrefill}
              className={selectClasses}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="ce">Consumer Electronics</option>
              <option value="robotics">Robotics &amp; Mechatronics</option>
              <option value="other">Other hardware vertical</option>
            </select>
          </div>
        </div>

        {/* Pain — freeform */}
        <div>
          <label htmlFor="codev-pain" className={labelClasses}>
            Tell us about your part — what is it, current material, what&apos;s the pain? *
          </label>
          <textarea
            id="codev-pain"
            name="pain"
            required
            rows={5}
            className={`${inputClasses} resize-none`}
            placeholder="e.g., USB-C connector housing, currently using PA66+GF30, color drift batch-to-batch and cavity count capped at 16 — would like to explore high-flow grades for thinner walls."
          />
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="codev-timeline" className={labelClasses}>
            Timeline *
          </label>
          <select
            id="codev-timeline"
            name="timeline"
            required
            defaultValue=""
            className={selectClasses}
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="now">Actively sourcing now</option>
            <option value="next-quarter">Next quarter / next product cycle</option>
            <option value="exploring">Exploring — no urgent need yet</option>
          </select>
        </div>

        {/* Anything else */}
        <div>
          <label htmlFor="codev-notes" className={labelClasses}>
            Anything else we should know?
          </label>
          <textarea
            id="codev-notes"
            name="notes"
            rows={3}
            className={`${inputClasses} resize-none`}
            placeholder="Optional. Volume estimates, regulatory constraints, key OEM partners, etc."
          />
        </div>

        {error && (
          <p className="text-ticker-red text-sm font-sans">{error}</p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto bg-gold text-navy-deep font-semibold text-base tracking-wider px-10 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Apply for the pilot"}
          </button>
          <p className="font-sans text-xs text-muted sm:max-w-[280px]">
            We respond within <span className="text-white font-medium">48 hours</span> with an
            initial read on your spec.
          </p>
        </div>
      </form>
    </div>
  );
}
