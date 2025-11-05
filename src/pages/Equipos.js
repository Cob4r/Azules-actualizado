import React from 'react';
import { Link } from 'react-router-dom';
// PASO 1: Cambia la importación para que coincida con el nuevo nombre
import './Equipos.css'; 
import fc25Banner from '../assets/images/fc25-banner.jpg';
import efootballBanner from '../assets/images/efootball-banner.jpg';
import creadoresBanner from '../assets/images/creadores-banner.jpg';

const Equipos = () => {
  const equipos = [
    {
      nombre: 'FC 25',
      descripcion: 'Equipo profesional de FC 25 Clubes Pro.',
      imagen: fc25Banner,
      link: '/fc25-perfil',
    },
    {
      nombre: 'eFootball',
      descripcion: 'Equipo competitivo de eFootball 1vs1.',
      imagen: efootballBanner,
      link: '/efootball-perfil',
    },
    {
      nombre: 'Creadores',
      descripcion: 'Creadoras y creadores de contenido oficial del club.',
      imagen: creadoresBanner,
      link: '/creadores-perfil',
    },
  ];

  return (
    <div className="equipos-container">
      {equipos.map((equipo, index) => (
        <div className="equipo-card" key={index}>
          <div className="equipo-image-container">
            <img src={equipo.imagen} alt={equipo.nombre} />
          </div>
          
          {/* PASO 2: Agrega este div "contenido" */}
          <div className="contenido">
            <h2>{equipo.nombre}</h2>
            <p>{equipo.descripcion}</p>
            <Link to={equipo.link} className="equipo-btn">
              Ver perfil
            </Link>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Equipos;