import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

/* ─── SEO ──────────────────────────────────────────────────────────────── */

export const metadata = {
  title:
    "Contact Us | Orient Rubber Products — Rubber Manufacturer Chennai",
  description:
    "Get in touch with Orient Rubber Products. Send your rubber component requirement or drawing to our Chennai facility. Call +91 98405 68327 or email info@orientrubber.in.",
};

/* ─── PAGE ──────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <main className="flex-1">

      {/* ── 1. PAGE BANNER ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[38vh] flex items-center bg-[#1C2B4A] overflow-hidden"
        aria-label="Contact page banner"
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 mb-4 text-white/55 text-[13px] font-medium banner-slide-left banner-delay-1"
          >
            <Link
              href="/"
              className="hover:text-white/90 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight size={14} className="flex-shrink-0" />
            <span className="text-white/80">Contact</span>
          </nav>

          <h1 className="text-white text-[40px] md:text-[48px] font-bold leading-tight max-w-xl banner-slide-left banner-delay-2">
            Get in Touch
          </h1>
          <div className="w-14 h-1 bg-[#C8922A] mt-4 mb-4 banner-slide-left banner-delay-3" />
          <p className="text-white/55 text-[16px] font-medium leading-relaxed max-w-lg banner-slide-left banner-delay-3">
            Have a requirement or drawing? Reach out and we will get back to you
            promptly.
          </p>
        </div>
      </section>

      {/* ── 2. CONTACT DETAILS + FORM ────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-label="Contact details and enquiry form">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_58%] gap-12 items-start">

            {/* Left — Contact Details */}
            <div>
              <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
                Contact Details
              </p>
              <div className="w-10 h-0.5 bg-[#C8922A] mb-6" />
              <h2 className="text-[#2A2A2A] text-2xl md:text-3xl font-bold mb-8 leading-snug">
                Orient Rubber Products
              </h2>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:info@orientrubber.in"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(28,43,74,0.07)" }}
                  >
                    <Mail size={18} className="text-[#1C2B4A]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-[11px] font-semibold uppercase tracking-[0.12em] mb-0.5">
                      Email
                    </p>
                    <span className="text-[#2A2A2A] font-semibold text-[15px] group-hover:text-[#2E6EBF] transition-colors duration-200">
                      info@orientrubber.in
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919840568327"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(28,43,74,0.07)" }}
                  >
                    <Phone size={18} className="text-[#1C2B4A]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-[11px] font-semibold uppercase tracking-[0.12em] mb-0.5">
                      Phone
                    </p>
                    <span className="text-[#2A2A2A] font-semibold text-[15px] group-hover:text-[#2E6EBF] transition-colors duration-200">
                      +91 98405 68327
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919840042122"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(28,43,74,0.07)" }}
                  >
                    <Phone size={18} className="text-[#1C2B4A]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-[11px] font-semibold uppercase tracking-[0.12em] mb-0.5">
                      Phone
                    </p>
                    <span className="text-[#2A2A2A] font-semibold text-[15px] group-hover:text-[#2E6EBF] transition-colors duration-200">
                      +91 98400 42122
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(28,43,74,0.07)" }}
                  >
                    <MapPin size={18} className="text-[#1C2B4A]" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-[11px] font-semibold uppercase tracking-[0.12em] mb-0.5">
                      Address
                    </p>
                    <address className="not-italic text-[#2A2A2A] font-medium text-[15px] leading-relaxed">
                      Plot No. 39, SIDCO Industrial Estate (Phase II),
                      <br />
                      Thirumudivakkam, Chennai – 600 132,
                      <br />
                      Tamil Nadu, India.
                    </address>
                  </div>
                </div>
              </div>

              {/* Local SEO note */}
              <p className="text-[#6B7280] text-sm font-medium leading-relaxed mt-8 pt-6 border-t border-[#E5E7EB]">
                We are located in Thirumudivakkam, Chennai, and supply rubber
                components to clients across Tamil Nadu and India.
              </p>
            </div>

            {/* Right — Enquiry Form */}
            <div className="bg-[#F2F4F7] rounded-lg p-8">
              <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
                Send an Enquiry
              </p>
              <div className="w-10 h-0.5 bg-[#C8922A] mb-6" />
              <h2 className="text-[#2A2A2A] text-xl font-bold mb-6">
                Share Your Requirement
              </h2>

              {/* Form — wire up to your backend / Formspree when ready */}
              <form className="space-y-4" action="mailto:info@orientrubber.in" method="POST" encType="text/plain">
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                    >
                      Name <span className="text-[#C8922A]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                    >
                      Phone Number <span className="text-[#C8922A]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                    >
                      Email <span className="text-[#C8922A]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Product / Requirement */}
                <div>
                  <label
                    htmlFor="product"
                    className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                  >
                    Product / Requirement
                  </label>
                  <input
                    id="product"
                    name="product"
                    type="text"
                    placeholder="e.g. O-rings, gaskets, custom seal"
                    className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200"
                  />
                </div>

                {/* Rubber Compound Preference */}
                <div>
                  <label
                    htmlFor="compound"
                    className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                  >
                    Rubber Compound Preference
                  </label>
                  <select
                    id="compound"
                    name="compound"
                    className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select compound</option>
                    <option value="Silicone">Silicone</option>
                    <option value="Carbon">Carbon (Carbon Black Compounds)</option>
                    <option value="EPDM">EPDM</option>
                    <option value="Nitrile">Nitrile (NBR)</option>
                    <option value="Natural Rubber">Natural Rubber (NR)</option>
                    <option value="Not Sure">Not Sure</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#2A2A2A] text-[13px] font-semibold mb-1.5"
                  >
                    Message / Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your requirement, quantities, or attach drawing details..."
                    className="w-full bg-white border border-[#E5E7EB] rounded-md px-4 py-2.5 text-[#2A2A2A] text-sm font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2E6EBF] focus:ring-1 focus:ring-[#2E6EBF] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#C8922A] hover:bg-[#A97A22] text-[#1C2B4A] font-bold text-sm py-3.5 rounded-[6px] transition-colors duration-200 mt-2"
                >
                  Send Enquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. GOOGLE MAPS ───────────────────────────────────────────────── */}
      <section className="bg-[#F2F4F7]" aria-label="Our location on Google Maps">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="text-center mb-8">
            <p className="text-[#2E6EBF] font-semibold text-[13px] tracking-[0.18em] uppercase mb-3">
              Our Location
            </p>
            <h2 className="text-[#2A2A2A] text-2xl font-bold mb-2">
              SIDCO Industrial Estate, Thirumudivakkam
            </h2>
            <div className="w-16 h-1 bg-[#C8922A] mx-auto" />
          </div>

          <div className="rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(28,43,74,0.10)]">
            <iframe
              title="Orient Rubber Products location on Google Maps"
              src="https://maps.google.com/maps?q=SIDCO+Industrial+Estate+Phase+2+Thirumudivakkam+Chennai+600132&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
