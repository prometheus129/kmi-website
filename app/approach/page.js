import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import HonestySection from "@/components/home/HonestySection";
import Link from "next/link";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "About Our Approach — Kantor Materials International",
  description:
    "What we don't promise — and what we do. How KMI sources polymers from China for distributors across emerging markets.",
  openGraph: {
    title: "About Our Approach — Kantor Materials",
    description:
      "What we don't promise — and what we do. Sourcing intelligence for polymer distributors.",
  },
  alternates: { canonical: "/approach" },
};

const domains = [
  {
    title: "Technical matching",
    text: "We search tens of thousands of Chinese polymer grades by the properties and application you specify. Not one supplier\u2019s catalog \u2014 the broader market, filtered by technical fit.",
  },
  {
    title: "Current pricing",
    text: "CFR pricing for your destination, evaluated across the broader market. Not one supplier\u2019s list price. Updated with each trading session.",
  },
  {
    title: "Freight and landed cost",
    text: "Origin port, transit time, freight rate, and total landed cost calculated for your specific route. The number your buyer needs to see.",
  },
  {
    title: "Documentation",
    text: "Form E, Certificate of Analysis, TDS, HS code, and duty rate information for your destination market. Assembled, not chased.",
  },
  {
    title: "Quality context",
    text: "Where we have prior experience with a grade, we share it. Where we don\u2019t, we tell you. Every shipment adds to what we know.",
  },
];

const markets = [
  "Vietnam",
  "Philippines",
  "Thailand",
  "India",
  "Turkey",
  "Peru",
  "Indonesia",
  "Bangladesh",
];

export default function ApproachPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={organizationSchema} />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              ABOUT OUR APPROACH
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              Your China Polymer Desk.
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Kantor Materials is a sourcing intelligence and execution service
              for polymer distributors. You describe what your buyers need. We
              search the broader China market and respond with matched grades,
              pricing, and documentation — in one answer.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/[0.06]" />

      {/* What We Don't Promise — reuse HonestySection */}
      <HonestySection />

      {/* How We Work — Five Domains */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              HOW WE WORK
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4 max-w-2xl leading-tight">
              One question, five domains.
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed max-w-xl mb-12">
              When you submit a requirement, we don&apos;t return a single data
              point. We integrate five domains into a single response — the
              information you&apos;d otherwise assemble from three sources in
              three languages.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, i) => (
              <RevealDiv key={domain.title} delay={i * 100}>
                <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 h-full">
                  <h3 className="font-sans text-[15px] font-bold text-white mb-2">
                    {domain.title}
                  </h3>
                  <p className="font-sans text-[14px] text-body-text leading-relaxed">
                    {domain.text}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <RevealDiv>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
                THE COMPANY
              </span>
              <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-6 leading-tight">
                Hong Kong headquartered. China sourcing. Global South markets.
              </h2>
              <p className="text-body-text text-[15px] leading-relaxed mb-4">
                Kantor Materials International is headquartered in Hong Kong with
                sourcing and compounding operations in China. We serve polymer
                distributors and converters across Asia, the Middle East, Latin
                America, and Africa.
              </p>
              <p className="text-body-text text-[15px] leading-relaxed mb-4">
                For commodity polymers (PP, PE, PVC), our sourcing desk evaluates
                suppliers across the Chinese market on every order — selecting by
                specs, pricing, compliance status, and track record. For
                engineering polymers (PA6, PA66, PC, ABS, POM, PEEK), we
                compound in our own facility with 60,000 MT annual capacity.
              </p>
            </RevealDiv>

            <RevealDiv delay={100}>
              <div className="lg:pt-14">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold/70 mb-4">
                  ACTIVE MARKETS
                </div>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {markets.map((market) => (
                    <span
                      key={market}
                      className="font-sans text-[13px] text-cream/80 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-lg"
                    >
                      {market}
                    </span>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 space-y-3">
                  <div>
                    <div className="font-sans text-[11px] font-bold text-gold/70 tracking-widest mb-1">
                      HEADQUARTERS
                    </div>
                    <p className="font-sans text-[14px] text-cream/80">
                      Hong Kong
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold text-gold/70 tracking-widest mb-1">
                      SOURCING OPERATIONS
                    </div>
                    <p className="font-sans text-[14px] text-cream/80">
                      Shenzhen, China
                    </p>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold text-gold/70 tracking-widest mb-1">
                      MARKET INTELLIGENCE
                    </div>
                    <p className="font-sans text-[14px] text-cream/80">
                      Published across 19 markets in 7 languages
                    </p>
                  </div>
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              FOUNDER
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              <a
                href="https://www.linkedin.com/in/davidxiaowu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-light transition-colors duration-200"
              >
                David Wu
              </a>
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed mb-4">
              Over a decade across China-related industrial commerce.
              Started at PetroChina Canada in 2013.
            </p>
            <p className="text-body-text text-[15px] leading-relaxed">
              Then six years operating a Shenzhen-based industrial
              consumables business, sourcing and selling China-origin
              material to North American manufacturers. Hong Kong based.
            </p>
          </RevealDiv>
          <RevealDiv delay={100}>
            <div className="space-y-5 text-body-text text-[15px] leading-[1.75]">
              <p>
                The Shenzhen operation served end-users who needed
                reliability in their supply chain more than they needed
                the lowest quote. Six years working that problem produced
                two convictions that shape Kantor.
              </p>
              <p>
                <strong className="text-white">
                  Depth in upstream beats breadth in suppliers.
                </strong>{" "}
                Procurement quality doesn&apos;t come from running more RFQs
                — it comes from understanding upstream cost structure,
                material flows between tiers, and the specific inefficiencies
                suppliers are either unaware of or profiting from. A buyer
                with that depth can take outcomes above what any individual
                supplier would deliver.
              </p>
              <p>
                <strong className="text-white">
                  Single-supplier dependency is carried risk.
                </strong>{" "}
                Not because suppliers are unreliable — because they have
                their own capacity constraints, priorities, and business
                cycles. Kantor&apos;s architecture is supplier-agnostic:
                every order is evaluated across the producer and merchant
                network, not routed to a preferred counterpart.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[720px] mx-auto text-center">
          <RevealDiv>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              Start with one question
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed mb-8 max-w-[560px] mx-auto">
              You don&apos;t need to sign a contract, schedule a demo, or sit
              through a pitch deck. Tell us what you need and we&apos;ll show
              you what the broader China market can offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inquiry#inquiry"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Tell us what you need
              </Link>
              <Link
                href="/polymer-compass#subscribe"
                className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
              >
                Subscribe to The Polymer Compass
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
