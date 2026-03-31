import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TerminalHero from "@/components/terminal/TerminalHero";
import TerminalShowcase from "@/components/terminal/TerminalShowcase";
import WhyItMatters from "@/components/terminal/WhyItMatters";
import SampleTerminal from "@/components/terminal/SampleTerminal";
import RecentAnalysis from "@/components/terminal/RecentAnalysis";
import SubscriptionForm from "@/components/terminal/SubscriptionForm";

export default function TerminalPageContent({ locale = "en" }) {
  return (
    <div className="min-h-screen bg-navy">
      <Nav />
      <TerminalHero locale={locale} />
      <TerminalShowcase locale={locale} />
      <WhyItMatters locale={locale} />
      <SampleTerminal locale={locale} />
      <RecentAnalysis />
      <SubscriptionForm locale={locale} />
      <Footer />
    </div>
  );
}
