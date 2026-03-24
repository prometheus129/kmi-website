"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Morning Terminal", href: "/terminal", highlight: true },
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
          ? "bg-navy-deep/97 border-b border-teal/15"
          : "bg-navy-deep/92 border-b border-teal/[0.08]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/kantor-logo.png"
            alt="Kantor Materials"
            width={220}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[13px] font-sans tracking-wide transition-colors duration-200 hover:text-white ${
                link.highlight
                  ? "text-teal-light font-semibold"
                  : "text-body-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/terminal"
            className="bg-gradient-to-br from-teal to-teal-light text-white text-xs font-semibold tracking-wider px-5 py-2.5 rounded transition-all duration-200 hover:-translate-y-px shadow-[0_2px_12px_rgba(46,139,139,0.3)]"
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
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
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
                className={`text-sm font-sans px-2 ${
                  link.highlight
                    ? "text-teal-light font-semibold"
                    : "text-body-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/terminal"
              onClick={() => setMobileOpen(false)}
              className="bg-gradient-to-br from-teal to-teal-light text-white text-xs font-semibold tracking-wider px-5 py-3 rounded text-center mt-2"
            >
              SUBSCRIBE TO TERMINAL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
