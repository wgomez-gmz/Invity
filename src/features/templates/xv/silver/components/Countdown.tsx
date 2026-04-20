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
};

export function Countdown({ title, headline, note, countdown, labels }: CountdownProps) {
  const stats = [
    { value: countdown.days, label: labels?.days ?? "Dias" },
    { value: countdown.hours, label: labels?.hours ?? "Horas" },
    { value: countdown.minutes, label: labels?.minutes ?? "Minutos" },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-xl border border-[var(--xv-border)] bg-white px-6 py-8 shadow-md sm:px-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Clock3 className="h-3.5 w-3.5" />
          {title}
        </span>
        <h2 className="mt-5 font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">{headline}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/78 sm:text-base">{note}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <Card className="rounded-xl border-[var(--xv-border)] bg-[var(--xv-section-alt)] p-5 text-center shadow-md">
                <p className="font-['Baskervville'] text-5xl text-[var(--xv-accent-primary)] sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--xv-ink)]/70">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
