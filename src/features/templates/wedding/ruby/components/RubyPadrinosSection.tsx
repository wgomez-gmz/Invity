import { AnimatePresence, motion } from "motion/react";
import type { CSSProperties } from "react";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyPadrinosSectionProps = {
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
  style?: CSSProperties;
  prefersReducedMotion: boolean;
  slideTransition: { duration: number; ease?: readonly [number, number, number, number] };
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyPadrinosSection({
  data,
  runtime,
  style,
  prefersReducedMotion,
  slideTransition,
  hoverLift,
  tapPress,
  textReveal,
}: RubyPadrinosSectionProps) {
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];

  return (
    <section
      className="padrinos-section ruby-surface-section scroll-reveal reveal-curtain"
      style={style}
    >
      <div className="padrinos-heading">
        <motion.h3 {...textReveal(0.08, 18)}>{data.padrinos.heading}</motion.h3>
      </div>

      <div className="padrinos-card">
        <motion.button
          className="padrinos-nav padrinos-nav-prev"
          type="button"
          aria-label="Padrino anterior"
          onClick={() =>
            runtime.setActivePadrinosSlide(
              (current) => (current - 1 + data.padrinos.slides.length) % data.padrinos.slides.length,
            )
          }
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          {"<"}
        </motion.button>

        <div className="padrinos-slider">
          <AnimatePresence mode="sync">
            <motion.img
              key={`${runtime.activePadrinosSlide}-${padrinoSlide.alt}`}
              className="padrinos-image padrinos-image-active"
              src={padrinoSlide.image}
              alt={padrinoSlide.alt}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
              transition={slideTransition}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`padrinos-overlay-${runtime.activePadrinosSlide}`}
              className="padrinos-overlay"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: 10, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <motion.p className="padrinos-role" {...textReveal(0.12, 14)}>
                {padrinoSlide.title}
              </motion.p>
              <motion.h4 {...textReveal(0.22, 16)}>{padrinoSlide.names}</motion.h4>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          className="padrinos-nav padrinos-nav-next"
          type="button"
          aria-label="Siguiente padrino"
          onClick={() =>
            runtime.setActivePadrinosSlide((current) => (current + 1) % data.padrinos.slides.length)
          }
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          {">"}
        </motion.button>
      </div>
    </section>
  );
}
