import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

export default function LaneCards() {
  return (
    <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[900px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              BEYOND INTELLIGENCE
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4 leading-tight">
              When You&apos;re Ready to Buy
            </h2>
            <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-[600px] mx-auto">
              Morning Terminal subscribers get priority access to Kantor&apos;s
              procurement infrastructure. Two product lanes, one sourcing desk.
            </p>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealDiv>
            <Link href="/syndicate" className="group block h-full">
              <div className="rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-teal/40 hover:-translate-y-[3px] transition-all duration-350 h-full">
                <div className="text-[10px] tracking-[3px] font-bold font-sans mb-3 text-teal">
                  LANE 1
                </div>
                <h3 className="font-serif text-[26px] font-bold text-white mb-1">
                  Commodity Polymers
                </h3>
                <div className="text-[13px] font-medium font-sans mb-4 text-teal">
                  PP, PE, PA6, PVC, ABS — China origin
                </div>
                <p className="text-sm text-body-text leading-relaxed font-sans mb-5">
                  Volume-aggregated procurement. Your 50 MT joins a 300 MT order.
                  Best-execution pricing across 600+ producers and merchants.
                </p>
                <span className="text-[13px] text-white font-semibold font-sans inline-flex items-center gap-1.5 tracking-wide group-hover:text-teal transition-colors duration-200">
                  Learn More{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>

          <RevealDiv>
            <Link href="/materials" className="group block h-full">
              <div className="rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-gold/40 hover:-translate-y-[3px] transition-all duration-350 h-full">
                <div className="text-[10px] tracking-[3px] font-bold font-sans mb-3 text-gold">
                  LANE 2
                </div>
                <h3 className="font-serif text-[26px] font-bold text-white mb-1">
                  Engineering Compounds
                </h3>
                <div className="text-[13px] font-medium font-sans mb-4 text-gold">
                  Free specification matching
                </div>
                <p className="text-sm text-body-text leading-relaxed font-sans mb-5">
                  Send us your current material spec. We evaluate whether our
                  UL-certified compounds can match performance at a competitive price.
                </p>
                <span className="text-[13px] text-white font-semibold font-sans inline-flex items-center gap-1.5 tracking-wide group-hover:text-gold transition-colors duration-200">
                  Request Free Evaluation{" "}
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
