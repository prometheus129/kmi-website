import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "ข่าวกรองตลาดโพลิเมอร์รายวันสำหรับผู้จัดจำหน่าย ทิศทางราคา สัญญาณจังหวะซื้อ และบริบทอุปทาน ฟรี",
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

export default function ThTerminalPage() {
  return <TerminalPageContent locale="th" />;
}
