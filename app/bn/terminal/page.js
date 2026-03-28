import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description:
    "পলিমার পরিবেশকদের জন্য দৈনিক বাজার তথ্য। মূল্য প্রবণতা, ক্রয় সংকেত এবং সাপ্লাই চেইন বিশ্লেষণ। বিনামূল্যে।",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
      tr: "/tr/terminal",
      id: "/id/terminal",
      es: "/es/terminal",
      pt: "/pt/terminal",
      th: "/th/terminal",
      bn: "/bn/terminal",
    },
  },
};

export default function BnTerminalPage() {
  return <TerminalPageContent locale="bn" />;
}
