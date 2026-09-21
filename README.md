# Russell's Mobile Valeting

Premium mobile car valeting & detailing website for Livingston, West Lothian and Edinburgh.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

Business details, services, FAQs, gallery and reviews live in `/lib`:

- `lib/business.ts` — phone, WhatsApp, areas, Instagram
- `lib/services.ts` — service catalogue
- `lib/gallery.ts` — gallery + before/after (marked as placeholders)
- `lib/faqs.ts` — FAQ answers
- `lib/reviews.ts` — leave empty until real testimonials exist
- `lib/site.ts` — SEO metadata & JSON-LD

Replace images under `/public/images/` with Russell's photography when available.

## Quote form

`POST /api/quote` is a stub that validates and logs. Connect Formspree, Resend, Supabase or a custom API in `app/api/quote/route.ts`.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
