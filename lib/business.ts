export const business = {
  name: "Russell's Mobile Valeting",
  shortName: "Russell's",
  tagline: "Professional mobile car care",
  phoneDisplay: "07508 717655",
  phoneTel: "+447508717655",
  whatsapp: "+447508717655",
  whatsappDigits: "447508717655",
  email: null as string | null,
  location: "Livingston, West Lothian",
  region: "Scotland",
  instagram: "@russellsmobilevaleting",
  instagramUrl: "https://www.instagram.com/russellsmobilevaleting",
  facebookUrl: null as string | null,
  primaryAreas: [
    "Livingston",
    "Bathgate",
    "Broxburn",
    "Linlithgow",
    "West Lothian",
    "Edinburgh",
  ],
  areaServed: [
    "Livingston",
    "West Lothian",
    "Edinburgh",
    "Central Scotland",
  ],
  trustItems: [
    "Fully Mobile",
    "Fully Insured",
    "Home or Workplace",
    "Premium Car Care",
    "Livingston & Central Scotland",
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${business.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getDefaultWhatsAppMessage(
  vehicle?: string,
  location?: string,
) {
  const vehiclePart = vehicle?.trim() || "[vehicle]";
  const locationPart = location?.trim() || "[location]";
  return `Hi Russell, I found you through your website. I'd like a quote for mobile valeting for my ${vehiclePart} in ${locationPart}.`;
}

export function getTelHref() {
  return `tel:${business.phoneTel}`;
}
