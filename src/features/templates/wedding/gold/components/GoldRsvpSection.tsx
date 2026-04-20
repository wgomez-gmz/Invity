import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldRsvpSectionProps = {
  data: WeddingTemplateData;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldRsvpSection({
  data,
  hoverLift,
  tapPress,
  goldReveal,
}: GoldRsvpSectionProps) {
  return (
    <section className="gold-rsvp-section scroll-reveal reveal-soft-rise">
      <div className="gold-location-heading">
        <span className="gold-section-kicker">{data.rsvp.kicker}</span>
        <h3>{data.rsvp.title}</h3>
      </div>

      <div className="gold-rsvp-layout">
        <motion.article className="gold-rsvp-card" {...goldReveal(0.1, 18, 0.99)}>
          <div className="gold-rsvp-photo">
            <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
          </div>
          <div className="gold-rsvp-copy">
            <p>Invitacion para</p>
            <h4>{data.rsvp.invitationLabel}</h4>
            <strong>{data.rsvp.familyName}</strong>
            <span>{data.rsvp.guestCount}</span>
          </div>
        </motion.article>

        <motion.article className="gold-rsvp-form-shell" {...goldReveal(0.2, 20, 0.99)}>
          <p className="gold-rsvp-intro">{data.rsvp.intro}</p>

          <form className="gold-rsvp-form">
            <fieldset className="gold-rsvp-fieldset">
              <legend>Confirmar asistencia:</legend>
              <label className="gold-rsvp-option"><input type="radio" name="attendance-gold" defaultChecked /><span>Si asistiremos.</span></label>
              <label className="gold-rsvp-option"><input type="radio" name="attendance-gold" /><span>Lo siento, no podremos asistir.</span></label>
            </fieldset>

            <fieldset className="gold-rsvp-fieldset">
              <legend>Eres familiar o amigo/a de:</legend>
              <label className="gold-rsvp-option"><input type="radio" name="side-gold" defaultChecked /><span>{data.invitation.names[0]}</span></label>
              <label className="gold-rsvp-option"><input type="radio" name="side-gold" /><span>{data.invitation.names[1]}</span></label>
            </fieldset>

            <fieldset className="gold-rsvp-fieldset">
              <legend>Numero de asistentes:</legend>
              <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>4 Adultos</span></label>
              <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>3 Adultos</span></label>
              <label className="gold-rsvp-option"><input type="radio" name="guests-gold" defaultChecked /><span>2 Adultos</span></label>
              <label className="gold-rsvp-option"><input type="radio" name="guests-gold" /><span>1 Adulto</span></label>
            </fieldset>

            <label className="gold-rsvp-message-label" htmlFor="rsvp-message-gold">{data.rsvp.dedicationLabel}</label>
            <textarea id="rsvp-message-gold" className="gold-rsvp-textarea" rows={5} placeholder="Escribe aqui tu mensaje..." />
            <motion.button className="gold-rsvp-submit" type="submit" whileHover={hoverLift} whileTap={tapPress}>
              Confirmar
            </motion.button>
          </form>
        </motion.article>
      </div>
    </section>
  );
}
