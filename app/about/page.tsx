import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Russell's Mobile Valeting — professional mobile car care based in Livingston, serving West Lothian, Edinburgh and central Scotland.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-6 space-y-6">
            <p className="eyebrow">About</p>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
              Professional car care,{" "}
              <span className="font-[family-name:var(--font-instrument)] italic font-normal text-accent">
                brought to you.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-muted text-lg leading-relaxed">
              {business.name} is a mobile valeting and detailing service based
              in {business.location}. The focus is straightforward: careful
              work on the vehicles people care about — without asking them to
              drive across town and wait.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site">
          <Reveal className="relative aspect-[21/9] overflow-hidden bg-background-secondary mb-20">
            <Image
              src="/images/intro.jpg"
              alt="Porsche Macan after mobile detailing"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </Reveal>

          <div className="grid gap-16 md:grid-cols-2 max-w-4xl">
            <Reveal>
              <h2 className="text-2xl font-medium tracking-tight">
                Built around convenience
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Appointments can be arranged at home or at work across
                Livingston, West Lothian, Edinburgh and surrounding parts of
                central Scotland. The aim is professional results with minimal
                disruption to your day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-medium tracking-tight">
                Suited to premium vehicles
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                From everyday maintenance valets to deeper detailing and ceramic
                protection options — services are recommended around your
                vehicle, not a one-size-fits-all package.
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <Button href="/contact" showArrow>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
