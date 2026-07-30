import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description:
    "পলিমার পরিবেশকদের জন্য দৈনিক বাজার তথ্য। মূল্য প্রবণতা, ক্রয় সংকেত এবং সাপ্লাই চেইন বিশ্লেষণ। বিনামূল্যে।",
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

export default function BnTerminalPage() {
  return <TerminalPageContent locale="bn" />;
}
