"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Morning Terminal", href: "/terminal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-lg transition-all duration-300 px-6 lg:px-10 ${
        scrolled
          ? "bg-navy-deep/[0.98] border-b border-gold/10"
          : "bg-navy-deep/95 border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-28">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/kantor-logo-transparent.png"
            alt="Kantor Materials International"
            width={600}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-sans font-medium tracking-wide text-cream/70 transition-colors duration-200 hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/terminal"
            className="bg-gold text-navy-deep text-xs font-semibold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
          >
            SUBSCRIBE TO TERMINAL
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden pb-6 border-t border-white/5 mt-2">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-sans font-medium px-2 text-cream/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/terminal"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-navy-deep text-xs font-semibold tracking-wider px-5 py-3 rounded-lg text-center mt-2"
            >
              SUBSCRIBE TO TERMINAL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
