import React from 'react';
import styles from './CartaEquipo.module.css';
import { Link } from 'react-router-dom';

function CartaEquipo({ equipo }) {
return (
    <div className={styles.card}>
    <img src={equipo.logo} alt={equipo.nombre} className={styles.logo} />
    <h3>{equipo.nombre}</h3>
    <p>{equipo.juego}</p>
    <Link to={`/equipos/${equipo.id}`} className={styles.btnVerMas}>
        Ver más
    </Link>
    </div>
);
}

export default CartaEquipo;
