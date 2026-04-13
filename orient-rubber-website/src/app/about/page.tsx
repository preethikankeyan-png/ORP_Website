import Image from "next/image";
import Link from "next/link";
import { Shield, Award, ChevronRight } from "lucide-react";

/* ─── SEO ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title: "About Us | Orient Rubber Products — Custom Rubber Manufacturer Chennai",
  description:
    "Learn about Orient Rubber Products — established in Chennai in 1998. ISO 9001:2015 and BIS certified manufacturer of custom molded rubber components for industrial clients across India.",
};

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

const certifications = [
  {
    icon: Shield,
    heading: "ISO 9001:2015",
    description:
      "Our manufacturing processes are certified under ISO 9001:2015, reflecting a structured approach to quality planning, process control, and continuous improvement across all production stages.",
  },
  {
    icon: Award,
    heading: "BIS Certified",
    description:
      "We hold Bureau of Indian Standards (BIS) certification for pressure cooker gaskets, confirming our food-grade rubber components meet the applicable Indian Standards for material quality and performance.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">

      {/* ── 1. PAGE BANNER ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[38vh] flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="About Us page banner"
      >
        {/* Subtle dot pattern — consistent with hero */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, #2E4A7A 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-4 text-white/55 text-[13px] font-medium banner-slide-down banner-delay-1"
          >
            <Link
              href="/"
              className="hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white/80">About</span>
          </nav>

          {/* Page Title */}
          <h1 className="text-white text-[40px] md:text-[48px] font-bold leading-tight max-w-xl banner-slide-down banner-delay-2">
            About Us
          </h1>
          <div className="w-14 h-1 bg-[#C8922A] mt-4 banner-slide-down banner-delay-3" />
        </div>
      </section>

      {/* ── 2. OUR STORY ─────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-white"
        aria-label="Our Story"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 items-start">

            {/* Left — Text */}
            <div>
              <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
                Our Story
              </p>
              <div className="w-10 h-0.5 bg-[#C8922A] mb-6" />
              <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-8 leading-snug">
                25 Years of Precision
                <br />
                Manufacturing in Chennai
              </h2>

              <div className="space-y-5 text-[#2A2A2A] text-[17px] leading-[1.8] font-medium">
                <p>
                  Orient Rubber Products was established in 1998 in Chennai,
                  Tamil Nadu, with a clear objective to manufacture dependable
                  rubber components for industrial applications where consistency
                  and reliability are critical. From the beginning, the focus has
                  been on maintaining process discipline, understanding customer
                  requirements, and delivering components that perform reliably
                  in real-world applications.
                </p>
                <p>
                  Over the years, we have developed into a fully equipped
                  manufacturing unit located at SIDCO Industrial Estate,
                  Thirumudivakkam. All major production processes —
                  compounding, compression and transfer molding, post-curing, product finishing, trimming,
                  and final inspection — are handled within the plant. This
                  integration maintains control over quality, timelines, and
                  customization,
                  enabling us to support both development requirements and
                  ongoing production with equal efficiency.
                </p>
                <p>
                  Today, we serve clients across automotive, home and kitchen appliance,
                  medical equipment, electrical, and industrial sectors
                  throughout India. We continue to position ourselves as a
                  reliable rubber components manufacturer in Chennai — supporting
                  customers with consistent quality, technical responsiveness, and
                  long-term reliability.
                </p>
              </div>

              {/* Key facts row */}
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { value: "1998", label: "Established" },
                  { value: "25+", label: "Years of Experience" },
                  { value: "PAN India", label: "Client Reach" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-[#1C2B4A] font-bold text-2xl leading-none">
                      {value}
                    </p>
                    <p className="text-[#6B7280] text-sm font-medium mt-1 tracking-wide">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image */}
            <div className="hidden lg:block sticky top-28">
              <div className="relative rounded-lg overflow-hidden shadow-[0_8px_40px_rgba(28,43,74,0.12)]">
                <Image
                  src="https://placehold.co/800x640/F2F4F7/6B7280?text=Manufacturing+Facility"
                  alt="Orient Rubber Products manufacturing facility at SIDCO Industrial Estate Chennai"
                  width={800}
                  height={640}
                  className="w-full h-auto object-cover"
                />
                {/* Bottom badge */}
                <div className="absolute bottom-5 left-5 bg-[#1C2B4A] text-white px-4 py-3 rounded-md shadow-lg">
                  <p className="text-[#C8922A] font-bold text-lg leading-none">
                    Chennai, India
                  </p>
                  <p className="text-white/70 text-xs font-medium mt-1 tracking-wide uppercase">
                    SIDCO Industrial Estate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CERTIFICATIONS ────────────────────────────────────────────── */}
      <section
        className="py-20 bg-[#F2F4F7]"
        aria-label="Certifications"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Certifications
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
              Standards We Are Certified To
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Our certifications reflect process discipline and verified product
              quality across quality management and product-specific standards.
            </p>
          </div>

          {/* Two certification cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map(
              ({ icon: Icon, heading, description }) => (
                <div
                  key={heading}
                  className="bg-white rounded-lg border-t-[3px] border-t-[#C8922A] shadow-[0_2px_20px_rgba(28,43,74,0.08)] hover:shadow-[0_6px_32px_rgba(28,43,74,0.13)] transition-shadow duration-300"
                >
                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: "rgba(28,43,74,0.08)" }}
                    >
                      <Icon size={28} className="text-[#1C2B4A]" strokeWidth={1.5} />
                    </div>
                    {/* Heading — certification name as dominant title */}
                    <h3 className="text-[#2A2A2A] font-bold text-3xl mb-4">
                      {heading}
                    </h3>
                    <p className="text-[#6B7280] leading-relaxed font-medium text-[15px]">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
