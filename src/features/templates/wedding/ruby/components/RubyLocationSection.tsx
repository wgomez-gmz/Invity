import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingLocationSection } from "@/features/templates/wedding/templateTypes";
import { renderAddress, type RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";
import { RubyOverlayDialog } from "@/features/templates/wedding/ruby/components/RubyOverlayDialog";

type RubyLocationSectionProps = {
  section: WeddingLocationSection;
  activeIndex: number;
  style?: CSSProperties;
  prefersReducedMotion: boolean;
  slideTransition: { duration: number; ease?: readonly [number, number, number, number] };
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
  reverse?: boolean;
  type: "church" | "reception";
};

export function RubyLocationSection({
  section,
  activeIndex,
  style,
  prefersReducedMotion,
  slideTransition,
  hoverLift,
  tapPress,
  textReveal,
  reverse = false,
  type,
}: RubyLocationSectionProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <section
        className={`location-section ruby-surface-section scroll-reveal ${
          reverse ? "reveal-drift-right reception-section" : "reveal-drift-left"
        }`}
        style={style}
      >
        {!reverse ? (
          <div className="location-heading">
            <motion.span {...textReveal(0.08, 18)}>{section.sectionLabel}</motion.span>
          </div>
        ) : null}

        <div className="location-stage">
          <div
            className="location-carousel"
            aria-label={type === "church" ? "Fotos de la iglesia" : "Fotos de la recepcion"}
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={`${activeIndex}-${section.slides[activeIndex]?.alt ?? type}`}
                className="location-carousel-image location-carousel-image-active"
                src={section.slides[activeIndex]?.image}
                alt={section.slides[activeIndex]?.alt ?? ""}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, scale: 1.02 }}
                transition={slideTransition}
              />
            </AnimatePresence>
          </div>

          <div className="location-underlay-photo" aria-hidden="true">
            <img src={section.supportImage} alt="" />
          </div>

          <article className="location-card">
            <motion.div className="location-card-topbar" {...textReveal(0.16, 14)}>
              {section.title}
            </motion.div>
            <div className="location-card-body">
              <div className="location-card-icon" aria-hidden="true">
                {type === "church" ? (
                  <svg viewBox="0 0 64 64">
                    <path d="M32 12v16" />
                    <path d="M24 20h16" />
                    <path d="M20 52V30h24v22" />
                    <path d="M16 52h32" />
                    <path d="M24 30l8-8 8 8" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 64 64">
                    <path d="M16 48h32" />
                    <path d="M26 18h12" />
                    <path d="M22 18c0 9 4 16 10 16s10-7 10-16" />
                    <path d="M28 34v14" />
                    <path d="M36 34v14" />
                    <path d="M22 18h20" />
                  </svg>
                )}
              </div>
              <motion.p className="location-card-kicker" {...textReveal(0.26, 16)}>
                {section.venueType}
              </motion.p>
              <motion.h3 {...textReveal(0.34, 18)}>{section.venueName}</motion.h3>
              <motion.p className="location-card-time" {...textReveal(0.42, 16)}>
                {section.time}
              </motion.p>
              <motion.p className="location-card-address" {...textReveal(0.5, 18)}>
                {renderAddress(section.addressLines)}
              </motion.p>
              <motion.button
                className="location-map-button"
                type="button"
                onClick={() => setIsMapOpen(true)}
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

      <RubyOverlayDialog
        open={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        eyebrow={section.sectionLabel}
        title={section.venueName}
      >
        <div className="space-y-4">
          <p className="text-sm leading-7 text-[rgba(64,66,58,0.74)]">
            {section.time} · {renderAddress(section.addressLines)}
          </p>
          <div className="rounded-[1.6rem] border border-[rgba(190,172,133,0.14)] bg-white p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(122,132,101,0.94)]">
              Vista previa
            </p>
            <img
              src={section.slides[activeIndex]?.image}
              alt={section.venueName}
              className="mt-4 h-64 w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <a
            href={section.mapUrl ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-2xl bg-[rgb(49,11,24)] px-5 text-sm font-semibold text-[rgba(250,246,240,0.98)] transition-transform hover:scale-[1.01]"
          >
            Abrir ubicacion
          </a>
        </div>
      </RubyOverlayDialog>
    </>
  );
}
