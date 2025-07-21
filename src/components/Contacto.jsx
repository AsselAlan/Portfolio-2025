import React from "react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-warning text-center mb-4">Contacto</h2>
        <p className="text-center mb-5">
          ¿Tenés un proyecto en mente o querés trabajar conmigo? Completá el
          formulario y te respondo a la brevedad.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control bg-black text-white border-secondary"
                  id="nombre"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control bg-black text-white border-secondary"
                  id="email"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control bg-black text-white border-secondary"
                  id="mensaje"
                  rows="5"
                  placeholder="Contame un poco sobre tu idea..."
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning px-4">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
