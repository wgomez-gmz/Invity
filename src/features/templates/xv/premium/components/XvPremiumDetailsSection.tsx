import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import { EventIcon, type XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumDetailsSectionProps = {
  data: XvPremiumTemplateData["eventDetails"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumDetailsSection({
  data,
  reveal,
}: XvPremiumDetailsSectionProps) {
  return (
    <motion.section {...reveal(0.08, 24)} className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-10 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-12">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          {data.kicker}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
          className="mt-4 max-w-3xl font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] drop-shadow-[0_8px_18px_rgba(212,95,154,0.14)] sm:text-6xl"
        >
          {data.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mt-5 h-px w-28 origin-left bg-[linear-gradient(90deg,rgba(240,214,156,0.9),rgba(240,214,156,0))]"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {data.cards.map((card, index) => (
          <motion.div
            key={card.title}
            {...reveal(0.08 + index * 0.08, 18)}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="h-full rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-white/84 p-7 shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
              <motion.div
                className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-[rgba(212,95,154,0.12)] bg-[rgba(245,205,221,0.28)]"
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ duration: 0.3 }}
              >
                <EventIcon type={card.icon} />
              </motion.div>
              <strong className="block text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)]">
                {card.title}
              </strong>
              <h3 className="mt-4 font-['Baskervville'] text-3xl font-normal tracking-[-0.04em] text-[var(--xv-accent-primary,#9d248d)]">
                {card.venue}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--xv-ink)]/82">{card.address}</p>
              <span className="mt-6 block text-sm text-[var(--xv-accent-primary,#9d248d)]">{card.time}</span>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
