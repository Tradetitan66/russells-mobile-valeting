import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import {
  getDefaultWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

export function QuoteCTA() {
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
            <Button href="/contact#quote-form" size="lg" showArrow>
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
    </section>
  );
}
