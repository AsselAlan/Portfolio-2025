import React from 'react'
import './DemosList.css';
import ChatBotDemo from './chatbot';

const DemosList = () => {
  return (
    <section className='container-demos'>
      <div className='container'>
        <div className='container-chatbot-roles' id='demo-chatbot-roles'>

          {/* Info de como usar */}
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

            {/* Demo */}
            <div className="chatbot-demo-container mt-5">
              <ChatBotDemo />
            </div>
            
            {/* Beneficios del chatbot */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemosList