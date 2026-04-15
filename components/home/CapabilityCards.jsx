import RevealDiv from "@/components/RevealDiv";

const capabilities = [
  {
    title: "Matched grades",
    text: "Candidates filtered from tens of thousands of Chinese polymer grades by the properties and application you specify.",
    accent: "border-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10 border-teal/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Current pricing",
    text: "CFR pricing for your destination, evaluated across the broader market. Not one supplier\u2019s list price.",
    accent: "border-white/20",
    iconColor: "text-body-text",
    iconBg: "bg-white/[0.06] border-white/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Freight and landed cost",
    text: "Origin port, transit time, freight rate, and total landed cost calculated for your specific route.",
    accent: "border-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10 border-teal/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20l3.5-7H18l4 7H2z" />
        <path d="M5.5 13V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7" />
        <path d="M18 13l2-4" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    text: "Form E, Certificate of Analysis, TDS, HS code, and duty rate information for your destination market. Assembled, not chased.",
    accent: "border-gold",
    iconColor: "text-gold",
    iconBg: "bg-gold/10 border-gold/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Quality notes",
    text: "Where others have shipped a grade, we share what they observed. Where no one has yet, we say so. Every shipment adds to what we know.",
    accent: "border-white/20",
    iconColor: "text-body-text",
    iconBg: "bg-white/[0.06] border-white/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function CapabilityCards() {
  return (
    <section className="bg-cards-bg py-20 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              WHAT YOU GET
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight">
              What one answer includes
            </h2>
          </div>
        </RevealDiv>

        {/* Row 1: three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {capabilities.slice(0, 3).map((cap, i) => (
            <RevealDiv key={i} delay={i * 100}>
              <div className={`border-l-[3px] ${cap.accent} pl-6 pr-5 py-6 rounded-r-lg bg-white/[0.04] h-full hover:-translate-y-[3px] hover:bg-white/[0.07] transition-all duration-200`}>
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${cap.iconBg} ${cap.iconColor}`}>
                  {cap.icon}
                </div>
                <h3 className="font-sans text-base font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="font-sans text-sm text-body-text leading-relaxed">
                  {cap.text}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>

        {/* Row 2: two cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[740px] mx-auto">
          {capabilities.slice(3).map((cap, i) => (
            <RevealDiv key={i + 3} delay={(i + 3) * 100}>
              <div className={`border-l-[3px] ${cap.accent} pl-6 pr-5 py-6 rounded-r-lg bg-white/[0.04] h-full hover:-translate-y-[3px] hover:bg-white/[0.07] transition-all duration-200`}>
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${cap.iconBg} ${cap.iconColor}`}>
                  {cap.icon}
                </div>
                <h3 className="font-sans text-base font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="font-sans text-sm text-body-text leading-relaxed">
                  {cap.text}
                </p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
