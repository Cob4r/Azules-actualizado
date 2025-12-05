import React from "react";
import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";
import jugabetLogo from "../assets/images/Logo-Jugabet.png";
import NewsletterForm from '../components/NewsletterForm';

// 📌 Tarjetas fijas de equipos oficiales
const oficiales = [
  { id: 1, nombre: "EA Sports FC 25", desc: "Equipo competitivo 11x11 y 1vs1", link: "/equipos#fc25", img: "/eafc25.jpg" },
  { id: 2, nombre: "eFootball", desc: "Campeones nacionales 1vs1", link: "/equipos#efootball", img: "/efootball.jpg" },
  { id: 3, nombre: "Creadores de contenido", desc: "Embajadores digitales", link: "/equipos#creadores", img: "/creadores.jpg" }
];

function Inicio() {

  return (
    <div className={styles.container}>

      {/* 🎯 HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>AZULES ESPORTS</h1>
          <p className={styles.subtitle}>Representando la pasión azul en los esports</p>
          <Link to="/equipos" className={styles.btnPrimary}>Ver Equipos</Link>
        </div>
      </section>

      {/* 🏆 EQUIPOS OFICIALES */}
      <section className={styles.oficialSection}>
        <h2>Equipos Oficiales</h2>

        <div className={styles.cardsGrid}>
          {oficiales.map(eq => (
            <Link to={eq.link} key={eq.id} className={styles.card}>
              <div className={styles.cardGradient} />
              <img src={eq.img} alt={eq.nombre} />
              <div className={styles.cardInfo}>
                <h3>{eq.nombre}</h3>
                <p>{eq.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🤝 PATROCINADORES */}
      <section className={styles.sponsors}>
        <h2>Patrocinadores</h2>
        <img src={jugabetLogo} alt="JugaBet" className={styles.sponsorImg} />
      </section>
    </div>
    

        )
}

export default Inicio;
