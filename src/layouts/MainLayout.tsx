import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/categoria/boda", label: "Boda" },
  { to: "/categoria/xv-anos", label: "XV Años" },
  { to: "/categoria/bautizo", label: "Bautizo" },
  { to: "/categoria/cumpleanos", label: "Cumpleanos" },
  { to: "/categoria/baby-shower", label: "Baby Shower" },
];

export function MainLayout() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="utility-bar">
          <div className="main-nav-content">
            <div className="header-topline">
              <div className="utility-content">
                <div className="brand-lockup">
                  <span className="brand-mark" />
                  <div>
                    <p className="eyebrow">Invity</p>
                    <p className="brand-subtitle">Invitaciones digitales con estilo premium</p>
                  </div>
                </div>

                <div className="service-note">
                  <span className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 7v5l3 2" />
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </span>
                  <div>
                    <p className="service-title">Atencion personalizada</p>
                    <p className="service-copy">Lunes a Viernes 9:00 - 18:00 Hrs. Sabados 9:00 - 14:00 Hrs.</p>
                  </div>
                </div>
              </div>

              <div className="header-actions">
                <div
                  className={mobileMenuOpen ? "social-links social-links-mobile-open" : "social-links"}
                  aria-label="Redes sociales"
                >
                  <a className="social-link" href="/" aria-label="Facebook">
                    <svg viewBox="0 0 24 24">
                      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
                    </svg>
                  </a>
                  <a className="social-link" href="/" aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="1" />
                    </svg>
                  </a>
                  <a className="social-link" href="/" aria-label="TikTok">
                    <svg viewBox="0 0 24 24">
                      <path d="M14 4c.8 1.8 2.1 3 4 3.6V11a7.2 7.2 0 0 1-4-1.1v5.1a4.8 4.8 0 1 1-4.8-4.8c.3 0 .5 0 .8.1v3.2a1.8 1.8 0 1 0 1.8 1.8V4Z" />
                    </svg>
                  </a>
                </div>

                <a className="contact-pill desktop-contact-pill" href="tel:+520000000000">
                  <span className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6.6 3.8h2.8l1.4 4.1-1.8 1.8a15 15 0 0 0 5.2 5.2l1.8-1.8 4.1 1.4v2.8a1.7 1.7 0 0 1-1.9 1.7A16.2 16.2 0 0 1 5 5.7a1.7 1.7 0 0 1 1.6-1.9Z" />
                    </svg>
                  </span>
                    <span>Solicitar atencion</span>
                  </a>
              </div>
            </div>

            <div className="nav-mobile-bar">
              <a className="contact-pill mobile-contact-pill" href="tel:+520000000000">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 3.8h2.8l1.4 4.1-1.8 1.8a15 15 0 0 0 5.2 5.2l1.8-1.8 4.1 1.4v2.8a1.7 1.7 0 0 1-1.9 1.7A16.2 16.2 0 0 1 5 5.7a1.7 1.7 0 0 1 1.6-1.9Z" />
                  </svg>
                </span>
                <span>Contacto</span>
              </a>

              <button
                className={mobileMenuOpen ? "nav-toggle nav-toggle-open" : "nav-toggle"}
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-controls="main-nav"
                aria-label="Abrir menu principal"
                onClick={() => setMobileMenuOpen((current) => !current)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div className="nav-row">
              <span className="nav-caption">Categorias</span>
              <nav
                id="main-nav"
                className={mobileMenuOpen ? "main-nav main-nav-mobile-open" : "main-nav"}
                aria-label="Principal"
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    end={item.end}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
