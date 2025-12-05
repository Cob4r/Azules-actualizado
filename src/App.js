import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// ⬆️ Componentes Globales
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// 🧭 Páginas
import Inicio from "./pages/Inicio";
import Equipos from "./pages/Equipos";
import Torneos from "./pages/Torneos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacto from "./pages/Contacto";  // 👈 AGREGADO!

import "./App.css";

// 🔐 Protección del CRUD (si lo quieres para otra ruta)
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("jwtToken");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          {/* Públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/torneos" element={<Torneos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🌟 NUEVA RUTA CONTACTO */}
          <Route path="/contacto" element={<Contacto />} />

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
