import RevealDiv from "@/components/RevealDiv";

export default function SocialProof() {
  return (
    <section className="bg-navy py-14 lg:py-16 px-6 lg:px-10 border-y border-white/[0.04]">
      <div className="max-w-[800px] mx-auto text-center">
        <RevealDiv>
          <div className="flex justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal/50">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
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
