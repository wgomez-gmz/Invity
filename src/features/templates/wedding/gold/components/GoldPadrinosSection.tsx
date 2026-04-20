import { motion } from "motion/react";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type GoldPadrinosSectionProps = {
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldPadrinosSection({
  data,
  runtime,
  hoverLift,
  tapPress,
  goldReveal,
}: GoldPadrinosSectionProps) {
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];

  return (
    <section className="gold-padrinos-section scroll-reveal reveal-curtain">
      <div className="gold-location-heading">
        <span className="gold-section-kicker">{data.padrinos.kicker}</span>
        <h3>{data.padrinos.heading}</h3>
      </div>

      <div className="gold-padrinos-shell">
        <motion.button
          className="gold-padrinos-nav"
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

        <motion.article className="gold-padrinos-card" {...goldReveal(0.12, 20, 0.99)}>
          <div className="gold-padrinos-photo">
            {data.padrinos.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={
                  index === runtime.activePadrinosSlide
                    ? "gold-padrinos-image gold-padrinos-image-active"
                    : "gold-padrinos-image"
                }
                src={slide.image}
                alt={slide.alt}
              />
            ))}
          </div>

          <div className="gold-padrinos-copy">
            <span>{padrinoSlide.title}</span>
            <h4>{padrinoSlide.names}</h4>
          </div>
        </motion.article>

        <motion.button
          className="gold-padrinos-nav"
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
