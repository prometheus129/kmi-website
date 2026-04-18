import PricingPageContent from "@/components/pricing/PricingPageContent";

export const revalidate = 3600;

export const metadata = {
  title: "Giá Hạt Nhựa Hôm Nay — PP, PE, PVC, ABS FOB Trung Quốc | Kantor Materials",
  description:
    "Bảng giá hạt nhựa PP, PE, HDPE, LLDPE, PVC và ABS xuất xứ Trung Quốc cập nhật mỗi phiên giao dịch. Giá FOB tham khảo cho nhà nhập khẩu Việt Nam. Miễn phí.",
  alternates: {
    canonical: "/vi/pricing",
    languages: {
      en: "/pricing",
      vi: "/vi/pricing",
      tr: "/tr/pricing",
      id: "/id/pricing",
      es: "/es/pricing",
      pt: "/pt/pricing",
      th: "/th/pricing",
      bn: "/bn/pricing",
      ru: "/ru/pricing",
      ar: "/ar/pricing",
      fr: "/fr/pricing",
      ur: "/ur/pricing",
    },
  },
};

export default function ViPricingPage() {
  return <PricingPageContent locale="vi" />;
}
