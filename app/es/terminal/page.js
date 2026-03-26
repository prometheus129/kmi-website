import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Inteligencia de mercado de polímeros diaria para distribuidores. Dirección de precios, señales de timing y contexto de oferta. Gratis.",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
    },
  },
};

export default function EsTerminalPage() {
  return <TerminalPageContent locale="es" />;
}
