import { motion } from "motion/react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type HeroSectionProps = {
  data: XvPremiumTemplateData["hero"];
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-12">
      <motion.div
        className="overflow-hidden rounded-xl border border-[var(--xv-border)] bg-white shadow-md"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
      >
        <div className="relative bg-[linear-gradient(180deg,rgba(238,234,245,0.72),rgba(245,241,234,0.9))] p-3 sm:p-4">
          <img
            src={data.coverImage.src}
            alt={data.coverImage.alt}
            className="w-full rounded-lg bg-[var(--xv-blush-soft)] object-contain [aspect-ratio:4/5] sm:[aspect-ratio:4/5] lg:[aspect-ratio:3/4]"
            style={{ objectPosition: data.coverImage.position ?? "center 12%", maxHeight: "78svh" }}
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,15,0.04),rgba(46,46,46,0.20))]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-10 text-center sm:px-10">
          <motion.h1
            className="font-['Baskervville'] text-5xl tracking-[-0.04em] text-[var(--xv-accent-primary)] sm:text-6xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {data.celebrant}
          </motion.h1>
          <p className="mt-4 font-['Baskervville'] text-2xl text-[var(--xv-black)]">{data.subtitle}</p>
          <div className="mx-auto mt-5 h-px w-24 bg-[linear-gradient(90deg,transparent,var(--xv-gold-soft),transparent)]" />
          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--xv-accent-primary)]">{data.date}</p>
        </div>
      </motion.div>
    </section>
  );
}
