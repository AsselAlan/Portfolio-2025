import React, { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    proyecto: "",
    presupuesto: "",
    mensaje: "",
    urgencia: "normal"
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const tiposProyecto = [
    "Bot de WhatsApp",
    "Automatización con n8n", 
    "E-commerce completo",
    "Dashboard/Panel admin",
    "Scraping de datos",
    "Integración de APIs",
    "Consultoría IA",
    "Otro"
  ];

  const rangosPresupuesto = [
    "Menos de $500 USD",
    "$500 - $1,500 USD", 
    "$1,500 - $5,000 USD",
    "$5,000 - $15,000 USD",
    "Más de $15,000 USD",
    "A definir"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.proyecto) {
      newErrors.proyecto = "Selecciona el tipo de proyecto";
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Describe tu proyecto";
    } else if (formData.mensaje.trim().length < 20) {
      newErrors.mensaje = "Describe tu proyecto con más detalle (mín. 20 caracteres)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Aquí irías con tu endpoint real o servicio de email
      // Por ejemplo: Formspree, EmailJS, o tu propio backend
      const response = await fetch('https://formspree.io/f/tu-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: "",
          email: "",
          proyecto: "",
          presupuesto: "",
          mensaje: "",
          urgencia: "normal"
        });
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getUrgenciaColor = (urgencia) => {
    const colors = {
      'baja': 'success',
      'normal': 'warning', 
      'alta': 'danger'
    };
    return colors[urgencia] || 'warning';
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-warning text-center mb-4">Contacto</h2>
        <p className="text-center mb-5">
          ¿Tenés un proyecto en mente o querés trabajar conmigo? 
          Completá el formulario y te respondo en menos de 24 horas.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            {/* Alertas de estado */}
            {submitStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                ¡Mensaje enviado! Te contacto pronto.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                Error al enviar. Intentá de nuevo o escribime por WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    className={`form-control bg-black text-white border-secondary ${
                      errors.nombre ? 'is-invalid' : ''
                    }`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && (
                    <div className="invalid-feedback">{errors.nombre}</div>
                  )}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className={`form-control bg-black text-white border-secondary ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tucorreo@ejemplo.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="proyecto" className="form-label">
                    Tipo de proyecto *
                  </label>
                  <select
                    className={`form-select bg-black text-white border-secondary ${
                      errors.proyecto ? 'is-invalid' : ''
                    }`}
                    id="proyecto"
                    name="proyecto"
                    value={formData.proyecto}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona una opción</option>
                    {tiposProyecto.map((tipo, index) => (
                      <option key={index} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                  {errors.proyecto && (
                    <div className="invalid-feedback">{errors.proyecto}</div>
                  )}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label htmlFor="presupuesto" className="form-label">
                    Presupuesto estimado
                  </label>
                  <select
                    className="form-select bg-black text-white border-secondary"
                    id="presupuesto"
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona un rango</option>
                    {rangosPresupuesto.map((rango, index) => (
                      <option key={index} value={rango}>{rango}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="urgencia" className="form-label">
                  Urgencia del proyecto
                </label>
                <div className="d-flex gap-3">
                  {['baja', 'normal', 'alta'].map((nivel) => (
                    <div key={nivel} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="urgencia"
                        id={`urgencia-${nivel}`}
                        value={nivel}
                        checked={formData.urgencia === nivel}
                        onChange={handleInputChange}
                      />
                      <label 
                        className={`form-check-label text-${getUrgenciaColor(nivel)}`} 
                        htmlFor={`urgencia-${nivel}`}
                      >
                        {nivel.charAt(0).toUpperCase() + nivel.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Descripción del proyecto *
                </label>
                <textarea
                  className={`form-control bg-black text-white border-secondary ${
                    errors.mensaje ? 'is-invalid' : ''
                  }`}
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Contame sobre tu proyecto: qué necesitás, qué problema querés resolver, plazos, etc."
                ></textarea>
                <div className="form-text text-muted">
                  {formData.mensaje.length}/500 caracteres
                </div>
                {errors.mensaje && (
                  <div className="invalid-feedback">{errors.mensaje}</div>
                )}
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-warning px-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send me-2"></i>
                      Enviar mensaje
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Métodos alternativos de contacto */}
            <div className="mt-5 text-center">
              <h5 className="text-warning mb-3">¿Preferís contactarme directamente?</h5>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a 
                  href="https://wa.me/5491123456789" 
                  className="btn btn-success btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp me-1"></i>
                  WhatsApp
                </a>
                <a 
                  href="mailto:alan@tudominio.com" 
                  className="btn btn-outline-light btn-sm"
                >
                  <i className="bi bi-envelope me-1"></i>
                  Email directo
                </a>
                <a 
                  href="https://linkedin.com/in/tulinkedin" 
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin me-1"></i>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* FAQ rápida */}
            <div className="mt-5">
              <h6 className="text-warning">Preguntas frecuentes:</h6>
              <div className="accordion accordion-dark" id="faqAccordion">
                <div className="accordion-item bg-black border-secondary">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-black text-white border-0" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq1"
                    >
                      ¿Cuánto tiempo toma un proyecto típico?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-light">
                      Depende del proyecto. Un bot de WhatsApp simple: 1-2 semanas. 
                      Un e-commerce completo: 4-8 semanas. Automatizaciones con n8n: 3-7 días.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item bg-black border-secondary">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-black text-white border-0" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq2"
                    >
                      ¿Trabajás con empresas de otros países?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-light">
                      Sí, trabajo remoto con clientes de toda Latinoamérica y España. 
                      Manejo USD/EUR para proyectos internacionales.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item bg-black border-secondary">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed bg-black text-white border-0" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq3"
                    >
                      ¿Ofrecés soporte post-entrega?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-light">
                      Sí, incluyo 30 días de soporte gratuito. Después, ofrezco planes 
                      de mantenimiento mensuales según las necesidades.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}