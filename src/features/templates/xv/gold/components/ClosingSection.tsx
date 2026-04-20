import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type ClosingSectionProps = {
  data: XvPremiumTemplateData["closing"];
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
  prefersReducedMotion: boolean;
};

export function ClosingSection({ data, reveal, prefersReducedMotion }: ClosingSectionProps) {
  return (
    <motion.section
      {...reveal(0.1, 18)}
      className="mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-12"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(212,175,55,0.16)] bg-[linear-gradient(180deg,rgba(253,246,236,0.98),rgba(236,243,252,0.98))] px-6 py-12 text-center shadow-[0_26px_80px_rgba(26,42,68,0.1)] sm:px-10">
        <motion.div
          className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-[rgba(53,83,122,0.18)] blur-3xl"
          animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.14)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <Sparkles className="h-3.5 w-3.5" />
          Cierre
        </span>
        <h2 className="relative mx-auto mt-6 max-w-3xl font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {data.message}
        </h2>
        <p className="relative mt-6 text-sm uppercase tracking-[0.32em] text-[var(--xv-accent-primary)]">
          {data.accent}
        </p>
      </div>
    </motion.section>
  );
}
