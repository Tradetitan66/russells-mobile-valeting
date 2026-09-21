import { business } from "./business";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://russellsmobilevaleting.co.uk",
  title: "Mobile Car Valeting Livingston | Russell's Mobile Valeting",
  description:
    "Professional mobile car valeting and detailing in Livingston, West Lothian and Edinburgh. Home and workplace appointments, maintenance valets, detailing and ceramic protection.",
  keywords: [
    "mobile car valeting Livingston",
    "mobile car valeting West Lothian",
    "car valeting Livingston",
    "mobile detailing Livingston",
    "car detailing West Lothian",
    "mobile car wash Livingston",
    "ceramic coating Livingston",
    "mobile car valeting Edinburgh",
  ],
  ogImage: "/images/hero.jpg",
} as const;

export function getLocalBusinessJsonLd() {
  const sameAs: string[] = [business.instagramUrl];
  if (business.facebookUrl) sameAs.push(business.facebookUrl);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    name: business.name,
    description: siteConfig.description,
    telephone: business.phoneTel,
    url: siteConfig.url,
    areaServed: business.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs,
    // Address, opening hours, aggregateRating omitted until supplied by client.
  };
}
