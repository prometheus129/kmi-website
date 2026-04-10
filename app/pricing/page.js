import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Daily China-Origin Polymer Pricing — PP PE PVC | Kantor Materials",
  description:
    "CFR market assessment for China-origin PP, PE, HDPE, LLDPE, and PVC. Updated each trading session. Free for polymer distributors.",
  openGraph: {
    title: "Daily China Polymer Pricing — Kantor Materials",
    description:
      "CFR pricing for PP, PE, HDPE, LLDPE, PVC from China. Updated each trading session.",
  },
  alternates: {
    canonical: "/pricing",
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      pt: "/pt/pricing",
      th: "/th/pricing",
      bn: "/bn/pricing",
      ru: "/ru/pricing",
      ar: "/ar/pricing",
      fr: "/fr/pricing",
      ur: "/ur/pricing",
    },
  },
};

export default function PricingPage() {
  return <PricingPageContent locale="en" />;
}
