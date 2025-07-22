import React, { useState } from "react";
import "./Proyectos.css";

const categorias = ["Todos", "Automatizaciones IA", "Backend y DB", "Frontend", "E-commerce"];

const proyectos = [
  {
    id: 1,
    titulo: "Bot de WhatsApp + Google Forms",
    descripcion: "Automatización para validar tareas técnicas con n8n y Evolution API. Conecta WhatsApp a formularios de Google y almacena respuestas automáticamente.",
    categoria: "Automatizaciones IA",
    servicio: true,
    herramientas: ["n8n", "Google Forms", "Evolution API", "OpenAI"],
    metricas: { ahorro: "85% tiempo", usuarios: "50+ técnicos" },
    demo: "https://demo-bot-whatsapp.com",
    codigo: "https://github.com/alan/bot-whatsapp",
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=Bot+WhatsApp+Flow",
      "https://placehold.co/600x400/333/fff?text=Dashboard+Bot",
    ],
    tecnologias: ["Node.js", "Express", "MongoDB"],
    estado: "En producción"
  },
  {
    id: 2,
    titulo: "Scraping con Puppeteer",
    descripcion: "Actualización automática de stock y precios con Google Sheets. Ideal para e-commerce que quieren sincronizar sus productos con múltiples fuentes.",
    categoria: "Automatizaciones IA",
    servicio: true,
    herramientas: ["Puppeteer", "Google Sheets", "Node.js", "Cron Jobs"],
    metricas: { productos: "2000+ daily", precision: "99.2%" },
    demo: "https://demo-scraper.com",
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=Scraper+Dashboard",
      "https://placehold.co/600x400/333/fff?text=Data+Sync",
    ],
    tecnologias: ["Puppeteer", "Docker", "Redis"],
    estado: "En producción"
  },
  {
    id: 3,
    titulo: "E-commerce con React + Supabase",
    descripcion: "Tienda moderna con login, carrito persistente, panel de administración y sistema de pedidos conectados a una base de datos escalable.",
    categoria: "E-commerce",
    servicio: true,
    herramientas: ["React", "Supabase", "Tailwind", "LocalStorage"],
    metricas: { ventas: "$45K+ monthly", conversion: "4.2%" },
    demo: "https://demo-ecommerce.com",
    codigo: "https://github.com/alan/react-ecommerce",
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=E-commerce+Home",
      "https://placehold.co/600x400/333/fff?text=Admin+Panel",
    ],
    tecnologias: ["React", "Supabase", "Stripe"],
    estado: "En producción"
  },
  {
    id: 4,
    titulo: "Dashboard para logística YPF",
    descripcion: "Visualización de tareas, técnicos y progreso en tiempo real con base de datos conectada, ideal para operaciones de campo o seguimiento logístico.",
    categoria: "Backend y DB",
    servicio: false,
    herramientas: ["PostgreSQL", "n8n", "Chart.js", "Supabase"],
    metricas: { camiones: "150+ monitoreados", uptime: "99.8%" },
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=Dashboard+YPF",
      "https://placehold.co/600x400/333/fff?text=Fleet+Tracking",
    ],
    tecnologias: ["PostgreSQL", "Express", "Socket.io"],
    estado: "Corporativo"
  },
  {
    id: 5,
    titulo: "Agente de Stock Inteligente",
    descripcion: "IA que monitorea inventario, predice demanda y genera pedidos automáticos por WhatsApp. Incluye análisis de patrones de venta y alertas inteligentes.",
    categoria: "Automatizaciones IA",
    servicio: true,
    herramientas: ["OpenAI", "n8n", "WhatsApp API", "Python"],
    metricas: { stockouts: "-70%", efficiency: "+40%" },
    demo: "https://demo-agente-stock.com",
    imagenes: [
      "https://placehold.co/600x400/333/fff?text=AI+Stock+Agent",
      "https://placehold.co/600x400/333/fff?text=Predictive+Analytics",
    ],
    tecnologias: ["Python", "TensorFlow", "FastAPI"],
    estado: "Beta"
  }
];

