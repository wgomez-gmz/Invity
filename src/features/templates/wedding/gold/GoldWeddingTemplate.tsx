import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";
import { GoldClosingSection } from "@/features/templates/wedding/gold/components/GoldClosingSection";
import { GoldCountdownSection } from "@/features/templates/wedding/gold/components/GoldCountdownSection";
import { GoldDetailsSection } from "@/features/templates/wedding/gold/components/GoldDetailsSection";
import { GoldHeroSection } from "@/features/templates/wedding/gold/components/GoldHeroSection";
import { GoldInvitationInfoSection } from "@/features/templates/wedding/gold/components/GoldInvitationInfoSection";
import { GoldLocationSection } from "@/features/templates/wedding/gold/components/GoldLocationSection";
import { GoldPadrinosSection } from "@/features/templates/wedding/gold/components/GoldPadrinosSection";
import { GoldParentsSection } from "@/features/templates/wedding/gold/components/GoldParentsSection";
import { GoldQuoteSection } from "@/features/templates/wedding/gold/components/GoldQuoteSection";
import { GoldRsvpSection } from "@/features/templates/wedding/gold/components/GoldRsvpSection";

type GoldWeddingTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

export function GoldWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: GoldWeddingTemplateProps) {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const heroSlide = data.hero.slides[runtime.activeWeddingSlide];
  const goldReveal = (delay = 0, y = 22, scale = 0.99) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, scale, filter: "blur(10px)" },
          whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.28 },
          transition: {
            duration: 0.9,
            delay,
            ease: [0.19, 1, 0.22, 1] as const,
          },
        };
  const hoverLift = prefersReducedMotion ? undefined : { y: -2, scale: 1.02 };
  const tapPress = prefersReducedMotion ? undefined : { y: 0, scale: 0.985 };

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

      <GoldHeroSection
        data={data}
        runtime={runtime}
        heroImage={heroSlide.image}
        heroAlt={heroSlide.alt}
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldQuoteSection data={data} goldReveal={goldReveal} />

      <GoldInvitationInfoSection data={data} goldReveal={goldReveal} />

      <GoldParentsSection data={data} goldReveal={goldReveal} />

      <GoldCountdownSection data={data} />

      <GoldLocationSection
        section={data.ceremony}
        activeIndex={runtime.activeChurchSlide}
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldLocationSection
        section={data.reception}
        activeIndex={runtime.activeReceptionSlide}
        reverse
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldPadrinosSection
        data={data}
        runtime={runtime}
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldDetailsSection
        data={data}
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldRsvpSection
        data={data}
        hoverLift={hoverLift}
        tapPress={tapPress}
        goldReveal={goldReveal}
      />

      <GoldClosingSection data={data} />
    </div>
  );
}
