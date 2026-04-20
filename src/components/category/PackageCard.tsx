import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Check, Eye, Gem, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PackageCardProps = {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  image: string;
  previewHref: string;
  featured?: boolean;
  badge?: string;
  index: number;
};

export function PackageCard({
  name,
  subtitle,
  price,
  features,
  image,
  previewHref,
  featured = false,
  badge,
  index,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={cn(featured && "md:-mt-4")}
    >
      <Card
        className={cn(
          "group relative h-full overflow-hidden rounded-[2rem] border-white/80 bg-white/95 shadow-lg shadow-slate-950/5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-950/10",
          featured &&
            "border-[#D4AF37]/55 shadow-[0_24px_60px_rgba(212,175,55,0.12)]",
        )}
      >
        <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-300 group-hover:bg-[#D4AF37]/15" />
        <CardHeader className="relative space-y-5 p-6 pb-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#1F7A7A]/10 bg-[#1F7A7A]/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
                  <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                  Paquete
                </span>
                {badge ? (
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                      featured
                        ? "border border-[#D4AF37]/25 bg-[#fff9ec] text-[#b88918]"
                        : "border border-slate-200 bg-slate-50 text-slate-500",
                    )}
                  >
                    {badge}
                  </span>
                ) : null}
              </div>
              <CardTitle className="mt-4 font-serif text-3xl text-[#1A2A44]">
                {name}
              </CardTitle>
              <p className="mt-3 text-sm leading-7 text-slate-600">{subtitle}</p>
            </div>

            {featured ? (
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff7df] text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10">
                <Gem className="h-5 w-5" />
              </span>
            ) : null}
          </div>

          <div className="flex items-end justify-between gap-4 rounded-[1.75rem] bg-[linear-gradient(180deg,#fbfcfc,#f4f8f7)] p-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Inversion
              </p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-[#1A2A44]">
                {price}
              </p>
              <p className="mt-2 text-sm text-slate-500">Pago unico</p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-right shadow-sm shadow-slate-950/5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
                Valor
              </p>
              <p className="mt-2 text-sm font-medium text-[#1A2A44]">
                Diseno premium listo para compartir
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 px-6 pb-0">
          <Link
            to={previewHref}
            className="group/image relative block overflow-hidden rounded-[1.75rem] border border-slate-100 bg-[#f8faf9]"
          >
            <img
              src={image}
              alt={`Vista previa paquete ${name}`}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover/image:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(26,42,68,0.68))]" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Vista previa
                </p>
                <p className="mt-1 text-sm font-medium text-white">Ver demo</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white">
                <Eye className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Que incluye
            </p>
            <div className="mt-4 grid gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#fbfcfc] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#1F7A7A]/10 text-[#1F7A7A]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-6 text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 p-6 pt-6 sm:flex-row">
          <Button className="h-12 flex-1 rounded-2xl bg-[#1F7A7A] text-white shadow-lg shadow-[#1F7A7A]/15 hover:bg-[#196767]">
            Seleccionar paquete
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Link
            to={previewHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 flex-1 rounded-2xl border-[#1A2A44]/10 bg-white text-[#1A2A44] hover:bg-[#f8faf9]",
            )}
          >
            Ver ejemplo
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
