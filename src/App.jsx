import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Servicios from "./components/Servicios";
import Herramientas from "./components/Herramientas";
import Contacto from "./components/Contacto";
import Hero from "./components/hero/Hero";
import SobreMi from "./components/sobremi/SobreMi";
import Proyectos from "./components/proyectos/Proyectos";
import Promociones from "./components/promos/promociones";
import Testimonios from "./components/testimonios/Testimonios";
import TechnologiesCarousel from "./components/tecnologias/tecnologias";
import Navbar from "./components/navbar/Navbar";
import DemosList from "./components/demos/DemosList";

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
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={
          <>
            <Hero />
            <Promociones />
            <TechnologiesCarousel />
            <SobreMi />
            <Proyectos />
            <Servicios />
            <Testimonios />
            <Contacto />
          </>
        } />
        <Route path="/Portfolio-2025/demos" element={<DemosList />} />
      </Routes>
    </Router>
  );
}
