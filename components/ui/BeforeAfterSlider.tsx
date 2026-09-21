"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  location?: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before — placeholder photography",
  afterAlt = "After — placeholder photography",
  caption,
  location,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(98, Math.max(2, x)));
  }, []);

  const onPointerDown = (e: ReactPointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPosition((p) => Math.max(2, p - 5));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setPosition((p) => Math.min(98, p + 5));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={cn("space-y-4", className)}>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-background-secondary select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            draggable={false}
          />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-foreground"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/30 bg-background/90 backdrop-blur-sm">
            <span className="text-[10px] tracking-widest text-foreground">
              ↔
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute left-4 top-4 eyebrow text-foreground/90 bg-background/50 px-2 py-1 backdrop-blur-sm">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 eyebrow text-foreground/90 bg-background/50 px-2 py-1 backdrop-blur-sm">
          After
        </div>

        <input
          type="range"
          min={2}
          max={98}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Compare before and after images"
          className="absolute bottom-4 left-1/2 z-20 w-[60%] -translate-x-1/2 accent-accent opacity-80"
        />
      </div>
      {(caption || location) && (
        <p className="text-sm text-muted">
          {caption}
          {caption && location ? " · " : ""}
          {location}
        </p>
      )}
    </div>
  );
}
