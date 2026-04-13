import Link from "next/link";
import {
  ChevronRight,
  Gauge,
  MoveHorizontal,
  Layers,
  Thermometer,
  Droplets,
  FlaskConical,
  Flame,
  Scale,
} from "lucide-react";

/* ─── SEO ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title:
    "Quality Assurance | Orient Rubber Products — Rubber Manufacturer Chennai",
  description:
    "In-house testing capabilities at Orient Rubber Products include Shore A hardness, tensile strength, heat aging, oil aging, and specific gravity testing. ISO 9001:2015 certified manufacturer in Chennai.",
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const tests = [
  {
    icon: Gauge,
    title: "Hardness Testing",
    subtitle: "Shore A Consistency",
    description:
      "Measured across batches to ensure material consistency, dimensional stability, and reliable performance.",
  },
  {
    icon: MoveHorizontal,
    title: "Tensile Strength & Elongation",
    subtitle: "Mechanical Performance",
    description:
      "Evaluates material strength and flexibility to ensure durability under operational stress.",
  },
  {
    icon: Layers,
    title: "Compression Strength Testing",
    subtitle: "Load-Bearing Capability",
    description:
      "Assesses resistance to deformation under load, ensuring sealing performance and structural integrity.",
  },
  {
    icon: Thermometer,
    title: "Heat Aging Test",
    subtitle: "High-Temperature Performance",
    description:
      "Tests material stability under prolonged heat exposure to ensure performance in high-temperature conditions.",
  },
  {
    icon: Droplets,
    title: "Oil Aging Test",
    subtitle: "Oil and Chemical Resistance",
    description:
      "Evaluates resistance to oils and chemicals to ensure long-term performance in harsh environments.",
  },
  {
    icon: FlaskConical,
    title: "Volume Swell Testing",
    subtitle: "Fluid Resistance",
    description:
      "Measures fluid absorption to verify material stability and resistance in fluid-contact applications.",
  },
  {
    icon: Flame,
    title: "Ash Content Testing",
    subtitle: "Material Quality",
    description:
      "Determines filler content to ensure formulation accuracy and batch consistency.",
  },
  {
    icon: Scale,
    title: "Specific Gravity Testing",
    subtitle: "Batch Consistency",
    description:
      "Verifies material composition and consistency across batches to maintain quality standards.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function QualityPage() {
  return (
    <main className="flex-1">

      {/* ── 1. PAGE BANNER — two-column with intro merged in ────────────── */}
      <section
        className="relative min-h-[44vh] flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="Quality Assurance page banner"
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
            className="flex items-center gap-1.5 mb-8 text-white/55 text-[13px] font-medium banner-slide-up banner-delay-1"
          >
            <Link
              href="/"
              className="hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white/80">Quality</span>
          </nav>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Title */}
            <div className="banner-slide-up banner-delay-2">
              <h1 className="text-white text-[40px] md:text-[52px] font-bold leading-tight">
                Quality Assurance
              </h1>
              <div className="w-14 h-1 bg-[#C8922A] mt-5" />
            </div>

            {/* Right — Intro text */}
            <div className="banner-slide-up banner-delay-3">
              <p className="text-[#C8922A] font-semibold text-[13px] tracking-[0.18em] uppercase mb-4">
                Quality Overview
              </p>
              <div className="space-y-4 text-white/60 text-[16px] leading-[1.8] font-medium">
                <p>
                  Quality is maintained through structured process control and
                  systematic checks at key stages of production. Each batch is
                  monitored during manufacturing and verified before dispatch to
                  ensure it meets required specifications.
                </p>
                <p>
                  Our in-house testing capabilities allow us to evaluate
                  material properties and product performance efficiently,
                  enabling faster validation, consistent output, and reliable
                  performance across automotive, industrial, electrical, and
                  consumer applications throughout India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. IN-HOUSE TESTING CAPABILITIES ─────────────────────────────── */}
      <section
        className="py-16 bg-[#F2F4F7]"
        aria-label="In-house testing capabilities"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              In-House Testing
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
              Testing Capabilities
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              All material and product testing is conducted within our facility,
              eliminating third-party lab dependency and enabling faster
              validation at each stage of production.
            </p>
          </div>

          {/* 8-card grid: 4-col desktop, 2-col tablet, 1-col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tests.map(({ icon: Icon, title, subtitle, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg border-t-[3px] border-t-[#C8922A] shadow-[0_2px_16px_rgba(28,43,74,0.07)] hover:shadow-[0_6px_28px_rgba(28,43,74,0.13)] transition-shadow duration-300 p-6"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(28,43,74,0.07)" }}
                >
                  <Icon size={22} className="text-[#1C2B4A]" strokeWidth={1.6} />
                </div>
                {/* Title */}
                <h3 className="text-[#2A2A2A] font-semibold text-[16px] mb-1 leading-snug">
                  {title}
                </h3>
                {/* Subtitle */}
                <p className="text-[#C8922A] text-[11px] font-semibold uppercase tracking-[0.12em] mb-3">
                  {subtitle}
                </p>
                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
