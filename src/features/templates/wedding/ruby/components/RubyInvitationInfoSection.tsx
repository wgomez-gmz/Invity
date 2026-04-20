import { motion } from "motion/react";
import type { CSSProperties } from "react";
import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import type { RubyMotionReveal } from "@/features/templates/wedding/ruby/utils";

type RubyInvitationInfoSectionProps = {
  data: WeddingTemplateData;
  style?: CSSProperties;
  textReveal: (delay?: number, y?: number) => RubyMotionReveal;
};

export function RubyInvitationInfoSection({
  data,
  style,
  textReveal,
}: RubyInvitationInfoSectionProps) {
  return (
    <section
      className="invitation-info-section ruby-surface-section scroll-reveal reveal-bloom"
      style={style}
    >
      <div className="invitation-info-band" aria-hidden="true" />
      <article className="invitation-info-card">
        <div className="invitation-info-ornament invitation-info-ornament-left" aria-hidden="true" />
        <div className="invitation-info-ornament invitation-info-ornament-right" aria-hidden="true" />

        <header className="invitation-info-header">
          <motion.h2 className="invitation-couple-name" {...textReveal(0.14, 18)}>
            {data.invitation.names[0]}
          </motion.h2>
          <motion.div className="invitation-divider" {...textReveal(0.24, 14)}>
            <span />
            <strong>&</strong>
            <span />
          </motion.div>
          <motion.h2 className="invitation-couple-name" {...textReveal(0.3, 18)}>
            {data.invitation.names[1]}
          </motion.h2>
        </header>

        <motion.p className="invitation-info-copy" {...textReveal(0.38, 22)}>
          {data.invitation.copy}
        </motion.p>

        <motion.div className="invitation-date-block" {...textReveal(0.5, 20)}>
          <span className="invitation-day-label">{data.invitation.day}</span>
          <span className="invitation-date-line" />
          <p className="invitation-date">{data.invitation.date}</p>
        </motion.div>
      </article>
    </section>
  );
}
