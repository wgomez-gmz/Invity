import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverInvitationInfoSectionProps = {
  data: WeddingTemplateData;
};

export function SilverInvitationInfoSection({
  data,
}: SilverInvitationInfoSectionProps) {
  return (
    <section className="silver-section scroll-reveal reveal-bloom">
      <article className="silver-info-card">
        <span className="silver-section-kicker">{data.invitation.title}</span>
        <header className="silver-info-header">
          <h2>{data.invitation.names[0]}</h2>
          <span>&</span>
          <h2>{data.invitation.names[1]}</h2>
        </header>
        <p>{data.invitation.copy}</p>
        <div className="silver-info-date">
          <strong>{data.invitation.day}</strong>
          <span>{data.invitation.date}</span>
        </div>
      </article>
    </section>
  );
}
