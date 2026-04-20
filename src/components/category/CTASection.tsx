import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  previewHref: string;
};

export function CTASection({
  title,
  description,
  previewHref,
}: CTASectionProps) {
  return (
    <motion.section
      id="cta-final"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2rem] border border-[#1A2A44]/10 bg-[linear-gradient(135deg,#1A2A44,#203f58_48%,#1F7A7A)] px-6 py-10 shadow-[0_30px_60px_rgba(26,42,68,0.20)] md:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/75 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            Invity premium
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#paquetes"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-2xl border-white/20 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/15",
            )}
          >
            Ver paquetes
          </a>
          <Link
            to={previewHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-2xl bg-white px-6 text-[#1A2A44] shadow-lg shadow-black/10 hover:bg-[#fffaf0]",
            )}
          >
            Crear mi invitacion
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
