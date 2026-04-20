import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";

type SilverPadrinosSectionProps = {
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

export function SilverPadrinosSection({
  data,
  runtime,
}: SilverPadrinosSectionProps) {
  const padrinoSlide = data.padrinos.slides[runtime.activePadrinosSlide];

  return (
    <section className="silver-padrinos-section scroll-reveal reveal-curtain">
      <div className="silver-location-heading">
        <span className="silver-section-kicker">{data.padrinos.kicker}</span>
        <h3>{data.padrinos.heading}</h3>
      </div>

      <div className="silver-padrinos-shell">
        <button
          className="silver-padrinos-nav"
          type="button"
          aria-label="Padrino anterior"
          onClick={() =>
            runtime.setActivePadrinosSlide(
              (current) =>
                (current - 1 + data.padrinos.slides.length) %
                data.padrinos.slides.length,
            )
          }
        >
          {"<"}
        </button>

        <article className="silver-padrinos-card">
          <div className="silver-padrinos-copy">
            <span>{padrinoSlide.title}</span>
            <h4>{padrinoSlide.names}</h4>
            <p>Con gratitud y carino, nos acompanaran en este momento tan especial.</p>
          </div>

          <div className="silver-padrinos-indicators" aria-label="Lista de padrinos">
            {data.padrinos.slides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                className={
                  index === runtime.activePadrinosSlide
                    ? "silver-padrinos-indicator silver-padrinos-indicator-active"
                    : "silver-padrinos-indicator"
                }
                aria-label={`Ir a ${slide.title}`}
                onClick={() => runtime.setActivePadrinosSlide(index)}
              />
            ))}
          </div>
        </article>

        <button
          className="silver-padrinos-nav"
          type="button"
          aria-label="Siguiente padrino"
          onClick={() =>
            runtime.setActivePadrinosSlide(
              (current) => (current + 1) % data.padrinos.slides.length,
            )
          }
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
