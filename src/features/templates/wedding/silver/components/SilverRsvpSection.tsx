import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverRsvpSectionProps = {
  data: WeddingTemplateData;
};

export function SilverRsvpSection({ data }: SilverRsvpSectionProps) {
  return (
    <section className="silver-rsvp-section scroll-reveal reveal-soft-rise">
      <div className="silver-location-heading">
        <span className="silver-section-kicker">{data.rsvp.kicker}</span>
        <h3>{data.rsvp.title}</h3>
      </div>

      <div className="silver-rsvp-layout">
        <article className="silver-rsvp-card">
          <div className="silver-rsvp-photo">
            <img
              src={data.rsvp.photo}
              alt="Pareja abrazandose frente a una fachada color pastel"
            />
          </div>
          <div className="silver-rsvp-copy">
            <p>Invitacion para</p>
            <h4>{data.rsvp.invitationLabel}</h4>
            <strong>{data.rsvp.familyName}</strong>
            <a
              className="silver-rsvp-whatsapp"
              href={data.rsvp.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {data.rsvp.whatsappLabel ?? "Confirmar"}
            </a>
            <span>{data.rsvp.guestCount}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
