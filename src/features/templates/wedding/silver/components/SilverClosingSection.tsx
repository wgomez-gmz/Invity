import type { WeddingTemplateData } from "@/features/templates/wedding/templateTypes";

type SilverClosingSectionProps = {
  data: WeddingTemplateData;
};

export function SilverClosingSection({ data }: SilverClosingSectionProps) {
  return (
    <footer className="silver-footer scroll-reveal reveal-veil">
      <span>{data.closing.accent}</span>
      <strong>{data.closing.footerText}</strong>
    </footer>
  );
}