export default function Proyectos() {
  const [filtro, setFiltro] = useState("Todos");
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const proyectosFiltrados = filtro === "Todos" 
    ? proyectos 
    : proyectos.filter((p) => p.categoria === filtro);

  const abrirModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const cerrarModal = () => {
    setProyectoSeleccionado(null);
  };

  const getEstadoBadge = (estado) => {
    const badges = {
      "En producción": "success",
      "Beta": "warning", 
      "Corporativo": "info"
    };
    return badges[estado] || "secondary";
  };

  return (
    <section id="proyectos" className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="text-warning mb-4">Proyectos y Servicios</h2>
        <p className="mb-4">
          Explora proyectos reales que desarrollé y servicios que podés contratar 
          para automatizar, optimizar o escalar tus procesos.
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
            <div key={proyecto.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card bg-black border border-secondary h-100 text-start position-relative overflow-hidden">
                
                {/* Estado Badge */}
                <div className="position-absolute top-0 end-0 m-2" style={{zIndex: 3}}>
                  <span className={`badge bg-${getEstadoBadge(proyecto.estado)}`}>
                    {proyecto.estado}
                  </span>
                </div>

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
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 carousel-img"
                          alt={`${proyecto.titulo} - Imagen ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contenido */}
                <div className="card-body position-relative z-2 bg-opacity">
                  <h5 className="card-title text-warning">{proyecto.titulo}</h5>
                  <p className="text-light small">{proyecto.categoria}</p>
                  <p className="card-text text-light small">{proyecto.descripcion}</p>

                  {/* Métricas clave */}
                  {proyecto.metricas && (
                    <div className="mb-2">
                      <small className="text-secondary">Métricas clave:</small>
                      <div className="d-flex gap-2 flex-wrap">
                        {Object.entries(proyecto.metricas).map(([key, value]) => (
                          <span key={key} className="badge bg-dark border text-warning small">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Herramientas */}
                  <div className="mt-2">
                    <small className="text-secondary">Herramientas:</small>
                    <div className="d-flex gap-1 flex-wrap mt-1">
                      {proyecto.herramientas.slice(0, 3).map((h, i) => (
                        <span key={i} className="badge bg-secondary small">{h}</span>
                      ))}
                      {proyecto.herramientas.length > 3 && (
                        <span className="badge bg-secondary small">
                          +{proyecto.herramientas.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="mt-3 d-flex gap-2">
                    <button 
                      className="btn btn-sm btn-warning flex-fill"
                      onClick={() => abrirModal(proyecto)}
                    >
                      Ver detalles
                    </button>
                    {proyecto.demo && (
                      <a 
                        href={proyecto.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-warning"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalles */}
        {proyectoSeleccionado && (
          <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header border-secondary">
                  <h5 className="modal-title text-warning">
                    {proyectoSeleccionado.titulo}
                  </h5>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white" 
                    onClick={cerrarModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{proyectoSeleccionado.descripcion}</p>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-warning">Tecnologías</h6>
                      <div className="d-flex gap-1 flex-wrap mb-3">
                        {proyectoSeleccionado.tecnologias?.map((tech, i) => (
                          <span key={i} className="badge bg-primary">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-warning">Herramientas</h6>
                      <div className="d-flex gap-1 flex-wrap mb-3">
                        {proyectoSeleccionado.herramientas.map((tool, i) => (
                          <span key={i} className="badge bg-secondary">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {proyectoSeleccionado.metricas && (
                    <div>
                      <h6 className="text-warning">Resultados</h6>
                      <div className="row">
                        {Object.entries(proyectoSeleccionado.metricas).map(([key, value]) => (
                          <div key={key} className="col-6 mb-2">
                            <div className="card bg-black border-secondary">
                              <div className="card-body text-center py-2">
                                <h6 className="text-warning mb-0">{value}</h6>
                                <small className="text-muted">{key}</small>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="modal-footer border-secondary">
                  {proyectoSeleccionado.demo && (
                    <a 
                      href={proyectoSeleccionado.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-warning"
                    >
                      Ver Demo
                    </a>
                  )}
                  {proyectoSeleccionado.codigo && (
                    <a 
                      href={proyectoSeleccionado.codigo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      Ver Código
                    </a>
                  )}
                  {proyectoSeleccionado.servicio && (
                    <button className="btn btn-warning">
                      Contratar Servicio
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}