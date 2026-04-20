import { motion } from "motion/react";
import { ExternalLink, Gift, WalletCards } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumGiftsSectionProps = {
  data: XvPremiumTemplateData["gifts"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumGiftsSection({
  data,
  reveal,
}: XvPremiumGiftsSectionProps) {
  return (
    <motion.section {...reveal(0.16, 22)} className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-10 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-12">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          <Gift className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
          className="mt-5 max-w-3xl font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] drop-shadow-[0_8px_18px_rgba(212,95,154,0.14)] sm:text-6xl"
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
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">
          {data.intro}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {data.options.map((option, index) => (
          <motion.div
            key={option.title}
            {...reveal(0.08 + index * 0.06, 18)}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="flex h-full flex-col rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-white/84 p-6 shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
              {option.image ? (
                <motion.div
                  className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/80 p-3"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={option.image.src}
                    alt={option.image.alt}
                    loading="lazy"
                    className="h-28 w-full object-contain"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ) : null}
              <motion.div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(212,95,154,0.12)] bg-[rgba(245,205,221,0.24)]"
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ duration: 0.3 }}
              >
                <WalletCards className="h-4 w-4 text-[var(--xv-gold)]" />
              </motion.div>
              <strong className="text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)]">
                {option.title}
              </strong>
              <p className="mt-4 flex-1 text-sm leading-7 text-[var(--xv-ink)]/86">{option.value}</p>
              {option.href && option.actionLabel ? (
                <a
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-[rgba(212,95,154,0.14)] bg-white px-5 text-sm font-semibold text-[var(--xv-accent-primary,#9d248d)] transition-all duration-300 hover:scale-[1.015] hover:bg-white"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {option.actionLabel}
                </a>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
}
