import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductGrid, { type Product } from "@/components/ProductGrid";

/* ─── SEO ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title:
    "Our Products | Orient Rubber Products — Custom Rubber Components Chennai",
  description:
    "Custom molded rubber components manufactured in Chennai — O-rings, grommets, gaskets, seals, bellows, gloves, and saddle rings. ISO 9001:2015 certified. Serving industrial clients across India.",
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const products: Product[] = [
  {
    name: "O-Rings",
    description:
      "Custom molded rubber O-rings designed for sealing applications in automotive, hydraulic, and industrial systems across India.",
    images: [
      { src: "/images/orings.png", alt: "Custom molded rubber O-rings manufactured by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
  {
    name: "Heavy Duty Pipe Joint Rings",
    description:
      "High-pressure sealing rings designed for heavy-duty water flow applications, ensuring leak-proof performance and long-term durability.",
    images: [
      { src: "/images/pipe-joint-rings-1.png", alt: "Heavy duty pipe joint rubber sealing rings by Orient Rubber Products Chennai" },
      { src: "/images/pipe-joint-rings-2.png", alt: "Pipe joint rings close-up view by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
  {
    name: "Seals",
    description:
      "Custom rubber seals manufactured for fluid containment and environmental protection in industrial applications.",
    images: [
      { src: "/images/seals.png", alt: "Custom rubber seals for industrial fluid containment by Orient Rubber Products" },
    ],
    badge: null,
  },
  {
    name: "Gaskets — Pressure Cooker",
    description:
      "Food-grade rubber gaskets manufactured for high-pressure cooking applications with consistent sealing performance.",
    images: [
      { src: "https://placehold.co/400x320/F2F4F7/6B7280?text=Cooker+Gaskets+1", alt: "BIS certified pressure cooker rubber gaskets by Orient Rubber Products Chennai" },
      { src: "https://placehold.co/400x320/E2E8F0/4A5568?text=Cooker+Gaskets+2", alt: "Pressure cooker gaskets close-up view by Orient Rubber Products Chennai" },
    ],
    badge: "BIS Certified",
  },
  {
    name: "Silicone Gaskets",
    description:
      "Silicone rubber gaskets manufactured for high-temperature and food-grade applications, offering excellent heat resistance and long-term sealing reliability.",
    images: [
      { src: "/images/silicone-gaskets.png", alt: "Silicone rubber gaskets manufactured by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
  {
    name: "Bellows",
    description:
      "Flexible rubber bellows used to absorb movement and protect components from dust and environmental exposure.",
    images: [
      { src: "/images/bellows-1.png", alt: "Rubber bellows manufactured by Orient Rubber Products Chennai" },
      { src: "/images/bellows-2.png", alt: "Accordion rubber bellows manufactured by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
  {
    name: "Gloves",
    description:
      "Durable rubber gloves designed for flexibility and application-specific usage.",
    images: [
      { src: "/images/gloves.png", alt: "Rubber gloves manufactured by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
  {
    name: "Automotive Parts",
    description:
      "Custom molded rubber components for automotive applications, including seals, grommets, and vibration isolators, manufactured to OEM specifications for reliable in-vehicle performance.",
    images: [
      { src: "/images/automotive-parts.png", alt: "Custom molded rubber automotive parts manufactured by Orient Rubber Products Chennai" },
    ],
    badge: null,
  },
];

const materials = [
  {
    name: "Silicone",
    applications: "High-temperature and food-grade applications",
  },
  {
    name: "Carbon (Carbon Black Compounds)",
    applications: "Cooker gaskets and industrial parts",
  },
  { name: "EPDM", applications: "Weather sealing and outdoor use" },
  { name: "Nitrile (NBR)", applications: "Oil-resistant applications" },
  { name: "Natural Rubber (NR)", applications: "General-purpose components" },
];

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <main className="flex-1">

      {/* ── 1. PAGE BANNER — two-column with intro merged in ────────────── */}
      <section
        className="relative min-h-[44vh] flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="Products page banner"
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
            className="flex items-center gap-1.5 mb-8 text-white/55 text-[13px] font-medium banner-slide-left banner-delay-1"
          >
            <Link
              href="/"
              className="hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white/80">Products</span>
          </nav>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Title */}
            <div className="banner-slide-left banner-delay-2">
              <h1 className="text-white text-[40px] md:text-[52px] font-bold leading-tight">
                Our Products
              </h1>
              <div className="w-14 h-1 bg-[#C8922A] mt-5" />
            </div>

            {/* Right — Intro text */}
            <div className="banner-slide-left banner-delay-3">
              <p className="text-[#C8922A] font-semibold text-[13px] tracking-[0.18em] uppercase mb-4">
                What We Manufacture
              </p>
              <div className="space-y-4 text-white/60 text-[16px] leading-[1.8] font-medium">
                <p>
                  We manufacture a wide range of custom molded rubber components
                  based on customer drawings, technical specifications, and
                  application requirements. Our products are designed to meet
                  functional performance, dimensional accuracy, and durability
                  expectations across industrial environments.
                </p>
                <p>
                  As a rubber components manufacturer in Chennai, we support
                  both prototype development and production volumes, ensuring
                  flexibility and consistency across all orders, serving clients
                  across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PRODUCT GRID ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F2F4F7]" aria-label="Product range">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Product Range
            </p>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto" />
          </div>

          <ProductGrid products={products} />
        </div>
      </section>

      {/* ── 4. MATERIALS TABLE ───────────────────────────────────────────── */}
      <section
        className="py-16 bg-white"
        aria-label="Materials we work with"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Raw Materials
            </p>
            <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
              Materials We Work With
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We compound and process a range of rubber materials to meet the
              thermal, chemical, and mechanical requirements of different
              applications.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-lg border border-[#E5E7EB] shadow-[0_2px_16px_rgba(28,43,74,0.06)]">
              <div className="grid grid-cols-[2fr_3fr] bg-[#1C2B4A]">
                <div className="px-6 py-4 text-white text-[13px] font-semibold uppercase tracking-[0.1em]">
                  Material
                </div>
                <div className="px-6 py-4 text-white text-[13px] font-semibold uppercase tracking-[0.1em]">
                  Typical Applications
                </div>
              </div>
              {materials.map((material, index) => (
                <div
                  key={material.name}
                  className={`grid grid-cols-[2fr_3fr] border-t border-[#E5E7EB] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F2F4F7]"
                  }`}
                >
                  <div className="px-6 py-4 text-[#2A2A2A] font-semibold text-[15px]">
                    {material.name}
                  </div>
                  <div className="px-6 py-4 text-[#6B7280] font-medium text-[15px]">
                    {material.applications}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F2F4F7]" aria-label="Custom requirements CTA">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
            Custom Requirements
          </p>
          <h2 className="text-[#2A2A2A] text-3xl md:text-4xl font-bold mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <div className="w-16 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-2">
            All components are manufactured based on your drawings and
            requirements.
          </p>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-10">
            Send us your requirement and we will help identify the right
            solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C8922A] hover:bg-[#A97A22] text-[#1C2B4A] font-bold text-sm px-10 py-4 rounded-[6px] transition-colors duration-200"
          >
            Send Your Requirement →
          </Link>
        </div>
      </section>

    </main>
  );
}
