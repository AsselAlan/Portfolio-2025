import React, { useState } from "react";
import "./Proyectos.css";

const categorias = ["Todos", "Automatizaciones IA", "Backend y DB", "Frontend"];

const proyectos = [
  {
    id: 1,
    titulo: "Bot de WhatsApp + Google Forms",
    descripcion:
      "Automatización para validar tareas técnicas con n8n y Evolution API. Conecta WhatsApp a formularios de Google y almacena respuestas automáticamente.",
    categoria: "Automatizaciones IA",
    servicio: true,
    herramientas: ["n8n", "Google Forms", "Evolution API", "OpenAI"],
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=Bot+WhatsApp+1",
      "https://placehold.co/600x400/333/fff?text=Bot+WhatsApp+2",
    ],
  },
  {
    id: 2,
    titulo: "Scraping con Puppeteer",
    descripcion:
      "Actualización automática de stock y precios con Google Sheets. Ideal para ecommerce que quieren sincronizar sus productos con múltiples fuentes.",
    categoria: "Automatizaciones IA",
    servicio: true,
    herramientas: ["Puppeteer", "Google Sheets", "Node.js"],
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=Scraping+1",
      "https://placehold.co/600x400/333/fff?text=Scraping+2",
    ],
  },
  {
    id: 3,
    titulo: "E-commerce con React + Supabase",
    descripcion:
      "Tienda moderna con login, carrito persistente, panel de administración y sistema de pedidos conectados a una base de datos escalable.",
    categoria: "Frontend",
    servicio: true,
    herramientas: ["React", "Supabase", "Tailwind", "LocalStorage"],
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=E-commerce+1",
      "https://placehold.co/600x400/333/fff?text=E-commerce+2",
    ],
  },
  {
    id: 4,
    titulo: "Dashboard para logística YPF",
    descripcion:
      "Visualización de tareas, técnicos y progreso en tiempo real con base de datos conectada, ideal para operaciones de campo o seguimiento logístico.",
    categoria: "Backend y DB",
    servicio: false,
    herramientas: ["PostgreSQL", "n8n", "Veyes", "Supabase"],
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=E=Dashboard+YPF+1",
      "https://placehold.co/600x400/333/fff?text=Dashboard+YPF+2",
    ],
  },
];

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");

  const proyectosFiltrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtro);

  return (
    <section id="proyectos" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="text-warning mb-4">Proyectos y Servicios</h2>
        <p className="mb-4">
          Explora proyectos reales que desarrollé y servicios que podés
          contratar para automatizar, optimizar o escalar tus procesos.
        </p>

        {/* Filtros */}
        <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`btn btn-sm ${
                filtro === cat ? "btn-warning" : "btn-outline-warning"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="row">
          {proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className="col-md-6 mb-4">
              <div className="card bg-black border border-secondary h-100 text-start position-relative overflow-hidden">
                {/* Carrusel de fondo */}
                <div
                  id={`carousel-${proyecto.id}`}
                  className="carousel slide card-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {proyecto.imagenes.map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 carousel-img"
                          alt={`Imagen ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contenido */}
                <div className="card-body position-relative z-2 bg-opacity">
                  <h5 className="card-title text-warning">{proyecto.titulo}</h5>
                  <p className="text-light pt-4">{proyecto.categoria}</p>
                  <p className="card-text text-light">{proyecto.descripcion}</p>

                  <div className="mt-2">
                    <strong className="text-secondary">Herramientas:</strong>
                    <ul className="text-light small ps-3 mb-2">
                      {proyecto.herramientas.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  {proyecto.servicio && (
                    <div className="mt-3">
                      <button className="btn btn-sm btn-warning w-100">
                        Ver servicio
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
