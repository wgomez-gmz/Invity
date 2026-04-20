import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumFooterProps = {
  data: XvPremiumTemplateData["closing"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumFooter({ data, reveal }: XvPremiumFooterProps) {
  return (
    <motion.footer
      {...reveal(0.2, 22)}
      className="relative mt-10 px-5 py-20 text-center sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.99),rgba(252,238,246,0.95))] px-6 py-16 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10">
        <motion.div
          className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-[var(--xv-gold)]/16 blur-3xl"
          animate={{ opacity: [0.65, 1, 0.65], y: [-4, 6, -4] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(245,205,221,0.28),rgba(245,205,221,0))]" />
        <motion.div
          className="absolute right-12 top-12 h-3 w-3 rounded-full bg-[var(--xv-gold)]/60"
          animate={{ opacity: [0.25, 0.9, 0.25], y: [-2, 4, -2], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-14 top-20 h-2 w-2 rounded-full bg-[var(--xv-accent-primary)]/45"
          animate={{ opacity: [0.2, 0.75, 0.2], y: [3, -3, 3], scale: [0.85, 1.1, 0.85] }}
          transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          <Sparkles className="h-3.5 w-3.5" />
          Cierre
        </span>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mx-auto mt-6 h-px w-24 origin-center bg-[linear-gradient(90deg,rgba(240,214,156,0),rgba(240,214,156,0.9),rgba(240,214,156,0))]"
        />
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
          className="mt-6 font-['Baskervville'] text-3xl font-normal leading-tight text-[var(--xv-accent-primary,#9d248d)] drop-shadow-[0_8px_18px_rgba(212,95,154,0.14)] sm:text-5xl"
        >
          {data.message}
        </motion.p>
        <strong className="mt-6 block text-sm uppercase tracking-[0.34em] text-[var(--xv-ink)]/68">
          {data.accent}
        </strong>
        </div>
      </div>
    </motion.footer>
  );
}
