import { reviews } from "@/lib/reviews";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Renders nothing until real reviews are supplied in lib/reviews.ts.
 * Do not invent testimonials.
 */
export function Reviews() {
  if (!reviews.length) return null;

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-site">
        <Reveal className="mb-16">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">
            What customers say.
          </h2>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={`${review.name}-${i}`} delay={i * 0.08}>
              <blockquote className="space-y-6">
                <p className="text-xl md:text-2xl font-[family-name:var(--font-instrument)] italic leading-snug text-foreground">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="text-sm text-muted">
                  <cite className="not-italic font-medium text-foreground">
                    {review.name}
                  </cite>
                  {review.location ? ` · ${review.location}` : ""}
                  {review.source ? ` · ${review.source}` : ""}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
