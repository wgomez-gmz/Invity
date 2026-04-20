import { motion } from "motion/react";
import type { WeddingLocationSection } from "@/features/templates/wedding/templateTypes";
import { renderLines } from "@/features/templates/wedding/gold/utils";

type GoldLocationSectionProps = {
  section: WeddingLocationSection;
  activeIndex: number;
  reverse?: boolean;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldLocationSection({
  section,
  activeIndex,
  reverse = false,
  hoverLift,
  tapPress,
  goldReveal,
}: GoldLocationSectionProps) {
  const showSupportImage = false;

  return (
    <section
      className={`gold-location-section scroll-reveal ${
        reverse ? "reveal-drift-right" : "reveal-drift-left"
      }`}
    >
      <div className="gold-location-heading">
        <span className="gold-section-kicker">{section.sectionLabel}</span>
        <h3>{section.title}</h3>
      </div>

      <div className={`gold-location-grid${reverse ? " gold-location-grid-reverse" : ""}`}>
        <div className={`gold-location-visual${showSupportImage ? "" : " gold-location-visual-single"}`}>
          <div className="gold-location-carousel" aria-label={`Fotos de ${section.title.toLowerCase()}`}>
            {section.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={
                  index === activeIndex
                    ? "gold-location-image gold-location-image-active"
                    : "gold-location-image"
                }
                src={slide.image}
                alt={slide.alt}
              />
            ))}
          </div>

          {showSupportImage ? (
            <div className="gold-location-photo">
              <img src={section.supportImage} alt={`Imagen complementaria de ${section.title.toLowerCase()}`} />
            </div>
          ) : null}
        </div>

        <motion.article className="gold-location-card" {...goldReveal(0.14, 20, 0.99)}>
          <p className="gold-location-kicker">{section.venueType}</p>
          <h4>{section.venueName}</h4>
          <p className="gold-location-time">{section.time}</p>
          <p className="gold-location-address">{renderLines(section.addressLines)}</p>
          <motion.button className="gold-map-button" type="button" whileHover={hoverLift} whileTap={tapPress}>
            Ver mapa
          </motion.button>
        </motion.article>
      </div>
    </section>
  );
}
