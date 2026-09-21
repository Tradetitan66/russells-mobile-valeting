import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/lib/gallery";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Gallery of mobile car valeting and detailing work across Livingston, West Lothian and Edinburgh.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight">
            Our work.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            A selection of recent mobile valeting and detailing across
            Livingston, West Lothian and Edinburgh.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.04}
              className={cn(
                "group relative overflow-hidden bg-background-secondary aspect-[4/3]",
                i === 0 && "sm:col-span-2 sm:aspect-[16/9]",
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-medium tracking-tight">{item.vehicle}</p>
                <p className="text-sm text-muted mt-0.5">
                  {item.service}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
