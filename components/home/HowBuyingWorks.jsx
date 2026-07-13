import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

// Three genuinely different buying motions — 1:1 with the three LaneCards:
//  - Minerals (GCC): sample-led. A filler cannot be qualified from a datasheet,
//    so the free sample is the conversion lever. GCC is the lead product → first column.
//  - Engineering polymers: sample + co-engineering. A compound is specified into
//    a part; the entry is an equivalency question, the risk-reversal is that we
//    adjust the compound until the buyer's part qualifies.
//  - Commodity polymers: question-led. A known resin is switched on specification
//    and verified documents, not a physical trial (absorbs the retired ThreeTiers
//    substance: ask → verify → managed execution).

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

const engineeringSteps = [
  {
    title: "Send us the grade you run today",
    body: "Name your current grade — Zytel, Ultramid, Bayblend, or any Western brand — and the part it goes into. Within 24 hours you get the closest matching grade from our catalog, with an honest assessment of where it differs.",
  },
  {
    title: "Get a free sample — up to 100 kg",
    body: "Enough for a lab test first, then a full trial on your production line. Free samples in this industry are usually just a few kilograms — we send up to 100 kg, because a decision this important needs a real trial.",
  },
  {
    title: "Co-engineer until your part qualifies",
    body: "If the closest catalog grade does not pass your trial, our engineers adjust the compound — and we sample again — until your part qualifies. You commit only after it passes.",
  },
  {
    title: "Start recurring supply",
    body: "The qualified compound, produced in our own compounding operations — with the technical data sheet and a certificate of analysis for every lot.",
  },
];

const commoditySteps = [
  {
    title: "Ask your question",
    body: "A grade match across the Chinese market, a landed cost to your port, an HS code or duty rate — whatever you need to decide.",
  },
  {
    title: "Get a verified answer within 24 hours",
    body: "With the documents checked: the certificate of analysis against the technical data sheet, the Form E against the HS code, and the FOB value and origin against the invoice.",
  },
  {
    title: "Source through us when you are ready",
    body: "Supplier selection, quality control, documents generated correctly at the source, and logistics. You pay only when we source your order — no contract, no exclusivity.",
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
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              HOW BUYING WORKS
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white leading-tight max-w-[760px] mx-auto">
              Three ways to buy.
            </h2>
            <p className="font-sans text-base lg:text-lg text-body-text leading-relaxed max-w-[720px] mx-auto mt-6">
              How you go from what you need to a first order depends on what you
              are buying. Our minerals are proven on a sample. Our engineering
              polymers are proven on your line, with our engineers. Our
              commodity polymers are proven on specification and documents.
            </p>
          </div>
        </RevealDiv>

        {/* Three paths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* MINERALS — sample-led (lead product, first) */}
          <RevealDiv>
            <div className="border-l-[3px] border-gold p-6 lg:p-7 rounded-r-lg bg-white/[0.04] h-full flex flex-col">
              <div className="flex flex-col items-start gap-y-2 mb-3">
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

              <div className="mt-auto pt-8 flex flex-col items-start gap-4">
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

          {/* ENGINEERING POLYMERS — sample + co-engineering */}
          <RevealDiv delay={120}>
            <div className="border-l-[3px] border-teal p-6 lg:p-7 rounded-r-lg bg-white/[0.04] h-full flex flex-col">
              <div className="flex flex-col items-start gap-y-2 mb-3">
                <span className="font-mono text-[11px] tracking-[2px] font-bold text-teal">
                  POLYMERS · ENGINEERING
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-teal bg-teal/10 border border-teal/25 rounded-full px-2.5 py-0.5">
                  Sample + co-engineering
                </span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-snug mb-2">
                We qualify it with you, on your line.
              </h3>
              <p className="font-sans text-sm text-body-text leading-relaxed mb-7">
                An engineering compound is qualified in your part, not on a
                datasheet — so we sample first, and adjust the compound with you
                until your part passes.
              </p>

              <Steps
                steps={engineeringSteps}
                accentLine="bg-teal/20"
                badge="border border-teal/40 bg-teal/10 text-teal"
              />

              <div className="mt-auto pt-8 flex flex-col items-start gap-4">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center justify-center bg-teal text-white font-semibold text-sm tracking-wider px-6 py-3 rounded-lg shadow-[0_2px_12px_rgba(46,139,139,0.3)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
                >
                  Send us your grade
                </Link>
                <Link
                  href="/materials"
                  className="font-sans text-sm font-semibold text-white hover:text-teal-light transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  Browse engineering grades
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </RevealDiv>

          {/* COMMODITY POLYMERS — question-led */}
          <RevealDiv delay={240}>
            <div className="border-l-[3px] border-white/25 p-6 lg:p-7 rounded-r-lg bg-white/[0.04] h-full flex flex-col">
              <div className="flex flex-col items-start gap-y-2 mb-3">
                <span className="font-mono text-[11px] tracking-[2px] font-bold text-body-text">
                  POLYMERS · COMMODITY
                </span>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[1.5px] text-body-text bg-white/5 border border-white/20 rounded-full px-2.5 py-0.5">
                  Question-led
                </span>
              </div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white leading-snug mb-2">
                You decide on specification and documents.
              </h3>
              <p className="font-sans text-sm text-body-text leading-relaxed mb-7">
                A known resin is switched on specification and verified
                documents, not a physical trial — so we answer the question and
                check the documents.
              </p>

              <Steps
                steps={commoditySteps}
                accentLine="bg-white/10"
                badge="border border-white/25 bg-white/5 text-body-text"
              />

              <div className="mt-auto pt-8 flex flex-col items-start gap-4">
                <Link
                  href="#inquiry"
                  className="inline-flex items-center justify-center border border-white/30 text-white font-semibold text-sm tracking-wider px-6 py-3 rounded-lg hover:bg-white/5 hover:border-white/60 hover:-translate-y-px transition-all duration-150"
                >
                  Ask about a grade
                </Link>
                <Link
                  href="/pricing"
                  className="font-sans text-sm font-semibold text-white hover:text-gold transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  See indicative pricing
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </RevealDiv>
        </div>

        {/* Honesty line — unifies all three paths */}
        <RevealDiv>
          <p className="font-sans text-sm lg:text-base text-muted text-center max-w-[640px] mx-auto mt-10">
            The samples are free. The technical answers are free. We earn from
            the material we ship, not from advice.
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
              sizes="(max-width: 1200px) 100vw, 1200px"
              quality={72}
              className="w-full aspect-[16/9] object-cover"
              style={{ objectPosition: "center 50%" }}
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
