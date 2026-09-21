import { business } from "@/lib/business";
import { Marquee } from "@/components/ui/Marquee";

export function TrustStrip() {
  return <Marquee items={business.trustItems} />;
}
