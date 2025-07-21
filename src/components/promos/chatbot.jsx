import { useState } from "react";

export default function ChatBotDemo() {
  const [rol, setRol] = useState("restaurant");
  const [mensajes, setMensajes] = useState([]);
  const [input, setInput] = useState("");
  const [mostrarSugerencias, setMostrarSugerencias] = useState(true);

  const sugerencias = {
    restaurant: [
      "Quiero ver el menú",
      "Reservar una mesa",
      "¿Qué me recomendás?",
    ],
    clinica: [
      "Quiero sacar un turno",
      "¿Atienden guardia?",
      "¿Cuáles son las especialidades?",
    ],
    ecommerce: [
      "Estoy buscando auriculares",
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

  const enviarMensaje = async (mensajeTexto) => {
    const userMsg = { tipo: "user", texto: mensajeTexto };
    setMensajes((prev) => [...prev, userMsg]);
    setInput("");
    setMostrarSugerencias(false);

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
          typeof data.output === "string" ? JSON.parse(data.output) : data;
      } catch (err) {
        console.error("Error al parsear respuesta:", err);
      }

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
      setMensajes((prev) => [
        ...prev,
        { tipo: "bot", texto: "Error al contactar con el servidor." },
      ]);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    enviarMensaje(input);
  };

  return (
    <div className="container chatbot-container">
      <div className="chatbot-header-buttons mb-3 d-flex justify-content-center">
        {["restaurant", "clinica", "ecommerce"].map((r) => (
          <button
            key={r}
            className="btn"
            onClick={() => {
              setRol(r);
              setMensajes([]);
              setInput("");
              setMostrarSugerencias(true);
            }}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </div>

      <div className="chatbot-window card p-3 mb-3">
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

        {/* Sugerencias rápidas */}
        {mostrarSugerencias && (
          <div className="d-flex flex-column gap-2 mt-3">
            {sugerencias[rol].map((sug, i) => (
              <button
                key={i}
                className="btn btn-sm btn-outline-light"
                style={{ backgroundColor: "#343a40", borderColor: "#ffc107" }}
                onClick={() => enviarMensaje(sug)}
              >
                {sug}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="chatbot-input input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Escribí un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-warning" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
}
