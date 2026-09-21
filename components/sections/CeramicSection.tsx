import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CeramicSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <Image
        src="/images/services/ceramic.jpg"
        alt="Water beading on protected paintwork"
        fill
        className="object-contain"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-background/85"
        aria-hidden
      />

      <div className="relative container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow text-accent">Paint Protection</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]">
            Protection that lasts beyond the next wash.
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            For customers looking for more than a traditional valet, ceramic
            protection can help maintain gloss, improve water behaviour and
            make routine cleaning easier.
          </p>
          <div className="mt-10">
            <Button href="/contact" showArrow>
              Ask About Ceramic Coating
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
