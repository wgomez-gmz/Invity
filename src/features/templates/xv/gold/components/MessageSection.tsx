import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type MessageSectionProps = {
  data: XvPremiumTemplateData["message"];
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
};

export function MessageSection({ data, reveal }: MessageSectionProps) {
  return (
    <motion.section
      {...reveal(0.06, 18)}
      className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8"
    >
      <div className="rounded-[2.2rem] border border-[var(--xv-border)] bg-[linear-gradient(180deg,rgba(253,246,236,0.98),rgba(252,239,229,0.98))] px-6 py-10 text-center shadow-[0_24px_70px_rgba(26,42,68,0.08)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <Sparkles className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--xv-ink)]/84">{data.body}</p>
        <p className="mt-7 text-sm uppercase tracking-[0.3em] text-[var(--xv-accent-primary)]">{data.signature}</p>
      </div>
    </motion.section>
  );
}
