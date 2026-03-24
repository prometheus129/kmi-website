import RevealDiv from "@/components/RevealDiv";

const pillars = [
  {
    title: "Pricing Direction",
    desc: "Kantor indicative pricing for key grades with directional signals — firming, softening, or stable. Know where the market is heading before you commit.",
    accent: "border-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10 border-teal/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    title: "Timing Intelligence",
    desc: "BUY / HOLD / WAIT signals for the next 7–14 days. Your current supplier never says \"wait.\" Kantor Materials does — because our incentive is your outcome, not the transaction.",
    accent: "border-gold",
    iconColor: "text-gold",
    iconBg: "bg-gold/10 border-gold/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Supply Context",
    desc: "Disruption alerts, port congestion updates, producer maintenance schedules, and inventory dynamics. The context that turns a price into a decision.",
    accent: "border-white/20",
    iconColor: "text-body-text",
    iconBg: "bg-white/[0.06] border-white/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function TerminalShowcase() {
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
      <div className="max-w-[1200px] mx-auto relative z-10">
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
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${p.iconBg} ${p.iconColor}`}>
                  {p.icon}
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
