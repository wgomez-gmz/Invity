import { motion } from "motion/react";
import { Cross } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { CountdownParts } from "@/features/templates/baptism/ruby/utils";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyHeroSectionProps = {
  data: BaptismRubyTemplateData;
  countdown: CountdownParts;
  prefersReducedMotion: boolean;
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyHeroSection({
  data,
  countdown,
  prefersReducedMotion,
  reveal,
}: BaptismRubyHeroSectionProps) {
  return (
    <motion.section
      {...reveal(0.04, 22)}
      id="hero"
      className="relative isolate mt-6 min-h-[92svh] overflow-hidden rounded-[2.2rem] border border-[#d4af37]/25 shadow-[0_30px_90px_rgba(15,33,61,0.2)]"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        data-parallax-speed="0.24"
        style={{
          backgroundImage: `url(${data.hero.coverImage.src})`,
          backgroundPosition: data.hero.coverImage.position ?? "center center",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_26%),linear-gradient(180deg,rgba(11,22,41,0.35),rgba(8,17,33,0.68))]" />

      <div className="relative z-10 flex min-h-[92svh] flex-col items-center justify-center px-4 pb-16 pt-16 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#f8e7bf] backdrop-blur-md">
          <Cross className="h-3.5 w-3.5" />
          {data.hero.subtitle}
        </span>

        <motion.h1
          className="mt-6 font-serif text-6xl leading-none text-white drop-shadow-[0_16px_34px_rgba(0,0,0,0.26)] sm:text-7xl md:text-8xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {data.hero.babyName}
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/95 sm:text-base">
          {data.hero.phrase.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: index * 0.016, ease: "easeOut" }}
            >
              {char}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 w-full max-w-2xl"
        >
          <Card className="rounded-[1.7rem] border-white/30 bg-white/18 p-4 backdrop-blur-xl shadow-[0_24px_60px_rgba(10,18,35,0.34)]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/85">Cuenta regresiva</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[
                { label: "Dias", value: countdown.days },
                { label: "Horas", value: countdown.hours },
                { label: "Min", value: countdown.minutes },
                { label: "Seg", value: countdown.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/25 bg-white/15 px-2 py-3 text-center"
                >
                  <strong className="block font-serif text-2xl text-white">{item.value}</strong>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/80">
              {countdown.completed ? "La celebracion ha comenzado" : data.hero.eventDateLabel}
            </p>
          </Card>
        </motion.div>
      </div>

      <a
        href="#story"
        aria-label="Ir a bienvenida"
        className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md"
      >
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 4, 0], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="inline-block"
        >
          Scroll
        </motion.span>
      </a>
    </motion.section>
  );
}
