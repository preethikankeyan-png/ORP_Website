// Self-contained compact section — sits between Why Choose Us and Industries.

const customers = [
  "Butterfly",
  "Stanson AMBG",
  "Sri Ganeshraam Surgicals",
  "Prime Progression",
  "Castle Homes",
  "Taylor's",
  "Atlas Metal Processors",
  "Visteon Corporation",
];

const doubled = [...customers, ...customers];

export default function CustomerStrip() {
  return (
    <section className="bg-[#F2F4F7] py-8 overflow-hidden" aria-label="Our customers">
      {/* Divider above label */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <div className="h-px bg-[#E5E7EB]" />
      </div>
      {/* Label */}
      <p className="text-center text-[13px] font-semibold text-[#2E6EBF] uppercase tracking-[0.18em] mb-5">
        Trusted By
      </p>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Left fade — matches #F2F4F7 */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F2F4F7] to-transparent z-10 pointer-events-none" />
        {/* Right fade — matches #F2F4F7 */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F2F4F7] to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center w-max"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {doubled.map((name, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span className="text-[#1C2B4A] font-semibold text-[17px] tracking-wide whitespace-nowrap px-7 cursor-default">
                {name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8922A]/55 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
