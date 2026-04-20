import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverQuoteSectionProps = {
  data: WeddingTemplateData;
};

export function SilverQuoteSection({ data }: SilverQuoteSectionProps) {
  return (
    <section className="silver-quote-section scroll-reveal reveal-soft-rise">
      <div className="silver-quote-shell">
        <div className="silver-quote-copy">
          <span className="silver-section-kicker">{data.quote.kicker}</span>
          <blockquote>{data.quote.text}</blockquote>
          <p>{data.quote.note}</p>
        </div>

        <div className="silver-quote-photo">
          <img src={data.quote.image} alt="Retrato romantico de la pareja abrazandose" />
        </div>
      </div>
    </section>
  );
}
