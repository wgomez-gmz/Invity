import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type SilverWeddingTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

function renderLines(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

export function SilverWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: SilverWeddingTemplateProps) {
  const heroSlide = data.hero.slides[0];
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];

  return (
    <div className="template-shell template-silver-story-shell">
      <div className="silver-template-topline">
        <Link className="silver-template-back" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="silver-template-pill">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="silver-hero scroll-reveal reveal-soft-rise is-visible">
        <div className="silver-hero-visual">
          <div className="silver-hero-monogram">
            <strong>S&amp;D</strong>
            <span>24 · Octubre · 2026</span>
          </div>

          <article className="silver-stack-card silver-stack-card-main silver-stack-card-solo">
            <img src={heroSlide.image} alt={heroSlide.alt} />
          </article>
        </div>
      </section>

      <section className="silver-quote-section scroll-reveal reveal-soft-rise">
        <div className="silver-quote-shell">
          <div className="silver-quote-copy">
            <span className="silver-section-kicker">{data.quote.kicker}</span>
            <blockquote>{data.quote.text}</blockquote>
            <p>{data.quote.note}</p>
          </div>

          <div className="silver-quote-photo">
            <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
          </div>
        </div>
      </section>

      <section className="silver-section scroll-reveal reveal-bloom">
        <article className="silver-info-card">
          <span className="silver-section-kicker">{data.invitation.title}</span>
          <header className="silver-info-header">
            <h2>{data.invitation.names[0]}</h2>
            <span>&</span>
            <h2>{data.invitation.names[1]}</h2>
          </header>
          <p>{data.invitation.copy}</p>
          <div className="silver-info-date">
            <strong>{data.invitation.day}</strong>
            <span>{data.invitation.date}</span>
          </div>
        </article>
      </section>

      <section className="silver-section scroll-reveal reveal-veil">
        <div className="silver-parents-heading">
          <h3>{data.parents.heading}</h3>
        </div>

        <div className="silver-parents-grid">
          <article className="silver-parent-card">
            <div className="silver-parent-icon" aria-hidden="true">
              <img src={data.parents.bride.icon} alt="" className="silver-parent-icon-image" />
            </div>
            <span className="silver-parent-side">{data.parents.bride.label}</span>
            <p>{renderLines(data.parents.bride.lines)}</p>
          </article>

          <article className="silver-parent-card">
            <div className="silver-parent-icon" aria-hidden="true">
              <img src={data.parents.groom.icon} alt="" className="silver-parent-icon-image" />
            </div>
            <span className="silver-parent-side">{data.parents.groom.label}</span>
            <p>{renderLines(data.parents.groom.lines)}</p>
          </article>
        </div>
      </section>

      <section className="silver-countdown-section scroll-reveal reveal-rise-strong">
        <div className="silver-countdown-background">
          <img src={data.countdown.background} alt="" />
          <div className="silver-countdown-overlay" aria-hidden="true" />
        </div>

        <div className="silver-countdown-content">
          <span className="silver-countdown-kicker">{data.countdown.kicker}</span>
          <div className="silver-countdown-grid">
            {data.countdown.items.map((item) => (
              <article key={item.label} className="silver-countdown-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {[
        { section: data.ceremony, activeIndex: runtime.activeChurchSlide },
        { section: data.reception, activeIndex: runtime.activeReceptionSlide, reverse: true },
      ].map(({ section, activeIndex, reverse }) => {
        const showSupportImage = false;

        return (
          <section
            key={section.title}
            className={`silver-location-section scroll-reveal ${reverse ? "reveal-drift-right" : "reveal-drift-left"}`}
          >
            <div className="silver-location-heading">
              <span className="silver-section-kicker">{section.sectionLabel}</span>
              <h3>{section.title}</h3>
            </div>

            <div className={`silver-location-grid${reverse ? " silver-location-grid-reverse" : ""}`}>
              <div className={`silver-location-visual${showSupportImage ? "" : " silver-location-visual-single"}`}>
                <div className="silver-location-carousel" aria-label={`Fotos de ${section.title.toLowerCase()}`}>
                  {section.slides.map((slide, index) => (
                    <img
                      key={slide.alt}
                      className={index === activeIndex ? "silver-location-image silver-location-image-active" : "silver-location-image"}
                      src={slide.image}
                      alt={slide.alt}
                    />
                  ))}
                </div>

                {showSupportImage ? (
                  <div className="silver-location-photo">
                    <img src={section.supportImage} alt={`Imagen complementaria de ${section.title.toLowerCase()}`} />
                  </div>
                ) : null}
              </div>

              <article className="silver-location-card">
                <p className="silver-location-kicker">{section.venueType}</p>
                <h4>{section.venueName}</h4>
                <p className="silver-location-time">{section.time}</p>
                <p className="silver-location-address">{renderLines(section.addressLines)}</p>
                <button className="silver-map-button" type="button">Ver mapa</button>
              </article>
            </div>
          </section>
        );
      })}

      <section className="silver-padrinos-section scroll-reveal reveal-curtain">
        <div className="silver-location-heading">
          <span className="silver-section-kicker">{data.padrinos.kicker}</span>
          <h3>{data.padrinos.heading}</h3>
        </div>

        <div className="silver-padrinos-shell">
          <button
            className="silver-padrinos-nav"
            type="button"
            aria-label="Padrino anterior"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current - 1 + data.padrinos.slides.length) % data.padrinos.slides.length)}
          >
            {"<"}
          </button>

          <article className="silver-padrinos-card">
            <div className="silver-padrinos-photo">
              {data.padrinos.slides.map((slide, index) => (
                <img
                  key={slide.alt}
                  className={index === runtime.activePadrinosSlide ? "silver-padrinos-image silver-padrinos-image-active" : "silver-padrinos-image"}
                  src={slide.image}
                  alt={slide.alt}
                />
              ))}
            </div>

            <div className="silver-padrinos-copy">
              <span>{padrinoSlide.title}</span>
              <h4>{padrinoSlide.names}</h4>
            </div>
          </article>

          <button
            className="silver-padrinos-nav"
            type="button"
            aria-label="Siguiente padrino"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current + 1) % data.padrinos.slides.length)}
          >
            {">"}
          </button>
        </div>
      </section>

      <section className="silver-details-section scroll-reveal reveal-bloom">
        <article className="silver-detail-card">
          <span className="silver-section-kicker">{data.details.dressCode.kicker}</span>
          <h3>{data.details.dressCode.title}</h3>
          <div className="silver-detail-illustration">
            <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
          </div>
          <p>{data.details.dressCode.note}</p>
        </article>

        <article className="silver-detail-card">
          <span className="silver-section-kicker">{data.details.gifts.kicker}</span>
          <h3>{data.details.gifts.title}</h3>
          <p className="silver-gift-copy">{data.details.gifts.copy}</p>

          <div className="silver-gifts-grid">
            <article className="silver-gift-option">
              <div className="silver-gift-logo">
                <img src={data.details.gifts.liverpoolLogo} alt="Liverpool" />
              </div>
              <strong>{data.details.gifts.eventCode}</strong>
              <button className="silver-map-button" type="button">Ver regalos</button>
            </article>

            <article className="silver-gift-option">
              <div className="silver-gift-logo silver-gift-icon">
                <img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" />
              </div>
              <strong>Lluvia de Sobres</strong>
            </article>
          </div>
        </article>
      </section>

      <section className="silver-rsvp-section scroll-reveal reveal-soft-rise">
        <div className="silver-location-heading">
          <span className="silver-section-kicker">{data.rsvp.kicker}</span>
          <h3>{data.rsvp.title}</h3>
        </div>

        <div className="silver-rsvp-layout">
          <article className="silver-rsvp-card">
            <div className="silver-rsvp-photo">
              <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
            </div>
            <div className="silver-rsvp-copy">
              <p>Invitacion para</p>
              <h4>{data.rsvp.invitationLabel}</h4>
              <strong>{data.rsvp.familyName}</strong>
              <a
                className="silver-rsvp-whatsapp"
                href={data.rsvp.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                {data.rsvp.whatsappLabel ?? "Confirmar"}
              </a>
              <span>{data.rsvp.guestCount}</span>
            </div>
          </article>
        </div>
      </section>

      <footer className="silver-footer scroll-reveal reveal-veil">
        <span>{data.closing.accent}</span>
        <strong>{data.closing.footerText}</strong>
      </footer>
    </div>
  );
}
