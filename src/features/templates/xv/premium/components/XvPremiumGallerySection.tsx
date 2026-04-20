import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumGallerySectionProps = {
  data: XvPremiumTemplateData["gallery"];
  galleryIndex: number;
  galleryImage: XvPremiumTemplateData["gallery"]["images"][number];
  prefersReducedMotion: boolean;
  onTouchStart: (x: number | null) => void;
  onTouchEnd: (x: number) => void;
  onOpenLightbox: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumGallerySection({
  data,
  galleryIndex,
  galleryImage,
  prefersReducedMotion,
  onTouchStart,
  onTouchEnd,
  onOpenLightbox,
  onPrev,
  onNext,
  onSelect,
  reveal,
}: XvPremiumGallerySectionProps) {
  return (
    <motion.section {...reveal(0.06, 22)} className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-10 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-12">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
            <Images className="h-3.5 w-3.5" />
            {data.kicker}
          </span>
          <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] sm:text-6xl">
            {data.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">
            {data.note}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={onPrev}
            className="border border-[rgba(212,95,154,0.12)] bg-white text-[var(--xv-accent-primary,#9d248d)] hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={onNext}
            className="border border-[rgba(212,95,154,0.12)] bg-white text-[var(--xv-accent-primary,#9d248d)] hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <motion.div whileHover={prefersReducedMotion ? undefined : { y: -4 }} transition={{ duration: 0.4 }}>
      <Card className="overflow-hidden rounded-[2.6rem] border-[rgba(212,95,154,0.12)] bg-white/72 p-3 shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
        <div
          className="relative overflow-hidden rounded-[1.8rem]"
          onTouchStart={(event) => onTouchStart(event.touches[0]?.clientX ?? null)}
          onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
        >
          <AnimatePresence mode="wait">
            <motion.button
              key={galleryImage.alt}
              type="button"
              onClick={onOpenLightbox}
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 1.04 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              className="group relative block h-[54svh] w-full overflow-hidden bg-[#1a0c14] sm:h-[68svh]"
            >
              <motion.img
                src={galleryImage.src}
                alt={galleryImage.alt}
                className="h-full w-full object-cover"
                style={{ objectPosition: galleryImage.position ?? "center center" }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,6,10,0.02),rgba(15,6,10,0.66))]" />
              <motion.div
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/20 p-3 text-white backdrop-blur-md"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.05, 1] }}
                transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Expand className="h-4 w-4" />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-left text-white">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
                    Escena {String(galleryIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block max-w-lg font-['Baskervville'] text-2xl leading-tight sm:text-3xl">
                    {galleryImage.alt}
                  </span>
                </div>
                <span className="text-sm text-white/84">Ver detalle</span>
              </div>
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7">
          {data.images.map((image, index) => (
            <motion.button
              type="button"
              key={image.alt}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.03 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              className={`aspect-square overflow-hidden rounded-[1.25rem] border transition-all ${
                index === galleryIndex
                  ? "border-[var(--xv-gold)] shadow-[0_0_0_1px_rgba(240,214,156,0.2)]"
                  : "border-white/8 opacity-75 hover:opacity-100"
              }`}
              onClick={() => onSelect(index)}
              aria-label={`Mostrar imagen ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                style={{ objectPosition: image.position ?? "center center" }}
                loading="lazy"
                decoding="async"
              />
            </motion.button>
          ))}
        </div>
      </Card>
      </motion.div>
      </div>
    </motion.section>
  );
}
