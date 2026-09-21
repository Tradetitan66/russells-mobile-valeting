import type { Metadata } from "next";
import { business, getWhatsAppUrl, getDefaultWhatsAppMessage } from "@/lib/business";
import QuoteForm from "@/components/sections/QuoteForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a mobile car valeting quote in Livingston, West Lothian or Edinburgh. Call or WhatsApp Russell on 07508 717655.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
                Request a quote.
              </h1>
              <p className="mt-6 text-muted leading-relaxed">
                Tell us what you drive and what you&apos;d like done. Prefer to
                talk now? Call or WhatsApp Russell directly.
              </p>
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <a
                href={`tel:${business.phoneTel}`}
                className="block text-lg tracking-tight hover:text-accent transition-colors"
              >
                {business.phoneDisplay}
              </a>
              <Button
                href={getWhatsAppUrl(getDefaultWhatsAppMessage())}
                variant="secondary"
                external
                showArrow
              >
                WhatsApp Russell
              </Button>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted hover:text-foreground transition-colors"
              >
                Instagram {business.instagram}
              </a>
              <p className="text-sm text-muted pt-4">
                Based in {business.location}. Serving West Lothian, Edinburgh
                and central Scotland.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <QuoteForm prefillData={{ vehicle: "", location: "" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
