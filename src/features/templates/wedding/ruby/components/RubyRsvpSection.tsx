import { useState } from "react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyRsvpSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyRsvpSection({
  data,
  style,
  hoverLift,
  tapPress,
  textReveal,
}: RubyRsvpSectionProps) {
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [side, setSide] = useState<"first" | "second">("first");
  const [guestCount, setGuestCount] = useState("2 Adultos");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className="rsvp-section ruby-surface-section scroll-reveal reveal-soft-rise"
      style={style}
    >
      <div className="rsvp-heading">
        <motion.h3 {...textReveal(0.08, 18)}>{data.rsvp.title}</motion.h3>
      </div>

      <div className="rsvp-layout">
        <article className="rsvp-invitation-card">
          <div className="rsvp-photo-frame">
            <img src={data.rsvp.photo} alt="Pareja abrazandose frente a una fachada color pastel" />
          </div>

          <div className="rsvp-card-copy">
            <motion.p className="rsvp-card-label" {...textReveal(0.16, 16)}>
              Invitacion para
            </motion.p>
            <motion.h4 {...textReveal(0.24, 16)}>{data.rsvp.invitationLabel}</motion.h4>
            <motion.p className="rsvp-card-family" {...textReveal(0.32, 16)}>
              {data.rsvp.familyName}
            </motion.p>
            <motion.p className="rsvp-card-count-label" {...textReveal(0.4, 16)}>
              Total de invitados:
            </motion.p>
            <strong>{data.rsvp.familyName.replace(/[^0-9]/g, "") || "4"}</strong>
            <motion.p className="rsvp-card-note" {...textReveal(0.46, 16)}>
              {data.rsvp.guestCount}
            </motion.p>
          </div>
        </article>

        <article className="rsvp-form-panel">
          <motion.p className="rsvp-intro" {...textReveal(0.18, 18)}>
            {data.rsvp.intro}
          </motion.p>
          <motion.p className="rsvp-subcopy" {...textReveal(0.28, 18)}>
            Completa y envia el siguiente formulario.
          </motion.p>

          <form className="rsvp-form" onSubmit={handleSubmit}>
            <fieldset className="rsvp-fieldset">
              <motion.legend {...textReveal(0.36, 14)}>Confirmar asistencia:</motion.legend>
              <label className="rsvp-option">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === "yes"}
                  onChange={() => setAttendance("yes")}
                />
                <span>Si asistiremos.</span>
              </label>
              <label className="rsvp-option">
                <input
                  type="radio"
                  name="attendance"
                  checked={attendance === "no"}
                  onChange={() => setAttendance("no")}
                />
                <span>Lo siento, no podremos asistir.</span>
              </label>
            </fieldset>

            <fieldset className="rsvp-fieldset">
              <motion.legend {...textReveal(0.42, 14)}>Eres familiar o amigo/a de:</motion.legend>
              <label className="rsvp-option">
                <input
                  type="radio"
                  name="side"
                  checked={side === "first"}
                  onChange={() => setSide("first")}
                />
                <span>{data.invitation.names[0]}</span>
              </label>
              <label className="rsvp-option">
                <input
                  type="radio"
                  name="side"
                  checked={side === "second"}
                  onChange={() => setSide("second")}
                />
                <span>{data.invitation.names[1]}</span>
              </label>
            </fieldset>

            <fieldset className="rsvp-fieldset">
              <motion.legend {...textReveal(0.48, 14)}>Numero de asistentes:</motion.legend>
              <label className="rsvp-option">
                <input type="radio" name="guests" checked={guestCount === "4 Adultos"} onChange={() => setGuestCount("4 Adultos")} />
                <span>4 Adultos</span>
              </label>
              <label className="rsvp-option">
                <input type="radio" name="guests" checked={guestCount === "3 Adultos"} onChange={() => setGuestCount("3 Adultos")} />
                <span>3 Adultos</span>
              </label>
              <label className="rsvp-option">
                <input type="radio" name="guests" checked={guestCount === "2 Adultos"} onChange={() => setGuestCount("2 Adultos")} />
                <span>2 Adultos</span>
              </label>
              <label className="rsvp-option">
                <input type="radio" name="guests" checked={guestCount === "1 Adulto"} onChange={() => setGuestCount("1 Adulto")} />
                <span>1 Adulto</span>
              </label>
              <label className="rsvp-option">
                <input type="radio" name="guests" checked={guestCount === "No asistiremos"} onChange={() => setGuestCount("No asistiremos")} />
                <span>Lo siento, no podremos asistir</span>
              </label>
            </fieldset>

            <motion.label className="rsvp-message-label" htmlFor="rsvp-message" {...textReveal(0.56, 14)}>
              {data.rsvp.dedicationLabel}
            </motion.label>
            <textarea
              id="rsvp-message"
              className="rsvp-textarea"
              rows={5}
              placeholder="Escribe aqui tu mensaje..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <motion.button
              className="rsvp-submit"
              type="submit"
              {...textReveal(0.66, 16)}
              whileHover={hoverLift}
              whileTap={tapPress}
            >
              Confirmar
            </motion.button>
            {isSubmitted ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm leading-7 text-[rgba(122,132,101,0.94)]"
              >
                Confirmacion lista. Asistencia: {attendance === "yes" ? "Si asistiremos" : "No asistiremos"} · Invitados: {guestCount}.
              </motion.p>
            ) : null}
          </form>
        </article>
      </div>
    </section>
  );
}
