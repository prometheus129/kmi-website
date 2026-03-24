"use client";

import { useState } from "react";
import RevealDiv from "@/components/RevealDiv";

const countries = [
  "Vietnam",
  "Philippines",
  "Bangladesh",
  "Nigeria",
  "Peru",
  "Ghana",
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

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      messagingApp: formData.get("messagingApp"),
      grades: selectedGrades,
      volume: formData.get("volume"),
      email: formData.get("email"),
    };
    console.log("Terminal Subscription:", JSON.stringify(data, null, 2));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-light-gray py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="text-4xl mb-4">✓</div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">
            You&apos;re Subscribed
          </h2>
          <p className="font-sans text-[15px] text-slate leading-relaxed">
            Your first Morning Terminal arrives next Monday at 7 AM. A member
            of our team may reach out via your selected messaging app to
            confirm your grade preferences.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-gray py-20 lg:py-[90px] px-6 lg:px-10" id="subscribe">
      <div className="max-w-[640px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              SUBSCRIBE
            </div>
            <h2 className="font-serif text-3xl lg:text-[36px] font-bold text-navy mb-3">
              Get the Morning Terminal
            </h2>
            <p className="font-sans text-[15px] text-slate">
              30 seconds. Free for qualified distributors.
            </p>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sub-name" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                  FULL NAME *
                </label>
                <input
                  id="sub-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="sub-company" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                  COMPANY NAME *
                </label>
                <input
                  id="sub-company"
                  name="company"
                  required
                  autoComplete="organization"
                  className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="sub-country" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                COUNTRY *
              </label>
              <select
                id="sub-country"
                name="country"
                required
                autoComplete="country-name"
                className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
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
                <label htmlFor="sub-phone" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                  PHONE / MESSAGING *
                </label>
                <input
                  id="sub-phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                  placeholder="+84 xxx xxx xxxx"
                />
              </div>
              <div>
                <label htmlFor="sub-app" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                  APP *
                </label>
                <select
                  id="sub-app"
                  name="messagingApp"
                  required
                  className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
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
              <legend className="block font-sans text-xs font-semibold text-navy mb-2 tracking-wide">
                PRIMARY POLYMER GRADES *
              </legend>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Select polymer grades">
                {polymerGrades.map((grade) => (
                  <button
                    key={grade}
                    type="button"
                    onClick={() => toggleGrade(grade)}
                    aria-pressed={selectedGrades.includes(grade)}
                    className={`px-4 py-2 rounded-md font-sans text-xs font-medium border transition-colors ${
                      selectedGrades.includes(grade)
                        ? "bg-teal text-white border-teal"
                        : "bg-white text-slate border-mid-gray hover:border-teal/50"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Volume */}
            <div>
              <label htmlFor="sub-volume" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                MONTHLY VOLUME (OPTIONAL)
              </label>
              <select
                id="sub-volume"
                name="volume"
                className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
              >
                <option value="">Select range</option>
                {volumeRanges.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="sub-email" className="block font-sans text-xs font-semibold text-navy mb-1.5 tracking-wide">
                EMAIL (OPTIONAL)
              </label>
              <input
                id="sub-email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 rounded-md border border-mid-gray bg-white font-sans text-sm text-dark-text focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                placeholder="For web dashboard access (coming soon)"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-teal to-teal-light text-white font-semibold text-sm tracking-wider py-4 rounded-md shadow-[0_4px_20px_rgba(46,139,139,0.3)] hover:-translate-y-px transition-transform duration-200"
            >
              Subscribe to Morning Terminal
            </button>
          </form>
        </RevealDiv>
      </div>
    </section>
  );
}
