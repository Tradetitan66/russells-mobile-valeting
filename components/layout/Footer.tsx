import Link from "next/link";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";

const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Our Work" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <p className="text-lg font-medium tracking-tight">
              {business.name}
            </p>
            <p className="text-muted leading-relaxed max-w-sm">
              Mobile car valeting and detailing across Livingston, West
              Lothian, Edinburgh and central Scotland.
            </p>
            <Button href="/contact" size="sm" showArrow>
              Get a Quote
            </Button>
          </div>

          <div className="md:col-span-3 space-y-4">
            <p className="eyebrow">Navigate</p>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <p className="eyebrow">Contact</p>
            <a
              href={`tel:${business.phoneTel}`}
              className="block text-sm text-foreground hover:text-accent transition-colors"
            >
              {business.phoneDisplay}
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-muted hover:text-foreground transition-colors"
            >
              Instagram {business.instagram}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
