import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldCountdownSectionProps = {
  data: WeddingTemplateData;
};

export function GoldCountdownSection({ data }: GoldCountdownSectionProps) {
  return (
    <section className="gold-countdown-section scroll-reveal reveal-rise-strong">
      <div className="gold-countdown-background">
        <img src={data.countdown.background} alt="" />
        <div className="gold-countdown-overlay" aria-hidden="true" />
      </div>

      <div className="gold-countdown-content">
        <span className="gold-countdown-kicker">{data.countdown.kicker}</span>
        <div className="gold-countdown-grid">
          {data.countdown.items.map((item) => (
            <article key={item.label} className="gold-countdown-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
