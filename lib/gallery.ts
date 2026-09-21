/**
 * Gallery images — Russell's real work photography.
 * Labels use vehicle type + service style only. No customer names.
 */
export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  vehicle: string;
  service: string;
  location?: string;
  aspect: "landscape" | "portrait" | "square";
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g50",
    src: "/images/gallery/work-50.jpg",
    alt: "BMW X6 M Competition after professional mobile valet",
    vehicle: "BMW X6 M",
    service: "Premium Valet",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g49",
    src: "/images/gallery/work-49.jpg",
    alt: "Black Porsche Macan with mirror finish on a residential driveway",
    vehicle: "Porsche Macan",
    service: "Exterior Detail",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g54",
    src: "/images/gallery/work-54.jpg",
    alt: "BMW X6 M Competition interior after deep clean",
    vehicle: "BMW X6 M",
    service: "Interior Detail",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g23",
    src: "/images/gallery/work-23.jpg",
    alt: "Water beading on protected black paintwork",
    vehicle: "Range Rover",
    service: "Paint Protection",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g19",
    src: "/images/gallery/work-19.jpg",
    alt: "Black Audi Q8 after exterior detailing",
    vehicle: "Audi Q8",
    service: "Full Valet",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g31",
    src: "/images/gallery/work-31.jpg",
    alt: "Matte BMW Z4 detailed on a driveway with Russell's van",
    vehicle: "BMW Z4",
    service: "Detailing",
    aspect: "portrait",
    featured: true,
  },
  {
    id: "g43",
    src: "/images/gallery/work-43.jpg",
    alt: "White Jaguar F-Pace after mobile valeting",
    vehicle: "Jaguar F-Pace",
    service: "Maintenance Valet",
    aspect: "portrait",
  },
  {
    id: "g14",
    src: "/images/gallery/work-14.jpg",
    alt: "Black Mercedes-Benz A-Class after professional valet",
    vehicle: "Mercedes-Benz A-Class",
    service: "Premium Valet",
    aspect: "portrait",
  },
  {
    id: "g15",
    src: "/images/gallery/work-15.jpg",
    alt: "Volkswagen Golf GTE with high-gloss finish",
    vehicle: "Volkswagen Golf GTE",
    service: "Full Valet",
    aspect: "portrait",
  },
  {
    id: "g06",
    src: "/images/gallery/work-06.jpg",
    alt: "Black Volkswagen Polo GTI after detailing",
    vehicle: "Volkswagen Polo GTI",
    service: "Exterior Detail",
    aspect: "portrait",
  },
  {
    id: "g51",
    src: "/images/gallery/work-51.jpg",
    alt: "Blue Ford Focus RS after mobile detailing",
    vehicle: "Ford Focus RS",
    service: "Detailing",
    aspect: "portrait",
  },
  {
    id: "g46",
    src: "/images/gallery/work-46.jpg",
    alt: "Black Mini Countryman after premium valet",
    vehicle: "Mini Countryman",
    service: "Premium Valet",
    aspect: "portrait",
  },
  {
    id: "g52",
    src: "/images/gallery/work-52.jpg",
    alt: "British Racing Green Mini Cooper after detailing",
    vehicle: "Mini Cooper",
    service: "Full Valet",
    aspect: "portrait",
  },
  {
    id: "g55",
    src: "/images/gallery/work-55.jpg",
    alt: "Grey BMW X5 after professional mobile valet",
    vehicle: "BMW X5",
    service: "Premium Valet",
    aspect: "portrait",
  },
  {
    id: "g53",
    src: "/images/gallery/work-53.jpg",
    alt: "BMW X6 M Competition exterior finish",
    vehicle: "BMW X6 M",
    service: "Exterior Detail",
    aspect: "portrait",
  },
  {
    id: "g17",
    src: "/images/gallery/work-17.jpg",
    alt: "Snow foam pre-wash during a mobile valet",
    vehicle: "Mobile Service",
    service: "Snow Foam Pre-Wash",
    aspect: "portrait",
  },
  // Remaining portfolio images — labels kept generic where vehicle not confirmed
  ...Array.from({ length: 56 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    const known = new Set([
      "06",
      "14",
      "15",
      "17",
      "19",
      "23",
      "31",
      "43",
      "46",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
    ]);
    if (known.has(n)) return null;
    return {
      id: `g${n}`,
      src: `/images/gallery/work-${n}.jpg`,
      alt: `Russell's Mobile Valeting — recent work ${n}`,
      vehicle: "Recent Work",
      service: "Mobile Valet",
      aspect: "portrait" as const,
    };
  }).filter(Boolean) as GalleryItem[],
];

/** Featured subset for the home page grid */
export const featuredGallery = galleryItems.filter((g) => g.featured);

export type BeforeAfterPair = {
  id: string;
  before: string;
  after: string;
  caption: string;
  location: string;
  note?: string;
};

/**
 * Comparison pairs using Russell's photography.
 * Not claimed as identical vehicle before/after frames —
 * used to contrast process / condition with finished results.
 */
export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "ba1",
    before: "/images/before-after/01-before.jpg",
    after: "/images/before-after/01-after.jpg",
    caption: "Snow Foam → Finished Detail",
    location: "West Lothian",
    note: "Process and finished result from Russell's mobile work",
  },
  {
    id: "ba2",
    before: "/images/before-after/02-before.jpg",
    after: "/images/before-after/02-after.jpg",
    caption: "Premium Exterior Finish",
    location: "Livingston",
  },
  {
    id: "ba3",
    before: "/images/before-after/03-before.jpg",
    after: "/images/before-after/03-after.jpg",
    caption: "Luxury SUV Detail",
    location: "Edinburgh",
  },
];
