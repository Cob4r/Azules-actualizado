import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerRequest(username, password);

      // ⭐ NO se guarda token aquí, solo redirigimos al login
      navigate("/login");
    } catch (err) {
      setError("Error: usuario ya existe ❌");
    }
  };

  return (
    <div className="register-container">
      <h2>Crear Cuenta</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleRegister}>
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

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
