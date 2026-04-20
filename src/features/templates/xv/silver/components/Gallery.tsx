import { motion } from "motion/react";
import { Images } from "lucide-react";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type GalleryProps = {
  data: XvPremiumTemplateData["gallery"];
};

export function Gallery({ data }: GalleryProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-xl border border-[var(--xv-border)] bg-white px-6 py-10 shadow-md sm:px-10"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <Images className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">{data.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/78 sm:text-base">{data.note}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.images.map((image, index) => (
            <motion.div
              key={image.alt}
              className="overflow-hidden rounded-xl border border-[var(--xv-border)] bg-white shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: image.position ?? "center center" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
