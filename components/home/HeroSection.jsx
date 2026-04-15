"use client";

import Image from "next/image";
import Link from "next/link";
import TradeCorridorMap from "@/components/home/TradeCorridorMap";
import { trackCTA } from "@/lib/tracking";

const stats = [
  { value: "134,000+", label: "Product specifications indexed" },
  { value: "20", label: "Documents in every polymer shipment" },
  { value: "Daily", label: "FOB pricing from China's export market" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.085]">
        <Image
          src="/images/hero-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 75%" }}
          sizes="100vw"
          priority
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/60" />
      {/* Trade corridor visualization */}
      <TradeCorridorMap />
      {/* Gradient orbs */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,139,139,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,168,67,0.04)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-[1100px] mx-auto relative z-10 text-center w-full py-24 lg:py-24">
        <div className="animate-[hero-fade-in_0.5s_ease-out_both]">
          <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-8">
            POLYMER PROCUREMENT
          </div>
          <h1 className="font-serif text-5xl lg:text-[66px] font-bold text-white leading-[1.08] mb-8">
            Matched Grades. Landed Costs. Documentation. In One Answer.
          </h1>
          <p className="font-sans text-xl lg:text-2xl text-body-text leading-relaxed max-w-[680px] mx-auto mb-10">
            Describe what you need — grade, specs, destination. We respond with
            matched candidates, current CFR pricing, freight to your port, and
            the documentation your customs broker requires. One inquiry. One
            complete answer.
          </p>

          {/* CTA cluster */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="#inquiry"
              onClick={() => trackCTA("cta_click", "Tell Us What You Need", "#inquiry")}
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
            >
              Tell us what you need
            </a>
            <Link
              href="#inquiry"
              onClick={() => trackCTA("cta_click", "Try One Container", "#inquiry")}
              className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-medium text-base px-8 py-4 rounded-lg transition-all duration-150 hover:-translate-y-px"
            >
              Try one container alongside your current supply
            </Link>
          </div>

          {/* Social proof stats — inline in hero */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="font-mono text-xl lg:text-2xl font-bold text-teal-light tracking-tight">
                  {s.value}
                </span>
                <span className="font-sans text-xs text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
