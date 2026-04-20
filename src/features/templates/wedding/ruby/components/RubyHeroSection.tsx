import { AnimatePresence, motion } from "motion/react";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyHeroSectionProps = {
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
  heroImage: string;
  heroAlt: string;
  prefersReducedMotion: boolean;
  slideTransition: { duration: number; ease?: readonly [number, number, number, number] };
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  surfaceReveal: (delay?: number, y?: number, scale?: number) => RubyMotionReveal;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyHeroSection({
  data,
  runtime,
  heroImage,
  heroAlt,
  prefersReducedMotion,
  slideTransition,
  hoverLift,
  tapPress,
  surfaceReveal,
  textReveal,
}: RubyHeroSectionProps) {
  return (
    <section className="cinema-modal scroll-reveal reveal-fade-scale is-visible">
      <div className="cinema-slideshow-layer" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.img
            key={`${runtime.activeWeddingSlide}-${heroAlt}`}
            className="cinema-slide cinema-slide-active"
            src={heroImage}
            alt=""
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
            transition={slideTransition}
          />
        </AnimatePresence>
        <div className="cinema-slideshow-overlay" />
      </div>

      <div className="cinema-modal-copy">
        <motion.div className="cinema-logo-lockup" {...surfaceReveal(0.12, 20, 0.985)}>
          <img src={data.hero.logo} alt="Logo de los novios" />
        </motion.div>

        <motion.div className="cinema-event-card" {...surfaceReveal(0.26, 26, 0.98)}>
          <motion.p className="cinema-event-kicker" {...textReveal(0.34, 12)}>
            Save the date
          </motion.p>
          <motion.h2 {...textReveal(0.42, 18)}>{data.hero.names}</motion.h2>
          <motion.p {...textReveal(0.5, 14)}>{data.hero.date}</motion.p>
          <motion.span {...textReveal(0.58, 14)}>{data.hero.place}</motion.span>
        </motion.div>

        <div className="cinema-slide-indicators" aria-label="Galeria principal">
          {data.hero.slides.map((slide, index) => (
            <motion.button
              key={slide.alt}
              type="button"
              className={
                index === runtime.activeWeddingSlide
                  ? "cinema-indicator cinema-indicator-active"
                  : "cinema-indicator"
              }
              aria-label={`Ir a foto ${index + 1}`}
              onClick={() => runtime.setActiveWeddingSlide(index)}
              whileHover={hoverLift}
              whileTap={tapPress}
            />
          ))}
        </div>
      </div>

      <div className="cinema-gallery">
        <motion.article
          className="cinema-shot cinema-shot-main cinema-shot-featured parallax-shell"
          data-parallax-speed="0.45"
          {...surfaceReveal(0.18, 22, 0.985)}
        >
          <img src={heroImage} alt={heroAlt} />
        </motion.article>

        <div className="cinema-shot-stack">
          <motion.article
            className="cinema-shot cinema-shot-vertical parallax-shell"
            data-parallax-speed="0.3"
            {...surfaceReveal(0.28, 24, 0.985)}
          >
            <img
              src={data.hero.supportImage}
              alt="Detalle romantico de la pareja en una toma editorial"
            />
          </motion.article>

          <motion.article
            className="cinema-shot cinema-shot-detail parallax-shell"
            data-parallax-speed="0.25"
            {...surfaceReveal(0.38, 24, 0.985)}
          >
            <img src={data.hero.detailImage} alt="Escena cinematografica de la sesion de boda" />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
