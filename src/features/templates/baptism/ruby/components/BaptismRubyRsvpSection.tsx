import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { FormEvent } from "react";
import type { BaptismRubyTemplateData } from "@/features/templates/baptism/templateTypes";
import type { BaptismReveal } from "@/features/templates/baptism/ruby/components/types";

type BaptismRubyRsvpSectionProps = {
  rsvp: BaptismRubyTemplateData["rsvp"];
  baptizedName: string;
  guestName: string;
  dedication: string;
  guestCount: number;
  onDedicationChange: (value: string) => void;
  onGuestCountChange: (value: number) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  reveal: (delay?: number, y?: number) => BaptismReveal;
};

export function BaptismRubyRsvpSection({
  rsvp,
  baptizedName,
  guestName,
  dedication,
  guestCount,
  onDedicationChange,
  onGuestCountChange,
  onSubmit,
  reveal,
}: BaptismRubyRsvpSectionProps) {
  const passName = guestName.trim() || "Invitado especial";
  const maxGuests = Math.max(1, rsvp.passGuestLimit);
  const countOptions = Array.from({ length: maxGuests }, (_, index) => index + 1);

  return (
    <motion.section
      id="rsvp"
      {...reveal(0.18)}
      className="mt-8 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_36%),linear-gradient(180deg,#ffffff,#f3f8ff)] p-3 sm:p-5"
    >
      <Card className="mx-auto max-w-3xl rounded-[2rem] border-[#d4af37]/22 bg-white/90 p-6 shadow-[0_20px_60px_rgba(20,40,68,0.1)]">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#8e6f15]">
          <MessageCircle className="h-4 w-4" />
          RSVP
        </span>
        <h3 className="mt-4 font-serif text-3xl text-[#193252]">{rsvp.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{rsvp.note}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.92fr] md:items-start">
          <div className="rounded-[1.4rem] border border-[#d4af37]/28 bg-[linear-gradient(180deg,#fffef8,#f8fbff)] p-4 shadow-[0_14px_34px_rgba(24,44,76,0.1)]">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#8e6f15]">{rsvp.passTitle}</p>
            <h4 className="mt-2 font-serif text-3xl text-[#193252]">{passName}</h4>
            <p className="mt-1 inline-flex rounded-full border border-[#d4af37]/30 bg-white px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#31557c]">
              {maxGuests} {maxGuests === 1 ? "persona" : "personas"}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6c7d97]">{rsvp.passNote}</p>
          </div>

          <form className="grid gap-3" onSubmit={onSubmit}>
            <label className="grid gap-2 text-sm text-[#31557c]">
              {rsvp.guestCountLabel}
              <select
                value={guestCount}
                onChange={(event) => onGuestCountChange(Number(event.target.value))}
                className="h-11 rounded-xl border border-[#d4af37]/28 bg-white px-4 text-slate-700 outline-none transition focus:border-[#193252]"
              >
                {countOptions.map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "persona" : "personas"}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm text-[#31557c]">
              {rsvp.dedicationLabel || `Dedica unas bonitas palabras para ${baptizedName}`}
              <textarea
                value={dedication}
                onChange={(event) => onDedicationChange(event.target.value)}
                className="min-h-24 rounded-xl border border-[#d4af37]/28 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-[#193252]"
                placeholder={rsvp.dedicationPlaceholder}
              />
            </label>
            <Button
              type="submit"
              className="mt-2 h-11 rounded-full bg-[linear-gradient(135deg,#193252,#31557c)] px-7 text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_14px_36px_rgba(26,45,71,0.24)] transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Confirmar
            </Button>
          </form>

        </div>
      </Card>
    </motion.section>
  );
}
