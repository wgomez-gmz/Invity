import { motion } from "motion/react";
import { Clock3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CountdownParts } from "@/features/templates/xv/premium/utils";

type CountdownProps = {
  title: string;
  headline?: string;
  note: string;
  countdown: CountdownParts;
  labels?: { days: string; hours: string; minutes: string };
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
};

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, delay }}
    >
      <Card className="rounded-[1.8rem] border-[var(--xv-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(238,245,253,0.88))] px-5 py-6 text-center shadow-[0_18px_45px_rgba(26,42,68,0.08)]">
        <div className="font-['Baskervville'] text-5xl text-[var(--xv-accent-primary)] sm:text-6xl">{value}</div>
        <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/70">{label}</div>
      </Card>
    </motion.div>
  );
}

export function Countdown({
  title,
  headline,
  note,
  countdown,
  labels,
  reveal,
}: CountdownProps) {
  return (
    <motion.section
      {...reveal(0.04, 18)}
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="rounded-[2.4rem] border border-[var(--xv-border)] bg-[linear-gradient(180deg,rgba(253,246,236,0.98),rgba(236,243,252,0.98))] px-6 py-10 shadow-[0_28px_80px_rgba(26,42,68,0.09)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <Clock3 className="h-3.5 w-3.5" />
          {title}
        </span>
        <h2 className="mt-5 font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">{note}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat value={countdown.days} label={labels?.days ?? "Días"} delay={0.04} />
          <Stat value={countdown.hours} label={labels?.hours ?? "Horas"} delay={0.1} />
          <Stat value={countdown.minutes} label={labels?.minutes ?? "Minutos"} delay={0.16} />
        </div>
      </div>
    </motion.section>
  );
}
