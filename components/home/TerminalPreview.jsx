import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";

const features = [
  {
    title: "Pricing Direction",
    desc: "Kantor indicative pricing with directional signals",
    dot: "bg-teal",
  },
  {
    title: "Timing Intelligence",
    desc: "When to buy — and when to wait",
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
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,139,139,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left: Text */}
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            THE POLYMER COMPASS
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
            Market Intelligence Your
            <br className="hidden lg:block" />
            Competitors Don&apos;t Have.
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-7">
            Daily pricing direction, timing signals, and supply disruption
            alerts delivered to your phone. Free for distributors.
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
            href="/terminal#subscribe"
            className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
          >
            Subscribe Now — Free
          </Link>
        </RevealDiv>

        {/* Right: Product Demo Card */}
        <RevealDiv delay={200}>
          <Link href="/terminal/three-corridors-down" className="block group">
            <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-teal/20 group-hover:shadow-[0_30px_80px_rgba(46,139,139,0.08)]">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[10px] tracking-wider text-teal font-bold bg-teal/10 px-2 py-0.5 rounded">
                  SAMPLE ISSUE
                </span>
                <span className="font-mono text-[10px] text-muted">
                  Updated daily
                </span>
              </div>

              <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-2">
                THE POLYMER COMPASS
              </div>

              <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-5 leading-tight">
                Should you buy this week — or wait?
              </h3>

              {/* Signal Rows */}
              <div className="bg-white/[0.03] rounded-lg p-4 mb-5">
                {[
                  { grade: "PP Raffia", dir: "down", chg: "$15", signal: "WAIT", reason: "correction ongoing" },
                  { grade: "LLDPE C4 Film", dir: "up", chg: "$8", signal: "HOLD", reason: null },
                  { grade: "HDPE 5000S", dir: "flat", chg: null, signal: "BUY", reason: "supply tightening" },
                  { grade: "PVC SG-5", dir: "up", chg: "$20", signal: "BUY", reason: "rebate window closing" },
                ].map((row, i, arr) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 ${
                      i < arr.length - 1 ? "border-b border-white/[0.04]" : ""
                    }`}
                  >
                    <span className="font-mono text-[12px] text-white font-medium">
                      {row.grade}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono text-[11px] ${
                          row.dir === "up"
                            ? "text-ticker-green"
                            : row.dir === "down"
                              ? "text-ticker-red"
                              : "text-muted"
                        }`}
                      >
                        {row.dir === "up" ? "▲" : row.dir === "down" ? "▼" : "—"}{" "}
                        {row.chg || "flat"}
                      </span>
                      <span
                        className={`text-[10px] font-bold tracking-wider font-sans px-2.5 py-0.5 rounded text-center min-w-[42px] ${
                          row.signal === "BUY"
                            ? "text-ticker-green bg-ticker-green/10"
                            : row.signal === "HOLD"
                              ? "text-gold bg-gold/10"
                              : "text-ticker-red bg-ticker-red/10"
                        }`}
                      >
                        {row.signal}
                      </span>
                      {row.reason && (
                        <span className="font-sans text-[10px] text-muted hidden sm:inline">
                          {row.reason}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Signal Logic Callout */}
              <div className="p-3 rounded-lg bg-teal/[0.06] border border-teal/10 mb-5">
                <div className="text-[8px] tracking-[1.5px] text-teal font-bold font-sans mb-1">
                  TODAY&apos;S SIGNAL LOGIC
                </div>
                <p className="text-[11px] text-body-text leading-relaxed font-sans">
                  PP correction has further to run. CTO producers quoting flat
                  into weak domestic demand. Wait for further softening before
                  committing.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                <span className="font-sans text-[11px] text-muted">
                  Kantor Materials Research
                </span>
                <span className="font-sans text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform duration-200">
                  See sample issue →
                </span>
              </div>
            </div>
          </Link>
          <p className="text-center font-sans text-xs text-muted mt-4">
            Sample data. Delivered daily via WhatsApp or email.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
