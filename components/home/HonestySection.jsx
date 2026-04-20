import RevealDiv from "@/components/RevealDiv";

const promises = [
  {
    title: "We match grades. We don\u2019t guarantee production outcomes.",
    text: "A spec match is not a production guarantee. Processing behavior, batch consistency, and downstream quality depend on your equipment and conditions. We provide the data. You make the decision.",
  },
  {
    title: "We verify documents. We don\u2019t eliminate customs risk.",
    text: "We check for HS code mismatches, Form E errors, and cross-document inconsistencies before shipping. But customs authorities make final decisions, and regulations change without notice.",
  },
  {
    title: "We tell you when we don\u2019t know.",
    text: "If we haven\u2019t shipped a grade before, we say so. If a spec match looks marginal, we flag it. If the pricing doesn\u2019t justify the switching cost, we\u2019ll tell you that too.",
  },
];

export default function HonestySection() {
  return (
    <section className="bg-navy py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle radial accents */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,139,139,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column — heading + intro (sticky on desktop) */}
          <div className="lg:col-span-4">
            <RevealDiv>
              <div className="lg:sticky lg:top-28">
                <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
                  OUR APPROACH
                </div>
                <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
                  What we don&apos;t promise
                </h2>
                <p className="font-sans text-base text-body-text leading-relaxed">
                  We do three things: match grades, verify documents, and manage
                  execution. Here is what each one cannot guarantee.
                </p>
              </div>
            </RevealDiv>
          </div>

          {/* Right column — the four promise blocks */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {promises.map((p, i) => (
                <RevealDiv key={i} delay={150 + i * 80}>
                  <div className="border-l-[3px] border-teal/30 pl-6">
                    <h3 className="font-sans text-base font-bold text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="font-sans text-base text-body-text leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </RevealDiv>
              ))}
            </div>

            <RevealDiv delay={500}>
              <p className="font-sans text-base text-body-text leading-relaxed mt-10 pt-8 border-t border-white/[0.08]">
                The gap between a datasheet and a production floor is real. Our
                job is to close it with better information and the honesty to
                tell you when we can&apos;t.
              </p>
            </RevealDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
