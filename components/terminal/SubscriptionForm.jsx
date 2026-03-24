"use client";

import { useState } from "react";
import RevealDiv from "@/components/RevealDiv";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";

const countries = [
  "Vietnam",
  "Philippines",
  "Bangladesh",
  "Peru",
  "Turkey",
  "Thailand",
  "Other",
];

const messagingApps = ["Zalo", "WhatsApp", "LINE", "Viber", "Other"];

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

const volumeRanges = ["< 30 MT", "30–80 MT", "80–150 MT", "150+ MT"];

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-white/[0.1] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors";

const labelClasses =
  "block font-sans text-[10px] font-bold uppercase tracking-[2px] text-body-text mb-2";

export default function SubscriptionForm() {
  const [submitted, setSubmitted] = useState(false);
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
    const formData = new FormData(e.target);
    formData.set("grades", selectedGrades.join(", "));

    const result = await submitForm(FORM_ENDPOINTS.subscription, formData);
    if (result.ok) {
      setSubmitted(true);
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
            You&apos;re Subscribed
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed">
            Your first Morning Terminal arrives next Monday at 7 AM. A member
            of our team may reach out via your selected messaging app to
            confirm your grade preferences.
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
              SUBSCRIBE
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-3">
              Get the Morning Terminal
            </h2>
            <p className="font-sans text-[15px] text-body-text">
              30 seconds. Free for qualified distributors.
            </p>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sub-name" className={labelClasses}>
                  Full Name *
                </label>
                <input
                  id="sub-name"
                  name="name"
                  required
                  autoComplete="name"
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="sub-company" className={labelClasses}>
                  Company Name *
                </label>
                <input
                  id="sub-company"
                  name="company"
                  required
                  autoComplete="organization"
                  className={inputClasses}
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="sub-country" className={labelClasses}>
                Country *
              </label>
              <select
                id="sub-country"
                name="country"
                required
                autoComplete="country-name"
                className={inputClasses}
              >
                <option value="">Select country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Phone + Messaging App */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label htmlFor="sub-phone" className={labelClasses}>
                  Phone / Messaging *
                </label>
                <input
                  id="sub-phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                  placeholder="+84 xxx xxx xxxx"
                />
              </div>
              <div>
                <label htmlFor="sub-app" className={labelClasses}>
                  App *
                </label>
                <select
                  id="sub-app"
                  name="messagingApp"
                  required
                  className={inputClasses}
                >
                  <option value="">Select</option>
                  {messagingApps.map((app) => (
                    <option key={app} value={app}>{app}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Polymer Grades */}
            <fieldset>
              <legend className={labelClasses}>
                Primary Polymer Grades *
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

            {/* Volume */}
            <div>
              <label htmlFor="sub-volume" className={labelClasses}>
                Monthly Volume (Optional)
              </label>
              <select
                id="sub-volume"
                name="volume"
                className={inputClasses}
              >
                <option value="">Select range</option>
                {volumeRanges.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="sub-email" className={labelClasses}>
                Email (Optional)
              </label>
              <input
                id="sub-email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputClasses}
                placeholder="For web dashboard access"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold text-navy-deep font-semibold text-sm tracking-wider py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Subscribe to Morning Terminal
            </button>
          </form>
        </RevealDiv>
      </div>
    </section>
  );
}
