import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sparkles, Stars, Gem, ArrowRight } from "lucide-react";

type HeroSectionProps = {
  mockupImage: string;
};

const stats = [
  { label: "Diseño editorial", value: "Premium" },
  { label: "Entrega", value: "Digital inmediata" },
  { label: "Comparte", value: "WhatsApp listo" },
];

export function HeroSection({ mockupImage }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white via-[#fcfcfb] to-[#eef4f3] px-6 py-10 shadow-xl shadow-slate-950/5 md:px-10 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(31,122,122,0.14),transparent_24%)]" />
      <motion.div
        className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-8 h-32 w-32 rounded-full bg-[#1F7A7A]/10 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1F7A7A]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1F7A7A] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            Invity - Invitaciones Digitales
          </div>

          <h1 className="max-w-[12ch] text-balance font-serif text-4xl leading-tight text-[#1A2A44] sm:text-5xl xl:text-6xl">
            Invitaciones digitales que hacen tu evento inolvidable
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Diseños elegantes, animados y personalizados para bodas, cumpleaños, bautizos y
            celebraciones especiales. Una experiencia premium para compartir emoción, estilo y
            magia desde el primer clic.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="h-12 rounded-2xl bg-[#1F7A7A] px-7 text-base text-white shadow-lg shadow-[#1F7A7A]/20 hover:bg-[#1b6c6c]"
              >
                Crear invitacion
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-2xl border-[#1F7A7A]/20 bg-white/80 px-7 text-base text-[#1A2A44] hover:border-[#D4AF37]/50 hover:bg-[#fffaf0]"
              >
                Ver diseños
              </Button>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-lg shadow-slate-950/5 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1A2A44]">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[30rem]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative rounded-[2rem] border border-white/15 bg-[#1A2A44] p-4 shadow-2xl shadow-[#1A2A44]/20"
          >
            <div className="absolute -left-7 top-10 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg shadow-slate-950/5 backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                <Stars className="h-4 w-4 text-[#D4AF37]" />
                Magia visual
              </div>
              <p className="mt-2 max-w-[12rem] text-sm text-slate-600">
                Brillos sutiles, movimiento suave y una presentacion que se siente especial.
              </p>
            </div>

            <div className="absolute -bottom-6 -right-5 rounded-2xl border border-[#D4AF37]/20 bg-[#fffaf0] p-4 shadow-lg shadow-[#D4AF37]/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1A2A44]">
                <Gem className="h-4 w-4 text-[#D4AF37]" />
                Ideal para momentos inolvidables
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#274469] to-[#18243c]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.24em] text-white/70">
                <span>Invity Signature</span>
                <span>Live preview</span>
              </div>

              <div className="relative p-5">
                <div className="absolute inset-x-10 top-8 h-32 rounded-full bg-[#D4AF37]/15 blur-3xl" />
                <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                  <div className="rounded-[1.25rem] bg-white px-4 pb-5 pt-4">
                    <div className="mb-4 flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      <span>Nuestra invitacion</span>
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <img
                      src={mockupImage}
                      alt="Vista previa de una invitacion digital premium"
                      className="h-[22rem] w-full rounded-[1.15rem] object-cover shadow-lg shadow-slate-900/10"
                    />
                    <div className="mt-4 space-y-2 text-center">
                      <p className="text-xs uppercase tracking-[0.28em] text-[#1F7A7A]">
                        Elegancia + celebracion
                      </p>
                      <p className="font-serif text-2xl text-[#1A2A44]">
                        Una invitacion que emociona antes del evento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
