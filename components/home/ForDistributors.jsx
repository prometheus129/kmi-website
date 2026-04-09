import RevealDiv from "@/components/RevealDiv";

const layers = [
  {
    step: "LEARN",
    title: "Market Information",
    whatYouGet:
      "Market intelligence, pricing trends, grade catalog",
    howItWorks:
      "Subscribe to The Polymer Compass. Browse the catalog.",
    yourCost: "Free",
    highlight: false,
  },
  {
    step: "SEARCH",
    title: "Grade Search & Pricing",
    whatYouGet:
      "Matched grades, CFR pricing, documentation status",
    howItWorks:
      "Describe what you need. We respond in one to two business days.",
    yourCost: "Free",
    highlight: false,
  },
  {
    step: "ORDER",
    title: "Order Execution",
    whatYouGet:
      "Sourcing, QC, logistics, origin documentation",
    howItWorks:
      "Place the order. We handle everything China-side.",
    yourCost: "Pay only when you order",
    highlight: true,
  },
];

export default function ForDistributors() {
  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-5">
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white leading-tight">
              Built for distributors who source from China
            </h2>
          </div>
          <p className="font-sans text-lg text-body-text text-center max-w-[640px] mx-auto mb-6">
            You have the buyer relationships. We have the China market
            intelligence. Together, your business is more competitive.
          </p>
          <div className="max-w-[600px] mx-auto mb-14">
            <p className="font-sans text-[14px] text-body-text leading-relaxed text-center">
              You know your market, your buyers, and your regulations. What you
              may not have is a way to systematically search China&apos;s
              polymer supply base and turn that into quotes your buyers can act
              on.
            </p>
            <p className="font-sans text-[14px] text-body-text leading-relaxed text-center mt-3">
              That&apos;s what we do. You keep the buyer relationship and the
              margin. We handle the sourcing behind it.
            </p>
          </div>
        </RevealDiv>

        {/* Three-layer progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {layers.map((layer, i) => (
            <RevealDiv key={i} delay={i * 150}>
              <div
                className={`bg-white/[0.03] border rounded-lg p-6 h-full ${
                  layer.highlight
                    ? "border-gold/20"
                    : "border-white/[0.06]"
                }`}
              >
                <div
                  className={`font-mono text-[10px] tracking-[3px] font-bold mb-3 ${
                    layer.highlight ? "text-gold" : "text-teal"
                  }`}
                >
                  {layer.step}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-5">
                  {layer.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-muted mb-1.5">
                      What you get
                    </div>
                    <p className="font-sans text-[13px] text-body-text leading-relaxed">
                      {layer.whatYouGet}
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-muted mb-1.5">
                      How it works
                    </div>
                    <p className="font-sans text-[13px] text-body-text leading-relaxed">
                      {layer.howItWorks}
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[2px] text-muted mb-1.5">
                      Your cost
                    </div>
                    <p
                      className={`font-sans text-sm font-semibold ${
                        layer.highlight ? "text-gold" : "text-teal"
                      }`}
                    >
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
