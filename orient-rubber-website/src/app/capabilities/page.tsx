import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ─── SEO ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title:
    "Our Capabilities | Orient Rubber Products — Rubber Manufacturer Chennai",
  description:
    "Compression molding, compounding, post-curing, and in-process inspection — Orient Rubber Products operates a fully equipped rubber manufacturing facility in Chennai, India.",
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const capabilities = [
  {
    title: "Raw Material Weighing",
    subtitle: "Precision Batch Preparation",
    description:
      "Each production batch begins with precise weighing of raw rubber and compounding ingredients. Accurate batch preparation ensures consistent compound properties and dimensional repeatability across all production runs.",
    image:
      "https://placehold.co/400x300/F2F4F7/6B7280?text=Raw+Material+Weighing",
    alt: "Raw material weighing and batch preparation at Orient Rubber Products facility Chennai",
  },
  {
    title: "Kneader",
    subtitle: "Carbon Mixing",
    description:
      "Carbon black and rubber compounds are processed through the kneader to achieve uniform dispersion of fillers and additives. This stage determines the fundamental mechanical and physical properties of the compounded material.",
    image: "https://placehold.co/400x300/F2F4F7/6B7280?text=Kneader",
    alt: "Kneader carbon mixing operation at Orient Rubber Products manufacturing facility",
  },
  {
    title: "Mixing Mill",
    subtitle: "Compound Refinement",
    description:
      "Compound batches are refined on the mixing mill to achieve uniform dispersion of carbon and additives, ensuring consistency, dimensional stability, and superior surface finish in molded components.",
    image: "https://placehold.co/400x300/F2F4F7/6B7280?text=Mixing+Mill",
    alt: "Mixing mill compound refinement process at Orient Rubber Products Chennai",
  },
  {
    title: "Silicone Mixing",
    subtitle: "Dedicated Silicone Mill",
    description:
      "Dedicated silicone mixing mill designed to prevent contamination from carbon and external particulates, ensuring consistent colour integrity and high-clarity transparent products.",
    image: "https://placehold.co/400x300/F2F4F7/6B7280?text=Silicone+Mixing",
    alt: "Dedicated silicone mixing mill at Orient Rubber Products Chennai preventing carbon contamination",
  },
  {
    title: "Compression Molding",
    subtitle: "Automated Presses, 200–450 Tons",
    description:
      "Components are formed using automated compression molding presses. Controlled press pressure, mold temperature, and cure-time parameters are maintained for each product to ensure consistent dimensional accuracy and material performance.",
    image:
      "https://placehold.co/400x300/F2F4F7/6B7280?text=Compression+Molding",
    alt: "Automated compression molding presses at Orient Rubber Products manufacturing plant Chennai",
  },
  {
    title: "Post-Curing Ovens",
    subtitle: "Silicone Finishing",
    description:
      "Silicone components undergo post-curing in temperature-controlled ovens to stabilize material properties, reduce volatile content, and achieve the required Shore A hardness and compression set characteristics.",
    image:
      "https://placehold.co/400x300/F2F4F7/6B7280?text=Post-Curing+Ovens",
    alt: "Post-curing ovens for silicone rubber components at Orient Rubber Products Chennai",
  },
  {
    title: "In-Process Inspection",
    subtitle: "Shop Floor QC",
    description:
      "Quality checks are carried out at defined stages during production to identify and address deviations early. Operators monitor critical dimensions and surface conditions to ensure non-conforming components are caught before further processing.",
    image:
      "https://placehold.co/400x300/F2F4F7/6B7280?text=In-Process+Inspection",
    alt: "In-process quality inspection on the shop floor at Orient Rubber Products facility",
  },
  {
    title: "Trimming & Final Inspection",
    subtitle: "Pre-Dispatch Checks",
    description:
      "Finished components are trimmed to remove flash and inspected against dimensional and visual specifications before dispatch. Only components meeting the required acceptance criteria are approved and packed for shipment.",
    image:
      "https://placehold.co/400x300/F2F4F7/6B7280?text=Trimming+%26+Inspection",
    alt: "Trimming and final inspection of rubber components before dispatch at Orient Rubber Products",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function CapabilitiesPage() {
  return (
    <main className="flex-1">

      {/* ── 1. PAGE BANNER — two-column with intro merged in ────────────── */}
      <section
        className="relative min-h-[44vh] flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="Capabilities page banner"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, #2E4A7A 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-14">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-8 text-white/55 text-[13px] font-medium banner-slide-right banner-delay-1"
          >
            <Link
              href="/"
              className="hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white/80">Capabilities</span>
          </nav>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Title */}
            <div className="banner-slide-right banner-delay-2">
              <h1 className="text-white text-[40px] md:text-[52px] font-bold leading-tight">
                Our Capabilities
              </h1>
              <div className="w-14 h-1 bg-[#C8922A] mt-5" />
            </div>

            {/* Right — Intro text */}
            <div className="banner-slide-right banner-delay-3">
              <p className="text-[#C8922A] font-semibold text-[13px] tracking-[0.18em] uppercase mb-4">
                Manufacturing Overview
              </p>
              <div className="space-y-4 text-white/60 text-[16px] leading-[1.8] font-medium">
                <p>
                  Our manufacturing facility in Chennai is equipped for
                  compression molding of rubber components, supported by
                  structured workflows and process control at every stage. Each
                  operation is carried out using dedicated equipment and
                  monitored by trained personnel to maintain consistency in
                  output.
                </p>
                <p>
                  We are capable of handling a wide range of product types and
                  production volumes, from development batches to regular supply.
                  The focus remains on maintaining uniformity, meeting
                  specifications, and ensuring timely delivery for customers
                  across Chennai and India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MANUFACTURING CAPABILITIES ────────────────────────────────── */}
      <section
        className="py-16 bg-[#F2F4F7]"
        aria-label="Manufacturing capabilities"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Manufacturing Capabilities
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
              End-to-End Production, In-House
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              From raw material preparation to final inspection, every stage of
              production is handled within our Chennai facility under consistent
              process controls.
            </p>
          </div>

          {/* 7-card grid: 3-col desktop, 2-col tablet, 1-col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-lg border-t-[3px] border-t-[#C8922A] shadow-[0_2px_16px_rgba(28,43,74,0.07)] hover:shadow-[0_6px_28px_rgba(28,43,74,0.13)] transition-shadow duration-300 overflow-hidden"
              >
                {/* Card image */}
                <Image
                  src={cap.image}
                  alt={cap.alt}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-[#2A2A2A] font-semibold text-lg mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-[#C8922A] text-[12px] font-semibold uppercase tracking-[0.12em] mb-3">
                    {cap.subtitle}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed font-medium">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR TEAM ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-label="Our team">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Our Team
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
              Trained for Precision, Built for Consistency
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <div className="space-y-5 text-[#2A2A2A] text-[17px] leading-[1.8] font-medium">
              <p>
                Our manufacturing operations are carried out by trained
                production operators supported by a team of administrative and
                supervisory staff. Operators are skilled in mold handling,
                process monitoring, and maintaining consistency across batches.
                They undergo periodic training to stay aligned with quality
                requirements and production standards. Trimming and inspection
                teams are trained with strong attention to precision and detail.
              </p>
              <p>
                Our supervisory and administrative team manages production
                planning, scheduling, documentation, and customer coordination.
                They ensure that each order is tracked efficiently from
                confirmation to dispatch, maintaining clarity, consistency, and
                timely communication throughout the process.
              </p>
            </div>

            {/* Right — Two team images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(28,43,74,0.10)]">
                <Image
                  src="https://placehold.co/600x400/F2F4F7/6B7280?text=Production+Team"
                  alt="Production operators at Orient Rubber Products manufacturing facility Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-[#F2F4F7] px-4 py-3">
                  <p className="text-[#2A2A2A] font-semibold text-sm">
                    Production Team
                  </p>
                  <p className="text-[#6B7280] text-xs font-medium mt-0.5">
                    Shop floor operators
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(28,43,74,0.10)]">
                <Image
                  src="https://placehold.co/600x400/F2F4F7/6B7280?text=Admin+%26+Supervisory"
                  alt="Administrative and supervisory team at Orient Rubber Products Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="bg-[#F2F4F7] px-4 py-3">
                  <p className="text-[#2A2A2A] font-semibold text-sm">
                    Admin & Supervisory
                  </p>
                  <p className="text-[#6B7280] text-xs font-medium mt-0.5">
                    Planning & coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
