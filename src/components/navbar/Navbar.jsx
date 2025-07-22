import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Función para scroll suave a secciones en la misma página
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold text-warning" to="/">
          Alan Assel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('sobre-mi')}
                  style={{ cursor: 'pointer' }}
                >
                  Sobre mí
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#sobre-mi">
                  Sobre mí
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Portfolio-2025/demos">
                Demos
              </Link>
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('servicios')}
                  style={{ cursor: 'pointer' }}
                >
                  Servicios
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#servicios">
                  Servicios
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('proyectos')}
                  style={{ cursor: 'pointer' }}
                >
                  Proyectos
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#proyectos">
                  Proyectos
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('herramientas')}
                  style={{ cursor: 'pointer' }}
                >
                  Herramientas
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#herramientas">
                  Herramientas
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('testimonios')}
                  style={{ cursor: 'pointer' }}
                >
                  Testimonios
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#testimonios">
                  Testimonios
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location.pathname === '/' ? (
                <button
                  className="nav-link text-light bg-transparent border-0"
                  onClick={() => scrollToSection('contacto')}
                  style={{ cursor: 'pointer' }}
                >
                  Contacto
                </button>
              ) : (
                <Link className="nav-link text-light" to="/#contacto">
                  Contacto
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}