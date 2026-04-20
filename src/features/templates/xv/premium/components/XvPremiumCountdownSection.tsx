import { motion } from "motion/react";
import { Clock3 } from "lucide-react";
import { AnimatedNumber, type CountdownParts, type XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumCountdownSectionProps = {
  title: string;
  headline: string;
  note: string;
  labels: { days: string; hours: string; minutes: string };
  countdown: CountdownParts;
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumCountdownSection({
  title,
  headline,
  note,
  labels,
  countdown,
  reveal,
}: XvPremiumCountdownSectionProps) {
  return (
    <motion.section {...reveal(0.02, 20)} className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-12 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-14">
      <div className="mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          <Clock3 className="h-3.5 w-3.5" />
          {title}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mt-5 max-w-3xl font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] drop-shadow-[0_8px_18px_rgba(212,95,154,0.16)] sm:text-6xl"
        >
          {headline}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mx-auto mt-5 h-px w-28 origin-center bg-[linear-gradient(90deg,rgba(240,214,156,0),rgba(240,214,156,0.9),rgba(240,214,156,0))]"
        />
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/80 sm:text-base">
          {note}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <AnimatedNumber value={countdown.days} label={labels.days} delay={0.05} />
        <AnimatedNumber value={countdown.hours} label={labels.hours} delay={0.1} />
        <AnimatedNumber value={countdown.minutes} label={labels.minutes} delay={0.15} />
      </div>
      </div>
    </motion.section>
  );
}
