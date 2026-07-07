import PricingPageContent from "@/components/pricing/PricingPageContent";

export const revalidate = 3600;

export const metadata = {
  title: "China-Origin Polymer Pricing — PP PE PVC | Kantor Materials",
  description:
    "Indicative CFR market assessment for China-origin PP, PE, HDPE, LLDPE, and PVC. Free for polymer distributors — contact us for executable pricing.",
  openGraph: {
    title: "China Polymer Pricing — Kantor Materials",
    description:
      "Indicative CFR pricing for PP, PE, HDPE, LLDPE, PVC from China.",
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
