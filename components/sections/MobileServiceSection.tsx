import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  "Home appointments",
  "Workplace appointments",
  "Convenient scheduling",
  "Professional equipment",
  "Personal service",
] as const;

export function MobileServiceSection() {
  return (
    <section className="bg-light text-dark">
      <div className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="relative order-2 lg:order-1 aspect-[3/4]">
          <Image
            src="/images/why-mobile.jpg"
            alt="BMW Z4 detailed at a client's driveway"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16 xl:px-24 order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow text-dark/50">Why mobile</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05]">
              Your driveway becomes the{" "}
              <span className="font-[family-name:var(--font-instrument)] italic font-normal">
                detailing bay.
              </span>
            </h2>
            <div className="mt-6 space-y-2 text-dark/70 text-lg leading-relaxed">
              <p>No queues.</p>
              <p>No driving across town.</p>
              <p>No waiting around at a car wash.</p>
            </div>
            <p className="mt-6 text-dark/80 leading-relaxed max-w-md">
              Professional car care comes directly to you.
            </p>
            <ul className="mt-10 space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm tracking-wide"
                >
                  <span
                    className="size-1.5 rounded-full bg-dark/40"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
