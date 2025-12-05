import React, { useState } from "react";
import { enviarContacto } from "../services/api";
import "./NewsletterForm.css";

function NewsletterForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Correo inválido ❌");
      return;
    }

    try {
      await enviarContacto({ nombre, email, mensaje });
      
      alert("¡Mensaje enviado! 🎉");
      setNombre("");
      setEmail("");
      setMensaje("");
    } catch (err) {
      console.error("ERROR:", err);
      alert("No se pudo enviar, intenta más tarde ❌");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        placeholder="Tu mensaje..."
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
      />

      <button type="submit" className="btn-enviar">
        Enviar 📨
      </button>
    </form>
  );
}

export default NewsletterForm;
