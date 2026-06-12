"use client";

import { useState } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { getAttribution, trackFormSubmit } from "@/lib/tracking";

const REQUEST_TYPES = [
  { id: "readiness-review", label: "July 8 Readiness Review — review my compliance documents ($250)" },
  { id: "report-verification", label: "Verify a supplier test report or certificate ($199)" },
  { id: "material-verification", label: "Test the material against its TDS ($399, includes report check)" },
  { id: "not-sure", label: "Not sure — describe my situation" },
];

export default function VerifyRequestForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [requestType, setRequestType] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!requestType) return setError("Pick what you need — 'not sure' counts.");
    if (!email || !email.includes("@"))
      return setError("Enter a work email so we can reply.");

    setSubmitting(true);
    const attribution = getAttribution();
    const formData = new FormData();
    formData.append("_formtype", "verification_request");
    formData.append("_subject", `CertDesk request: ${requestType} — ${company || email}`);
    formData.append("_replyto", email);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("request_type", requestType);
    formData.append("product", product);
    formData.append("message", message);
    for (const [key, value] of Object.entries(attribution)) {
      if (value) formData.append(key, value);
    }

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    trackFormSubmit("verification_request", attribution);
    setSubmitting(false);
    if (result.ok) {
      setDone(true);
    } else {
      setError(result.error || "Submission failed — please try again.");
    }
  }

  if (done) {
    return (
      <div className="p-6 rounded-lg bg-teal/[0.07] border border-teal/20">
        <h2 className="font-serif text-xl font-bold text-white mb-3">
          Got it — we reply within one business day.
        </h2>
        <p className="text-sm text-body-text leading-relaxed mb-3">
          You will hear from a real person at the desk. If your request involves
          a test report or certificate, have the file ready to attach when we
          reply. For material testing, we will confirm scope, sample logistics,
          and turnaround before anything is billed.
        </p>
        <p className="text-sm text-body-text leading-relaxed">
          Meanwhile, the free{" "}
          <Link href="/compliance/deadline-checker" className="text-teal hover:text-teal-light">
            Deadline Checker
          </Link>{" "}
          maps which rules and dates apply to your products.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          What do you need?
        </label>
        <div className="space-y-2">
          {REQUEST_TYPES.map((t) => (
            <label
              key={t.id}
              className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer text-sm transition-colors duration-150 ${
                requestType === t.id
                  ? "border-teal/60 bg-teal/[0.08] text-white"
                  : "border-white/10 text-body-text hover:border-white/25"
              }`}
            >
              <input
                type="radio"
                name="requestType"
                checked={requestType === t.id}
                onChange={() => setRequestType(t.id)}
                className="accent-teal"
              />
              {t.label}
            </label>
          ))}
        </div>
      </div>

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

      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          Product (optional)
        </label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="e.g. children's silicone bowls, PP food containers"
          className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
        />
      </div>

      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          Anything we should know? (optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Deadline pressure, supplier situation, what made you suspicious — anything useful."
          className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
        />
      </div>

      {error && <p className="text-sm text-gold">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-teal text-navy-deep font-sans font-semibold text-sm px-8 py-3.5 rounded hover:bg-teal-light transition-colors duration-200 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send the request"}
      </button>

      <p className="text-xs text-muted leading-relaxed">
        No payment now — we confirm scope and turnaround first, then invoice.
        Flat fees as listed; nothing starts until you approve.
      </p>
    </form>
  );
}
