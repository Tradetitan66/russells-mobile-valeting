import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Maintenance valets, full valets, interior deep cleans, detailing and ceramic protection — mobile across Livingston, West Lothian and Edinburgh.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
            Car care built around your vehicle.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            From regular maintenance valets to deeper detailing and ceramic
            protection — brought to your home or workplace.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site space-y-24 md:space-y-32">
          {services.map((service, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <Reveal key={service.id}>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
                  <div
                    className={`lg:col-span-5 space-y-4 ${imageFirst ? "lg:order-2" : ""}`}
                  >
                    <span className="eyebrow text-accent">{service.number}</span>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed">
                      {service.detail ?? service.description}
                    </p>
                    <Button href="/contact" showArrow className="mt-4">
                      Request a Quote
                    </Button>
                  </div>
                  <div
                    className={`lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-background-secondary ${imageFirst ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
