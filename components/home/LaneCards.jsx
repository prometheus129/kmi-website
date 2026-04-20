import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

export default function LaneCards() {
  return (
    <section className="bg-[#fbfcfd] py-24 lg:py-[100px] px-6 lg:px-10 relative">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-14 max-w-[720px] mx-auto">
            <div className="text-[11px] tracking-[3px] text-[#2E8B8B] font-sans font-semibold mb-4">
              WHAT WE SOURCE
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-[#1B2A4A] mb-5 leading-tight">
              Same answer. Every polymer category.
            </h2>
            <p className="font-sans text-base lg:text-lg text-[#4b5563] leading-relaxed">
              Matched grades, current pricing, and documentation — whether
              you&apos;re sourcing commodity or engineering.
            </p>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Lane 1 — Commodity */}
          <RevealDiv delay={0}>
            <Link
              href="/inquiry?lane=1&context=grade-query#inquiry"
              className="group block h-full"
            >
              <div className="relative h-full bg-white rounded-xl border border-[#e5e7eb] p-7 hover:border-[#2E8B8B]/50 hover:shadow-[0_8px_24px_rgba(27,42,74,0.08)] hover:-translate-y-[3px] transition-all duration-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#2E8B8B]" />
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-[#2E8B8B]">
                  PP · PE · PVC
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-4 leading-tight">
                  Commodity Polymers
                </h3>
                <p className="text-[15px] text-[#4b5563] leading-relaxed font-sans mb-6">
                  Best-execution pricing across the Chinese producer and
                  merchant network. Daily FOB updates. Whichever grade you
                  need, we find the best-priced source that day.
                </p>
                <span className="text-sm text-[#1B2A4A] font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-[#2E8B8B] transition-colors duration-200">
                  Get a grade-specific quote
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
              <div className="relative h-full bg-white rounded-xl border border-[#e5e7eb] p-7 hover:border-[#D4A843]/50 hover:shadow-[0_8px_24px_rgba(27,42,74,0.08)] hover:-translate-y-[3px] transition-all duration-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4A843]" />
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-[#D4A843]">
                  PA6 · PA66 · POM · PC · PEEK · PBT
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-4 leading-tight">
                  Engineering Polymers
                </h3>
                <p className="text-[15px] text-[#4b5563] leading-relaxed font-sans mb-6">
                  Chinese equivalents to DuPont Zytel, BASF Ultramid, SABIC
                  LNP — compounded in our own facility. Match Western-premium
                  grades at Chinese cost.
                </p>
                <span className="text-sm text-[#1B2A4A] font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-[#D4A843] transition-colors duration-200">
                  Request engineering-grade equivalency
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
