import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type HeroXVProps = {
  data: XvPremiumTemplateData;
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
  prefersReducedMotion: boolean;
};

export function HeroXV({ data, reveal, prefersReducedMotion }: HeroXVProps) {
  const heroImages = useMemo(
    () => data.gallery.images.slice(0, 3),
    [data.gallery.images],
  );
  const [activeImage, setActiveImage] = useState(0);

  const getHeroPosition = (index: number, fallback?: string) => {
    const curatedPositions = ["center 16%", "center 22%", "center 20%"];
    return curatedPositions[index] ?? fallback ?? "center 20%";
  };

  useEffect(() => {
    if (prefersReducedMotion || heroImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length, prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            className="absolute inset-0 bg-[#1b2d49]"
            initial={index === 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
            animate={
              prefersReducedMotion
                ? { opacity: index === activeImage ? 1 : 0 }
                : {
                    opacity: index === activeImage ? 1 : 0,
                    scale: index === activeImage ? 1 : 1.02,
                  }
            }
            transition={{ duration: 1.3, ease: [0.19, 1, 0.22, 1] }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover lg:object-contain"
              style={{ objectPosition: getHeroPosition(index, image.position) }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,30,49,0.08),rgba(19,32,54,0.56))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(109,130,163,0.14),transparent_18%),radial-gradient(circle_at_82%_14%,rgba(212,175,55,0.1),transparent_18%),radial-gradient(circle_at_bottom,rgba(255,248,241,0.08),transparent_26%)]" />
      </div>
      <motion.div
        className="absolute right-[10%] top-24 h-44 w-44 rounded-full bg-[rgba(109,130,163,0.28)] blur-3xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.9, 0.45], y: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[12%] top-28 h-32 w-32 rounded-full bg-[rgba(212,175,55,0.18)] blur-3xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.7, 0.35], y: [8, -6, 8] }}
        transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl items-end px-5 pb-14 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.span
            {...reveal(0.04, 16)}
            className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold-soft)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {"Rose Gold Story"}
          </motion.span>
          <motion.h1
            {...reveal(0.1, 20)}
            className="mt-7 font-['Baskervville'] text-[3.4rem] font-normal leading-[0.92] tracking-[-0.06em] text-white sm:text-[5rem] lg:text-[6.5rem]"
          >
            {data.hero.celebrant}
          </motion.h1>
          <motion.p
            {...reveal(0.14, 18)}
            className="mt-4 font-['Baskervville'] text-2xl text-[var(--xv-gold-soft)] sm:text-[2.35rem]"
          >
            {data.hero.subtitle}
          </motion.p>
          <motion.div
            {...reveal(0.18, 16)}
            className="mt-6 h-px w-28 bg-[linear-gradient(90deg,rgba(243,223,159,0.95),rgba(243,223,159,0))]"
          />
          <div className="mt-5 flex items-center gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image.alt}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeImage
                    ? "w-10 bg-[var(--xv-gold)]"
                    : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Mostrar foto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
