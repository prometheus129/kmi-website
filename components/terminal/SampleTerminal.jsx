import RevealDiv from "@/components/RevealDiv";

const rows = [
  { grade: "PP T30S (Kunlun)", price: "$1,015", dir: "▼", chg: "$8", signal: "HOLD", dirColor: "text-ticker-red", sigColor: "text-gold", sigBg: "bg-gold/10" },
  { grade: "HDPE 5000S (Yangzi)", price: "$940", dir: "▲", chg: "$5", signal: "BUY", dirColor: "text-ticker-green", sigColor: "text-ticker-green", sigBg: "bg-ticker-green/10" },
  { grade: "LLDPE 7042 (Dushanzi)", price: "$925", dir: "▲", chg: "$3", signal: "HOLD", dirColor: "text-ticker-green", sigColor: "text-gold", sigBg: "bg-gold/10" },
  { grade: "PA6 Chips (Hengyi)", price: "$1,680", dir: "▼", chg: "$15", signal: "WAIT", dirColor: "text-ticker-red", sigColor: "text-ticker-red", sigBg: "bg-ticker-red/10" },
  { grade: "HDPE HHM 5502 (Sinopec)", price: "$960", dir: "▲", chg: "$12", signal: "BUY", dirColor: "text-ticker-green", sigColor: "text-ticker-green", sigBg: "bg-ticker-green/10" },
  { grade: "ABS 750A (Chimei equiv.)", price: "$1,240", dir: "—", chg: "flat", signal: "HOLD", dirColor: "text-muted", sigColor: "text-gold", sigBg: "bg-gold/10" },
];

export default function SampleTerminal() {
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[700px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4 text-center">
            SAMPLE DELIVERY
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-10 text-center">
            What a Morning Terminal Looks Like
          </h2>
        </RevealDiv>

        <RevealDiv delay={200}>
          <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[10px] text-muted">MON 7:00 AM · MARCH 24, 2026</span>
              <span className="font-mono text-[10px] text-teal">● LIVE</span>
            </div>
            <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-1">KANTOR TERMINAL</div>
            <div className="font-serif text-lg font-bold text-white mb-1">Weekly Market Brief</div>
            <div className="font-sans text-xs text-muted mb-6">Vietnam · Philippines · Indicative Pricing (USD CFR)</div>

            {/* Market Context */}
            <div className="font-sans text-[13px] text-body-text leading-relaxed mb-6 pb-6 border-b border-white/[0.06]">
              PE complex firming on reduced Sinopec output and port congestion in Nansha.
              PP stable with CTO/MTO margins compressing — watch for producer destocking mid-week.
              PA6 under pressure from weak downstream demand in textile sector.
            </div>

            {/* Pricing Table */}
            <div className="text-[9px] tracking-[1.5px] text-muted font-sans mb-3">KANTOR INDICATIVE PRICING</div>
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
              <div className="text-[9px] tracking-[1.5px] text-teal font-bold mb-2 font-sans">TIMING NOTE</div>
              <div className="text-[12px] text-body-text leading-relaxed font-sans">
                HDPE softening expected to reverse mid-week as Sinopec adjusts output.
                Consider front-loading PE orders before Wednesday. PP window remains stable through Friday —
                no urgency on polypropylene this week.
              </div>
            </div>

            {/* Supply Alert */}
            <div className="mt-4 p-4 rounded-lg bg-ticker-red/[0.06] border border-ticker-red/15">
              <div className="text-[9px] tracking-[1.5px] text-ticker-red font-bold mb-2 font-sans">SUPPLY ALERT</div>
              <div className="text-[12px] text-body-text leading-relaxed font-sans">
                Nansha port congestion adding 2-3 day delays on HDPE/LLDPE shipments ex-South China.
                Ningbo and Shanghai routes unaffected. Factor into delivery timing if ordering PE this week.
              </div>
            </div>
          </div>

          <p className="text-center font-sans text-xs text-muted mt-4 italic">
            Illustrative content. Actual Terminal reflects live market conditions.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
