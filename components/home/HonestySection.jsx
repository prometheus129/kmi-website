import RevealDiv from "@/components/RevealDiv";

export default function HonestySection() {
  return (
    <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: "url('/images/trust-texture.jpg')" }}
      />

      <div className="max-w-[720px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            OUR APPROACH
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-6 leading-tight">
            What we don&apos;t promise
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-3">
            That&apos;s what we search. Here&apos;s what we can&apos;t
            guarantee: a datasheet match is not a production guarantee.
            Processing behavior, batch consistency, and downstream quality
            depend on variables no database can fully predict — ours included.
          </p>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-10">
            Here is what we do:
          </p>
        </RevealDiv>

        <RevealDiv delay={100}>
          <div className="space-y-7">
            <div className="border-l-2 border-teal/30 pl-5">
              <h3 className="font-sans text-[15px] font-bold text-white mb-2">
                We identify the strongest candidates.
              </h3>
              <p className="font-sans text-[14px] text-body-text leading-relaxed">
                When you submit a requirement, we search across tens of
                thousands of Chinese polymer grades and return the options that
                best match your specifications. Not one supplier&apos;s
                recommendation — the broader market, filtered by technical fit.
              </p>
            </div>

            <div className="border-l-2 border-teal/30 pl-5">
              <h3 className="font-sans text-[15px] font-bold text-white mb-2">
                We provide complete technical data.
              </h3>
              <p className="font-sans text-[14px] text-body-text leading-relaxed">
                Every candidate grade comes with published specifications, and
                where available, Certificate of Analysis history and compliance
                documentation. You make the decision with full information, not
                partial data.
              </p>
            </div>

            <div className="border-l-2 border-teal/30 pl-5">
              <h3 className="font-sans text-[15px] font-bold text-white mb-2">
                We support you through qualification.
              </h3>
              <p className="font-sans text-[14px] text-body-text leading-relaxed">
                Grade changes require testing — desktop screening, lab analysis,
                process trials. We help structure the evaluation, provide
                reference data from prior shipments, and source trial quantities
                when you&apos;re ready to test.
              </p>
            </div>

            <div className="border-l-2 border-teal/30 pl-5">
              <h3 className="font-sans text-[15px] font-bold text-white mb-2">
                We are honest about what we don&apos;t know.
              </h3>
              <p className="font-sans text-[14px] text-body-text leading-relaxed">
                If we haven&apos;t shipped a grade before, we say so. If a spec
                match looks marginal, we flag it. If the pricing doesn&apos;t
                justify the switching cost, we&apos;ll tell you that too.
              </p>
            </div>
          </div>
        </RevealDiv>

        <RevealDiv delay={200}>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mt-10 pt-8 border-t border-white/[0.06]">
            The gap between a datasheet and a production floor is real. Our job
            is to close it with better information and the honesty to tell you
            when we can&apos;t.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
