import React from 'react';
import PerfilEquipo from './PerfilEquipo';
import fc25Img from '../assets/images/fc25.jpg';
import cobarImg from '../assets/images/cobar.png';
import playerdef from '../assets/images/player-default.webp';
//import leoImg from '../assets/images/leo.jpg';

function FC25Perfil() {
const logros = [
    "🏆 Campeones Nacionales Clubes Pro 11x11 (2024)",
    "🥇 Campeones 1vs1 EA Sports FC Chile (2024)",
    "🎯 Representantes oficiales de la Universidad de Chile en torneos internacionales",
];

const jugadores = [
    { nombre: "COBAR", rol: "Capitán / Defensa Central", foto: cobarImg },
    { nombre: "GONZ4", rol: "Delantero / Goleador", foto: playerdef },
    { nombre: "LEO10", rol: "Mediocampista Creativo", foto: playerdef},
];

return (
    <PerfilEquipo
    nombre="EA SPORTS FC 25"
    descripcion="El equipo competitivo de fútbol virtual que representa con orgullo a la Universidad de Chile. Táctica, compañerismo y pasión azul dentro y fuera del campo digital."
    imagen={fc25Img}
    logros={logros}
    jugadores={jugadores}
    />
);
}

export default FC25Perfil;
