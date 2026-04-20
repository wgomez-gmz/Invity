import { AnimatePresence, motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyIntroModalProps = {
  data: WeddingTemplateData;
  heroImage: string;
  isOpen: boolean;
  prefersReducedMotion: boolean;
  onOpen: () => void;
  surfaceReveal: RubyMotionReveal;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyIntroModal({
  data,
  heroImage,
  isOpen,
  prefersReducedMotion,
  onOpen,
  surfaceReveal,
  textReveal,
}: RubyIntroModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="ruby-entry-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Abrir invitacion"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="ruby-entry-modal-backdrop"
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { scale: 1.06, opacity: 0 }}
            animate={prefersReducedMotion ? {} : { scale: 1, opacity: 1 }}
            exit={prefersReducedMotion ? {} : { scale: 1.02, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={heroImage} alt="" />
          </motion.div>
          <motion.div
            className="ruby-entry-modal-overlay"
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="ruby-entry-modal-card"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 28, scale: 0.97, filter: "blur(12px)" }
            }
            animate={
              prefersReducedMotion
                ? {}
                : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
            }
            exit={
              prefersReducedMotion
                ? {}
                : { opacity: 0, y: 22, scale: 0.985, filter: "blur(8px)" }
            }
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="ruby-entry-logo" {...surfaceReveal}>
              <img src={data.hero.logo} alt="Logo de los novios" />
            </motion.div>

            <div className="ruby-entry-copy">
              <motion.span className="ruby-entry-kicker" {...textReveal(0.26, 14)}>
                Nuestra Boda
              </motion.span>
              <motion.h1 {...textReveal(0.34, 18)}>{data.hero.names}</motion.h1>
              <motion.p {...textReveal(0.44, 14)}>{data.hero.date}</motion.p>
              <motion.span {...textReveal(0.52, 14)}>{data.hero.place}</motion.span>
            </div>

            <motion.button
              className="ruby-entry-button"
              type="button"
              onClick={onOpen}
              {...surfaceReveal}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { y: 0, scale: 0.99 }}
            >
              Entrar
            </motion.button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
