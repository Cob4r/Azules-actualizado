import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 🧩 Componentes comunes
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// 🧭 Páginas
import Inicio from './pages/Inicio';
import Equipos from './pages/Equipos';
import PerfilJugador from './pages/PerfilJugador';
import PerfilEquipo from './pages/PerfilEquipo';
import FC25Perfil from './pages/FC25Perfil';
import EFootballPerfil from './pages/eFootballPerfil';
import CreadoresPerfil from './pages/CreadoresPerfil';
import Torneos from './pages/Torneos';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/perfil-equipo/:id" element={<PerfilEquipo />} />
            <Route path="/perfil-jugador/:id" element={<PerfilJugador />} />
            <Route path="/fc25-perfil" element={<FC25Perfil />} />
            <Route path="/efootball-perfil" element={<EFootballPerfil />} />
            <Route path="/creadores-perfil" element={<CreadoresPerfil />} />
            <Route path="/torneos" element={<Torneos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
