// Brand colors
export const colors = {
  navy: "#1C2B4A",
  charcoal: "#2A2A2A",
  steel: "#2E6EBF",
  gold: "#C8922A",
  goldDark: "#A97A22",
  white: "#FFFFFF",
  lightGrey: "#F2F4F7",
  midGrey: "#6B7280",
  borderGrey: "#E5E7EB",
  footer: "#0F1B2E",
} as const;

// Navigation links
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
] as const;

// Company details
export const company = {
  name: "Orient Rubber Products",
  tagline: "Rubber Excellence Engineered for You",
  established: "1998",
  email: "info@orientrubber.in",
  phone1: "+91 98405 68327",
  phone2: "+91 98400 42122",
  address: {
    line1: "Plot No. 39, SIDCO Industrial Estate (Phase II),",
    line2: "Thirumudivakkam, Chennai – 600 132,",
    line3: "Tamil Nadu, India.",
  },
  certifications: ["ISO 9001:2015", "BIS Certified"],
} as const;

// Industries served
export const industries = [
  { label: "Automotive", icon: "Car" },
  { label: "Kitchen Appliances & Home Products", icon: "UtensilsCrossed" },
  { label: "Medical Equipment", icon: "HeartPulse" },
  { label: "Industrial & Custom Applications", icon: "Wrench" },
  { label: "Electrical & Electronics", icon: "Zap" },
  { label: "Pumps & Valves", icon: "Droplets" },
] as const;

// Customers
export const customers = [
  "Butterfly",
  "Stanson AMBG",
  "Sri Ganeshraam Surgicals",
  "Prime Progression",
  "Castle Homes",
  "Taylors",
] as const;

// Products
export const products = [
  {
    name: "O-Rings",
    description:
      "Custom molded rubber O-rings designed for sealing applications in automotive, hydraulic, and industrial systems.",
    image: "/images/product-orings.jpg",
    imageAlt: "O-ring rubber component manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Grommets",
    description:
      "Rubber grommets used for cable protection, vibration isolation, and sealing across electrical and mechanical applications.",
    image: "/images/product-grommets.jpg",
    imageAlt: "Rubber grommets manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Gaskets — Pressure Cooker",
    description:
      "Food-grade rubber gaskets manufactured for high-pressure cooking applications with consistent sealing performance. BIS Certified.",
    image: "/images/product-gaskets-cooker.jpg",
    imageAlt: "BIS certified pressure cooker gaskets by Orient Rubber Products Chennai",
    badge: "BIS Certified",
  },
  {
    name: "Gaskets — Automotive",
    description:
      "Automotive rubber gaskets designed for durability and sealing efficiency under varying temperature and pressure conditions.",
    image: "/images/product-gaskets-auto.jpg",
    imageAlt: "Automotive rubber gaskets manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Seals",
    description:
      "Custom rubber seals manufactured for fluid containment and environmental protection in industrial applications.",
    image: "/images/product-seals.jpg",
    imageAlt: "Custom rubber seals manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Gloves",
    description:
      "Durable rubber gloves designed for flexibility and application-specific usage.",
    image: "/images/product-gloves.jpg",
    imageAlt: "Rubber gloves manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Bellows",
    description:
      "Flexible rubber bellows used to absorb movement and protect components from dust and environmental exposure.",
    image: "/images/product-bellows.jpg",
    imageAlt: "Rubber bellows manufactured by Orient Rubber Products Chennai",
  },
  {
    name: "Saddle Rings",
    description:
      "Precision molded rubber components used in industrial and sealing applications.",
    image: "/images/product-saddle-rings.jpg",
    imageAlt: "Saddle rings manufactured by Orient Rubber Products Chennai",
  },
] as const;

// Materials
export const materials = [
  { name: "Silicone", applications: "High-temperature, food-grade, medical components" },
  { name: "Carbon Black Compounds", applications: "Cooker gaskets, industrial components" },
  { name: "EPDM", applications: "Weather sealing, heat resistance, outdoor applications" },
  { name: "Nitrile (NBR)", applications: "Oil-resistant seals and gaskets, automotive" },
  { name: "Natural Rubber (NR)", applications: "General industrial components, vibration isolators" },
] as const;

