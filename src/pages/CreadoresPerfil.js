import React from 'react';
import PerfilEquipo from './PerfilEquipo';
import creadoresBanner from '../assets/images/creadores-banner.jpg';
import cobarImg from '../assets/images/cobar.png';
import playerDefault from '../assets/images/player-default.webp';

//import titoImg from '../../assets/images/tito.jpg';

function CreadoresPerfil() {
const logros = [
    "🎥 Más de 100.000 visualizaciones en Twitch en 2024",
    "🔥 Participaciones en campañas oficiales del Club Universidad de Chile",
    "💙 Embajadores digitales del espíritu azul en redes sociales"
];

const jugadores = [
    { nombre: "COBAR", rol: "Streamer y Jugador Profesional FC 25", foto: cobarImg },
    { nombre: "MARTA_UCH", rol: "Creadora de Contenido / Valorant", foto: playerDefault },
    { nombre: "TITO", rol: "Host / Analista de Esports", foto: playerDefault },
];

return (
    <PerfilEquipo
    nombre="Creadores de Contenido"
    descripcion="El área creativa de Azules Esports. Detrás de cada stream, video y clip, están los embajadores que comparten la pasión azul con la comunidad gamer y universitaria."
    imagen={creadoresBanner}
    logros={logros}
    jugadores={jugadores}
    />
);
}

export default CreadoresPerfil;
