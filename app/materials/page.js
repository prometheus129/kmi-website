import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";

export const metadata = {
  title: "Advanced Materials — Engineering Polymers by Kantor Materials",
  description:
    "UL-certified, application-specific engineering polymer compounds. Reverse-engineered to match incumbent specifications at competitive pricing. PA, PPS, PPA, PC/ABS, LCP, TPU, and more.",
};

const materials = [
  { name: "PA66 / PA6", desc: "Reinforced, flame retardant, heat stabilized" },
  { name: "PPS", desc: "High-temperature, chemical resistant, precision molding" },
  { name: "PPA", desc: "High-flow, weldline strength, metal replacement" },
  { name: "PC/ABS Alloy", desc: "Impact modified, flame retardant, plating grade" },
  { name: "LCP", desc: "Ultra-thin wall, high-frequency, connector grade" },
  { name: "TPU / TPV / TPE", desc: "Elastomeric, overmolding, soft-touch applications" },
  { name: "POM", desc: "Low-friction, high-stiffness, gear and bearing applications" },
  { name: "Custom Compounds", desc: "Application-specific formulations to your specification" },
];

const certifications = ["UL Yellow Card", "ISO 9001", "ROHS 2.0", "REACH 219", "FDA", "LFGB", "GRS"];

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
              LANE 2 — ENGINEERING POLYMERS
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[800px]">
              Advanced Materials
            </h1>
            <p className="font-sans text-lg text-body-text leading-relaxed max-w-[640px] mb-10">
              UL-certified, application-specific compounds. Reverse-engineered
              to match your incumbent specification — same performance,
              competitive pricing. Validated in production lines manufacturing
              over 2 million finished goods annually.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Request a Quote
            </Link>
          </RevealDiv>
        </div>
      </section>

      {/* Material Portfolio */}
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
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              MATERIAL PORTFOLIO
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 leading-tight">
              Engineering-Grade Compounds
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m, i) => (
              <RevealDiv key={i} delay={i * 80}>
                <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 hover:border-gold/30 transition-colors duration-200">
                  <h3 className="font-mono text-base font-bold text-gold-light mb-2">
                    {m.name}
                  </h3>
                  <p className="font-sans text-sm text-body-text">
                    {m.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Partner */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealDiv>
              <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
                MANUFACTURING PARTNER
              </div>
              <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
                Validated by Production.
              </h2>
              <p className="font-sans text-[15px] text-body-text leading-relaxed mb-5">
                Our engineering compounds are manufactured by our integrated
                production partner with over 20,000 tons annual capacity. Every
                compound is validated in our own production lines before it
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
      <section className="bg-ticker-bg py-20 px-6 lg:px-10 relative overflow-hidden">
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
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/terminal#subscribe"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Subscribe to Terminal
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
