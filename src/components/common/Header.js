import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logoAzules from '../../assets/images/logo-azules.png';

function Header() {
return (
    <header className={styles.header}>
    <div className={styles.logoContainer}>
        <img src={logoAzules} alt="Logo Azules Esports" className={styles.logo} />
    </div>

    <nav className={styles.nav}>
        <ul>
        <li>
            <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            >
            Inicio
            </NavLink>
        </li>
        <li>
            <NavLink 
            to="/equipos" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            >
            Equipos
            </NavLink>
        </li>
        <li>
            <NavLink 
            to="/torneos" 
            className={({ isActive }) => isActive ? styles.activeLink : undefined}
            >
            Torneos
            </NavLink>
        </li>
        </ul>
    </nav>
    </header>
);
}

export default Header;
