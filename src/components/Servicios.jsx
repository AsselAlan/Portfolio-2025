import React from "react";
import { FaCogs, FaCode, FaSearch, FaChartBar } from "react-icons/fa";

export default function Servicios() {
  return (
    <section id="servicios" className="py-5 bg-black text-white">
      <div className="container text-center">
        <h2 className="text-warning mb-4">Servicios</h2>
        <p className="mb-5">
          Esto es en lo que me especializo. Creo soluciones robustas y efectivas
          para automatizar y optimizar procesos digitales.
        </p>

        {/* Servicios */}
        <div className="row mb-5">
          <div className="col-md-3 mb-4">
            <FaCogs size={40} className="text-warning mb-3" />
            <h5>Automatizaciones</h5>
            <p className="text-muted">
              Más de 129 procesos optimizados con n8n y APIs.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <FaCode size={40} className="text-warning mb-3" />
            <h5>Desarrollo Web</h5>
            <p className="text-muted">
              Más de 220 módulos desarrollados con React & Supabase.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <FaSearch size={40} className="text-warning mb-3" />
            <h5>Scraping & Research</h5>
            <p className="text-muted">
              Scrapers inteligentes con Puppeteer y automatización de datos.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <FaChartBar size={40} className="text-warning mb-3" />
            <h5>Dashboards & Reporting</h5>
            <p className="text-muted">
              Visualización de métricas y análisis automatizado.
            </p>
          </div>
        </div>

        {/* Métricas */}
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <h3 className="text-warning">9+</h3>
            <p className="text-muted">Años de experiencia</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="text-warning">200+</h3>
            <p className="text-muted">Clientes satisfechos</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="text-warning">769+</h3>
            <p className="text-muted">Proyectos entregados</p>
          </div>
          <div className="col-md-3 mb-3">
            <h3 className="text-warning">124+</h3>
            <p className="text-muted">Empresas impactadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
