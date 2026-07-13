import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

// Two genuinely different buying motions:
//  - Minerals (GCC): sample-led. A filler cannot be qualified from a datasheet,
//    so the free sample is the conversion lever. GCC is the lead product → first column.
//  - Polymers (engineering + commodity): question-led. A resin is switched on
//    specification and verified documents, not a physical trial. This absorbs the
//    substance of the retired ThreeTiers section (ask → verify → managed execution).

const mineralSteps = [
  {
    title: "Match the grade",
    body: (
      <>
        Tell us your application, or answer two questions in the{" "}
        <Link
          href="/calcium-carbonate/grade-selector"
          className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors duration-150"
        >
          grade selector
        </Link>
        . We match you to KC-4, KC-6, KC-10, or KC-17 by particle size — the
        whiteness and chemistry are the same across all four grades.
      </>
    ),
  },
  {
    title: "Get a free sample",
    body: "Under 1 tonne, free, dispatched within 48 hours — with the technical data sheet and a certificate of analysis for that lot.",
  },
  {
    title: "Qualify it on your own line",
    body: "Run the sample on your own equipment, against the grade you use today. Decide only after you see the results.",
  },
  {
    title: "Place your first order",
    body: "One 20-foot container (24 tonnes) minimum, at the same per-tonne price as large volumes. FOB Haiphong; 30% deposit by bank transfer, 70% against the bill of lading.",
  },
];

const polymerSteps = [
  {
    title: "Ask",
    body: "A grade match across the Chinese market, an equivalent to a Western grade, a landed cost to your port, an HS code or duty rate — whatever you need to decide.",
  },
  {
    title: "Get a matched answer within 24 hours",
    body: "With the documents checked: a certificate of analysis against the TDS, a Form E against the HS code, FOB value, and origin.",
  },
  {
    title: "Source through us when you are ready",
    body: "Supplier selection, quality control, documents generated correctly at the source, and logistics. You pay only when we source a deal — no contract, no exclusivity.",
  },
];

function Steps({ steps, accentLine, badge }) {
  return (
    <div className="relative space-y-5">
      {/* vertical connector behind the numbered badges */}
      <div
        className={`absolute left-[13px] top-3 bottom-3 w-px ${accentLine}`}
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <div key={step.title} className="relative pl-11">
          <div
            className={`absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${badge}`}
          >
            {i + 1}
          </div>
          <h4 className="font-sans text-[15px] font-bold text-white mb-1">
            {step.title}
          </h4>
          <p className="font-sans text-[13px] text-body-text leading-relaxed">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function HowBuyingWorks() {
  return (
    <section className="bg-navy py-20 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              HOW BUYING WORKS
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight max-w-[760px] mx-auto">
              Two ways to buy.
            </h2>
            <p className="font-sans text-base lg:text-lg text-body-text leading-relaxed max-w-[660px] mx-auto mt-6">
              How you go from what you need to a first order depends on what you
              are buying. Our minerals are proven on a sample; our polymers are
              proven on specification and documents.
            </p>
          </div>
        </RevealDiv>

        {/* Two paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* MINERALS — sample-led (lead product, first) */}
          <RevealDiv>
            <div className="border-l-[3px] border-gold p-6 lg:p-8 rounded-r-lg bg-white/[0.04] h-full flex flex-col">
              <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-3">
                <span className="font-mono text-[11px] tracking-[2px] font-bold text-gold">
                  MINERALS · CALCIUM CARBONATE
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-gold bg-gold/10 border border-gold/25 rounded-full px-2.5 py-0.5">
                  Sample-led
                </span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-snug mb-2">
                You qualify it on your own line.
              </h3>
              <p className="font-sans text-sm text-body-text leading-relaxed mb-7">
                A filler cannot be qualified from a datasheet — so we send the
                material, and you decide after you test it yourself.
              </p>

              <Steps
                steps={mineralSteps}
                accentLine="bg-gold/20"
                badge="border border-gold/40 bg-gold/10 text-gold"
              />

              <div className="mt-auto pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/calcium-carbonate/grade-selector"
                  className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-6 py-3 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
                >
                  Request a free sample
                </Link>
                <Link
                  href="/calcium-carbonate"
                  className="font-sans text-sm font-semibold text-white hover:text-gold transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  See the KC Series
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </RevealDiv>

          {/* POLYMERS — question-led */}
          <RevealDiv delay={120}>
            <div className="border-l-[3px] border-teal p-6 lg:p-8 rounded-r-lg bg-white/[0.04] h-full flex flex-col">
              <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-3">
                <span className="font-mono text-[11px] tracking-[2px] font-bold text-teal">
                  POLYMERS · ENGINEERING &amp; COMMODITY
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-teal bg-teal/10 border border-teal/25 rounded-full px-2.5 py-0.5">
                  Question-led
                </span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-snug mb-2">
                You decide on spec and documents.
              </h3>
              <p className="font-sans text-sm text-body-text leading-relaxed mb-7">
                A resin is switched on specification and verified documents, not
                a physical trial — so we answer the question and check the
                documents.
              </p>

              <Steps
                steps={polymerSteps}
                accentLine="bg-teal/20"
                badge="border border-teal/40 bg-teal/10 text-teal"
              />

              <div className="mt-auto pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center justify-center border border-teal/50 text-white font-semibold text-sm tracking-wider px-6 py-3 rounded-lg hover:bg-teal/10 hover:border-teal hover:-translate-y-px transition-all duration-150"
                >
                  Ask about a grade
                </Link>
                <Link
                  href="/materials"
                  className="font-sans text-sm font-semibold text-white hover:text-teal transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  Browse engineering grades
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* Honesty line — unifies both paths */}
        <RevealDiv>
          <p className="font-sans text-sm lg:text-base text-muted text-center max-w-[640px] mx-auto mt-10">
            The sample is free. The technical answers are free. We earn from the
            material we ship, not from advice.
          </p>
        </RevealDiv>

        {/* Proof band — a real production photo grounds the section (additive) */}
        <RevealDiv delay={80}>
          <figure className="relative mt-12 rounded-lg overflow-hidden border border-white/[0.08]">
            <Image
              src="/images/ops-grinding-plant.jpg"
              alt="Grinding and air-classifying lines at Kantor Materials' Northern Vietnam calcium carbonate plant"
              width={1400}
              height={972}
              sizes="(max-width: 1100px) 100vw, 1100px"
              quality={72}
              className="w-full h-[200px] lg:h-[300px] object-cover"
              style={{ objectPosition: "center 55%" }}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent px-6 py-4">
              <span className="font-sans text-[13px] text-body-text">
                Grinding and air-classifying lines at our Northern Vietnam plant.
              </span>
            </figcaption>
          </figure>
        </RevealDiv>
      </div>
    </section>
  );
}
