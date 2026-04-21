import { Gift, Shirt } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyExtrasSectionProps = {
  dressCode?: BaptismRubyTemplateData["dressCode"];
  gifts?: BaptismRubyTemplateData["gifts"];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyExtrasSection({ dressCode, gifts, reveal }: BaptismRubyExtrasSectionProps) {
  if (!dressCode && !gifts) {
    return null;
  }

  return (
    <motion.section {...reveal(0.16)} className="mt-8 grid gap-4 md:grid-cols-2">
      {dressCode ? (
        <Card className="rounded-[1.8rem] border-[#d4af37]/20 bg-white/92 p-6 shadow-[0_16px_40px_rgba(24,44,76,0.08)]">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
            <Shirt className="h-4 w-4" />
            {dressCode.title}
          </span>
          <p className="mt-4 text-sm leading-7 text-[#7A7A7A]">{dressCode.note}</p>
        </Card>
      ) : null}

      {gifts ? (
        <Card className="rounded-[1.8rem] border-[#d4af37]/20 bg-white/92 p-6 shadow-[0_16px_40px_rgba(24,44,76,0.08)]">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
            <Gift className="h-4 w-4" />
            {gifts.title}
          </span>
          <p className="mt-4 text-sm leading-7 text-[#7A7A7A]">{gifts.note}</p>
        </Card>
      ) : null}
    </motion.section>
  );
}


