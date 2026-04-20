import { motion } from "motion/react";
import { Gem, Shirt } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumDressSectionProps = {
  data: XvPremiumTemplateData["dressCode"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumDressSection({
  data,
  reveal,
}: XvPremiumDressSectionProps) {
  return (
    <motion.section {...reveal(0.12, 22)} className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      {data.cards.map((card) => (
        <Card
          key={card.label}
          className="overflow-hidden rounded-[2.5rem] border-[rgba(212,95,154,0.14)] bg-[linear-gradient(135deg,rgba(255,249,252,0.98),rgba(249,236,243,0.94))] p-6 shadow-[0_24px_70px_rgba(117,45,89,0.1)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(212,95,154,0.12)] bg-white/70 p-4">
              {card.image ? (
                <img src={card.image.src} alt={card.image.alt} loading="lazy" className="h-full w-full rounded-[1.35rem] object-cover" />
              ) : null}
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
                <Shirt className="h-3.5 w-3.5" />
                {data.kicker}
              </span>
              <h2 className="mt-5 font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] sm:text-5xl">
                {data.title}
              </h2>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[rgba(212,95,154,0.12)] bg-white px-4 py-3 text-[var(--xv-ink)]/90 shadow-[0_10px_30px_rgba(117,45,89,0.08)]">
                <Gem className="h-4 w-4 text-[var(--xv-gold)]" />
                <span className="text-sm">{card.value}</span>
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--xv-ink)]/84 sm:text-base">
                {data.note}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </motion.section>
  );
}
