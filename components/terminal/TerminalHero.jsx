import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";
import { t } from "@/lib/terminal-i18n";

const previewRows = [
  { grade: "PP T30S", producer: "Kunlun", price: "$1,180", dir: "\u25BC", chg: "$10", dirColor: "text-ticker-red", condition: "Softening", condColor: "text-gold", condBg: "bg-gold/10" },
  { grade: "HDPE 5000S", producer: "Yangzi", price: "$1,210", dir: "\u25B2", chg: "$8", dirColor: "text-ticker-green", condition: "Tightening", condColor: "text-ticker-green", condBg: "bg-ticker-green/10" },
  { grade: "LLDPE 7042", producer: "Dushanzi", price: "$1,245", dir: "\u25B2", chg: "$5", dirColor: "text-ticker-green", condition: "Stable", condColor: "text-gold", condBg: "bg-gold/10" },
  { grade: "PVC SG-5", producer: "Zhongtai", price: "$940", dir: "\u25B2", chg: "$20", dirColor: "text-ticker-green", condition: "Tightening", condColor: "text-ticker-green", condBg: "bg-ticker-green/10" },
];

export default function TerminalHero({ locale = "en" }) {
  const text = t(locale).hero;
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
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left — Text */}
          <div className="lg:w-1/2 lg:pt-6">
            <RevealDiv>
              <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-6">
                {text.label}
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {text.title}
              </h1>
              <p className="font-sans text-lg text-body-text leading-relaxed max-w-[540px] mb-8">
                {text.subtitle}
              </p>
              <Link
                href="#subscribe"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
              >
                {text.cta}
              </Link>

              {/* Social proof indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-xs text-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                  {text.proofMarkets || "8 markets covered"}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                  {text.proofGrades || "600+ suppliers evaluated"}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                  {text.proofCost || "Free — no credit card"}
                </span>
              </div>
            </RevealDiv>
          </div>

          {/* Right — MT Preview Card */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <RevealDiv delay={300}>
              <div className="bg-[#0F1D2F] rounded-xl border border-white/[0.06] shadow-2xl shadow-black/30 overflow-hidden">
                {/* Card Header */}
                <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] tracking-[3px] text-teal font-sans font-bold">
                      THE POLYMER COMPASS
                    </div>
                    <div className="text-[10px] font-mono text-muted">
                      SAMPLE
                    </div>
                  </div>
                  <div className="font-serif text-base font-bold text-white leading-snug">
                    Three Corridors Down — One Left Standing
                  </div>
                  <div className="font-sans text-[11px] text-muted mt-1">
                    PP · PE · PVC — CFR Market Assessment
                  </div>
                </div>

                {/* Compact Pricing Table */}
                <div className="px-6 py-4">
                  <div className="text-[9px] tracking-[1.5px] text-muted font-sans mb-3">
                    KANTOR INDICATIVE PRICING — CFR HCMC
                  </div>
                  {previewRows.map((row, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-2 ${
                        i < previewRows.length - 1
                          ? "border-b border-white/[0.04]"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-mono text-[11px] text-white font-medium">
                            {row.grade}
                          </div>
                          <div className="font-mono text-[9px] text-muted">
                            {row.producer}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-mono text-[11px] text-white">
                            {row.price}
                          </div>
                          <div
                            className={`font-mono text-[9px] ${row.dirColor}`}
                          >
                            {row.dir}
                            {row.chg}
                          </div>
                        </div>
                        <span
                          className={`text-[8px] font-bold tracking-wider font-sans px-2 py-0.5 rounded ${row.condColor} ${row.condBg} min-w-[58px] text-center`}
                        >
                          {row.condition}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timing Signal Snippet */}
                <div className="mx-6 mb-5 p-3 rounded-lg bg-teal/[0.08] border border-teal/15">
                  <div className="text-[8px] tracking-[1.5px] text-teal font-bold mb-1 font-sans">
                    TIMING SIGNAL
                  </div>
                  <div className="text-[11px] text-body-text leading-relaxed font-sans">
                    PP correction has further to run. HDPE tightening on
                    Hormuz-dependent supply. Wait on PP, act on HDPE.
                  </div>
                </div>
              </div>

              <p className="text-center font-sans text-[10px] text-muted mt-3 italic">
                Sample issue — subscribe for the latest briefs
              </p>
            </RevealDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
