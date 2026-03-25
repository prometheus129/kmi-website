import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Harga Polimer PP PE PVC Hari Ini — Kantor Materials",
  description:
    "Penilaian pasar CFR harian untuk PP, PE, HDPE, LLDPE, dan PVC asal Tiongkok. Diperbarui setiap sesi perdagangan. Gratis untuk importir polimer Indonesia.",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
    },
  },
};

export default function IdPricingPage() {
  return <PricingPageContent locale="id" />;
}
