import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

export default function LaneCards() {
  return (
    <section className="bg-navy-deep py-24 px-6 lg:px-10 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-14 max-w-[720px] mx-auto">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              WHAT WE SUPPLY
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-5 leading-tight">
              Every material we supply.
            </h2>
            <p className="font-sans text-base lg:text-lg text-body-text leading-relaxed">
              Matched grades, current pricing, and documentation — whether
              you&apos;re buying our mineral filler, engineering grades, or
              commodity resin.
            </p>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Mineral fillers — Vietnamese GCC (lead) */}
          <RevealDiv delay={0}>
            <Link href="/calcium-carbonate" className="group block h-full">
              <div className="h-full rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-gold/40 hover:-translate-y-[3px] transition-all duration-200">
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-gold">
                  CaCO₃ · KC SERIES
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Calcium Carbonate (GCC)
                </h3>
                <p className="text-[15px] text-body-text leading-relaxed font-sans mb-6">
                  Our flagship line: high-whiteness Vietnamese GCC from our own
                  vertically integrated production — four grades from ultrafine
                  film grade to general filler, coated and uncoated. Free
                  samples under 1 tonne, dispatched within 48 hours.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-gold transition-colors duration-200">
                  Explore the KC Series
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>

          {/* Lane 2 — Engineering */}
          <RevealDiv delay={80}>
            <Link href="/materials" className="group block h-full">
              <div className="h-full rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-teal/40 hover:-translate-y-[3px] transition-all duration-200">
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-teal">
                  PA6 · PA66 · POM · PC · PEEK · PBT
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Engineering Polymers
                </h3>
                <p className="text-[15px] text-body-text leading-relaxed font-sans mb-6">
                  Chinese equivalents to DuPont Zytel, BASF Ultramid, SABIC
                  LNP — compounded in our partner facilities. Match
                  Western-premium grades at Chinese cost.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-teal transition-colors duration-200">
                  Request engineering-grade equivalency
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>

          {/* Lane 1 — Commodity */}
          <RevealDiv delay={160}>
            <Link
              href="/inquiry?lane=1&context=grade-query#inquiry"
              className="group block h-full"
            >
              <div className="h-full rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-teal/40 hover:-translate-y-[3px] transition-all duration-200">
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-teal">
                  PP · PE · PVC
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Commodity Polymers
                </h3>
                <p className="text-[15px] text-body-text leading-relaxed font-sans mb-6">
                  Best-execution sourcing across the Chinese producer and
                  merchant network. Current FOB pricing on request — whichever
                  grade you need, we find the best-priced source.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-teal transition-colors duration-200">
                  Get a grade-specific quote
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
