import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";

const certifications = [
  {
    name: "UL LISTED",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "ISO 9001",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "GRS CERTIFIED",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7 8-12a8 8 0 0 0-16 0c0 5 4 8 8 12z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: "REACH",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    name: "RoHS",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="bg-navy py-24 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric manufacturing texture */}
      <div className="absolute inset-0 opacity-[0.035]">
        <Image
          src="/images/trust-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/60" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <RevealDiv>
          <div className="text-center mb-10">
            <div className="text-[11px] tracking-[3px] text-teal font-sans font-semibold mb-4">
              OUR OPERATIONS
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-3">
              Validated by Production.
            </h2>
            <p className="font-sans text-base text-body-text max-w-[640px] mx-auto">
              Our compounds are validated in our own production lines — over 2
              million finished goods manufactured annually using our materials.
            </p>
          </div>
        </RevealDiv>

        <RevealDiv delay={150}>
          <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 px-3.5 py-2 border border-white/10 rounded-md bg-white/[0.03]"
              >
                <span className="text-teal/60">{cert.icon}</span>
                <span className="font-mono text-[11px] tracking-[3px] text-body-text">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </RevealDiv>

        <RevealDiv delay={300}>
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 lg:gap-6">
              {["BYD", "CATL", "CALB"].map((name, i) => (
                <span key={name} className="flex items-center gap-4 lg:gap-6">
                  <span className="font-mono text-lg lg:text-xl font-bold text-white/70 tracking-[3px]">
                    {name}
                  </span>
                  {i < 2 && <span className="text-white/15">|</span>}
                </span>
              ))}
            </div>
            <p className="font-sans text-xs text-muted mt-3">
              Tier 1 OEM clients supplied by our compounding operations
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
