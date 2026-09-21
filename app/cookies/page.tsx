import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for Russell's Mobile Valeting.",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="container-site max-w-2xl space-y-6">
        <h1 className="text-4xl font-medium tracking-tight">Cookie Policy</h1>
        <p className="text-muted text-sm">
          Placeholder policy — to be reviewed and finalised with the business
          owner. Last updated: {new Date().getFullYear()}.
        </p>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            This website may use essential cookies required for basic
            functionality and security. Analytics or marketing cookies, if
            introduced later, will be disclosed here and subject to consent
            where required.
          </p>
          <p>
            For questions, contact {business.name} on{" "}
            <a
              href={`tel:${business.phoneTel}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {business.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
