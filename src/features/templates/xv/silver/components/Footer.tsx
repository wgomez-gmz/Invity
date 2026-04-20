import { motion } from "motion/react";
import { Heart } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type FooterProps = {
  closing: XvPremiumTemplateData["closing"];
};

export function Footer({ closing }: FooterProps) {
  return (
    <motion.footer
      className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 lg:px-12"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <div className="rounded-xl border border-[var(--xv-border)] bg-white px-6 py-10 text-center shadow-md sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Heart className="h-3.5 w-3.5" />
          Cierre
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">
          {closing.message}
        </h2>
        <p className="mt-6 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">{closing.accent}</p>
      </div>
    </motion.footer>
  );
}
