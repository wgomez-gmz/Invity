import { motion } from "motion/react";
import { Church, Clock3, Gem, MapPinned, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type EventDetailsProps = {
  data: XvPremiumTemplateData["eventDetails"];
  map: XvPremiumTemplateData["map"];
  dressCode: XvPremiumTemplateData["dressCode"];
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
};

function iconFor(type: XvPremiumTemplateData["eventDetails"]["cards"][number]["icon"]) {
  if (type === "church") return Church;
  if (type === "party") return PartyPopper;
  return Clock3;
}

export function EventDetails({ data, map, dressCode, reveal }: EventDetailsProps) {
  return (
    <motion.section
      {...reveal(0.08, 18)}
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="rounded-[2.4rem] border border-[rgba(26,42,68,0.1)] bg-[linear-gradient(180deg,rgba(255,248,241,0.98),rgba(236,243,252,0.98))] px-6 py-10 shadow-[0_28px_80px_rgba(26,42,68,0.1)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,175,55,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <MapPinned className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)] sm:text-5xl">
          {data.title}
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            const Icon = iconFor(card.icon);
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full rounded-[1.8rem] border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(22,36,58,0.97),rgba(31,46,70,0.95))] p-6 text-white shadow-[0_20px_60px_rgba(12,20,35,0.18)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[rgba(212,175,55,0.14)] text-[var(--xv-gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <strong className="block text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold-soft)]">
                        {card.title}
                      </strong>
                      <h3 className="mt-1 font-['Baskervville'] text-2xl font-normal text-white">{card.venue}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/76">{card.address}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.26em] text-[var(--xv-blush)]">{card.time}</p>
                  {(card.icon === "church" || card.icon === "party") && (
                    <a href={map.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block">
                      <Button className="h-11 rounded-full bg-[linear-gradient(135deg,#f3df9f,#d4af37)] px-5 text-[#1a2236] hover:opacity-95">
                        {"Ver ubicación"}
                      </Button>
                    </a>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-6">
          <Card className="rounded-[1.8rem] border-[rgba(53,83,122,0.2)] bg-[linear-gradient(180deg,rgba(255,251,246,0.98),rgba(236,243,252,0.98))] p-6 text-[var(--xv-ink)] shadow-[0_18px_50px_rgba(26,42,68,0.1)]">
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[rgba(53,83,122,0.14)] text-[var(--xv-blush)]">
                <Gem className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold)]">{dressCode.kicker}</span>
                <h3 className="mt-2 font-['Baskervville'] text-2xl font-normal text-[var(--xv-black)]">{dressCode.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--xv-ink)]/82">
                  {dressCode.cards[0]?.value}. {dressCode.note}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
