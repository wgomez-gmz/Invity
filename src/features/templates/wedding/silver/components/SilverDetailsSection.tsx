import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverDetailsSectionProps = {
  data: WeddingTemplateData;
};

export function SilverDetailsSection({ data }: SilverDetailsSectionProps) {
  return (
    <section className="silver-details-section scroll-reveal reveal-bloom">
      <article className="silver-detail-card">
        <span className="silver-section-kicker">
          {data.details.dressCode.kicker}
        </span>
        <h3>{data.details.dressCode.title}</h3>
        <div className="silver-detail-illustration">
          <img
            src={data.details.dressCode.image}
            alt="Ilustracion de vestimenta formal"
          />
        </div>
        <p>{data.details.dressCode.note}</p>
      </article>

      <article className="silver-detail-card">
        <span className="silver-section-kicker">{data.details.gifts.kicker}</span>
        <h3>{data.details.gifts.title}</h3>
        <p className="silver-gift-copy">{data.details.gifts.copy}</p>

        <div className="silver-gifts-grid">
          <article className="silver-gift-option">
            <div className="silver-gift-logo">
              <img src={data.details.gifts.liverpoolLogo} alt="Liverpool" />
            </div>
            <strong>{data.details.gifts.eventCode}</strong>
            <button className="silver-map-button" type="button">
              Ver regalos
            </button>
          </article>

          <article className="silver-gift-option">
            <div className="silver-gift-logo silver-gift-icon">
              <img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" />
            </div>
            <strong>Lluvia de Sobres</strong>
          </article>
        </div>
      </article>
    </section>
  );
}
