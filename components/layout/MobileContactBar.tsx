"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import {
  business,
  getDefaultWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/business";
import { cn } from "@/lib/utils";

export function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md md:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <nav
        className="grid grid-cols-3 divide-x divide-border"
        aria-label="Quick contact"
      >
        <a
          href={`tel:${business.phoneTel}`}
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.14em] text-foreground"
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <a
          href={getWhatsAppUrl(getDefaultWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.14em] text-foreground"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] uppercase tracking-[0.14em] text-foreground"
        >
          <FileText className="size-4" aria-hidden />
          Get Quote
        </Link>
      </nav>
    </div>
  );
}
