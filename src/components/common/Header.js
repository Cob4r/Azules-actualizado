import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logoAzules from '../../assets/images/logo-azules.png';

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoAzules} alt="Logo Azules Esports" className={styles.logo} />
      </div>

      <nav className={styles.nav}>
        <ul>

          {/* Público */}
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

          {/* 👇 Nuevo enlace público: Contacto */}
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => isActive ? styles.activeLink : undefined}
            >
              Contacto
            </NavLink>
          </li>

          {/* Si hay token -> mostrar Admin + Logout */}
          {token ? (
            <>
              <li>
                <NavLink
                  to="/admin/equipos"
                  className={({ isActive }) => isActive ? styles.activeLink : undefined}
                >
                  Admin
                </NavLink>
              </li>

              <li>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            // Si NO hay token -> mostrar Iniciar Sesión
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => isActive ? styles.activeLink : undefined}
              >
                Iniciar Sesión
              </NavLink>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
