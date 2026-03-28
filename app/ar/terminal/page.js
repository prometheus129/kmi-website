import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "The Polymer Compass — Kantor Materials International",
  description: "تحليلات يومية لأسواق البوليمر للموزعين. أسعار وإشارات سوقية وتوقيت الشراء. مجاناً.",
  alternates: { languages: { en: "/terminal", ar: "/ar/terminal" } },
};

export default function ArTerminalPage() {
  return <TerminalPageContent locale="ar" />;
}
