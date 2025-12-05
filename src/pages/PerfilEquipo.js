import React from 'react';
import './PerfilEquipo.css';

function PerfilEquipo({ nombre, descripcion, imagen, logros, jugadores }) {
  return (
    <div className="perfil-equipo-container">
      <section className="perfil-header">
        <img src={imagen} alt={nombre} className="perfil-equipo-img" />
        <div className="perfil-info">
          <h1>{nombre}</h1>
          <p>{descripcion}</p>
        </div>
      </section>

      <section className="perfil-logros">
        <h2>🏆 Logros Destacados</h2>
        <ul>
          {logros.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      </section>

      <section className="perfil-jugadores">
        <h2>👥 Jugadores</h2>
        <div className="jugadores-grid">
          {jugadores.map((j, i) => (
            <div key={i} className="jugador-card">
              <img src={j.foto} alt={j.nombre} />
              <h3>{j.nombre}</h3>
              <p>{j.rol}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PerfilEquipo;
