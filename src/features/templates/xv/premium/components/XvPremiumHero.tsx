import { motion } from "motion/react";
import { CalendarDays, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumHeroProps = {
  data: XvPremiumTemplateData;
  heroImages: XvPremiumTemplateData["gallery"]["images"];
  heroIndex: number;
  prefersReducedMotion: boolean;
  onSelectHero: (index: number) => void;
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumHero({
  data,
  heroImages,
  heroIndex,
  prefersReducedMotion,
  onSelectHero,
  reveal,
}: XvPremiumHeroProps) {
  return (
    <section className="relative min-h-[92svh] overflow-hidden rounded-b-[2.5rem] border-b border-white/10">
      {heroImages.map((image, index) => (
        <motion.div
          key={image.alt}
          className="absolute inset-0"
          initial={index === 0 ? { opacity: 1, scale: 1.01 } : { opacity: 0, scale: 1.03 }}
          animate={
            prefersReducedMotion
              ? { opacity: index === heroIndex ? 1 : 0 }
              : {
                  opacity: index === heroIndex ? 1 : 0,
                  scale: index === heroIndex ? 1.01 : 1.05,
                }
          }
          transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: image.position ?? "center center" }}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === heroIndex ? "high" : "auto"}
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,205,221,0.04),rgba(58,23,43,0.42))]" />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(42,17,31,0.06),rgba(42,17,31,0.6))]" />
      <motion.div
        className="absolute left-[12%] top-20 h-36 w-36 rounded-full bg-[var(--xv-gold)]/28 blur-3xl"
        animate={prefersReducedMotion ? undefined : { y: [-6, 8, -6], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[12%] h-44 w-44 rounded-full bg-[var(--xv-accent-primary)]/34 blur-3xl"
        animate={prefersReducedMotion ? undefined : { y: [8, -10, 8], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.div
              {...reveal(0.04, 20)}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/18 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold-soft)] backdrop-blur-lg"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {"Colección Ruby"}
            </motion.div>
            <motion.h1
              {...reveal(0.1, 26)}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { textShadow: [
                      "0 10px 24px rgba(8,3,6,0.18)",
                      "0 14px 32px rgba(212,95,154,0.18)",
                      "0 10px 24px rgba(8,3,6,0.18)",
                    ] }
              }
              transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="font-['Baskervville'] text-[3.3rem] font-normal leading-[0.92] tracking-[-0.06em] text-[var(--xv-accent-primary,#9d248d)] drop-shadow-[0_12px_28px_rgba(8,3,6,0.34)] sm:text-[5rem] lg:text-[7rem]"
            >
              {data.hero.celebrant}
            </motion.h1>
            <motion.p
              {...reveal(0.16, 20)}
              className="mt-5 max-w-2xl font-['Baskervville'] text-xl text-white/90 sm:text-[2rem]"
            >
              {data.hero.subtitle}
            </motion.p>
            <motion.div
              {...reveal(0.18, 18)}
              className="mt-6 h-px w-28 bg-[linear-gradient(90deg,rgba(240,214,156,0.85),rgba(240,214,156,0))]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-5 flex items-center gap-2 text-[var(--xv-gold-soft)]"
            >
              <motion.span
                animate={prefersReducedMotion ? undefined : { opacity: [0.35, 1, 0.35], y: [-2, 2, -2] }}
                transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Sparkles className="h-3.5 w-3.5" />
              </motion.span>
              <motion.span
                animate={prefersReducedMotion ? undefined : { opacity: [1, 0.45, 1] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="h-px w-10 bg-[linear-gradient(90deg,rgba(240,214,156,0.85),rgba(240,214,156,0))]"
              />
            </motion.div>
            <motion.p
              {...reveal(0.22, 20)}
              className="mt-7 max-w-2xl rounded-[1.5rem] border border-white/10 bg-[rgba(53,23,41,0.22)] px-5 py-4 text-sm leading-8 text-[var(--xv-ivory)] shadow-[0_18px_40px_rgba(8,3,6,0.18)] backdrop-blur-md sm:text-base"
            >
              {data.hero.supportLine}
            </motion.p>
          </div>

          <motion.div
            {...reveal(0.24, 24)}
            className="ml-auto w-full max-w-md"
            whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="rounded-[2rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,248,251,0.2),rgba(255,255,255,0.1))] p-6 shadow-[0_30px_90px_rgba(5,2,4,0.24)] backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.32em] text-white/55">
                  {"Edición atelier"}
                </span>
                <Crown className="h-4 w-4 text-[var(--xv-gold)]" />
              </div>
              <div className="space-y-4 text-[var(--xv-ink)]">
                <motion.div
                  className="rounded-[1.5rem] border border-white/10 bg-black/10 px-4 py-4"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/62">
                    Fecha especial
                  </span>
                  <div className="flex items-center gap-3 text-sm text-white/96">
                    <CalendarDays className="h-4 w-4 text-[var(--xv-gold)]" />
                    <span>{data.hero.date}</span>
                  </div>
                </motion.div>
                <motion.div
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4"
                  whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/62">
                    Esencia
                  </span>
                  <p className="font-['Baskervville'] text-xl leading-tight text-[var(--xv-black)]">
                    Delicada, luminosa y hecha para recordarse.
                  </p>
                </motion.div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full rounded-full border-white/25 bg-white/14 text-[var(--xv-black)] transition-transform duration-300 hover:scale-[1.015] hover:bg-white/18 hover:text-[var(--xv-black)]"
                  onClick={() => onSelectHero((heroIndex + 1) % heroImages.length)}
                >
                  Ver otra escena
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
