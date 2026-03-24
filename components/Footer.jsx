import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "PLATFORM",
    links: [
      { label: "Syndicate", href: "/about#lanes" },
      { label: "Advanced Materials", href: "/about#lanes" },
      { label: "Morning Terminal", href: "/terminal" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "REGIONS",
    links: [
      { label: "Vietnam", href: "/contact" },
      { label: "Philippines", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ticker-bg pt-16 pb-10 px-6 lg:px-10 border-t border-gold/10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/kantor-logo-transparent.png"
                alt="Kantor Materials International"
                width={200}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="font-sans text-[13px] text-muted leading-relaxed max-w-[280px]">
              Global polymer procurement infrastructure. Hong Kong
              headquartered, sourcing across China, serving emerging markets
              worldwide.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-sans text-[11px] font-bold text-gold/70 tracking-widest mb-4">
                {col.title}
              </div>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-sans text-[13px] text-muted hover:text-cream transition-colors duration-200 mb-2.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-sans text-xs text-subtle">
            © 2026 Kantor Materials International Limited. All rights reserved.
          </span>
          <div className="flex gap-5">
            <span className="font-sans text-[11px] tracking-wide text-gold-light font-semibold">
              EN
            </span>
            <Link
              href="/vi/insights"
              className="font-sans text-[11px] tracking-wide text-subtle hover:text-cream transition-colors duration-200"
            >
              VN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
