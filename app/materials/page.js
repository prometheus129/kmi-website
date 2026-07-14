import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import MaterialsFilter from "@/components/materials/MaterialsFilter";
import EquivalencyForm from "@/components/materials/EquivalencyForm";

export const metadata = {
  title:
    "Engineering Polymers — Chinese Alternatives to Zytel, Ultramid, LNP — Kantor Materials",
  description:
    "Chinese engineering polymers — PA66, POM, PC, PEEK, PBT equivalent to DuPont Zytel, BASF Ultramid, SABIC LNP. 60,000 MT/yr compounding operations, OEM-validated.",
  openGraph: {
    title: "Engineering Polymers — Kantor Materials",
    description:
      "China-origin equivalents to Western premium engineering polymers — compounded in our compounding operations at 60,000 MT/yr, validated at OEM scale (BYD, CATL, CALB).",
  },
  alternates: { canonical: "/materials" },
};

const materials = [
  {
    name: "PEEK",
    full: "Polyetheretherketone",
    desc: "Aerospace, medical, semiconductor. Neat, glass-fiber, carbon-fiber reinforced. Victrex and Solvay alternatives.",
    href: "/insights/peek-polymer-china-alternatives-victrex-solvay",
    applications: ["aerospace", "industrial"],
    highlight: true,
  },
  {
    name: "PEI",
    full: "Polyetherimide",
    desc: "Aerospace interiors, medical sterilization, electrical insulation. SABIC Ultem alternatives.",
    href: "/insights/pei-polyetherimide-china-ultem-alternatives",
    applications: ["aerospace", "electronics"],
    highlight: true,
  },
  {
    name: "PPS",
    full: "Polyphenylene Sulfide",
    desc: "EV battery systems, thermal management, high-heat industrial. Toray and Solvay alternatives.",
    href: "/insights/pps-polyphenylene-sulfide-china-ev-battery-automotive",
    applications: ["automotive", "industrial"],
  },
  {
    name: "PPA",
    full: "Polyphthalamide",
    desc: "High-heat powertrain, EV power electronics, LED reflectors. Highest-margin engineering polymer.",
    href: "/insights/thailand-automotive-engineering-polymers-pps-ppa-pa66",
    applications: ["automotive"],
  },
  {
    name: "PA66 / PA6",
    full: "Polyamide (Nylon)",
    desc: "Reinforced, flame retardant, heat stabilized. Under-hood structural, connectors, brackets.",
    href: "/insights/engineering-polymer-equivalents-china-ul-certified",
    applications: ["automotive", "electronics", "industrial"],
  },
  {
    name: "PC/ABS",
    full: "Polycarbonate / ABS Alloy",
    desc: "Electroplating, flame retardant, general purpose. Automotive interior, electronics housings.",
    href: "/insights/pc-abs-alloy-china-suppliers-electroplating-fr",
    applications: ["automotive", "electronics", "industrial"],
  },
  {
    name: "PBT",
    full: "Polybutylene Terephthalate",
    desc: "Electrical connectors, sensor housings, automotive lighting. High CTI for power applications.",
    href: "/insights/pbt-polybutylene-terephthalate-china-connectors-housings",
    applications: ["automotive", "electronics"],
  },
  {
    name: "POM",
    full: "Polyoxymethylene (Acetal)",
    desc: "Gears, bearings, precision mechanisms. Celanese and DuPont alternatives.",
    href: "/insights/pom-acetal-china-suppliers-dupont-celanese-alternatives",
    applications: ["automotive", "industrial"],
  },
  {
    name: "LCP",
    full: "Liquid Crystal Polymer",
    desc: "Ultra-thin wall, high-frequency connectors, 5G antenna substrates.",
    href: "/insights/engineering-polymer-equivalents-china-ul-certified",
    applications: ["electronics"],
  },
  {
    name: "TPU / TPV / TPE",
    full: "Thermoplastic Elastomers",
    desc: "Automotive sealing, soft-touch surfaces, food-grade, medical-grade applications.",
    href: "/insights/engineering-polymer-equivalents-china-ul-certified",
    applications: ["automotive", "industrial"],
  },
];

const filters = [
  { key: "all", label: "All Materials" },
  { key: "automotive", label: "Automotive & EV" },
  { key: "electronics", label: "Electronics & Electrical" },
  { key: "aerospace", label: "Aerospace & Medical" },
  { key: "industrial", label: "Industrial & Consumer" },
];

const guides = [
  {
    title: "Halogen-Free FR Compounds",
    desc: "UL 94 V-0 certified halogen-free flame retardant compounds across PC/ABS, PA66, PBT, PET, and PC.",
    href: "/insights/halogen-free-flame-retardant-polymers-china-certified",
  },
  {
    title: "Glass Fiber Reinforced (GF10\u2013GF50)",
    desc: "GF loading selection, testing protocols, and supplier qualification across 8 polymer families.",
    href: "/insights/glass-fiber-reinforced-polymers-china-gf-compounds",
  },
  {
    title: "UL / REACH / FDA Certification Guide",
    desc: "How to verify UL Yellow Cards, REACH registration, RoHS compliance, and food contact certifications.",
    href: "/insights/ul-reach-fda-certification-switching-polymer-suppliers",
  },
];

const certifications = [
  "UL Yellow Card",
  "ISO 9001",
  "ROHS 2.0",
  "REACH 219",
  "FDA",
  "LFGB",
  "GRS",
];

