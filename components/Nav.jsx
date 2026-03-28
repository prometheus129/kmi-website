"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Advanced Materials", href: "/materials" },
  { label: "The Polymer Compass", href: "/terminal" },
  { label: "Daily Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", label: "English", display: "EN" },
  { code: "vi", label: "Tiếng Việt", display: "VN" },
  { code: "tr", label: "Türkçe", display: "TR" },
  { code: "id", label: "Bahasa Indonesia", display: "ID" },
  { code: "es", label: "Español", display: "ES" },
  { code: "pt", label: "Português", display: "PT" },
  { code: "th", label: "ภาษาไทย", display: "TH" },
  { code: "bn", label: "বাংলা", display: "BN" },
  { code: "ru", label: "Русский", display: "RU" },
  { code: "ar", label: "العربية", display: "AR" },
  { code: "fr", label: "Français", display: "FR" },
  { code: "ur", label: "اردو", display: "UR" },
];

function getLocaleFromPath(pathname) {
  const match = pathname.match(/^\/(vi|tr|id|es|pt|th|bn|ru|ar|fr|ur)(\/|$)/);
  return match ? match[1] : "en";
}

// Pages that have translated versions (vi and tr only for /terminal)
const translatedPages = ["/insights", "/terminal", "/pricing"];

function getLocalizedPath(pathname, targetLocale) {
  const currentLocale = getLocaleFromPath(pathname);
  // Strip current locale prefix
  let basePath = pathname;
  if (currentLocale !== "en") {
    basePath = pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";
  }
  if (targetLocale === "en") {
    // For English, go to the base path (always exists)
    return basePath || "/";
  }
  // For non-English, only link to pages that have translations
  const hasTranslation = translatedPages.some(
    (p) => basePath === p || basePath.startsWith(p + "/")
  );
  return `/${targetLocale}${hasTranslation ? basePath : "/insights"}`;
}

// Locales that have a translated /terminal page
const terminalLocales = ["en", "vi", "tr", "id", "es", "pt", "th", "bn", "ru", "ar", "fr", "ur"];

function getTerminalSubscribeHref(locale) {
  if (terminalLocales.includes(locale) && locale !== "en") {
    return `/${locale}/terminal#subscribe`;
  }
  return "/terminal#subscribe";
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const currentDisplay =
    languages.find((l) => l.code === currentLocale)?.display || "EN";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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
        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-sans font-medium tracking-wide text-cream/70 transition-colors duration-200 hover:text-gold-light"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Selector */}
          <div
            ref={langRef}
            className="relative flex items-center gap-1.5 cursor-pointer pl-4 border-l border-white/[0.08] group"
            onClick={() => setLangOpen(!langOpen)}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cream/50 group-hover:text-cream/80 transition-colors duration-200"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="text-xs font-sans font-medium tracking-wide text-cream/60 group-hover:text-cream/90 transition-colors duration-200">
              {currentDisplay}
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className={`text-cream/40 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
            >
              <path d="M3 5l3 3 3-3" />
            </svg>

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute top-full mt-3 right-0 bg-navy-deep/[0.98] backdrop-blur-xl border border-gold/[0.12] rounded-[10px] p-1.5 min-w-[180px] shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.03)] z-50">
                {languages.map((lang) => {
                  const isActive = lang.code === currentLocale;
                  return (
                    <Link
                      key={lang.code}
                      href={getLocalizedPath(pathname, lang.code)}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors duration-150 ${
                        isActive
                          ? "bg-gold/[0.08]"
                          : "hover:bg-gold/[0.06]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-[11px] font-semibold tracking-wider w-[22px] ${
                            isActive ? "text-gold" : "text-cream/45"
                          }`}
                        >
                          {lang.display}
                        </span>
                        <span
                          className={`text-[13px] ${
                            isActive
                              ? "text-cream/95 font-medium"
                              : "text-cream/60"
                          }`}
                        >
                          {lang.label}
                        </span>
                      </div>
                      {isActive && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="text-gold"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href={getTerminalSubscribeHref(currentLocale)}
            className="bg-gold text-navy-deep text-xs font-semibold tracking-wider px-5 py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
          >
            FREE DAILY INTELLIGENCE
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

            {/* Mobile Language Selector */}
            <div className="border-t border-white/5 pt-4 mt-1 px-2">
              <div className="text-[11px] font-sans font-bold text-gold/50 tracking-widest mb-3">
                LANGUAGE
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => {
                  const isActive = lang.code === currentLocale;
                  return (
                    <Link
                      key={lang.code}
                      href={getLocalizedPath(pathname, lang.code)}
                      onClick={() => setMobileOpen(false)}
                      className={`text-[11px] font-sans font-medium tracking-wide px-3 py-1.5 rounded-md transition-colors duration-200 ${
                        isActive
                          ? "bg-gold/[0.12] text-gold"
                          : "text-cream/50 hover:text-cream/80 hover:bg-white/[0.04]"
                      }`}
                    >
                      {lang.display}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href={getTerminalSubscribeHref(currentLocale)}
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-navy-deep text-xs font-semibold tracking-wider px-5 py-3 rounded-lg text-center mt-2"
            >
              FREE DAILY INTELLIGENCE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
