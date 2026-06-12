/**
 * Lane-rule disclosure + non-advice disclaimer. Required on every CertDesk page.
 */
export default function ComplianceDisclosure() {
  return (
    <div className="mt-12 pt-8 border-t border-white/[0.08] text-xs text-muted leading-relaxed font-sans space-y-2">
      <p>
        <span className="text-white/60 font-medium">About CertDesk.</span>{" "}
        CertDesk is operated by Kantor Materials International. We help
        importers verify materials, coordinate accredited testing, and prepare
        compliance documentation. We never supply the products we review.
      </p>
      <p>
        This page is general information for importers and sellers, not legal
        advice. Regulations change; confirm requirements against official
        sources or qualified counsel before acting.
      </p>
    </div>
  );
}
