"use client";

import { useState } from "react";
import { beforeAfterPairs } from "@/lib/gallery";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function BeforeAfterSection() {
  const [index, setIndex] = useState(0);
  const pair = beforeAfterPairs[index];

  if (!pair) return null;

  return (
    <section className="py-24 md:py-32">
      <div className="container-site">
        <Reveal className="max-w-2xl mb-12 md:mb-16">
          <p className="eyebrow">Results</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">
            See the difference.
          </h2>
          <p className="mt-4 text-muted text-lg">
            Real vehicles. Real results.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <BeforeAfterSlider
            beforeSrc={pair.before}
            afterSrc={pair.after}
            caption={pair.caption}
            location={pair.location}
          />
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-3"
          role="tablist"
          aria-label="Before and after examples"
        >
          {beforeAfterPairs.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "min-h-11 px-4 text-xs uppercase tracking-[0.14em] border transition-colors",
                i === index
                  ? "border-accent text-accent"
                  : "border-border text-muted hover:text-foreground hover:border-border-strong",
              )}
            >
              {item.caption}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
