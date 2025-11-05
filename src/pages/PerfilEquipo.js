import React from 'react';
// PASO 1: Importar el CSS de forma normal (sin "styles")
import './PerfilEquipo.css';

function PerfilEquipo({ nombre, descripcion, imagen, logros, jugadores }) {
  return (
    // PASO 2: Usar strings normales (ej. "clase-con-guion") para cada className
    <div className="perfil-equipo-container">
      {/* Encabezado */}
      <section className="perfil-header">
        <img src={imagen} alt={nombre} className="perfil-equipo-img" />
        <div className="perfil-info">
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </div>
      </section>

      {/* Logros */}
      <section className="perfil-logros">
        <h2>🏆 Logros Destacados</h2>
        <ul>
          {logros.map((logro, index) => (
            <li key={index}>{logro}</li>
          ))}
        </ul>
      </section>

      {/* Jugadores */}
      <section className="perfil-jugadores">
        <h2>👥 Plantel Actual</h2>
        <div className="jugadores-grid">
          {jugadores.map((jugador, index) => (
            <div key={index} className="jugador-card">
              <img src={jugador.foto} alt={jugador.nombre} />
              <h3>{jugador.nombre}</h3>
              <p>{jugador.rol}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PerfilEquipo;