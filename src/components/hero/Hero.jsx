import React, { useState, useEffect } from "react";
import "./Hero.css";
import keyboardImage from "../../assets/teclado.png";
import alanOpen from "../../assets/perfil-ojos-open.png";
import alanClose from "../../assets/perfil-ojos-close.png";
import laptopImage from "../../assets/laptop.png";
import tabletImage from "../../assets/tablet.png";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(alanOpen);

  useEffect(() => {
    let timeout;

    const blink = () => {
      setCurrentImage(alanClose); // cerrar ojos
      timeout = setTimeout(() => {
        setCurrentImage(alanOpen); // abrir ojos
        timeout = setTimeout(blink, 3000); // siguiente parpadeo
      }, 1000); // mantener cerrados 0.5s
    };

    timeout = setTimeout(blink, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const floatAnimationTwo = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="hero-section position-relative bg-black text-white d-flex align-items-center justify-content-center">
      {/* Imagen central animada */}
      <div className="hero-image-wrapper">
        <img src={currentImage} alt="Alan avatar" className="hero-image" />
      </div>

      {/* Decoración flotante */}
      <motion.img
        src={keyboardImage}
        alt="Teclado"
        className="hero-keyboard"
        {...floatAnimationTwo}
      />
      <motion.img
        src={laptopImage}
        alt="Laptop"
        className="hero-laptop"
        {...floatAnimation}
      />
      <motion.img
        src={tabletImage}
        alt="Tablet"
        className="hero-tablet"
        {...floatAnimation}
      />

      {/* Texto */}
      <div className="floating-text">
        <h1 className="display-3 hero-title">
          Hola, soy <span className="text-warning">Alan.</span>
        </h1>
        <p className="lead hero-subtitle">
          Creo soluciones con IA, desarrollo web y automatización:
          <br />
          desde agentes, chatbots y flujos por WhatsApp hasta despliegues en
          VPS.
        </p>
        <a href="#contacto" className="btn-contactar">
          Contactar
        </a>
      </div>
    </section>
  );
}
