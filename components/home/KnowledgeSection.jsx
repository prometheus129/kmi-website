import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

export default function KnowledgeSection() {
  return (
    <section className="bg-navy py-20 lg:py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.035]">
        <Image
          src="/images/value-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/50" />

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <RevealDiv>
          <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
            WHY IT MATTERS
          </div>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight mb-10">
            What happens when your best person leaves?
          </h2>
        </RevealDiv>

        <RevealDiv delay={100}>
          <p className="font-sans text-base text-body-text leading-relaxed mb-6">
            Your senior trader answers questions like that from memory. But that
            knowledge is locked in their head.
          </p>
        </RevealDiv>

        <RevealDiv delay={200}>
          <p className="font-sans text-base text-body-text leading-relaxed mb-6">
            They know which Sinopec grades run cleanest on your customers&apos;
            lines. Which CCPIT offices process Form E corrections fastest. Every
            buyer&apos;s reorder cycle.
          </p>
        </RevealDiv>

        <RevealDiv delay={300}>
          <p className="font-sans text-base text-body-text leading-relaxed mb-6">
            Then they leave. It takes a year to rebuild what they knew.
          </p>
        </RevealDiv>

        <RevealDiv delay={400}>
          <p className="font-sans text-base text-white font-medium leading-relaxed">
            Some of it is never rebuilt.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