export default function MaterialsPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-xs tracking-[4px] text-gold font-sans font-semibold mb-6">
              ENGINEERING POLYMERS
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[1100px]">
              China‑Origin equivalents to
              <br className="hidden lg:block" />
              {" "}Western premium engineering polymers.
            </h1>
            <p className="font-sans text-lg text-body-text leading-relaxed max-w-[680px] mb-10">
              DuPont Zytel, BASF Ultramid, SABIC LNP, Celanese acetals,
              Victrex PEEK — matched in our compounding operations at
              Chinese cost. Validated in production lines manufacturing over
              2 million finished goods annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#equivalency"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
              >
                Send us the grade you run today
              </Link>
              <Link
                href="/insights/markets/engineering-polymers"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Browse All Guides
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Equivalency capture — the EP funnel's landing pad */}
      <section
        id="equivalency"
        className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — how qualification works */}
            <RevealDiv>
              <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
                GRADE EQUIVALENCY
              </div>
              <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
                Send us the grade you run today.
              </h2>
              <p className="font-sans text-[15px] text-body-text leading-relaxed mb-10">
                An engineering compound is qualified in your part, not on a
                datasheet. So the process starts with your current grade, and
                you commit only after your part passes.
              </p>

              <div className="relative space-y-6">
                <div
                  className="absolute left-[13px] top-3 bottom-3 w-px bg-teal/20"
                  aria-hidden="true"
                />
                {[
                  {
                    title: "Name your current grade",
                    body: "Zytel, Ultramid, Bayblend, or any brand you run today — and the part it goes into. Within 24 hours you get the closest matching grade from our catalog, with an honest assessment of where it differs.",
                  },
                  {
                    title: "Get a free sample — up to 100 kg",
                    body: "Enough for a lab test first, then a full trial on your production line.",
                  },
                  {
                    title: "Co-engineer until your part qualifies",
                    body: "If the closest catalog grade does not pass your trial, our engineers adjust the compound — and we send another sample — until your part qualifies. You commit only after it passes.",
                  },
                  {
                    title: "Start recurring supply",
                    body: "The qualified compound, produced in our own compounding operations — with the technical data sheet and a certificate of analysis for every lot.",
                  },
                ].map((step, i) => (
                  <div key={step.title} className="relative pl-11">
                    <div className="absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold border border-teal/40 bg-teal/10 text-teal">
                      {i + 1}
                    </div>
                    <h3 className="font-sans text-[15px] font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[13px] text-body-text leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </RevealDiv>

            {/* Right — the capture form */}
            <RevealDiv delay={150}>
              <EquivalencyForm />
            </RevealDiv>
          </div>

          {/* Commercial terms — the publishable EP basics */}
          <RevealDiv delay={120}>
            <div className="mt-16">
              <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-5">
                COMMERCIAL TERMS
              </div>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg overflow-hidden">
                {[
                  {
                    k: "Free sample",
                    v: "Up to 100 kg, free — enough for a lab test first, then a full trial on your production line.",
                  },
                  {
                    k: "Payment",
                    v: "30% deposit by bank transfer (T/T), 70% against the bill of lading.",
                  },
                  {
                    k: "Documents",
                    v: "The technical data sheet with your grade match, and a certificate of analysis for every lot you receive.",
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.k}
                    className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 px-6 py-4 ${
                      i !== arr.length - 1 ? "border-b border-white/[0.06]" : ""
                    }`}
                  >
                    <div className="font-mono text-[12px] tracking-wide text-teal/80 uppercase pt-0.5">
                      {row.k}
                    </div>
                    <div className="font-sans text-sm text-body-text leading-relaxed">
                      {row.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Application Filter + Material Portfolio */}
      <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <MaterialsFilter materials={materials} filters={filters} />
        </div>
      </section>

      {/* Cross-Cutting Guides */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              SOURCING GUIDES
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-10 leading-tight">
              Cross-Material Resources
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <RevealDiv key={g.title} delay={i * 80}>
                <Link
                  href={g.href}
                  className="block bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200 group h-full"
                >
                  <h3 className="font-sans text-[15px] font-semibold text-white mb-3 group-hover:text-gold-light transition-colors duration-200">
                    {g.title}
                  </h3>
                  <p className="font-sans text-sm text-body-text leading-relaxed">
                    {g.desc}
                  </p>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Partner */}
      <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealDiv>
              <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
                OUR OPERATIONS
              </div>
              <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
                Validated by Production.
              </h2>
              <p className="font-sans text-[15px] text-body-text leading-relaxed mb-5">
                Our engineering polymers are manufactured in our compounding
                operations with 60,000 MT annual capacity. Every grade is
                validated in our production lines before it reaches yours —
                over 2 million finished goods manufactured annually with
                these materials.
              </p>
              <p className="font-sans text-[15px] text-body-text leading-relaxed">
                Tier 1 OEM clients — BYD, CATL, CALB — run these grades in
                their production. The same materials, the same quality control,
                available to your specifications.
              </p>
            </RevealDiv>

            <RevealDiv delay={200}>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-8">
                <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-6">
                  CERTIFICATIONS
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="font-mono text-[11px] tracking-[1px] text-body-text bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
                  OEM VALIDATED
                </div>
                <div className="font-mono text-[13px] text-white/50 tracking-wide">
                  BYD · CATL · CALB
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[600px] mx-auto text-center relative z-10">
          <RevealDiv>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4">
              Running a premium-brand grade today?
            </h2>
            <p className="font-sans text-[15px] text-body-text mb-8">
              Send us the grade name and the part it goes into. Within 24
              hours you get the closest matching grade from our catalog, with
              an honest assessment of where it differs — and a free sample of
              up to 100 kg when you are ready to test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#equivalency"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Send us your grade
              </Link>
              <Link
                href="/inquiry#inquiry"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Send a general inquiry
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
