import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials",
  description:
    "পলিমার পরিবেশকদের জন্য দৈনিক বাজার তথ্য। মূল্য প্রবণতা, ক্রয় সংকেত এবং সাপ্লাই চেইন বিশ্লেষণ। বিনামূল্যে।",
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

export default function BnTerminalPage() {
  return <TerminalPageContent locale="bn" />;
}
