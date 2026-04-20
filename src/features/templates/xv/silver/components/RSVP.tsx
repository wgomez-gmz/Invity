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
};

export function RSVP({ data, sent, onSubmit }: RSVPProps) {
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
          <MailPlus className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 font-['Baskervville'] text-4xl text-[var(--xv-black)] sm:text-5xl">{data.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/80 sm:text-base">{data.intro}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.4fr_0.6fr]">
          <Card className="rounded-xl border-[var(--xv-border)] bg-[var(--xv-section-alt)] p-6 shadow-md">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--xv-accent-primary)]">{data.passTitle}</p>
            <h3 className="mt-3 font-['Baskervville'] text-3xl text-[var(--xv-black)]">{data.passGuestName}</h3>
            <p className="mt-3 text-sm text-[var(--xv-ink)]/80">
              {data.passGuestCountLabel}: {data.passGuestCountValue}
            </p>
            <p className="mt-4 text-sm text-[var(--xv-ink)]/70">{data.passMessage}</p>
          </Card>

          <Card className="rounded-xl border-[var(--xv-border)] bg-white p-6 shadow-md">
            <p className="text-sm leading-7 text-[var(--xv-ink)]/80">{data.formIntro}</p>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.familyFieldLabel}</label>
                <input
                  className="w-full rounded-xl border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/40"
                  placeholder={data.familyFieldPlaceholder}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.attendanceLabel}</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {data.attendanceOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="rounded-xl border border-[var(--xv-border)] bg-[var(--xv-section-alt)] px-4 py-3 text-left text-sm text-[var(--xv-ink)] transition hover:scale-[1.02]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.attendanceNameLabel}</label>
                <input
                  className="w-full rounded-xl border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/40"
                  placeholder={data.attendanceNamePlaceholder}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--xv-black)]">{data.dedicationLabel}</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-[var(--xv-border)] bg-white px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/40"
                  placeholder={data.dedicationPlaceholder}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="h-10 rounded-xl bg-[var(--xv-blush)] px-6 text-[var(--xv-black)] hover:bg-[var(--xv-accent-primary)] hover:text-white">
                  {data.buttonLabel}
                </Button>
                {data.whatsappUrl ? (
                  <a href={data.whatsappUrl} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="h-10 rounded-xl border-[var(--xv-border)] bg-white text-[var(--xv-black)] hover:bg-[var(--xv-blush-soft)]"
                    >
                      {data.whatsappLabel ?? "WhatsApp"}
                    </Button>
                  </a>
                ) : null}
              </div>

              {sent ? (
                <div className="rounded-xl border border-[var(--xv-border)] bg-[var(--xv-blush-soft)] px-4 py-3 text-sm text-[var(--xv-ink)]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--xv-accent-primary)]" />
                    <span>{data.successMessage}</span>
                  </div>
                </div>
              ) : null}
            </form>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
