import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning" href="#">
          AL.
        </a>
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
              <a className="nav-link text-light" href="#sobre-mi">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#demo-chatbot">
                Demo ChatBot
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#herramientas">
                Herramientas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#testimonios">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}