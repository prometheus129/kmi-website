import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Giá Hạt Nhựa PP PE PVC Hôm Nay — Kantor Materials",
  description:
    "Bảng giá hạt nhựa PP, PE, HDPE, LLDPE và PVC xuất xứ Trung Quốc cập nhật hàng ngày. Giá CFR thị trường cho nhà nhập khẩu Việt Nam. Miễn phí.",
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

export default function ViPricingPage() {
  return <PricingPageContent locale="vi" />;
}
