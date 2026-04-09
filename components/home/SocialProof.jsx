import RevealDiv from "@/components/RevealDiv";

export default function SocialProof() {
  return (
    <section className="bg-navy py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            PUBLISHED ACROSS 19 MARKETS
          </div>
          <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-[600px] mx-auto">
            100+ market intelligence articles in English, Vietnamese, Turkish,
            Spanish, and other languages — covering import economics, regulatory
            frameworks, and grade comparisons across Asia, the Middle East,
            Latin America, and Europe.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
