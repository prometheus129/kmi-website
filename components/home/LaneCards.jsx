import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

export default function LaneCards() {
  return (
    <section className="bg-navy-deep py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.035]">
        <Image
          src="/images/lane-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/50" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-14 max-w-[720px] mx-auto">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              WHAT WE SOURCE
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-5 leading-tight">
              Same answer. Every material we source.
            </h2>
            <p className="font-sans text-base lg:text-lg text-body-text leading-relaxed">
              Matched grades, current pricing, and documentation — whether
              you&apos;re sourcing commodity resin, engineering grades, or
              mineral filler.
            </p>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Lane 1 — Commodity */}
          <RevealDiv delay={0}>
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
                  Best-execution pricing across the Chinese producer and
                  merchant network. Daily FOB updates. Whichever grade you
                  need, we find the best-priced source that day.
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

          {/* Lane 2 — Engineering */}
          <RevealDiv delay={80}>
            <Link href="/materials" className="group block h-full">
              <div className="h-full rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-gold/40 hover:-translate-y-[3px] transition-all duration-200">
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-gold">
                  PA6 · PA66 · POM · PC · PEEK · PBT
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Engineering Polymers
                </h3>
                <p className="text-[15px] text-body-text leading-relaxed font-sans mb-6">
                  Chinese equivalents to DuPont Zytel, BASF Ultramid, SABIC
                  LNP — compounded in our own facility. Match Western-premium
                  grades at Chinese cost.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-gold transition-colors duration-200">
                  Request engineering-grade equivalency
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>

          {/* Mineral fillers — Vietnamese GCC */}
          <RevealDiv delay={160}>
            <Link href="/calcium-carbonate" className="group block h-full">
              <div className="h-full rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-teal/40 hover:-translate-y-[3px] transition-all duration-200">
                <div className="text-[11px] tracking-[2px] font-bold font-mono mb-3 text-teal">
                  CaCO₃ · KC SERIES
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Calcium Carbonate (GCC)
                </h3>
                <p className="text-[15px] text-body-text leading-relaxed font-sans mb-6">
                  High-whiteness Vietnamese GCC from our own vertically
                  integrated production — four grades from ultrafine film grade
                  to general filler, supplied alongside resin as one
                  relationship.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 group-hover:text-teal transition-colors duration-200">
                  Explore the KC Series
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
