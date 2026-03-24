import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

export default function TerminalHero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-[100px] px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
      {/* Grid overlay */}
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
            MARKET INTELLIGENCE PRODUCT
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[800px]">
            The Morning Terminal
          </h1>
          <p className="font-sans text-lg text-body-text leading-relaxed max-w-[640px] mb-8">
            Daily polymer pricing, market signals, and timing guidance
            delivered to your phone. Free for distributors.
          </p>
          <Link
            href="#subscribe"
            className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
          >
            Subscribe — Free
          </Link>
        </RevealDiv>
      </div>
    </section>
  );
}
