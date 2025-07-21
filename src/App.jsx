import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Servicios from "./components/Servicios";
import Herramientas from "./components/Herramientas";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import SobreMi from "./components/sobremi/SobreMi";
import Proyectos from "./components/proyectos/Proyectos";
import Promociones from "./components/promos/promociones";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Si la página ya cargó por completo
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="text-center text-warning">
          <div
            className="spinner-border text-warning"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Promociones />
      <SobreMi />
      <Proyectos />
      <Servicios />
      <Herramientas />
      <Contacto />
    </div>
  );
}
