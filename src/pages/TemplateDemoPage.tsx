import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getCategoryBySlug,
  getPackageByTier,
} from "@/features/catalog/catalogData";
import { GoldWeddingTemplate } from "@/features/templates/wedding/gold/GoldWeddingTemplate";
import { goldWeddingTemplateData } from "@/features/templates/wedding/gold/templateData";
import { RubyWeddingTemplate } from "@/features/templates/wedding/ruby/RubyWeddingTemplate";
import { rubyWeddingTemplateData } from "@/features/templates/wedding/ruby/templateData";
import { SilverWeddingTemplate } from "@/features/templates/wedding/silver/SilverWeddingTemplate";
import { silverWeddingTemplateData } from "@/features/templates/wedding/silver/templateData";

const templateCopy = {
  ruby: {
    eyebrow: "Coleccion Ruby",
    title: "Una invitacion premium con presencia editorial.",
    lead: "Perfecta para una celebracion que quiere verse exclusiva, romantica y con mucho detalle visual.",
  },
  gold: {
    eyebrow: "Coleccion Gold",
    title: "Un estilo clasico, brillante y sumamente elegante.",
    lead: "Pensada para quienes quieren equilibrio entre sofisticacion, calidez y una presentacion memorable.",
  },
  silver: {
    eyebrow: "Coleccion Silver",
    title: "Una propuesta limpia, moderna y facil de amar.",
    lead: "Ideal para eventos que buscan frescura, claridad y un acabado estilizado sin exceso visual.",
  },
} as const;

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

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    if (revealNodes.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [isWeddingEditorial, weddingTemplateData]);

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
      <section className="template-shell">
        <div className="template-topline">
          <Link className="template-back" to="/">
            Volver al inicio
          </Link>
        </div>
        <div className="template-missing">
          <div className="panel compact-panel">
            <span className="badge">Demo no disponible</span>
            <h2>La plantilla que intentaste abrir no existe por ahora.</h2>
            <Link className="primary-button" to={`/categoria/${slug ?? "boda"}`}>
              Regresar a categoria
            </Link>
          </div>
        </div>
      </section>
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
        <RubyWeddingTemplate
          category={category}
          pkg={pkg}
          data={weddingTemplateData}
          runtime={runtime}
        />
      );
    }

    if (weddingTemplateData.key === "silver") {
      return (
        <SilverWeddingTemplate
          category={category}
          pkg={pkg}
          data={weddingTemplateData}
          runtime={runtime}
        />
      );
    }

    return (
      <GoldWeddingTemplate
        category={category}
        pkg={pkg}
        data={weddingTemplateData}
        runtime={runtime}
      />
    );
  }

  const copy = templateCopy[pkg.accent];

  return (
    <div className={`template-shell template-${pkg.accent}`}>
      <div className="template-topline">
        <Link className="template-back" to={`/categoria/${category.slug}`}>
          Regresar a {category.shortName}
        </Link>
        <span className="template-pill">
          {category.shortName} - {pkg.name}
        </span>
      </div>

      <section className="template-hero-card">
        <div className="template-copy">
          <span className="template-eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.lead}</p>

          <div className="template-event-card">
            <p className="template-event-label">{category.shortName}</p>
            <h2>
              Carla <span>&</span> Mateo
            </h2>
            <p className="template-event-date">24 Octubre 2026</p>
            <p className="template-event-place">Monterrey, Nuevo Leon</p>
          </div>
        </div>

        <div className="template-preview">
          <div className="template-phone-frame">
            <div className="template-phone-screen">
              <div className="template-preview-header">
                <span>Invity</span>
              </div>

              <div className="template-monogram" aria-hidden="true">
                <span>C</span>
                <span>&</span>
                <span>M</span>
              </div>

              <div className="template-preview-body">
                <p className="template-line">{pkg.name}</p>
                <h3>{category.shortName}</h3>
                <p className="template-line">{pkg.subtitle}</p>
              </div>

              <div className="template-preview-actions">
                <button type="button">Ver demo</button>
                <button type="button">Personalizar</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="template-sections">
        <article className="template-block">
          <span className="badge">Experiencia</span>
          <h3>Secciones que cuentan una historia.</h3>
          <p>
            Cada paquete esta pensado para llevar a tus invitados desde la emocion
            inicial hasta la confirmacion de asistencia con una experiencia fluida.
          </p>
        </article>

        <article className="template-block">
          <span className="badge">Incluye</span>
          <ul className="template-feature-grid">
            {pkg.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
