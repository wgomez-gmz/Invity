import { PackageCard } from "@/components/category/PackageCard";

export type PackageDisplay = {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  image: string;
  previewHref: string;
  featured?: boolean;
  badge?: string;
};

type PackagesGridProps = {
  title: string;
  description: string;
  packages: PackageDisplay[];
};

export function PackagesGrid({
  title,
  description,
  packages,
}: PackagesGridProps) {
  return (
    <section id="paquetes" className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          Paquetes disponibles
        </p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-[#1A2A44] md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.name} index={index} {...pkg} />
        ))}
      </div>
    </section>
  );
}
