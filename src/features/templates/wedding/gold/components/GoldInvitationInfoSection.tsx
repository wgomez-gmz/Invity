import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldInvitationInfoSectionProps = {
  data: WeddingTemplateData;
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldInvitationInfoSection({
  data,
  goldReveal,
}: GoldInvitationInfoSectionProps) {
  return (
    <section className="gold-section scroll-reveal reveal-bloom">
      <motion.article className="gold-info-card" {...goldReveal(0.08, 20, 0.99)}>
        <span className="gold-section-kicker">{data.invitation.title}</span>
        <header className="gold-info-header">
          <h2>{data.invitation.names[0]}</h2>
          <span>&</span>
          <h2>{data.invitation.names[1]}</h2>
        </header>
        <p>{data.invitation.copy}</p>
        <div className="gold-info-date">
          <strong>{data.invitation.day}</strong>
          <span>{data.invitation.date}</span>
        </div>
      </motion.article>
    </section>
  );
}
