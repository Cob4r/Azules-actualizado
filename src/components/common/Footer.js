import React from 'react';
import styles from './Footer.module.css';

function Footer() {
return (
    <footer className={styles.footer}>
    <div className={styles.links}>
        <a 
        href="https://www.instagram.com/azulesesports/" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        Instagram
        </a>
        <a 
        href="https://x.com/azulesesports" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        X / Twitter
        </a>
        <a 
        href="https://www.twitch.tv/azulesesports" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        Twitch
        </a>
    </div>
    <p className={styles.copy}>
        © 2025 Azules Esports. Todos los derechos reservados.
    </p>
    </footer>
);
}

export default Footer;
