"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function SplitCard({ lane, title, subtitle, description, cta, href, accent }) {
  return (
    <Link
      href={href}
      className={`group block rounded-lg p-8 cursor-pointer transition-all duration-350 border
        bg-gradient-to-br from-white/5 to-white/[0.01]
        hover:from-white/[0.08] hover:to-white/[0.03]
        hover:-translate-y-[3px]
        ${
          accent === "teal"
            ? "border-white/[0.08] hover:border-teal/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(46,139,139,0.13)]"
            : "border-white/[0.08] hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(212,168,67,0.13)]"
        }`}
    >
      <div
        className={`text-[10px] tracking-[3px] font-bold font-sans mb-3 ${
          accent === "teal" ? "text-teal" : "text-gold"
        }`}
      >
        {lane}
      </div>
      <h3 className="font-serif text-[26px] font-bold text-white mb-1">
        {title}
      </h3>
      <div
        className={`text-[13px] font-medium font-sans mb-4 ${
          accent === "teal" ? "text-teal" : "text-gold"
        }`}
      >
        {subtitle}
      </div>
      <p className="text-sm text-body-text leading-relaxed font-sans mb-5">
        {description}
      </p>
      <span className="text-[13px] text-white font-semibold font-sans inline-flex items-center gap-1.5 tracking-wide">
        {cta}{" "}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

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

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="text-xs tracking-[4px] text-teal font-sans font-semibold mb-6">
            POLYMER PROCUREMENT INFRASTRUCTURE
          </div>
          <h1 className="font-serif text-[42px] md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-[700px]">
            Global Polymer
            <br />
            <span className="text-teal-light">Infrastructure.</span>
          </h1>
          <p className="font-sans text-lg text-body-text leading-relaxed max-w-[600px] mb-12">
            Connecting the world to China&apos;s industrial core. Aggregated
            commodity procurement and application-specific advanced materials for
            distributors and manufacturers across emerging markets.
          </p>
        </div>

        {/* Split Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] transition-all duration-1000 delay-300"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <SplitCard
            lane="LANE 1"
            title="The Kantor Syndicate"
            subtitle="For Distributors"
            description="Aggregated commodity procurement with volume-based economics. PP, PE, PA6, ABS across emerging markets."
            cta="Explore Syndicate"
            href="/syndicate"
            accent="teal"
          />
          <SplitCard
            lane="LANE 2"
            title="Advanced Materials"
            subtitle="For Engineers & Manufacturers"
            description="UL-certified, application-specific compounds. Reverse-engineered to match your incumbent specification."
            cta="Explore Materials"
            href="/materials"
            accent="gold"
          />
        </div>

        <div
          className="mt-10 transition-opacity duration-1000 delay-[800ms]"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          <Link
            href="/terminal"
            className="text-teal-light text-sm font-sans inline-flex items-center gap-2 tracking-wide hover:underline"
          >
            Get free weekly market intelligence →
          </Link>
        </div>
      </div>
    </section>
  );
}
