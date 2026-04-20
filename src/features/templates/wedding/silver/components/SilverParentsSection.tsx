import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";
import { renderLines } from "@/features/templates/wedding/silver/utils";

type SilverParentsSectionProps = {
  data: WeddingTemplateData;
};

export function SilverParentsSection({ data }: SilverParentsSectionProps) {
  return (
    <section className="silver-section scroll-reveal reveal-veil">
      <div className="silver-parents-heading">
        <h3>{data.parents.heading}</h3>
      </div>

      <div className="silver-parents-grid">
        <article className="silver-parent-card">
          <div className="silver-parent-icon" aria-hidden="true">
            <img
              src={data.parents.bride.icon}
              alt=""
              className="silver-parent-icon-image"
            />
          </div>
          <span className="silver-parent-side">{data.parents.bride.label}</span>
          <p>{renderLines(data.parents.bride.lines)}</p>
        </article>

        <article className="silver-parent-card">
          <div className="silver-parent-icon" aria-hidden="true">
            <img
              src={data.parents.groom.icon}
              alt=""
              className="silver-parent-icon-image"
            />
          </div>
          <span className="silver-parent-side">{data.parents.groom.label}</span>
          <p>{renderLines(data.parents.groom.lines)}</p>
        </article>
      </div>
    </section>
  );
}
