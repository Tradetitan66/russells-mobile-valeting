"use client";

import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import {
  getDefaultWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import QuoteForm from "./QuoteForm";

export function QuoteCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuoteClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-background/80" aria-hidden />

      <div className="relative container-site text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
            Give your car the care it deserves.
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Tell us what you drive and what you&apos;d like done. Russell can
            recommend the right service for your vehicle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={handleQuoteClick} size="lg" showArrow>
              Get a Quote
            </Button>
            <Button
              href={getWhatsAppUrl(getDefaultWhatsAppMessage())}
              variant="secondary"
              size="lg"
              external
            >
              WhatsApp Russell
            </Button>
          </div>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-8 inline-block text-sm tracking-wide text-muted hover:text-accent transition-colors"
          >
            {business.phoneDisplay}
          </a>
        </Reveal>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-form-title"
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <QuoteForm
              onClose={() => setIsModalOpen(false)}
              prefillData={{
                vehicle: "[vehicle]",
                location: "[location]",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
