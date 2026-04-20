import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1F7A7A] via-[#205f75] to-[#1A2A44] px-6 py-12 text-white shadow-2xl shadow-[#1A2A44]/20 md:px-10 md:py-14"
    >
      <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#D4AF37]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_18%)]" />

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            Haz especial cada invitacion
          </div>
          <h2 className="mt-5 max-w-[14ch] font-serif text-4xl leading-tight md:text-5xl">
            Haz especial cada invitacion
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
            Convierte tu celebracion en una experiencia digital elegante, divertida y memorable
            desde el primer mensaje.
          </p>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            className="h-12 rounded-2xl bg-white px-7 text-base text-[#1A2A44] shadow-xl shadow-slate-950/15 hover:bg-[#fff8ec]"
          >
            Comenzar ahora
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
