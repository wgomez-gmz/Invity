import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverHeroSectionProps = {
  data: WeddingTemplateData;
};

export function SilverHeroSection({ data }: SilverHeroSectionProps) {
  const heroSlide = data.hero.slides[0];

  return (
    <section className="silver-hero scroll-reveal reveal-soft-rise is-visible">
      <div className="silver-hero-visual">
        <div className="silver-hero-monogram">
          <strong>S&amp;D</strong>
          <span>{data.hero.date}</span>
        </div>

        <article className="silver-stack-card silver-stack-card-main silver-stack-card-solo">
          <img src={heroSlide.image} alt={heroSlide.alt} />
        </article>
      </div>
    </section>
  );
}
