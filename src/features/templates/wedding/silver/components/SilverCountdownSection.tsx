import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverCountdownSectionProps = {
  data: WeddingTemplateData;
};

export function SilverCountdownSection({ data }: SilverCountdownSectionProps) {
  return (
    <section className="silver-countdown-section scroll-reveal reveal-rise-strong">
      <div className="silver-countdown-background">
        <img src={data.countdown.background} alt="" />
        <div className="silver-countdown-overlay" aria-hidden="true" />
      </div>

      <div className="silver-countdown-content">
        <span className="silver-countdown-kicker">{data.countdown.kicker}</span>
        <div className="silver-countdown-grid">
          {data.countdown.items.map((item) => (
            <article key={item.label} className="silver-countdown-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
