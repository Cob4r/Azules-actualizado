import React from 'react';
import logoAzules from '../assets/images/logo-azules.png'; // imagen temporal

import './Torneos.module.css';

function Torneos() {
return (
    <div className="torneos-container">
    <h1>Torneos Azules Esports</h1>
    <div className="torneos-lista">

        <div className="torneo-card">
        <img src={logoAzules} alt="Torneo FC25" className="torneo-img" />
        <h2>Torneo FC25 Clubes Pro</h2>
        <p>Campeonato nacional 11x11 con equipos profesionales.</p>
        <button>Ver detalles</button>
        </div>

        <div className="torneo-card">
        <img src={logoAzules} alt="Torneo eFootball" className="torneo-img" />
        <h2>Torneo eFootball 1vs1</h2>
        <p>Competencia individual de alto nivel competitivo.</p>
        <button>Ver detalles</button>
        </div>

    </div>
    </div>
);
}

export default Torneos;
