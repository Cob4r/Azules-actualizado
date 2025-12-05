import React, { useState } from "react";
import { loginRequest } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    try {
    await loginRequest(username, password);
    alert("Inicio de sesión exitoso");
    navigate("/equipos");
    } catch (error) {
alert("Credenciales incorrectas");
    }
};

return (
    <div className="login-container">
    <h2>Iniciar Sesión</h2>

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

    <p>¿No tienes cuenta?</p>
    <Link to="/register">Crear cuenta</Link>
    </div>
);
}

export default Login;
