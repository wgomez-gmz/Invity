import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyClosingSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyClosingSection({
  data,
  style,
  textReveal,
}: RubyClosingSectionProps) {
  return (
    <footer
      className="invitation-closing ruby-surface-section scroll-reveal reveal-veil"
      style={style}
    >
      <div className="invitation-closing-topband" aria-hidden="true" />
      <motion.div className="invitation-closing-message" {...textReveal(0.12, 18)}>
        <motion.p {...textReveal(0.18, 18)}>{data.closing.message}</motion.p>
        <motion.span {...textReveal(0.32, 16)}>{data.closing.accent}</motion.span>
      </motion.div>
      <motion.div className="invitation-closing-footer" {...textReveal(0.42, 16)}>
        <strong>{data.closing.footerText}</strong>
      </motion.div>
    </footer>
  );
}
