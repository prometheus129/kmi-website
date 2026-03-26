"use client";

import { useState, useEffect, useRef } from "react";

export default function SearchBar({ value, onChange, placeholder = "Search articles..." }) {
  const [internal, setInternal] = useState(value || "");
  const timerRef = useRef(null);

  useEffect(() => {
    setInternal(value || "");
  }, [value]);

  function handleChange(e) {
    const val = e.target.value;
    setInternal(val);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onChange(val), 300);
  }

  function handleClear() {
    setInternal("");
    clearTimeout(timerRef.current);
    onChange("");
  }

  return (
    <div className="relative mb-6">
      {/* Search icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        value={internal}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-sm text-white placeholder:text-muted/60 font-sans focus:outline-none focus:border-teal/40 focus:bg-white/[0.06] transition-all duration-200"
      />

      {/* Clear button */}
      {internal && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white/70 transition-colors duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
