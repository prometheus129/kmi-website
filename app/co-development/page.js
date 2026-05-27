import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CodevApplicationForm from "@/components/codev/CodevApplicationForm";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Custom Engineering Plastics at Startup Speed — Kantor Materials",
  description:
    "48 hours to three material recommendations. 4-6 weeks to your custom material. Built for hardware brands the majors aren't. Apply for the Q3 pilot — 3-5 brands, one part each, no commitment.",
  openGraph: {
    title: "Custom Engineering Plastics at Startup Speed — Kantor Materials",
    description:
      "48 hours to three material recommendations. 4-6 weeks to your custom material. Apply for the Q3 pilot.",
  },
  alternates: { canonical: "/co-development" },
};

export default function CoDevelopmentPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={organizationSchema} />
      <Nav />

      {/* ═══════════════════════════════════════════════════════
          HERO (with atmospheric texture)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.085]">
          <Image
            src="/images/hero-texture.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center 60%" }}
            sizes="100vw"
            priority
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/70" />
        {/* Gradient orbs */}
        <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(46,139,139,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,168,67,0.05)_0%,transparent_70%)] rounded-full" />

        <div className="max-w-[1100px] mx-auto relative z-10">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              FOR HARDWARE BRANDS
            </span>
            <h1 className="font-serif text-4xl lg:text-[64px] font-bold text-white mb-6 max-w-[920px] leading-[1.05]">
              Custom engineering plastics,
              <br />
              <span className="text-gold">at startup speed.</span>
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-[640px]">
              <span className="text-white font-medium">48 hours</span> to three
              material recommendations.{" "}
              <span className="text-white font-medium">4-6 weeks</span> to
              your custom material. Built for OEMs the majors aren&apos;t.
            </p>
          </RevealDiv>

          {/* Stat row — two metrics, integrated into the hero */}
          <RevealDiv delay={150}>
            <div className="mt-12 lg:mt-14 bg-gradient-to-br from-gold/[0.08] to-gold/[0.01] border border-gold/[0.25] rounded-xl p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 backdrop-blur-sm">
              <div className="text-center md:text-left">
                <div className="font-serif text-[56px] lg:text-[68px] font-bold text-gold leading-none">
                  48
                </div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[3px] text-body-text mt-2">
                  HOURS
                </div>
                <p className="font-sans text-sm text-body-text leading-relaxed mt-3 max-w-[320px] mx-auto md:mx-0">
                  to three material recommendations from your spec
                </p>
              </div>
              <div className="text-center md:text-left md:border-l md:border-gold/[0.25] md:pl-8">
                <div className="font-serif text-[56px] lg:text-[68px] font-bold text-gold leading-none">
                  4-6
                </div>
                <div className="font-sans text-[11px] font-bold uppercase tracking-[3px] text-body-text mt-2">
                  WEEKS
                </div>
                <p className="font-sans text-sm text-body-text leading-relaxed mt-3 max-w-[320px] mx-auto md:mx-0">
                  from intake to your custom material in trial
                </p>
              </div>
            </div>
          </RevealDiv>
        </div>
      </section>

      <div className="border-t border-white/[0.06]" />

      {/* ═══════════════════════════════════════════════════════
          POSITIONING
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              HOW WE&apos;RE BUILT DIFFERENTLY
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-6 leading-tight">
              Most plastics suppliers want a volume commitment before they&apos;ll engage.
            </h2>
            <p className="text-body-text text-base lg:text-lg leading-relaxed mb-4">
              We pick partners based on the problem — send us the spec on the
              one part where material choice actually moves your product, and
              we come back with three honest recommendations in 48 hours.
            </p>
            <p className="text-white text-base lg:text-lg font-medium leading-relaxed">
              By the time a major&apos;s sales rep schedules a first call, you
              have material from us in trial.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHERE THIS WORK PAYS BACK — USE CASES
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHERE THIS WORK PAYS BACK
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-6 max-w-3xl leading-tight">
              Mature brands aren&apos;t buying painkillers — they&apos;re buying competitive advantage.
            </h2>
            <p className="text-body-text text-base leading-relaxed max-w-2xl mb-12">
              Each card below pairs a documented pain with an upside custom
              plastics can deliver, with precedent from teams that already
              captured it. Use cases span consumer electronics and robotics.
            </p>
          </RevealDiv>

          {/* Use case grid — 2 columns desktop, 1 column mobile, 8 total (CE + Robotics) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* CE 1: Recycled content */}
            <RevealDiv delay={0}>
              <UseCaseCard
                tagColor="ce"
                tag="Consumer Electronics · Sustainability"
                title="Pushing the recycled-content ceiling"
                pain="Most brands stop at 30% recycled content. Past that, color drift and surface defects show up — the product starts looking recycled."
                upside="Hit 50%+ recycled content while keeping the color match and impact resistance your design demands."
                precedent="Dell + Covestro held engineering properties from 30% up to 72% recycled across three reuse cycles. Fairphone 5 ships 100%."
              />
            </RevealDiv>

            {/* Robotics 1: Cable jackets */}
            <RevealDiv delay={50}>
              <UseCaseCard
                tagColor="robotics"
                tag="Robotics · Field Life"
                title="Cable jackets that don't fail in 18 months"
                pain="Robot arms and humanoids flex cables millions of times. Field data shows standard cables failing at the 18-month mark."
                upside="Custom rubber-like jackets tested to 15M+ flex cycles — roughly 5x typical service life."
                precedent="Sporting goods first developed this chemistry for athletic shoe midsoles. Cleanly transferred to wearables, now humanoid cabling."
              />
            </RevealDiv>

            {/* CE 2: Heat-conducting */}
            <RevealDiv delay={100}>
              <UseCaseCard
                tagColor="ce"
                tag="Consumer Electronics · AI Compute"
                title="Heat-conducting plastics"
                pain="AI chips in compact devices run hot. Metal heatsinks add weight, occupy space, and dictate where everything else has to go."
                upside="Custom plastic that moves heat almost as well as aluminum at half the weight. The housing becomes the heatsink."
                precedent="Sabic and Covestro both ship commercial reference grades — used in EV battery enclosures, LED housings, and premium electronics."
              />
            </RevealDiv>

            {/* Robotics 2: Gears */}
            <RevealDiv delay={150}>
              <UseCaseCard
                tagColor="robotics"
                tag="Robotics · Mechanical"
                title="Gears that last without the metal weight"
                pain="Industrial joints and humanoid actuators wear out their gears. Metal solves durability but adds weight; standard plastic degrades fast."
                upside="Engineered acetal or PEEK formulations halve gear wear while keeping the weight savings."
                precedent="Tesla Optimus uses PEEK gear substitutes — 10kg lighter, 30% faster. Aerospace and racing have used these for decades."
              />
            </RevealDiv>

            {/* CE 3: Paint elimination */}
            <RevealDiv delay={200}>
              <UseCaseCard
                tagColor="ce"
                tag="Consumer Electronics · Cost + Environmental"
                title="Eliminating the paint step"
                pain="Painting plastic parts is 15-30% of total part cost. Plus rising environmental rules on paint chemicals, plus paint chipping in the field."
                upside="Mix the color into the plastic before molding. Same look, same finish, no paint step, no secondary factory line."
                precedent="Acer + Teijin shipped unpainted recycled-content notebooks at scale. Case studies report up to 40% paint-step cost cut."
              />
            </RevealDiv>

            {/* Robotics 3: Sensor housings */}
            <RevealDiv delay={250}>
              <UseCaseCard
                tagColor="robotics"
                tag="Robotics · Optical Precision"
                title="LiDAR housings that hold tolerance"
                pain="LiDAR and stereo camera housings need micron-level precision. Standard plastic warps with temperature — enough to throw off calibration."
                upside="Custom plastics with near-zero warpage. Sensors stay calibrated through environmental cycles, drop tests, and field life."
                precedent="Automotive ADAS pioneered this for radar and camera housings. The playbook ports cleanly to robotics LiDAR."
              />
            </RevealDiv>

            {/* CE 4: High-flow connectors */}
            <RevealDiv delay={300}>
              <UseCaseCard
                tagColor="ce"
                tag="Consumer Electronics · Manufacturing Economics"
                title="More parts per shot in nylon connectors"
                pain="USB-C and similar miniaturized connectors push against how thin nylon can flow. Wall thickness and parts-per-shot both capped."
                upside="Specialized nylon flows further before setting. 16 → 32 parts per shot from the same mold — halves tooling cost per part."
                precedent="DuPont, BASF, and Solvay all sell high-flow nylon grades for exactly this use. The differentiator is specialized polymer chemistry."
              />
            </RevealDiv>

            {/* Robotics 4: Lightweighting */}
            <RevealDiv delay={350}>
              <UseCaseCard
                tagColor="robotics"
                tag="Robotics · Weight + Performance"
                title="Metal replacement at half the weight"
                pain="Humanoid and mobile robots need to be light to move fast, but structural parts traditionally need metal for strength."
                upside="Fiber-reinforced plastics replace metal at roughly half the weight. Same strength, dramatically lighter robot."
                precedent="Tesla Optimus uses this for its skeletal frame. HP Elite Dragonfly went 82% lighter using these materials."
              />
            </RevealDiv>
          </div>

          <p className="font-sans text-sm text-body-text/80 leading-relaxed mt-10 text-center max-w-2xl mx-auto">
            <span className="text-teal font-semibold tracking-wider">ALSO ENGAGING ON:</span>{" "}
            fire-safe plastics for ultra-thin walls (EU-compliant) · EMI shielding built into molded parts ·
            soft-touch rubberized surfaces · precision gear compounds · static-dissipating housings.
            Ask about your specific part.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY SPEED MATTERS — CREDIBILITY
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHY SPEED MATTERS
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-6 leading-tight">
              The materials decision sits upstream of manufacturing.
            </h2>
            <div className="space-y-4 text-body-text text-base lg:text-lg leading-relaxed">
              <p>
                Apple&apos;s{" "}
                <span className="text-white font-medium">
                  &ldquo;Materials Engineer — Polymers&rdquo;
                </span>{" "}
                role sits in Cupertino. Tesla&apos;s polymer choices for Optimus are
                made in California. In both cases, the spec is decided by the
                design team, not the factory.
              </p>
              <p>
                The supplier that shows up while the design is still open gets
                invited into the conversation — and tends to own the part for its
                lifecycle. By the time a major&apos;s sales rep schedules a first
                call, that window has closed.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — WORKFLOW
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1100px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-12 max-w-3xl leading-tight">
              From your spec to production material — in four phases.
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <WorkflowStep
              num="01"
              title="Discovery"
              detail="Spec intake and alternatives surfaced"
              time="Day 1-3"
            />
            <WorkflowStep
              num="02"
              title="Formulation"
              detail="Three directions with honest tradeoffs"
              time="Day 3-10"
            />
            <WorkflowStep
              num="03"
              title="Iteration"
              detail="Custom-make, test, refine the formulation"
              time="Day 10-28"
            />
            <WorkflowStep
              num="04"
              title="Delivery"
              detail="Production-ready sample and sign-off"
              time="Day 28-42"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT WORKING WITH US LOOKS LIKE
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy-deep py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              WHAT WORKING WITH US LOOKS LIKE
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-12 max-w-3xl leading-tight">
              Direct technical access. Weekly iteration. Production-ready supply.
            </h2>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <EngagementItem
              num="01"
              title="Direct line to engineering"
              detail="Materials questions get answered by an engineer who can actually formulate the solution. Same day, no filtering."
            />
            <EngagementItem
              num="02"
              title="Same-day response during formulation"
              detail="Question on a spec, a color, a regulatory constraint — answered the day you raise it, not the week after."
            />
            <EngagementItem
              num="03"
              title="Weekly iteration during compounding"
              detail="Test results, formulation tweaks, and next-trial scope reviewed together every week through the iteration phase."
            />
            <EngagementItem
              num="04"
              title="Production sign-off and ongoing supply"
              detail="Once you sign off the spec, we handle ongoing supply — shipped to your OEM, warehouse, or wherever your supply chain requires."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PILOT PROGRAM
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
        <div className="max-w-[900px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold mb-4 block">
              THE PILOT PROGRAM
            </span>
            <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-6 leading-tight">
              One part at a time. No commitment.
            </h2>
            <p className="text-body-text text-base lg:text-lg leading-relaxed mb-10">
              Show us the part giving you the most material trouble — what it
              is, your current spec, what&apos;s broken about it. We come back
              in 48 hours with{" "}
              <span className="text-white font-medium">
                three material recommendations and an honest tradeoff assessment.
              </span>{" "}
              If they hold up, we iterate with you on the actual formulation.
              If they don&apos;t, you&apos;ve spent nothing.
            </p>
          </RevealDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2">
            <PilotCriterion
              label="Brand fit"
              detail="Hardware brand — CE, robotics, or scaling startup with a real product"
            />
            <PilotCriterion
              label="Material fit"
              detail="Pain in nylon, polycarbonate, ABS, acetal, TPU, or recycled-content plastics"
            />
            <PilotCriterion
              label="Engagement fit"
              detail="Materials or product team available for 2-3 working sessions in Q3"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          APPLICATION FORM
          ═══════════════════════════════════════════════════════ */}
      <section
        id="apply"
        className="bg-navy-deep py-24 lg:py-32 px-6 lg:px-10 scroll-mt-24"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10 lg:mb-12">
            <RevealDiv>
              <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-gold mb-4 block">
                APPLY FOR THE PILOT
              </span>
              <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-white mb-5 leading-tight">
                Tell us about your problem part.
              </h2>
              <p className="font-sans text-base text-body-text leading-relaxed max-w-[560px] mx-auto">
                Every application reaches David Wu (founder) directly. We
                respond within{" "}
                <span className="text-white font-medium">48 hours</span> with an
                initial read on your spec and pilot fit.
              </p>
            </RevealDiv>
          </div>

          <RevealDiv delay={100}>
            <CodevApplicationForm />
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   COMPONENTS — page-local, kept inline for clarity
   ═══════════════════════════════════════════════════════ */

