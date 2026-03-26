import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingBackgroundSpec,
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type RubyWeddingTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

function renderAddress(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

function renderParentLines(lines: string[]) {
  return lines.map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));
}

function resolveBackgroundValue(spec?: WeddingBackgroundSpec): string | undefined {
  if (!spec) {
    return undefined;
  }

  if (spec.type === "color" || spec.type === "gradient" || spec.type === "layers") {
    return spec.value;
  }

  const position = spec.position ?? "center center";
  const size = spec.size ?? "cover";
  const repeat = spec.repeat ?? "no-repeat";
  const attachment = spec.attachment ? ` ${spec.attachment}` : "";
  const imageLayer = `url(${spec.src}) ${position} / ${size} ${repeat}${attachment}`.trim();

  return spec.overlay ? `${spec.overlay}, ${imageLayer}` : imageLayer;
}

function resolveBackgroundStyle(spec?: WeddingBackgroundSpec): CSSProperties | undefined {
  const background = resolveBackgroundValue(spec);

  if (!background) {
    return undefined;
  }

  return {
    background,
  } as CSSProperties;
}

export function RubyWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: RubyWeddingTemplateProps) {
  const heroSlide = data.hero.slides[runtime.activeWeddingSlide];
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];
  const [isEntryModalOpen, setIsEntryModalOpen] = useState(true);
  const appearance = data.appearance;
  const sharedSectionsStyle = resolveBackgroundStyle(appearance?.sharedSectionBackground);
  const rubyShellStyle = {
    ...(appearance?.palette?.sage ? { "--ruby-sage": appearance.palette.sage } : {}),
    ...(appearance?.palette?.sageSoft ? { "--ruby-sage-soft": appearance.palette.sageSoft } : {}),
    ...(appearance?.palette?.ivory ? { "--ruby-ivory": appearance.palette.ivory } : {}),
    ...(appearance?.palette?.gold ? { "--ruby-gold": appearance.palette.gold } : {}),
    ...(appearance?.palette?.ink ? { "--ruby-ink": appearance.palette.ink } : {}),
    ...(appearance?.surfaces?.shellBaseColor ? { "--ruby-shell-base-color": appearance.surfaces.shellBaseColor } : {}),
    ...(appearance?.surfaces?.shellTopBackground ? { "--ruby-shell-top-background": appearance.surfaces.shellTopBackground } : {}),
    ...(appearance?.surfaces?.heroBackground ? { "--ruby-hero-background": appearance.surfaces.heroBackground } : {}),
    ...(appearance?.surfaces?.heroOverlay ? { "--ruby-hero-overlay": appearance.surfaces.heroOverlay } : {}),
    ...(appearance?.surfaces?.entryModalOverlay ? { "--ruby-entry-modal-overlay": appearance.surfaces.entryModalOverlay } : {}),
    ...(appearance?.surfaces?.entryCardBackground ? { "--ruby-entry-card-background": appearance.surfaces.entryCardBackground } : {}),
    ...(appearance?.surfaces?.heroEventCardBackground ? { "--ruby-hero-event-card-background": appearance.surfaces.heroEventCardBackground } : {}),
    ...(appearance?.surfaces?.heroShotOverlay ? { "--ruby-hero-shot-overlay": appearance.surfaces.heroShotOverlay } : {}),
    ...(appearance?.surfaces?.countdownOverlay ? { "--ruby-countdown-overlay": appearance.surfaces.countdownOverlay } : {}),
    ...(appearance?.surfaces?.countdownCardBackground ? { "--ruby-countdown-card-background": appearance.surfaces.countdownCardBackground } : {}),
    ...(appearance?.surfaces?.locationStageBackground ? { "--ruby-location-stage-background": appearance.surfaces.locationStageBackground } : {}),
    ...(appearance?.surfaces?.locationStageOverlay ? { "--ruby-location-stage-overlay": appearance.surfaces.locationStageOverlay } : {}),
    ...(appearance?.surfaces?.locationUnderlayFilter ? { "--ruby-location-underlay-filter": appearance.surfaces.locationUnderlayFilter } : {}),
    ...(appearance?.surfaces?.locationCardTopbarBackground ? { "--ruby-location-card-topbar-background": appearance.surfaces.locationCardTopbarBackground } : {}),
    ...(appearance?.surfaces?.locationCardBodyBackground ? { "--ruby-location-card-body-background": appearance.surfaces.locationCardBodyBackground } : {}),
    ...(appearance?.surfaces?.invitationBandBackground ? { "--ruby-invitation-band-background": appearance.surfaces.invitationBandBackground } : {}),
    ...(appearance?.surfaces?.invitationCardBackground ? { "--ruby-invitation-card-background": appearance.surfaces.invitationCardBackground } : {}),
    ...(appearance?.surfaces?.invitationOrnamentOpacity ? { "--ruby-invitation-ornament-opacity": appearance.surfaces.invitationOrnamentOpacity } : {}),
    ...(appearance?.surfaces?.padrinosOverlayBackground ? { "--ruby-padrinos-overlay-background": appearance.surfaces.padrinosOverlayBackground } : {}),
    ...(appearance?.surfaces?.rsvpCardBackground ? { "--ruby-rsvp-card-background": appearance.surfaces.rsvpCardBackground } : {}),
    ...(appearance?.surfaces?.rsvpPhotoFrameBackground ? { "--ruby-rsvp-photo-frame-background": appearance.surfaces.rsvpPhotoFrameBackground } : {}),
    ...(appearance?.surfaces?.closingTopbandBackground ? { "--ruby-closing-topband-background": appearance.surfaces.closingTopbandBackground } : {}),
    ...(appearance?.surfaces?.closingFooterBackground ? { "--ruby-closing-footer-background": appearance.surfaces.closingFooterBackground } : {}),
  } as CSSProperties;

  useEffect(() => {
    if (!isEntryModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isEntryModalOpen]);

  return (
    <div className="template-shell template-ruby-modal-shell" style={rubyShellStyle}>
      {isEntryModalOpen ? (
        <div className="ruby-entry-modal" role="dialog" aria-modal="true" aria-label="Abrir invitacion">
          <div className="ruby-entry-modal-backdrop" aria-hidden="true">
            <img src={heroSlide.image} alt="" />
          </div>
          <div className="ruby-entry-modal-overlay" aria-hidden="true" />

          <div className="ruby-entry-modal-card">
            <div className="ruby-entry-logo">
              <img src={data.hero.logo} alt="Logo de los novios" />
            </div>

            <div className="ruby-entry-copy">
              <span className="ruby-entry-kicker">Nuestra Boda</span>
              <h1>{data.hero.names}</h1>
              <p>{data.hero.date}</p>
              <span>{data.hero.place}</span>
            </div>

            <button
              className="ruby-entry-button"
              type="button"
              onClick={() => setIsEntryModalOpen(false)}
            >
              Entrar
            </button>
          </div>
        </div>
      ) : null}

      <div className="template-topline">
        <Link className="template-back template-back-light" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="template-pill template-pill-light">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="cinema-modal scroll-reveal reveal-fade-scale is-visible">
        <div className="cinema-slideshow-layer" aria-hidden="true">
          {data.hero.slides.map((slide, index) => (
            <img
              key={slide.alt}
              className={index === runtime.activeWeddingSlide ? "cinema-slide cinema-slide-active" : "cinema-slide"}
              src={slide.image}
              alt=""
            />
          ))}
          <div className="cinema-slideshow-overlay" />
        </div>

        <div className="cinema-modal-copy">
          <div className="cinema-logo-lockup">
            <img src={data.hero.logo} alt="Logo de los novios" />
          </div>

          <div className="cinema-event-card">
            <p className="cinema-event-kicker">Save the date</p>
            <h2>{data.hero.names}</h2>
            <p>{data.hero.date}</p>
            <span>{data.hero.place}</span>
          </div>

          <div className="cinema-slide-indicators" aria-label="Galeria principal">
            {data.hero.slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={index === runtime.activeWeddingSlide ? "cinema-indicator cinema-indicator-active" : "cinema-indicator"}
                aria-label={`Ir a foto ${index + 1}`}
                onClick={() => runtime.setActiveWeddingSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="cinema-gallery">
          <article className="cinema-shot cinema-shot-main cinema-shot-featured parallax-shell" data-parallax-speed="0.45">
            <img src={heroSlide.image} alt={heroSlide.alt} />
          </article>

          <div className="cinema-shot-stack">
            <article className="cinema-shot cinema-shot-vertical parallax-shell" data-parallax-speed="0.3">
              <img src={data.hero.supportImage} alt="Detalle romantico de la pareja en una toma editorial" />
            </article>

            <article className="cinema-shot cinema-shot-detail parallax-shell" data-parallax-speed="0.25">
              <img src={data.hero.detailImage} alt="Escena cinematografica de la sesion de boda" />
            </article>
          </div>
        </div>
      </section>

      <div className="ruby-shared-background-shell" style={sharedSectionsStyle}>
      <section
        className="quote-story-section ruby-surface-section scroll-reveal reveal-soft-rise"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.quote)}
      >
        <div className="quote-story-copy">
          <span className="quote-story-kicker">{data.quote.kicker}</span>
          <blockquote className="quote-story-text">{data.quote.text}</blockquote>
          <p className="quote-story-note">{data.quote.note}</p>
        </div>

        <div className="quote-story-photo-frame">
          <div className="quote-story-photo-card parallax-shell" data-parallax-speed="0.35">
            <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
          </div>
        </div>
      </section>

      <section
        className="invitation-info-section ruby-surface-section scroll-reveal reveal-bloom"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.invitation)}
      >
        <div className="invitation-info-band" aria-hidden="true" />
        <article className="invitation-info-card">
          <div className="invitation-info-ornament invitation-info-ornament-left" aria-hidden="true" />
          <div className="invitation-info-ornament invitation-info-ornament-right" aria-hidden="true" />

          <header className="invitation-info-header">
            <h2 className="invitation-couple-name">{data.invitation.names[0]}</h2>
            <div className="invitation-divider">
              <span />
              <strong>&</strong>
              <span />
            </div>
            <h2 className="invitation-couple-name">{data.invitation.names[1]}</h2>
          </header>

          <p className="invitation-info-copy">{data.invitation.copy}</p>

          <div className="invitation-date-block">
            <span className="invitation-day-label">{data.invitation.day}</span>
            <span className="invitation-date-line" />
            <p className="invitation-date">{data.invitation.date}</p>
          </div>
        </article>
      </section>

      <section
        className="parents-section ruby-surface-section scroll-reveal reveal-veil"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.parents)}
      >
        <div className="parents-heading">
          <h3>{data.parents.heading}</h3>
        </div>

        <div className="parents-grid">
          <article className="parent-card">
            <div className="parent-icon" aria-hidden="true">
              <img src={data.parents.bride.icon} alt="" className="parent-icon-image" />
            </div>
            <p>{renderParentLines(data.parents.bride.lines)}</p>
          </article>

          <div className="parents-divider-column" aria-hidden="true">
            <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>A</span><span>-</span>
          </div>

          <div className="parents-divider-column" aria-hidden="true">
            <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>O</span><span>-</span>
          </div>

          <article className="parent-card">
            <div className="parent-icon" aria-hidden="true">
              <img src={data.parents.groom.icon} alt="" className="parent-icon-image" />
            </div>
            <p>{renderParentLines(data.parents.groom.lines)}</p>
          </article>
        </div>
      </section>

      <section className="countdown-section scroll-reveal reveal-rise-strong">
        <div className="countdown-background">
          <img src={data.countdown.background} alt="" />
          <div className="countdown-overlay" aria-hidden="true" />
        </div>

        <div className="countdown-content">
          <span className="countdown-kicker">{data.countdown.kicker}</span>
          <div className="countdown-grid">
            {data.countdown.items.map((item) => (
              <article key={item.label} className="countdown-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="location-section ruby-surface-section scroll-reveal reveal-drift-left"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.location)}
      >
        <div className="location-heading">
          <span>{data.ceremony.sectionLabel}</span>
        </div>

        <div className="location-stage">
          <div className="location-carousel" aria-label="Fotos de la iglesia">
            {data.ceremony.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={index === runtime.activeChurchSlide ? "location-carousel-image location-carousel-image-active" : "location-carousel-image"}
                src={slide.image}
                alt={slide.alt}
              />
            ))}
          </div>

          <div className="location-underlay-photo" aria-hidden="true">
            <img src={data.ceremony.supportImage} alt="" />
          </div>

          <article className="location-card">
            <div className="location-card-topbar">{data.ceremony.title}</div>
            <div className="location-card-body">
              <div className="location-card-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M32 12v16" />
                  <path d="M24 20h16" />
                  <path d="M20 52V30h24v22" />
                  <path d="M16 52h32" />
                  <path d="M24 30l8-8 8 8" />
                </svg>
              </div>
              <p className="location-card-kicker">{data.ceremony.venueType}</p>
              <h3>{data.ceremony.venueName}</h3>
              <p className="location-card-time">{data.ceremony.time}</p>
              <p className="location-card-address">{renderAddress(data.ceremony.addressLines)}</p>
              <button className="location-map-button" type="button">Ver mapa</button>
            </div>
          </article>
        </div>
      </section>

      <section
        className="location-section reception-section ruby-surface-section scroll-reveal reveal-drift-right"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.location)}
      >
        <div className="location-stage">
          <div className="location-carousel" aria-label="Fotos de la recepcion">
            {data.reception.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={index === runtime.activeReceptionSlide ? "location-carousel-image location-carousel-image-active" : "location-carousel-image"}
                src={slide.image}
                alt={slide.alt}
              />
            ))}
          </div>

          <div className="location-underlay-photo" aria-hidden="true">
            <img src={data.reception.supportImage} alt="" />
          </div>

          <article className="location-card">
            <div className="location-card-topbar">{data.reception.title}</div>
            <div className="location-card-body">
              <div className="location-card-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64">
                  <path d="M16 48h32" />
                  <path d="M26 18h12" />
                  <path d="M22 18c0 9 4 16 10 16s10-7 10-16" />
                  <path d="M28 34v14" />
                  <path d="M36 34v14" />
                  <path d="M22 18h20" />
                </svg>
              </div>
              <p className="location-card-kicker">{data.reception.venueType}</p>
              <h3>{data.reception.venueName}</h3>
              <p className="location-card-time">{data.reception.time}</p>
              <p className="location-card-address">{renderAddress(data.reception.addressLines)}</p>
              <button className="location-map-button" type="button">Ver mapa</button>
            </div>
          </article>
        </div>
      </section>

      <section
        className="padrinos-section ruby-surface-section scroll-reveal reveal-curtain"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.padrinos)}
      >
        <div className="padrinos-heading">
          <h3>{data.padrinos.heading}</h3>
        </div>

        <div className="padrinos-card">
          <button
            className="padrinos-nav padrinos-nav-prev"
            type="button"
            aria-label="Padrino anterior"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current - 1 + data.padrinos.slides.length) % data.padrinos.slides.length)}
          >
            ‹
          </button>

          <div className="padrinos-slider">
            {data.padrinos.slides.map((slide, index) => (
              <img
                key={slide.alt}
                className={index === runtime.activePadrinosSlide ? "padrinos-image padrinos-image-active" : "padrinos-image"}
                src={slide.image}
                alt={slide.alt}
              />
            ))}

            <div className="padrinos-overlay">
              <p className="padrinos-role">{padrinoSlide.title}</p>
              <h4>{padrinoSlide.names}</h4>
            </div>
          </div>

          <button
            className="padrinos-nav padrinos-nav-next"
            type="button"
            aria-label="Siguiente padrino"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current + 1) % data.padrinos.slides.length)}
          >
            ›
          </button>
        </div>
      </section>

      <section
        className="details-section ruby-surface-section scroll-reveal reveal-bloom"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.details)}
      >
        <article className="dresscode-section">
          <div className="details-heading"><h3>{data.details.dressCode.kicker}</h3></div>
          <p className="dresscode-label">{data.details.dressCode.title}</p>
          <div className="dresscode-illustration">
            <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
          </div>
          <p className="dresscode-note">{data.details.dressCode.note}</p>
        </article>

        <article className="gift-section">
          <div className="details-heading"><h3>{data.details.gifts.kicker}</h3></div>
          <div className="gift-copy-block">
            {data.details.gifts.giftIllustration ? (
              <div className="gift-copy-illustration" aria-hidden="true">
                <img src={data.details.gifts.giftIllustration} alt="" />
              </div>
            ) : null}
            <p>{data.details.gifts.copy}</p>
          </div>

          <div className="gift-options-grid">
            <article className="gift-option-card">
              <div className="gift-option-logo"><img src={data.details.gifts.liverpoolLogo} alt="Liverpool" /></div>
              <h4>Evento</h4>
              <p>{data.details.gifts.eventCode}</p>
              <button className="gift-option-button" type="button">Ver regalos</button>
            </article>

            <article className="gift-option-card">
              <div className="gift-option-icon"><img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" /></div>
              <h4>Lluvia de Sobres</h4>
            </article>
          </div>
        </article>
      </section>

      <section
        className="rsvp-section ruby-surface-section scroll-reveal reveal-soft-rise"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.rsvp)}
      >
        <div className="rsvp-heading"><h3>{data.rsvp.title}</h3></div>

        <div className="rsvp-layout">
          <article className="rsvp-invitation-card">
            <div className="rsvp-photo-frame">
              <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
            </div>

            <div className="rsvp-card-copy">
              <p className="rsvp-card-label">Invitacion para</p>
              <h4>Familia</h4>
              <p className="rsvp-card-family">Montiel Leiva</p>
              <p className="rsvp-card-count-label">Total de invitados:</p>
              <strong>4</strong>
              <p className="rsvp-card-note">{data.rsvp.guestCount}</p>
            </div>
          </article>

          <article className="rsvp-form-panel">
            <p className="rsvp-intro">
              Favor de confirmar su presencia, a mas tardar un mes antes del evento.
              <strong> Muchas gracias.</strong>
            </p>
            <p className="rsvp-subcopy">Completa y envia el siguiente formulario.</p>

            <form className="rsvp-form">
              <fieldset className="rsvp-fieldset">
                <legend>Confirmar asistencia:</legend>
                <label className="rsvp-option"><input type="radio" name="attendance" defaultChecked /><span>Si asistiremos.</span></label>
                <label className="rsvp-option"><input type="radio" name="attendance" /><span>Lo siento, no podremos asistir.</span></label>
              </fieldset>

              <fieldset className="rsvp-fieldset">
                <legend>Eres familiar o amigo/a de:</legend>
                <label className="rsvp-option"><input type="radio" name="side" defaultChecked /><span>Yuliana</span></label>
                <label className="rsvp-option"><input type="radio" name="side" /><span>Jaime</span></label>
              </fieldset>

              <fieldset className="rsvp-fieldset">
                <legend>Numero de asistentes:</legend>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>4 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>3 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" defaultChecked /><span>2 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>1 Adulto</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>Lo siento, no podremos asistir</span></label>
              </fieldset>

              <label className="rsvp-message-label" htmlFor="rsvp-message">{data.rsvp.dedicationLabel}</label>
              <textarea id="rsvp-message" className="rsvp-textarea" rows={5} placeholder="Escribe aqui tu mensaje..." />
              <button className="rsvp-submit" type="submit">Confirmar</button>
            </form>
          </article>
        </div>
      </section>

      <footer
        className="invitation-closing ruby-surface-section scroll-reveal reveal-veil"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.closing)}
      >
        <div className="invitation-closing-topband" aria-hidden="true" />
        <div className="invitation-closing-message">
          <p>{data.closing.message}</p>
          <span>{data.closing.accent}</span>
        </div>
        <div className="invitation-closing-footer">
          <strong>{data.closing.footerText}</strong>
        </div>
      </footer>
      </div>
    </div>
  );
}
