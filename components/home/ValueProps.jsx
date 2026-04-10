import RevealDiv from "@/components/RevealDiv";

const props = [
  {
    title: "Market Intelligence",
    text: "Daily market signals, pricing context, and timing guidance delivered to your phone before you make purchasing decisions.",
    accent: "border-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10 border-teal/20",
    cardBg: "bg-gradient-to-br from-teal/[0.04] to-transparent",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Broader Market Sourcing",
    text: "We search across the broader China polymer market on every order. You see one price \u2014 the best one available for your grade, quantity, and timeline.",
    accent: "border-white/20",
    iconColor: "text-body-text",
    iconBg: "bg-white/[0.06] border-white/10",
    cardBg: "bg-gradient-to-br from-white/[0.03] to-transparent",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Collective Buying Power",
    text: "When multiple distributors order similar grades, their combined volume unlocks pricing tiers that individual mid-tier orders cannot reach.",
    accent: "border-gold",
    iconColor: "text-gold",
    iconBg: "bg-gold/10 border-gold/20",
    cardBg: "bg-gradient-to-br from-gold/[0.04] to-transparent",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ValueProps() {
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
      {/* Warehouse/logistics texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,139,139,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            HOW WE CREATE VALUE
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 lg:mb-16 leading-tight">
            Intelligence. Sourcing. Scale.
          </h2>
        </RevealDiv>

        {/* Three columns, single row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {props.map((p, i) => (
            <RevealDiv key={i} delay={i * 150}>
              <div className={`border-l-[3px] ${p.accent} pl-6 pr-4 py-5 rounded-r-lg ${p.cardBg}`}>
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${p.iconBg} ${p.iconColor}`}>
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-[14.5px] text-body-text leading-relaxed">
                  {p.text}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
