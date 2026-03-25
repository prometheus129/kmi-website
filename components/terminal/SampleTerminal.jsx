import RevealDiv from "@/components/RevealDiv";
import { t } from "@/lib/terminal-i18n";

const rows = [
  { grade: "PP T30S (Kunlun)", price: "$1,180", dir: "▼", chg: "$10", signal: "HOLD", dirColor: "text-ticker-red", sigColor: "text-gold", sigBg: "bg-gold/10" },
  { grade: "HDPE 5000S (Yangzi)", price: "$1,210", dir: "▲", chg: "$8", signal: "BUY", dirColor: "text-ticker-green", sigColor: "text-ticker-green", sigBg: "bg-ticker-green/10" },
  { grade: "LLDPE 7042 (Dushanzi)", price: "$1,245", dir: "▲", chg: "$5", signal: "HOLD", dirColor: "text-ticker-green", sigColor: "text-gold", sigBg: "bg-gold/10" },
  { grade: "PA6 Chips (Hengyi)", price: "$1,680", dir: "▼", chg: "$15", signal: "WAIT", dirColor: "text-ticker-red", sigColor: "text-ticker-red", sigBg: "bg-ticker-red/10" },
  { grade: "HDPE HHM 5502 (Sinopec)", price: "$1,230", dir: "▲", chg: "$12", signal: "BUY", dirColor: "text-ticker-green", sigColor: "text-ticker-green", sigBg: "bg-ticker-green/10" },
  { grade: "ABS 750A (Chimei equiv.)", price: "$1,240", dir: "—", chg: "flat", signal: "HOLD", dirColor: "text-muted", sigColor: "text-gold", sigBg: "bg-gold/10" },
];

export default function SampleTerminal({ locale = "en" }) {
  const text = t(locale).sample;
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[700px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4 text-center">
            {text.label}
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-10 text-center">
            {text.title}
          </h2>
        </RevealDiv>

        <RevealDiv delay={200}>
          <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[10px] text-muted">{text.weeklyLabel}</span>
              <span className="font-mono text-[10px] text-muted">{text.preview}</span>
            </div>
            <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-1">{text.terminalLabel}</div>
            <div className="font-serif text-lg font-bold text-white mb-1">{text.weeklyTitle}</div>
            <div className="font-sans text-xs text-muted mb-6">{text.marketScope}</div>

            {/* Market Context */}
            <div className="font-sans text-[13px] text-body-text leading-relaxed mb-6 pb-6 border-b border-white/[0.06]">
              {text.marketContext}
            </div>

            {/* Pricing Table */}
            <div className="text-[9px] tracking-[1.5px] text-muted font-sans mb-3">{text.pricingLabel}</div>
            {rows.map((row, i) => (
              <div key={i} className={`flex justify-between items-center py-2.5 ${i < rows.length - 1 ? "border-b border-white/[0.04]" : ""}`}>
                <div>
                  <div className="font-mono text-[11px] text-white font-semibold">{row.grade}</div>
                  <div className="font-mono text-[10px] text-muted">
                    {row.price}{" "}
                    <span className={row.dirColor}>{row.dir}{row.chg !== "flat" ? row.chg : ""} {row.chg === "flat" ? "flat" : ""}</span>
                  </div>
                </div>
                <span className={`text-[9px] font-bold tracking-wider font-sans px-2 py-0.5 rounded ${row.sigColor} ${row.sigBg}`}>
                  {row.signal}
                </span>
              </div>
            ))}

            {/* Timing Note */}
            <div className="mt-6 p-4 rounded-lg bg-teal/[0.08] border border-teal/15">
              <div className="text-[9px] tracking-[1.5px] text-teal font-bold mb-2 font-sans">{text.timingLabel}</div>
              <div className="text-[12px] text-body-text leading-relaxed font-sans">
                {text.timingText}
              </div>
            </div>

            {/* Supply Alert */}
            <div className="mt-4 p-4 rounded-lg bg-ticker-red/[0.06] border border-ticker-red/15">
              <div className="text-[9px] tracking-[1.5px] text-ticker-red font-bold mb-2 font-sans">{text.supplyLabel}</div>
              <div className="text-[12px] text-body-text leading-relaxed font-sans">
                {text.supplyText}
              </div>
            </div>
          </div>

          <p className="text-center font-sans text-xs text-muted mt-4 italic">
            {text.disclaimer}
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
