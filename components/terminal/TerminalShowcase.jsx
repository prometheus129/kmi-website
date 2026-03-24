import RevealDiv from "@/components/RevealDiv";

const pillars = [
  {
    num: "01",
    title: "Pricing Direction",
    desc: "Kantor indicative pricing for key grades with directional signals — firming, softening, or stable. Know where the market is heading before you commit.",
    accent: "border-teal",
  },
  {
    num: "02",
    title: "Timing Intelligence",
    desc: "BUY / HOLD / WAIT signals for the next 7–14 days. Your current supplier never says \"wait.\" Kantor Materials does — because our incentive is your outcome, not the transaction.",
    accent: "border-gold",
  },
  {
    num: "03",
    title: "Supply Context",
    desc: "Disruption alerts, port congestion updates, producer maintenance schedules, and inventory dynamics. The context that turns a price into a decision.",
    accent: "border-white/20",
  },
];

export default function TerminalShowcase() {
  return (
    <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            WHAT YOU RECEIVE
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 lg:mb-16 leading-tight">
            Three Pillars of Market Intelligence
          </h2>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <RevealDiv key={i} delay={i * 150}>
              <div className={`border-l-[3px] ${p.accent} pl-6`}>
                <div className="font-mono text-xs text-muted mb-2">
                  {p.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-body-text leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
