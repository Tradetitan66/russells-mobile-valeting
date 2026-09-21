import { business } from "@/lib/business";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceAreas() {
  return (
    <section className="py-24 md:py-32 bg-background-secondary">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6 space-y-6">
            <p className="eyebrow">Coverage</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05]">
              Mobile car valeting across Central Scotland.
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-lg">
              Based in Livingston and serving customers throughout West
              Lothian, Edinburgh and surrounding parts of central Scotland.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <ul className="grid grid-cols-2 gap-px bg-border">
              {business.primaryAreas.map((area) => (
                <li
                  key={area}
                  className="bg-background-secondary flex min-h-24 items-center justify-center border border-transparent px-4 text-center text-sm tracking-wide text-foreground hover:bg-background transition-colors"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted uppercase tracking-[0.14em] text-center">
              {business.location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
