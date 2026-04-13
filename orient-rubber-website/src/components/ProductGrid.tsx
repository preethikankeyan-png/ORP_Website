"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

export type ProductImage = { src: string; alt: string };

export type Product = {
  name: string;
  description: string;
  images: ProductImage[];
  badge?: string | null;
};

/* ─── ProductCard ───────────────────────────────────────────────────────── */

function ProductCard({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: (product: Product, idx: number) => void;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const hasSlideshow = product.images.length > 1;

  // Auto-rotate slideshow every 2.5 s
  useEffect(() => {
    if (!hasSlideshow) return;
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % product.images.length);
    }, 2500);
    return () => clearInterval(id);
  }, [hasSlideshow, product.images.length]);

  return (
    <div className="bg-white rounded-lg border-t-[3px] border-t-[#C8922A] shadow-[0_2px_16px_rgba(28,43,74,0.07)] hover:shadow-[0_6px_28px_rgba(28,43,74,0.13)] transition-shadow duration-300 overflow-hidden">
      {/* Image area */}
      <div
        className="relative aspect-[5/4] overflow-hidden cursor-zoom-in"
        onClick={() => onImageClick(product, activeIdx)}
        role="button"
        tabIndex={0}
        aria-label={`View ${product.name} image`}
        onKeyDown={(e) => e.key === "Enter" && onImageClick(product, activeIdx)}
      >
        {product.images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-700 ${
              i === activeIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 right-3 text-[11px] font-semibold text-[#C8922A] bg-white border border-[#C8922A]/40 px-2.5 py-1 rounded-sm tracking-wide z-10">
            {product.badge}
          </span>
        )}

        {/* Slideshow dots */}
        {hasSlideshow && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-4 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-[#2A2A2A] font-semibold text-lg mb-2">
          {product.name}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed font-medium">
          {product.description}
        </p>
      </div>
    </div>
  );
}

/* ─── ProductModal ──────────────────────────────────────────────────────── */

function ProductModal({
  product,
  imageIdx,
  onClose,
  onNavigate,
}: {
  product: Product;
  imageIdx: number;
  onClose: () => void;
  onNavigate: (idx: number) => void;
}) {
  const hasMultiple = product.images.length > 1;
  const current = product.images[imageIdx];

  const prev = useCallback(
    () => onNavigate((imageIdx - 1 + product.images.length) % product.images.length),
    [imageIdx, product.images.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((imageIdx + 1) % product.images.length),
    [imageIdx, product.images.length, onNavigate]
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMultiple) next();
      if (e.key === "ArrowLeft" && hasMultiple) prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, next, prev, hasMultiple]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative aspect-[5/4] w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />

          {/* Prev / Next arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 text-white transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === imageIdx
                        ? "w-4 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product name */}
        <div className="px-6 py-4 flex items-center justify-between">
          <p className="text-[#2A2A2A] font-semibold text-[15px]">
            {product.name}
          </p>
          {hasMultiple && (
            <p className="text-[#6B7280] text-[13px] font-medium">
              {imageIdx + 1} / {product.images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── ProductGrid (main export) ─────────────────────────────────────────── */

export default function ProductGrid({ products }: { products: Product[] }) {
  const [modal, setModal] = useState<{
    product: Product;
    imageIdx: number;
  } | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  const openModal = useCallback((product: Product, idx: number) => {
    setModal({ product, imageIdx: idx });
  }, []);

  const closeModal = useCallback(() => setModal(null), []);

  const navigateModal = useCallback((idx: number) => {
    setModal((prev) => (prev ? { ...prev, imageIdx: idx } : null));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onImageClick={openModal}
          />
        ))}
      </div>

      {modal && (
        <ProductModal
          product={modal.product}
          imageIdx={modal.imageIdx}
          onClose={closeModal}
          onNavigate={navigateModal}
        />
      )}
    </>
  );
}
