import { motion } from "motion/react";
import { Heart } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type MessageSectionProps = {
  data: XvPremiumTemplateData["message"];
};

export function MessageSection({ data }: MessageSectionProps) {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      <motion.div
        className="rounded-xl border border-[var(--xv-border)] bg-[var(--xv-section-alt)] px-6 py-10 text-center shadow-md sm:px-10"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Heart className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">
          {data.title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--xv-ink)]/82">{data.body}</p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[var(--xv-accent-primary)]">{data.signature}</p>
      </motion.div>
    </section>
  );
}
