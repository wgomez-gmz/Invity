import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";
import { RubyClosingSection } from "@/features/templates/wedding/ruby/components/RubyClosingSection";
import { RubyCountdownSection } from "@/features/templates/wedding/ruby/components/RubyCountdownSection";
import { RubyDetailsSection } from "@/features/templates/wedding/ruby/components/RubyDetailsSection";
import { RubyHeroSection } from "@/features/templates/wedding/ruby/components/RubyHeroSection";
import { RubyIntroModal } from "@/features/templates/wedding/ruby/components/RubyIntroModal";
import { RubyInvitationInfoSection } from "@/features/templates/wedding/ruby/components/RubyInvitationInfoSection";
import { RubyLocationSection } from "@/features/templates/wedding/ruby/components/RubyLocationSection";
import { RubyPadrinosSection } from "@/features/templates/wedding/ruby/components/RubyPadrinosSection";
import { RubyParentsSection } from "@/features/templates/wedding/ruby/components/RubyParentsSection";
import { RubyQuoteSection } from "@/features/templates/wedding/ruby/components/RubyQuoteSection";
import { RubyRsvpSection } from "@/features/templates/wedding/ruby/components/RubyRsvpSection";
import { RubyMusicControl } from "@/features/templates/wedding/ruby/components/RubyMusicControl";
import { resolveBackgroundStyle } from "@/features/templates/wedding/ruby/utils";

type RubyWeddingTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

export function RubyWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: RubyWeddingTemplateProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const heroSlide = data.hero.slides[runtime.activeWeddingSlide];
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
      <RubyIntroModal
        data={data}
        heroImage={heroSlide.image}
        isOpen={isEntryModalOpen}
        prefersReducedMotion={prefersReducedMotion}
        onOpen={() => setIsEntryModalOpen(false)}
        surfaceReveal={surfaceReveal(0.18, 18, 0.99)}
        textReveal={textReveal}
      />

      <div className="template-topline">
        <Link className="template-back template-back-light" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="template-pill template-pill-light">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <RubyHeroSection
        data={data}
        runtime={runtime}
        heroImage={heroSlide.image}
        heroAlt={heroSlide.alt}
        prefersReducedMotion={prefersReducedMotion}
        slideTransition={slideTransition}
        hoverLift={hoverLift}
        tapPress={tapPress}
        surfaceReveal={surfaceReveal}
        textReveal={textReveal}
      />

      <div className="ruby-shared-background-shell" style={sharedSectionsStyle}>
        <RubyQuoteSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.quote)}
          textReveal={textReveal}
        />

        <RubyInvitationInfoSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.invitation)}
          textReveal={textReveal}
        />

        <RubyParentsSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.parents)}
          textReveal={textReveal}
        />

        <RubyCountdownSection data={data} textReveal={textReveal} />

        <RubyLocationSection
          section={data.ceremony}
          activeIndex={runtime.activeChurchSlide}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.location)}
          prefersReducedMotion={prefersReducedMotion}
          slideTransition={slideTransition}
          hoverLift={hoverLift}
          tapPress={tapPress}
          textReveal={textReveal}
          type="church"
        />

        <RubyLocationSection
          section={data.reception}
          activeIndex={runtime.activeReceptionSlide}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.location)}
          prefersReducedMotion={prefersReducedMotion}
          slideTransition={slideTransition}
          hoverLift={hoverLift}
          tapPress={tapPress}
          textReveal={textReveal}
          reverse
          type="reception"
        />

        <RubyPadrinosSection
          data={data}
          runtime={runtime}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.padrinos)}
          prefersReducedMotion={prefersReducedMotion}
          slideTransition={slideTransition}
          hoverLift={hoverLift}
          tapPress={tapPress}
          textReveal={textReveal}
        />

        <RubyDetailsSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.details)}
          hoverLift={hoverLift}
          tapPress={tapPress}
          textReveal={textReveal}
        />

        <RubyRsvpSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.rsvp)}
          hoverLift={hoverLift}
          tapPress={tapPress}
          textReveal={textReveal}
        />

        <RubyClosingSection
          data={data}
          style={resolveBackgroundStyle(appearance?.sectionBackgrounds?.closing)}
          textReveal={textReveal}
        />
      </div>
      <RubyMusicControl />
    </div>
  );
}
