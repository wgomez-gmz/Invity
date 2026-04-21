import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyGallerySectionProps = {
  gallery: BaptismRubyTemplateData["gallery"];
  leftImage: BaptismRubyTemplateData["gallery"]["images"][number];
  centerImage: BaptismRubyTemplateData["gallery"]["images"][number];
  rightImage: BaptismRubyTemplateData["gallery"]["images"][number];
  onTouchStart: (x: number | null) => void;
  onTouchEnd: (x: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onOpen: () => void;
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyGallerySection({
  gallery,
  leftImage,
  centerImage,
  rightImage,
  onTouchStart,
  onTouchEnd,
  onPrev,
  onNext,
  onOpen,
  reveal,
}: BaptismRubyGallerySectionProps) {
  return (
    <motion.section id="gallery" {...reveal(0.14)} className="mt-8">
      <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[linear-gradient(180deg,#ffffff,#EFEAE4)] p-4 shadow-[0_28px_70px_rgba(22,42,74,0.12)] sm:p-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#D4AF37]">
            <Images className="h-3.5 w-3.5" />
            {gallery.kicker}
          </span>
          <h3 className="mt-4 font-serif text-3xl text-[#2B2B2B] sm:text-4xl">{gallery.title}</h3>
        </div>

        <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={onPrev}
            className="h-10 w-10 border border-[#d4af37]/20 bg-white text-[#2B2B2B] hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div
            className="grid min-w-0 grid-cols-[0.26fr_minmax(0,1fr)_0.26fr] items-center gap-2 sm:gap-3"
            onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
          >
            <div className="overflow-hidden rounded-[1.2rem]">
              <img
                src={leftImage.src}
                alt={leftImage.alt}
                className="h-[48svh] w-full scale-[0.92] object-cover object-center opacity-70 blur-[1.4px] sm:h-[62svh]"
                style={{ objectPosition: leftImage.position ?? "center center" }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <button
              type="button"
              onClick={onOpen}
              className="group relative block overflow-hidden rounded-[1.6rem]"
            >
              <img
                src={centerImage.src}
                alt={centerImage.alt}
                className="h-[50svh] w-full object-cover object-center shadow-[0_24px_60px_rgba(14,31,58,0.28)] transition duration-500 group-hover:scale-[1.01] sm:h-[66svh]"
                style={{ objectPosition: centerImage.position ?? "center center" }}
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,28,0.04),rgba(8,14,28,0.42))]" />
            </button>

            <div className="overflow-hidden rounded-[1.2rem]">
              <img
                src={rightImage.src}
                alt={rightImage.alt}
                className="h-[48svh] w-full scale-[0.92] object-cover object-center opacity-70 blur-[1.4px] sm:h-[62svh]"
                style={{ objectPosition: rightImage.position ?? "center center" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={onNext}
            className="h-10 w-10 border border-[#d4af37]/20 bg-white text-[#2B2B2B] hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Button
            type="button"
            onClick={onOpen}
            className="h-10 rounded-full border border-[#d4af37]/35 bg-[linear-gradient(135deg,#2B2B2B,#7A7A7A)] px-7 text-[10px] uppercase tracking-[0.2em] text-white hover:brightness-105 sm:text-xs"
          >
            Ver galeria
          </Button>
        </div>
      </div>
    </motion.section>
  );
}


