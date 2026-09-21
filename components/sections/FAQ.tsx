import { faqs } from "@/lib/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight">
              Common questions.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
