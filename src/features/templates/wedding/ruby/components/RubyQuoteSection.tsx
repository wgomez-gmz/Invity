import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyQuoteSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyQuoteSection({ data, style, textReveal }: RubyQuoteSectionProps) {
  return (
    <section
      className="quote-story-section ruby-surface-section scroll-reveal reveal-soft-rise"
      style={style}
    >
      <div className="quote-story-copy">
        <motion.span className="quote-story-kicker" {...textReveal(0.08, 18)}>
          {data.quote.kicker}
        </motion.span>
        <motion.blockquote className="quote-story-text" {...textReveal(0.2, 26)}>
          {data.quote.text}
        </motion.blockquote>
        <motion.p className="quote-story-note" {...textReveal(0.34, 20)}>
          {data.quote.note}
        </motion.p>
      </div>

      <div className="quote-story-photo-frame">
        <div className="quote-story-photo-card parallax-shell" data-parallax-speed="0.35">
          <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
        </div>
      </div>
    </section>
  );
}
