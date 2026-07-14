"use client";

import { useState, useRef } from "react";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import {
  getAttribution,
  trackFormStart,
  trackFormSubmit,
} from "@/lib/tracking";

/**
 * EP equivalency capture form — the landing pad for the engineering-polymers
 * funnel. Captures the fields a formulation engineer needs before a program
 * can run: grade, part, process/machine, volume, supplier, trigger.
 * Posts to the shared inquiry endpoint tagged _formtype=ep_equivalency.
 */
export default function EquivalencyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const startedRef = useRef(false);

  function handleFirstInteraction() {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart("ep_equivalency");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    const attribution = getAttribution();
    for (const [key, val] of Object.entries(attribution)) {
      if (val) formData.append(key, val);
    }

    const grade = formData.get("currentGrade") || "unspecified grade";
    formData.append("_formtype", "ep_equivalency");
    formData.append("_subject", `EP Equivalency: ${grade}`);
    formData.append("_replyto", formData.get("email"));

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result.ok) {
      setSubmitted(true);
      trackFormSubmit("ep_equivalency", attribution, {
        request_type: "ep_equivalency",
      });
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.04] font-sans text-sm text-white placeholder:text-muted focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors duration-150";
  const labelClasses =
    "block font-sans text-[11px] font-bold uppercase tracking-[2px] text-body-text mb-2";
  const optionalMark = (
    <span className="normal-case font-normal tracking-normal text-muted">
      {" "}
      — optional
    </span>
  );

  if (submitted) {
    return (
      <div className="bg-white/[0.03] border border-teal/25 rounded-xl p-8 lg:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-teal/10 border border-teal/40 text-teal flex items-center justify-center mx-auto mb-5 text-xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold text-white mb-3">
          Received.
        </h3>
        <p className="font-sans text-sm text-body-text leading-relaxed max-w-[420px] mx-auto">
          You will have a grade-match answer within 24 hours: the closest
          matching grade from our catalog, with an honest assessment of where
          it differs. The technical data sheet comes with the answer, and a
          free sample of up to 100 kg follows when you are ready to test.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFirstInteraction}
      className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 lg:p-8 space-y-5"
    >
      <div>
        <label htmlFor="ep-grade" className={labelClasses}>
          The grade you run today *
        </label>
        <input
          id="ep-grade"
          name="currentGrade"
          type="text"
          required
          placeholder="e.g. Zytel 70G33, Ultramid A3EG6, Bayblend T85"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="ep-application" className={labelClasses}>
          The part or application *
        </label>
        <input
          id="ep-application"
          name="application"
          type="text"
          required
          placeholder="e.g. connector housing, under-hood bracket"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ep-process" className={labelClasses}>
            Process and machine{optionalMark}
          </label>
          <input
            id="ep-process"
            name="processMachine"
            type="text"
            placeholder="e.g. injection molding, 250-tonne press"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="ep-volume" className={labelClasses}>
            Your annual volume{optionalMark}
          </label>
          <input
            id="ep-volume"
            name="annualVolume"
            type="text"
            placeholder="e.g. 60 tonnes per year"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ep-supplier" className={labelClasses}>
            Supplier or origin{optionalMark}
          </label>
          <input
            id="ep-supplier"
            name="currentSupplier"
            type="text"
            placeholder="e.g. local distributor, European producer"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="ep-trigger" className={labelClasses}>
            What prompted this?{optionalMark}
          </label>
          <select
            id="ep-trigger"
            name="trigger"
            defaultValue=""
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select a reason
            </option>
            <option value="price-increase">Price increase</option>
            <option value="supply-disruption">Supply disruption</option>
            <option value="brand-change">
              Grade discontinued or brand changed ownership
            </option>
            <option value="new-project">New project</option>
            <option value="cost-down">Cost-reduction program</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ep-country" className={labelClasses}>
            Country *
          </label>
          <input
            id="ep-country"
            name="country"
            type="text"
            required
            placeholder="e.g. Vietnam"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="ep-company" className={labelClasses}>
            Company{optionalMark}
          </label>
          <input
            id="ep-company"
            name="company"
            type="text"
            placeholder="Your company name"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ep-name" className={labelClasses}>
            Your name *
          </label>
          <input
            id="ep-name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="ep-email" className={labelClasses}>
            Work email *
          </label>
          <input
            id="ep-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="ep-whatsapp" className={labelClasses}>
          WhatsApp{optionalMark}
        </label>
        <input
          id="ep-whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="+84 ..."
          className={inputClasses}
        />
      </div>

      {error && (
        <p className="font-sans text-sm text-ticker-red" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center bg-teal hover:bg-teal-light text-white font-semibold text-sm tracking-wider px-6 py-3.5 rounded-lg transition-all duration-150 hover:-translate-y-px disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {submitting ? "Sending..." : "Get my grade match — free"}
      </button>

      <p className="font-sans text-xs text-muted text-center leading-relaxed">
        Answer within 24 hours. The match, the technical answers, and the
        sample (up to 100 kg) are free — we earn from the material we ship.
        Your grade and volume details are used only to prepare your answer —
        never shared.
      </p>
    </form>
  );
}
