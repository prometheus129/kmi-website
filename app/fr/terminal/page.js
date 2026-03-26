import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description: "Intelligence quotidienne des marchés polymères pour distributeurs. Prix, signaux et timing d'achat. Gratuit.",
  alternates: { languages: { en: "/terminal", fr: "/fr/terminal" } },
};

export default function FrTerminalPage() {
  return <TerminalPageContent locale="fr" />;
}
