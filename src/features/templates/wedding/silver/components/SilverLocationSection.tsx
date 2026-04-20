import type { WeddingLocationSection } from "@/features/templates/wedding/templateTypes";
import { renderLines } from "@/features/templates/wedding/silver/utils";

type SilverLocationSectionProps = {
  section: WeddingLocationSection;
  activeIndex: number;
  reverse?: boolean;
};

export function SilverLocationSection({
  section,
  activeIndex,
  reverse = false,
}: SilverLocationSectionProps) {
  const showSupportImage = false;

  return (
    <section
      className={`silver-location-section scroll-reveal ${
        reverse ? "reveal-drift-right" : "reveal-drift-left"
      }`}
    >
      <div className="silver-location-heading">
        <span className="silver-section-kicker">{section.sectionLabel}</span>
        <h3>{section.title}</h3>
      </div>

      <div className={`silver-location-grid${reverse ? " silver-location-grid-reverse" : ""}`}>
        <div
          className={`silver-location-visual${
            showSupportImage ? "" : " silver-location-visual-single"
          }`}
        >
          <div
            className="silver-location-carousel"
            aria-label={`Fotos de ${section.title.toLowerCase()}`}
          >
            {section.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={
                  index === activeIndex
                    ? "silver-location-image silver-location-image-active"
                    : "silver-location-image"
                }
                src={slide.image}
                alt={slide.alt}
              />
            ))}
          </div>

          {showSupportImage ? (
            <div className="silver-location-photo">
              <img
                src={section.supportImage}
                alt={`Imagen complementaria de ${section.title.toLowerCase()}`}
              />
            </div>
          ) : null}
        </div>

        <article className="silver-location-card">
          <p className="silver-location-kicker">{section.venueType}</p>
          <h4>{section.venueName}</h4>
          <p className="silver-location-time">{section.time}</p>
          <p className="silver-location-address">
            {renderLines(section.addressLines)}
          </p>
          <button className="silver-map-button" type="button">
            Ver mapa
          </button>
        </article>
      </div>
    </section>
  );
}
