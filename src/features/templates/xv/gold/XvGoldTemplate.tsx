import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import { ClosingSection } from "@/features/templates/xv/gold/components/ClosingSection";
import { Countdown } from "@/features/templates/xv/gold/components/Countdown";
import { EventDetails } from "@/features/templates/xv/gold/components/EventDetails";
import { Gallery } from "@/features/templates/xv/gold/components/Gallery";
import { Gifts } from "@/features/templates/xv/gold/components/Gifts";
import { HeroXV } from "@/features/templates/xv/gold/components/HeroXV";
import { MessageSection } from "@/features/templates/xv/gold/components/MessageSection";
import { RSVP } from "@/features/templates/xv/gold/components/RSVP";
import { createCountdown } from "@/features/templates/xv/premium/utils";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type XvGoldTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: XvPremiumTemplateData;
};

export function XvGoldTemplate({ category, pkg, data }: XvGoldTemplateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [rsvpSent, setRsvpSent] = useState(false);
  const [countdown, setCountdown] = useState(() => createCountdown(data.countdown.targetIso));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(createCountdown(data.countdown.targetIso));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [data.countdown.targetIso]);

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
      }) as CSSProperties,
    [data.appearance],
  );

  const reveal = (delay = 0, y = 18) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y, filter: "blur(10px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, amount: 0.24 },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.19, 1, 0.22, 1] as const,
          },
        };

  const onRsvpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#f7efe4] text-[var(--xv-ink)]"
      style={styleVars}
    >
      <div className="pointer-events-none absolute inset-0 opacity-100">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#14233a_0%,#223251_18%,#f8efe3_40%,#fdf6ec_62%,#f8ebe2_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(109,130,163,0.14),transparent_14%),radial-gradient(circle_at_82%_14%,rgba(212,175,55,0.12),transparent_16%),radial-gradient(circle_at_50%_62%,rgba(255,255,255,0.42),transparent_20%)]" />
      </div>

      <div className="relative">
        <div className="sticky top-0 z-40 border-b border-white/10 bg-[linear-gradient(180deg,rgba(18,31,51,0.88),rgba(29,44,69,0.72))] backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
            <Link
              className="text-xs uppercase tracking-[0.28em] text-white/58 transition hover:text-[var(--xv-gold-soft)]"
              to={`/categoria/${category.slug}`}
            >
              Regresar a {category.shortName}
            </Link>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold)]">
              {category.shortName} / {pkg.name}
            </span>
          </div>
        </div>

        <HeroXV
          data={data}
          reveal={reveal}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
        />
        <Countdown
          title={data.countdown.title}
          headline={data.countdown.headline}
          note={data.countdown.note}
          countdown={countdown}
          labels={data.countdown.labels}
          reveal={reveal}
        />
        <MessageSection data={data.message} reveal={reveal} />
        <EventDetails
          data={data.eventDetails}
          map={data.map}
          dressCode={data.dressCode}
          reveal={reveal}
        />
        <Gallery
          data={data.gallery}
          reveal={reveal}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
        />
        <Gifts data={data.gifts} reveal={reveal} />
        <RSVP data={data.rsvp} sent={rsvpSent} onSubmit={onRsvpSubmit} reveal={reveal} />
        <ClosingSection
          data={data.closing}
          reveal={reveal}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
        />
      </div>
    </div>
  );
}
