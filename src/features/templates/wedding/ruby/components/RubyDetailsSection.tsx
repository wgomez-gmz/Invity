import { useState } from "react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";
import { RubyOverlayDialog } from "@/features/templates/wedding/ruby/components/RubyOverlayDialog";

type RubyDetailsSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyDetailsSection({
  data,
  style,
  hoverLift,
  tapPress,
  textReveal,
}: RubyDetailsSectionProps) {
  const [activeDialog, setActiveDialog] = useState<"gifts" | "transfer" | null>(null);

  return (
    <>
      <section
        className="details-section ruby-surface-section scroll-reveal reveal-bloom"
        style={style}
      >
        <article className="dresscode-section">
          <div className="details-heading">
            <motion.h3 {...textReveal(0.08, 18)}>{data.details.dressCode.kicker}</motion.h3>
          </div>
          <motion.p className="dresscode-label" {...textReveal(0.2, 18)}>
            {data.details.dressCode.title}
          </motion.p>
          <div className="dresscode-illustration">
            <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
          </div>
          <motion.p className="dresscode-note" {...textReveal(0.3, 18)}>
            {data.details.dressCode.note}
          </motion.p>
        </article>

        <article className="gift-section">
          <div className="details-heading">
            <motion.h3 {...textReveal(0.08, 18)}>{data.details.gifts.kicker}</motion.h3>
          </div>
          <div className="gift-copy-block">
            {data.details.gifts.giftIllustration ? (
              <div className="gift-copy-illustration" aria-hidden="true">
                <img src={data.details.gifts.giftIllustration} alt="" />
              </div>
            ) : null}
            <motion.p {...textReveal(0.2, 18)}>{data.details.gifts.copy}</motion.p>
          </div>

          <div className="gift-options-grid">
            <article className="gift-option-card">
              <div className="gift-option-logo">
                <img src={data.details.gifts.liverpoolLogo} alt="Liverpool" />
              </div>
              <motion.h4 {...textReveal(0.32, 16)}>Evento</motion.h4>
              <motion.p {...textReveal(0.4, 16)}>{data.details.gifts.eventCode}</motion.p>
              <motion.button
                className="gift-option-button"
                type="button"
                onClick={() => setActiveDialog("gifts")}
                {...textReveal(0.48, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Ver regalos
              </motion.button>
            </article>

            <article className="gift-option-card">
              <div className="gift-option-icon">
                <img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" />
              </div>
              <motion.h4 {...textReveal(0.38, 16)}>Lluvia de Sobres</motion.h4>
              <motion.button
                className="gift-option-button"
                type="button"
                onClick={() => setActiveDialog("transfer")}
                {...textReveal(0.46, 16)}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Ver opciones
              </motion.button>
            </article>
          </div>
        </article>
      </section>

      <RubyOverlayDialog
        open={activeDialog === "gifts"}
        onClose={() => setActiveDialog(null)}
        eyebrow="Mesa de regalos"
        title="Evento Liverpool"
      >
        <div className="space-y-4">
          <p className="text-sm leading-7 text-[rgba(64,66,58,0.74)]">
            Comparte este codigo al momento de buscar el evento para ver la seleccion de regalos.
          </p>
          <div className="rounded-[1.6rem] border border-[rgba(190,172,133,0.14)] bg-white p-5">
            <img
              src={data.details.gifts.liverpoolLogo}
              alt="Liverpool"
              className="h-8 object-contain"
            />
            <p className="mt-4 font-serif text-3xl text-[rgb(49,11,24)]">
              {data.details.gifts.eventCode}
            </p>
          </div>
        </div>
      </RubyOverlayDialog>

      <RubyOverlayDialog
        open={activeDialog === "transfer"}
        onClose={() => setActiveDialog(null)}
        eyebrow="Detalle adicional"
        title={data.details.gifts.transferLabel ?? "Lluvia de sobres"}
      >
        <div className="space-y-3">
          {(data.details.gifts.transferDetails ?? ["Lluvia de sobres el dia del evento"]).map((item) => (
            <div
              key={item}
              className="rounded-[1.3rem] border border-[rgba(190,172,133,0.14)] bg-white px-4 py-4 text-sm leading-7 text-[rgba(64,66,58,0.78)]"
            >
              {item}
            </div>
          ))}
        </div>
      </RubyOverlayDialog>
    </>
  );
}
