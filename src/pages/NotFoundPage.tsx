import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="centered-page">
      <div className="panel compact-panel">
        <span className="badge">404</span>
        <h2>P&aacute;gina no encontrada</h2>
        <p>La ruta que intentaste abrir no existe todav&iacute;a.</p>
        <Link className="primary-button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
