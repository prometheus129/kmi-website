"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { getAttribution, trackFormSubmit, trackFormStart, trackEvent, trackCTA } from "@/lib/tracking";
import {
  matchWithdrawnLab,
  CPSC_LAB_SEARCH_URL,
  LAST_VERIFIED,
} from "./labStatus";

// The report red-flags self-check, condensed from /compliance/fake-test-report-red-flags.
// A clean lab is necessary, not sufficient — the document itself can still be forged or
// mismatched, so every verdict carries this checklist.
const REPORT_RED_FLAGS = [
  "The report does not match your order — product, material, batch/lot, supplier name, or dates that predate your production run.",
  "Required ISO/IEC 17025 elements are missing — report ID, test method, sample description, dates, results with units, signatory.",
  "The accreditation does not hold up — no accreditation mark, a scope that does not cover the test, or a certificate number that traces to a different lab.",
  "The lab is not in any accreditor's directory (CNAS for Chinese labs, A2LA/ANAB in the US).",
  "A digital signature on the PDF is broken or absent on a lab that signs its files.",
  "The supplier does not want you contacting the issuing lab — even to confirm a report number is genuine.",
];

export default function LabStatusChecker() {
  const [labName, setLabName] = useState("");
  const [labCode, setLabCode] = useState("");
  const [ruleCited, setRuleCited] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [monitorOptin, setMonitorOptin] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState(null);
  const startedRef = useRef(false);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart("lab_status_checker");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!labName.trim() && !labCode.trim())
      return setError("Enter your testing lab's name or its CPSC lab ID.");
    if (!email || !email.includes("@"))
      return setError("Enter a work email to get your result and the document checklist.");

    setSubmitting(true);

    const match = matchWithdrawnLab(labName, labCode);
    const labStatus = match ? "withdrawn" : "not_on_withdrawn_list";

    // Lead capture — best effort; the verdict renders regardless.
    const attribution = getAttribution();
    const formData = new FormData();
    formData.append("_formtype", "lab_status_check");
    formData.append(
      "_subject",
      `CertDesk Lab Status Check: ${labName || labCode} — ${labStatus}`
    );
    formData.append("_replyto", email);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("lab_name", labName);
    formData.append("lab_code", labCode);
    formData.append("rule_cited", ruleCited);
    formData.append("lab_status", labStatus);
    formData.append("matched_lab_id", match ? match.lab.id : "");
    formData.append("request_type", "lab-status-check");
    formData.append("monitor_optin", monitorOptin ? "yes" : "no");
    for (const [key, value] of Object.entries(attribution)) {
      if (value) formData.append(key, value);
    }

    const result = await submitForm(FORM_ENDPOINTS.inquiry, formData);
    if (result && result.ok) {
      // Carry request_type + the screen outcome so SKU-level intent and the
      // withdrawn-vs-clean split are queryable in GA4.
      trackFormSubmit("lab_status_checker", attribution, {
        request_type: "lab-status-check",
        lab_status: labStatus,
        monitor_optin: monitorOptin ? "yes" : "no",
      });
    } else {
      // POST failed — the lead did not land. Don't count it as a captured lead;
      // surface form_error so the loss is visible in GA4. Verdict still renders.
      trackEvent("form_error", {
        event_category: "Form",
        event_label: "lab_status_checker",
      });
    }

    setResults({ match, labName, labCode, ruleCited, monitorOptin, email });
    setSubmitting(false);
  }

  if (results) {
    return (
      <div className="space-y-8">
        {results.match ? (
          <WithdrawnVerdict result={results} />
        ) : (
          <CleanVerdict result={results} />
        )}

        {/* Report self-check — applies in both states. */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-white mb-2">
            Now check the report itself
          </h2>
          <p className="text-sm text-body-text leading-relaxed mb-4">
            A lab's standing is one layer. The document in your hands can still be
            forged, edited, or genuine-but-about-different-goods. Run these red
            flags against the report you hold:
          </p>
          <ul className="space-y-2.5">
            {REPORT_RED_FLAGS.map((flag) => (
              <li
                key={flag}
                className="flex gap-3 text-sm text-body-text leading-relaxed p-3 rounded border border-white/10 bg-white/[0.02]"
              >
                <span className="text-gold font-bold leading-none mt-0.5">!</span>
                <span>{flag}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted leading-relaxed mt-3">
            Full detail:{" "}
            <Link
              href="/compliance/fake-test-report-red-flags"
              className="text-teal hover:text-teal-light"
            >
              fake test report red flags
            </Link>{" "}
            and the step-by-step{" "}
            <Link
              href="/compliance/how-to-verify-supplier-test-report"
              className="text-teal hover:text-teal-light"
            >
              report verification walkthrough
            </Link>
            .
          </p>
        </section>

        {/* Honesty fence. */}
        <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
          <p className="text-xs text-muted leading-relaxed">
            This free screen checks your lab against CPSC&apos;s published
            withdrawals and points you to the official, rule-specific check. It is
            a diligence screen, not an accredited determination — it never grounds
            a Children&apos;s Product Certificate, which must rest on testing from a
            CPSC-accepted, ISO/IEC 17025-accredited laboratory.{" "}
            <Link href="/compliance/how-we-verify" className="text-teal hover:text-teal-light">
              How CertDesk verifies
            </Link>
            .
          </p>
        </div>

        {/* Escalation. */}
        <div className="p-6 rounded-lg bg-teal/[0.07] border border-teal/20">
          <h3 className="font-serif text-xl font-bold text-white mb-2">
            A free screen confirms the lab — not that the report describes your
            material
          </h3>
          <p className="text-sm text-body-text leading-relaxed mb-4">
            Confirming a lab&apos;s status and a report number tells you the paper
            is real. It cannot tell you the material in your container is what the
            certificate claims — that is where regrind, resin swaps, and
            genuine-report-wrong-product slip through. CertDesk closes both layers:
            a <span className="text-white font-semibold">$199 report verification</span>{" "}
            (anatomy, accreditation, CPSC acceptance for your rule, confirmed with
            the issuing lab) and a{" "}
            <span className="text-white font-semibold">$499 material verification</span>{" "}
            (the resin tested against its TDS at origin, before the container moves).
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/compliance/verify-request"
              onClick={() => trackCTA("cta_click", "labcheck_verify_request", "/compliance/verify-request")}
              className="inline-block bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
            >
              Ask CertDesk to verify it
            </Link>
            <Link
              href="/compliance/services"
              onClick={() => trackCTA("cta_click", "labcheck_services", "/compliance/services")}
              className="inline-block border border-white/20 text-white font-sans font-semibold text-sm px-6 py-3 rounded hover:border-teal/60 transition-colors duration-200"
            >
              See services and pricing
            </Link>
          </div>
        </div>

        {results.monitorOptin && (
          <p className="text-xs text-muted leading-relaxed">
            You opted in to lab-status monitoring — if CPSC withdraws acceptance
            from the lab you entered, we will email {results.email}. CPSC posts
            adverse actions to its website, not your inbox; this is the alert that
            catches it.
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
          Testing lab name
        </label>
        <input
          type="text"
          value={labName}
          onChange={(e) => {
            markStarted();
            setLabName(e.target.value);
          }}
          placeholder="e.g. Shenzhen HUAK Testing Technology Co., Ltd."
          className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
            CPSC lab ID (optional)
          </label>
          <input
            type="text"
            value={labCode}
            onChange={(e) => {
              markStarted();
              setLabCode(e.target.value);
            }}
            placeholder="e.g. 1710"
            className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
          />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2">
            Rule / standard cited (optional)
          </label>
          <input
            type="text"
            value={ruleCited}
            onChange={(e) => {
              markStarted();
              setRuleCited(e.target.value);
            }}
            placeholder="e.g. ASTM F963, 16 CFR 1303"
            className="w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-muted focus:border-teal focus:outline-none"
          />
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

      <label className="flex items-center gap-3 text-sm text-body-text cursor-pointer">
        <input
          type="checkbox"
          checked={monitorOptin}
          onChange={() => setMonitorOptin(!monitorOptin)}
          className="accent-teal"
        />
        Email me if CPSC withdraws acceptance from this lab later
      </label>

      {error && <p className="text-sm text-gold">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto bg-teal text-navy-deep font-sans font-semibold text-sm px-8 py-3.5 rounded hover:bg-teal-light transition-colors duration-200 disabled:opacity-60"
      >
        {submitting ? "Checking…" : "Check my lab's status"}
      </button>

      <p className="text-xs text-muted leading-relaxed">
        Free screen against CPSC&apos;s for-cause lab withdrawals (last verified{" "}
        {LAST_VERIFIED}) plus a guided check on the official registry. You get the
        result on screen and an emailed copy. No spam, no list-selling.
      </p>
    </form>
  );
}

function WithdrawnVerdict({ result }) {
  const { lab } = result.match;
  return (
    <div className="p-5 rounded-lg bg-gold/[0.1] border border-gold/40">
      <p className="font-mono text-[10px] uppercase tracking-[2px] text-gold mb-2">
        CPSC acceptance withdrawn
      </p>
      <p className="text-base text-white font-semibold leading-relaxed mb-3">
        {lab.name} (CPSC Lab ID {lab.id}) lost CPSC acceptance.
      </p>
      <p className="text-sm text-body-text leading-relaxed mb-3">
        {lab.action} on {lab.withdrawnDate}. CPSC&apos;s stated basis:{" "}
        {lab.basis} If a Children&apos;s Product Certificate in your files rests on
        a report from this lab, that certificate stopped working — for the January
        2026 withdrawals, CPSC stated existing certifications were no longer
        accepted, with no grace period.
      </p>
      <p className="text-sm text-body-text leading-relaxed mb-3">
        <span className="text-white font-semibold">What to do:</span> obtain new
        testing and certification from a properly accredited, CPSC-accepted lab
        before importing or selling the affected products. Confirm the replacement
        lab covers the specific rule on your certificate.
      </p>
      <p className="text-xs text-muted leading-relaxed">
        Source: {lab.source} Background:{" "}
        <Link
          href="/compliance/is-your-testing-lab-still-cpsc-accepted"
          className="text-teal hover:text-teal-light"
        >
          Is your testing lab still CPSC-accepted?
        </Link>
      </p>
    </div>
  );
}

function CleanVerdict({ result }) {
  return (
    <div className="p-5 rounded-lg bg-teal/[0.08] border border-teal/25">
      <p className="font-mono text-[10px] uppercase tracking-[2px] text-teal mb-2">
        Not on the withdrawn list — verify acceptance yourself
      </p>
      <p className="text-base text-white font-semibold leading-relaxed mb-3">
        {result.labName || `Lab ID ${result.labCode}`}{" "}
        is not on CertDesk&apos;s list of CPSC for-cause lab withdrawals.
      </p>
      <p className="text-sm text-body-text leading-relaxed mb-3">
        That is a good sign — but it is not a clearance. CertDesk tracks the labs
        CPSC has withdrawn for cause, not the full live registry of accepted labs,
        and CPSC acceptance is{" "}
        <span className="text-white font-semibold">rule-specific</span>: a lab
        accepted for one children&apos;s product safety rule is not thereby
        accepted for another. The authoritative check is CPSC&apos;s own search.
      </p>
      <ol className="text-sm text-body-text leading-relaxed space-y-1.5 list-decimal list-inside mb-3">
        <li>
          Open the{" "}
          <a
            href={CPSC_LAB_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-teal-light"
          >
            CPSC accepted-lab search
          </a>
          .
        </li>
        <li>Search by lab name or CPSC Lab ID, then search again by rule.</li>
        <li>
          Confirm the lab is listed{" "}
          {result.ruleCited ? (
            <>
              for <span className="text-white font-semibold">{result.ruleCited}</span>{" "}
              specifically
            </>
          ) : (
            "for the exact rule your certificate cites"
          )}{" "}
          — a withdrawn lab no longer appears as accepted.
        </li>
      </ol>
      <p className="text-xs text-muted leading-relaxed">
        Why the careful wording:{" "}
        <Link
          href="/compliance/is-your-testing-lab-still-cpsc-accepted"
          className="text-teal hover:text-teal-light"
        >
          rule-specific acceptance, and how withdrawals work
        </Link>
        .
      </p>
    </div>
  );
}
