import React, { useState, useRef, useEffect } from "react";
import "./SobreMi.css";
import perfilImage from "../../assets/foto-perfil.png"; // Reemplazá por tu imagen real

const timelineData = [
  {
    id: "pasado",
    titulo: "Experiencia",
    icono: "bi bi-briefcase-fill",
    label: "Pasado",
    contenido: (
      <div>
        <h6 className="seccion-subtitulo">
          Sobre mí – <span className="amarillo">Experiencia</span>
        </h6>
        <ul>
          <li>Título Técnico Electromecánico (2018)</li>
          <li>Cursos de desarrollo web y backend (React, Node, Mongo, etc.)</li>
          <li>Inicio autodidacta en inteligencia artificial</li>
          <li>Proyectos freelance en e-commerce y paneles administrativos</li>
          <li>Descubrimiento del potencial de las automatizaciones</li>
        </ul>
        <p>
          En 2018, me gradué como Técnico Electromecánico en la Escuela Técnica
          de mi pueblo. A lo largo de los años me formé en desarrollo web,
          realizando cursos de React JS, Node JS, JavaScript, HTML, CSS y bases
          de datos con MongoDB. Además, me introduje en el mundo de la
          inteligencia artificial de forma autodidacta, explorando sus
          herramientas por curiosidad y motivación personal.
        </p>
        <p>
          Trabajé como Técnico de Redes en una empresa de telecomunicaciones,
          donde descubrí el funcionamiento de los paquetes de red y las
          peticiones HTTP. Ese fue mi primer contacto con la programación, y
          desde entonces no paré de explorar.
        </p>
        <p>
          Más adelante comencé a trabajar como freelancer. Desarrollé un
          e-commerce y un panel administrativo para una empresa, con login,
          roles, gestión de empleados y un sistema de seguimiento de tiempos.
        </p>
        <p>
          Uno de los momentos que más me marcó fue entender que la inteligencia
          artificial y las automatizaciones podían hacer en minutos lo que a mí
          me llevaba días. Desde entonces, empecé a hacer que la tecnología
          trabaje para mí.
        </p>
      </div>
    ),
  },
  {
    id: "actual",
    titulo: "Actualidad",
    icono: "bi bi-lightning-fill",
    label: "Presente",
    contenido: (
      <div>
        <h6 className="seccion-subtitulo">
          Sobre mí – <span className="amarillo">Actualidad</span>
        </h6>
        <p>
          Hoy me dedico a ayudar a empresas y profesionales a{" "}
          <strong>ahorrar tiempo y dinero</strong> a través de soluciones de
          automatización e inteligencia artificial. Trabajo como{" "}
          <strong>consultor independiente</strong>, desarrollando sistemas
          personalizados que combinan agentes de IA, flujos automatizados y
          paneles web con datos procesados para mejorar la toma de decisiones.
        </p>
        <ul>
          <li>Consultoría en automatización e inteligencia artificial</li>
          <li>Desarrollo de bots IA para WhatsApp, web e Instagram</li>
          <li>Dashboards analíticos con IA para toma de decisiones</li>
          <li>Emprendimientos de e-commerce totalmente automatizados</li>
          <li>Soporte técnico en campo para flotas monitoreadas por YPF</li>
        </ul>
        <p>
          Desarrollo{" "}
          <strong>
            bots inteligentes para WhatsApp, sitios web e Instagram
          </strong>
          , automatizo tareas repetitivas con n8n, VPS y APIs, y construyo
          dashboards que muestran información clave de forma simple y
          accionable. Un caso concreto es un e-commerce automatizado donde un
          agente IA monitorea la base de datos, detecta bajo stock y realiza
          pedidos por WhatsApp, mientras otro bot atiende consultas de clientes
          desde la web.
        </p>
        <p>
          Además, lidero <strong>proyectos personales de e-commerce</strong>{" "}
          donde implemento automatizaciones de punta a punta: carga y
          actualización de productos, gestión de pedidos, atención al cliente y
          más. Es un espacio donde pruebo y aplico todo lo que desarrollo para
          otros.
        </p>
        <p>
          En paralelo, trabajo como{" "}
          <strong>
            Analista Técnico en{" "}
            <a
              href="https://sils.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sils.tech
            </a>
          </strong>
          , brindando soporte a la operación de YPF en transporte de cargas
          peligrosas. En este rol aplico tanto conocimientos informáticos como
          electromecánicos, desde la instalación y configuración de dispositivos
          en unidades Scania, Volvo o Mercedes-Benz, hasta el análisis de
          componentes electrónicos y sistemas de videovigilancia.
        </p>
      </div>
    ),
  },
  {
    id: "futuro",
    titulo: "Proyección",
    icono: "bi bi-rocket-fill",
    label: "Futuro",
    contenido: (
      <div>
        <h6 className="seccion-subtitulo">
          Sobre mí – <span className="amarillo">Proyección</span>
        </h6>
        <p>
          Mi visión a futuro está centrada en{" "}
          <strong>automatizar al 100% todo proceso repetitivo y costoso</strong>
          , permitiendo que personas y empresas liberen tiempo, recursos y foco
          para lo que realmente importa.
        </p>
        <ul>
          <li>
            Formación avanzada en IA, ciencia de datos y automatización con
            Python (UTN-FRD)
          </li>
          <li>
            Colaboraciones con profesionales de diseño, programación y negocios
          </li>
          <li>Escalar mi marca personal y lanzar cursos propios</li>
          <li>
            Crear una agencia especializada en soluciones con impacto real
          </li>
          <li>
            Automatizar procesos repetitivos al 100% y liberar tiempo
            estratégico
          </li>
        </ul>
        <p>
          Actualmente me estoy formando en el{" "}
          <strong>
            diplomado "Dominando Python: de Básico a Avanzado para Inteligencia
            Artificial"
          </strong>{" "}
          dictado por la UTN FRD. Este curso me está brindando herramientas
          clave en programación, estructuras de datos, ciencia de datos, machine
          learning, deep learning, visión por computadora, creación de APIs,
          despliegue en la nube, y automatización profesional con Python. Todo
          con una fuerte base ética y pensamiento aplicado a la industria real.
        </p>
        <p>
          Paralelamente, estoy{" "}
          <strong>
            colaborando con programadores, diseñadores y profesionales de
            distintas áreas
          </strong>{" "}
          para potenciar soluciones más completas y efectivas. Creo
          profundamente en el trabajo en equipo y en la creación de sinergias
          reales entre disciplinas.
        </p>
        <p>
          Quiero seguir creciendo como consultor,{" "}
          <strong>liderar proyectos de alto impacto</strong>, lanzar mis propios{" "}
          <strong>cursos y mentorías</strong>, y eventualmente{" "}
          <strong>
            formar una agencia especializada en IA y automatización
          </strong>{" "}
          que acompañe a empresas y profesionales en su transformación digital,
          sin humo ni promesas vacías: con resultados reales.
        </p>
      </div>
    ),
  },
];

