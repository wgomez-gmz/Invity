import { motion } from "motion/react";
import { Church, Clock3, MapPinned, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type EventDetailsProps = {
  data: XvPremiumTemplateData["eventDetails"];
  map: XvPremiumTemplateData["map"];
};

function iconFor(type: XvPremiumTemplateData["eventDetails"]["cards"][number]["icon"]) {
  if (type === "church") return Church;
  if (type === "party") return PartyPopper;
  return Clock3;
}

export function EventDetails({ data, map }: EventDetailsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
      <motion.div
        className="rounded-xl border border-[var(--xv-border)] bg-white px-6 py-10 shadow-md sm:px-10"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--xv-accent-primary)]">
          <MapPinned className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-2xl font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">{data.title}</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            const Icon = iconFor(card.icon);
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full rounded-xl border-[var(--xv-border)] bg-[var(--xv-section-alt)] p-6 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--xv-accent-primary)] shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--xv-accent-primary)]">{card.title}</p>
                      <h3 className="mt-1 font-['Baskervville'] text-2xl text-[var(--xv-black)]">{card.venue}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--xv-ink)]/80">{card.address}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--xv-ink)]/70">{card.time}</p>
                  {(card.icon === "church" || card.icon === "party") && (
                    <a href={map.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block">
                      <Button
                        variant="outline"
                        className="h-10 rounded-xl border-[var(--xv-border)] bg-white text-[var(--xv-black)] hover:bg-[var(--xv-blush-soft)]"
                      >
                        Ver ubicacion
                      </Button>
                    </a>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
