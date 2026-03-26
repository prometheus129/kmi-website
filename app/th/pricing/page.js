import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "ราคาโพลิเมอร์ PP PE PVC วันนี้ — Kantor Materials",
  description:
    "ประเมินราคาตลาด CFR รายวันสำหรับ PP, PE, HDPE, LLDPE และ PVC จากจีน อัปเดตทุกรอบซื้อขาย ฟรีสำหรับผู้นำเข้าโพลิเมอร์",
  alternates: {
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      pt: "/pt/pricing",
    },
  },
};

export default function ThPricingPage() {
  return <PricingPageContent locale="th" />;
}
