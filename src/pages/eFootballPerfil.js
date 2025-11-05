import React from 'react';
import PerfilEquipo from './PerfilEquipo';
import efootballImg from '../assets/images/efootball-banner.jpg';
import playerdef from '../assets/images/player-default.webp';
//import franImg from '../assets/images/fran.jpg';
//import diegoImg from '../assets/images/diego.jpg';

function EFootballPerfil() {
const logros = [
    "🏆 Campeones Nacionales eFootball 1vs1 (2024)",
    "🥈 Subcampeones Copa Universitaria Konami 2023",
    "🎮 Clasificados al Torneo Sudamericano 2024 representando a Chile",
];

const jugadores = [
    { nombre: "MAXBLUE", rol: "Jugador Principal / Estratega", foto: playerdef },
    { nombre: "FRAN_UCH", rol: "Analista y Sparring", foto: playerdef },
    { nombre: "DIEGOX", rol: "Coach y Entrenador", foto: playerdef },
];

return (
    <PerfilEquipo
    nombre="eFootball"
    descripcion="Dominio táctico, precisión y lectura de juego. El equipo de eFootball de Azules Esports se ha consolidado como líder nacional en el competitivo chileno, llevando el escudo azul al más alto nivel."
    imagen={efootballImg}
    logros={logros}
    jugadores={jugadores}
    />
);
}

export default EFootballPerfil;
