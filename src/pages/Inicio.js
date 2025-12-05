import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Inicio.module.css';
import jugabetLogo from '../assets/images/Logo-Jugabet.png';
import NewsletterForm from '../components/NewsletterForm';

import { loginRequest } from '../services/api';

function Inicio() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(username, password);
      localStorage.setItem("jwtToken", res.data.token);
      navigate('/equipos'); // Redirige al CRUD
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.container}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1>BIENVENIDO A AZULES ESPORTS</h1>
        <p>El equipo gamer oficial de la Universidad de Chile</p>
      </section>

      {/* LOGIN */}
      <section className={styles.loginBox}>
        <h2>Iniciar Sesión</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.btnPrimary}>
            Entrar
          </button>
        </form>
      </section>

      {/* Patrocinadores */}
      <section className={styles.sponsors}>
        <h2>Nuestros Patrocinadores</h2>
        <div className={styles.logos}>
          <a href="https://www.jugabet.cl" target="_blank" rel="noreferrer">
            <img src={jugabetLogo} alt="Logo Jugabet" />
          </a>
        </div>
      </section>

      <NewsletterForm />
    </div>
  );
}

export default Inicio;
