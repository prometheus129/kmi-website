import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";

export const metadata = {
  title: "The Kantor Syndicate — Commodity Polymer Procurement",
  description:
    "Aggregated procurement for mid-tier polymer distributors. PP, PE, LDPE, PA6, PVC, ABS sourced across 600+ merchants with volume-based economics. Lane 1 commodity polymers.",
};

const grades = [
  { name: "PP", desc: "Homopolymer, copolymer, random copolymer" },
  { name: "HDPE", desc: "Blow moulding, injection, film" },
  { name: "LDPE / LLDPE", desc: "Film grade, injection, rotomoulding" },
  { name: "PA6", desc: "Chips, engineering grade" },
  { name: "PVC", desc: "Suspension (SG-5, SG-8), paste" },
  { name: "ABS", desc: "General purpose, high-impact, flame retardant" },
];

const howItWorks = [
  {
    num: "01",
    title: "Intelligence",
    desc: "Receive daily pricing direction, timing signals, and supply context via the Morning Terminal. Know where the market is heading before you commit.",
  },
  {
    num: "02",
    title: "Evaluation",
    desc: "Tell us the grade, quantity, and timeline. We evaluate 600+ merchants across ~1,600 Chinese producers and present the best-execution option for your specific order.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Quality verification, logistics coordination, and documentation handled end-to-end. 30/70 B/L payment terms for established buyers. Your order, our infrastructure.",
  },
];

export default function SyndicatePage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,139,139,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-6">
              LANE 1 — COMMODITY POLYMERS
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[800px]">
              The Kantor Syndicate
            </h1>
            <p className="font-sans text-lg text-body-text leading-relaxed max-w-[640px] mb-10">
              Aggregated commodity procurement with volume-based economics. Your
              50 MT order becomes part of a 300 MT aggregate. Every buyer gets
              better pricing. Every order is evaluated across the full market.
            </p>
            <Link
              href="/terminal#subscribe"
              className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Subscribe to Morning Terminal — Free
            </Link>
          </RevealDiv>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,139,139,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 lg:mb-16 leading-tight">
              Intelligence. Evaluation. Execution.
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorks.map((step, i) => (
              <RevealDiv key={i} delay={i * 150}>
                <div className="border-l-[3px] border-teal pl-6">
                  <div className="font-mono text-xs text-muted mb-2">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-body-text leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grades */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              PRODUCT COVERAGE
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 leading-tight">
              China-Origin Commodity Polymers
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grades.map((g, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6">
                  <h3 className="font-mono text-lg font-bold text-teal-light mb-2">
                    {g.name}
                  </h3>
                  <p className="font-sans text-sm text-body-text">
                    {g.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* The Thesis */}
      <section className="bg-ticker-bg py-16 lg:py-20 px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(46,139,139,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[800px] mx-auto relative z-10">
          <RevealDiv>
            <div className="border-l-[3px] border-teal pl-6 lg:pl-8">
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4">
                Why the Syndicate Model Works
              </h3>
              <p className="font-sans text-[15px] text-body-text leading-relaxed mb-4">
                Mid-tier distributors buying 30–150 MT/month pay 3–8% more per
                ton than large-volume buyers. The cause is structural: smaller
                orders mean less leverage, fewer merchant relationships, and no
                access to volume-tier pricing.
              </p>
              <p className="font-sans text-[15px] text-body-text leading-relaxed">
                The Kantor Syndicate aggregates demand across multiple buyers
                into a single procurement action. Your volume combines with
                other qualified distributors to unlock pricing that none of you
                could access alone. Kantor Materials handles evaluation,
                execution, and logistics. You receive the best-execution price
                for your grade, quantity, and timeline.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-10">
        <div className="max-w-[600px] mx-auto text-center">
          <RevealDiv>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4">
              Ready to Optimize Your Procurement?
            </h2>
            <p className="font-sans text-[15px] text-body-text mb-8">
              Start with the Morning Terminal — free daily market intelligence
              for distributors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/terminal#subscribe"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Subscribe to Terminal
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Contact Us
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
