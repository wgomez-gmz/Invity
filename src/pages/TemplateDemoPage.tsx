import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Check, Eye, Gem, Sparkles } from "lucide-react";
import {
  getCategoryBySlug,
  getPackageByTier,
} from "@/features/catalog/catalogData";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { goldWeddingTemplateData } from "@/features/templates/wedding/gold/templateData";
import { rubyWeddingTemplateData } from "@/features/templates/wedding/ruby/templateData";
import { silverWeddingTemplateData } from "@/features/templates/wedding/silver/templateData";
import { baptismRubyTemplateData } from "@/features/templates/baptism/ruby/templateData";
import { baptismEssentialTemplateData } from "@/features/templates/baptism/essential/templateData";
import { xvGoldTemplateData } from "@/features/templates/xv/gold/templateData";
import { xvPremiumTemplateData } from "@/features/templates/xv/premium/templateData";
import { xvSilverTemplateData } from "@/features/templates/xv/silver/templateData";

const RubyWeddingTemplate = lazy(() =>
  import("@/features/templates/wedding/ruby/RubyWeddingTemplate").then((module) => ({
    default: module.RubyWeddingTemplate,
  })),
);
const GoldWeddingTemplate = lazy(() =>
  import("@/features/templates/wedding/gold/GoldWeddingTemplate").then((module) => ({
    default: module.GoldWeddingTemplate,
  })),
);
const SilverWeddingTemplate = lazy(() =>
  import("@/features/templates/wedding/silver/SilverWeddingTemplate").then((module) => ({
    default: module.SilverWeddingTemplate,
  })),
);
const XvPremiumTemplate = lazy(() =>
  import("@/features/templates/xv/premium/XvPremiumTemplate").then((module) => ({
    default: module.XvPremiumTemplate,
  })),
);
const XvGoldTemplate = lazy(() =>
  import("@/features/templates/xv/gold/XvGoldTemplate").then((module) => ({
    default: module.XvGoldTemplate,
  })),
);
const XvSilverTemplate = lazy(() =>
  import("@/features/templates/xv/silver/XvSilverTemplate").then((module) => ({
    default: module.XvSilverTemplate,
  })),
);
const BaptismRubyTemplate = lazy(() =>
  import("@/features/templates/baptism/ruby/BaptismRubyTemplate").then((module) => ({
    default: module.BaptismRubyTemplate,
  })),
);
const BaptismEssentialTemplate = lazy(() =>
  import("@/features/templates/baptism/essential/BaptismEssentialTemplate").then((module) => ({
    default: module.BaptismEssentialTemplate,
  })),
);

const templateCopy = {
  ruby: {
    eyebrow: "Coleccion Ruby",
    title: "Una propuesta editorial con presencia exclusiva.",
    lead: "Ideal para celebraciones que buscan una invitacion distinguida, romantica y visualmente inolvidable.",
  },
  gold: {
    eyebrow: "Coleccion Gold",
    title: "Elegancia clasica con un brillo sutil y sofisticado.",
    lead: "Pensada para quienes desean equilibrio entre calidez, refinamiento y una presentacion impecable.",
  },
  silver: {
    eyebrow: "Coleccion Silver",
    title: "Una expresion moderna, limpia y naturalmente elegante.",
    lead: "Perfecta para eventos que prefieren una presencia sutil, actual y de gran buen gusto.",
  },
} as const;

