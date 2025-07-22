import "./promociones.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Promociones() {
  const promos = [
    {
      icon: "🤖",
      title: "ChatBots IA 24/7 para",
      highlight: "Web y WhatsApp",
      description: "Transformá tu atención al cliente con IA avanzada. Mis chatbots no solo responden preguntas, sino que califican leads, toman reservas, procesan pedidos y guían a tus clientes hacia la compra. Funcionan tanto en tu sitio web como en WhatsApp, brindando una experiencia omnicanal perfecta.",
      buttonText: "PROBAR DEMO",
      buttonLink: "/Portfolio-2025/demos#demo-chatbot-roles"
    },
    {
      icon: "⚡",
      title: "Automatizaciones con",
      highlight: "n8n y APIs",
      description: "Conectá todas tus herramientas y procesos de negocio. Desde sincronizar inventarios hasta procesar pedidos automáticamente. Integraciones con MercadoLibre, WhatsApp, Google Sheets, Supabase y más de 400 servicios disponibles.",
      buttonText: "VER AUTOMATIZACIONES",
      buttonLink: "/Portfolio-2025/demos"
    },
    {
      icon: "🌐",
      title: "Desarrollo Web Full Stack con",
      highlight: "React y Supabase",
      description: "Sitios web modernos, e-commerce completos y aplicaciones web escalables. Con autenticación, bases de datos en tiempo real, pagos integrados y paneles de administración. Todo optimizado para performance y SEO.",
      buttonText: "VER PROYECTOS",
      buttonLink: "/Portfolio-2025/demos"
    },
    {
      icon: "📊",
      title: "Dashboards y Analytics con",
      highlight: "IA Integrada",
      description: "Paneles de control inteligentes que no solo muestran datos, sino que los interpretan. Con insights automáticos, predicciones y alertas personalizadas. Conectados a todas tus fuentes de datos en tiempo real.",
      buttonText: "VER DASHBOARDS",
      buttonLink: "/Portfolio-2025/demos"
    },
    {
      icon: "🔄",
      title: "Integración de Sistemas y",
      highlight: "APIs Personalizadas",
      description: "Conectá sistemas que no hablan entre sí. Desarrollo de APIs REST, integraciones con ERPs, CRMs, e-commerce y servicios de terceros. Sincronización bidireccional y procesamiento de datos en tiempo real.",
      buttonText: "CONSULTAR",
      buttonLink: "/Portfolio-2025/demos"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="chatbot-showcase" id="demo-chatbot">
      <div className="container">
        <Slider {...settings}>
          {promos.map((promo, index) => (
            <div key={index}>
              <div className="showcase-header text-center mb-5">
                <h2 className="showcase-title">
                  {promo.icon} {promo.title} <span className="highlight-text">{promo.highlight}</span>
                </h2>
                <p className="showcase-description mb-4">
                  {promo.description}
                </p>
                <Link className="btn-contactar" to={promo.buttonLink}>
                  {promo.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}