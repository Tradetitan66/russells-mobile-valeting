import Image from "next/image";
import Link from "next/link";
import { featuredGallery, galleryItems } from "@/lib/gallery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type GalleryProps = {
  limit?: number;
  showCta?: boolean;
  featuredOnly?: boolean;
};

export function Gallery({
  limit,
  showCta = true,
  featuredOnly = false,
}: GalleryProps) {
  const source = featuredOnly ? featuredGallery : galleryItems;
  const items = limit ? source.slice(0, limit) : source;

  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">
              Recent work.
            </h2>
          </div>
          {showCta && (
            <Button href="/gallery" variant="secondary" showArrow>
              View More Work
            </Button>
          )}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.05}
              className={cn(
                "group relative overflow-hidden bg-background-secondary",
                i === 0 && "col-span-2 md:col-span-8 aspect-[16/10]",
                i === 1 && "col-span-1 md:col-span-4 aspect-[3/4]",
                i === 2 && "col-span-1 md:col-span-4 aspect-[3/4]",
                i === 3 && "col-span-1 md:col-span-4 aspect-square",
                i === 4 && "col-span-1 md:col-span-4 md:aspect-[4/3]",
                i > 4 && "col-span-1 md:col-span-4 aspect-[4/3]",
              )}
            >
              <Link
                href="/gallery"
                className="absolute inset-0 block"
                aria-label={`${item.vehicle} — ${item.service}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  sizes="(max-width: 768px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-sm font-medium tracking-tight">
                    {item.vehicle}
                  </p>
                  <p className="text-xs text-muted mt-0.5">
                    {item.service}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
