import RevealDiv from "@/components/RevealDiv";

/**
 * Worked example of a five-domain response — shows what the buyer actually
 * gets. Per funnel mapping Gap 2: the capability cards SAY what one answer
 * includes, but they don't SHOW it. This section shows it.
 *
 * Uses a realistic (anonymized) example to demonstrate the aha moment.
 */

const domains = [
  {
    label: "MATCHED GRADES",
    content: "3 candidates identified from Chinese producers — Sinopec HDPE 5000S, PetroChina HDPE 5200B, Zhongjin HDPE HMA025. All meet ASTM D3350 PE3408 requirements for pressure pipe.",
    accent: "border-teal",
  },
  {
    label: "CURRENT PRICING",
    content: "CFR Ho Chi Minh City: $1,020–1,065/MT (April 2026). Your current Korean source quotes $1,140/MT — a $75–120/MT spread on identical performance specs.",
    accent: "border-teal",
  },
  {
    label: "FREIGHT & LANDED COST",
    content: "Guangzhou → HCMC: 2–5 days transit, $36/MT freight (20ft FCL). Total landed: $1,056–1,101/MT incl. 0% ACFTA duty + 8% VAT.",
    accent: "border-teal",
  },
  {
    label: "DOCUMENTATION",
    content: "Form E (ACFTA origin cert), Certificate of Analysis, TDS, HS code 3901.20. All three grades have full documentation available pre-shipment.",
    accent: "border-gold",
  },
  {
    label: "QUALITY NOTES",
    content: "Sinopec 5000S: shipped 4x to Vietnam buyers, consistent batch quality. PetroChina 5200B: no prior Vietnam shipments — recommend 1-container trial. Zhongjin HMA025: competitive pricing but limited track record.",
    accent: "border-gold",
  },
];

export default function ResponseExample() {
  return (
    <section className="bg-ticker-bg py-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(46,139,139,0.15) 0%, transparent 50%)" }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              WHAT IT LOOKS LIKE
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight mb-6">
              One question. One answer.
            </h2>
            <p className="font-sans text-base text-body-text leading-relaxed max-w-[600px] mx-auto">
              A distributor in Vietnam asked for HDPE pipe grade alternatives
              to their current Korean supplier. Here is what we sent back.
            </p>
          </div>
        </RevealDiv>

        {/* The response card */}
        <RevealDiv delay={100}>
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-xl overflow-hidden max-w-[900px] mx-auto">
            {/* Header bar */}
            <div className="bg-white/[0.03] px-6 lg:px-8 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="font-mono text-[11px] tracking-[3px] text-teal font-semibold">
                  FIVE-DOMAIN RESPONSE
                </span>
              </div>
              <span className="font-mono text-xs text-muted">
                Responded in 18 hours
              </span>
            </div>

            {/* Domain rows */}
            <div className="divide-y divide-white/[0.04]">
              {domains.map((d, i) => (
                <div key={i} className={`px-6 lg:px-8 py-5 border-l-[3px] ${d.accent}`}>
                  <div className="font-mono text-[11px] tracking-[3px] text-muted font-semibold mb-2">
                    {d.label}
                  </div>
                  <p className="font-sans text-sm text-body-text leading-relaxed">
                    {d.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-white/[0.03] px-6 lg:px-8 py-4 border-t border-white/[0.08]">
              <p className="font-sans text-xs text-muted italic">
                Illustrative example based on typical distributor inquiries. Specific grades, prices, and routes reflect representative market conditions.
              </p>
            </div>
          </div>
        </RevealDiv>

        {/* CTA below example */}
        <RevealDiv delay={200}>
          <div className="text-center mt-10">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
            >
              Tell us what you need
            </a>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
