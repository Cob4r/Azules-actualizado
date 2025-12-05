import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 🧩 Componentes comunes
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// 🧭 Páginas
import Inicio from './pages/Inicio';
import PerfilEquipo from './pages/PerfilEquipo';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';

// 🔐 Función para proteger rutas
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            {/* Públicas */}
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protegidas */}
            <Route
              path="/equipos"
              element={
                <PrivateRoute>
                  <PerfilEquipo />
                </PrivateRoute>
              }
            />

            {/* Redirección si no coincide ninguna */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
