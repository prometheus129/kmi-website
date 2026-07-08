import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import DeadlineCountdown from "@/components/compliance/DeadlineCountdown";
import { paymentLinkFor } from "@/lib/compliancePayments";

export const metadata = {
  title: "Services & Pricing — Readiness Review, Report & Material Verification | CertDesk",
  description:
    "Flat-fee compliance services for importers: $250 July 8 Readiness Review, $199 supplier report verification, $499 material verification. Scope confirmed before billing.",
  alternates: { canonical: "/compliance/services" },
};

const SERVICES = [
  {
    id: "readiness-review",
    name: "July 8 Readiness Review",
    price: "$250 flat",
    payLabel: "Pay & start — $250",
    turnaround: "2–3 business days",
    blurb:
      "You send the compliance documents you have — certificates, test reports, your product list. We map them against what the rules actually require for your products and states, and hand back a prioritized gap list: what stands, what is missing, what to test where, and what your broker needs before July 8.",
    includes: [
      "Document-by-document review against CPSC, state-chemical, and marketplace requirements",
      "Prioritized gap list with the testing and certificates still needed",
      "The 16 CFR 1110.11 data elements assembled per covered product, broker-ready",
      "A 30-minute follow-up call if you want one",
    ],
    note: "After July 8, the same review covers entry-rejection recovery.",
  },
  {
    id: "report-verification",
    name: "Supplier Report Verification",
    price: "$199 per report",
    payLabel: "Pay & start — $199",
    turnaround: "2–5 business days (issuing-lab response time governs)",
    blurb:
      "The six-step check from our guides, run for you: report anatomy, accreditation and scope, CPSC acceptance for the specific rule, confirmation with the issuing lab, and a match against your order. You get a written verification memo you can file — or act on.",
    includes: [
      "Accreditor-directory and scope verification",
      "CPSC lab-acceptance check for the rule your certificate cites",
      "Direct confirmation with the issuing laboratory",
      "Written memo: verified, failed, or unresolved — with what to do next",
    ],
    note: "Covers one report or certificate; additional documents quoted at intake.",
  },
  {
    id: "material-verification",
    featured: true,
    badge: "The material itself",
    name: "Material Verification",
    price: "$499 per material",
    turnaround: "2–5 business days once we have your sample",
    blurb:
      "Everything in report verification, plus the layer paperwork cannot reach: we test the material itself against its TDS through our affiliated polymer materials lab — polymer identity, grade consistency, blend and regrind signals, filler loading — and read the results against your purchase specification.",
    includes: [
      "Report verification (everything in the $199 tier)",
      "FTIR polymer identification plus DSC, melt flow rate, density, and ash/TGA as applicable",
      "Results read against your TDS and purchase spec, in plain English",
      "Sample logistics coordinated with you at intake",
    ],
    note: "Scope and sample handling confirmed before billing; multi-material programs quoted individually.",
  },
];

export default function ComplianceServicesPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <main className="pt-36 lg:pt-44 pb-16 px-6 lg:px-10">
        <div className="max-w-[1080px] mx-auto">
          <RevealDiv>
            <CertDeskMark />
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mt-6 mb-4 leading-tight max-w-[760px]">
              Flat fees. Confirmed scope. No retainer.
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-[680px] mb-4">
              The importer of record carries the liability — up to $120,000 per
              violation — for what actually ships, not the factory that made it.
              These services confirm your compliance documents, and the material
              behind them, before a customs hold or a regulator does.
            </p>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-[680px] mb-4">
              Three services, priced up front. Every engagement starts with a
              short intake — we confirm scope, turnaround, and fee before
              anything is billed, and we never supply the products we review.
            </p>
            <p className="text-body-text text-sm lg:text-base leading-relaxed max-w-[680px] mb-5">
              Most shipments start with a report check. Material verification is
              the escalation when the paperwork checks out but you still need to
              know the resin itself is what it claims — the one layer an
              inspector or a registry check cannot reach.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-xs text-muted font-sans max-w-[680px]">
              <span>Operated by Kantor Materials — a polymer company with its own materials lab</span>
              <span>Every determination cites a primary source</span>
              <span>We never supply the products we review</span>
            </div>
            <div className="mb-10">
              <DeadlineCountdown
                date="2026-07-08"
                label="CPSC eFiling enforcement (July 8, 2026)"
              />
            </div>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const payLink = paymentLinkFor(s.id);
              return (
                <div
                  key={s.name}
                  className={`relative flex flex-col p-6 rounded-lg bg-white/[0.02] border ${
                    s.featured
                      ? "border-teal/50 ring-1 ring-teal/30"
                      : "border-white/10"
                  }`}
                >
                  {s.badge && (
                    <span className="absolute -top-2.5 left-6 bg-teal text-navy-deep font-mono text-[10px] uppercase tracking-[2px] px-2 py-0.5 rounded">
                      {s.badge}
                    </span>
                  )}
                  <h2 className="font-serif text-xl font-bold text-white mb-1">
                    {s.name}
                  </h2>
                  <p className="font-mono text-sm text-gold mb-1">{s.price}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[2px] text-muted mb-4">
                    {s.turnaround}
                  </p>
                  <p className="text-sm text-body-text leading-relaxed mb-4">
                    {s.blurb}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[2px] text-white/50 mb-2">
                    Includes
                  </p>
                  <ul className="text-xs text-body-text space-y-1.5 list-disc list-inside mb-4">
                    {s.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted leading-relaxed mb-5">{s.note}</p>
                  <div className="mt-auto">
                    {payLink ? (
                      <a
                        href={payLink}
                        className="inline-block w-full text-center bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
                      >
                        {s.payLabel || "Pay & start"}
                      </a>
                    ) : (
                      <Link
                        href="/compliance/verify-request"
                        className="inline-block w-full text-center bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
                      >
                        Start the intake
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[760px]">
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-teal/80 mb-2">
                On time, or it&apos;s on us
              </p>
              <p className="text-sm text-body-text leading-relaxed">
                If a Readiness Review or Report Verification misses the turnaround
                we quote you at intake, the fee is credited in full. The clock
                starts once we have the documents we need; for report
                verification, time spent waiting on the issuing lab is excluded —
                we&apos;ll flag it when it applies.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <p className="font-mono text-[10px] uppercase tracking-[2px] text-teal/80 mb-2">
                Material screen, backed by re-test
              </p>
              <p className="text-sm text-body-text leading-relaxed">
                If an accredited laboratory later contradicts our material screen
                on the same property and the same sample, we re-run the screen or
                refund its fee. The screen is diligence-grade — it tells you
                whether an accredited test is worth paying for; it does not
                replace one where the law requires it.
              </p>
            </div>
          </div>

          <div className="mt-5 p-6 rounded-lg bg-teal/[0.07] border border-teal/20 max-w-[760px]">
            <p className="text-sm text-body-text leading-relaxed">
              Not sure which one you need? Run the free{" "}
              <Link
                href="/compliance/deadline-checker"
                className="text-teal hover:text-teal-light"
              >
                Deadline Checker
              </Link>{" "}
              first — it maps which rules and documents apply to your products,
              and the readiness review picks up exactly where it leaves off.
              Fixed-fee reviews can be paid by card or invoice; material
              verification is quoted after a short scope and sample-logistics
              confirmation, then invoiced.
            </p>
          </div>

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
