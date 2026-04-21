import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvMediaImage } from "@/features/templates/xv/templateTypes";

type XvPremiumLightboxProps = {
  isOpen: boolean;
  images: XvMediaImage[];
  activeIndex: number;
  prefersReducedMotion: boolean;
  onTouchStart: (x: number | null) => void;
  onTouchEnd: (x: number) => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export function XvPremiumLightbox({
  isOpen,
  images,
  activeIndex,
  prefersReducedMotion,
  onTouchStart,
  onTouchEnd,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: XvPremiumLightboxProps) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        onPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && activeImage ? (
        <motion.div
          className="fixed inset-0 z-[160] bg-[#140810]/84 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            className="mx-auto h-full w-full max-w-[1200px]"
          >
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(33,12,26,0.92),rgba(20,7,15,0.92))] p-2 shadow-[0_30px_90px_rgba(4,1,3,0.5)]">
              <div className="mb-2 flex items-center justify-between gap-3 rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-3 text-white/90">
                <div className="flex items-center gap-2">
                  <Images className="h-4 w-4 text-[var(--xv-gold,#f3dfaa)]" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold,#f3dfaa)]">
                    Galeria premium
                  </span>
                </div>
                <span className="text-xs text-white/75">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>

              <div
                className="relative flex min-h-0 flex-1 overflow-hidden rounded-[1.4rem] border border-white/10"
                onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? null)}
                onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage.alt}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="h-full w-full object-cover bg-[#120712] object-center"
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
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onClose}
                  className="absolute right-4 top-4 border border-white/15 bg-black/40 text-white backdrop-blur-md hover:bg-black/60"
                >
                  <X className="h-4 w-4" />
                </Button>

              </div>

              <div className="mt-2 flex gap-2 overflow-x-auto rounded-[1.2rem] border border-white/10 bg-black/20 p-2">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image.alt}
                    onClick={() => onSelect(index)}
                    className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border transition-all sm:h-24 sm:w-20 ${
                      index === activeIndex
                        ? "border-[var(--xv-gold,#f3dfaa)] shadow-[0_0_0_1px_rgba(243,223,170,0.32)]"
                        : "border-white/15 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
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
}
