"use client";

import { useState } from "react";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";

export default function MaterialsFilter({ materials, filters }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMaterials =
    activeFilter === "all"
      ? materials
      : materials.filter((m) => m.applications.includes(activeFilter));

  return (
    <>
      <RevealDiv>
        <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
          MATERIAL PORTFOLIO
        </div>
        <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-8 leading-tight">
          Engineering-Grade Compounds
        </h2>

        {/* Application Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-[12px] font-sans font-medium tracking-wide px-4 py-2 rounded-lg border transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-gold/[0.12] border-gold/30 text-gold"
                  : "border-white/[0.08] text-cream/50 hover:text-cream/80 hover:border-white/[0.15]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </RevealDiv>

      {/* Material Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((m, i) => (
          <RevealDiv key={m.name} delay={i * 60}>
            <Link
              href={m.href}
              className={`block bg-gradient-to-br from-white/[0.04] to-white/[0.01] border rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.08)] group ${
                m.highlight
                  ? "border-gold/20 hover:border-gold/40"
                  : "border-white/[0.08] hover:border-gold/30"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono text-base font-bold text-gold-light group-hover:text-gold transition-colors duration-200">
                  {m.name}
                </h3>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cream/20 group-hover:text-gold/60 transition-colors duration-200 shrink-0 mt-0.5"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
              <div className="font-sans text-[11px] text-cream/40 tracking-wide mb-2">
                {m.full}
              </div>
              <p className="font-sans text-sm text-body-text leading-relaxed">
                {m.desc}
              </p>
            </Link>
          </RevealDiv>
        ))}
      </div>
    </>
  );
}
