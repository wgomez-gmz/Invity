import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";

type BaptismRubyLightboxProps = {
  isOpen: boolean;
  images: BaptismRubyTemplateData["gallery"]["images"];
  activeIndex: number;
  prefersReducedMotion: boolean;
  onTouchStart: (x: number | null) => void;
  onTouchEnd: (x: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

export function BaptismRubyLightbox({
  isOpen,
  images,
  activeIndex,
  prefersReducedMotion,
  onTouchStart,
  onTouchEnd,
  onPrev,
  onNext,
  onClose,
}: BaptismRubyLightboxProps) {
  const activeImage = images[activeIndex];

  return (
    <AnimatePresence>
      {isOpen && activeImage ? (
        <motion.div
          className="fixed inset-0 z-[170] bg-[#0a1220]/92 p-2 backdrop-blur-xl sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto h-full w-full max-w-[1400px]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Card className="flex h-full flex-col overflow-hidden rounded-[2rem] border-white/12 bg-[linear-gradient(180deg,rgba(15,26,44,0.92),rgba(7,14,26,0.92))] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-3">
              <div className="mb-2 flex items-center justify-between rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3 text-white/90">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37]">
                  Galeria premium
                </span>
                <span className="text-xs text-white/80">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </div>

              <div
                className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b1424]"
                onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? null)}
                onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
              >
                <motion.img
                  key={activeImage.alt}
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-full object-contain object-center"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.015 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.42, ease: [0.19, 1, 0.22, 1] }}
                />

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/35 text-white backdrop-blur-md hover:bg-black/55"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/35 text-white backdrop-blur-md hover:bg-black/55"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={onClose}
                  className="absolute right-3 top-3 border border-white/20 bg-black/35 text-white backdrop-blur-md hover:bg-black/55"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
