import RevealDiv from "@/components/RevealDiv";

const promises = [
  {
    title: "We identify the strongest candidates.",
    text: "When you submit a requirement, we search across tens of thousands of Chinese polymer grades and return the options that best match your specifications. Not one supplier\u2019s recommendation \u2014 the broader market, filtered by technical fit.",
  },
  {
    title: "We provide complete technical data.",
    text: "Every candidate grade comes with published specifications, and where available, Certificate of Analysis history and compliance documentation. You make the decision with full information, not partial data.",
  },
  {
    title: "We support you through qualification.",
    text: "Grade changes require testing \u2014 desktop screening, lab analysis, process trials. We help structure the evaluation, provide reference data from prior shipments, and source trial quantities when you\u2019re ready to test.",
  },
  {
    title: "We are honest about what we don\u2019t know.",
    text: "If we haven\u2019t shipped a grade before, we say so. If a spec match looks marginal, we flag it. If the pricing doesn\u2019t justify the switching cost, we\u2019ll tell you that too.",
  },
];

export default function HonestySection() {
  return (
    <section className="bg-navy py-20 lg:py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(46,139,139,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(212,168,67,0.08) 0%, transparent 50%)" }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column — heading + intro (sticky on desktop) */}
          <div className="lg:col-span-4">
            <RevealDiv>
              <div className="lg:sticky lg:top-28">
                <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
                  OUR APPROACH
                </div>
                <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
                  What we don&apos;t promise
                </h2>
                <p className="font-sans text-base text-body-text leading-relaxed mb-4">
                  That&apos;s what we search. Here&apos;s what we can&apos;t
                  guarantee: a datasheet match is not a production guarantee.
                </p>
                <p className="font-sans text-base text-body-text leading-relaxed">
                  Processing behavior, batch consistency, and downstream quality
                  depend on variables no database can fully predict — ours
                  included.
                </p>
              </div>
            </RevealDiv>
          </div>

          {/* Right column — the four promise blocks */}
          <div className="lg:col-span-8">
            <RevealDiv delay={100}>
              <p className="font-sans text-base text-body-text leading-relaxed mb-8 lg:mb-10">
                Here is what we do:
              </p>
            </RevealDiv>

            <div className="space-y-8">
              {promises.map((p, i) => (
                <RevealDiv key={i} delay={150 + i * 80}>
                  <div className="border-l-2 border-teal/30 pl-6">
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
              <p className="font-sans text-base text-body-text leading-relaxed mt-10 pt-8 border-t border-white/[0.06]">
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
