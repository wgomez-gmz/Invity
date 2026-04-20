import { motion } from "motion/react";
import { Sparkles, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type WelcomeScreenProps = {
  data: XvPremiumTemplateData;
  isOpen: boolean;
  prefersReducedMotion: boolean;
  onOpen: () => void;
};

export function WelcomeScreen({
  data,
  isOpen,
  prefersReducedMotion,
  onOpen,
}: WelcomeScreenProps) {
  if (isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] overflow-hidden bg-[#16243a]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_20%_20%,rgba(109,130,163,0.18),transparent_18%),radial-gradient(circle_at_80%_15%,rgba(212,175,55,0.2),transparent_18%),linear-gradient(180deg,rgba(18,31,51,0.94),rgba(26,42,68,1))]" />
      <motion.div
        className="absolute left-1/2 top-[16%] h-44 w-44 -translate-x-1/2 rounded-full bg-[rgba(109,130,163,0.28)] blur-3xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.9, 0.45], scale: [0.96, 1.06, 0.96] }}
        transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[14%] top-[18%] text-[rgba(243,223,159,0.82)]"
        animate={prefersReducedMotion ? undefined : { y: [-4, 4, -4], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Stars className="h-6 w-6" />
      </motion.div>
      <motion.div
        className="absolute right-[16%] top-[26%] text-[rgba(243,223,159,0.62)]"
        animate={prefersReducedMotion ? undefined : { y: [4, -5, 4], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Sparkles className="h-5 w-5" />
      </motion.div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="w-full max-w-xl rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,248,241,0.14),rgba(255,255,255,0.05))] px-8 py-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(243,223,159,0.24)] bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold-soft)]">
            <Sparkles className="h-3.5 w-3.5" />
            Noche encantada
          </span>
          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-white/62">
            {"Estás invitado a una noche mágica"}
          </p>
          <h1 className="mt-5 font-['Baskervville'] text-5xl font-normal tracking-[-0.06em] text-white sm:text-6xl">
            {data.hero.celebrant}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/78 sm:text-base">
            {"Un momento lleno de luz cálida, detalles dorados y recuerdos que comienzan como en un cuento."}
          </p>
          <Button
            type="button"
            onClick={onOpen}
            className="mt-8 h-12 rounded-full bg-[linear-gradient(135deg,#f3df9f,#d4af37)] px-7 text-[#1a2236] hover:opacity-95"
          >
            {data.hero.openLabel}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
