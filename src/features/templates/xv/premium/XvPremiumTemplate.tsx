import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import { XvPremiumCountdownSection } from "@/features/templates/xv/premium/components/XvPremiumCountdownSection";
import { XvPremiumDetailsSection } from "@/features/templates/xv/premium/components/XvPremiumDetailsSection";
import { XvPremiumDressSection } from "@/features/templates/xv/premium/components/XvPremiumDressSection";
import { XvPremiumEntry } from "@/features/templates/xv/premium/components/XvPremiumEntry";
import { XvPremiumFooter } from "@/features/templates/xv/premium/components/XvPremiumFooter";
import { XvPremiumGallerySection } from "@/features/templates/xv/premium/components/XvPremiumGallerySection";
import { XvPremiumGiftsSection } from "@/features/templates/xv/premium/components/XvPremiumGiftsSection";
import { XvPremiumHero } from "@/features/templates/xv/premium/components/XvPremiumHero";
import { XvPremiumLightbox } from "@/features/templates/xv/premium/components/XvPremiumLightbox";
import { XvPremiumMapSection } from "@/features/templates/xv/premium/components/XvPremiumMapSection";
import { XvPremiumMessageSection } from "@/features/templates/xv/premium/components/XvPremiumMessageSection";
import { XvPremiumMusicToggle } from "@/features/templates/xv/premium/components/XvPremiumMusicToggle";
import { XvPremiumRsvpSection } from "@/features/templates/xv/premium/components/XvPremiumRsvpSection";
import { createCountdown, useAmbientLoop } from "@/features/templates/xv/premium/utils";

type XvPremiumTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: XvPremiumTemplateData;
};

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
    [heroImages[heroIndex], heroImages[(heroIndex + 1) % heroImages.length]]
      .filter(Boolean)
      .forEach((image) => {
      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    });
  }, [heroImages, heroIndex]);

  useEffect(() => {
    const nearbyImages = [
      data.gallery.images[galleryIndex],
      data.gallery.images[(galleryIndex + 1) % data.gallery.images.length],
      data.gallery.images[(galleryIndex - 1 + data.gallery.images.length) % data.gallery.images.length],
    ];

    nearbyImages.forEach((image) => {
      if (!image) {
        return;
      }

      const preload = new Image();
      preload.decoding = "async";
      preload.src = image.src;
    });
  }, [data.gallery.images, galleryIndex]);

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
  const currentLightboxImage =
    lightboxIndex === null ? null : data.gallery.images[lightboxIndex];
  const attendanceOptions =
    data.rsvp.attendanceOptions.length > 0
      ? data.rsvp.attendanceOptions
      : ["Lo siento, no podremos asistir"];
  const attendanceNameLabel =
    data.rsvp.attendanceNameLabel || "Escribe el nombre de quien asistira:";
  const countdownHeadline =
    data.countdown.headline || "La noche esta cada vez mas cerca";
  const countdownLabels = {
    days: data.countdown.labels?.days || "Dias",
    hours: data.countdown.labels?.hours || "Horas",
    minutes: data.countdown.labels?.minutes || "Minutos",
  };

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

  return (
    <div
      className={`template-shell xv-premium-shell xv-template-${data.key} relative min-h-screen overflow-hidden bg-[#4a2240] text-[var(--xv-accent-primary,#9d248d)]`}
      style={styleVars}
    >
      <div className="pointer-events-none absolute inset-0 opacity-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: data.appearance.shellBackgroundImage
              ? `linear-gradient(180deg,rgba(236,185,205,0.18),rgba(86,33,70,0.44)), url(${data.appearance.shellBackgroundImage})`
              : "linear-gradient(180deg,rgba(236,185,205,0.26),rgba(86,33,70,0.56))",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_18%_22%,rgba(245,205,221,0.28),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(212,95,154,0.14),transparent_16%),radial-gradient(circle_at_bottom_right,rgba(216,177,94,0.16),transparent_18%)]" />
      </div>

      <div className="relative">
      <XvPremiumEntry
        data={data}
        isOpen={isInvitationOpen}
        prefersReducedMotion={Boolean(prefersReducedMotion)}
        onOpen={() => setIsInvitationOpen(true)}
      />

      <XvPremiumLightbox
        image={currentLightboxImage}
        prefersReducedMotion={Boolean(prefersReducedMotion)}
        onClose={() => setLightboxIndex(null)}
      />

      <XvPremiumMusicToggle
        label={data.music.label}
        isEnabled={isMusicEnabled}
        onToggle={() => setIsMusicEnabled((current) => !current)}
      />

      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#150912]/65 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <Link
            className="text-xs uppercase tracking-[0.28em] text-white/58 transition hover:text-[var(--xv-accent-primary,#9d248d)]"
            to={`/categoria/${category.slug}`}
          >
          Regresar a {category.shortName}
          </Link>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold)]">
            {category.shortName} / {pkg.name}
          </span>
        </div>
      </div>

      <XvPremiumHero
        data={data}
        heroImages={heroImages}
        heroIndex={heroIndex}
        prefersReducedMotion={Boolean(prefersReducedMotion)}
        onSelectHero={setHeroIndex}
        reveal={reveal}
      />

      <XvPremiumCountdownSection
        title={data.countdown.title}
        headline={countdownHeadline}
        note={data.countdown.note}
        labels={countdownLabels}
        countdown={countdown}
        reveal={reveal}
      />

      <XvPremiumMessageSection data={data.message} reveal={reveal} />

      <XvPremiumGallerySection
        data={data.gallery}
        galleryIndex={galleryIndex}
        galleryImage={galleryImage}
        prefersReducedMotion={Boolean(prefersReducedMotion)}
        onTouchStart={setTouchStartX}
        onTouchEnd={handleGalleryTouchEnd}
        onOpenLightbox={() => setLightboxIndex(galleryIndex)}
        onPrev={() => goToGallery(galleryIndex - 1)}
        onNext={() => goToGallery(galleryIndex + 1)}
        onSelect={goToGallery}
        reveal={reveal}
      />

      <XvPremiumDetailsSection data={data.eventDetails} reveal={reveal} />

      <XvPremiumMapSection data={data.map} reveal={reveal} />

      <XvPremiumDressSection data={data.dressCode} reveal={reveal} />

      <XvPremiumGiftsSection data={data.gifts} reveal={reveal} />

      <XvPremiumRsvpSection
        data={data.rsvp}
        attendanceOptions={attendanceOptions}
        attendanceNameLabel={attendanceNameLabel}
        rsvpSent={rsvpSent}
        onSubmit={onRsvpSubmit}
        reveal={reveal}
      />

      <XvPremiumFooter data={data.closing} reveal={reveal} />
      </div>
    </div>
  );
}
