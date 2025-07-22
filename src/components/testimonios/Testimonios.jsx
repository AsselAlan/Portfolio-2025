import React, { useState, useEffect } from "react";
import "./Testimonios.css";

const testimonios = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    empresa: "Distribuidora San Martín",
    cargo: "Gerente de Operaciones",
    imagen: "https://placehold.co/80x80/333/fff?text=CM",
    testimonio: "El bot de WhatsApp que desarrolló Alan nos ahorró 15 horas semanales en gestión de pedidos. La automatización funciona perfecta y los clientes están felices con la rapidez de respuesta.",
    proyecto: "Bot de WhatsApp para pedidos",
    rating: 5,
    impacto: "15h/semana ahorradas"
  },
  {
    id: 2,
    nombre: "María González",
    empresa: "TechStart Solutions",
    cargo: "CEO",
    imagen: "https://placehold.co/80x80/333/fff?text=MG",
    testimonio: "Necesitábamos actualizar precios de 2000+ productos diariamente. El scraper automatizado de Alan lo hace en 30 minutos vs las 8 horas que nos tomaba manualmente. ROI increíble.",
    proyecto: "Automatización de precios",
    rating: 5,
    impacto: "+90% eficiencia"
  },
  {
    id: 3,
    nombre: "Roberto Silva",
    empresa: "Logística YPF",
    cargo: "Supervisor de Flota",
    imagen: "https://placehold.co/80x80/333/fff?text=RS",
    testimonio: "El dashboard que creó Alan para monitorear nuestros 150 camiones es una herramienta clave para las operaciones. Datos en tiempo real y alertas inteligentes que realmente funcionan.",
    proyecto: "Dashboard de logística",
    rating: 5,
    impacto: "150 camiones monitoreados"
  },
  {
    id: 4,
    nombre: "Ana Rodríguez",
    empresa: "Fashion Store Online",
    cargo: "Fundadora",
    imagen: "https://placehold.co/80x80/333/fff?text=AR",
    testimonio: "Mi e-commerce generó $45K en el primer mes gracias al diseño y automatizaciones de Alan. El carrito persistente y el checkout optimizado aumentaron la conversión al 4.2%.",
    proyecto: "E-commerce completo",
    rating: 5,
    impacto: "$45K primer mes"
  },
  {
    id: 5,
    nombre: "Diego Martínez",
    empresa: "Consultora Digital",
    cargo: "Director Técnico",
    imagen: "https://placehold.co/80x80/333/fff?text=DM",
    testimonio: "Alan no solo entrega código de calidad, sino que entiende el negocio. Sus automatizaciones con n8n transformaron nuestros procesos internos y la productividad del equipo.",
    proyecto: "Automatización interna",
    rating: 5,
    impacto: "+40% productividad"
  }
];

export default function Testimonios() {
  const [testimonioActual, setTestimonioActual] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setTestimonioActual((prev) => (prev + 1) % testimonios.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const siguiente = () => {
    setTestimonioActual((prev) => (prev + 1) % testimonios.length);
    setIsAutoPlaying(false);
  };

  const anterior = () => {
    setTestimonioActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    setIsAutoPlaying(false);
  };

  const irA = (index) => {
    setTestimonioActual(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`bi bi-star${i < rating ? '-fill' : ''} text-warning`}
      ></i>
    ));
  };

  const testimonio = testimonios[testimonioActual];

  return (
    <section id="testimonios" className="py-5 bg-black text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-warning mb-3">Lo que dicen mis clientes</h2>
          <p className="text-muted">
            Testimonios reales de empresas que transformaron sus procesos con automatización e IA
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Testimonio principal */}
            <div className="testimonio-card bg-dark border border-secondary rounded p-4 position-relative">
              {/* Quote icon */}
              <div className="quote-icon position-absolute top-0 start-0 translate-middle">
                <div className="bg-warning rounded-circle p-2">
                  <i className="bi bi-quote text-dark fs-4"></i>
                </div>
              </div>

              {/* Contenido del testimonio */}
              <div className="pt-3">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src={testimonio.imagen} 
                    alt={testimonio.nombre}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h5 className="mb-0 text-warning">{testimonio.nombre}</h5>
                    <p className="mb-0 text-muted small">{testimonio.cargo}</p>
                    <p className="mb-0 text-light small">{testimonio.empresa}</p>
                  </div>
                </div>

                <blockquote className="mb-3">
                  <p className="text-light fst-italic">"{testimonio.testimonio}"</p>
                </blockquote>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="mb-1">{renderStars(testimonio.rating)}</div>
                    <small className="text-muted">Proyecto: {testimonio.proyecto}</small>
                  </div>
                  <div className="text-end">
                    <div className="badge bg-success fs-6">{testimonio.impacto}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button 
                className="btn btn-outline-warning btn-sm me-3"
                onClick={anterior}
              >
                <i className="bi bi-chevron-left"></i>
              </button>

              {/* Dots indicator */}
              <div className="d-flex gap-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm rounded-circle p-1 ${
                      index === testimonioActual ? 'btn-warning' : 'btn-outline-secondary'
                    }`}
                    style={{ width: '12px', height: '12px' }}
                    onClick={() => irA(index)}
                  ></button>
                ))}
              </div>

              <button 
                className="btn btn-outline-warning btn-sm ms-3"
                onClick={siguiente}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>

            {/* Toggle autoplay */}
            <div className="text-center mt-3">
              <button 
                className="btn btn-link text-muted btn-sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                <i className={`bi bi-${isAutoPlaying ? 'pause' : 'play'}-fill me-1`}></i>
                {isAutoPlaying ? 'Pausar' : 'Reproducir'} automático
              </button>
            </div>
          </div>
        </div>

        {/* Grid de testimonios mini */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex gap-3 overflow-auto pb-3">
              {testimonios.map((test, index) => (
                <div 
                  key={test.id}
                  className={`testimonio-mini flex-shrink-0 p-3 border rounded cursor-pointer ${
                    index === testimonioActual 
                      ? 'border-warning bg-dark' 
                      : 'border-secondary bg-black'
                  }`}
                  style={{ width: '250px', cursor: 'pointer' }}
                  onClick={() => irA(index)}
                >
                  <div className="d-flex align-items-center mb-2">
                    <img 
                      src={test.imagen} 
                      alt={test.nombre}
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                    <div>
                      <h6 className="mb-0 text-warning small">{test.nombre}</h6>
                      <small className="text-muted">{test.empresa}</small>
                    </div>
                  </div>
                  <p className="small text-light mb-0" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    "{test.testimonio}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-5">
          <h4 className="text-warning mb-3">¿Querés ser el próximo caso de éxito?</h4>
          <p className="text-muted mb-4">
            Conversemos sobre tu proyecto y veamos cómo la automatización puede transformar tu negocio
          </p>
          <a href="#contacto" className="btn btn-warning btn-lg">
            <i className="bi bi-rocket-fill me-2"></i>
            Empezar mi proyecto
          </a>
        </div>
      </div>
    </section>
  );
}