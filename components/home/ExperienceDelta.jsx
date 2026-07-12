import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

const freeItems = [
  "Ask for grades by spec or application",
  "Benchmark quotes against current market pricing",
  "Verify documents after you receive them",
  "Get compliance data for any destination",
  "Tell us how a grade performed \u2014 we remember for next time",
];

const kmiItems = [
  "Documents generated correctly \u2014 errors prevented, not caught",
  "Issues resolved on your behalf \u2014 you handle your customers, we handle China",
  "You stop chasing updates \u2014 they come to you before you ask",
];

export default function ExperienceDelta() {
  return (
    <section className="bg-ticker-bg py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <Image
          src="/images/experience-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ticker-bg via-transparent to-ticker-bg" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              WHY IT&apos;S FREE
            </div>
            <p className="font-sans text-lg lg:text-xl text-body-text leading-relaxed mb-6 max-w-[640px] mx-auto">
              Technical guidance and market context cost nothing. Margin
              comes from the material we ship.
            </p>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight">
              The service is free to use.
            </h2>
          </div>
        </RevealDiv>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Free / any supplier */}
          <RevealDiv delay={100}>
            <div className="border border-white/[0.08] border-l-[3px] border-l-teal rounded-lg p-6 lg:p-8 bg-gradient-to-br from-teal/[0.04] to-transparent h-full">
              <h3 className="font-sans text-base font-bold text-white mb-6">
                Use with any supplier
              </h3>
              <ul className="space-y-3">
                {freeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    <span className="font-sans text-sm text-body-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm font-semibold text-teal mt-6">
                Free. No signup. No minimum.
              </p>
            </div>
          </RevealDiv>

          {/* Right: KMI sourced */}
          <RevealDiv delay={200}>
            <div className="border border-white/[0.08] border-l-[3px] border-l-gold rounded-lg p-6 lg:p-8 bg-gradient-to-br from-gold/[0.04] to-transparent h-full">
              <h3 className="font-sans text-base font-bold text-white mb-6">
                Source through Kantor
              </h3>
              <ul className="space-y-3">
                {kmiItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <span className="font-sans text-sm text-body-text leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-sm font-semibold text-gold mt-6">
                Pay only when we source a deal for you. No contract. No exclusivity.
              </p>
            </div>
          </RevealDiv>
        </div>

        {/* Footer text */}
        <RevealDiv delay={300}>
          <p className="font-sans text-sm text-body-text text-center mt-8">
            Use alongside your current suppliers. Compare what we find with what
            you already have. Start with one container.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
