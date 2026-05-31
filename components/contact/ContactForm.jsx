"use client";

import { useState } from "react";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { trackFormSubmit, getAttribution } from "@/lib/tracking";

const countries = [
  "Vietnam",
  "Indonesia",
  "Turkey",
  "Philippines",
  "Thailand",
  "Bangladesh",
  "Mexico",
  "Algeria",
  "Egypt",
  "Kenya",
  "Tanzania",
  "Ghana",
  "Nigeria",
  "Peru",
  "Other",
];

const inquiryTypes = [
  "The Polymer Compass Subscription",
  "Partnership / Distribution",
  "Press Inquiry",
  "General Inquiry",
];

export default function ContactForm() {
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

    const result = await submitForm(FORM_ENDPOINTS.contact, formData);
    if (result.ok) {
      setSubmitted(true);
      trackFormSubmit("contact");
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-10 text-center">
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
        <h3 className="font-serif text-2xl font-bold text-white mb-3">
          Message Received
        </h3>
        <p className="text-body-text text-sm leading-relaxed max-w-md mx-auto">
          A member of our team will respond within one business day. For urgent
          pricing requests, message us directly on WhatsApp.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-white/[0.1] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors";
  const labelClasses =
    "block font-sans text-[10px] font-bold uppercase tracking-[2px] text-body-text mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Full Name *
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className={labelClasses}>
            Company *
          </label>
          <input
            id="contact-company"
            name="company"
            required
            autoComplete="organization"
            className={inputClasses}
            placeholder="Your company"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            placeholder="+84 xxx xxx xxxx"
          />
        </div>
      </div>

      {/* Country & Inquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-country" className={labelClasses}>
            Country *
          </label>
          <select
            id="contact-country"
            name="country"
            required
            className={inputClasses}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-type" className={labelClasses}>
            Inquiry Type
          </label>
          <select id="contact-type" name="inquiryType" className={inputClasses}>
            <option value="">Select type</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your requirements — grades, volumes, destination port, timeline..."
        />
      </div>

      {error && (
        <p className="text-ticker-red text-sm font-sans">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-teal hover:bg-teal-light text-white font-sans font-semibold text-sm px-8 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
