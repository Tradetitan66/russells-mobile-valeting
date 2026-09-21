/**
 * Reviews data structure — ready for real testimonials.
 * Do NOT populate with fabricated quotes.
 * When this array is empty, the Reviews section does not render.
 */
export type Review = {
  quote: string;
  name: string;
  location: string;
  source: "Google" | "Facebook" | "Other" | "";
};

export const reviews: Review[] = [];
