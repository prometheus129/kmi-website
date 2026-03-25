import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Güncel Polimer Fiyatları — PP PE PVC — Kantor Materials",
  description:
    "Çin menşeli PP, PE, HDPE, LLDPE ve PVC için günlük CFR piyasa değerlendirmesi. Her işlem seansında güncellenir. Türk polimer ithalatçıları için ücretsiz.",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      id: "/id/pricing",
    },
  },
};

export default function TrPricingPage() {
  return <PricingPageContent locale="tr" />;
}
