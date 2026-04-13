"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Clock, Eye } from "lucide-react";

const cards = [
  {
    icon: CheckCircle,
    title: "Consistent Quality",
    description:
      "Controlled processes and inspections ensure reliable, defect-free rubber components across every production batch.",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description:
      "Automated compression molding and structured workflows support consistent delivery timelines for development and production volumes.",
  },
  {
    icon: Eye,
    title: "Transparent Service",
    description:
      "Clear communication from enquiry to dispatch, with full documentation and updates at every stage of your order.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map(({ icon: Icon, title, description }, i) => (
        <div
          key={title}
          className="bg-white rounded-lg shadow-[0_2px_16px_rgba(28,43,74,0.08)] border-t-[3px] border-t-[#C8922A] hover:shadow-[0_6px_28px_rgba(28,43,74,0.13)] transition-shadow duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
          }}
        >
          <div className="p-6">
            <div className="mb-4">
              <Icon size={30} className="text-[#1C2B4A]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#2A2A2A] font-semibold text-xl mb-2">
              {title}
            </h3>
            <p className="text-[#6B7280] leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
