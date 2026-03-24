"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-[100px] px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,139,139,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orb */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,139,139,0.08)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-[900px] mx-auto relative z-10 text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-6">
            POLYMER PROCUREMENT INTELLIGENCE
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
            Your trading company shares prices.{" "}
            <span className="text-teal-light">We share intelligence.</span>
          </h1>
          <p className="font-sans text-lg text-body-text leading-relaxed max-w-[640px] mx-auto mb-10">
            Daily polymer pricing, buy-timing signals, and supply disruption
            alerts — delivered free to distributors across Southeast Asia.
            Know what the market is doing before you buy.
          </p>

          {/* Primary CTA cluster */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link
              href="/terminal#subscribe"
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Get Free Daily Pricing
            </Link>
            <Link
              href="/terminal"
              className="inline-flex items-center justify-center border border-white/[0.15] hover:border-teal/40 text-white font-sans font-medium text-sm px-7 py-4 rounded-lg transition-all duration-200 hover:-translate-y-px"
            >
              See a Sample Issue
            </Link>
          </div>
          <p className="text-xs text-muted font-sans">
            Free for polymer distributors and converters. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
