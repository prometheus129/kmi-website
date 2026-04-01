"use client";

import { useState } from "react";
import RevealDiv from "@/components/RevealDiv";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { t } from "@/lib/terminal-i18n";

const polymerGrades = [
  "PP",
  "PE (HDPE)",
  "PE (LDPE/LLDPE)",
  "PA6",
  "ABS",
  "PVC",
  "PET",
  "Engineering Polymers",
];

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-white/[0.1] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors";

const labelClasses =
  "block font-sans text-[10px] font-bold uppercase tracking-[2px] text-body-text mb-2";

export default function SubscriptionForm({ locale = "en" }) {
  const text = t(locale).form;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGrades, setSelectedGrades] = useState([]);

  function toggleGrade(grade) {
    setSelectedGrades((prev) =>
      prev.includes(grade)
        ? prev.filter((g) => g !== grade)
        : [...prev, grade]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    formData.set("grades", selectedGrades.join(", "));
    formData.set("locale", locale);

    const result = await submitForm(FORM_ENDPOINTS.subscription, formData);
    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setError(result.error);
    }
  }

  if (submitted) {
    return (
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 ">
        <div className="max-w-[600px] mx-auto text-center">
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
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            {text.successTitle}
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed">
            {text.successBody}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 " id="subscribe">
      <div className="max-w-[640px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              {text.label}
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-3">
              {text.title}
            </h2>
            <p className="font-sans text-[15px] text-body-text">
              {text.subtitle}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-5 text-[11px] text-muted font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                Daily intelligence for polymer distributors
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                8 markets covered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                No credit card required
              </span>
            </div>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email — primary field */}
            <div>
              <label htmlFor="sub-email" className={labelClasses}>
                {text.email}
              </label>
              <input
                id="sub-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClasses}
                placeholder={text.emailPlaceholder}
              />
            </div>

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sub-firstname" className={labelClasses}>
                  {text.firstName}
                </label>
                <input
                  id="sub-firstname"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  className={inputClasses}
                  placeholder={text.firstNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="sub-lastname" className={labelClasses}>
                  {text.lastName}
                </label>
                <input
                  id="sub-lastname"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  className={inputClasses}
                  placeholder={text.lastNamePlaceholder}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="sub-company" className={labelClasses}>
                {text.company}
              </label>
              <input
                id="sub-company"
                name="company"
                required
                autoComplete="organization"
                className={inputClasses}
                placeholder={text.companyPlaceholder}
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="sub-country" className={labelClasses}>
                {text.country}
              </label>
              <input
                id="sub-country"
                name="country"
                required
                autoComplete="country-name"
                className={inputClasses}
                placeholder={text.countryPlaceholder}
              />
            </div>

            {/* Polymer Grades — optional, reduces friction */}
            <fieldset>
              <legend className={labelClasses}>
                {text.grades}
              </legend>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Select polymer grades">
                {polymerGrades.map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => toggleGrade(grade)}
                    aria-pressed={selectedGrades.includes(grade)}
                    className={`px-4 py-2 rounded-lg font-sans text-xs font-medium border transition-colors ${
                      selectedGrades.includes(grade)
                        ? "bg-teal text-white border-teal"
                        : "bg-white/[0.04] text-body-text border-white/[0.1] hover:border-teal/50"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Phone — optional, captured later in relationship */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="sub-phone" className={labelClasses}>
                  {text.phone}
                </label>
                <input
                  id="sub-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                  placeholder={text.phonePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="sub-app" className={labelClasses}>
                  {text.messagingApp}
                </label>
                <input
                  id="sub-app"
                  name="messagingApp"
                  className={inputClasses}
                  placeholder={text.messagingAppPlaceholder}
                />
              </div>
            </div>

            {/* Submit */}
            {error && (
              <div className="p-4 rounded-lg bg-ticker-red/[0.08] border border-ticker-red/20 text-sm text-body-text">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gold text-navy-deep font-semibold text-sm tracking-wider py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? text.submitting : text.cta}
            </button>

            <p className="text-center text-xs text-muted font-sans">
              {text.footnote}
            </p>
          </form>
        </RevealDiv>
      </div>
    </section>
  );
}
