"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FORM_ENDPOINTS, submitForm } from "@/lib/forms";
import { getAttribution, trackFormSubmit, trackFormStart, trackEvent } from "@/lib/tracking";
import { APPLICATIONS, computeTio2Lever, resinSavingPerMt } from "./fillerEconomics";

const usd0 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const usd2 = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
const clamp0 = (x) => (Number.isFinite(x) && x > 0 ? x : 0);
const n = (s) => {
  const v = parseFloat(s);
  return Number.isFinite(v) ? v : 0;
};
// Percentages can't exceed their physical bound — typed values bypass the
// input's max attribute, so clamp in the handler.
const clampPct = (s, max) => {
  const v = parseFloat(s);
  return Number.isFinite(v) && v > max ? String(max) : s;
};

const labelCls = "block font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-2";
const inputCls =
  "w-full bg-navy-deep border border-white/15 rounded px-4 py-3 text-sm text-white font-mono placeholder:text-muted focus:border-teal focus:outline-none";

export default function FillerEconomicsCalculator() {
  // Buyer inputs
  const [app, setApp] = useState("general_white");
  const [tio2Pct, setTio2Pct] = useState("5");
  const [tio2Price, setTio2Price] = useState("2500");
  const [annualMt, setAnnualMt] = useState("3000");
  const [fillerPrice, setFillerPrice] = useState("220");
  const [displacementPct, setDisplacementPct] = useState("");
  const [showResin, setShowResin] = useState(false);
  const [loadingPct, setLoadingPct] = useState("20");
  const [resinPrice, setResinPrice] = useState("1350");

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
      trackFormStart("filler_calculator");
    }
  };

  const appMeta = APPLICATIONS.find((a) => a.id === app) || APPLICATIONS[0];
  const [rangeLo, rangeHi] = appMeta.range;

  const lever = computeTio2Lever({
    tio2Pct: n(tio2Pct),
    tio2Price: n(tio2Price),
    annualMt: n(annualMt),
    fillerPrice: n(fillerPrice),
    displacementPct,
  });
  const resinMt = resinSavingPerMt(n(loadingPct), n(resinPrice), n(fillerPrice));
  const resinYr = resinMt * n(annualMt);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      return setError("Enter a work email so we can send the sample details.");
    }
    setSubmitting(true);

    const attribution = getAttribution();
    const fd = new FormData();
    fd.append("_formtype", "filler_calculator_sample_request");
    fd.append("_subject", `GCC sample request — ${company || name || email} (${appMeta.label})`);
    fd.append("_replyto", email);
    fd.append("name", name);
    fd.append("company", company);
    fd.append("email", email);
    fd.append("whatsapp", whatsapp);
    fd.append("country", country);
    // Calculator context — the buyer's own numbers become a pre-qualified intake.
    fd.append("application", appMeta.label);
    fd.append("tio2_pct", tio2Pct);
    fd.append("tio2_price_usd_mt", tio2Price);
    fd.append("annual_mt", annualMt);
    fd.append("current_filler_price_usd_mt", fillerPrice);
    if (displacementPct) fd.append("displacement_pct", displacementPct);
    if (lever.headline) fd.append("est_saving_usd_yr", String(Math.round(clamp0(lever.headline.perYr))));
    for (const [k, v] of Object.entries(attribution)) {
      if (v) fd.append(k, v);
    }

    const result = await submitForm(FORM_ENDPOINTS.inquiry, fd);
    if (result && result.ok) {
      trackFormSubmit("filler_calculator", attribution, { application: appMeta.label });
      setSubmitted(true);
    } else {
      trackEvent("form_error", { event_category: "Form", event_label: "filler_calculator" });
      setError("Submission failed. Please email david@kantor-m.com directly.");
    }
    setSubmitting(false);
  }

  return (
    <div className="space-y-10">
      {/* INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="fe-app">Application</label>
          <select
            id="fe-app"
            value={app}
            onChange={(e) => { markStarted(); setApp(e.target.value); }}
            className={inputCls}
          >
            {APPLICATIONS.map((a) => (
              <option key={a.id} value={a.id}>{a.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="fe-tio2pct">Titanium-dioxide loading (% of product)</label>
          <input id="fe-tio2pct" type="number" min="0" max="99" step="0.1" inputMode="decimal"
            value={tio2Pct} onChange={(e) => { markStarted(); setTio2Pct(clampPct(e.target.value, 99)); }} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="fe-tio2price">Your TiO₂ price (USD/MT)</label>
          <input id="fe-tio2price" type="number" min="0" step="10" inputMode="decimal"
            value={tio2Price} onChange={(e) => setTio2Price(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="fe-annual">Annual volume of this line (MT/yr)</label>
          <input id="fe-annual" type="number" min="0" step="50" inputMode="decimal"
            value={annualMt} onChange={(e) => setAnnualMt(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="fe-filler">Your current filler price (USD/MT)</label>
          <input id="fe-filler" type="number" min="0" step="10" inputMode="decimal"
            value={fillerPrice} onChange={(e) => setFillerPrice(e.target.value)} className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="fe-disp">
            Displacement you think you can reach — optional
          </label>
          <input id="fe-disp" type="number" min="0" max="100" step="1" inputMode="decimal"
            placeholder="your lab's number, not ours" value={displacementPct}
            onChange={(e) => setDisplacementPct(clampPct(e.target.value, 100))} className={inputCls} />
          <p className="text-xs text-muted mt-2">
            Leave blank to see the full range. This is a number your lab verifies on your line.
          </p>
        </div>
      </div>

      {/* LEVERAGE */}
      <div className="p-6 rounded-lg bg-gold/[0.08] border-l-2 border-gold/50 border-y border-r border-white/10">
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-gold/80 mb-3">
          Leverage — what each point of displacement is worth
        </p>
        <p className="text-xl lg:text-2xl text-white font-serif leading-snug">
          Each <span className="text-gold font-mono">1 point</span> of TiO₂ you displace ≈{" "}
          <span className="text-gold font-mono">{usd2.format(clamp0(lever.perPointMt))}</span>/MT — about{" "}
          <span className="text-gold font-mono">{usd0.format(clamp0(lever.perPointYr))}</span>/yr
        </p>
        <p className="text-xs text-muted mt-3">
          The value scales with how much you can displace. That amount is what a free sample proves on your line.
        </p>
        {lever.perPointMt < 0 && (
          <p className="text-xs text-gold mt-3">
            At these numbers your filler costs more per kilogram than the TiO₂ it would displace, so the
            TiO₂ lever doesn't pay — check the two prices. The table below is floored at $0.
          </p>
        )}
      </div>

      {/* SENSITIVITY TABLE */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-teal/80 mb-3">
          If you can displace… (your volume &amp; prices)
        </p>
        <div className="overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted font-semibold px-4 py-3">TiO₂ displaced</th>
                <th className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted font-semibold px-4 py-3 text-right">Saved / MT</th>
                <th className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted font-semibold px-4 py-3 text-right">Saved / yr</th>
              </tr>
            </thead>
            <tbody>
              {lever.sensitivity.map((row) => {
                const on = lever.nearest === row.displacementPct;
                return (
                  <tr key={row.displacementPct} className={on ? "bg-gold/[0.1]" : ""}>
                    <td className={`font-mono px-4 py-3 border-t border-white/10 ${on ? "text-white font-semibold" : "text-body-text"}`}>{row.displacementPct}%</td>
                    <td className={`font-mono px-4 py-3 border-t border-white/10 text-right ${on ? "text-white font-semibold" : "text-body-text"}`}>{usd0.format(clamp0(row.perMt))}</td>
                    <td className={`font-mono px-4 py-3 border-t border-white/10 text-right ${on ? "text-white font-semibold" : "text-body-text"}`}>{usd0.format(clamp0(row.perYr))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-body-text mt-4 leading-relaxed">
          {lever.headline && (
            <>
              At your estimate of <span className="font-mono text-white">{lever.headline.displacementPct}%</span>:
              about <span className="font-mono text-white">{usd0.format(clamp0(lever.headline.perYr))}/yr</span>.{" "}
            </>
          )}
          Typical for {appMeta.label.toLowerCase()}: <span className="font-mono text-white">{rangeLo}–{rangeHi}%</span> displacement —
          ordinary 90–96% filler sits at the low end; a ≥98 whiteness grade raises the ceiling toward the high end. Verify yours on your line.
        </p>
      </div>

      {/* HONESTY PANEL */}
      <div className="p-5 rounded-lg bg-white/[0.02] border border-white/10">
        <p className="font-mono text-[11px] uppercase tracking-[2px] text-muted mb-2">How to read this honestly</p>
        <p className="text-sm text-body-text leading-relaxed">
          <span className="text-white font-semibold">Calcium carbonate extends titanium dioxide — it does not replace it one-for-one.</span>{" "}
          TiO₂ provides the opacity; filler provides almost none. A high-whiteness (≥98) fine grade lets you pull{" "}
          <em>more</em> TiO₂ before whiteness or hiding falls out of spec than an ordinary 90–96% grade does. How far you
          can go is set by your formulation and confirmed on your own line — which is exactly what a free qualifying sample is for.
        </p>
      </div>

      {/* RESIN LEVER (secondary) */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02]">
        <button
          type="button"
          onClick={() => setShowResin((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm text-body-text hover:text-white transition-colors"
        >
          <span className="font-semibold">Second lever — resin displacement</span>
          <span className="font-mono text-muted">{showResin ? "–" : "+"}</span>
        </button>
        {showResin && (
          <div className="px-5 pb-5 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className={labelCls} htmlFor="fe-loading">Filler loading (% of compound)</label>
                <input id="fe-loading" type="number" min="0" max="80" step="1" inputMode="decimal"
                  value={loadingPct} onChange={(e) => setLoadingPct(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="fe-resin">Resin price (USD/MT)</label>
                <input id="fe-resin" type="number" min="0" step="10" inputMode="decimal"
                  value={resinPrice} onChange={(e) => setResinPrice(e.target.value)} className={inputCls} />
              </div>
            </div>
            <p className="font-mono text-lg text-white mt-4">
              {usd0.format(clamp0(resinMt))}/MT = {usd0.format(clamp0(resinYr))}/yr
            </p>
            <p className="text-xs text-muted mt-2 leading-relaxed">
              This is the value of filling <em>at all</em> — you likely already capture most of it with your current filler.
              The switch-specific gain is only the filler price difference; the real edge is the TiO₂ lever above.
            </p>
          </div>
        )}
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
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-1">Prove it on your own line</h3>
              <p className="text-sm text-body-text leading-relaxed">
                A free sample (under a tonne) with a per-lot certificate of analysis, dispatched within 48 hours. Your
                numbers above come with it, so we can talk your economics — not a claim.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls} htmlFor="fe-name">Name</label>
                <input id="fe-name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="fe-company">Company</label>
                <input id="fe-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="fe-email">Work email</label>
                <input id="fe-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" className={inputCls} />
              </div>
              <div>
                <label className={labelCls} htmlFor="fe-whatsapp">WhatsApp / phone (optional)</label>
                <input id="fe-whatsapp" type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="fe-country">Country</label>
                <input id="fe-country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} className={inputCls} />
              </div>
            </div>
            {error && <p className="text-sm text-gold">{error}</p>}
            <button type="submit" disabled={submitting}
              className="w-full sm:w-auto bg-gold text-navy-deep font-sans font-semibold text-sm px-8 py-3.5 rounded hover:brightness-110 transition-all duration-200 disabled:opacity-60 shadow-[0_2px_12px_rgba(212,168,67,0.25)]">
              {submitting ? "Sending…" : "Request a free sample"}
            </button>
            <p className="text-xs text-muted leading-relaxed">
              Indicative figures, not a quote. Your numbers are used only to show your own economics — no obligation. See our{" "}
              <Link href="/privacy" className="text-teal hover:text-teal-light">privacy policy</Link>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
