import { motion } from "motion/react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldQuoteSectionProps = {
  data: WeddingTemplateData;
  goldReveal: (delay?: number, y?: number, scale?: number) => Record<string, unknown>;
};

export function GoldQuoteSection({ data, goldReveal }: GoldQuoteSectionProps) {
  return (
    <section className="gold-quote-section scroll-reveal reveal-soft-rise">
      <motion.div className="gold-quote-shell" {...goldReveal(0.08, 20, 0.99)}>
        <div className="gold-quote-copy">
          <span className="gold-section-kicker">{data.quote.kicker}</span>
          <blockquote>{data.quote.text}</blockquote>
          <p>{data.quote.note}</p>
        </div>

        <div className="gold-quote-photo">
          <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
        </div>
      </motion.div>
    </section>
  );
}
