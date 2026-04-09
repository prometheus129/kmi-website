"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 lg:py-[130px] px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
      {/* Subtle atmospheric gradients */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,139,139,0.06)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,168,67,0.04)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-[800px] mx-auto relative z-10 text-center">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-7">
            Your China polymer desk.
          </h1>
          <p className="font-sans text-lg lg:text-xl text-body-text leading-relaxed max-w-[640px] mx-auto mb-5">
            Describe what you need. We search tens of thousands of grades and
            respond with matched specs, pricing, and documentation — in one
            answer.
          </p>
          <p className="font-serif text-base lg:text-lg text-cream/40 italic mb-10">
            A sourcing depth the polymer industry hasn&apos;t had.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-base tracking-wider px-8 py-4 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
            >
              Tell us what you need
            </a>
            <a
              href="https://www.linkedin.com/newsletters/the-polymer-compass-7444056500781694976/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-body-text hover:text-teal-light transition-colors duration-200"
            >
              Or subscribe to The Polymer Compass — free market intelligence,
              twice weekly.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
