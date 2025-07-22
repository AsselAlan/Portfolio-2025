import { useState, useRef, useEffect } from "react";
import "./promociones.css";
import ChatBotDemo from "./chatbot";

export default function Promociones() {
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const benefits = [
    {
      icon: "⚡",
      title: "Respuesta Instantánea",
      description: "Atiende consultas las 24 horas, todos los días del año. Tus clientes nunca esperan."
    },
    {
      icon: "🎯",
      title: "Calificación de Leads",
      description: "Identifica automáticamente clientes potenciales y los deriva al vendedor correcto."
    },
    {
      icon: "💰",
      title: "Aumenta Conversiones",
      description: "Hasta 40% más ventas con recomendaciones personalizadas y seguimiento automatizado."
    },
    {
      icon: "📱",
      title: "Omnicanal",
      description: "Mismo asistente en tu web, WhatsApp, Instagram y donde necesites estar."
    },
    {
      icon: "🤝",
      title: "Personalización Total",
      description: "Entrenado específicamente para tu negocio, con tu tono de voz y conocimiento de productos."
    },
    {
      icon: "📈",
      title: "Analytics Avanzados",
      description: "Reportes detallados de conversaciones, conversiones y puntos de mejora."
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleCardClick = (index) => {
    if (isDragging) return; // No navegar si está arrastrando
    setCurrentBenefit(index);
    const cardWidth = 280; // ancho de cada card + gap
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && carouselRef.current) {
        const nextIndex = (currentBenefit + 1) % benefits.length;
        setCurrentBenefit(nextIndex);
        const cardWidth = 280;
        carouselRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentBenefit, isDragging, benefits.length]);

  return (
    <section className="chatbot-showcase" id="demo-chatbot">
      <div className="container">
        {/* Header principal */}
        <div className="showcase-header text-center mb-5">
          <h2 className="showcase-title">
            🤖 Servicio de ChatBots IA para <span className="highlight-text">Web y WhatsApp</span>
          </h2>
          {/* <h3 className="showcase-subtitle">
            Asistentes Conversacionales que Venden, Atienden 24/7 y Convierten 
          </h3> */}
          <p className="showcase-description">
            Transformá tu atención al cliente con IA avanzada. Mis chatbots no solo responden preguntas, 
            sino que <strong>califican leads, toman reservas, procesan pedidos y guían a tus clientes hacia la compra</strong>. 
            Funcionan tanto en tu sitio web como en WhatsApp, brindando una experiencia omnicanal perfecta.
          </p>
        </div>
      

      {/* Selector de roles mejorado */}
      <div className="role-selector">
          <h5 className="selector-title mb-4">💬 <span className="highlight-text">Probá una demo en vivo,</span> este bot simula ser un chatbot para diferentes roles:</h5>
          <div className="instructions-content">
            <div className="instruction-step">
              <p className="showcase-description text-start">
                - Seleccioná un ROL para ver diferentes personalidades del bot. <br />
                - Pedí recomendaciones, hacé preguntas o solicitá información. <br />
                - El bot comprende contexto, hace preguntas de calificación y guía hacia la conversión.
              </p>  
            </div>
        </div>

        {/* Demo del ChatBot */}
        <div className="chatbot-demo-container mt-5">
          <ChatBotDemo />
        </div>
        

        <div className="use-cases mt-5">
          <h4 className="use-cases-title highlight-text text-center mb-4">Casos de uso reales:</h4>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h5>🍽️ Restaurantes</h5>
              <ul>
                <li>Toma reservas automáticamente</li>
                <li>Recomienda platos según preferencias</li>
                <li>Procesa pedidos de delivery</li>
                <li>Informa horarios y ubicación</li>
              </ul>
            </div>
            <div className="use-case-card">
              <h5>🏥 Clínicas Médicas</h5>
              <ul>
                <li>Agenda turnos en tiempo real</li>
                <li>Informa sobre especialidades</li>
                <li>Responde dudas sobre obras sociales</li>
                <li>Deriva emergencias a guardia</li>
              </ul>
            </div>
            <div className="use-case-card">
              <h5>🛒 E-commerce</h5>
              <ul>
                <li>Recomienda productos personalizados</li>
                <li>Procesa devoluciones y garantías</li>
                <li>Informa sobre stock y envíos</li>
                <li>Recupera carritos abandonados</li>
              </ul>
            </div>
          </div>
        </div>z

      </div>
      </div>
    </section>
  );
}