import RevealDiv from "@/components/RevealDiv";

const certifications = ["UL LISTED", "ISO 9001", "GRS CERTIFIED", "REACH", "RoHS"];

export default function TrustSection() {
  return (
    <section className="bg-navy py-20 px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              MANUFACTURING PARTNER
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-3">
              Validated by Production.
            </h2>
            <p className="font-sans text-[15px] text-body-text max-w-[600px] mx-auto">
              Our compounds are validated in our own production lines — over 2
              million finished goods manufactured annually with Remay materials.
            </p>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <div className="flex justify-center items-center gap-3 lg:gap-4 flex-wrap mb-10">
            {certifications.map((cert, i) => (
              <span key={cert} className="flex items-center gap-3 lg:gap-4">
                <span className="font-mono text-[11px] tracking-[2px] text-body-text">
                  {cert}
                </span>
                {i < certifications.length - 1 && (
                  <span className="text-white/20">·</span>
                )}
              </span>
            ))}
          </div>
        </RevealDiv>

        <RevealDiv delay={300}>
          <div className="text-center">
            <div className="font-mono text-[13px] text-white/50 tracking-wide">
              BYD · CATL · CALB
            </div>
            <p className="font-sans text-xs text-muted mt-2">
              Tier 1 OEM clients supplied by our manufacturing partner
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
