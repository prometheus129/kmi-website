import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description: "Intelligence quotidienne des marchés polymères pour distributeurs. Prix, signaux et timing d'achat. Gratuit.",
  alternates: {
    languages: {
      en: "/polymer-compass",
      vi: "/vi/polymer-compass",
      tr: "/tr/polymer-compass",
      id: "/id/polymer-compass",
      es: "/es/polymer-compass",
      pt: "/pt/polymer-compass",
      th: "/th/polymer-compass",
      ru: "/ru/polymer-compass",
      fr: "/fr/polymer-compass",
    },
  },
};

export default function FrTerminalPage() {
  return <TerminalPageContent locale="fr" />;
}
