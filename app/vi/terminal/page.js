import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Thông tin thị trường hạt nhựa hàng ngày cho nhà phân phối. Xu hướng giá, tín hiệu thời điểm mua và bối cảnh cung ứng. Miễn phí.",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
      tr: "/tr/terminal",
      id: "/id/terminal",
      es: "/es/terminal",
      pt: "/pt/terminal",
      th: "/th/terminal",
      bn: "/bn/terminal",
    },
  },
};

export default function ViTerminalPage() {
  return <TerminalPageContent locale="vi" />;
}
