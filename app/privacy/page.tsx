import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Russell's Mobile Valeting.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="container-site max-w-2xl prose-invert space-y-6">
        <h1 className="text-4xl font-medium tracking-tight">Privacy Policy</h1>
        <p className="text-muted text-sm">
          Placeholder policy — to be reviewed and finalised with the business
          owner. Last updated: {new Date().getFullYear()}.
        </p>
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            {business.name} (&ldquo;we&rdquo;) respects your privacy. When you
            submit a quote request via this website, we collect the information
            you provide (such as name, contact details, vehicle information and
            message) solely to respond to your enquiry and provide our services.
          </p>
          <p>
            We do not sell your personal data. Contact details may be used to
            reply by phone, WhatsApp or email as appropriate to your request.
          </p>
          <p>
            For privacy questions, contact us on{" "}
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
