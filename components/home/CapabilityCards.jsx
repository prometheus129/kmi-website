import RevealDiv from "@/components/RevealDiv";

const capabilities = [
  {
    title: "Matched grades",
    text: "Candidates filtered from tens of thousands of Chinese polymer grades by the properties and application you specify.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Current pricing",
    text: "CFR pricing for your destination, evaluated across the broader market. Not one supplier\u2019s list price.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Freight and landed cost",
    text: "Origin port, transit time, freight rate, and total landed cost calculated for your specific route.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20l3.5-7H18l4 7H2z" />
        <path d="M5.5 13V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7" />
        <path d="M18 13l2-4" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    text: "Form E, Certificate of Analysis, TDS, HS code, and duty rate information for your destination market. Assembled, not chased.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Quality notes",
    text: "Where we have prior experience with a grade, we share it. Where we don\u2019t, we tell you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function CapabilityCards() {
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white leading-tight">
              What one answer includes
            </h2>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {capabilities.map((cap, i) => (
            <RevealDiv key={i} delay={i * 100}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-4 text-teal">
                  {cap.icon}
                </div>
                <h3 className="font-sans text-[15px] font-bold text-white mb-2.5">
                  {cap.title}
                </h3>
                <p className="font-sans text-[13px] text-body-text leading-relaxed">
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
