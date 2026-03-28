import Link from "next/link";

export default function Lane2DiscoveryCard() {
  return (
    <Link
      href="/materials"
      className="block max-w-[780px] mx-auto bg-gradient-to-r from-gold/[0.06] to-transparent border border-gold/[0.12] rounded-xl px-8 py-6 hover:border-gold/25 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between gap-6">
        <div>
          <div className="text-[10px] tracking-[3px] text-gold/70 font-sans font-semibold mb-2">
            ENGINEERING POLYMERS
          </div>
          <p className="font-sans text-[15px] text-cream/80 leading-relaxed">
            Also sourcing PEEK, PPS, PA66, or PC/ABS? Explore our{" "}
            <span className="text-gold-light group-hover:text-gold transition-colors duration-200 font-medium">
              advanced materials guides
            </span>{" "}
            — material selection, qualification protocols, and pricing for
            Chinese-origin engineering polymer alternatives.
          </p>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-gold/40 group-hover:text-gold/70 shrink-0 transition-colors duration-200"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
