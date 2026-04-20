"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackCTA } from "@/lib/tracking";

const navLinks = [
  { label: "The Polymer Compass", href: "/polymer-compass" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  { label: "Materials", href: "/materials" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/approach" },
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

const translatedPages = ["/insights", "/polymer-compass", "/pricing"];

function getLocalizedPath(pathname, targetLocale) {
  const currentLocale = getLocaleFromPath(pathname);
  let basePath = pathname;
  if (currentLocale !== "en") {
    basePath = pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";
  }
  if (targetLocale === "en") {
    return basePath || "/";
  }
  const hasTranslation = translatedPages.some(
    (p) => basePath === p || basePath.startsWith(p + "/")
  );
  return `/${targetLocale}${hasTranslation ? basePath : "/insights"}`;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);

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
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/kantor-logo-transparent.png"
            alt="Kantor Materials International"
            width={600}
            height={80}
            className="h-20 w-auto"
            sizes="(max-width: 1024px) 200px, 280px"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-sans font-medium tracking-wide text-cream/70 transition-colors duration-200 hover:text-gold-light py-2"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/inquiry#inquiry"
            onClick={() => trackCTA("cta_click", "Nav CTA", "/inquiry#inquiry")}
            className="bg-gold hover:brightness-110 text-navy-deep text-sm font-semibold tracking-wider px-5 py-3 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] transition-all duration-150 hover:-translate-y-px"
          >
            Tell Us What You Need
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
              href="/inquiry#inquiry"
              onClick={() => { setMobileOpen(false); trackCTA("cta_click", "Nav CTA Mobile", "/inquiry#inquiry"); }}
              className="bg-gold hover:brightness-110 text-navy-deep text-xs font-semibold tracking-wider px-5 py-3 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] text-center mt-2"
            >
              Tell Us What You Need
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