const SobreMi = () => {
  const [activo, setActivo] = useState("actual");
  const [expandido, setExpandido] = useState(false);
  const [debeMostrarVerMas, setDebeMostrarVerMas] = useState(false);
  const contenidoRef = useRef(null);
  const sobreMiRef = useRef(null);

  useEffect(() => {
    if (contenidoRef.current) {
      const altura = contenidoRef.current.scrollHeight;
      setDebeMostrarVerMas(altura > 500);
    }
  }, [activo]);

  return (
    <div id="sobre-mi" ref={sobreMiRef} className="sobre-mi-container py-5">
      <div className="text-center mb-4">
        <img src={perfilImage} alt="Foto de Alan" className="img-perfil" />
      </div>

      <h2 className="text-center mb-4">Sobre mí</h2>

      <div className="timeline-wrapper">
        <div className="timeline">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`timeline-item ${activo === item.id ? "activo" : ""}`}
            >
              <div
                className="timeline-icon"
                onClick={() => {
                  setActivo(item.id);
                  setExpandido(false);
                }}
              >
                <i className={item.icono}></i>
              </div>
              <div className="timeline-content">
                <h5
                  onClick={() => {
                    setActivo(item.id);
                    setExpandido(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {item.titulo}
                </h5>
                {activo === item.id && (
                  <>
                    <div
                      className={`contenido-expandido ${
                        !expandido ? "colapsado" : ""
                      }`}
                      ref={contenidoRef}
                    >
                      {item.contenido}
                    </div>
                    {debeMostrarVerMas && (
                      <button
                        className="btn-ver-mas"
                        onClick={() => {
                          if (expandido && sobreMiRef.current) {
                            sobreMiRef.current.scrollIntoView({
                              behavior: "smooth",
                            });
                          }
                          setExpandido(!expandido);
                        }}
                      >
                        {expandido ? "Ver menos" : "Ver más"}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
