"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [active, setActive] = useState(services[0]?.id ?? "");

  const activeService =
    services.find((s) => s.id === active) ?? services[0];

  return (
    <section className="py-24 md:py-32 bg-background-secondary" id="services">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-6">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05]">
                Car care built around your vehicle.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                From regular maintenance valets to deeper detailing and ceramic
                protection.
              </p>
              <div className="mt-8">
                <Button href="/contact" showArrow>
                  Discuss Your Vehicle
                </Button>
              </div>
            </Reveal>

            {activeService && (
              <div className="hidden lg:block relative aspect-[4/5] mt-10 overflow-hidden">
                <Image
                  key={activeService.id}
                  src={activeService.image}
                  alt={`${activeService.title}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="33vw"
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-border">
              {services.map((service, i) => (
                <Reveal key={service.id} delay={i * 0.05} as="li">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(service.id)}
                    onFocus={() => setActive(service.id)}
                    onClick={() => setActive(service.id)}
                    className={cn(
                      "group flex w-full gap-6 py-8 text-left transition-colors",
                      active === service.id
                        ? "text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    <span className="eyebrow pt-1 shrink-0 w-8 text-accent">
                      {service.number}
                    </span>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted leading-relaxed max-w-xl group-hover:text-muted">
                        {service.description}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
