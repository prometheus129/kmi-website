import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Цены на полимеры PP PE PVC сегодня — Kantor Materials",
  description:
    "Ежедневные цены на PP, PE, HDPE, LLDPE и PVC из Китая. CFR рыночные цены для импортеров Узбекистана. Бесплатно.",
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
      ru: "/ru/pricing",
    },
  },
};

export default function RuPricingPage() {
  return <PricingPageContent locale="ru" />;
}
