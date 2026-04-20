import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const prefersReducedMotion = useReducedMotion();
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

  const textReveal = (delay = 0, y = 22) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, filter: "blur(10px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.42 },
          transition: {
            duration: 0.95,
            delay,
            ease: [0.19, 1, 0.22, 1] as const,
          },
        };

  const surfaceReveal = (delay = 0, y = 28, scale = 0.985) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, scale, filter: "blur(12px)" },
          whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.34 },
          transition: {
            duration: 1.1,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  const slideTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };
  const hoverLift = prefersReducedMotion ? undefined : { y: -2, scale: 1.02 };
  const tapPress = prefersReducedMotion ? undefined : { y: 0, scale: 0.985 };

  return (
    <div className="template-shell template-ruby-modal-shell" style={rubyShellStyle}>
      <AnimatePresence>
        {isEntryModalOpen ? (
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
              <img src={heroSlide.image} alt="" />
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
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.97, filter: "blur(12px)" }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: 22, scale: 0.985, filter: "blur(8px)" }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="ruby-entry-logo" {...surfaceReveal(0.18, 18, 0.99)}>
                <img src={data.hero.logo} alt="Logo de los novios" />
              </motion.div>

              <div className="ruby-entry-copy">
                <motion.span className="ruby-entry-kicker" {...textReveal(0.26, 14)}>Nuestra Boda</motion.span>
                <motion.h1 {...textReveal(0.34, 18)}>{data.hero.names}</motion.h1>
                <motion.p {...textReveal(0.44, 14)}>{data.hero.date}</motion.p>
                <motion.span {...textReveal(0.52, 14)}>{data.hero.place}</motion.span>
              </div>

              <motion.button
                className="ruby-entry-button"
                type="button"
                onClick={() => setIsEntryModalOpen(false)}
                {...surfaceReveal(0.62, 18, 0.985)}
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { y: 0, scale: 0.99 }}
              >
                Entrar
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
          <AnimatePresence mode="sync">
            <motion.img
              key={`${runtime.activeWeddingSlide}-${heroSlide.alt}`}
              className="cinema-slide cinema-slide-active"
              src={heroSlide.image}
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
            <motion.p className="cinema-event-kicker" {...textReveal(0.34, 12)}>Save the date</motion.p>
            <motion.h2 {...textReveal(0.42, 18)}>{data.hero.names}</motion.h2>
            <motion.p {...textReveal(0.5, 14)}>{data.hero.date}</motion.p>
            <motion.span {...textReveal(0.58, 14)}>{data.hero.place}</motion.span>
          </motion.div>

          <div className="cinema-slide-indicators" aria-label="Galeria principal">
            {data.hero.slides.map((slide, index) => (
              <motion.button
                key={slide.alt}
                type="button"
                className={index === runtime.activeWeddingSlide ? "cinema-indicator cinema-indicator-active" : "cinema-indicator"}
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
            <img src={heroSlide.image} alt={heroSlide.alt} />
          </motion.article>

          <div className="cinema-shot-stack">
            <motion.article
              className="cinema-shot cinema-shot-vertical parallax-shell"
              data-parallax-speed="0.3"
              {...surfaceReveal(0.28, 24, 0.985)}
            >
              <img src={data.hero.supportImage} alt="Detalle romantico de la pareja en una toma editorial" />
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

      <div className="ruby-shared-background-shell" style={sharedSectionsStyle}>
      <section
        className="quote-story-section ruby-surface-section scroll-reveal reveal-soft-rise"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.quote)}
      >
        <div className="quote-story-copy">
          <motion.span className="quote-story-kicker" {...textReveal(0.08, 18)}>{data.quote.kicker}</motion.span>
          <motion.blockquote className="quote-story-text" {...textReveal(0.2, 26)}>
            {data.quote.text}
          </motion.blockquote>
          <motion.p className="quote-story-note" {...textReveal(0.34, 20)}>{data.quote.note}</motion.p>
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
            <motion.h2 className="invitation-couple-name" {...textReveal(0.14, 18)}>
              {data.invitation.names[0]}
            </motion.h2>
            <motion.div className="invitation-divider" {...textReveal(0.24, 14)}>
              <span />
              <strong>&</strong>
              <span />
            </motion.div>
            <motion.h2 className="invitation-couple-name" {...textReveal(0.3, 18)}>
              {data.invitation.names[1]}
            </motion.h2>
          </header>

          <motion.p className="invitation-info-copy" {...textReveal(0.38, 22)}>{data.invitation.copy}</motion.p>

          <motion.div className="invitation-date-block" {...textReveal(0.5, 20)}>
            <span className="invitation-day-label">{data.invitation.day}</span>
            <span className="invitation-date-line" />
            <p className="invitation-date">{data.invitation.date}</p>
          </motion.div>
        </article>
      </section>

      <section
        className="parents-section ruby-surface-section scroll-reveal reveal-veil"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.parents)}
      >
        <div className="parents-heading">
          <motion.h3 {...textReveal(0.08, 18)}>{data.parents.heading}</motion.h3>
        </div>

        <div className="parents-grid">
          <article className="parent-card">
            <div className="parent-icon" aria-hidden="true">
              <img src={data.parents.bride.icon} alt="" className="parent-icon-image" />
            </div>
            <motion.p {...textReveal(0.24, 18)}>{renderParentLines(data.parents.bride.lines)}</motion.p>
          </article>

          <motion.div className="parents-divider-column" aria-hidden="true" {...textReveal(0.18, 14)}>
            <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>A</span><span>-</span>
          </motion.div>

          <motion.div className="parents-divider-column" aria-hidden="true" {...textReveal(0.22, 14)}>
            <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>O</span><span>-</span>
          </motion.div>

          <article className="parent-card">
            <div className="parent-icon" aria-hidden="true">
              <img src={data.parents.groom.icon} alt="" className="parent-icon-image" />
            </div>
            <motion.p {...textReveal(0.3, 18)}>{renderParentLines(data.parents.groom.lines)}</motion.p>
          </article>
        </div>
      </section>

      <section className="countdown-section scroll-reveal reveal-rise-strong">
        <div className="countdown-background">
          <img src={data.countdown.background} alt="" />
          <div className="countdown-overlay" aria-hidden="true" />
        </div>

        <div className="countdown-content">
          <motion.span className="countdown-kicker" {...textReveal(0.1, 16)}>{data.countdown.kicker}</motion.span>
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
          <motion.span {...textReveal(0.08, 18)}>{data.ceremony.sectionLabel}</motion.span>
        </div>

        <div className="location-stage">
          <div className="location-carousel" aria-label="Fotos de la iglesia">
            <AnimatePresence mode="sync">
              <motion.img
                key={`${runtime.activeChurchSlide}-${data.ceremony.slides[runtime.activeChurchSlide]?.alt ?? "church"}`}
                className="location-carousel-image location-carousel-image-active"
                src={data.ceremony.slides[runtime.activeChurchSlide]?.image}
                alt={data.ceremony.slides[runtime.activeChurchSlide]?.alt ?? ""}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>

          <div className="location-underlay-photo" aria-hidden="true">
            <img src={data.ceremony.supportImage} alt="" />
          </div>

          <article className="location-card">
            <motion.div className="location-card-topbar" {...textReveal(0.16, 14)}>{data.ceremony.title}</motion.div>
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
              <motion.p className="location-card-kicker" {...textReveal(0.26, 16)}>{data.ceremony.venueType}</motion.p>
              <motion.h3 {...textReveal(0.34, 18)}>{data.ceremony.venueName}</motion.h3>
              <motion.p className="location-card-time" {...textReveal(0.42, 16)}>{data.ceremony.time}</motion.p>
              <motion.p className="location-card-address" {...textReveal(0.5, 18)}>
                {renderAddress(data.ceremony.addressLines)}
              </motion.p>
              <motion.button
                className="location-map-button"
                type="button"
                {...textReveal(0.6, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Ver mapa
              </motion.button>
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
            <AnimatePresence mode="sync">
              <motion.img
                key={`${runtime.activeReceptionSlide}-${data.reception.slides[runtime.activeReceptionSlide]?.alt ?? "reception"}`}
                className="location-carousel-image location-carousel-image-active"
                src={data.reception.slides[runtime.activeReceptionSlide]?.image}
                alt={data.reception.slides[runtime.activeReceptionSlide]?.alt ?? ""}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>

          <div className="location-underlay-photo" aria-hidden="true">
            <img src={data.reception.supportImage} alt="" />
          </div>

          <article className="location-card">
            <motion.div className="location-card-topbar" {...textReveal(0.16, 14)}>{data.reception.title}</motion.div>
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
              <motion.p className="location-card-kicker" {...textReveal(0.26, 16)}>{data.reception.venueType}</motion.p>
              <motion.h3 {...textReveal(0.34, 18)}>{data.reception.venueName}</motion.h3>
              <motion.p className="location-card-time" {...textReveal(0.42, 16)}>{data.reception.time}</motion.p>
              <motion.p className="location-card-address" {...textReveal(0.5, 18)}>
                {renderAddress(data.reception.addressLines)}
              </motion.p>
              <motion.button
                className="location-map-button"
                type="button"
                {...textReveal(0.6, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Ver mapa
              </motion.button>
            </div>
          </article>
        </div>
      </section>

      <section
        className="padrinos-section ruby-surface-section scroll-reveal reveal-curtain"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.padrinos)}
      >
        <div className="padrinos-heading">
          <motion.h3 {...textReveal(0.08, 18)}>{data.padrinos.heading}</motion.h3>
        </div>

        <div className="padrinos-card">
          <motion.button
            className="padrinos-nav padrinos-nav-prev"
            type="button"
            aria-label="Padrino anterior"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current - 1 + data.padrinos.slides.length) % data.padrinos.slides.length)}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            ‹
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
                <motion.h4 {...textReveal(0.22, 16)}>
                  {padrinoSlide.names}
                </motion.h4>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="padrinos-nav padrinos-nav-next"
            type="button"
            aria-label="Siguiente padrino"
            onClick={() => runtime.setActivePadrinosSlide((current) => (current + 1) % data.padrinos.slides.length)}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            ›
          </motion.button>
        </div>
      </section>

      <section
        className="details-section ruby-surface-section scroll-reveal reveal-bloom"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.details)}
      >
        <article className="dresscode-section">
          <div className="details-heading">
            <motion.h3 {...textReveal(0.08, 18)}>{data.details.dressCode.kicker}</motion.h3>
          </div>
          <motion.p className="dresscode-label" {...textReveal(0.2, 18)}>{data.details.dressCode.title}</motion.p>
          <div className="dresscode-illustration">
            <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
          </div>
          <motion.p className="dresscode-note" {...textReveal(0.3, 18)}>{data.details.dressCode.note}</motion.p>
        </article>

        <article className="gift-section">
          <div className="details-heading">
            <motion.h3 {...textReveal(0.08, 18)}>{data.details.gifts.kicker}</motion.h3>
          </div>
          <div className="gift-copy-block">
            {data.details.gifts.giftIllustration ? (
              <div className="gift-copy-illustration" aria-hidden="true">
                <img src={data.details.gifts.giftIllustration} alt="" />
              </div>
            ) : null}
            <motion.p {...textReveal(0.2, 18)}>{data.details.gifts.copy}</motion.p>
          </div>

          <div className="gift-options-grid">
            <article className="gift-option-card">
              <div className="gift-option-logo"><img src={data.details.gifts.liverpoolLogo} alt="Liverpool" /></div>
              <motion.h4 {...textReveal(0.32, 16)}>Evento</motion.h4>
              <motion.p {...textReveal(0.4, 16)}>{data.details.gifts.eventCode}</motion.p>
              <motion.button
                className="gift-option-button"
                type="button"
                {...textReveal(0.48, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Ver regalos
              </motion.button>
            </article>

            <article className="gift-option-card">
              <div className="gift-option-icon"><img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" /></div>
              <motion.h4 {...textReveal(0.38, 16)}>Lluvia de Sobres</motion.h4>
            </article>
          </div>
        </article>
      </section>

      <section
        className="rsvp-section ruby-surface-section scroll-reveal reveal-soft-rise"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.rsvp)}
      >
        <div className="rsvp-heading"><motion.h3 {...textReveal(0.08, 18)}>{data.rsvp.title}</motion.h3></div>

        <div className="rsvp-layout">
          <article className="rsvp-invitation-card">
            <div className="rsvp-photo-frame">
              <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
            </div>

            <div className="rsvp-card-copy">
              <motion.p className="rsvp-card-label" {...textReveal(0.16, 16)}>Invitacion para</motion.p>
              <motion.h4 {...textReveal(0.24, 16)}>Familia</motion.h4>
              <motion.p className="rsvp-card-family" {...textReveal(0.32, 16)}>Montiel Leiva</motion.p>
              <motion.p className="rsvp-card-count-label" {...textReveal(0.4, 16)}>Total de invitados:</motion.p>
              <strong>4</strong>
              <motion.p className="rsvp-card-note" {...textReveal(0.46, 16)}>{data.rsvp.guestCount}</motion.p>
            </div>
          </article>

          <article className="rsvp-form-panel">
            <motion.p className="rsvp-intro" {...textReveal(0.18, 18)}>
              Favor de confirmar su presencia, a más tardar un mes antes del evento.
              <strong> Muchas gracias.</strong>
            </motion.p>
            <motion.p className="rsvp-subcopy" {...textReveal(0.28, 18)}>Completa y envia el siguiente formulario.</motion.p>

            <form className="rsvp-form">
              <fieldset className="rsvp-fieldset">
                <motion.legend {...textReveal(0.36, 14)}>Confirmar asistencia:</motion.legend>
                <label className="rsvp-option"><input type="radio" name="attendance" defaultChecked /><span>Si asistiremos.</span></label>
                <label className="rsvp-option"><input type="radio" name="attendance" /><span>Lo siento, no podremos asistir.</span></label>
              </fieldset>

              <fieldset className="rsvp-fieldset">
                <motion.legend {...textReveal(0.42, 14)}>Eres familiar o amigo/a de:</motion.legend>
                <label className="rsvp-option"><input type="radio" name="side" defaultChecked /><span>Yuliana</span></label>
                <label className="rsvp-option"><input type="radio" name="side" /><span>Jaime</span></label>
              </fieldset>

              <fieldset className="rsvp-fieldset">
                <motion.legend {...textReveal(0.48, 14)}>Numero de asistentes:</motion.legend>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>4 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>3 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" defaultChecked /><span>2 Adultos</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>1 Adulto</span></label>
                <label className="rsvp-option"><input type="radio" name="guests" /><span>Lo siento, no podremos asistir</span></label>
              </fieldset>

              <motion.label className="rsvp-message-label" htmlFor="rsvp-message" {...textReveal(0.56, 14)}>
                {data.rsvp.dedicationLabel}
              </motion.label>
              <textarea id="rsvp-message" className="rsvp-textarea" rows={5} placeholder="Escribe aqui tu mensaje..." />
              <motion.button
                className="rsvp-submit"
                type="submit"
                {...textReveal(0.66, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Confirmar
              </motion.button>
            </form>
          </article>
        </div>
      </section>

      <footer
        className="invitation-closing ruby-surface-section scroll-reveal reveal-veil"
        style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.closing)}
      >
        <div className="invitation-closing-topband" aria-hidden="true" />
        <motion.div className="invitation-closing-message" {...textReveal(0.12, 18)}>
          <motion.p {...textReveal(0.18, 18)}>{data.closing.message}</motion.p>
          <motion.span {...textReveal(0.32, 16)}>{data.closing.accent}</motion.span>
        </motion.div>
        <motion.div className="invitation-closing-footer" {...textReveal(0.42, 16)}>
          <strong>{data.closing.footerText}</strong>
        </motion.div>
      </footer>
      </div>
    </div>
  );
}
