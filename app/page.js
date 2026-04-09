import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CapabilityCards from "@/components/home/CapabilityCards";
import HonestySection from "@/components/home/HonestySection";
import ForDistributors from "@/components/home/ForDistributors";
import SocialProof from "@/components/home/SocialProof";
import InquirySection from "@/components/home/InquirySection";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <HeroSection />
      <CapabilityCards />
      <HonestySection />
      <ForDistributors />
      <SocialProof />
      <InquirySection />
      <Footer />
    </div>
  );
}
