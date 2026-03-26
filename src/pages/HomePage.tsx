import { Link } from "react-router-dom";
import logoImage from "@/assets/brand/image.png";
import { catalogEntries } from "@/features/catalog/catalogData";

const highlights = [
  "Diseno premium con experiencia mobile-first",
  "Categorias listas para vender y escalar",
  "Flujo pensado para convertir visitas en consultas",
];

export function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="badge">Invitaciones digitales premium</span>
          <h1>La forma elegante de presentar un evento que merece ser recordado.</h1>
          <p className="hero-description">
            Invity convierte cada celebracion en una experiencia visual refinada.
            Explora categorias disenadas para vender con estilo, claridad y una interaccion natural.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#categories">
              Ver categorias
            </a>
            <a className="secondary-button" href="#experience">
              Descubrir experiencia
            </a>
          </div>

          <ul className="hero-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual panel">
          <div className="hero-logo-frame">
            <img className="hero-logo" src={logoImage} alt="Logo de Invity" />
          </div>

          <div className="hero-floating-card">
            <p className="floating-label">Coleccion destacada</p>
            <strong>Momentos que comienzan con una gran primera impresion.</strong>
            <span>Disenos listos para bodas, XV anos, bautizos y mas.</span>
          </div>
        </div>
      </section>

      <section className="experience-strip" id="experience">
        <article className="experience-card panel">
          <span className="section-kicker">Curaduria visual</span>
          <h2>Una portada hecha para inspirar confianza y deseo de compra.</h2>
          <p>
            El home presenta las categorias como productos aspiracionales. El siguiente paso natural
            sera mostrar paquetes, precios y demos por categoria sin romper la experiencia.
          </p>
        </article>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading">
          <span className="section-kicker">Categorias</span>
          <h2>Encuentra el estilo ideal para cada celebracion.</h2>
          <p>
            Selecciona una categoria y continua con una coleccion de invitaciones pensada para ese momento especial.
          </p>
        </div>

        <div className="categories-grid">
          {catalogEntries.map((category) => (
            <article className={`category-card ${category.accent}`} key={category.slug}>
              <div className="category-pattern" aria-hidden="true" />
              <div className="category-icon-wrap">
                <img className="category-icon-image" src={category.icon} alt="" />
              </div>
              <h3>{category.shortName}</h3>
              <Link className="card-link" to={`/categoria/${category.slug}`}>
                Ver invitaciones
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
