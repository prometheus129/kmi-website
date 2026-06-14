"use client";

import Link from "next/link";
import { trackCTA } from "@/lib/tracking";

/**
 * Standard CertDesk article CTA → the free Deadline Checker.
 * Per-page overrides come from the article's `cta:` frontmatter block
 * (title / body / buttonLabel / eyebrow) so pages whose open question
 * isn't "which deadline" can frame the same conversion naturally.
 */
export default function ComplianceCTA({
  eyebrow = "Free tool",
  title = "Which 2026 deadlines hit your products?",
  body = "Enter your product type and where you sell. The Deadline Checker maps the rules that apply to you — what is already in force, what is coming, and which documents you need for each.",
  buttonLabel = "Run the free Deadline Checker",
  href = "/compliance/deadline-checker",
}) {
  return (
    <div className="mt-12 p-6 lg:p-8 rounded-lg bg-teal/[0.07] border border-teal/20">
      <p className="font-mono text-[10px] uppercase tracking-[2px] text-teal/80 mb-3">
        {eyebrow}
      </p>
      <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-body-text leading-relaxed mb-5">{body}</p>
      <Link
        href={href}
        onClick={() => trackCTA("cta_click", "article_cta", href)}
        className="inline-block bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
