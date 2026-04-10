import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description: "ڈسٹریبیوٹرز کے لیے روزانہ پولیمر مارکیٹ انٹیلی جنس۔ قیمتیں، سگنلز اور خریداری کا وقت۔ مفت۔",
  alternates: {
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

export default function UrTerminalPage() {
  return <TerminalPageContent locale="ur" />;
}
