import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description: "ڈسٹریبیوٹرز کے لیے روزانہ پولیمر مارکیٹ انٹیلی جنس۔ قیمتیں، سگنلز اور خریداری کا وقت۔ مفت۔",
  // Deindexed (session #402): 0 Google clicks in 3 months. Content retained on disk;
  // reverse by removing this locale from DEINDEXED_LOCALES in lib/insights.js.
  robots: { index: false, follow: true },
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

export default function UrTerminalPage() {
  return <TerminalPageContent locale="ur" />;
}
