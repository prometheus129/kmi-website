"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TradeCorridorMap from "@/components/home/TradeCorridorMap";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

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
        <div
          className="transition-all duration-[500ms]"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-8">
            POLYMER SOURCING INTELLIGENCE
          </div>
          <h1 className="font-serif text-5xl lg:text-[66px] font-bold text-white leading-[1.08] mb-8">
            Your China polymer desk.
          </h1>
          <p className="font-sans text-xl lg:text-2xl text-body-text leading-relaxed max-w-[680px] mx-auto mb-6">
            Describe what you need. We search tens of thousands of grades and
            respond with matched specs, pricing, and documentation — in one
            answer.
          </p>
          <p className="font-serif text-xl text-muted italic mb-12">
            A sourcing depth the polymer industry hasn&apos;t had.
          </p>

          {/* CTA cluster */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-150"
            >
              Tell us what you need
            </a>
            <a
              href="https://www.linkedin.com/newsletters/the-polymer-compass-7444056500781694976/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-medium text-base px-8 py-4 rounded-lg transition-all duration-150 hover:-translate-y-px"
            >
              Subscribe to The Polymer Compass
            </a>
          </div>
          <p className="text-sm text-muted font-sans">
            Free market intelligence for polymer distributors. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
