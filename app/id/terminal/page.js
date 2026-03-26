import TerminalPageContent from "@/components/terminal/TerminalPageContent";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Intelijen pasar polimer harian untuk distributor. Arah harga, sinyal waktu beli, dan konteks pasokan. Gratis.",
  alternates: {
    languages: {
      en: "/terminal",
      vi: "/vi/terminal",
    },
  },
};

export default function IdTerminalPage() {
  return <TerminalPageContent locale="id" />;
}
