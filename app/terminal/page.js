import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TerminalHero from "@/components/terminal/TerminalHero";
import TerminalShowcase from "@/components/terminal/TerminalShowcase";
import WhyItMatters from "@/components/terminal/WhyItMatters";
import SampleTerminal from "@/components/terminal/SampleTerminal";
import SubscriptionForm from "@/components/terminal/SubscriptionForm";

export const metadata = {
  title: "Morning Terminal — Kantor Materials International",
  description:
    "Weekly polymer market intelligence delivered every Monday at 7 AM. Pricing direction, timing signals, and supply context for qualified distributors. Free.",
};

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Nav />
      <TerminalHero />
      <TerminalShowcase />
      <WhyItMatters />
      <SampleTerminal />
      <SubscriptionForm />
      <Footer />
    </div>
  );
}
