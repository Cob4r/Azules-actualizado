import React, { useState } from "react";
import { registerRequest } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleRegister = async (e) => {
    e.preventDefault();
    try {
    await registerRequest(username, password);
    alert("Usuario registrado ✔ Ahora inicia sesión");
    navigate("/login");
    } catch (error) {
    alert("El usuario ya existe");
    }
};

return (
    <div className="login-container">
    <h2>Crear Cuenta</h2>

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

    <p>¿Ya tienes cuenta?</p>
    <Link to="/login">Iniciar Sesión</Link>
    </div>
);
}

export default Register;
