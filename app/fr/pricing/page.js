import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Prix polymères PP PE PVC aujourd'hui — Kantor Materials",
  description: "Prix quotidiens PP, PE, HDPE, LLDPE et PVC de Chine. Prix CFR pour importateurs. Gratuit.",
  alternates: { languages: { en: "/pricing", fr: "/fr/pricing" } },
};

export default function FrPricingPage() {
  return <PricingPageContent locale="fr" />;
}
