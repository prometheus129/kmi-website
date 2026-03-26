import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Inteligência de mercado de polímeros diária para distribuidores. Direção de preços, sinais de timing e contexto de oferta. Grátis.",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
    },
  },
};

export default function PtTerminalPage() {
  return <TerminalPageContent locale="pt" />;
}
