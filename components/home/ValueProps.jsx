import RevealDiv from "@/components/RevealDiv";

const props = [
  {
    title: "Market Intelligence",
    text: "Weekly market signals, pricing context, and timing guidance delivered to your phone before you make purchasing decisions.",
    accent: "border-teal",
    iconColor: "text-teal",
    iconBg: "bg-teal/10 border-teal/20",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Best-Execution Procurement",
    text: "Kantor Materials evaluates 600+ merchants on every order. You see one price — the best one available for your grade, quantity, and timeline.",
    accent: "border-white/20",
    iconColor: "text-body-text",
    iconBg: "bg-white/[0.06] border-white/10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Volume Economics",
    text: "Syndicate purchasing pods aggregate demand across buyers. Your 50 MT becomes part of a 300 MT order. Everyone benefits.",
    accent: "border-gold",
    iconColor: "text-gold",
    iconBg: "bg-gold/10 border-gold/20",
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
            HOW WE CREATE VALUE
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-12 lg:mb-16 leading-tight">
            Intelligence. Execution. Economics.
          </h2>
        </RevealDiv>

        {/* Asymmetric layout: featured first item + two compact items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Featured value prop */}
          <RevealDiv className="lg:col-span-5">
            <div className={`border-l-[3px] ${props[0].accent} pl-6 lg:pl-8`}>
              <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${props[0].iconBg} ${props[0].iconColor}`}>
                {props[0].icon}
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                {props[0].title}
              </h3>
              <p className="font-sans text-[15px] text-body-text leading-relaxed">
                {props[0].text}
              </p>
            </div>
          </RevealDiv>

          {/* Two compact value props stacked */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-8">
            {props.slice(1).map((p, i) => (
              <RevealDiv key={i} delay={(i + 1) * 150}>
                <div className={`border-l-[3px] ${p.accent} pl-6`}>
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-3 ${p.iconBg} ${p.iconColor}`}>
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3">
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
      </div>
    </section>
  );
}
