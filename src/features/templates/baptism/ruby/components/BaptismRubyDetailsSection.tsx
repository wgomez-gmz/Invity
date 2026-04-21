import { Church, Clock3, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyDetailsSectionProps = {
  details: BaptismRubyTemplateData["details"];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyDetailsSection({ details, reveal }: BaptismRubyDetailsSectionProps) {
  const cards = [
    { icon: Clock3, label: "Fecha", value: details.date },
    { icon: Clock3, label: "Hora", value: details.time },
    { icon: Church, label: "Iglesia", value: details.church },
  ];

  return (
    <motion.section id="details" {...reveal(0.08)} className="mt-8">
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8e6f15]">Detalles del evento</p>
        <h2 className="mt-4 font-serif text-4xl text-[#193252] sm:text-5xl">
          Cada instante preparado con amor y elegancia
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.label}
            {...reveal(0.1 + index * 0.05, 22)}
            className="rounded-[1.5rem] border border-[#d4af37]/24 bg-white/70 p-6 text-center shadow-[0_18px_46px_rgba(26,45,77,0.11)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(26,45,77,0.18)]"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 bg-white text-[#8e6f15]">
              <card.icon className="h-4 w-4" />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#6c7d97]">{card.label}</p>
            <p className="mt-2 font-serif text-2xl text-[#193252]">{card.value}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button
          type="button"
          onClick={() => window.open(details.mapsUrl, "_blank", "noopener,noreferrer")}
          className="h-11 rounded-full border border-[#d4af37]/35 bg-[linear-gradient(135deg,#193252,#31557c)] px-7 text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_14px_36px_rgba(26,45,71,0.24)] transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <MapPin className="mr-2 h-4 w-4" />
          Ver ubicacion en Google Maps
        </Button>
      </div>
    </motion.section>
  );
}
