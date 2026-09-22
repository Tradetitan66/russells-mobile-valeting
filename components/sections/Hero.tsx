"use client";

import Image from "next/image";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="BMW X6 M Competition after Russell's mobile valet"
        fill
        priority
        className="object-cover object-[center_65%] scale-110 -translate-y-[4%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"
        aria-hidden
      />
      <div className="absolute inset-0 bg-background/20" aria-hidden />

      <motion.div
        className="relative container-site w-full pb-16 pt-32 md:pb-24 md:pt-40"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" as const }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="eyebrow mb-6 text-foreground/80">
          Mobile Valeting &amp; Detailing
          <span className="mx-3 text-accent/60">·</span>
          Livingston · West Lothian · Edinburgh
        </p>

        <h1 className="max-w-3xl text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
          Your car.
          <br />
          <span className="font-[family-name:var(--font-instrument)] italic font-normal text-accent">
            Properly cared for.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg text-muted leading-relaxed">
          Premium mobile valeting and detailing brought directly to your home
          or workplace across Livingston, West Lothian and Edinburgh.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg" showArrow>
            Get a Quote
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            View Services
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`tel:${business.phoneTel}`}
            className="text-sm tracking-wide text-foreground hover:text-accent transition-colors"
          >
            Call / WhatsApp{" "}
            <span className="text-muted">{business.phoneDisplay}</span>
          </a>
          <WhatsAppButton className="text-sm" label="Message on WhatsApp" />
        </div>

        <p className="mt-8 eyebrow text-muted/80">
          Fully Mobile · Fully Insured · Professional Car Care
        </p>
      </motion.div>
    </section>
  );
}
