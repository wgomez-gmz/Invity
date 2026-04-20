import type { FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, MailPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";

type RSVPProps = {
  data: XvPremiumTemplateData["rsvp"];
  sent: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  reveal: (delay?: number, y?: number) => Record<string, unknown>;
};

export function RSVP({ data, sent, onSubmit, reveal }: RSVPProps) {
  return (
    <motion.section
      {...reveal(0.1, 18)}
      className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="rounded-[2.4rem] border border-[var(--xv-border)] bg-[linear-gradient(180deg,rgba(253,246,236,0.98),rgba(236,243,252,0.98))] px-6 py-10 shadow-[0_24px_70px_rgba(26,42,68,0.08)] sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--xv-border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)]">
          <MailPlus className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.44fr_0.56fr]">
          <Card className="rounded-[1.8rem] border-[rgba(53,83,122,0.22)] bg-[linear-gradient(180deg,rgba(255,248,243,0.98),rgba(236,243,252,0.96))] p-6 text-[var(--xv-ink)] shadow-[0_18px_48px_rgba(26,42,68,0.08)]">
            <h2 className="font-['Baskervville'] text-4xl tracking-[-0.04em] text-[var(--xv-black)]">{data.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--xv-ink)]/78 sm:text-base">{data.intro}</p>
            <div className="mt-8 rounded-[1.4rem] border border-[rgba(212,175,55,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(252,239,233,0.78))] p-5">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-gold)]">{data.passTitle}</span>
              <p className="mt-2 font-['Baskervville'] text-2xl text-[var(--xv-black)]">{data.passGuestName}</p>
              <p className="mt-3 text-sm text-[var(--xv-ink)]/72">
                {data.passGuestCountLabel}: {data.passGuestCountValue}
              </p>
              <p className="mt-4 text-sm text-[var(--xv-accent-primary)]">{data.passMessage}</p>
            </div>
          </Card>

          <Card className="rounded-[1.8rem] border-[var(--xv-border)] bg-white/92 p-6 shadow-[0_16px_40px_rgba(26,42,68,0.08)]">
            <p className="text-sm leading-7 text-[var(--xv-ink)]/84">{data.formIntro}</p>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.familyFieldLabel}</label>
                <input
                  className="w-full rounded-[1.2rem] border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/36"
                  placeholder={data.familyFieldPlaceholder}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.attendanceLabel}</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {data.attendanceOptions.slice(0, 2).map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="rounded-[1.2rem] border border-[var(--xv-border)] bg-[rgba(212,175,55,0.06)] px-4 py-3 text-left text-sm text-[var(--xv-ink)] transition hover:-translate-y-0.5 hover:border-[var(--xv-gold)]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.attendanceNameLabel}</label>
                <input
                  className="w-full rounded-[1.2rem] border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/36"
                  placeholder={data.attendanceNamePlaceholder}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.dedicationLabel}</label>
                <textarea
                  rows={4}
                  className="w-full rounded-[1.2rem] border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/36"
                  placeholder={data.dedicationPlaceholder}
                />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="rounded-full bg-[linear-gradient(135deg,#f3df9f,#d4af37)] text-[#1a2236] hover:opacity-95">
                  {data.buttonLabel}
                </Button>
                {data.whatsappUrl ? (
                  <a href={data.whatsappUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="rounded-full border-[var(--xv-border)] bg-white text-[var(--xv-black)]">
                      {data.whatsappLabel ?? "WhatsApp"}
                    </Button>
                  </a>
                ) : null}
              </div>
              {sent ? (
                <div className="rounded-[1.2rem] border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.1)] px-4 py-3 text-sm text-[var(--xv-black)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--xv-gold)]" />
                    <span>{data.successMessage}</span>
                  </div>
                </div>
              ) : null}
            </form>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
