import RevealDiv from "@/components/RevealDiv";

const certifications = ["UL LISTED", "ISO 9001", "GRS CERTIFIED", "REACH", "RoHS"];
const brands = ["BYD", "CATL", "CALB"];

export default function TrustSection() {
  return (
    <section className="bg-light-gray py-20 px-6 lg:px-10 border-t border-mid-gray">
      <div className="max-w-[1200px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              MANUFACTURING PARTNER
            </div>
            <h2 className="font-serif text-[32px] font-bold text-navy mb-3">
              Validated by Production.
            </h2>
            <p className="font-sans text-[15px] text-slate max-w-[600px] mx-auto">
              Our compounds are validated in our own production lines — over 2
              million finished goods manufactured annually with Remay materials.
            </p>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <div className="flex justify-center gap-6 lg:gap-12 items-center flex-wrap mb-12">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="px-6 py-3.5 border border-mid-gray rounded-md font-sans text-xs font-bold tracking-widest text-slate"
              >
                {cert}
              </div>
            ))}
          </div>
        </RevealDiv>

        <RevealDiv delay={300}>
          <div className="flex justify-center gap-10 items-center flex-wrap opacity-40">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-serif text-lg font-bold text-navy tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="text-center font-sans text-xs text-body-text mt-4">
            Select end-customers supplied by our manufacturing partner
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
