import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type GoldWeddingTemplateProps = {
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

export function GoldWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: GoldWeddingTemplateProps) {
  const heroSlide = data.hero.slides[runtime.activeWeddingSlide];
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];

  return (
    <div className="template-shell template-gold-story-shell">
      <div className="gold-template-topline">
        <Link className="gold-template-back" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="gold-template-pill">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="gold-hero scroll-reveal reveal-soft-rise is-visible">
        <div className="gold-hero-visual">
          <div className="gold-hero-monogram">
            <strong>S&amp;D</strong>
            <span>24 · Octubre · 2026</span>
          </div>

          <article className="gold-stack-card gold-stack-card-main">
            <img src={heroSlide.image} alt={heroSlide.alt} />
          </article>
          <article className="gold-stack-card gold-stack-card-accent">
            <img src={data.hero.supportImage} alt="Detalle romantico de la pareja en una toma editorial" />
          </article>

          <div className="gold-slide-indicators" aria-label="Galeria principal">
            {data.hero.slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={index === runtime.activeWeddingSlide ? "gold-indicator gold-indicator-active" : "gold-indicator"}
                aria-label={`Ir a foto ${index + 1}`}
                onClick={() => runtime.setActiveWeddingSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="gold-quote-section scroll-reveal reveal-soft-rise">
        <div className="gold-quote-shell">
          <div className="gold-quote-copy">
            <span className="gold-section-kicker">{data.quote.kicker}</span>
            <blockquote>{data.quote.text}</blockquote>
            <p>{data.quote.note}</p>
          </div>

          <div className="gold-quote-photo">
            <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
          </div>
        </div>
      </section>

      <section className="gold-section scroll-reveal reveal-bloom">
        <article className="gold-info-card">
          <span className="gold-section-kicker">{data.invitation.title}</span>
          <header className="gold-info-header">
            <h2>{data.invitation.names[0]}</h2>
            <span>&</span>
            <h2>{data.invitation.names[1]}</h2>
          </header>
          <p>{data.invitation.copy}</p>
          <div className="gold-info-date">
            <strong>{data.invitation.day}</strong>
            <span>{data.invitation.date}</span>
          </div>
        </article>
      </section>

      <section className="gold-section scroll-reveal reveal-veil">
        <div className="gold-parents-heading">
          <h3>{data.parents.heading}</h3>
        </div>

        <div className="gold-parents-grid">
          <article className="gold-parent-card">
            <div className="gold-parent-icon" aria-hidden="true">
              <img src={data.parents.bride.icon} alt="" className="gold-parent-icon-image" />
            </div>
            <span className="gold-parent-side">{data.parents.bride.label}</span>
            <p>{renderLines(data.parents.bride.lines)}</p>
          </article>

          <article className="gold-parent-card">
            <div className="gold-parent-icon" aria-hidden="true">
              <img src={data.parents.groom.icon} alt="" className="gold-parent-icon-image" />
            </div>
            <span className="gold-parent-side">{data.parents.groom.label}</span>
            <p>{renderLines(data.parents.groom.lines)}</p>
          </article>
        </div>
      </section>

      <section className="gold-countdown-section scroll-reveal reveal-rise-strong">
        <div className="gold-countdown-background">
          <img src={data.countdown.background} alt="" />
          <div className="gold-countdown-overlay" aria-hidden="true" />
        </div>

        <div className="gold-countdown-content">
          <span className="gold-countdown-kicker">{data.countdown.kicker}</span>
          <div className="gold-countdown-grid">
            {data.countdown.items.map((item) => (
              <article key={item.label} className="gold-countdown-card">
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
          className={`gold-location-section scroll-reveal ${reverse ? "reveal-drift-right" : "reveal-drift-left"}`}
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
                    className={index === activeIndex ? "gold-location-image gold-location-image-active" : "gold-location-image"}
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

            <article className="gold-location-card">
              <p className="gold-location-kicker">{section.venueType}</p>
              <h4>{section.venueName}</h4>
              <p className="gold-location-time">{section.time}</p>
              <p className="gold-location-address">{renderLines(section.addressLines)}</p>
              <button className="gold-map-button" type="button">Ver mapa</button>
            </article>
          </div>
        </section>
        );
      })}

      <section className="gold-padrinos-section scroll-reveal reveal-curtain">
        <div className="gold-location-heading">
          <span className="gold-section-kicker">{data.padrinos.kicker}</span>
          <h3>{data.padrinos.heading}</h3>
        </div>

        <div className="gold-padrinos-shell">
          <button
            className="gold-padrinos-nav"
            type="button"
            aria-label="Padrino anterior"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current - 1 + data.padrinos.slides.length) % data.padrinos.slides.length)}
          >
            {"<"}
          </button>

          <article className="gold-padrinos-card">
            <div className="gold-padrinos-photo">
              {data.padrinos.slides.map((slide, index) => (
                <img
                  key={slide.alt}
                  className={index === runtime.activePadrinosSlide ? "gold-padrinos-image gold-padrinos-image-active" : "gold-padrinos-image"}
                  src={slide.image}
                  alt={slide.alt}
                />
              ))}
            </div>

            <div className="gold-padrinos-copy">
              <span>{padrinoSlide.title}</span>
              <h4>{padrinoSlide.names}</h4>
            </div>
          </article>

          <button
            className="gold-padrinos-nav"
            type="button"
            aria-label="Siguiente padrino"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current + 1) % data.padrinos.slides.length)}
          >
            {">"}
          </button>
        </div>
      </section>

      <section className="gold-details-section scroll-reveal reveal-bloom">
        <article className="gold-detail-card">
          <span className="gold-section-kicker">{data.details.dressCode.kicker}</span>
          <h3>{data.details.dressCode.title}</h3>
          <div className="gold-detail-illustration">
            <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
          </div>
          <p>{data.details.dressCode.note}</p>
        </article>

        <article className="gold-detail-card">
          <span className="gold-section-kicker">{data.details.gifts.kicker}</span>
          <h3>{data.details.gifts.title}</h3>
          <p className="gold-gift-copy">{data.details.gifts.copy}</p>

          <div className="gold-gifts-grid">
            <article className="gold-gift-option">
              <div className="gold-gift-logo">
                <img src={data.details.gifts.liverpoolLogo} alt="Liverpool" />
              </div>
              <strong>{data.details.gifts.eventCode}</strong>
              <button className="gold-map-button" type="button">Ver regalos</button>
            </article>

            <article className="gold-gift-option">
              <div className="gold-gift-logo gold-gift-icon">
                <img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" />
              </div>
              <strong>Lluvia de Sobres</strong>
            </article>
          </div>
        </article>
      </section>

      <section className="gold-rsvp-section scroll-reveal reveal-soft-rise">
        <div className="gold-location-heading">
          <span className="gold-section-kicker">{data.rsvp.kicker}</span>
          <h3>{data.rsvp.title}</h3>
        </div>

        <div className="gold-rsvp-layout">
          <article className="gold-rsvp-card">
            <div className="gold-rsvp-photo">
              <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
            </div>
            <div className="gold-rsvp-copy">
              <p>Invitacion para</p>
              <h4>{data.rsvp.invitationLabel}</h4>
              <strong>{data.rsvp.familyName}</strong>
              <span>{data.rsvp.guestCount}</span>
            </div>
          </article>

          <article className="gold-rsvp-form-shell">
            <p className="gold-rsvp-intro">{data.rsvp.intro}</p>

            <form className="gold-rsvp-form">
              <fieldset className="gold-rsvp-fieldset">
                <legend>Confirmar asistencia:</legend>
                <label className="gold-rsvp-option"><input type="radio" name="attendance-gold" defaultChecked /><span>Si asistiremos.</span></label>
                <label className="gold-rsvp-option"><input type="radio" name="attendance-gold" /><span>Lo siento, no podremos asistir.</span></label>
              </fieldset>

              <fieldset className="gold-rsvp-fieldset">
                <legend>Eres familiar o amigo/a de:</legend>
                <label className="gold-rsvp-option"><input type="radio" name="side-gold" defaultChecked /><span>Yuliana</span></label>
                <label className="gold-rsvp-option"><input type="radio" name="side-gold" /><span>Jaime</span></label>
              </fieldset>

              <fieldset className="gold-rsvp-fieldset">
                <legend>Numero de asistentes:</legend>
                <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>4 Adultos</span></label>
                <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>3 Adultos</span></label>
                <label className="gold-rsvp-option"><input type="radio" name="guests-gold" defaultChecked /><span>2 Adultos</span></label>
                <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>1 Adulto</span></label>
              </fieldset>

              <label className="gold-rsvp-message-label" htmlFor="rsvp-message-gold">{data.rsvp.dedicationLabel}</label>
              <textarea id="rsvp-message-gold" className="gold-rsvp-textarea" rows={5} placeholder="Escribe aqui tu mensaje..." />
              <button className="gold-rsvp-submit" type="submit">Confirmar</button>
            </form>
          </article>
        </div>
      </section>

      <footer className="gold-footer scroll-reveal reveal-veil">
        <p>{data.closing.message}</p>
        <span>{data.closing.accent}</span>
        <strong>{data.closing.footerText}</strong>
      </footer>
    </div>
  );
}
