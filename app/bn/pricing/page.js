import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "আজকের প্লাস্টিক কাঁচামাল দাম PP PE PVC — Kantor Materials",
  description:
    "চীন থেকে PP, PE, HDPE, LLDPE এবং PVC কাঁচামাল দাম প্রতিদিন আপডেট। বাংলাদেশি আমদানিকারকদের জন্য CFR বাজার মূল্য। বিনামূল্যে।",
  // Deindexed (session #402): 0 Google clicks in 3 months. Content retained on disk;
  // reverse by removing this locale from DEINDEXED_LOCALES in lib/insights.js.
  robots: { index: false, follow: true },
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

export default function BnPricingPage() {
  return <PricingPageContent locale="bn" />;
}
