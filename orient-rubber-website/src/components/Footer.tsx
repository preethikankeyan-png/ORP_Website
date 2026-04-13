import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2B4A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logos/logo_white.png"
                alt="Orient Rubber Products"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="leading-tight">
                <p className="text-white font-bold text-[13px] tracking-[0.08em] uppercase">
                  Orient Rubber Products
                </p>
                <p className="text-[#2E6EBF] text-[11px] font-medium tracking-wide mt-0.5">
                  Rubber Excellence Engineered for You
                </p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed font-medium max-w-xs">
              A trusted manufacturer of custom molded rubber components in
              Chennai, supplying industrial clients across India since 1998.
            </p>
            <div className="flex gap-2.5 mt-4 flex-wrap">
              <span className="text-[11px] font-semibold text-[#C8922A] border border-[#C8922A]/40 px-2.5 py-0.5 rounded-sm tracking-wide">
                ISO 9001:2015
              </span>
              <span className="text-[11px] font-semibold text-[#C8922A] border border-[#C8922A]/40 px-2.5 py-0.5 rounded-sm tracking-wide">
                BIS Certified
              </span>
            </div>
            <a
              href="https://in.linkedin.com/company/orient-rubber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/55 hover:text-[#C8922A] transition-colors duration-200 group"
              aria-label="Orient Rubber Products on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/40 group-hover:text-[#C8922A] transition-colors duration-200"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.12em] mb-3">
              Learn More
            </h3>
            <div className="w-10 h-0.5 bg-[#C8922A] mb-4" />
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/65 hover:text-[#C8922A] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.12em] mb-3">
              Contact
            </h3>
            <div className="w-10 h-0.5 bg-[#C8922A] mb-4" />
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@orientrubber.in"
                className="flex items-center gap-3 text-white/65 hover:text-[#C8922A] transition-colors duration-200 group"
              >
                <Mail
                  size={15}
                  className="text-[#C8922A]/70 flex-shrink-0 group-hover:text-[#C8922A] transition-colors duration-200"
                />
                <span className="text-sm font-medium">info@orientrubber.in</span>
              </a>
              <a
                href="tel:+919840568327"
                className="flex items-center gap-3 text-white/65 hover:text-[#C8922A] transition-colors duration-200 group"
              >
                <Phone
                  size={15}
                  className="text-[#C8922A]/70 flex-shrink-0 group-hover:text-[#C8922A] transition-colors duration-200"
                />
                <span className="text-sm font-medium">+91 98405 68327</span>
              </a>
              <a
                href="tel:+919840042122"
                className="flex items-center gap-3 text-white/65 hover:text-[#C8922A] transition-colors duration-200 group"
              >
                <Phone
                  size={15}
                  className="text-[#C8922A]/70 flex-shrink-0 group-hover:text-[#C8922A] transition-colors duration-200"
                />
                <span className="text-sm font-medium">+91 98400 42122</span>
              </a>
              <div className="flex items-start gap-3 text-white/55">
                <MapPin
                  size={15}
                  className="text-[#C8922A]/70 flex-shrink-0 mt-0.5"
                />
                <address className="not-italic text-sm font-medium leading-relaxed">
                  Plot No. 39, SIDCO Industrial Estate (Phase II),
                  <br />
                  Thirumudivakkam, Chennai – 600 132,
                  <br />
                  Tamil Nadu, India.
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-4 h-px bg-[#C8922A]/25" />

        {/* Copyright */}
        <p className="text-center text-[#6B7280] text-[13px] font-medium">
          © {new Date().getFullYear()} Orient Rubber Products. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
