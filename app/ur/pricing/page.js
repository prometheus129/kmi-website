import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "آج کی پولیمر قیمتیں PP PE PVC — Kantor Materials",
  description: "چین سے PP، PE، HDPE، LLDPE اور PVC کی روزانہ قیمتیں۔ درآمد کنندگان کے لیے CFR قیمتیں۔ مفت۔",
  // Deindexed (session #402): 0 Google clicks in 3 months. Content retained on disk;
  // reverse by removing this locale from DEINDEXED_LOCALES in lib/insights.js.
  robots: { index: false, follow: true },
  alternates: { languages: { en: "/pricing", ur: "/ur/pricing" } },
};

export default function UrPricingPage() {
  return <PricingPageContent locale="ur" />;
}
