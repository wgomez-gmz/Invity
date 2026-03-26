import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryBySlug } from "@/features/catalog/catalogData";
import weddingRubyPreviewImage from "@/assets/boda/rubi/image.png";
import weddingSilverPreviewImage from "@/assets/boda/Silver/image.png";

export function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!category) {
    return (
      <section className="category-empty">
        <div className="panel compact-panel">
          <span className="badge">Categoria no encontrada</span>
          <h2>La categoria que buscas aun no esta disponible.</h2>
          <Link className="primary-button" to="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  const getPhoneScreenStyle = (accent: string) => {
    if (category.slug !== "boda") {
      return undefined;
    }

    if (accent === "ruby") {
      return {
        backgroundImage: `linear-gradient(180deg, rgba(13, 8, 9, 0.08), rgba(13, 8, 9, 0.34)), url(${weddingRubyPreviewImage})`,
      };
    }

    if (accent === "silver") {
      return {
        backgroundImage: `linear-gradient(180deg, rgba(31, 41, 38, 0.08), rgba(31, 41, 38, 0.28)), url(${weddingSilverPreviewImage})`,
        backgroundPosition: "60% center",
      };
    }

    return undefined;
  };

  const getPhoneScreenClassName = (accent: string) => {
    if (category.slug === "boda" && (accent === "ruby" || accent === "silver")) {
      return "phone-screen phone-screen-photo";
    }

    return "phone-screen";
  };

  return (
    <div className="category-page">
      <section className="category-hero panel">
        <div className="category-hero-copy">
          <span className="section-kicker">Coleccion {category.shortName}</span>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>

        <div className={`category-hero-art ${category.accent}`}>
          <div className="category-hero-art-panel">
            <img src={category.icon} alt="" className="category-hero-icon" />
            <span className="category-hero-caption">{category.shortName}</span>
          </div>
        </div>
      </section>

      <section className="packages-section">
        <div className="packages-heading">
          <span className="section-kicker">Paquetes</span>
          <h2>Selecciona estilo y originalidad para tu invitacion.</h2>
        </div>

        <div className="packages-list">
          {category.packages.map((pkg) => (
            <article className={`package-card package-${pkg.accent}`} key={pkg.name}>
              <div className="package-card-header">
                <span className="package-label">Paquete</span>
                <h3>{pkg.name}</h3>
              </div>

              <div className="package-content">
                <div className="package-visual-block">
                  <p className="package-subtitle">{pkg.subtitle}</p>
                  <div className="phone-mockup">
                    <div
                      className={getPhoneScreenClassName(pkg.accent)}
                      style={getPhoneScreenStyle(pkg.accent)}
                    >
                      <div className="phone-screen-glow" />
                      <span className="phone-title">{category.shortName}</span>
                      <span className="phone-tier">{pkg.name}</span>
                    </div>
                  </div>

                  <Link
                    className="demo-button"
                    to={`/plantilla/${category.slug}/${pkg.name.toLowerCase()}`}
                  >
                    Ver demo
                  </Link>
                </div>

                <div className="package-info-block">
                  <div className="package-price-card">
                    <span className="price-label">Precio</span>
                    <strong>{pkg.price}</strong>
                    <span className="price-note">MXN</span>
                  </div>

                  <div className="package-actions">
                    <button className="secondary-button" type="button">
                      Solicitar informacion
                    </button>
                    <button className="primary-button" type="button">
                      Comprar
                    </button>
                  </div>

                  <div className="package-includes">
                    <h4>Que incluye?</h4>
                    <ul className="package-feature-list">
                      {pkg.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
