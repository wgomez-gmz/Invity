import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type GoldClosingSectionProps = {
  data: WeddingTemplateData;
};

export function GoldClosingSection({ data }: GoldClosingSectionProps) {
  return (
    <footer className="gold-footer scroll-reveal reveal-veil">
      <p>{data.closing.message}</p>
      <span>{data.closing.accent}</span>
      <strong>{data.closing.footerText}</strong>
    </footer>
  );
}
