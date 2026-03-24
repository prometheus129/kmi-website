import RevealDiv from "@/components/RevealDiv";

const props = [
  {
    num: "01",
    title: "Market Intelligence",
    text: "Weekly market signals, pricing context, and timing guidance delivered to your phone before you make purchasing decisions.",
    accent: "teal",
  },
  {
    num: "02",
    title: "Best-Execution Procurement",
    text: "Kantor Materials evaluates 600+ merchants on every order. You see one price — the best one available for your grade, quantity, and timeline.",
    accent: "navy",
  },
  {
    num: "03",
    title: "Volume Economics",
    text: "Syndicate purchasing pods aggregate demand across buyers. Your 50 MT becomes part of a 300 MT order. Everyone benefits.",
    accent: "gold",
  },
];

const accentColors = {
  teal: "border-teal",
  navy: "border-slate",
  gold: "border-gold",
};

export default function ValueProps() {
  return (
    <section className="bg-light-gray py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            HOW WE CREATE VALUE
          </div>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-navy mb-12 lg:mb-16 leading-tight">
            Intelligence. Execution. Economics.
          </h2>
        </RevealDiv>

        {/* Asymmetric layout: featured first item + two compact items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Featured value prop */}
          <RevealDiv className="lg:col-span-5">
            <div className={`border-l-[3px] ${accentColors[props[0].accent]} pl-6 lg:pl-8`}>
              <div className="font-mono text-xs text-muted mb-3">
                {props[0].num}
              </div>
              <h3 className="font-serif text-[26px] lg:text-[30px] font-bold text-navy mb-4 leading-tight">
                {props[0].title}
              </h3>
              <p className="font-sans text-[15px] text-slate leading-relaxed">
                {props[0].text}
              </p>
            </div>
          </RevealDiv>

          {/* Two compact value props stacked */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-8">
            {props.slice(1).map((p, i) => (
              <RevealDiv key={i} delay={(i + 1) * 150}>
                <div className={`border-l-[3px] ${accentColors[p.accent]} pl-6`}>
                  <div className="font-mono text-xs text-muted mb-2">
                    {p.num}
                  </div>
                  <h3 className="font-serif text-[22px] font-bold text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[14.5px] text-slate leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
