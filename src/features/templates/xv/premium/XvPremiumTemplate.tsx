import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type { XvEventCard, XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type XvPremiumTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: XvPremiumTemplateData;
};

type CountdownParts = {
  days: string;
  hours: string;
  minutes: string;
};

function createCountdown(targetIso: string): CountdownParts {
  const now = Date.now();
  const target = new Date(targetIso).getTime();
  const diff = Math.max(target - now, 0);
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

function useAmbientLoop(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const AudioContextCtor =
      window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextCtor) {
      return undefined;
    }

    const context = new AudioContextCtor();
    let loopTimer = 0;
    let cancelled = false;

    const playTone = (frequency: number, offset: number, duration: number, gainValue: number) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, context.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(gainValue, context.currentTime + offset + 0.18);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + offset + duration,
      );

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(context.currentTime + offset);
      oscillator.stop(context.currentTime + offset + duration + 0.05);
    };

    const scheduleLoop = () => {
      if (cancelled) {
        return;
      }

      playTone(392, 0, 1.7, 0.018);
      playTone(523.25, 1.3, 1.4, 0.014);
      playTone(587.33, 2.3, 1.2, 0.012);
      loopTimer = window.setTimeout(scheduleLoop, 3800);
    };

    void context.resume().then(() => {
      scheduleLoop();
    });

    return () => {
      cancelled = true;
      window.clearTimeout(loopTimer);
      void context.close();
    };
  }, [enabled]);
}

function EventIcon({ type }: { type: XvEventCard["icon"] }) {
  if (type === "church") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 6 7v2h1v10h4v-5h2v5h4V9h1V7l-6-5Zm-1 5h2v2h2v2h-2v2h-2v-2H9V9h2V7Z" />
      </svg>
    );
  }

  if (type === "party") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h12l-1.1 6H7.1L6 3Zm2 8h8l1 10H7L8 11Zm3-6h2v2h-2V5Zm-1 8h4v2h-4v-2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm1 9.4V7h-2v6.2l4.6 2.7 1-1.7L13 12.4Z" />
    </svg>
  );
}

function AnimatedNumber({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.article
      className="xv-premium-countdown-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="xv-premium-countdown-value">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <strong>{label}</strong>
    </motion.article>
  );
}

