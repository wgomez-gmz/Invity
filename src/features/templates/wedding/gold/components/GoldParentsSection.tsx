import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import { renderLines } from "@/features/templates/wedding/gold/utils";

type GoldParentsSectionProps = {
  data: WeddingTemplateData;
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldParentsSection({ data, goldReveal }: GoldParentsSectionProps) {
  return (
    <section className="gold-section scroll-reveal reveal-veil">
      <div className="gold-parents-heading">
        <h3>{data.parents.heading}</h3>
      </div>

      <div className="gold-parents-grid">
        <motion.article className="gold-parent-card" {...goldReveal(0.1, 18, 0.99)}>
          <div className="gold-parent-icon" aria-hidden="true">
            <img src={data.parents.bride.icon} alt="" className="gold-parent-icon-image" />
          </div>
          <span className="gold-parent-side">{data.parents.bride.label}</span>
          <p>{renderLines(data.parents.bride.lines)}</p>
        </motion.article>

        <motion.article className="gold-parent-card" {...goldReveal(0.2, 18, 0.99)}>
          <div className="gold-parent-icon" aria-hidden="true">
            <img src={data.parents.groom.icon} alt="" className="gold-parent-icon-image" />
          </div>
          <span className="gold-parent-side">{data.parents.groom.label}</span>
          <p>{renderLines(data.parents.groom.lines)}</p>
        </motion.article>
      </div>
    </section>
  );
}