function TemplateLoadingState() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-4 py-12">
      <Card className="w-full max-w-xl rounded-[2rem] border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
        <CardContent className="p-8 text-center">
          <span className="inline-flex rounded-full border border-[#1F7A7A]/10 bg-[#1F7A7A]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
            Cargando experiencia
          </span>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Preparando la plantilla y sus recursos visuales.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export function TemplateDemoPage() {
  const { slug, tier } = useParams();
  const category = getCategoryBySlug(slug);
  const pkg = getPackageByTier(category, tier);
  const [activeWeddingSlide, setActiveWeddingSlide] = useState(0);
  const [activeChurchSlide, setActiveChurchSlide] = useState(0);
  const [activeReceptionSlide, setActiveReceptionSlide] = useState(0);
  const [activePadrinosSlide, setActivePadrinosSlide] = useState(0);

  const weddingTemplateData = useMemo(() => {
    if (category?.slug !== "boda") {
      return null;
    }

    if (pkg?.accent === "ruby") {
      return rubyWeddingTemplateData;
    }

    if (pkg?.accent === "gold") {
      return goldWeddingTemplateData;
    }

    if (pkg?.accent === "silver") {
      return silverWeddingTemplateData;
    }

    return null;
  }, [category?.slug, pkg?.accent]);

  const isWeddingEditorial = weddingTemplateData !== null;
  const isWeddingRuby = weddingTemplateData?.key === "ruby";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug, tier]);

  useEffect(() => {
    if (!weddingTemplateData) {
      return undefined;
    }

    setActiveWeddingSlide(0);
    setActiveChurchSlide(0);
    setActiveReceptionSlide(0);
    setActivePadrinosSlide(0);

    return undefined;
  }, [weddingTemplateData]);

  useEffect(() => {
    if (!weddingTemplateData) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveWeddingSlide((current) => (current + 1) % weddingTemplateData.hero.slides.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [weddingTemplateData]);

  useEffect(() => {
    if (!weddingTemplateData) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveChurchSlide((current) => (current + 1) % weddingTemplateData.ceremony.slides.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [weddingTemplateData]);

  useEffect(() => {
    if (!weddingTemplateData) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveReceptionSlide((current) => (current + 1) % weddingTemplateData.reception.slides.length);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [weddingTemplateData]);

  useEffect(() => {
    if (!isWeddingEditorial) {
      return undefined;
    }

    let observer: IntersectionObserver | null = null;
    let retryTimeoutId: number | null = null;
    let attempts = 0;
    const maxAttempts = 40;

    const attachRevealObserver = () => {
      const revealNodes = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));

      // Wedding templates are lazy-loaded; retry until their sections are mounted.
      if (revealNodes.length === 0) {
        attempts += 1;
        if (attempts < maxAttempts) {
          retryTimeoutId = window.setTimeout(attachRevealObserver, 120);
        }
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.18,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      revealNodes.forEach((node) => {
        if (!node.classList.contains("is-visible")) {
          observer?.observe(node);
        }
      });
    };

    attachRevealObserver();

    return () => {
      if (retryTimeoutId !== null) {
        window.clearTimeout(retryTimeoutId);
      }
      observer?.disconnect();
    };
  }, [isWeddingEditorial, weddingTemplateData, slug, tier]);

  useEffect(() => {
    if (!isWeddingRuby || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));
    if (parallaxNodes.length === 0) {
      return undefined;
    }

    let ticking = false;

    const updateParallax = () => {
      parallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.parallaxSpeed ?? "0");
        const rect = node.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distance = elementCenter - viewportCenter;
        const translateY = distance * speed * -0.12;
        node.style.setProperty("--parallax-shift", `${translateY.toFixed(2)}px`);
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isWeddingRuby, weddingTemplateData]);

  if (!category || !pkg) {
    return (
      <section className="grid min-h-[70vh] place-items-center px-2 py-8">
        <Card className="w-full max-w-2xl rounded-[2rem] border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
          <CardContent className="p-8 text-center">
            <span className="inline-flex rounded-full border border-[#1F7A7A]/10 bg-[#1F7A7A]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
              Vista no disponible
            </span>
            <h2 className="mt-5 font-serif text-3xl text-[#1A2A44]">
              La invitacion que intentaste abrir no se encuentra disponible por ahora.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Regresa a la coleccion y descubre otras propuestas diseñadas para celebraciones con
              presencia premium.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "h-11 rounded-2xl border-[#1F7A7A]/15 bg-white px-6 text-[#1A2A44]",
                )}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
              <Link
                to={`/categoria/${slug ?? "boda"}`}
                className={cn(
                  buttonVariants({ size: "default" }),
                  "h-11 rounded-2xl bg-[#1F7A7A] px-6 text-white hover:bg-[#196767]",
                )}
              >
                Regresar a la coleccion
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (category.slug === "xv-anos") {
    if (pkg.accent === "silver") {
      return (
        <Suspense fallback={<TemplateLoadingState />}>
          <XvSilverTemplate
            category={category}
            pkg={pkg}
            data={xvSilverTemplateData}
          />
        </Suspense>
      );
    }

    if (pkg.accent === "gold") {
      return (
        <Suspense fallback={<TemplateLoadingState />}>
          <XvGoldTemplate
            category={category}
            pkg={pkg}
            data={xvGoldTemplateData}
          />
        </Suspense>
      );
    }

    return (
      <Suspense fallback={<TemplateLoadingState />}>
        <XvPremiumTemplate
          category={category}
          pkg={pkg}
          data={xvPremiumTemplateData}
        />
      </Suspense>
    );
  }

  if (category.slug === "bautizo" && pkg.accent === "ruby") {
    return (
      <Suspense fallback={<TemplateLoadingState />}>
        <BaptismRubyTemplate
          category={category}
          pkg={pkg}
          data={baptismRubyTemplateData}
        />
      </Suspense>
    );
  }

  if (category.slug === "bautizo" && pkg.accent === "silver") {
    return (
      <Suspense fallback={<TemplateLoadingState />}>
        <BaptismEssentialTemplate
          category={category}
          pkg={pkg}
          data={baptismEssentialTemplateData}
        />
      </Suspense>
    );
  }

  if (weddingTemplateData) {
    const runtime = {
      activeWeddingSlide,
      activeChurchSlide,
      activeReceptionSlide,
      activePadrinosSlide,
      setActiveWeddingSlide,
      setActivePadrinosSlide,
    };

    if (weddingTemplateData.key === "ruby") {
      return (
        <Suspense fallback={<TemplateLoadingState />}>
          <RubyWeddingTemplate
            category={category}
            pkg={pkg}
            data={weddingTemplateData}
            runtime={runtime}
          />
        </Suspense>
      );
    }

    if (weddingTemplateData.key === "silver") {
      return (
        <Suspense fallback={<TemplateLoadingState />}>
          <SilverWeddingTemplate
            category={category}
            pkg={pkg}
            data={weddingTemplateData}
            runtime={runtime}
          />
        </Suspense>
      );
    }

    return (
      <Suspense fallback={<TemplateLoadingState />}>
        <GoldWeddingTemplate
          category={category}
          pkg={pkg}
          data={weddingTemplateData}
          runtime={runtime}
        />
      </Suspense>
    );
  }

  const copy = templateCopy[pkg.accent];

  return (
    <div className="space-y-6 px-2 py-2">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to={`/categoria/${category.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "default" }),
            "h-11 w-fit rounded-2xl border-[#1F7A7A]/15 bg-white px-5 text-[#1A2A44]",
          )}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Regresar a {category.shortName}
        </Link>

        <span className="inline-flex w-fit rounded-full border border-[#1F7A7A]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white via-[#fbfcfb] to-[#eef4f3] p-6 shadow-xl shadow-slate-950/5 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(31,122,122,0.12),transparent_22%)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1F7A7A]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F7A7A]">
              <Sparkles className="h-4 w-4 text-[#D4AF37]" />
              {copy.eyebrow}
            </span>
            <h1 className="mt-5 max-w-[13ch] font-serif text-4xl leading-tight text-[#1A2A44] md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{copy.lead}</p>

            <div className="mt-8 rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-950/5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Ejemplo de evento
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[#1A2A44]">
                Carla <span className="text-[#D4AF37]">&</span> Mateo
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#1F7A7A]">
                24 Octubre 2026
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Monterrey, Nuevo Leon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto w-full max-w-[28rem]"
          >
            <div className="rounded-[2rem] border border-[#1A2A44]/10 bg-gradient-to-br from-[#1A2A44] to-[#214b63] p-4 shadow-2xl shadow-[#1A2A44]/20">
              <div className="rounded-[1.5rem] bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  <span>Preview</span>
                  <Gem className="h-4 w-4 text-[#D4AF37]" />
                </div>

                <div className="mt-4 rounded-[1.5rem] bg-gradient-to-br from-[#f8faf9] to-[#eaf1f0] p-5 text-center">
                  <div className="flex h-[24rem] flex-col items-center justify-between rounded-[1.25rem] border border-white/80 bg-white px-4 py-6 shadow-lg shadow-slate-950/5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
                      Invity
                    </div>
                    <div>
                      <div className="mb-4 flex items-center justify-center gap-2 text-[#D4AF37]">
                        <span className="text-4xl">C</span>
                        <span className="text-2xl">&</span>
                        <span className="text-4xl">M</span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {pkg.name}
                      </p>
                      <h3 className="mt-3 font-serif text-3xl text-[#1A2A44]">{category.shortName}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{pkg.subtitle}</p>
                    </div>
                    <div className="grid w-full gap-3">
                      <Button className="h-10 rounded-2xl bg-[#1F7A7A] text-white hover:bg-[#196767]">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver detalle
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 rounded-2xl border-[#1F7A7A]/15 bg-white text-[#1A2A44]"
                      >
                        Solicitar personalizacion
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
          <CardContent className="p-8">
            <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-[#fffaf0] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#b28a26]">
              Experiencia
            </span>
            <h3 className="mt-5 font-serif text-3xl text-[#1A2A44]">
              Una invitacion que presenta tu evento con ritmo, claridad y emocion.
            </h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Cada paquete esta pensado para guiar a tus invitados desde la primera impresion hasta
              la confirmacion de asistencia con una experiencia armoniosa y memorable.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border-white/70 bg-white/90 shadow-xl shadow-slate-950/5">
          <CardContent className="p-8">
            <span className="inline-flex rounded-full border border-[#1F7A7A]/10 bg-[#1F7A7A]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#1F7A7A]">
              Incluye
            </span>
            <div className="mt-5 grid gap-3">
              {pkg.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#f9fbfb] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#1F7A7A]/10 text-[#1F7A7A]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-6 text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
