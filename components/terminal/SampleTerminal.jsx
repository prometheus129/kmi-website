import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";

const dailyRows = [
  { grade: "PP T30S", producer: "Kunlun", price: "$1,180", dir: "▼", chg: "$10", signal: "HOLD", dirColor: "text-ticker-red", sigColor: "text-gold", sigBg: "bg-gold/10" },
  { grade: "HDPE 5000S", producer: "Yangzi", price: "$1,210", dir: "▲", chg: "$8", signal: "BUY", dirColor: "text-ticker-green", sigColor: "text-ticker-green", sigBg: "bg-ticker-green/10" },
  { grade: "LLDPE 7042", producer: "Dushanzi", price: "$1,245", dir: "▲", chg: "$5", signal: "HOLD", dirColor: "text-ticker-green", sigColor: "text-gold", sigBg: "bg-gold/10" },
];

export default function SampleTerminal({ locale = "en" }) {
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4 text-center">
            WHAT YOU RECEIVE
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3 text-center">
            Two Products, One Subscription
          </h2>
          <p className="font-sans text-sm text-body-text text-center max-w-[520px] mx-auto mb-12">
            Daily pricing keeps you current. Weekly analysis tells you why it matters and what to do next.
          </p>
        </RevealDiv>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Daily Pricing Card */}
          <RevealDiv delay={200}>
            <div className="bg-[#0F1D2F] rounded-xl border border-white/[0.06] overflow-hidden h-full flex flex-col">
              {/* Badge + Header */}
              <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold tracking-widest font-sans text-navy-deep bg-teal px-2.5 py-1 rounded">
                    EVERY MORNING
                  </span>
                  <span className="font-mono text-[10px] text-muted">SAMPLE</span>
                </div>
                <div className="font-serif text-lg font-bold text-white">
                  Daily Pricing &amp; Signals
                </div>
                <div className="font-sans text-[11px] text-muted mt-1">
                  Kantor Indicative Pricing — CFR Assessment (USD)
                </div>
              </div>

              {/* Pricing Rows */}
              <div className="px-6 py-4 flex-1">
                {dailyRows.map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2.5 ${
                      i < dailyRows.length - 1 ? "border-b border-white/[0.04]" : ""
                    }`}
                  >
                    <div>
                      <div className="font-mono text-[11px] text-white font-medium">{row.grade}</div>
                      <div className="font-mono text-[9px] text-muted">{row.producer}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-mono text-[11px] text-white">{row.price}</div>
                        <div className={`font-mono text-[9px] ${row.dirColor}`}>
                          {row.dir}{row.chg}
                        </div>
                      </div>
                      <span className={`text-[8px] font-bold tracking-wider font-sans px-2 py-0.5 rounded ${row.sigColor} ${row.sigBg} w-[42px] text-center`}>
                        {row.signal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Daily Observation */}
              <div className="mx-6 mb-5 p-3 rounded-lg bg-teal/[0.08] border border-teal/15">
                <div className="text-[8px] tracking-[1.5px] text-teal font-bold mb-1 font-sans">
                  TODAY&apos;S OBSERVATION
                </div>
                <div className="text-[11px] text-body-text leading-relaxed font-sans">
                  Nansha port congestion easing — container dwell time down from 5d to 3d. PE freight from Guangzhou normalizing. No impact on PP routes ex-Ningbo.
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Weekly Analysis Card */}
          <RevealDiv delay={400}>
            <div className="bg-[#0F1D2F] rounded-xl border border-white/[0.06] overflow-hidden h-full flex flex-col">
              {/* Badge + Header */}
              <div className="px-6 pt-5 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-bold tracking-widest font-sans text-navy-deep bg-gold px-2.5 py-1 rounded">
                    EVERY MONDAY
                  </span>
                  <span className="font-mono text-[10px] text-muted">SAMPLE</span>
                </div>
                <div className="font-serif text-lg font-bold text-white">
                  Weekly Deep Analysis
                </div>
                <div className="font-sans text-[11px] text-muted mt-1">
                  Market direction, supply context, timing guidance
                </div>
              </div>

              {/* Analysis Content */}
              <div className="px-6 py-5 flex-1">
                <div className="font-serif text-[15px] font-bold text-white mb-3">
                  Three Corridors Down — One Left Standing
                </div>
                <div className="font-sans text-[12px] text-body-text leading-relaxed mb-5">
                  Three of four polymer supply corridors to SE Asia now disrupted. Middle East routes via Hormuz face transit risk premiums. Indian Ocean shipping stretched. Korean producers delaying bookings. China-origin product via South China Sea remains the only unimpeded route.
                </div>

                {/* Key Findings */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-3">
                    <div className="w-1 rounded-full bg-teal shrink-0 mt-0.5" style={{ minHeight: "16px" }} />
                    <div className="font-sans text-[11px] text-body-text leading-relaxed">
                      <span className="text-white font-medium">PP correction has further to run.</span> CTO/MTO producers quoting flat into weak domestic demand. $40-60/MT downside from panic highs.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 rounded-full bg-ticker-green shrink-0 mt-0.5" style={{ minHeight: "16px" }} />
                    <div className="font-sans text-[11px] text-body-text leading-relaxed">
                      <span className="text-white font-medium">HDPE tightening on Hormuz supply risk.</span> Non-China sources face 15-20 day transit delays. Act now on PE requirements.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 rounded-full bg-ticker-red shrink-0 mt-0.5" style={{ minHeight: "16px" }} />
                    <div className="font-sans text-[11px] text-body-text leading-relaxed">
                      <span className="text-white font-medium">PVC export rebate expiring April 1.</span> $20-40/MT FOB impact. Buyers with Q2 PVC needs should book before deadline.
                    </div>
                  </div>
                </div>
              </div>

              {/* Timing Signal */}
              <div className="mx-6 mb-5 p-3 rounded-lg bg-gold/[0.08] border border-gold/15">
                <div className="text-[8px] tracking-[1.5px] text-gold font-bold mb-1 font-sans">
                  WEEKLY TIMING SIGNAL
                </div>
                <div className="text-[11px] text-body-text leading-relaxed font-sans">
                  PP: <span className="text-gold font-semibold">WAIT</span> — correction ongoing. HDPE: <span className="text-ticker-green font-semibold">BUY</span> — supply tightening. PVC: <span className="text-ticker-green font-semibold">BUY</span> — rebate deadline.
                </div>
              </div>
            </div>
          </RevealDiv>
        </div>

        <RevealDiv delay={500}>
          <div className="text-center mt-10">
            <Link
              href="#subscribe"
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Subscribe — Free
            </Link>
            <p className="font-sans text-xs text-muted mt-3">
              Delivered via WhatsApp, Viber, or email. Unsubscribe anytime.
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
