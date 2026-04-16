import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

export default function LaneCards() {
  return (
    <section className="bg-navy-deep py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric industrial texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/images/hero-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 80%" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/60" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              BEYOND INTELLIGENCE
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-4 leading-tight">
              When You&apos;re Ready to Buy
            </h2>
            <p className="font-sans text-base text-body-text leading-relaxed max-w-[640px] mx-auto">
              The Polymer Compass subscribers get priority access to Kantor&apos;s
              sourcing desk. Commodity polymers and engineering compounds through
              one service.
            </p>
          </div>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RevealDiv>
            <Link href="/inquiry#inquiry" className="group block h-full">
              <div className="rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-teal/40 hover:-translate-y-[3px] transition-all duration-200 h-full">
                <div className="text-[11px] tracking-[3px] font-bold font-sans mb-3 text-teal">
                  COMMODITY POLYMERS
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  PP, PE, PA6, PVC, ABS
                </h3>
                <div className="text-sm font-medium font-sans mb-4 text-teal">
                  China origin — best-execution pricing
                </div>
                <p className="text-sm text-body-text leading-relaxed font-sans mb-5">
                  We search the broader China market on every order and deliver
                  the best available pricing for your grade, quantity, and route.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 tracking-wide group-hover:text-teal transition-colors duration-200">
                  Tell us what you need{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>

          <RevealDiv>
            <Link href="/inquiry#inquiry" className="group block h-full">
              <div className="rounded-lg p-8 border border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.03] hover:border-gold/40 hover:-translate-y-[3px] transition-all duration-200 h-full">
                <div className="text-[11px] tracking-[3px] font-bold font-sans mb-3 text-gold">
                  ENGINEERING COMPOUNDS
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  PA66, POM, PC, PEEK, PBT
                </h3>
                <div className="text-sm font-medium font-sans mb-4 text-gold">
                  Free specification matching
                </div>
                <p className="text-sm text-body-text leading-relaxed font-sans mb-5">
                  Send us your current material spec. We evaluate whether our
                  UL-certified compounds can match performance at a competitive price.
                </p>
                <span className="text-sm text-white font-semibold font-sans inline-flex items-center gap-1.5 tracking-wide group-hover:text-gold transition-colors duration-200">
                  Request free evaluation{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
