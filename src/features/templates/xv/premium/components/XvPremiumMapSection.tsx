import { motion } from "motion/react";
import { MapPinned, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumMapSectionProps = {
  data: XvPremiumTemplateData["map"];
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumMapSection({
  data,
  reveal,
}: XvPremiumMapSectionProps) {
  return (
    <motion.section {...reveal(0.1, 20)} className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-10 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-12">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.16)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          <MapPinned className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] sm:text-6xl">
          {data.title}
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
        <Card className="rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-[linear-gradient(180deg,rgba(255,251,253,0.98),rgba(251,240,246,0.94))] p-8 shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
          <strong className="block text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)]">
            {"Recepción"}
          </strong>
          <h3 className="mt-4 font-['Baskervville'] text-3xl font-normal text-[var(--xv-accent-primary,#9d248d)]">
            {data.venue}
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--xv-ink)]/84">{data.address}</p>
          <a
            href={data.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--xv-gold-soft),var(--xv-gold))] px-5 text-sm font-semibold text-[#34131f] transition-opacity hover:opacity-95"
          >
            <Navigation className="mr-2 h-4 w-4" />
            {"Ver ubicación"}
          </a>
        </Card>

        <Card className="overflow-hidden rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-white/84 p-2 shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
          <div className="overflow-hidden rounded-[1.5rem]">
            <iframe src={data.embedUrl} title={data.title} loading="lazy" className="h-[420px] w-full border-0" />
          </div>
        </Card>
      </div>
      </div>
    </motion.section>
  );
}
