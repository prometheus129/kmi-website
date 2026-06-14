import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import LabStatusChecker from "@/components/compliance/LabStatusChecker";

export const metadata = {
  title: "Free CPSC Lab & Test-Report Status Checker | CertDesk by Kantor Materials",
  description:
    "Enter your testing lab and the rule your certificate cites. See instantly whether CPSC withdrew the lab's acceptance — including the four China labs withdrawn in January 2026 — plus a guided official check and report red-flags.",
  alternates: { canonical: "/compliance/lab-status-checker" },
};

export default function LabStatusCheckerPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <main className="pt-36 lg:pt-44 pb-16 px-6 lg:px-10">
        <div className="max-w-[780px] mx-auto">
          <RevealDiv>
            <CertDeskMark />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mt-6 mb-4 leading-tight">
              Is your testing lab still CPSC-accepted?
            </h1>
            <p className="text-body-text text-base leading-relaxed mb-10 max-w-[640px]">
              CPSC withdrew acceptance from four China-based labs in January 2026,
              effective immediately and with no grace period — and CPSC posts these
              actions to its website, not your inbox. Enter your lab to screen it
              against the for-cause withdrawals, get a guided check on the official
              registry for your specific rule, and run the report red-flags. Free,
              about 60 seconds.
            </p>
          </RevealDiv>

          <LabStatusChecker />

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
