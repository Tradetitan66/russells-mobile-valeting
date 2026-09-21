export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  /** Longer copy for /services page */
  detail?: string;
};

export const services: Service[] = [
  {
    id: "maintenance-valet",
    number: "01",
    title: "Maintenance Valet",
    description:
      "Routine professional cleaning to keep your vehicle looking its best throughout the year.",
    image: "/images/gallery/work-43.jpg",
    detail:
      "Ideal for regular upkeep between deeper cleans. Exterior wash, interior tidy and a finish suited to everyday driving.",
  },
  {
    id: "full-valet",
    number: "02",
    title: "Full Valet",
    description:
      "A deeper interior and exterior clean designed to restore the overall condition of the vehicle.",
    image: "/images/gallery/work-19.jpg",
    detail:
      "A more thorough service for vehicles that need attention inside and out — restoring presentation without unnecessary upselling.",
  },
  {
    id: "interior-deep-clean",
    number: "03",
    title: "Interior Deep Clean",
    description:
      "Detailed interior cleaning targeting upholstery, carpets, plastics and high-contact areas.",
    image: "/images/services/interior.jpg",
    detail:
      "Focused cabin care for carpets, seats, plastics and touch points — suited to family cars, pets, or neglected interiors.",
  },
  {
    id: "detailing",
    number: "04",
    title: "Detailing",
    description:
      "More intensive vehicle preparation for owners who want an elevated finish and greater attention to detail.",
    image: "/images/gallery/work-49.jpg",
    detail:
      "Elevated preparation and finishing for drivers who want a sharper result than a standard valet.",
  },
  {
    id: "ceramic-protection",
    number: "05",
    title: "Ceramic Protection",
    description:
      "Longer-lasting paint protection and easier maintenance with professional ceramic coating options.",
    image: "/images/services/ceramic.jpg",
    detail:
      "For customers looking beyond a traditional valet. Ceramic options can help maintain gloss and make routine cleaning easier. Specific products and expected durability discussed on enquiry.",
  },
  {
    id: "maintenance-plans",
    number: "06",
    title: "Maintenance Plans",
    description:
      "Regular scheduled vehicle care without needing to arrange a new valet every time.",
    image: "/images/gallery/work-50.jpg",
    detail:
      "Scheduled visits arranged around your diary — useful for company cars, premium daily drivers, or anyone who prefers consistent care.",
  },
];

export const vehicleSizes = [
  "Small",
  "Medium",
  "Large",
  "SUV / 4x4",
  "Van",
] as const;

export const serviceOptions = [
  "Maintenance Valet",
  "Full Valet",
  "Interior Deep Clean",
  "Detailing",
  "Ceramic Coating",
  "Not Sure",
] as const;
