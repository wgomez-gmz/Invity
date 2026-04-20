import { AnimatePresence, motion } from "motion/react";
import { Sparkles, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type XvPremiumEntryProps = {
  data: XvPremiumTemplateData;
  isOpen: boolean;
  prefersReducedMotion: boolean;
  onOpen: () => void;
};

export function XvPremiumEntry({
  data,
  isOpen,
  prefersReducedMotion,
  onOpen,
}: XvPremiumEntryProps) {
  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.div
          className="fixed inset-0 z-[140] overflow-hidden bg-[#5b2745]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center opacity-70"
            style={{
              backgroundImage: `${data.appearance.heroOverlay}, url(${data.hero.coverImage.src})`,
              backgroundPosition: data.hero.coverImage.position ?? "center center",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.26),transparent_24%),radial-gradient(circle_at_20%_18%,rgba(245,205,221,0.24),transparent_16%),linear-gradient(180deg,rgba(58,24,45,0.08),rgba(58,24,45,0.46))]" />
          <div className="absolute inset-x-0 top-10 mx-auto h-40 w-40 rounded-full bg-[var(--xv-gold)]/26 blur-3xl" />
          <div className="absolute right-10 top-16 text-[var(--xv-gold)]/80">
            <Stars className="h-5 w-5" />
          </div>
          <div className="absolute left-8 top-28 text-white/70">
            <Sparkles className="h-4 w-4" />
          </div>

          <div className="relative flex min-h-dvh items-center justify-center px-4 py-8">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26, scale: 0.98 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
              className="w-full max-w-xl"
            >
              <Card className="rounded-[2rem] border-white/22 bg-[linear-gradient(180deg,rgba(255,244,248,0.16),rgba(117,45,89,0.24))] px-6 py-8 text-center shadow-[0_30px_90px_rgba(4,1,3,0.28)] backdrop-blur-2xl sm:px-10 sm:py-10">
                <span className="block text-[11px] uppercase tracking-[0.42em] text-[var(--xv-gold)]">
                  {data.hero.subtitle}
                </span>
                <strong className="mt-5 block font-['Baskervville'] text-5xl font-normal tracking-[-0.04em] text-[var(--xv-accent-primary,#9d248d)] sm:text-7xl">
                  {data.hero.celebrant}
                </strong>
                <p className="mt-4 text-sm uppercase tracking-[0.32em] text-white/78 sm:text-base">
                  {data.hero.date}
                </p>
                <small className="mx-auto mt-6 block max-w-md text-sm leading-7 text-white/84 sm:text-[15px]">
                  {data.hero.supportLine}
                </small>
                <Button
                  type="button"
                  onClick={onOpen}
                  size="lg"
                  className="mt-8 h-12 rounded-full border border-white/30 bg-[linear-gradient(135deg,rgba(255,248,251,0.98),rgba(241,214,224,0.96))] px-8 font-['Baskervville'] text-[13px] uppercase tracking-[0.28em] text-[#4d1832] shadow-[0_16px_40px_rgba(11,4,8,0.28)] hover:bg-white"
                >
                  {data.hero.openLabel}
                </Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
