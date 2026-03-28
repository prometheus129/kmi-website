import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description:
    "Ежедневная аналитика рынка полимеров для дистрибьюторов. Цены, рыночные сигналы и рекомендации по срокам закупок. Бесплатно.",
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
      ru: "/ru/terminal",
    },
  },
};

export default function RuTerminalPage() {
  return <TerminalPageContent locale="ru" />;
}
