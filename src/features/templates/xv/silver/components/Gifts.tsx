import { motion } from "motion/react";
import { ExternalLink, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type GiftsProps = {
  data: XvPremiumTemplateData["gifts"];
};

export function Gifts({ data }: GiftsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-xl border border-[var(--xv-border)] bg-[var(--xv-section-alt)] px-6 py-10 shadow-md sm:px-10"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Gift className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">{data.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/80 sm:text-base">{data.intro}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {data.options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full rounded-xl border-[var(--xv-border)] bg-white p-6 shadow-md">
                <h3 className="font-['Baskervville'] text-2xl text-[var(--xv-black)]">{option.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--xv-ink)]/82">{option.value}</p>
                {option.href ? (
                  <a href={option.href} target="_blank" rel="noreferrer" className="mt-5 inline-block">
                    <Button
                      variant="outline"
                      className="h-10 rounded-xl border-[var(--xv-border)] bg-white text-[var(--xv-black)] hover:bg-[var(--xv-blush-soft)]"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      {option.actionLabel ?? "Abrir enlace"}
                    </Button>
                  </a>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
