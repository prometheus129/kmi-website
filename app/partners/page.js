import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Trader Partnership — Kantor Materials International",
  description:
    "Keep your book. Free infrastructure, non-exclusive. We earn only when we source a deal and beat your existing supplier. How Kantor's trader partnership works.",
  openGraph: {
    title: "Trader Partnership — Kantor Materials",
    description:
      "Keep your book. Free infrastructure, non-exclusive. We earn only when we source a deal and beat your existing supplier.",
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
              Free infrastructure, non-exclusive, no lock-in. We earn only
              when we source a deal and beat your existing supplier.
            </p>
            <p className="text-body-text/70 text-sm leading-relaxed max-w-2xl">
              For independent polymer traders. If you&apos;re a distributor
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
                  Your customers never hear our name.
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
              Engineering polymer access your suppliers can&apos;t build.
              Infrastructure free on top.
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
                <h3 className="font-serif text-2xl font-bold text-white mb-5 leading-tight">
                  Free.
                </h3>
                <ul className="space-y-3 text-body-text text-[15px] leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-teal mt-[0.35em] flex-shrink-0 leading-none">•</span>
                    <span>
                      Grade matching across our 134,000-grade database
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal mt-[0.35em] flex-shrink-0 leading-none">•</span>
                    <span>
                      Document automation (Form E, CoA, TDS, HS codes)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal mt-[0.35em] flex-shrink-0 leading-none">•</span>
                    <span>
                      Compliance verification across target destinations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal mt-[0.35em] flex-shrink-0 leading-none">•</span>
                    <span>
                      Daily market intelligence across commodity and
                      engineering grades
                    </span>
                  </li>
                </ul>
              </div>
            </RevealDiv>

            <RevealDiv delay={100}>
              <div className="bg-gradient-to-br from-gold/[0.06] to-gold/[0.01] border border-gold/[0.15] rounded-lg p-7 h-full">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[2px] text-gold mb-3 block">
                  ENGINEERING POLYMERS
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
                  Your customers already ask for Zytel / Ultramid / LNP
                  equivalents. Without a compounding partner, you quote
                  Chinese suppliers you can&apos;t fully vet and hope the TDS
                  holds under OEM qualification — or you walk away from the
                  inquiry. We are that partner. The business you currently
                  lose becomes business you capture.{" "}
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
              Two kinds of deals. We earn only when we win on merit.
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
                  WHEN WE SOURCE
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
                  WHEN YOU SOURCE
                </div>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  You source the deal yourself via your own supplier
                  relationships. Kantor infrastructure supports the deal
                  (documentation, compliance, CRM, intelligence).
                </p>
                <p className="text-body-text text-[15px] leading-relaxed mb-3">
                  <strong className="text-white">
                    Kantor earns nothing on these deals.
                  </strong>
                </p>
                <p className="text-body-text/80 text-[14px] leading-relaxed">
                  This is the majority of your book. No lock-in, no minimum
                  volume. Walk at zero cost.
                </p>
              </div>
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

          <RevealDiv delay={100}>
            <div className="mt-8 max-w-3xl space-y-4 text-body-text text-[15px] leading-relaxed">
              <p>
                A services agreement for infrastructure access and data
                treatment (anonymized, aggregated, never individually
                identified). A commercial supply agreement activated only
                when we source a deal for you — TT 30/70 default. A credit
                facility activated when trade finance goes live.
              </p>
              <p>
                No minimum volume. No revenue share on deals Kantor
                didn&apos;t source or finance. Your customers never hear
                our name.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Honest framing */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.05)_0%,transparent_65%)] pointer-events-none"
        />
        <div className="max-w-[1200px] mx-auto relative">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold mb-4 block">
              HONEST FRAMING
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-6 max-w-3xl leading-tight">
              Early cohort. You shape the terms.
            </h2>
            <div className="max-w-3xl space-y-4 text-body-text text-[15px] leading-relaxed">
              <p>
                This architecture is new. We are building it with early
                trader partners; your feedback shapes the structure.
              </p>
              <p>
                If you&apos;d rather wait until the architecture is
                validated at scale, we understand. The opportunity for
                first-cohort partners is structural, not rhetorical: early
                partners shape the terms.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-[110px] px-6 lg:px-10 border-t border-white/[0.04] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.07)_0%,transparent_60%)] pointer-events-none"
        />
        <div className="max-w-[720px] mx-auto text-center relative">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              TALK TO US
            </span>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              Start the conversation.
            </h2>
            <p className="text-body-text text-[15px] leading-relaxed mb-6 max-w-[560px] mx-auto">
              David Wu (founder) replies to every partnership inquiry
              personally. 45 minutes for a substantive conversation, not a
              sales pitch. Video or in-person, whichever fits.
            </p>
            <p className="font-mono text-[14px] text-gold/80 mb-8 select-all">
              david@kantor-m.com
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:david@kantor-m.com?subject=Trader%20Partnership%20-%20Kantor%20Materials&body=Hi%20David%2C%0A%0AI%27d%20like%20to%20discuss%20the%20Kantor%20trader%20partnership.%0A%0AQuick%20context%3A%0A-%20Company%3A%20%0A-%20Corridor%3A%20%0A-%20Typical%20annual%20book%3A%20%0A%0A"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Email David →
              </a>
              <Link
                href="/materials"
                className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
              >
                See engineering polymer catalog
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
