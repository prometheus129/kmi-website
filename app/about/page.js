import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "About — Kantor Materials International",
  description:
    "Discretionary polymer procurement platform. Lane 1: commodity aggregation across 600+ producers and merchants. Lane 2: UL-certified engineering compounds. Hong Kong headquartered, sourcing from China.",
};

const markets = [
  "Vietnam",
  "Philippines",
  "Thailand",
  "Bangladesh",
  "Peru",
  "Turkey",
  "Nigeria",
  "Indonesia",
];

export default function AboutPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={organizationSchema} />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              ABOUT
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
              The Full Market on Every Order
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Kantor Materials is a discretionary polymer procurement platform.
              We aggregate cross-buyer demand for China-origin industrial
              polymers and deliver institutional-grade sourcing to mid-tier
              distributors across emerging markets.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* The Thesis */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              THE THESIS
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">
              Trading houses profit from knowing more than the buyer.
              We profit from making the buyer know more.
            </h2>
          </RevealDiv>
          <RevealDiv>
            <div className="space-y-5 text-body-text text-[15px] leading-[1.75]">
              <p>
                The polymer trade between China and Southeast Asia runs through
                intermediaries who capture margin from information asymmetry.
                When a buyer in Ho Chi Minh City doesn&apos;t know the factory
                price, the merchant spread, or the current freight market, the
                trading house captures that gap.
              </p>
              <p>
                Kantor inverts this. We evaluate 600+ producers and merchants
                across China on every order. Buyers delegate
                procurement optimization to us and judge on outcomes: price
                quality, execution reliability, and market guidance accuracy.
              </p>
              <p>
                This isn&apos;t a marketplace. We don&apos;t connect buyers to
                sellers. We operate the procurement function on the buyer&apos;s
                behalf — sourcing, evaluation, execution, and intelligence —
                with economics that improve as we aggregate more demand.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Two Lanes */}
      <section id="lanes" className="py-16 lg:py-20 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHAT WE DO
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-10">
              Two Product Lanes
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lane 1 */}
            <RevealDiv>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-8 h-full">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-3">
                  LANE 1 — THE KANTOR SYNDICATE
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Commodity Polymers
                </h3>
                <p className="text-body-text text-sm leading-relaxed mb-5">
                  Aggregated procurement of PP, PE, LDPE, PA6, PVC, and ABS.
                  Volume-based economics through purchasing pods that combine
                  demand across multiple buyers. Your 50 MT becomes part of a
                  300 MT order.
                </p>
                <div className="font-mono text-xs text-muted">
                  PP &middot; HDPE &middot; LDPE &middot; LLDPE &middot; PA6
                  &middot; ABS &middot; PVC
                </div>
              </div>
            </RevealDiv>

            {/* Lane 2 */}
            <RevealDiv>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-8 h-full">
                <div className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold mb-3">
                  LANE 2 — ADVANCED MATERIALS
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">
                  Engineering Polymers
                </h3>
                <p className="text-body-text text-sm leading-relaxed mb-5">
                  UL-certified, application-specific compounds through our
                  manufacturing partner Remay. Reverse-engineered to match
                  incumbent specifications — same performance, competitive
                  pricing, full certification chain.
                </p>
                <div className="font-mono text-xs text-muted">
                  PA66 &middot; PBT &middot; PC &middot; POM &middot; PPO
                  &middot; Custom Compounds
                </div>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-10">
              Full-Market Sourcing
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Intelligence",
                desc: "The Morning Terminal delivers pricing direction, buy-timing signals, and supply disruption alerts before your market opens. Free for all subscribers.",
              },
              {
                num: "02",
                title: "Evaluation",
                desc: "On every order, we evaluate 600+ producers and merchants across China. You see one price — the best available for your grade, quantity, and timeline.",
              },
              {
                num: "03",
                title: "Execution",
                desc: "Quality certification, logistics coordination, and payment facilitation. We handle the supply chain complexity so you can focus on selling.",
              },
            ].map((step) => (
              <RevealDiv key={step.num}>
                <div className="border-l-2 border-teal/30 pl-6">
                  <span className="font-mono text-xs text-teal/60">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-text text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              MARKETS
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Where We Operate
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed max-w-xl mb-10">
              Sourcing from China, serving distributors and manufacturers
              across emerging markets.
            </p>
          </RevealDiv>

          <RevealDiv>
            <div className="flex flex-wrap gap-3">
              {markets.map((m) => (
                <span
                  key={m}
                  className="font-sans text-sm font-medium text-white bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.1] px-5 py-2.5 rounded-lg"
                >
                  {m}
                </span>
              ))}
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 px-6 lg:px-10 bg-navy-deep">
        <div className="max-w-[1200px] mx-auto text-center">
          <RevealDiv>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to optimize your procurement?
            </h2>
            <p className="text-body-text text-base mb-8 max-w-lg mx-auto">
              Start with the Morning Terminal — free daily market intelligence
              delivered to your phone. Or get in touch for pricing on specific grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/terminal#subscribe"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Get Daily Intelligence
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
              >
                Contact Us
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
