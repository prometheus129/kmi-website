import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Preços de Polímeros PP PE PVC Hoje — Kantor Materials",
  description:
    "Avaliação diária de mercado CFR para PP, PE, HDPE, LLDPE e PVC de origem chinesa. Atualizado a cada sessão. Grátis para importadores de polímeros.",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      th: "/th/pricing",
    },
  },
};

export default function PtPricingPage() {
  return <PricingPageContent locale="pt" />;
}
