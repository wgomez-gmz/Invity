import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";

type BaptismRubyIntroModalProps = {
  data: BaptismRubyTemplateData;
  isOpen: boolean;
  onOpen: () => void;
};

export function BaptismRubyIntroModal({ data, isOpen, onOpen }: BaptismRubyIntroModalProps) {
  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(16,30,58,0.45), rgba(10,18,35,0.62)), url(${data.hero.coverImage.src})`,
              backgroundPosition: data.hero.coverImage.position ?? "center center",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.26),transparent_16%)]" />

          <div className="relative flex min-h-dvh items-center justify-center px-4 py-8">
            <Card className="w-full max-w-xl rounded-[2rem] border-white/30 bg-white/15 px-6 py-9 text-center shadow-[0_40px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-10">
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37]">
                {data.hero.subtitle}
              </span>
              <h1 className="mt-5 font-serif text-5xl text-white drop-shadow-md sm:text-6xl">
                {data.hero.babyName}
              </h1>
              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/90">{data.hero.phrase}</p>
              <Button
                type="button"
                onClick={onOpen}
                className="mt-8 h-12 rounded-full border border-white/50 bg-[linear-gradient(135deg,#ffffff,#f8e7bf)] px-8 font-serif text-[13px] uppercase tracking-[0.24em] text-[#193252] hover:bg-white"
              >
                Abrir invitacion
              </Button>
            </Card>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
