"use client";

import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";
import { trackCTA } from "@/lib/tracking";

/**
 * TPC strip — a slim, single-band pointer to The Polymer Compass.
 * Deliberately demoted from a full two-column section (session #364):
 * the homepage's job is sample requests and grade inquiries; the
 * newsletter keeps a door, not a stage.
 */
export default function TPCPreview({ latestIssue }) {
  const fm = latestIssue?.frontmatter;

  return (
    <section className="bg-ticker-bg border-y border-white/[0.06] py-10 px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            {/* Left: label + one line */}
            <div className="flex-1">
              <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-2">
                THE POLYMER COMPASS
              </div>
              <p className="font-sans text-sm lg:text-[15px] text-body-text leading-relaxed">
                Our free newsletter for polymer buyers — grade substitution
                analysis and trade-policy developments across the markets we
                serve.
              </p>
            </div>

            {/* Right: latest issue + subscribe */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
              {fm && (
                <Link
                  href={`/polymer-compass/${latestIssue.slug}`}
                  className="font-sans text-sm font-semibold text-white hover:text-teal transition-colors duration-150 inline-flex items-center gap-1.5"
                >
                  Read the latest issue
                  <span aria-hidden="true">→</span>
                </Link>
              )}
              <Link
                href="/polymer-compass#subscribe"
                onClick={() =>
                  trackCTA(
                    "cta_click",
                    "Subscribe to TPC",
                    "/polymer-compass#subscribe"
                  )
                }
                className="inline-flex items-center justify-center border border-teal/50 text-white font-semibold text-sm tracking-wider px-5 py-2.5 rounded-lg hover:bg-teal/10 hover:border-teal transition-all duration-150"
              >
                Subscribe — Free
              </Link>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
