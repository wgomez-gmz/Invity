import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldDetailsSectionProps = {
  data: WeddingTemplateData;
  hoverLift?: { y: number; scale: number };
  tapPress?: { y: number; scale: number };
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldDetailsSection({
  data,
  hoverLift,
  tapPress,
  goldReveal,
}: GoldDetailsSectionProps) {
  return (
    <section className="gold-details-section scroll-reveal reveal-bloom">
      <motion.article className="gold-detail-card" {...goldReveal(0.08, 18, 0.99)}>
        <span className="gold-section-kicker">{data.details.dressCode.kicker}</span>
        <h3>{data.details.dressCode.title}</h3>
        <div className="gold-detail-illustration">
          <img src={data.details.dressCode.image} alt="Ilustracion de vestimenta formal" />
        </div>
        <p>{data.details.dressCode.note}</p>
      </motion.article>

      <motion.article className="gold-detail-card" {...goldReveal(0.18, 18, 0.99)}>
        <span className="gold-section-kicker">{data.details.gifts.kicker}</span>
        <h3>{data.details.gifts.title}</h3>
        <p className="gold-gift-copy">{data.details.gifts.copy}</p>

        <div className="gold-gifts-grid">
          <article className="gold-gift-option">
            <div className="gold-gift-logo">
              <img src={data.details.gifts.liverpoolLogo} alt="Liverpool" />
            </div>
            <strong>{data.details.gifts.eventCode}</strong>
            <motion.button className="gold-map-button" type="button" whileHover={hoverLift} whileTap={tapPress}>
              Ver regalos
            </motion.button>
          </article>

          <article className="gold-gift-option">
            <div className="gold-gift-logo gold-gift-icon">
              <img src={data.details.gifts.envelopeIcon} alt="Lluvia de sobres" />
            </div>
            <strong>Lluvia de Sobres</strong>
          </article>
        </div>
      </motion.article>
    </section>
  );
}
