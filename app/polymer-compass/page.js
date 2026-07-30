import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description:
    "Free market intelligence for polymer buyers — grade substitution analysis, price spreads, and trade-policy events across commodity and engineering grades.",
  openGraph: {
    title: "The Polymer Compass — Free Polymer Market Intelligence",
    description:
      "Grade substitution analysis, price spreads, and trade-policy events for polymer buyers across commodity and engineering grades. Free.",
  },
  alternates: {
    canonical: "/polymer-compass",
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

export default function TerminalPage() {
  return <TerminalPageContent locale="en" />;
}
