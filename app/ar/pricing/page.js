import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "أسعار البوليمر اليوم PP PE PVC — Kantor Materials",
  description: "أسعار PP وPE وHDPE وLLDPE وPVC من الصين يومياً. أسعار CFR للمستوردين. مجاناً.",
  // Deindexed (session #402): 0 Google clicks in 3 months. Content retained on disk;
  // reverse by removing this locale from DEINDEXED_LOCALES in lib/insights.js.
  robots: { index: false, follow: true },
  alternates: { languages: { en: "/pricing", ar: "/ar/pricing" } },
};

export default function ArPricingPage() {
  return <PricingPageContent locale="ar" />;
}
