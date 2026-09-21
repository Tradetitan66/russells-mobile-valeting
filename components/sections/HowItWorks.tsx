import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell us about your car",
    body: "Send your vehicle details and what you'd like done.",
  },
  {
    number: "02",
    title: "Choose a convenient time",
    body: "Arrange a suitable appointment at your home or workplace.",
  },
  {
    number: "03",
    title: "We come to you",
    body: "Russell arrives with the equipment needed to complete the service.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05]">
            Professional car care without leaving home.
          </h2>
        </Reveal>

        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute top-8 left-[16%] right-[16%] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} as="li" className="relative">
              <span className="eyebrow text-accent">{step.number}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
