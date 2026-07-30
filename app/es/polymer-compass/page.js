import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description:
    "Inteligencia de mercado de polímeros diaria para distribuidores. Dirección de precios, señales de timing y contexto de oferta. Gratis.",
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

export default function EsTerminalPage() {
  return <TerminalPageContent locale="es" />;
}