// Manufacturing capabilities
export const capabilities = [
  {
    title: "Raw Material Weighing",
    subtitle: "Precision Batch Preparation",
    description:
      "Each production batch begins with accurate weighing of raw materials to ensure compound consistency. Precise batch preparation controls Shore A hardness and other material properties from the outset.",
    image: "/images/cap-weighing.jpg",
  },
  {
    title: "Kneader",
    subtitle: "Carbon Mixing",
    description:
      "Carbon black compounds are processed through our kneader to achieve uniform dispersion. Controlled mixing parameters ensure consistent compound quality across production batches.",
    image: "/images/cap-kneader.jpg",
  },
  {
    title: "Mixing Mill",
    subtitle: "Compound Refinement",
    description:
      "The mixing mill refines the rubber compound, incorporating cure-time parameters and additives to meet application-specific requirements. Final compound sheets are prepared for molding.",
    image: "/images/cap-mixing-mill.jpg",
  },
  {
    title: "Compression Molding",
    subtitle: "10 Automated Presses (200–450 Tons)",
    description:
      "Our facility operates ten automated compression molding presses ranging from 200 to 450 tons. This capacity supports consistent output across development and production volumes.",
    image: "/images/cap-molding.jpg",
  },
  {
    title: "Post-Curing Ovens",
    subtitle: "Silicone Finishing",
    description:
      "Silicone components undergo post-curing in dedicated ovens to complete cross-linking, improve compression set resistance, and ensure dimensional stability in service.",
    image: "/images/cap-post-curing.jpg",
  },
  {
    title: "In-Process Inspection",
    subtitle: "Shop Floor QC",
    description:
      "Inspection is carried out at key stages on the shop floor. Operators check dimensions, surface condition, and visual quality against specifications before components proceed to the next stage.",
    image: "/images/cap-inspection.jpg",
  },
  {
    title: "Trimming & Final Inspection",
    subtitle: "Pre-Dispatch Checks",
    description:
      "Finished components are trimmed to remove flash and inspected for dimensional accuracy, surface integrity, and conformance to customer drawings before dispatch.",
    image: "/images/cap-trimming.jpg",
  },
] as const;

// In-house testing
export const testingCapabilities = [
  {
    title: "Hardness Testing",
    subtitle: "Shore A consistency",
    description:
      "Shore A durometer measurements are taken on each batch to verify rubber hardness meets specification. Consistent hardness is a key indicator of compound uniformity.",
  },
  {
    title: "Tensile Strength & Elongation",
    subtitle: "Mechanical performance",
    description:
      "Tensile and elongation at break testing evaluates the mechanical integrity of the rubber compound, ensuring components will perform reliably under load.",
  },
  {
    title: "Compression Strength Testing",
    subtitle: "Load-bearing capability",
    description:
      "Compression testing measures load-bearing characteristics of rubber components, particularly relevant for gaskets and seals operating under sustained pressure.",
  },
  {
    title: "Heat Aging Test",
    subtitle: "High-temperature performance",
    description:
      "Components are subjected to elevated temperatures over defined periods to assess thermal stability and predict service life in high-temperature applications.",
  },
  {
    title: "Oil Aging Test",
    subtitle: "Oil resistance",
    description:
      "Immersion in oil at controlled temperatures evaluates swell, hardness change, and tensile retention — critical for components used in automotive and hydraulic environments.",
  },
  {
    title: "Volume Swell Testing",
    subtitle: "Fluid resistance",
    description:
      "Volume swell measurements assess dimensional changes when rubber is exposed to specific fluids, validating compound selection for the intended service environment.",
  },
  {
    title: "Ash Content Testing",
    subtitle: "Material quality",
    description:
      "Ash content analysis verifies filler loading within compound specifications, providing a check on raw material quality and batch consistency.",
  },
  {
    title: "Specific Gravity Testing",
    subtitle: "Batch consistency",
    description:
      "Specific gravity measurement is a reliable batch-to-batch consistency check, confirming compound formulation is within tolerance before production proceeds.",
  },
] as const;
