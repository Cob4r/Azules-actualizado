import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(username, password);

      // ⭐ IMPORTANTE → Guardamos el token con "Bearer " incluido
      localStorage.setItem("jwtToken", "Bearer " + res.data.token);

      navigate("/equipos");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      {error && <p className="error">{error}</p>}

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

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
