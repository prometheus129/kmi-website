import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "আজকের প্লাস্টিক কাঁচামাল দাম PP PE PVC — Kantor Materials",
  description:
    "চীন থেকে PP, PE, HDPE, LLDPE এবং PVC কাঁচামাল দাম প্রতিদিন আপডেট। বাংলাদেশি আমদানিকারকদের জন্য CFR বাজার মূল্য। বিনামূল্যে।",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
    },
  },
};

export default function BnPricingPage() {
  return <PricingPageContent locale="bn" />;
}
