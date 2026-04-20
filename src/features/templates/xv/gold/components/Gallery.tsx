import { useState } from "react";
import { motion } from "motion/react";
import { Expand, Images } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type GalleryProps = {
  data: XvPremiumTemplateData["gallery"];
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
  prefersReducedMotion: boolean;
};

export function Gallery({ data, reveal, prefersReducedMotion }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = data.images[activeIndex];
  const goToNextImage = () => {
    setActiveIndex((current) => (current + 1) % data.images.length);
  };

  return (
    <motion.section
      {...reveal(0.06, 18)}
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="rounded-[2.4rem] border border-[var(--xv-border)] bg-[var(--xv-section-bg)] px-6 py-10 shadow-[0_24px_70px_rgba(26,42,68,0.08)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <Images className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">{data.note}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div whileHover={prefersReducedMotion ? undefined : { y: -3 }} transition={{ duration: 0.35 }}>
            <Card className="overflow-hidden rounded-[2rem] border-[var(--xv-border)] bg-[#17253b] p-3 shadow-[0_24px_70px_rgba(26,42,68,0.16)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <button
                  type="button"
                  onClick={goToNextImage}
                  className="group relative block w-full text-left"
                  aria-label="Mostrar siguiente imagen"
                >
                  <motion.img
                    key={activeImage.alt}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="h-[58svh] w-full object-cover sm:h-[68svh]"
                    style={{ objectPosition: activeImage.position ?? "center center" }}
                    initial={prefersReducedMotion ? undefined : { opacity: 0.72, scale: 1.02 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,29,0.08),rgba(10,16,29,0.42))]" />
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition group-hover:scale-105">
                    <Expand className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {data.images.map((image, index) => (
              <motion.button
                key={image.alt}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
                className={`overflow-hidden rounded-[1.4rem] border bg-white shadow-[0_14px_36px_rgba(26,42,68,0.08)] transition-all ${
                  index === activeIndex ? "border-[var(--xv-gold)]" : "border-[rgba(212,175,55,0.12)]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full object-cover"
                  style={{ objectPosition: image.position ?? "center center" }}
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
