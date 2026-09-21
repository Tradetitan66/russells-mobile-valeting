import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function EditorialIntro() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-end">
          <Reveal className="lg:col-span-5 space-y-6">
            <p className="eyebrow">The Difference</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]">
              More than a{" "}
              <span className="font-[family-name:var(--font-instrument)] italic font-normal text-accent">
                quick wash.
              </span>
            </h2>
            <p className="text-muted leading-relaxed text-base md:text-lg max-w-md">
              Russell&apos;s Mobile Valeting provides professional mobile car
              care for drivers who want their vehicle properly cleaned,
              maintained and protected — without giving up their day travelling
              to a valeting centre.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 lg:-mb-8">
            <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden bg-background-secondary">
              <Image
                src="/images/intro.jpg"
                alt={`Close-up of premium vehicle detail`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
