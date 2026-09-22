"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MenuVertical } from "@/components/ui/MenuVertical";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change without setState-in-effect
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  const solid = scrolled || !isHome || open;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 md:h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-medium tracking-tight text-sm md:text-base text-foreground hover:text-accent transition-colors"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Russell's Mobile Valeting"
            width={36}
            height={36}
            className="size-8 md:size-9 shrink-0 rounded-full object-cover"
            priority
          />
          {business.name}
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <WhatsAppButton variant="icon" />
          <Button href="/contact" size="sm" showArrow>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex size-11 items-center justify-center rounded-full text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
    </header>
    <div
      className={cn(
        "lg:hidden fixed inset-x-0 top-0 h-dvh z-40 bg-background-secondary overflow-y-auto overscroll-contain transition-transform duration-300 ease-out",
        open ? "translate-x-0" : "translate-x-full pointer-events-none",
      )}
      aria-hidden={!open}
    >
          <nav
            className="container-site flex flex-col gap-6 pt-20 pb-8"
            aria-label="Mobile"
          >
            <MenuVertical
              menuItems={navLinks}
              onNavigate={() => setOpen(false)}
            />
            <div className="mt-2 flex max-w-xs flex-col gap-3">
              <Button
                href="/contact"
                showArrow
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Button>
              <Button
                href={`https://wa.me/${business.whatsappDigits}`}
                variant="secondary"
                external
                className="w-full"
              >
                WhatsApp
              </Button>
            </div>
          </nav>
    </div>
  </>
  );
}
