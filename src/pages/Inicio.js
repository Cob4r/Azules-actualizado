import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';
import jugabetLogo from '../assets/images/Logo-Jugabet.png';

// 1. IMPORTAMOS EL NUEVO COMPONENTE DEL FORMULARIO
import NewsletterForm from '../components/NewsletterForm';

function Inicio() {
return (
    <div className={styles.container}>
    
      {/* Sección Hero (tu código original) */}
    <section className={styles.hero}>
        <h1>BIENVENIDO A AZULES ESPORTS</h1>
        <p>El equipo gamer oficial de la Universidad de Chile</p>
        <div className={styles.buttons}>
        <Link to="/equipos" className={styles.btnPrimary}>
            Conoce al Equipo
        </Link>
        <Link to="/torneos" className={styles.btnSecondary}>
            Ver Torneos
        </Link>
        </div>
    </section>

      {/* 2. AQUÍ AÑADIMOS EL FORMULARIO */}
    <NewsletterForm />

      {/* Sección Patrocinadores (tu código original) */}
    <section className={styles.sponsors}>
        <h2>Nuestros Patrocinadores</h2>
        <div className={styles.logos}>
        <a 
            href="https://www.jugabet.cl" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img src={jugabetLogo} alt="Logo Jugabet" />
        </a>
          {/* Espacio para más patrocinadores */}
          {/* <a href="#"><img src="..." alt="Otro" /></a> */}
        </div>
    </section>
    
    </div>
);
}

export default Inicio;