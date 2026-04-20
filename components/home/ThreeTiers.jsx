import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

const tiers = [
  {
    title: "Instant Answers",
    accent: "border-teal",
    accentBg: "bg-teal/10",
    accentText: "text-teal",
    description:
      "Grade specifications, equivalencies, HS codes, duty rates, certifications, pricing benchmarks. Ask about any product in the database \u2014 get the technical data that takes your team hours to assemble.",
    examples: [
      "\u201CChinese alternative to LG Chem ME9180 for blown film?\u201D",
      "\u201CWhat\u2019s the HS code for PP copolymer, density 0.905, into Vietnam?\u201D",
      "\u201CCompare T30S Maoming vs. T30S Zhongke \u2014 what\u2019s different?\u201D",
    ],
  },
  {
    title: "Verified Responses",
    accent: "border-white/30",
    accentBg: "bg-white/10",
    accentText: "text-white/60",
    description:
      "Document verification against published specs and regulatory rules. Forward a CoA \u2014 we check every property against the TDS. Forward a Form E \u2014 we verify the HS code, FOB value, origin criterion. Landed cost builds with freight, duty, and compliance for your route.",
    examples: [
      "\u201CCan you verify this CoA? MFI says 29 but TDS shows 22\u201328.\u201D",
      "\u201CCheck this Form E before I submit to customs.\u201D",
      "\u201CWhat\u2019s my total landed cost for HDPE 5000S, Guangzhou to HCMC, 22 MT?\u201D",
    ],
  },
  {
    title: "Managed Execution",
    accent: "border-gold",
    accentBg: "bg-gold/10",
    accentText: "text-gold",
    description:
      "When you\u2019re ready to source through us: merchant selection, QC coordination, documentation generated correctly at source, logistics, tracking, and issue resolution. Pay only when we source a deal for you. No contract. No exclusivity.",
    examples: [],
    whatChanges: [
      "Documents are generated right instead of verified after.",
      "Tracking is automatic instead of manual.",
      "Issues are resolved on your behalf instead of navigated alone.",
    ],
  },
];

export default function ThreeTiers() {
  return (
    <section className="bg-navy-deep py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <Image
          src="/images/trust-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/50" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              WHAT WE CAN DO
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight max-w-[800px] mx-auto">
              Grade Specs in Minutes.
              <br className="hidden sm:block" />
              {" "}Document Verification Within the Day.
              <br className="hidden sm:block" />
              {" "}Full Execution When You&apos;re Ready.
            </h2>
          </div>
        </RevealDiv>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <RevealDiv key={tier.title} delay={i * 120}>
              <div
                className={`border-l-[3px] ${tier.accent} p-6 lg:p-8 rounded-r-lg bg-white/[0.04] h-full`}
              >
                {/* Tier title */}
                <div
                  className={`flex items-center gap-2 mb-4`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${tier.accentBg} ${tier.accentText} ring-2 ring-current`}
                  />
                  <h3 className="font-sans text-base font-bold text-white">
                    {tier.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-body-text leading-relaxed mb-5">
                  {tier.description}
                </p>

                {/* Example prompts */}
                {tier.examples.length > 0 && (
                  <div className="space-y-2">
                    {tier.examples.map((ex, j) => (
                      <div
                        key={j}
                        className="bg-white/[0.02] border border-white/[0.06] rounded px-3 py-2"
                      >
                        <p className="font-mono text-xs text-body-text/80 leading-relaxed">
                          {ex}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* What changes (Tier 3 only) */}
                {tier.whatChanges && (
                  <div className="border-t border-white/[0.06] mt-5 pt-5">
                    <div className="font-sans text-[11px] font-bold uppercase tracking-[3px] text-muted mb-3">
                      What changes
                    </div>
                    <ul className="space-y-2">
                      {tier.whatChanges.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 font-sans text-sm text-body-text"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </RevealDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
