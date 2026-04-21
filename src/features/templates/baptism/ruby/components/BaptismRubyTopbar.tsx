import { Link } from "react-router-dom";
import type { CategoryEntry, PackageTier } from "@/features/catalog/catalogData";

type BaptismRubyTopbarProps = {
  category: CategoryEntry;
  pkg: PackageTier;
};

export function BaptismRubyTopbar({ category, pkg }: BaptismRubyTopbarProps) {
  return (
    <div className="sticky top-0 z-40 border-b border-[#d4af37]/15 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="text-[11px] uppercase tracking-[0.28em] text-[#31557c] transition hover:text-[#193252]"
          to={`/categoria/${category.slug}`}
        >
          Regresar a {category.shortName}
        </Link>
        <span className="rounded-full border border-[#d4af37]/30 bg-[#fff9ea] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#8e6f15]">
          {category.shortName} / {pkg.name}
        </span>
      </div>
    </div>
  );
}
