import { useState } from "react";
import "./promociones.css";
import ChatBotDemo from "./chatbot";

const slides = [
  {
    id: 1,
    title: "ChatBot Asistentes para Webs",
    description:
      "Un asistente conversacional que toma reservas, responde preguntas frecuentes y sugiere platos según tus gustos. Pruébalo haciendo clic abajo.",
    content: <ChatBotDemo />,
  },
  {
    id: 2,
    title: "Agente de Bajo Stock con Pedidos por WhatsApp",
    description:
      "Este agente detecta productos con bajo stock y automáticamente genera pedidos por WhatsApp al proveedor. Ideal para e-commerce o tiendas físicas.",
    content: (
      <div className="pantalla">
        <video controls className="promociones-media">
          <source
            src="https://example.com/video-agente-stock.mp4"
            type="video/mp4"
          />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
    ),
  },
];

export default function PromocionesCarrusel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="promociones-section">
      <div className="promociones-container">
        <h3>{slides[current].title}</h3>
        <p>{slides[current].description}</p>

        <div className="promociones-card">
          <div className="promociones-img"></div>
          <div className="promociones-content">{slides[current].content}</div>

          <div className="promociones-arrow left" onClick={prevSlide}>
            ‹
          </div>
          <div className="promociones-arrow right" onClick={nextSlide}>
            ›
          </div>
        </div>

        <div className="promociones-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`promociones-dot ${i === current ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
