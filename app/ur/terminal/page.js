import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description: "ڈسٹریبیوٹرز کے لیے روزانہ پولیمر مارکیٹ انٹیلی جنس۔ قیمتیں، سگنلز اور خریداری کا وقت۔ مفت۔",
  alternates: { languages: { en: "/terminal", ur: "/ur/terminal" } },
};

export default function UrTerminalPage() {
  return <TerminalPageContent locale="ur" />;
}
