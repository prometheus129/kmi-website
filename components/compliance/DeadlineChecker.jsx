"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { getAttribution, trackFormSubmit, trackFormStart, trackEvent, trackCTA } from "@/lib/tracking";
import { PRODUCT_CATEGORIES, STATES, matchRules } from "./complianceRules";

function daysUntil(dateStr) {
  const target = new Date(`${dateStr}T00:00:00-04:00`);
  return Math.ceil((target - new Date()) / (1000 * 60 * 60 * 24));
}

export default function DeadlineChecker() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [states, setStates] = useState([]);
  const [imports, setImports] = useState(true);
  const [unverifiedReports, setUnverifiedReports] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState(null);
  const startedRef = useRef(false);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart("compliance_checker");
    }
  };

  const toggleState = (id) => {
    markStarted();
    setStates((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!category) return setError("Select your product category.");
    if (states.length === 0)
      return setError("Select where you sell — nationwide counts.");
    if (!email || !email.includes("@"))
      return setError("Enter a work email to get your results and the document checklist.");

    setSubmitting(true);

    const matched = matchRules(category, states).filter(
      (r) => !r.importOnly || imports
    );
    const inForce = matched.filter((r) => r.inForce);
    const upcoming = matched
      .filter((r) => !r.inForce && r.deadline)
      .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    // Lead capture — best effort; results render regardless.
    const attribution = getAttribution();
    const formData = new FormData();
    formData.append("_formtype", "compliance_checker");
    formData.append(
      "_subject",
      `CertDesk Deadline Checker: ${category} (${states.join(", ")})`
    );
    formData.append("_replyto", email);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("product_category", category);
    formData.append("states", states.join(", "));
    formData.append("imports", imports ? "yes" : "no");
    formData.append("unverified_reports", unverifiedReports ? "yes" : "no");
    formData.append("rules_in_force", String(inForce.length));
    formData.append("rules_upcoming", String(upcoming.length));
    formData.append(
      "matched_rules",
      matched.map((r) => r.id).join(", ")
    );
    for (const [key, value] of Object.entries(attribution)) {
      if (value) formData.append(key, value);
    }

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result && result.ok) {
      trackFormSubmit("compliance_checker", attribution);
    } else {
      // Formspree POST failed — the lead did not land. Don't count it as a
      // captured lead (no generate_lead); surface form_error so the loss is
      // visible in GA4. Results still render so the user isn't penalized.
      trackEvent("form_error", {
        event_category: "Form",
        event_label: "compliance_checker",
      });
    }

    setResults({ inForce, upcoming, unverifiedReports });
    setSubmitting(false);
  }

  if (results) {
    return (
      <div className="space-y-8">
        <div className="p-5 rounded-lg bg-gold/[0.08] border border-gold/25">
          <p className="text-sm text-body-text leading-relaxed">
            <span className="font-semibold text-white">
              {results.inForce.length + results.upcoming.length} requirements
              apply to your products
            </span>{" "}
            — {results.inForce.length} already in force,{" "}
            {results.upcoming.length} with deadlines ahead. We will send the
            matching document checklist to {email} within one business day.
            Screening result, not legal advice.
          </p>
        </div>

        {results.upcoming.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Deadlines ahead
            </h2>
            <div className="space-y-4">
              {results.upcoming.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </section>
        )}

        {results.inForce.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Already in force
            </h2>
            <div className="space-y-4">
              {results.inForce.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </section>
        )}

        {results.inForce.length + results.upcoming.length === 0 && (
          <p className="text-body-text text-sm leading-relaxed">
            No tracked rules matched this combination. That does not mean
            nothing applies — niche product rules exist beyond this screening
            set. We will follow up at your email, or you can{" "}
            <Link href="/inquiry" className="text-teal hover:text-teal-light">
              ask us directly
            </Link>
            .
          </p>
        )}

        {results.unverifiedReports && (
          <div className="p-5 rounded-lg bg-gold/[0.08] border border-gold/25">
            <p className="text-sm text-body-text leading-relaxed">
              <span className="font-semibold text-white">
                You flagged unverified supplier reports.
              </span>{" "}
              Since July 8, the data in those reports travels with your customs
              entries — and a report that fails verification fails at the worst
              possible moment.{" "}
              <Link
                href="/compliance/how-to-verify-supplier-test-report"
                className="text-teal hover:text-teal-light"
              >
                Verify them yourself
              </Link>{" "}
              or{" "}
              <Link
                href="/compliance/verify-request"
                className="text-teal hover:text-teal-light"
              >
                have CertDesk do it
              </Link>
              .
            </p>
          </div>
        )}

        <div className="p-6 rounded-lg bg-teal/[0.07] border border-teal/20">
          <h3 className="font-serif text-xl font-bold text-white mb-2">
            Want a human read on your actual documents?
          </h3>
          <p className="text-sm text-body-text leading-relaxed mb-4">
            CertDesk runs a flat-fee Readiness Review: we review the
            certificates and test reports you have, map them against the
            requirements above, and hand you a prioritized gap list.
          </p>
          <Link
            href="/compliance/services"
            onClick={() => trackCTA("cta_click", "checker_services", "/compliance/services")}
            className="inline-block bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
          >
            See services and pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          Product category
        </label>
        <select
          value={category}
          onChange={(e) => {
            markStarted();
            setCategory(e.target.value);
          }}
          className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white focus:border-teal focus:outline-none"
        >
          <option value="">Select a category…</option>
          {PRODUCT_CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          Where do you sell? (select all that apply)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {STATES.map((s) => (
            <label
              key={s.id}
              className={`flex items-center gap-3 px-4 py-2.5 rounded border cursor-pointer text-sm transition-colors duration-150 ${
                states.includes(s.id)
                  ? "border-teal/60 bg-teal/[0.08] text-white"
                  : "border-white/10 text-body-text hover:border-white/25"
              }`}
            >
              <input
                type="checkbox"
                checked={states.includes(s.id)}
                onChange={() => toggleState(s.id)}
                className="accent-teal"
              />
              {s.label}
            </label>
          ))}
        </div>
      </div>

      <label className="flex items-center gap-3 text-sm text-body-text cursor-pointer">
        <input
          type="checkbox"
          checked={imports}
          onChange={() => setImports(!imports)}
          className="accent-teal"
        />
        I import these products (from China or anywhere else)
      </label>

      <label className="flex items-center gap-3 text-sm text-body-text cursor-pointer">
        <input
          type="checkbox"
          checked={unverifiedReports}
          onChange={() => setUnverifiedReports(!unverifiedReports)}
          className="accent-teal"
        />
        I have supplier test reports or certificates I have not independently verified
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
            Work email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
            Company (optional)
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your brand or store"
            className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
          />
        </div>
      </div>

      {error && <p className="text-sm text-gold">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-teal text-navy-deep font-sans font-semibold text-sm px-8 py-3.5 rounded hover:bg-teal-light transition-colors duration-200 disabled:opacity-60"
      >
        {submitting ? "Checking…" : "Show my deadlines"}
      </button>

      <p className="text-xs text-muted leading-relaxed">
        Free screening against the federal and state rules CertDesk tracks.
        You get the result on screen plus an emailed copy with the document
        checklist. No spam, no list-selling.
      </p>
    </form>
  );
}

function RuleCard({ rule }) {
  const days = rule.deadline ? daysUntil(rule.deadline) : null;
  return (
    <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02]">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 bg-teal/[0.08] px-2.5 py-1 rounded">
          {rule.level === "federal" ? "Federal" : rule.state}
        </span>
        {days !== null && days > 0 && (
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold bg-gold/[0.1] px-2.5 py-1 rounded">
            {days} days
          </span>
        )}
        <h3 className="w-full sm:w-auto font-sans font-semibold text-white text-base">
          {rule.name}
        </h3>
      </div>
      <p className="text-sm text-body-text leading-relaxed mb-2">{rule.headline}</p>
      <p className="text-xs text-muted leading-relaxed mb-3">{rule.detail}</p>
      <p className="font-mono text-[10px] uppercase tracking-[2px] text-white/50 mb-1.5">
        Documents you need
      </p>
      <ul className="text-xs text-body-text space-y-1 list-disc list-inside">
        {rule.documents.map((doc) => (
          <li key={doc}>{doc}</li>
        ))}
      </ul>
      {rule.link && (
        <Link
          href={rule.link}
          className="inline-block mt-3 text-xs text-teal hover:text-teal-light transition-colors duration-200"
        >
          Read the full guide →
        </Link>
      )}
    </div>
  );
}
