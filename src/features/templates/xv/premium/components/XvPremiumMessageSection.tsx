import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumMessageSectionProps = {
  data: XvPremiumTemplateData["message"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumMessageSection({
  data,
  reveal,
}: XvPremiumMessageSectionProps) {
  return (
    <motion.section {...reveal(0.04, 22)} className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
      <Card className="overflow-hidden rounded-[2.6rem] border-[rgba(212,95,154,0.14)] bg-[linear-gradient(135deg,rgba(255,247,251,0.96),rgba(249,234,242,0.92))] p-8 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:p-12">
        <motion.div
          className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full bg-[var(--xv-gold)]/10 blur-2xl"
          animate={{ opacity: [0.35, 0.8, 0.35], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="grid gap-8 lg:grid-cols-[0.22fr_1fr] lg:items-start">
          <div className="grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/10 text-[var(--xv-gold)]">
            <Quote className="h-6 w-6" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)]">
              {data.kicker}
            </span>
            <h2 className="mt-4 font-['Baskervville'] text-3xl font-normal tracking-[-0.04em] text-[var(--xv-accent-primary,#9d248d)] sm:text-5xl">
              {data.title}
            </h2>
            <div className="mt-5 h-px w-24 bg-[linear-gradient(90deg,rgba(240,214,156,0.85),rgba(240,214,156,0))]" />
            <p className="mt-6 max-w-3xl text-sm leading-8 text-[var(--xv-ink)]/84 sm:text-base">
              {data.body}
            </p>
            <strong className="mt-6 block font-['Baskervville'] text-xl font-normal text-[var(--xv-accent-primary,#9d248d)]">
              {data.signature}
            </strong>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
