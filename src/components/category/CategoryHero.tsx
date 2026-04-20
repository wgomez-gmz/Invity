import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Gem, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CategoryHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  categoryName: string;
  icon: string;
  previewImage: string;
  previewHref: string;
};

const particles = [
  "left-[10%] top-[18%]",
  "right-[16%] top-[14%]",
  "left-[14%] bottom-[22%]",
  "right-[12%] bottom-[16%]",
];

export function CategoryHero({
  badge,
  title,
  subtitle,
  categoryName,
  icon,
  previewImage,
  previewHref,
}: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(242,247,246,0.94)_55%,rgba(230,239,237,0.96))] px-6 py-8 shadow-xl shadow-slate-950/5 md:px-10 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(31,122,122,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(26,42,68,0.08),transparent_26%)]" />
      {particles.map((position, index) => (
        <motion.span
          key={position}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.85, 1, 0.9] }}
          transition={{
            duration: 4.2 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute h-2.5 w-2.5 rounded-full bg-[#D4AF37]/70 shadow-[0_0_24px_rgba(212,175,55,0.35)]",
            position,
          )}
        />
      ))}

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1F7A7A]/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1F7A7A] backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            {badge}
          </span>

          <h1 className="mt-5 max-w-[13ch] font-serif text-4xl leading-tight text-[#1A2A44] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Estilo
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1A2A44]">
                Lujo accesible
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Formato
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1A2A44]">
                Listo para WhatsApp
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Experiencia
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1A2A44]">
                Visual y memorable
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#paquetes"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-2xl bg-[#1F7A7A] px-6 text-white shadow-lg shadow-[#1F7A7A]/20 transition-transform hover:scale-[1.02] hover:bg-[#196767]",
              )}
            >
              Ver paquetes
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to={previewHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-2xl border-white/80 bg-white/75 px-6 text-[#1A2A44] shadow-lg shadow-slate-950/5 transition-transform hover:scale-[1.02] hover:bg-white",
              )}
            >
              Ver demo
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="relative mx-auto w-full max-w-[30rem]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -left-3 top-14 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg shadow-slate-950/5 backdrop-blur md:block"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
              Diseno premium
            </p>
            <p className="mt-1 text-sm text-slate-500">Acabados modernos y elegantes</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -right-2 bottom-12 hidden rounded-2xl border border-[#D4AF37]/20 bg-[#fffaf0]/90 px-4 py-3 shadow-lg shadow-[#D4AF37]/10 backdrop-blur md:block"
          >
            <div className="flex items-center gap-2 text-[#1A2A44]">
              <Gem className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-sm font-semibold">Detalle que se nota</span>
            </div>
          </motion.div>

          <div className="relative rounded-[2rem] border border-[#1A2A44]/10 bg-[linear-gradient(160deg,#1A2A44,#20445c_48%,#1F7A7A)] p-4 shadow-[0_28px_60px_rgba(26,42,68,0.18)]">
            <div className="absolute inset-x-10 top-0 h-20 rounded-full bg-[#D4AF37]/20 blur-3xl" />
            <div className="relative rounded-[1.65rem] border border-white/10 bg-white/95 p-4">
              <div className="flex items-center justify-between px-1 pb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                <span>Invity collection</span>
                <span>{categoryName}</span>
              </div>

              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#f9fbfb,#eef3f2)] p-4">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-lg shadow-slate-950/5">
                  <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_70%)]" />
                  <img
                    src={previewImage}
                    alt={`Vista previa ${categoryName}`}
                    className="h-[23rem] w-full object-cover"
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.25rem] border border-white/70 bg-white/86 px-4 py-3 shadow-lg shadow-slate-950/10 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f8f8]">
                        <img src={icon} alt="" className="h-7 w-7 object-contain" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
                          Invitacion digital
                        </p>
                        <p className="mt-1 font-serif text-2xl text-[#1A2A44]">
                          {categoryName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
