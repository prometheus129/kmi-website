import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Thông tin thị trường hạt nhựa hàng ngày cho nhà phân phối. Xu hướng giá, tín hiệu thời điểm mua và bối cảnh cung ứng. Miễn phí.",
  alternates: {
    languages: {
      en: "/terminal",
      tr: "/tr/terminal",
    },
  },
};

export default function ViTerminalPage() {
  return <TerminalPageContent locale="vi" />;
}
