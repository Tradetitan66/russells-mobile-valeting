"use client";

import { MessageCircle } from "lucide-react";
import {
  business,
  getDefaultWhatsAppMessage,
  getWhatsAppUrl,
} from "@/lib/business";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  vehicle?: string;
  location?: string;
  variant?: "icon" | "text" | "fab";
};

export function WhatsAppButton({
  className,
  label = "WhatsApp",
  vehicle,
  location,
  variant = "text",
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(getDefaultWhatsAppMessage(vehicle, location));

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${business.name}`}
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:text-accent",
          className,
        )}
      >
        <MessageCircle className="size-5" />
      </a>
    );
  }

  if (variant === "fab") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${business.name}`}
        className={cn(
          "fixed bottom-24 right-4 z-40 flex size-12 items-center justify-center rounded-full border border-border-strong bg-background-secondary text-foreground shadow-lg transition-colors hover:border-accent hover:text-accent md:bottom-8 md:right-8",
          className,
        )}
      >
        <MessageCircle className="size-5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center gap-2 text-sm text-foreground transition-colors hover:text-accent",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden />
      <span>{label}</span>
    </a>
  );
}
