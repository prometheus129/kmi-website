import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "ข่าวกรองตลาดโพลิเมอร์รายวันสำหรับผู้จัดจำหน่าย ทิศทางราคา สัญญาณจังหวะซื้อ และบริบทอุปทาน ฟรี",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
    },
  },
};

export default function ThTerminalPage() {
  return <TerminalPageContent locale="th" />;
}
