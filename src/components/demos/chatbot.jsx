import { useState } from "react";
import "./chatbot.css"


export default function ChatBotDemo() {
  const [rol, setRol] = useState("restaurant");
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState("");
  const [mostrarSugerencias, setMostrarSugerencias] = useState(true);
  const [escribiendo, setEscribiendo] = useState(false);

  const sugerencias = {
    restaurant: [
      "Buenas, quiero ver el menú",
      "Hola, quiero reservar una mesa",
      "¿Qué plato me recomendás?",
    ],
    clinica: [
      "Hola, quiero sacar un turno",
      "¿Atienden guardia?",
      "Hola, a que hora abren?",
    ],
    ecommerce: [
      "Hola, estoy buscando auriculares",
      "¿Tienen ofertas?",
      "Recomendame algo",
    ],
  };

  const getBotInitial = () => {
    switch (rol) {
      case "restaurant":
        return "R";
      case "clinica":
        return "C";
      case "ecommerce":
        return "E";
      default:
        return "B";
    }
  };

  const TypingIndicator = () => (
    <div className="d-flex align-items-end mb-2 justify-content-end">
      <div className="chat-msg bot p-2 rounded d-flex align-items-center">
        <span className="typing-text me-2">Escribiendo</span>
        <div className="typing-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="bot-avatar ms-2">{getBotInitial()}</div>
    </div>
  );

  const enviarMensaje = async (mensajeTexto) => {
    const userMsg = { tipo: "user", texto: mensajeTexto };
    setMensajes((prev) => [...prev, userMsg]);
    setInput("");
    setMostrarSugerencias(false);
    setEscribiendo(true);

    try {
      const res = await fetch(
        import.meta.env.VITE_WEBHOOK_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rol, mensaje: mensajeTexto }),
        }
      );

      const data = await res.json();
      let respuesta = {};

      try {
        respuesta =
          typeof data.output === "string"
            ? JSON.parse(data.output)
            : data;
      } catch (err) {
        // Si falla el parseo, usar el texto plano
        respuesta = { mensaje: data.output || data };
      }

      // Simular un pequeño delay para mostrar el indicador
      await new Promise(resolve => setTimeout(resolve, 500));

      setEscribiendo(false);

      if (respuesta.mensaje) {
        setMensajes((prev) => [
          ...prev,
          { tipo: "bot", texto: respuesta.mensaje },
        ]);
      }

      if (respuesta.link) {
        setMensajes((prev) => [
          ...prev,
          {
            tipo: "bot",
            texto: (
              <a
                className="chat-msg bot"
                href={respuesta.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffc107", textDecoration: "underline" }}
              >
                👉 Menu
              </a>
            ),
          },
        ]);
      }
    } catch (err) {
      setEscribiendo(false);
      setMensajes((prev) => [
        ...prev,
        { tipo: "bot", texto: "Error al contactar con el servidor." },
      ]);
    }
  };

  const handleSend = () => {
    if (!input.trim() || escribiendo) return;
    enviarMensaje(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="container chatbot-container">
      <div className="chatbot-header-buttons mb-3 d-flex justify-content-center">
        {["restaurant", "clinica", "ecommerce"].map((r) => (
          <button
            key={r}
            className={`btn ${rol === r ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => {
              setRol(r);
              setMensajes([]);
              setInput("");
              setMostrarSugerencias(true);
              setEscribiendo(false);
            }}
          >
            {r === 'restaurant' && '🍽️ Restaurante'}
            {r === 'clinica' && '🏥 Clínica Médica'}
            {r === 'ecommerce' && '🛒 E-commerce'}
          </button>
        ))}
      </div>

      <div className="chatbot-window card p-3 mb-3" style={{ height: '500px', overflowY: 'auto' }}>
        {mensajes.map((msg, i) => (
          <div
            key={i}
            className={`d-flex align-items-end mb-2 ${
              msg.tipo === "user"
                ? "justify-content-start"
                : "justify-content-end"
            }`}
          >
            {msg.tipo === "user" && (
              <img
                src="https://ui-avatars.com/api/?name=U&background=6f42c1&color=fff&size=30"
                alt="User Avatar"
                className="rounded-circle me-2 chat-avatar"
              />
            )}

            <div className={`chat-msg p-2 rounded ${msg.tipo}`}>
              {typeof msg.texto === "string" ? msg.texto : msg.texto}
            </div>

            {msg.tipo === "bot" && (
              <div className="bot-avatar ms-2">{getBotInitial()}</div>
            )}
          </div>
        ))}

        {/* Indicador de escritura */}
        {escribiendo && <TypingIndicator />}

        {/* Sugerencias rápidas */}
        {mostrarSugerencias && !escribiendo && (
          <div className="d-flex flex-column gap-2 mt-3">
            <small className="text-muted text-center mb-2">
              💡 Probá estas consultas típicas:
            </small>
            <div className="justify-content-start chatbot-sugerencias-btns d-flex flex-wrap gap-2">
              {sugerencias[rol].map((sug, i) => (
                <button
                  key={i}
                  className="btn btn-sm btn-outline-light"
              style={{ backgroundColor: "#343a40", borderColor: "#ffc107" }}
              onClick={() => enviarMensaje(sug)}
              disabled={escribiendo}
              >
                {sug}
              </button>
            ))}
            </div>
          </div>
        )}
      </div>

      <div className="chatbot-input input-group">
        <input
          type="text"
          className="form-control"
          placeholder={escribiendo ? "Esperando respuesta..." : "Escribí un mensaje..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={escribiendo}
        />
        <button 
          className="btn btn-warning" 
          onClick={handleSend}
          disabled={escribiendo || !input.trim()}
        >
          {escribiendo ? (
            <>
              <span className="spinner-border spinner-border-sm me-1" role="status"></span>
              Enviando...
            </>
          ) : (
            'Enviar'
          )}
        </button>
      </div>
    </div>
  );
}