import { Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyFamilySectionProps = {
  family: BaptismRubyTemplateData["family"];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyFamilySection({ family, reveal }: BaptismRubyFamilySectionProps) {
  return (
    <motion.section id="family" {...reveal(0.1)} className="mt-8 rounded-[2rem] bg-white/70 p-6 shadow-[0_18px_50px_rgba(24,44,76,0.08)] backdrop-blur-md sm:p-8">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.26em] text-[#8e6f15]">Familia</p>
        <h2 className="mt-4 font-serif text-4xl text-[#193252] sm:text-5xl">Padres y padrinos</h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <motion.article
          {...reveal(0.12)}
          className="rounded-[1.5rem] border border-[#d4af37]/25 bg-white/85 p-6 text-center shadow-[0_16px_40px_rgba(24,44,76,0.09)]"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#8e6f15]">
            <Heart className="h-4 w-4" />
            Padres
          </span>
          <div className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
          <div className="space-y-2">
            {family.parents.map((name) => (
              <p key={name} className="font-['Great_Vibes','cursive'] text-5xl leading-none text-[#7c5f16]">
                {name}
              </p>
            ))}
          </div>
        </motion.article>

        <motion.article
          {...reveal(0.18)}
          className="rounded-[1.5rem] border border-[#d4af37]/25 bg-white/85 p-6 text-center shadow-[0_16px_40px_rgba(24,44,76,0.09)]"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#8e6f15]">
            <Users className="h-4 w-4" />
            Padrinos
          </span>
          <div className="mx-auto my-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
          <div className="space-y-2">
            {family.godparents.map((name) => (
              <p key={name} className="font-['Great_Vibes','cursive'] text-5xl leading-none text-[#7c5f16]">
                {name}
              </p>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
