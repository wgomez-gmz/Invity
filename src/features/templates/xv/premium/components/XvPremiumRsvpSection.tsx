import { AnimatePresence, motion } from "motion/react";
import type { FormEvent } from "react";
import { MessageCircle, Send, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { XvPremiumTemplateData } from "@/features/templates/xv/templateTypes";
import type { XvReveal } from "@/features/templates/xv/premium/utils";

type XvPremiumRsvpSectionProps = {
  data: XvPremiumTemplateData["rsvp"];
  attendanceOptions: string[];
  attendanceNameLabel: string;
  rsvpSent: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  reveal: (delay?: number, y?: number) => XvReveal;
};

export function XvPremiumRsvpSection({
  data,
  attendanceOptions,
  attendanceNameLabel,
  rsvpSent,
  onSubmit,
  reveal,
}: XvPremiumRsvpSectionProps) {
  return (
    <motion.section {...reveal(0.18, 22)} className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.6rem] border border-[rgba(212,95,154,0.14)] bg-[linear-gradient(180deg,rgba(255,250,252,0.98),rgba(253,239,246,0.94))] px-6 py-10 shadow-[0_28px_80px_rgba(117,45,89,0.12)] sm:px-10 sm:py-12">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,95,154,0.14)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--xv-gold)] shadow-[0_10px_25px_rgba(117,45,89,0.08)]">
          <Ticket className="h-3.5 w-3.5" />
          {data.kicker}
        </span>
        <h2 className="mt-5 max-w-3xl font-['Baskervville'] text-4xl font-normal tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)] sm:text-6xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--xv-ink)]/82 sm:text-base">
          {data.intro}
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.43fr_0.57fr]">
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.35 }}>
        <Card className="overflow-hidden rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-[linear-gradient(180deg,rgba(255,251,253,0.98),rgba(250,239,246,0.94))] shadow-[0_24px_70px_rgba(117,45,89,0.1)]">
          <div
            className="h-56 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15,6,10,0.08), rgba(15,6,10,0.62)), url(${data.passImage.src})`,
              backgroundPosition: data.passImage.position ?? "center center",
            }}
          />
          <div className="p-7">
            <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--xv-gold)]">
              {data.passTitle}
            </span>
            <strong className="mt-4 block font-['Baskervville'] text-3xl font-normal text-[var(--xv-accent-primary,#9d248d)]">
              {data.passGuestName}
            </strong>
            <div className="mt-5 flex items-end gap-3">
              <b className="text-5xl font-semibold tracking-[-0.05em] text-[var(--xv-accent-primary,#9d248d)]">
                {data.passGuestCountValue}
              </b>
              <p className="pb-1 text-sm text-[var(--xv-ink)]/62">{data.passGuestCountLabel}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-[var(--xv-ink)]/84">
              {data.passGuests.map((guest) => (
                <li key={guest} className="rounded-2xl border border-[rgba(212,95,154,0.1)] bg-white/75 px-4 py-3">
                  {guest}
                </li>
              ))}
            </ul>
            <small className="mt-6 block text-sm uppercase tracking-[0.24em] text-[var(--xv-ink)]/48">
              {data.passMessage}
            </small>
          </div>
        </Card>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.35 }}>
        <Card className="rounded-[2.2rem] border-[rgba(212,95,154,0.12)] bg-[linear-gradient(180deg,rgba(255,248,251,0.96),rgba(247,232,241,0.93))] p-7 shadow-[0_24px_70px_rgba(117,45,89,0.12)]">
          <form className="space-y-5" onSubmit={onSubmit}>
            <p className="text-sm leading-7 text-[var(--xv-ink)]/82">{data.formIntro}</p>

            <label className="block space-y-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/54">
                {data.familyFieldLabel}
              </span>
              <input
                type="text"
                name="familyName"
                placeholder={data.familyFieldPlaceholder}
                required
                className="w-full rounded-[1.2rem] border border-[rgba(212,95,154,0.12)] bg-white/88 px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/32 focus:border-[var(--xv-gold)]"
              />
            </label>

            <fieldset className="space-y-3">
              <legend className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/54">
                {data.relationLabel}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {data.relationOptions.map((option, optionIndex) => (
                  <motion.label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-[1.2rem] border border-[rgba(212,95,154,0.1)] bg-white/78 px-4 py-3 text-[var(--xv-ink)]/82"
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                  >
                    <input
                      type="radio"
                      name="relation"
                      value={option}
                      defaultChecked={optionIndex === 0}
                      className="accent-[var(--xv-accent-primary)]"
                    />
                    <span>{option}</span>
                  </motion.label>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/54">
                {data.attendanceLabel}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {attendanceOptions.map((option, optionIndex) => (
                  <motion.label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-[1.2rem] border border-[rgba(212,95,154,0.1)] bg-white/78 px-4 py-3 text-[var(--xv-ink)]/82"
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.25 }}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option}
                      defaultChecked={optionIndex === 0}
                      className="accent-[var(--xv-accent-primary)]"
                    />
                    <span>{option}</span>
                  </motion.label>
                ))}
              </div>
            </fieldset>

            <label className="block space-y-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/54">
                {attendanceNameLabel}
              </span>
              <textarea
                name="attendingGuests"
                rows={4}
                placeholder={data.attendanceNamePlaceholder}
                className="w-full rounded-[1.2rem] border border-[rgba(212,95,154,0.12)] bg-white/88 px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/32 focus:border-[var(--xv-gold)]"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--xv-ink)]/54">
                {data.dedicationLabel}
              </span>
              <textarea
                name="dedication"
                rows={5}
                placeholder={data.dedicationPlaceholder}
                className="w-full rounded-[1.2rem] border border-[rgba(212,95,154,0.12)] bg-white/88 px-4 py-3 text-[var(--xv-ink)] outline-none placeholder:text-[var(--xv-ink)]/32 focus:border-[var(--xv-gold)]"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-full bg-[linear-gradient(135deg,var(--xv-gold-soft),var(--xv-gold))] text-[#34131f] transition-transform duration-300 hover:scale-[1.015] hover:opacity-95">
                <Send className="mr-2 h-4 w-4" />
                {data.buttonLabel}
              </Button>
              {data.whatsappUrl && data.whatsappLabel ? (
                <a
                  href={data.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[rgba(212,95,154,0.14)] bg-white/88 px-5 text-sm font-semibold text-[var(--xv-accent-primary,#9d248d)] transition-all duration-300 hover:scale-[1.015] hover:bg-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {data.whatsappLabel}
                </a>
              ) : null}
            </div>

            <AnimatePresence>
              {rsvpSent ? (
                <motion.p
                  className="rounded-[1.2rem] border border-[var(--xv-gold)]/30 bg-[var(--xv-gold)]/10 px-4 py-3 text-sm text-[var(--xv-gold-soft)]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {data.successMessage}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </form>
        </Card>
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
}
