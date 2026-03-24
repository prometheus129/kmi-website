import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

const pricingRows = [
  {
    grade: "PP T30S",
    price: "$1,015",
    dir: "▼",
    chg: "$8",
    signal: "HOLD",
    dirColor: "text-ticker-red",
    sigColor: "text-gold",
    sigBg: "bg-gold/10",
  },
  {
    grade: "HDPE 5000S",
    price: "$940",
    dir: "▲",
    chg: "$5",
    signal: "BUY",
    dirColor: "text-ticker-green",
    sigColor: "text-ticker-green",
    sigBg: "bg-ticker-green/10",
  },
  {
    grade: "LLDPE 7042",
    price: "$925",
    dir: "▲",
    chg: "$3",
    signal: "HOLD",
    dirColor: "text-ticker-green",
    sigColor: "text-gold",
    sigBg: "bg-gold/10",
  },
  {
    grade: "PA6 Chips",
    price: "$1,680",
    dir: "▼",
    chg: "$15",
    signal: "WAIT",
    dirColor: "text-ticker-red",
    sigColor: "text-ticker-red",
    sigBg: "bg-ticker-red/10",
  },
];

const features = [
  {
    title: "Pricing Direction",
    desc: "Kantor indicative pricing with directional signals",
    dot: "bg-teal",
  },
  {
    title: "Timing Intelligence",
    desc: "BUY / HOLD / WAIT signals for the next 7–14 days",
    dot: "bg-gold",
  },
  {
    title: "Supply Context",
    desc: "Disruption alerts, port updates, inventory dynamics",
    dot: "bg-white/40",
  },
];

export default function TerminalPreview() {
  return (
    <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Text */}
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            THE MORNING TERMINAL
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
            Market Intelligence Your
            <br className="hidden lg:block" />
            Competitors Don&apos;t Have.
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-7">
            Every Monday at 7 AM, subscribers receive pricing direction, timing
            signals, and supply disruption alerts via their preferred messaging
            app. Free for qualified distributors.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${f.dot}`}
                />
                <div>
                  <div className="font-sans text-sm font-semibold text-white">
                    {f.title}
                  </div>
                  <div className="font-sans text-[13px] text-body-text leading-snug">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/terminal"
            className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
          >
            Subscribe Now — Free
          </Link>
        </RevealDiv>

        {/* Right: Flat Terminal Card */}
        <RevealDiv delay={200}>
          <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[10px] text-muted">
                MON 7:00 AM
              </span>
              <span className="font-mono text-[10px] text-teal">● LIVE</span>
            </div>
            <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-2">
              KANTOR TERMINAL
            </div>
            <div className="font-serif text-base font-bold text-white mb-1">
              Weekly Market Brief
            </div>
            <div className="text-[9px] tracking-[1.5px] text-muted font-sans mb-4 pb-3 border-b border-white/[0.06]">
              POLYMER PRICING — VIETNAM
            </div>

            {/* Pricing Rows */}
            {pricingRows.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-2.5 ${
                  i < 3 ? "border-b border-white/[0.04]" : ""
                }`}
              >
                <div>
                  <div className="font-mono text-[11px] text-white font-semibold">
                    {row.grade}
                  </div>
                  <div className="font-mono text-[10px] text-muted">
                    {row.price}{" "}
                    <span className={row.dirColor}>
                      {row.dir}
                      {row.chg}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[9px] font-bold tracking-wider font-sans px-2 py-0.5 rounded ${row.sigColor} ${row.sigBg}`}
                >
                  {row.signal}
                </span>
              </div>
            ))}

            {/* Timing Note */}
            <div className="mt-4 p-3 rounded-lg bg-teal/[0.08] border border-teal/15">
              <div className="text-[9px] tracking-[1.5px] text-teal font-bold mb-1.5 font-sans">
                TIMING NOTE
              </div>
              <div className="text-[11px] text-body-text leading-snug font-sans">
                HDPE softening expected to reverse mid-week as Sinopec adjusts
                output. Consider front-loading PE orders before Wednesday.
              </div>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
