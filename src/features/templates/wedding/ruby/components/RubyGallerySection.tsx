import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyGallerySectionProps = {
  gallery: NonNullable<WeddingTemplateData["gallery"]>;
  style?: CSSProperties;
  prefersReducedMotion: boolean;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyGallerySection({
  gallery,
  style,
  prefersReducedMotion,
  textReveal,
}: RubyGallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const totalSlides = gallery.slides.length;
  const activeSlide = gallery.slides[activeIndex];

  const goToSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + totalSlides) % totalSlides);
  };

  const handleTouchEnd = (endX: number) => {
    if (touchStartX === null) {
      return;
    }

    const diff = endX - touchStartX;
    if (Math.abs(diff) < 40) {
      setTouchStartX(null);
      return;
    }

    goToSlide(diff < 0 ? activeIndex + 1 : activeIndex - 1);
    setTouchStartX(null);
  };

  useEffect(() => {
    if (isGalleryOpen || totalSlides <= 1 || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 4600);

    return () => window.clearInterval(intervalId);
  }, [isGalleryOpen, totalSlides, prefersReducedMotion]);

  useEffect(() => {
    if (!isGalleryOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }

      if (event.key === "ArrowLeft") {
        goToSlide(activeIndex - 1);
      }

      if (event.key === "ArrowRight") {
        goToSlide(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isGalleryOpen, activeIndex, totalSlides]);

  const modal = (
    <AnimatePresence>
      {isGalleryOpen ? (
        <motion.div
          className="fixed inset-0 z-[170] bg-[rgba(20,7,12,0.82)] p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsGalleryOpen(false)}
        >
          <motion.div
            className="mx-auto h-full w-full max-w-[1200px]"
            onClick={(event) => event.stopPropagation()}
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
          >
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[rgba(190,172,133,0.22)] bg-[linear-gradient(180deg,rgba(33,12,26,0.94),rgba(20,7,15,0.94))] p-2 shadow-[0_30px_90px_rgba(4,1,3,0.52)]">
              <div className="mb-2 flex items-center justify-between gap-3 rounded-[1.2rem] border border-[rgba(190,172,133,0.18)] bg-black/24 px-4 py-3 text-[rgba(255,248,240,0.9)]">
                <div className="flex items-center gap-2">
                  <Images className="h-4 w-4 text-[rgba(190,172,133,0.96)]" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[rgba(190,172,133,0.96)]">
                    Galeria Rubi
                  </span>
                </div>
                <span className="text-xs text-[rgba(255,248,240,0.72)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
              </div>

              <div
                className="relative flex min-h-0 flex-1 overflow-hidden rounded-[1.4rem] border border-[rgba(190,172,133,0.16)]"
                onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
                onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`modal-${activeIndex}-${activeSlide.alt}`}
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    className="h-full w-full object-cover object-center bg-[rgb(18,7,12)]"
                    initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.02 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,7,0.05),rgba(10,4,7,0.38))]" />

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => goToSlide(activeIndex - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => goToSlide(activeIndex + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => setIsGalleryOpen(false)}
                  className="absolute right-4 top-4 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="mt-2 flex gap-2 overflow-x-auto rounded-[1.2rem] border border-[rgba(190,172,133,0.16)] bg-black/20 p-2">
                {gallery.slides.map((slide, index) => (
                  <button
                    type="button"
                    key={`${slide.alt}-${index}`}
                    onClick={() => goToSlide(index)}
                    className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border transition-all sm:h-24 sm:w-20 ${
                      index === activeIndex
                        ? "border-[rgba(190,172,133,0.96)] shadow-[0_0_0_1px_rgba(190,172,133,0.28)]"
                        : "border-white/15 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Ver foto ${index + 1}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <section className="ruby-surface-section scroll-reveal reveal-bloom" style={style}>
      <div className="mx-auto w-full max-w-[1120px]">
        <motion.div {...textReveal(0.08, 18)} className="mb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(190,172,133,0.26)] bg-[rgba(255,251,245,0.74)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[rgba(122,132,101,0.94)]">
            <Images className="h-3.5 w-3.5 text-[rgba(190,172,133,0.96)]" />
            {gallery.kicker}
          </span>
          <h3 className="mt-5 font-serif text-4xl text-[rgba(255,248,240,0.94)] drop-shadow-[0_16px_36px_rgba(9,4,6,0.34)] sm:text-5xl">
            {gallery.title}
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[rgba(255,248,240,0.72)] sm:text-base">
            {gallery.note}
          </p>
        </motion.div>
      </div>

      <motion.div {...textReveal(0.12, 20)}>
        <Card className="mx-auto w-full max-w-[1120px] overflow-hidden rounded-[2.2rem] border border-[rgba(190,172,133,0.18)] bg-[linear-gradient(180deg,rgba(255,251,245,0.15),rgba(255,251,245,0.09))] p-3 shadow-[0_32px_90px_rgba(20,7,12,0.34)] backdrop-blur-xl">
          <div
            className="relative overflow-hidden rounded-[1.6rem]"
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            <AnimatePresence mode="wait">
              <motion.button
                key={`${activeIndex}-${activeSlide.alt}`}
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="group relative block h-[54svh] w-full overflow-hidden bg-[rgb(25,9,14)] sm:h-[68svh]"
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.03 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              >
                <motion.img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="h-full w-full object-cover object-center"
                  initial={prefersReducedMotion ? undefined : { scale: 1.03 }}
                  animate={prefersReducedMotion ? undefined : { scale: 1 }}
                  transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1] }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,6,10,0.08),rgba(15,6,10,0.58))]" />
                <motion.div
                  className="absolute right-4 top-4 rounded-full border border-white/12 bg-black/24 p-3 text-white backdrop-blur-md"
                  animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Expand className="h-4 w-4" />
                </motion.div>
              </motion.button>
            </AnimatePresence>
          </div>

          <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:flex sm:justify-center sm:gap-3">
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={() => goToSlide(activeIndex - 1)}
              className="h-10 w-10 border border-[rgba(190,172,133,0.22)] bg-[rgba(255,251,245,0.86)] text-[rgb(49,11,24)] hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="h-10 w-full rounded-full border border-[rgba(190,172,133,0.24)] bg-[linear-gradient(135deg,rgba(122,132,101,0.98),rgba(95,104,78,0.98))] px-4 text-[10px] uppercase tracking-[0.16em] text-[rgba(255,250,244,0.98)] shadow-[0_14px_36px_rgba(20,7,12,0.28)] transition-transform hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.22em]"
            >
              Ver galeria
            </Button>
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={() => goToSlide(activeIndex + 1)}
              className="h-10 w-10 border border-[rgba(190,172,133,0.22)] bg-[rgba(255,251,245,0.86)] text-[rgb(49,11,24)] hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </motion.div>

      </section>
      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}
