import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Distribütörler için günlük polimer piyasa istihbaratı. Fiyat yönü, zamanlama sinyalleri ve arz bağlamı. Ücretsiz.",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
    },
  },
};

export default function TrTerminalPage() {
  return <TerminalPageContent locale="tr" />;
}
