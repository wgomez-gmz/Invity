import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import { renderParentLines, type RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyParentsSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyParentsSection({
  data,
  style,
  textReveal,
}: RubyParentsSectionProps) {
  return (
    <section
      className="parents-section ruby-surface-section scroll-reveal reveal-veil"
      style={style}
    >
      <div className="parents-heading">
        <motion.h3 {...textReveal(0.08, 18)}>{data.parents.heading}</motion.h3>
      </div>

      <div className="parents-grid">
        <article className="parent-card">
          <div className="parent-icon" aria-hidden="true">
            <img src={data.parents.bride.icon} alt="" className="parent-icon-image" />
          </div>
          <motion.p {...textReveal(0.24, 18)}>
            {renderParentLines(data.parents.bride.lines)}
          </motion.p>
        </article>

        <motion.div className="parents-divider-column" aria-hidden="true" {...textReveal(0.18, 14)}>
          <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>A</span><span>-</span>
        </motion.div>

        <motion.div className="parents-divider-column" aria-hidden="true" {...textReveal(0.22, 14)}>
          <span>-</span><span>N</span><span>O</span><span>V</span><span>I</span><span>O</span><span>-</span>
        </motion.div>

        <article className="parent-card">
          <div className="parent-icon" aria-hidden="true">
            <img src={data.parents.groom.icon} alt="" className="parent-icon-image" />
          </div>
          <motion.p {...textReveal(0.3, 18)}>
            {renderParentLines(data.parents.groom.lines)}
          </motion.p>
        </article>
      </div>
    </section>
  );
}
