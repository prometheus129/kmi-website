import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import VerifyRequestForm from "@/components/compliance/VerifyRequestForm";

export const metadata = {
  title: "Request Verification or a Readiness Review | CertDesk by Kantor Materials",
  description:
    "Ask CertDesk to verify a supplier test report, test a material against its TDS, or review your compliance documents before July 8, 2026. Flat fees, reply within one business day.",
  alternates: { canonical: "/compliance/verify-request" },
};

export default function VerifyRequestPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <main className="pt-36 lg:pt-44 pb-16 px-6 lg:px-10">
        <div className="max-w-[680px] mx-auto">
          <RevealDiv>
            <CertDeskMark />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mt-6 mb-4 leading-tight">
              Tell us what needs verifying.
            </h1>
            <p className="text-body-text text-base leading-relaxed mb-10 max-w-[600px]">
              A real person reads this and replies within one business day —
              with scope, turnaround, and a flat fee confirmed before anything
              starts. Document checks run at the desk; material testing runs
              through our affiliated polymer materials lab.
            </p>
          </RevealDiv>

          <VerifyRequestForm />

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
