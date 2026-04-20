import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";
import type {
  WeddingTemplateData,
  WeddingTemplateRuntime,
} from "@/features/templates/wedding/templateTypes";
import { SilverClosingSection } from "@/features/templates/wedding/silver/components/SilverClosingSection";
import { SilverCountdownSection } from "@/features/templates/wedding/silver/components/SilverCountdownSection";
import { SilverDetailsSection } from "@/features/templates/wedding/silver/components/SilverDetailsSection";
import { SilverHeroSection } from "@/features/templates/wedding/silver/components/SilverHeroSection";
import { SilverInvitationInfoSection } from "@/features/templates/wedding/silver/components/SilverInvitationInfoSection";
import { SilverLocationSection } from "@/features/templates/wedding/silver/components/SilverLocationSection";
import { SilverPadrinosSection } from "@/features/templates/wedding/silver/components/SilverPadrinosSection";
import { SilverParentsSection } from "@/features/templates/wedding/silver/components/SilverParentsSection";
import { SilverQuoteSection } from "@/features/templates/wedding/silver/components/SilverQuoteSection";
import { SilverRsvpSection } from "@/features/templates/wedding/silver/components/SilverRsvpSection";

type SilverWeddingTemplateProps = {
  category: CategoryEntry;
  pkg: PackageTier;
  data: WeddingTemplateData;
  runtime: WeddingTemplateRuntime;
};

export function SilverWeddingTemplate({
  category,
  pkg,
  data,
  runtime,
}: SilverWeddingTemplateProps) {
  return (
    <div className="template-shell template-silver-story-shell">
      <div className="silver-template-topline">
        <Link className="silver-template-back" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="silver-template-pill">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <SilverHeroSection data={data} />

      <SilverQuoteSection data={data} />

      <SilverInvitationInfoSection data={data} />

      <SilverParentsSection data={data} />

      <SilverCountdownSection data={data} />

      <SilverLocationSection
        section={data.ceremony}
        activeIndex={runtime.activeChurchSlide}
      />

      <SilverLocationSection
        section={data.reception}
        activeIndex={runtime.activeReceptionSlide}
        reverse
      />

      <SilverPadrinosSection data={data} runtime={runtime} />

      <SilverDetailsSection data={data} />

      <SilverRsvpSection data={data} />

      <SilverClosingSection data={data} />
    </div>
  );
}
