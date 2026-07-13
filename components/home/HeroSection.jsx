"use client";

import Image from "next/image";
import Link from "next/link";
import TradeCorridorMap from "@/components/home/TradeCorridorMap";
import { trackCTA } from "@/lib/tracking";

const stats = [
  { value: "98", label: "whiteness · ISO brightness ≥95 (R457), from our own production" },
  { value: "252,000", label: "MT/year GCC capacity — scaling to ~970,000 by Q4 2027" },
  { value: "4", label: "KC Series grades, coated and uncoated" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
      {/* Atmospheric texture — our Vietnam quarry operation */}
      <div className="absolute inset-0 opacity-[0.13]">
        <Image
          src="/images/ops-quarry-wide.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
          sizes="100vw"
          priority
          quality={70}
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
          <div className="text-[13px] lg:text-sm tracking-[3px] text-teal font-sans font-semibold mb-8">
            MINERALS &amp; POLYMERS
          </div>
          <h1 className="font-serif text-5xl lg:text-[66px] font-bold text-white leading-[1.08] mb-8">
            Premium calcium carbonate
            <br />
            from our own production.
            <br />
            Polymers from the same supplier.
          </h1>
          <p className="font-sans text-lg lg:text-xl text-body-text leading-relaxed max-w-[640px] mx-auto mb-10">
            Kantor Materials produces the KC Series — high-whiteness ground
            calcium carbonate, coated and uncoated — through our vertically
            integrated Vietnamese operation. China-origin engineering and
            commodity polymers come from the same supplier. One relationship,
            both sides of your formulation.
          </p>

          {/* CTA cluster */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link
              href="/calcium-carbonate"
              onClick={() => trackCTA("cta_click", "Explore The KC Series", "/calcium-carbonate")}
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
            >
              Explore the KC Series
            </Link>
            <a
              href="#inquiry"
              onClick={() => trackCTA("cta_click", "Tell Us What You Need", "#inquiry")}
              className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-medium text-base px-8 py-4 rounded-lg transition-all duration-150 hover:-translate-y-px"
            >
              Tell us what you need
            </a>
          </div>

          {/* Social proof stats — inline in hero */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="font-mono text-xl lg:text-2xl font-bold text-teal-light tracking-tight">
                  {s.value}
                </span>
                <span className="font-sans text-[13px] lg:text-sm text-muted leading-snug">
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