export function XvPremiumTemplate({
  category,
  pkg,
  data,
}: XvPremiumTemplateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [countdown, setCountdown] = useState(() => createCountdown(data.countdown.targetIso));
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useAmbientLoop(isMusicEnabled);

  useEffect(() => {
    const locked = !isInvitationOpen || lightboxIndex !== null;
    document.body.style.overflow = locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isInvitationOpen, lightboxIndex]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(createCountdown(data.countdown.targetIso));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [data.countdown.targetIso]);

  const heroImages = useMemo(() => data.gallery.images.slice(0, 4), [data.gallery.images]);

  useEffect(() => {
    if (heroImages.length <= 1 || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5800);

    return () => window.clearInterval(intervalId);
  }, [heroImages, prefersReducedMotion]);

  useEffect(() => {
    heroImages.forEach((image) => {
      const preload = new Image();
      preload.src = image.src;
    });
  }, [heroImages]);

  const styleVars = useMemo(
    () =>
      ({
        "--xv-gold": data.appearance.palette.gold,
        "--xv-gold-soft": data.appearance.palette.goldSoft,
        "--xv-blush": data.appearance.palette.blush,
        "--xv-blush-soft": data.appearance.palette.blushSoft,
        "--xv-ivory": data.appearance.palette.ivory,
        "--xv-black": data.appearance.palette.black,
        "--xv-ink": data.appearance.palette.ink,
        "--xv-accent-primary": data.appearance.accentPrimary,
        "--xv-card": data.appearance.cardBackground,
        "--xv-border": data.appearance.borderColor,
        "--xv-section-bg": data.appearance.sectionBackground,
        "--xv-section-alt": data.appearance.sectionBackgroundAlt,
        "--xv-ornament-left": data.appearance.ornamentImageLeft
          ? `url(${data.appearance.ornamentImageLeft})`
          : "none",
        "--xv-ornament-right": data.appearance.ornamentImageRight
          ? `url(${data.appearance.ornamentImageRight})`
          : "none",
        "--xv-ornament-top": data.appearance.ornamentImageTop
          ? `url(${data.appearance.ornamentImageTop})`
          : "none",
        "--xv-ornament-bottom": data.appearance.ornamentImageBottom
          ? `url(${data.appearance.ornamentImageBottom})`
          : "none",
        "--xv-ornament-accent": data.appearance.ornamentImageAccent
          ? `url(${data.appearance.ornamentImageAccent})`
          : "none",
        "--xv-shell-background-image": data.appearance.shellBackgroundImage
          ? `url(${data.appearance.shellBackgroundImage})`
          : "none",
      }) as CSSProperties,
    [data.appearance],
  );

  const galleryImage = data.gallery.images[galleryIndex];
  const passGuestCount = Math.max(Number.parseInt(data.rsvp.passGuestCountValue, 10) || 1, 1);
  const attendanceOptions = [
    ...Array.from({ length: passGuestCount }, (_, index) => {
      const count = passGuestCount - index;
      return `${count} ${count === 1 ? "Adulto" : "Adultos"}`;
    }),
    "Lo siento, no podremos asistir",
  ];
  const attendanceNameLabel = `Escribe el nombre de quien asistirá (${passGuestCount} ${
    passGuestCount === 1 ? "Adulto" : "Adultos"
  }):`;
  const reveal = (delay = 0, y = 22) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, filter: "blur(12px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.24 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.19, 1, 0.22, 1] as const,
          },
        };

  const goToGallery = (nextIndex: number) => {
    const total = data.gallery.images.length;
    const resolved = (nextIndex + total) % total;
    setGalleryIndex(resolved);
  };

  const handleGalleryTouchEnd = (endX: number) => {
    if (touchStartX === null) {
      return;
    }

    const diff = endX - touchStartX;
    if (Math.abs(diff) < 40) {
      setTouchStartX(null);
      return;
    }

    if (diff < 0) {
      goToGallery(galleryIndex + 1);
    } else {
      goToGallery(galleryIndex - 1);
    }

    setTouchStartX(null);
  };

  const onRsvpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  const currentLightboxImage =
    lightboxIndex === null ? null : data.gallery.images[lightboxIndex];

  return (
    <div className={`template-shell xv-premium-shell xv-template-${data.key}`} style={styleVars}>
      <AnimatePresence>
        {!isInvitationOpen ? (
          <motion.div
            className="xv-premium-entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="xv-premium-entry-backdrop"
              style={{
                backgroundImage: `${data.appearance.heroOverlay}, url(${data.hero.coverImage.src})`,
                backgroundPosition: data.hero.coverImage.position ?? "center center",
              }}
            />
            <motion.div
              className="xv-premium-entry-card"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26, scale: 0.98 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
            >
              <span>{data.hero.subtitle}</span>
              <strong>{data.hero.celebrant}</strong>
              <p>{data.hero.date}</p>
              <small>{data.hero.supportLine}</small>
              <motion.button
                type="button"
                className="xv-premium-open"
                onClick={() => setIsInvitationOpen(true)}
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              >
                {data.hero.openLabel}
              </motion.button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {currentLightboxImage ? (
          <motion.div
            className="xv-premium-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="xv-premium-lightbox-frame"
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={currentLightboxImage.src} alt={currentLightboxImage.alt} />
              <button type="button" onClick={() => setLightboxIndex(null)}>
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        className={`xv-premium-music-toggle${isMusicEnabled ? " is-playing" : ""}`}
        onClick={() => setIsMusicEnabled((current) => !current)}
        aria-label={isMusicEnabled ? "Pausar música" : "Reproducir música"}
      >
        <span>{isMusicEnabled ? "Pausa" : "Play"}</span>
        <strong>{data.music.label}</strong>
      </button>

      <div className="xv-premium-topline">
        <Link className="xv-premium-back" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="xv-premium-pill">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="xv-premium-hero">
        {heroImages.map((image, index) => (
          <motion.div
            key={image.alt}
            className="xv-premium-hero-background"
            initial={index === 0 ? { opacity: 1, scale: 1.01 } : { opacity: 0, scale: 1.03 }}
            animate={
              prefersReducedMotion
                ? { opacity: index === heroIndex ? 1 : 0 }
                : {
                    opacity: index === heroIndex ? 1 : 0,
                    scale: index === heroIndex ? 1.01 : 1.03,
                  }
            }
            transition={{ duration: 1.65, ease: [0.19, 1, 0.22, 1] }}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundPosition: image.position ?? "center center",
            }}
          />
        ))}
        <div className="xv-premium-hero-content">
          <div className="xv-premium-hero-shell">
            <div className="xv-premium-hero-copy">
              <motion.h1 {...reveal(0.08, 24)}>{data.hero.celebrant}</motion.h1>
              <motion.span
                className="xv-premium-eyebrow xv-premium-hero-subtitle"
                {...reveal(0.16, 18)}
              >
                {data.hero.subtitle}
              </motion.span>
            </div>
          </div>
          {heroImages.length > 1 ? (
            <div className="xv-premium-hero-dots" aria-label="Fotos principales">
              {heroImages.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  className={index === heroIndex ? "is-active" : ""}
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Mostrar foto ${index + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <motion.section className="xv-premium-countdown-section" {...reveal(0.02, 20)}>
        <div className="xv-premium-section-head">
          <span>{data.countdown.title}</span>
          <h2>La noche está cada vez más cerca</h2>
          <p>{data.countdown.note}</p>
        </div>
        <div className="xv-premium-countdown-grid">
          <AnimatedNumber value={countdown.days} label="Días" delay={0.05} />
          <AnimatedNumber value={countdown.hours} label="Horas" delay={0.1} />
          <AnimatedNumber value={countdown.minutes} label="Minutos" delay={0.15} />
        </div>
      </motion.section>

      <motion.section className="xv-premium-message-section" {...reveal(0.04, 22)}>
        <div className="xv-premium-section-head">
          <span>{data.message.kicker}</span>
          <h2>{data.message.title}</h2>
        </div>
        <div className="xv-premium-message-card">
          <p>{data.message.body}</p>
          <strong>{data.message.signature}</strong>
        </div>
      </motion.section>

      <motion.section className="xv-premium-gallery-section" {...reveal(0.06, 22)}>
        <div className="xv-premium-section-head">
          <span>{data.gallery.kicker}</span>
          <h2>{data.gallery.title}</h2>
          <p>{data.gallery.note}</p>
        </div>

        <div className="xv-premium-gallery-shell">
          <div
            className="xv-premium-gallery-stage"
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => handleGalleryTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            <AnimatePresence mode="wait">
              <motion.button
                key={galleryImage.alt}
                type="button"
                className="xv-premium-gallery-image"
                onClick={() => setLightboxIndex(galleryIndex)}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  backgroundImage: `url(${galleryImage.src})`,
                  backgroundPosition: galleryImage.position ?? "center center",
                }}
              >
                <span>Ver foto</span>
              </motion.button>
            </AnimatePresence>
          </div>

          <div className="xv-premium-gallery-controls">
            <button type="button" onClick={() => goToGallery(galleryIndex - 1)}>
              Anterior
            </button>
            <button type="button" onClick={() => goToGallery(galleryIndex + 1)}>
              Siguiente
            </button>
          </div>

          <div className="xv-premium-gallery-thumbs">
            {data.gallery.images.map((image, index) => (
              <button
                type="button"
                key={image.alt}
                className={index === galleryIndex ? "is-active" : ""}
                onClick={() => goToGallery(index)}
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundPosition: image.position ?? "center center",
                }}
                aria-label={`Mostrar imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="xv-premium-details-section" {...reveal(0.08, 24)}>
        <div className="xv-premium-section-head">
          <span>{data.eventDetails.kicker}</span>
          <h2>{data.eventDetails.title}</h2>
        </div>

        <div className="xv-premium-event-grid">
          {data.eventDetails.cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="xv-premium-event-card"
              {...reveal(0.08 + index * 0.08, 18)}
            >
              <div className="xv-premium-event-icon">
                <EventIcon type={card.icon} />
              </div>
              <strong>{card.title}</strong>
              <h3>{card.venue}</h3>
              <p>{card.address}</p>
              <span>{card.time}</span>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="xv-premium-map-section" {...reveal(0.1, 20)}>
        <div className="xv-premium-section-head">
          <span>{data.map.kicker}</span>
          <h2>{data.map.title}</h2>
        </div>
        <div className="xv-premium-map-layout">
          <div className="xv-premium-map-card">
            <strong>{data.map.venue}</strong>
            <p>{data.map.address}</p>
            <a href={data.map.mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
          <div className="xv-premium-map-embed">
            <iframe src={data.map.embedUrl} title={data.map.title} loading="lazy" />
          </div>
        </div>
      </motion.section>

      <motion.section className="xv-premium-dress-section" {...reveal(0.12, 22)}>
        {data.dressCode.cards.map((card) => (
          <article key={card.label} className="xv-premium-dress-card">
            <h2>{data.dressCode.title}</h2>
            <strong>{card.label}</strong>
            {card.image ? (
              <div className="xv-premium-dress-visual">
                <img src={card.image.src} alt={card.image.alt} loading="lazy" />
              </div>
            ) : null}
            <p>{data.dressCode.note}</p>
          </article>
        ))}
      </motion.section>

      <motion.section className="xv-premium-gifts-section" {...reveal(0.16, 22)}>
        <div className="xv-premium-section-head">
          <span>{data.gifts.kicker}</span>
          <h2>{data.gifts.title}</h2>
          <p>{data.gifts.intro}</p>
        </div>
        <div className="xv-premium-gifts-grid">
          {data.gifts.options.map((option) => (
            <article key={option.title} className="xv-premium-gift-card">
              {option.image ? (
                <div className="xv-premium-gift-visual">
                  <img src={option.image.src} alt={option.image.alt} loading="lazy" />
                </div>
              ) : null}
              <strong>{option.title}</strong>
              <p>{option.value}</p>
              {option.href && option.actionLabel ? (
                <a href={option.href} target="_blank" rel="noreferrer">
                  {option.actionLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section className="xv-premium-rsvp-section" {...reveal(0.18, 22)}>
        <div className="xv-premium-section-head">
          <span>{data.rsvp.kicker}</span>
          <h2>{data.rsvp.title}</h2>
          <p>{data.rsvp.intro}</p>
        </div>

        <div className="xv-premium-rsvp-layout">
          <motion.article className="xv-premium-rsvp-pass" {...reveal(0.04, 18)}>
            <div
              className="xv-premium-rsvp-pass-visual"
              style={{
                backgroundImage: `url(${data.rsvp.passImage.src})`,
                backgroundPosition: data.rsvp.passImage.position ?? "center center",
              }}
            />
            <div className="xv-premium-rsvp-pass-copy">
              <span>{data.rsvp.passTitle}</span>
              <strong>{data.rsvp.passGuestName}</strong>
              <div className="xv-premium-rsvp-pass-meta">
                <b>{data.rsvp.passGuestCountValue}</b>
                <p>{data.rsvp.passGuestCountLabel}</p>
              </div>
              <ul className="xv-premium-rsvp-pass-list">
                {data.rsvp.passGuests.map((guest) => (
                  <li key={guest}>{guest}</li>
                ))}
              </ul>
              <small>{data.rsvp.passMessage}</small>
            </div>
          </motion.article>

          <form className="xv-premium-rsvp-form" onSubmit={onRsvpSubmit}>
            <p className="xv-premium-rsvp-form-intro">{data.rsvp.formIntro}</p>
            <label>
              <span>{data.rsvp.familyFieldLabel}</span>
              <input
                type="text"
                name="familyName"
                placeholder={data.rsvp.familyFieldPlaceholder}
                required
              />
            </label>

            <fieldset className="xv-premium-rsvp-option-group">
              <legend>{data.rsvp.relationLabel}</legend>
              {data.rsvp.relationOptions.map((option, optionIndex) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="relation"
                    value={option}
                    defaultChecked={optionIndex === 0}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <fieldset className="xv-premium-rsvp-option-group">
              <legend>{data.rsvp.attendanceLabel}</legend>
              {attendanceOptions.map((option, optionIndex) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    defaultChecked={optionIndex === 0}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>

            <label>
              <span>{attendanceNameLabel}</span>
              <textarea
                name="attendingGuests"
                rows={4}
                placeholder={data.rsvp.attendanceNamePlaceholder}
              />
            </label>

            <label>
              <span>{data.rsvp.dedicationLabel}</span>
              <textarea
                name="dedication"
                rows={5}
                placeholder={data.rsvp.dedicationPlaceholder}
              />
            </label>

            <div className="xv-premium-rsvp-actions">
              <button type="submit">{data.rsvp.buttonLabel}</button>
            </div>
            <AnimatePresence>
              {rsvpSent ? (
                <motion.p
                  className="xv-premium-rsvp-feedback"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {data.rsvp.successMessage}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </form>
        </div>
      </motion.section>

      <motion.footer className="xv-premium-footer" {...reveal(0.2, 22)}>
        <p>{data.closing.message}</p>
        <strong>{data.closing.accent}</strong>
      </motion.footer>
    </div>
  );
}
