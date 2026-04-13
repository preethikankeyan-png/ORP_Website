"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-[#1C2B4A] shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo — larger size, no tagline */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0">
            <Image
              src="/logos/logo_white.png"
              alt="Orient Rubber Products"
              width={56}
              height={56}
              className="h-14 w-auto"
              priority
            />
            <p className="text-white font-bold text-[12px] sm:text-[19px] tracking-[0.06em] uppercase leading-tight">
              Orient Rubber Products
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? "text-white border-b-2 border-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-[#C8922A] hover:bg-[#A97A22] text-[#1C2B4A] font-bold text-sm px-6 py-2.5 rounded-[6px] transition-colors duration-200"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white p-1 hover:text-white/80 transition-colors duration-200"
              aria-label="Open navigation menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-[#1C2B4A] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Image
                src="/logos/logo_white.png"
                alt="Orient Rubber Products"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8 gap-7 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="px-6 pb-8">
              <Link
                href="/contact"
                className="block w-full bg-[#C8922A] hover:bg-[#A97A22] text-[#1C2B4A] font-bold text-sm text-center py-3.5 rounded-[6px] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
