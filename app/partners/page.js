import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Trader Partnership — Kantor Materials International",
  description:
    "Keep your book. Use our infrastructure free in Year 1. Source through us when we beat your existing suppliers. How the Kantor Independent Trader Platform (ITP) works.",
  openGraph: {
    title: "Trader Partnership — Kantor Materials",
    description:
      "Keep your book. Use our infrastructure free. Source through us when we beat your existing suppliers.",
  },
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={organizationSchema} />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              TRADER PARTNERSHIP
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 max-w-[960px] leading-tight">
              Keep your book. Use our infrastructure. Source through us when
              we beat your suppliers.
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
              Use our infrastructure free in Year 1. Source through us when
              we beat your existing suppliers. Access credit when
              you&apos;re ready. We earn only when we supply material or
              finance your deal. Your book stays your book.
            </p>
            <p className="text-body-text/70 text-sm leading-relaxed max-w-2xl">
              For independent polymer traders evaluating Kantor&apos;s
              Independent Trader Platform (ITP). If you&apos;re a distributor
              or end-buyer, see{" "}
              <Link
                href="/approach"
                className="text-teal hover:text-teal-light transition-colors"
              >
                /approach
              </Link>
              .
            </p>
          </RevealDiv>
        </div>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* Your book stays your book */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              NON-EXTRACTIVE BY DESIGN
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-8 max-w-3xl leading-tight">
              Your book stays your book.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-4 text-body-text text-[15px] leading-relaxed">
                <p>
                  We are not a channel. We never contact your customers. We
                  never require exclusivity. We never take revenue share on
                  your baseline business. Your customer relationships, your
                  brand, your pricing authority — stay yours.
                </p>
                <p>
                  Pattern B (co-branded) is the default: &ldquo;Your Company ×
                  Powered by Kantor Materials&rdquo; or equivalent framing
                  that preserves your brand equity. Pattern A
                  (platform-branded) is available if you don&apos;t have a
                  personal brand to preserve.
                </p>
              </div>
              <div className="space-y-4 text-body-text text-[15px] leading-relaxed">
                <p>
                  If the partnership stops working: no termination penalty,
                  no clawback, no lock-in. You stop routing sourcing through
                  us; we stop earning on your deals.
                </p>
                <p>
                  Data we accumulate stays anonymized and aggregated. Your
                  specific customer and supplier relationships never become
                  ours.
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* What you gain */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHAT YOU GAIN
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4 max-w-3xl leading-tight">
              Infrastructure free in Year 1. Lane 2 access your suppliers
              can&apos;t build.
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed max-w-2xl mb-10">
              Two things a trader cannot buy off the shelf: a documented
              China polymer infrastructure and engineering-polymer
              compounding at Western-premium quality.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevealDiv delay={0}>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-7 h-full">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-teal mb-3 block">
                  INFRASTRUCTURE
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Year 1: free. Year 2+: 0.3–0.5% service fee.
                </h3>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  Grade matching across our 134,000-grade database.
                  Document automation (Form E, CoA, TDS, HS codes).
                  Compliance verification across target destinations. CRM
                  integrated with the sourcing desk. Daily market
                  intelligence across commodity and engineering lanes.
                </p>
                <p className="text-body-text text-[15px] leading-relaxed">
                  The Year 2+ service fee is invoiced separately — not
                  extracted from your supply chain.
                </p>
              </div>
            </RevealDiv>

            <RevealDiv delay={100}>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-7 h-full">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3 block">
                  LANE 2 CATEGORY EXPANSION
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                  Chinese equivalents to Zytel, Ultramid, LNP.
                </h3>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  PA6, PA66, PC, ABS, POM compounded in our own facility
                  (60,000 MT/yr capacity). Validated in production lines
                  manufacturing over 2 million finished goods annually —
                  Tier 1 OEM supply to BYD, CATL, CALB.
                </p>
                <p className="text-body-text text-[15px] leading-relaxed">
                  Western-premium engineering polymers run 20–40% above
                  Chinese alternatives at equivalent quality. Your customers
                  pay the premium because you lack a compounding partner.
                  This is where most capture happens — because the
                  alternative doesn&apos;t exist at your scale.{" "}
                  <Link
                    href="/materials"
                    className="text-gold hover:text-gold-light transition-colors underline underline-offset-2"
                  >
                    See the engineering polymer catalog →
                  </Link>
                </p>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* How we earn */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              HOW WE EARN
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4 max-w-3xl leading-tight">
              Two transaction classes. We earn only when we win on merit.
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed max-w-2xl mb-10">
              Capture rate — what share of your book flows through our
              sourcing — is the primary metric, not gross volume.
              Self-validating. You cannot be pushed to route to us; we
              cannot game the number.
            </p>
          </RevealDiv>

          <RevealDiv delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-7">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3">
                  CLASS 1 — KANTOR SOURCES
                </div>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  You route a specific deal&apos;s sourcing through us.
                  Kantor buys from the Chinese producer / merchant network;
                  you sell to your customer.
                </p>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  <strong className="text-white">
                    Kantor earns margin on the deal.
                  </strong>{" "}
                  You earn your customer-side margin as always.
                </p>
                <p className="text-body-text/80 text-[14px] leading-relaxed">
                  This is the transaction Kantor is incentivized to win. You
                  route it to us only when we beat your existing supplier on
                  that specific deal.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-7">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-teal mb-3">
                  CLASS 2 — YOU SOURCE
                </div>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  You source the deal yourself via your own supplier
                  relationships. Kantor infrastructure supports the deal
                  (documentation, compliance, CRM, intelligence).
                </p>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  <strong className="text-white">
                    Year 1: Kantor earns nothing.
                  </strong>{" "}
                  Year 2+: 0.3–0.5% service fee on infrastructure use.
                </p>
                <p className="text-body-text/80 text-[14px] leading-relaxed">
                  This is the majority of your book in Year 1. No lock-in;
                  no minimum volume. Walk at zero cost.
                </p>
              </div>
            </div>
          </RevealDiv>

          <RevealDiv delay={200}>
            <div className="mt-10 max-w-3xl mx-auto">
              <p className="text-body-text text-[15px] leading-relaxed mb-4">
                Capture-rate expectations (research-informed projections,
                not committed numbers):
              </p>
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg divide-y divide-white/[0.06]">
                <div className="flex items-center justify-between px-5 py-3.5">
                  <span className="font-sans text-[14px] text-white">
                    Lane 1 — Commodity (PP, PE, PVC, PA6 commodity)
                  </span>
                  <span className="font-mono text-[13px] text-teal tracking-wide">
                    20–40%
                  </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3.5">
                  <span className="font-sans text-[14px] text-white">
                    Lane 2 — Engineering (PA6, PA66, PC, ABS, POM)
                  </span>
                  <span className="font-mono text-[13px] text-gold tracking-wide">
                    70–90%
                  </span>
                </div>
                <div className="flex items-center justify-between px-5 py-3.5">
                  <span className="font-sans text-[14px] text-white">
                    Lane 3 — Recycled (rPP, rPET)
                  </span>
                  <span className="font-mono text-[13px] text-teal tracking-wide">
                    60–80%
                  </span>
                </div>
              </div>
            </div>
          </RevealDiv>

          <RevealDiv delay={300}>
            <div className="mt-10 max-w-3xl">
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Credit: Year 2+.
              </h3>
              <p className="text-body-text text-[15px] leading-relaxed">
                Trade finance becomes available in Year 2 via Hong Kong bank
                facilities and export credit insurance. At launch: applied
                to Class 1 (Kantor-sourced) deals. Later: extended to Class
                2 where working-capital needs exceed your own balance sheet.
                Kantor earns credit spread only on the deals we finance. If
                credit timing doesn&apos;t match your situation, that does
                not affect the Year-1 partnership.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* What gets signed */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHAT GETS SIGNED
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4 max-w-3xl leading-tight">
              Three agreements. Non-exclusive. 12-month term.
            </h2>
          </RevealDiv>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <RevealDiv delay={0}>
              <div className="border border-white/[0.08] rounded-lg p-6 h-full bg-white/[0.02]">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3">
                  1. MASTER SERVICES
                </div>
                <p className="text-body-text text-[14px] leading-relaxed">
                  Infrastructure access terms. Year 2+ service fee
                  framework. Data treatment (anonymized, aggregated, never
                  individually identified).
                </p>
              </div>
            </RevealDiv>
            <RevealDiv delay={100}>
              <div className="border border-white/[0.08] rounded-lg p-6 h-full bg-white/[0.02]">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3">
                  2. COMMERCIAL SUPPLY
                </div>
                <p className="text-body-text text-[14px] leading-relaxed">
                  Terms for Class 1 transactions — activated only when you
                  route sourcing through us. TT 30/70 default. Standard
                  markup structure.
                </p>
              </div>
            </RevealDiv>
            <RevealDiv delay={200}>
              <div className="border border-white/[0.08] rounded-lg p-6 h-full bg-white/[0.02]">
                <div className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3">
                  3. CREDIT FACILITY
                </div>
                <p className="text-body-text text-[14px] leading-relaxed">
                  Year 2+. Activated when you want access to Kantor-financed
                  deals under HK bank facilities and export credit
                  insurance.
                </p>
              </div>
            </RevealDiv>
          </div>

          <RevealDiv delay={300}>
            <div className="mt-10 max-w-3xl space-y-3 text-body-text text-[15px] leading-relaxed">
              <p>
                No contractual exclusivity on your book. No revenue share on
                transactions Kantor didn&apos;t source or finance. No
                minimum volume on any class.
              </p>
              <p>
                Co-branded (Pattern B) is the default. Platform-branded
                (Pattern A) is available if you don&apos;t have personal
                brand equity to preserve.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Honest framing */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold mb-4 block">
              HONEST FRAMING
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-6 max-w-3xl leading-tight">
              Hypothesis v1. Early-cohort terms shape the architecture.
            </h2>
            <div className="max-w-3xl space-y-4 text-body-text text-[15px] leading-relaxed">
              <p>
                This architecture is new. Capture-rate targets and margin
                projections are research-informed, not yet empirically
                validated. We are building this with early trader partners;
                your feedback shapes the structure.
              </p>
              <p>
                <strong className="text-white">
                  At launch we have zero trader partners.
                </strong>{" "}
                Year 1 partners are ITP cohort 1 — what they experience
                defines what future trader partners experience.
              </p>
              <p>
                If you&apos;d rather wait until the architecture is
                validated at scale, we understand. The opportunity for Year
                1 cohort is structural, not rhetorical: first trader
                partners shape the terms.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[720px] mx-auto text-center">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              TALK TO US
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              Start the conversation at CHINAPLAS.
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed mb-8 max-w-[560px] mx-auto">
              CHINAPLAS Shanghai, April 21–24, 2026. David Wu (founder) is
              at the event throughout. If you&apos;re attending, email with
              your best time — 45 minutes for a substantive conversation,
              not a trade-show pitch. If you&apos;re remote, we can start by
              email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:david@kantor-m.com?subject=Trader%20Partnership%20-%20Kantor%20ITP&body=Hi%20David%2C%0A%0AI%27d%20like%20to%20discuss%20the%20Kantor%20trader%20partnership.%0A%0AQuick%20context%3A%0A-%20Company%3A%20%0A-%20Corridor%3A%20%0A-%20Typical%20annual%20book%3A%20%0A%0A"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Email David →
              </a>
              <Link
                href="/materials"
                className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
              >
                See Lane 2 catalog
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
