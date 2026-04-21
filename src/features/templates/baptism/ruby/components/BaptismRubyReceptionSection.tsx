import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyReceptionSectionProps = {
  reception: BaptismRubyTemplateData["reception"];
  fallbackImage: BaptismRubyTemplateData["gallery"]["images"][number];
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyReceptionSection({
  reception,
  fallbackImage,
  reveal,
}: BaptismRubyReceptionSectionProps) {
  const receptionImage = reception.image ?? fallbackImage;

  return (
    <motion.section id="reception" {...reveal(0.12)} className="mt-8">
      <div className="grid gap-4 md:grid-cols-[1fr_0.95fr] md:items-center">
        <motion.figure {...reveal(0.14)} className="overflow-hidden rounded-[2rem]">
          <img
            src={receptionImage.src}
            alt={receptionImage.alt}
            className="h-[56svh] w-full object-cover shadow-[0_28px_70px_rgba(22,42,74,0.2)] sm:h-[64svh]"
            style={{ objectPosition: receptionImage.position ?? "center center" }}
            loading="lazy"
            decoding="async"
          />
        </motion.figure>

        <motion.article
          {...reveal(0.18)}
          className="rounded-[1.8rem] border border-[#d4af37]/22 bg-white/88 p-6 shadow-[0_20px_56px_rgba(24,44,76,0.12)] backdrop-blur-md"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#D4AF37]">
            <MapPin className="h-4 w-4" />
            Recepcion
          </span>
          <h3 className="mt-4 font-serif text-4xl text-[#2B2B2B]">{reception.venue}</h3>
          <p className="mt-3 inline-flex rounded-full border border-[#d4af37]/25 bg-white px-4 py-1 text-xs uppercase tracking-[0.18em] text-[#7A7A7A]">
            {reception.time}
          </p>
          <p className="mt-4 text-sm leading-8 text-[#7A7A7A]">{reception.note}</p>
          <Button
            type="button"
            onClick={() => window.open(reception.mapsUrl, "_blank", "noopener,noreferrer")}
            className="mt-5 h-10 rounded-full border border-[#d4af37]/35 bg-[linear-gradient(135deg,#2B2B2B,#7A7A7A)] px-6 text-[10px] uppercase tracking-[0.2em] text-white shadow-[0_14px_36px_rgba(26,45,71,0.24)] transition hover:-translate-y-0.5 hover:brightness-105 sm:text-xs"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Como llegar
          </Button>
        </motion.article>
      </div>
    </motion.section>
  );
}


