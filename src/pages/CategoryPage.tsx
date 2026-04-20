import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getCategoryBySlug } from "@/features/catalog/catalogData";
import { BenefitsSection } from "@/components/category/BenefitsSection";
import { CategoryHero } from "@/components/category/CategoryHero";
import { CTASection } from "@/components/category/CTASection";
import {
  type PackageDisplay,
  PackagesGrid,
} from "@/components/category/PackagesGrid";
import { HomeFooter } from "@/components/home/HomeFooter";
import brandPreviewImage from "@/assets/brand/image.png";
import weddingGoldPreviewImage from "@/assets/boda/Gold/image.png";
import weddingRubyPreviewImage from "@/assets/boda/rubi/image.png";
import weddingSilverPreviewImage from "@/assets/boda/Silver/image.png";
import xvGoldPreviewImage from "@/assets/xv/Gold/foto.png";
import xvRubyPreviewImage from "@/assets/xv/Ruby/Galeria/xv.png";
import xvSilverPreviewImage from "@/assets/xv/silver/foto1.png";

export function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!category) {
    return (
      <section className="grid min-h-[60vh] place-items-center">
        <Card className="w-full max-w-xl rounded-[2rem] border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
          <CardContent className="p-8 text-center">
            <span className="inline-flex rounded-full border border-[#1F7A7A]/10 bg-[#1F7A7A]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
              Coleccion no disponible
            </span>
            <h2 className="mt-5 font-serif text-3xl text-[#1A2A44]">
              La categoria que buscas no esta disponible por el momento.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Regresa al inicio y descubre otras colecciones pensadas para celebrar con estilo.
            </p>
            <Link
              to="/"
              className={cn(
                buttonVariants({ size: "default" }),
                "mt-8 h-11 rounded-2xl bg-[#1F7A7A] px-6 text-white hover:bg-[#196767]",
              )}
            >
              Volver al inicio
            </Link>
          </CardContent>
        </Card>
      </section>
    );
  }

  const heroContentBySlug: Record<
    string,
    { title: string; subtitle: string; badge: string }
  > = {
    boda: {
      title: "Invitaciones de boda que enamoran desde el primer vistazo",
      subtitle:
        "Disenos elegantes, animados y personalizados para presentar tu gran dia con una presencia que se siente especial desde el primer segundo.",
      badge: "Disenos premium",
    },
    "xv-anos": {
      title: "Invitaciones de XV Años con presencia, brillo y personalidad",
      subtitle:
        "Colecciones modernas y memorables para anunciar una celebracion unica con detalles delicados, movimiento y mucha presencia visual.",
      badge: "Experiencia premium",
    },
    bautizo: {
      title: "Invitaciones de bautizo serenas, delicadas y memorables",
      subtitle:
        "Una propuesta elegante para compartir un momento familiar importante con diseno refinado, calidez y una presentacion impecable.",
      badge: "Coleccion exclusiva",
    },
    cumpleanos: {
      title: "Invitaciones de cumpleanos con estilo, energia y buena presencia",
      subtitle:
        "Disenos festivos y modernos para que tu celebracion se vea cuidada, atractiva y lista para compartirse de inmediato.",
      badge: "Favoritas del momento",
    },
    "baby-shower": {
      title: "Invitaciones de baby shower dulces, modernas y refinadas",
      subtitle:
        "Invitaciones digitales suaves y encantadoras para anunciar una celebracion especial con elegancia y una experiencia visual premium.",
      badge: "Diseno con encanto",
    },
  };

  const getPreviewImage = (accent: string) => {
    if (category.slug === "boda") {
      if (accent === "ruby") return weddingRubyPreviewImage;
      if (accent === "gold") return weddingGoldPreviewImage;
      if (accent === "silver") return weddingSilverPreviewImage;
    }

    if (category.slug === "xv-anos") {
      if (accent === "ruby") return xvRubyPreviewImage;
      if (accent === "gold") return xvGoldPreviewImage;
      if (accent === "silver") return xvSilverPreviewImage;
    }

    return brandPreviewImage;
  };

  const packageMeta: Record<string, { badge: string; featured?: boolean }> = {
    silver: { badge: "Entrada premium" },
    gold: { badge: "Mas popular", featured: true },
    ruby: { badge: "Signature" },
  };

  const displayedPackages: PackageDisplay[] = category.packages.map((pkg) => ({
    name: pkg.name,
    subtitle: pkg.subtitle,
    price: pkg.price,
    features: pkg.features.slice(0, 6),
    image: getPreviewImage(pkg.accent),
    previewHref: `/plantilla/${category.slug}/${pkg.name.toLowerCase()}`,
    badge: packageMeta[pkg.accent].badge,
    featured: packageMeta[pkg.accent].featured,
  }));

  const featuredPreview =
    displayedPackages.find((pkg) => pkg.featured)?.previewHref ??
    displayedPackages[0]?.previewHref ??
    "/";

  const heroContent =
    heroContentBySlug[category.slug] ?? {
      title: category.title,
      subtitle: category.description,
      badge: "Coleccion premium",
    };

  return (
    <div className="space-y-8 pb-4">
      <CategoryHero
        badge={heroContent.badge}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        categoryName={category.shortName}
        icon={category.icon}
        previewImage={getPreviewImage("gold")}
        previewHref={featuredPreview}
        previewSlides={displayedPackages.map((pkg) => ({
          name: pkg.name,
          image: pkg.image,
          previewHref: pkg.previewHref,
        }))}
      />

      <PackagesGrid
        title={`Elige el paquete ideal para tu invitacion de ${category.shortName.toLowerCase()}`}
        description="Cada nivel esta pensado para verse como un producto premium: mejor presencia visual, mas recursos interactivos y una experiencia que hace que el precio se sienta justificado."
        packages={displayedPackages}
      />

      <BenefitsSection
        title="Por que nuestras invitaciones se sienten diferentes"
        description="Combinamos diseno atractivo, detalles interactivos y una presentacion cuidada para que tu invitacion no solo informe, sino que tambien emocione y eleve la percepcion de tu evento."
      />

      <CTASection
        title="Haz de tu evento algo inolvidable desde la invitacion"
        description="Elige una coleccion que se vea moderna, elegante y lista para impresionar a tus invitados desde el primer mensaje."
        previewHref={featuredPreview}
      />

      <HomeFooter />
    </div>
  );
}