function UseCaseCard({ tagColor, tag, title, pain, upside, precedent }) {
  const tagClass =
    tagColor === "robotics"
      ? "text-teal-light"
      : "text-gold";
  return (
    <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 lg:p-7 h-full flex flex-col">
      <div
        className={`font-sans text-[10px] font-bold uppercase tracking-[2.5px] ${tagClass} mb-3`}
      >
        {tag}
      </div>
      <h3 className="font-serif text-xl lg:text-[22px] font-bold text-white mb-5 leading-tight">
        {title}
      </h3>
      <div className="space-y-4 flex-1">
        <div className="flex gap-3">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[2px] text-teal mt-[3px] flex-shrink-0 w-12">
            Pain
          </span>
          <p className="font-sans text-sm text-body-text leading-relaxed">
            {pain}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[2px] text-gold mt-[3px] flex-shrink-0 w-12">
            Upside
          </span>
          <p className="font-sans text-sm text-white leading-relaxed">
            {upside}
          </p>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-white/[0.06]">
        <p className="font-sans text-xs text-muted leading-relaxed italic">
          <span className="text-teal not-italic font-semibold">Precedent:</span>{" "}
          {precedent}
        </p>
      </div>
    </div>
  );
}

function WorkflowStep({ num, title, detail, time }) {
  return (
    <div className="bg-white/[0.03] border-l-2 border-gold rounded-r-lg p-5">
      <div className="font-sans text-[11px] font-bold uppercase tracking-[2.5px] text-gold mb-3">
        {num} · {title}
      </div>
      <p className="font-sans text-sm text-white leading-relaxed mb-3">
        {detail}
      </p>
      <p className="font-sans text-xs text-muted tracking-wide">{time}</p>
    </div>
  );
}

function EngagementItem({ num, title, detail }) {
  return (
    <div className="bg-white/[0.025] border border-white/[0.08] rounded-lg p-6 lg:p-7">
      <div className="font-sans text-[11px] font-bold uppercase tracking-[2.5px] text-gold mb-3">
        {num}
      </div>
      <h3 className="font-serif text-xl font-bold text-white mb-3 leading-tight">
        {title}
      </h3>
      <p className="font-sans text-sm text-body-text leading-relaxed">
        {detail}
      </p>
    </div>
  );
}

function PilotCriterion({ label, detail }) {
  return (
    <div className="border-l-2 border-gold/45 pl-4">
      <div className="font-sans text-[10px] font-bold uppercase tracking-[2.5px] text-gold mb-2">
        {label}
      </div>
      <p className="font-sans text-sm text-body-text leading-relaxed">
        {detail}
      </p>
    </div>
  );
}
