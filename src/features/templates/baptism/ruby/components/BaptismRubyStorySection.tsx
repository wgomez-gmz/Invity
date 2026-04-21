import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyStorySectionProps = {
  welcome: BaptismRubyTemplateData["welcome"];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyStorySection({ welcome, reveal }: BaptismRubyStorySectionProps) {
  return (
    <motion.section
      id="story"
      {...reveal(0.06, 24)}
      className="mt-8 rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(255,242,247,0.6),rgba(255,255,255,0.9))] px-6 py-12 text-center shadow-[0_20px_60px_rgba(24,44,76,0.1)] sm:px-10"
    >
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e6f15]">Nuestra historia</p>
      <h2 className="mt-4 font-serif text-4xl text-[#193252] sm:text-5xl">{welcome.title}</h2>
      <div className="mx-auto mt-5 flex w-fit items-center gap-2 text-[#d4af37]">
        <span className="h-px w-8 bg-[#d4af37]/60" />
        <Sparkles className="h-4 w-4" />
        <span className="h-px w-8 bg-[#d4af37]/60" />
      </div>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">{welcome.message}</p>
      <p className="mt-5 font-serif text-2xl text-[#31557c]">{welcome.signature}</p>
    </motion.section>
  );
}
