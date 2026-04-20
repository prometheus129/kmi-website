import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import MaterialsFilter from "@/components/materials/MaterialsFilter";

export const metadata = {
  title:
    "Engineering Polymers — Chinese Alternatives to Zytel, Ultramid, LNP — Kantor Materials",
  description:
    "Chinese engineering polymer compounds — PA66, POM, PC, PEEK, PBT equivalent to DuPont Zytel, BASF Ultramid, SABIC LNP. Own compounding facility, OEM-validated.",
  openGraph: {
    title: "Engineering Polymers — Kantor Materials",
    description:
      "China-origin equivalents to Western premium engineering polymers — compounded in our own facility at 60,000 MT/yr, validated at OEM scale (BYD, CATL, CALB).",
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
              China‑origin equivalents to
              <br className="hidden lg:block" />
              {" "}Western premium engineering polymers.
            </h1>
            <p className="font-sans text-lg text-body-text leading-relaxed max-w-[680px] mb-10">
              DuPont Zytel, BASF Ultramid, SABIC LNP, Celanese acetals,
              Victrex PEEK — matched in our own compounding facility at
              Chinese cost. Validated in production lines manufacturing over
              2 million finished goods annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inquiry?lane=2&context=engineering-substitution#inquiry"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
              >
                Request a Quote
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
                Our engineering compounds are manufactured in our own
                compounding facility with 60,000 MT annual capacity. Every
                compound is validated in our production lines before it
                reaches yours — over 2 million finished goods manufactured
                annually with these materials.
              </p>
              <p className="font-sans text-[15px] text-body-text leading-relaxed">
                Tier 1 OEM clients — BYD, CATL, CALB — run these compounds in
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
              Need a Specific Compound?
            </h2>
            <p className="font-sans text-[15px] text-body-text mb-8">
              Send us your current material specification. We will evaluate
              whether a reverse-engineered alternative can meet your
              performance requirements at a competitive price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inquiry#inquiry"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/polymer-compass#subscribe"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Subscribe to The Polymer Compass
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
