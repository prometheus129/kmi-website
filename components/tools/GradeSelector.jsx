"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { getAttribution, trackFormSubmit, trackFormStart, trackEvent } from "@/lib/tracking";
import {
  APPLICATIONS,
  APPLICATION_GROUPS,
  GRADES,
  GRADE_ORDER,
  SHARED_SPEC,
  recommend,
} from "./gradeSelector";

const labelCls = "block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2";
const inputCls =
  "w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white font-mono placeholder:text-muted focus:border-teal focus:outline-none";

export default function GradeSelector() {
  // Selection
  const [appId, setAppId] = useState("");
  const [refineId, setRefineId] = useState("");

  // Lead capture
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const startedRef = useRef(false);

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackFormStart("grade_selector");
    }
  };

  const app = APPLICATIONS.find((a) => a.id === appId) || null;
  const rec = appId ? recommend(appId, refineId) : null;

  function handleAppChange(id) {
    markStarted();
    setAppId(id);
    setRefineId(""); // reset refinement when the application changes
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      return setError("Enter a work email so we can send the sample details.");
    }
    setSubmitting(true);

    const gradeLabel = rec && rec.grade ? rec.grade.id : "TBD — rep to confirm";
    const attribution = getAttribution();
    const fd = new FormData();
    fd.append("_formtype", "grade_selector_sample_request");
    fd.append("_subject", `GCC sample request — ${company || name || email} (${gradeLabel} · ${app ? app.label : "no application"})`);
    fd.append("_replyto", email);
    fd.append("name", name);
    fd.append("company", company);
    fd.append("email", email);
    fd.append("whatsapp", whatsapp);
    fd.append("country", country);
    // Selector context — the buyer's pick becomes a pre-qualified intake.
    fd.append("application", app ? app.label : "");
    fd.append("recommended_grade", gradeLabel);
    if (rec && rec.refineLabel) fd.append("gauge", rec.refineLabel);
    for (const [k, v] of Object.entries(attribution)) {
      if (v) fd.append(k, v);
    }

    const result = await submitForm(FORM_ENDPOINTS.inquiry, fd);
    if (result && result.ok) {
      trackFormSubmit("grade_selector", attribution, {
        application: app ? app.label : "",
        recommended_grade: gradeLabel,
      });
      setSubmitted(true);
    } else {
      trackEvent("form_error", { event_category: "Form", event_label: "grade_selector" });
      setError("Submission failed. Please email david@kantor-m.com directly.");
    }
    setSubmitting(false);
  }

  return (
    <div className="space-y-10">
      {/* SELECTION */}
      <div className="grid grid-cols-1 gap-5">
        <div>
          <label className={labelCls} htmlFor="gs-app">Your application</label>
          <select
            id="gs-app"
            value={appId}
            onChange={(e) => handleAppChange(e.target.value)}
            className={inputCls}
          >
            <option value="">— select your application —</option>
            {APPLICATION_GROUPS.map((group) => (
              <optgroup key={group} label={group}>
                {APPLICATIONS.filter((a) => a.group === group).map((a) => (
                  <option key={a.id} value={a.id}>{a.label}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {app && app.refine && (
          <fieldset>
            <legend className={labelCls}>{app.refine.question}</legend>
            <div className="flex flex-col sm:flex-row gap-3">
              {app.refine.options.map((opt) => {
                const checked = refineId ? refineId === opt.id : !!opt.default;
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded border cursor-pointer transition-colors duration-150 text-sm font-mono ${
                      checked
                        ? "border-teal bg-teal/[0.08] text-white"
                        : "border-white/15 bg-navy-deep text-body-text hover:border-white/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gs-refine"
                      value={opt.id}
                      checked={checked}
                      onChange={() => setRefineId(opt.id)}
                      className="accent-[#2a9d8f]"
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}
      </div>

      {/* RECOMMENDATION */}
      {rec && rec.grade ? (
        <div className="p-6 rounded-lg bg-gold/[0.08] border-l-2 border-gold/50 border-y border-r border-white/10">
          <p className="font-mono text-[11px] uppercase tracking-[2px] text-gold/80 mb-3">
            Starting grade for {rec.application.label.toLowerCase()}
          </p>
          <p className="text-2xl lg:text-3xl text-white font-serif leading-snug mb-2">
            <span className="text-gold font-mono font-bold">{rec.grade.id}</span>{" "}
            <span className="text-base lg:text-lg text-body-text font-sans">
              — top cut (D97) {rec.grade.d97}, median (D50) {rec.grade.d50}
            </span>
          </p>
          <p className="text-sm lg:text-base text-body-text leading-relaxed">{rec.why}</p>
          <p className="text-xs text-muted mt-3">
            A starting point, not a verdict — qualify it on your own line before you commit. That is what the free
            sample below is for.
          </p>
        </div>
      ) : rec ? (
        <div className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
          <p className="font-mono text-[11px] uppercase tracking-[2px] text-teal/80 mb-3">
            Let's pick it together
          </p>
          <p className="text-sm lg:text-base text-body-text leading-relaxed">
            If your application isn't on the list, the grade is still a straightforward call — it follows your
            product's gauge and surface demands. Request a sample below and reply with your application, gauge or
            wall thickness, and the spec you run today; we'll recommend the grade and send it with a per-lot COA.
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-lg bg-white/[0.02] border border-dashed border-white/15">
          <p className="text-sm text-muted leading-relaxed">
            Pick an application above to get a grade. The selector applies one rule: match the top cut (D97) to
            your product's gauge — the thinner and glossier the product, the finer the grade.
          </p>
        </div>
      )}

      {/* GRADE LADDER — where the pick sits on the fineness axis */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-teal/80 mb-3">
          The KC Series ladder — finest to coarsest
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {GRADE_ORDER.map((gid) => {
            const g = GRADES[gid];
            const on = rec && rec.grade && rec.grade.id === gid;
            return (
              <div
                key={gid}
                className={`p-4 rounded-lg border text-center transition-colors duration-200 ${
                  on ? "border-gold/60 bg-gold/[0.1]" : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <p className={`font-mono font-bold text-lg ${on ? "text-gold" : "text-white"}`}>{g.id}</p>
                <p className="font-mono text-xs text-body-text mt-1">D97 {g.d97}</p>
                <p className="text-[11px] text-muted mt-1">{g.cut}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* COATED VS UNCOATED — orthogonal decision */}
      {rec && (
        <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10">
          <p className="font-mono text-[11px] uppercase tracking-[2px] text-muted mb-2">
            Coated or uncoated — a separate decision
          </p>
          <p className="text-sm text-body-text leading-relaxed">
            {rec.coatingNote}{" "}
            <Link
              href="/insights/coated-vs-uncoated-calcium-carbonate-when-to-use-which"
              className="text-teal hover:text-teal-light underline underline-offset-2 transition-colors"
            >
              When to use which →
            </Link>
          </p>
        </div>
      )}

      {/* SHARED SPEC — same chemistry on every grade */}
      <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10">
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-muted mb-3">
          Every grade, same chemistry — the ladder is a particle-size decision
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {SHARED_SPEC.map((s) => (
            <p key={s.k} className="font-mono text-xs text-body-text">
              <span className="text-muted">{s.k}</span> <span className="text-white">{s.v}</span>
            </p>
          ))}
        </div>
        <p className="text-xs text-muted mt-3 leading-relaxed">
          Values typical, confirmed per lot on the certificate of analysis. The accredited heavy-metals panel is in
          progress and travels with the COA once complete — relevant if your end-use is food-contact.
        </p>
      </div>

      {/* LEAD CAPTURE */}
      <div className="p-6 lg:p-8 rounded-lg bg-teal/[0.06] border border-teal/20">
        {submitted ? (
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Spec received.</h3>
            <p className="text-sm text-body-text leading-relaxed">
              We will send a free sample (under a tonne) with a per-lot certificate of analysis, dispatched within
              48 hours, for your lab to qualify against what you run today. We will be in touch at {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-1">
                Qualify it on your own line
              </h3>
              <p className="text-sm text-body-text leading-relaxed">
                A free sample (under a tonne){rec && rec.grade ? ` of ${rec.grade.id}` : ""} with a per-lot
                certificate of analysis, dispatched within 48 hours. Your application comes with the request, so the
                sample matches your line — not a generic pack.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls} htmlFor="gs-name">Name</label>
                <input id="gs-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="gs-company">Company</label>
                <input id="gs-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="gs-email">Work email</label>
                <input id="gs-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="gs-whatsapp">WhatsApp / phone (optional)</label>
                <input id="gs-whatsapp" type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="gs-country">Country</label>
                <input id="gs-country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} className={inputCls} />
              </div>
            </div>
            {error && <p className="text-sm text-gold">{error}</p>}
            <button type="submit" disabled={submitting}
              className="w-full sm:w-auto bg-gold text-navy-deep font-sans font-semibold text-sm px-8 py-3.5 rounded hover:brightness-110 transition-all duration-200 disabled:opacity-60 shadow-[0_2px_12px_rgba(212,168,67,0.25)]">
              {submitting ? "Sending…" : "Request a free sample"}
            </button>
            <p className="text-xs text-muted leading-relaxed">
              A recommendation, not a quote — no obligation. Your selection is used only to match the sample to your
              line. See our{" "}
              <Link href="/privacy" className="text-teal hover:text-teal-light">privacy policy</Link>.
            </p>
          </form>
        )}
      </div>

      {/* CROSS-LINKS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/insights/which-calcium-carbonate-grade-for-your-application"
          className="block p-5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-gold/30 transition-colors duration-200 group"
        >
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-2">The full logic</p>
          <p className="text-sm text-white font-semibold group-hover:text-gold-light transition-colors">
            Which grade for your application? The particle-size guide →
          </p>
        </Link>
        <Link
          href="/calcium-carbonate/filler-economics"
          className="block p-5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-gold/30 transition-colors duration-200 group"
        >
          <p className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted mb-2">White line?</p>
          <p className="text-sm text-white font-semibold group-hover:text-gold-light transition-colors">
            Run the TiO₂ economics on your own numbers →
          </p>
        </Link>
      </div>
    </div>
  );
}
