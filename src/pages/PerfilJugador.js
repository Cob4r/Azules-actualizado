import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PerfilJugador.module.css';
import cobarImg from '../assets/images/cobar.png';
import playerDefault from '../assets/images/player-default.webp';

function PerfilJugador() {
const { id } = useParams();

  // ⚙️ Ejemplo de datos locales (luego conectaremos con backend)
const jugadores = {
    cobar: {
    nombre: "COBAR",
    equipo: "FC 25",
    rol: "Jugador Profesional / Streamer",
    descripcion: "Jugador profesional del Club Universidad de Chile en FC 25 Clubes Pro. Analítico, disciplinado y referente del equipo.",
    imagen: cobarImg,
    estadisticas: {
        partidos: 120,
        goles: 45,
        asistencias: 38
    }
    },
    tito: {
    nombre: "TITO",
    equipo: "Creadores de Contenido",
    rol: "Host / Analista de Esports",
    descripcion: "Analista de esports y comentarista oficial de las transmisiones de Azules Esports.",
    imagen: playerDefault,
    estadisticas: {
        eventos: 25,
        streams: 50
    }
    }
};

const jugador = jugadores[id] || {
    nombre: "Jugador no encontrado",
    descripcion: "No existe información disponible.",
    imagen: playerDefault
};

return (
    <div className={styles.container}>
    <div className={styles.card}>
        <img src={jugador.imagen} alt={jugador.nombre} className={styles.imagen} />
        <h1>{jugador.nombre}</h1>
        <h3>{jugador.rol}</h3>
        <p>{jugador.descripcion}</p>

        {jugador.estadisticas && (
        <div className={styles.stats}>
            {Object.entries(jugador.estadisticas).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
            ))}
        </div>
        )}

        <Link to="/equipos" className={styles.boton}>Volver a Equipos</Link>
    </div>
    </div>
);
}

export default PerfilJugador;
