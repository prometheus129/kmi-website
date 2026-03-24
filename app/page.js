import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import StatsBar from "@/components/home/StatsBar";
import TerminalPreview from "@/components/home/TerminalPreview";
import TrustSection from "@/components/home/TrustSection";
import LaneCards from "@/components/home/LaneCards";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <HeroSection />
      <TerminalPreview />
      <StatsBar />
      <ValueProps />
      <TrustSection />
      <LaneCards />
      <Footer />
    </div>
  );
}
