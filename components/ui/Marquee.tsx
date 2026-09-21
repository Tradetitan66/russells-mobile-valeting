"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border py-5",
        className,
      )}
      aria-label="Service benefits"
    >
      <ul className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center list-none m-0 p-0">
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 whitespace-nowrap"
            aria-hidden={i >= items.length}
          >
            <span className="eyebrow text-muted">{item}</span>
            <span
              className="size-1 shrink-0 rounded-full bg-accent/60"
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
