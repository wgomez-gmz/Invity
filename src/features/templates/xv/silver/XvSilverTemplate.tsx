import type { CSSProperties, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import { createCountdown } from "@/features/templates/xv/premium/utils";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import { Countdown } from "@/features/templates/xv/silver/components/Countdown";
import { EventDetails } from "@/features/templates/xv/silver/components/EventDetails";
import { Footer } from "@/features/templates/xv/silver/components/Footer";
import { Gifts } from "@/features/templates/xv/silver/components/Gifts";
import { HeroSection } from "@/features/templates/xv/silver/components/HeroSection";
import { MessageSection } from "@/features/templates/xv/silver/components/MessageSection";
import { MusicControl } from "@/features/templates/xv/silver/components/MusicControl";
import { RSVP } from "@/features/templates/xv/silver/components/RSVP";

type XvSilverTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: XvPremiumTemplateData;
};

export function XvSilverTemplate({ category, pkg, data }: XvSilverTemplateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [musicEnabled, setMusicEnabled] = useState(false);
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
        "--xv-gold": "#D4AF37",
        "--xv-gold-soft": "#E7D7A0",
        "--xv-blush": "#C8C2D8",
        "--xv-blush-soft": "#EEEAF5",
        "--xv-ivory": "#F5F1EA",
        "--xv-black": "#2E2E2E",
        "--xv-ink": "#2E2E2E",
        "--xv-accent-primary": "#9A8FBF",
        "--xv-border": "rgba(154, 143, 191, 0.24)",
        "--xv-section-alt": "rgba(238, 234, 245, 0.7)",
      }) as CSSProperties,
    [],
  );

  const onRsvpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--xv-ivory)] text-[var(--xv-ink)]" style={styleVars}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(154,143,191,0.18),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(212,175,55,0.10),transparent_20%),linear-gradient(180deg,rgba(245,241,234,1),rgba(245,241,234,1))]" />
      </div>

      <div className="relative">
        <header className="sticky top-0 z-20 border-b border-[var(--xv-border)] bg-[rgba(245,241,234,0.86)] backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
            <Link
              className="text-xs uppercase tracking-[0.22em] text-[var(--xv-accent-primary)] transition hover:text-[var(--xv-black)]"
              to={`/categoria/${category.slug}`}
            >
              Regresar a {category.shortName}
            </Link>
            <span className="rounded-full border border-[var(--xv-border)] bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--xv-accent-primary)]">
              {pkg.name} / {category.shortName}
            </span>
          </div>
        </header>

        <motion.main
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <HeroSection data={data.hero} />
          <Countdown
            title={data.countdown.title}
            headline={data.countdown.headline}
            note={data.countdown.note}
            countdown={countdown}
            labels={data.countdown.labels}
          />
          <MessageSection data={data.message} />
          <EventDetails data={data.eventDetails} map={data.map} />
          <Gifts data={data.gifts} />
          <RSVP data={data.rsvp} sent={rsvpSent} onSubmit={onRsvpSubmit} />
          <Footer closing={data.closing} />
        </motion.main>
      </div>

      <MusicControl enabled={musicEnabled} onToggle={() => setMusicEnabled((current) => !current)} />
    </div>
  );
}
