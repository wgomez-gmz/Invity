import { motion } from "motion/react";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyFooterProps = {
  closing: BaptismRubyTemplateData["closing"];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyFooter({ closing, reveal }: BaptismRubyFooterProps) {
  return (
    <motion.footer
      {...reveal(0.2)}
      className="mt-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_38%),linear-gradient(180deg,rgba(255,242,247,0.92),rgba(237,244,255,0.92))] px-4 py-12 text-center"
    >
      <p className="mx-auto max-w-2xl font-serif text-4xl text-[#2B2B2B] sm:text-5xl">{closing.phrase}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[#7A7A7A]">{closing.signature}</p>
    </motion.footer>
  );
}


