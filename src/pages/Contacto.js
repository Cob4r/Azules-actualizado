import React from "react";
import NewsletterForm from "../components/NewsletterForm";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto-page">
      <div className="contacto-hero">
        <h1>¿Quieres unirte o hablar con nosotros?</h1>
        <p>
          Estamos atentos a tus ideas, comentarios y propuestas 📨
          Haznos llegar tu mensaje y te responderemos pronto.
        </p>
      </div>

      <div className="contacto-form-container">
        <h2>📬 Contáctanos</h2>
        <NewsletterForm />
      </div>

      <div className="contacto-info">
        <h3>Redes y Comunidad</h3>
        <p>Síguenos en nuestras redes para estar al tanto de todas las novedades ⚽🎮</p>
        <ul>
          <li>Instagram: @clubazul_gaming</li>
          <li>Twitch: /clubazul</li>
          <li>Discord: Únete a la comunidad</li>
        </ul>
      </div>
    </div>
  );
}

export default Contacto;
