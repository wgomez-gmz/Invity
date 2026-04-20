import { motion } from "motion/react";
import { ExternalLink, Gift, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type GiftsProps = {
  data: XvPremiumTemplateData["gifts"];
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
};

export function Gifts({ data, reveal }: GiftsProps) {
  return (
    <motion.section
      {...reveal(0.08, 18)}
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="rounded-[2.4rem] border border-[var(--xv-border)] bg-[var(--xv-section-bg)] px-6 py-10 shadow-[0_24px_70px_rgba(26,42,68,0.08)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <Gift className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">{data.intro}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full rounded-[1.8rem] border-[var(--xv-border)] bg-white/88 p-6 shadow-[0_16px_42px_rgba(26,42,68,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(212,175,55,0.1)] text-[var(--xv-gold)]">
                    <WalletCards className="h-5 w-5" />
                  </div>
                  <strong className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold)]">{option.title}</strong>
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--xv-ink)]/86">{option.value}</p>
                {option.href && (
                  <a href={option.href} target="_blank" rel="noreferrer" className="mt-6 inline-block">
                    <Button variant="outline" className="rounded-full border-[var(--xv-border)] bg-white text-[var(--xv-black)] hover:bg-[rgba(212,175,55,0.08)]">
                      <ExternalLink className="h-4 w-4" />
                      {option.actionLabel ?? "Ver enlace"}
                    </Button>
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
