import RevealDiv from "@/components/RevealDiv";

export default function WhyItMatters() {
  return (
    <section className="bg-navy py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[800px] mx-auto">
        <RevealDiv>
          <div className="border-l-[3px] border-teal pl-6 lg:pl-8">
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4">
              Why This Matters
            </h3>
            <p className="font-sans text-[15px] text-body-text leading-relaxed">
              Your current trading company shares prices. Kantor Materials
              shares intelligence. The difference: a price tells you what the
              market was. A signal tells you what it&apos;s becoming. Our
              subscribers consistently time their purchases better — and when
              they&apos;re ready to buy, Kantor Materials is already their most
              trusted source.
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
