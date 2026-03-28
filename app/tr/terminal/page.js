import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description:
    "Distribütörler için günlük polimer piyasa istihbaratı. Fiyat yönü, zamanlama sinyalleri ve arz bağlamı. Ücretsiz.",
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

export default function TrTerminalPage() {
  return <TerminalPageContent locale="tr" />;
}
