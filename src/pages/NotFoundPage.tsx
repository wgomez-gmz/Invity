import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="centered-page">
      <div className="panel compact-panel">
        <span className="badge">404</span>
        <h2>Esta pagina no se encuentra disponible.</h2>
        <p>La ruta que intentaste abrir no forma parte de la experiencia actual de Invity.</p>
        <Link className="primary-button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
