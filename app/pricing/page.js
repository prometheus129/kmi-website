import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "China-Origin Polymer Prices Today — PP PE PVC — Kantor Materials",
  description:
    "Daily CFR market assessment for China-origin PP, PE, HDPE, LLDPE, and PVC. Updated each trading session. Free pricing intelligence for polymer importers.",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      pt: "/pt/pricing",
      th: "/th/pricing",
      bn: "/bn/pricing",
    },
  },
};

export default function PricingPage() {
  return <PricingPageContent locale="en" />;
}
