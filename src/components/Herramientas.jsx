import React from "react";
import {
  SiReact,
  SiSupabase,
  SiPuppeteer,
  SiOpenai,
  SiGooglecloud,
  SiJavascript,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

const herramientas = [
  { nombre: "React", icono: <SiReact size={40} />, color: "#61DAFB" },
  { nombre: "n8n", icono: <FaProjectDiagram size={40} />, color: "#EF6C00" },
  { nombre: "Supabase", icono: <SiSupabase size={40} />, color: "#3FCF8E" },
  { nombre: "Puppeteer", icono: <SiPuppeteer size={40} />, color: "#01C18D" },
  { nombre: "OpenAI", icono: <SiOpenai size={40} />, color: "#10A37F" },
  {
    nombre: "Google Sheets",
    icono: <SiGooglecloud size={40} />,
    color: "#0F9D58",
  },
  { nombre: "JavaScript", icono: <SiJavascript size={40} />, color: "#F7DF1E" },
];

export default function Herramientas() {
  return (
    <section id="herramientas" className="py-5 bg-black text-white">
      <div className="container text-center">
        <h2 className="text-warning mb-4">Herramientas que uso</h2>
        <p className="mb-5">
          Estas son algunas de las tecnologías que utilizo todos los días para
          crear automatizaciones, dashboards y soluciones web.
        </p>

        <div className="row justify-content-center">
          {herramientas.map((h, idx) => (
            <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div style={{ color: h.color }}>{h.icono}</div>
                <p className="mt-2 text-light">{h.nombre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
