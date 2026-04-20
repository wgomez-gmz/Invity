import { motion } from "motion/react";

type GalleryItem = {
  image: string;
  title: string;
  heightClass: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

export function Gallery({ items }: GalleryProps) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
            Galeria
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#1A2A44] md:text-4xl">
            Diseños pensados para enamorar desde la primera vista
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-slate-600">
          Cada invitacion combina celebracion, sofisticacion y un lenguaje visual contemporaneo.
        </p>
      </div>

      <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
            className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl ${item.heightClass} shadow-xl shadow-slate-950/10`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/80 via-[#1A2A44]/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-end justify-between p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                  Invitacion premium
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                Ver demo
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
