import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import DeadlineCountdown from "@/components/compliance/DeadlineCountdown";

export const metadata = {
  title: "Services & Pricing — Readiness Review, Report & Material Verification | CertDesk",
  description:
    "Flat-fee compliance services for importers: $250 July 8 Readiness Review, $199 supplier report verification, $399 report + material testing. Scope confirmed before billing.",
  alternates: { canonical: "/compliance/services" },
};

const SERVICES = [
  {
    name: "July 8 Readiness Review",
    price: "$250 flat",
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
    name: "Supplier Report Verification",
    price: "$199 per report",
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
    name: "Material Verification",
    price: "$399 per material",
    turnaround: "~2–3 weeks including sample logistics",
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
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-[680px] mb-5">
              Three services, priced up front. Every engagement starts with a
              short intake — we confirm scope, turnaround, and fee before
              anything is billed, and we never supply the products we review.
            </p>
            <div className="mb-10">
              <DeadlineCountdown
                date="2026-07-08"
                label="CPSC eFiling enforcement (July 8, 2026)"
              />
            </div>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="flex flex-col p-6 rounded-lg border border-white/10 bg-white/[0.02]"
              >
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
                  <Link
                    href="/compliance/verify-request"
                    className="inline-block w-full text-center bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
                  >
                    Start the intake
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg bg-teal/[0.07] border border-teal/20 max-w-[760px]">
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
              Payment is by invoice after scope confirmation; card checkout is
              coming shortly.
            </p>
          </div>

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
