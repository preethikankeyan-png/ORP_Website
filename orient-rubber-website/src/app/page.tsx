import Image from "next/image";
import Link from "next/link";
import {
  Car,
  UtensilsCrossed,
  HeartPulse,
  Wrench,
  Zap,
  Droplets,
} from "lucide-react";
import CustomerStrip from "@/components/CustomerStrip";
import WhyChooseUs from "@/components/WhyChooseUs";

/* ─── DATA ─────────────────────────────────────────────────────────────── */

const industries = [
  { icon: Car, label: "Automotive" },
  { icon: UtensilsCrossed, label: "Kitchen Appliances & Home Products" },
  { icon: HeartPulse, label: "Medical Equipment" },
  { icon: Wrench, label: "Industrial & Custom Applications" },
  { icon: Zap, label: "Electrical & Electronics" },
  { icon: Droplets, label: "Pumps & Valves" },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title: "Orient Rubber Products | Rubber Components Manufacturer in Chennai",
  description:
    "Orient Rubber Products manufactures custom molded rubber components — gaskets, O-rings, seals, grommets, and more — for industrial clients across India. ISO 9001:2015 certified. Based in Chennai since 1998.",
};

export default function HomePage() {
  return (
    <main className="flex-1">

      {/* ── 1. HERO — 100vh ──────────────────────────────────────────────── */}
      <section
        className="relative h-screen flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="Hero"
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
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, #2E4A7A 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
            <div>
              <p className="text-[#C8922A] font-semibold text-[13px] tracking-[0.18em] uppercase mb-5 hero-fade-up hero-delay-1">
                Since 1998 · Chennai, India
              </p>
              <h1 className="text-white text-[44px] md:text-[52px] leading-[1.12] font-bold mb-5 max-w-xl hero-fade-up hero-delay-2">
                Rubber Components Manufacturer in Chennai
              </h1>
              <p className="text-white/60 text-lg leading-relaxed font-medium mb-8 max-w-[560px] hero-fade-up hero-delay-3">
                Orient Rubber Products is a trusted manufacturer of custom
                molded rubber components, gaskets, and seals in Chennai,
                supplying industrial clients across India since 1998.
              </p>
              <div className="flex flex-wrap items-center gap-5 hero-fade-up hero-delay-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#C8922A] hover:bg-[#A97A22] text-[#1C2B4A] font-bold text-sm px-8 py-3.5 rounded-[6px] transition-colors duration-200"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm border-b border-white/30 hover:border-white/70 pb-0.5 hover:gap-3 transition-all duration-200"
                >
                  Explore Our Products
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block hero-fade-up hero-delay-5">
              <div className="relative rounded-lg overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
                <Image
                  src="https://placehold.co/1200x600/F2F4F7/6B7280?text=Factory+%26+Production"
                  alt="Orient Rubber Products manufacturing facility in Chennai"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT SNIPPET — py-10 (40px), no min-h-screen ────────────── */}
      <section
        className="py-20 bg-white"
        aria-label="About Orient Rubber Products"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">
            <div>
              <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-2">
                About Us
              </p>
              <div className="w-10 h-0.5 bg-[#C8922A] mb-4" />
              <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4 leading-snug">
                Precision Manufacturing,
                <br />
                Proven Reliability
              </h2>
              <div className="space-y-3 text-[#2A2A2A] text-[17px] leading-[1.75] font-medium">
                <p>
                  For over 25 years, Orient Rubber Products has been
                  manufacturing precision rubber components from our facility in
                  Chennai. Our production covers compounding, mold preparation,
                  compression molding, post-curing, trimming, and final
                  inspection — all handled within our plant to maintain control
                  over quality and timelines.
                </p>
                <p>
                  We manufacture components such as grommets, seals, bellows,
                  and gaskets, tailored to customer drawings and application
                  requirements. Our facility operates ten automated compression
                  molding presses ranging from 200 to 450 tons, supporting
                  development batches and sustained production volumes with
                  equal consistency.
                </p>
                <p>
                  ISO 9001:2015 certified and BIS certified for pressure cooker
                  gaskets, we serve clients across automotive, medical,
                  electrical, and industrial sectors throughout India.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-5 text-[#2E6EBF] hover:text-[#C8922A] font-semibold text-sm border-b-2 border-[#2E6EBF] hover:border-[#C8922A] pb-0.5 transition-colors duration-200"
              >
                Learn More About Us
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(28,43,74,0.12)]">
                <Image
                  src="https://placehold.co/800x700/F2F4F7/6B7280?text=Manufacturing+Facility"
                  alt="Orient Rubber Products manufacturing facility"
                  width={800}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#1C2B4A] text-white px-4 py-3 rounded-md shadow-lg">
                  <p className="text-[#C8922A] font-bold text-xl leading-none">25+</p>
                  <p className="text-white/75 text-xs font-medium mt-1 tracking-wide uppercase">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US — py-10, no min-h-screen ────────────────────── */}
      <section
        className="py-20 bg-[#F2F4F7]"
        aria-label="Why Choose Orient Rubber Products"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-3">
              Built on Process. Backed by Experience.
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-4" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Every component we manufacture goes through structured process
              controls. Consistency is not incidental — it is built into how we
              operate.
            </p>
          </div>

          <WhyChooseUs />
        </div>
      </section>

      {/* ── 4. TRUSTED BY — py-6, compact strip ─────────────────────────── */}
      <CustomerStrip />

      {/* ── 5. INDUSTRIES WE SERVE — py-10, no min-h-screen ─────────────── */}
      <section
        className="py-20 bg-white"
        aria-label="Industries we serve"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-8">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-2">
              Industries We Serve
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-3">
              Supplying Across Sectors
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-4" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Our rubber components are used in a range of industries where
              dimensional accuracy, material performance, and reliability are
              non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-[#E5E7EB] bg-white hover:border-[#C8922A]/40 hover:shadow-[0_4px_20px_rgba(28,43,74,0.08)] transition-[border-color,box-shadow] duration-300 group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#F2F4F7] flex items-center justify-center group-hover:bg-[#1C2B4A] transition-colors duration-300">
                  <Icon
                    size={24}
                    className="text-[#1C2B4A] group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-[#2A2A2A] font-semibold text-sm leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6B7280] text-sm font-medium mt-6 max-w-xl mx-auto leading-relaxed">
            We are open to working with any industry requiring custom molded
            rubber components. Contact us with your requirement.
          </p>
        </div>
      </section>

    </main>
  );
}
