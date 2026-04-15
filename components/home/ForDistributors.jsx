import RevealDiv from "@/components/RevealDiv";

const layers = [
  {
    step: "LEARN",
    title: "Market Information",
    whatYouGet: "Market intelligence, pricing trends, grade catalog",
    howItWorks: "Subscribe to The Polymer Compass. Browse the catalog.",
    yourCost: "Free",
    accent: "border-teal",
    stepColor: "text-teal",
    costColor: "text-teal",
    cardBg: "bg-gradient-to-br from-teal/[0.04] to-transparent",
    hoverBorder: "hover:border-teal/30",
  },
  {
    step: "SEARCH",
    title: "Grade Search & Pricing",
    whatYouGet: "Matched grades, CFR pricing, documentation status",
    howItWorks: "Describe what you need. We respond in one to two business days.",
    yourCost: "Free",
    accent: "border-white/20",
    stepColor: "text-teal",
    costColor: "text-teal",
    cardBg: "bg-gradient-to-br from-white/[0.03] to-transparent",
    hoverBorder: "hover:border-teal/30",
  },
  {
    step: "ORDER",
    title: "Order Execution",
    whatYouGet: "Sourcing, QC, logistics, origin documentation",
    howItWorks: "Place the order. We handle everything China-side.",
    yourCost: "Pay only when you order",
    accent: "border-gold/30",
    stepColor: "text-gold",
    costColor: "text-gold",
    cardBg: "bg-gradient-to-br from-gold/[0.04] to-transparent",
    hoverBorder: "hover:border-gold/40",
  },
];

export default function ForDistributors() {
  return (
    <section className="bg-ticker-bg py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,139,139,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-6">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              FOR DISTRIBUTORS
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight mb-6">
              Built for distributors who source from China
            </h2>
            <p className="font-sans text-xl text-body-text leading-normal max-w-[640px] mx-auto">
              You have the buyer relationships. We have the China market
              intelligence. Together, your business is more competitive.
            </p>
          </div>
          <div className="max-w-[620px] mx-auto mb-16">
            <p className="font-sans text-base text-body-text leading-relaxed text-center">
              You know your market, your buyers, and your regulations. What you
              may not have is a way to systematically search China&apos;s
              polymer supply base and turn that into quotes your buyers can act
              on. That&apos;s what we do. You keep the buyer relationship and
              the margin. We handle the sourcing behind it.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed text-center mt-4">
              Use alongside your current suppliers. Compare what we find with
              what you already have. No commitment, no exclusivity, no minimum
              volume.
            </p>
          </div>
        </RevealDiv>

        {/* Three-layer progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {layers.map((layer, i) => (
            <RevealDiv key={i} delay={i * 150}>
              <div
                className={`border border-white/[0.06] ${layer.accent} rounded-lg p-6 lg:p-8 h-full ${layer.cardBg} ${layer.hoverBorder} hover:-translate-y-[3px] transition-all duration-200`}
              >
                <div className={`font-mono text-[11px] tracking-[2px] font-bold mb-4 ${layer.stepColor}`}>
                  {layer.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-6">
                  {layer.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-muted mb-2">
                      What you get
                    </div>
                    <p className="font-sans text-sm text-body-text leading-relaxed">
                      {layer.whatYouGet}
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-muted mb-2">
                      How it works
                    </div>
                    <p className="font-sans text-sm text-body-text leading-relaxed">
                      {layer.howItWorks}
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-muted mb-2">
                      Your cost
                    </div>
                    <p className={`font-sans text-sm font-semibold ${layer.costColor}`}>
                      {layer.yourCost}
                    </p>
                  </div>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
