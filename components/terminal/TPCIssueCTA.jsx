import Link from "next/link";

export default function TPCIssueCTA() {
  return (
    <section className="mt-16 border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-8 lg:p-10">
      <div className="text-center">
        <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-3 block">
          THE POLYMER COMPASS
        </span>
        <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-md mx-auto mb-6">
          Free market intelligence for polymer distributors. Twice weekly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/polymer-compass#subscribe"
            className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-light text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
          >
            Subscribe for the next issue
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m-4-4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/inquiry"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
          >
            Tell us what you need
          </Link>
        </div>
      </div>
    </section>
  );
}
