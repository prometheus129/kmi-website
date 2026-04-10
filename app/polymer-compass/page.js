import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description:
    "Free market intelligence for polymer distributors. Pricing direction, supply context, and timing guidance. Twice weekly.",
  openGraph: {
    title: "The Polymer Compass — Free Polymer Market Intelligence",
    description:
      "Pricing direction, supply context, and timing guidance for polymer distributors. Twice weekly, free.",
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
      bn: "/bn/polymer-compass",
      ru: "/ru/polymer-compass",
      ar: "/ar/polymer-compass",
      fr: "/fr/polymer-compass",
      ur: "/ur/polymer-compass",
    },
  },
};

export default function TerminalPage() {
  return <TerminalPageContent locale="en" />;
}
