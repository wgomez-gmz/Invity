import { motion } from "motion/react";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type GoldHeroSectionProps = {
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
  heroImage: string;
  heroAlt: string;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldHeroSection({
  data,
  runtime,
  heroImage,
  heroAlt,
  hoverLift,
  tapPress,
  goldReveal,
}: GoldHeroSectionProps) {
  return (
    <section className="gold-hero scroll-reveal reveal-soft-rise is-visible">
      <div className="gold-hero-visual">
        <div className="gold-hero-monogram">
          <strong>S&amp;D</strong>
          <span>{data.invitation.date}</span>
        </div>

        <motion.article className="gold-stack-card gold-stack-card-main" {...goldReveal(0.12, 18, 0.99)}>
          <img src={heroImage} alt={heroAlt} />
        </motion.article>
        <motion.article className="gold-stack-card gold-stack-card-accent" {...goldReveal(0.24, 22, 0.985)}>
          <img src={data.hero.supportImage} alt="Detalle romantico de la pareja en una toma editorial" />
        </motion.article>

        <div className="gold-slide-indicators" aria-label="Galeria principal">
          {data.hero.slides.map((slide, index) => (
            <motion.button
              key={slide.alt}
              type="button"
              className={
                index === runtime.activeWeddingSlide
                  ? "gold-indicator gold-indicator-active"
                  : "gold-indicator"
              }
              aria-label={`Ir a foto ${index + 1}`}
              onClick={() => runtime.setActiveWeddingSlide(index)}
              whileHover={hoverLift}
              whileTap={tapPress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
