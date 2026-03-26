import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Precios de Polímeros PP PE PVC Hoy — Kantor Materials",
  description:
    "Evaluación diaria de mercado CFR para PP, PE, HDPE, LLDPE y PVC de origen chino. Actualizado cada sesión. Gratis para importadores de polímeros.",
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

export default function EsPricingPage() {
  return <PricingPageContent locale="es" />;
}
