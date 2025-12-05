import React, { useState, useEffect } from "react";
import { createEquipo, getEquipos } from "../services/api";
import "./PerfilEquipo.css";

function PerfilEquipo() {
  const [equipos, setEquipos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const cargarEquipos = async () => {
    try {
      const { data } = await getEquipos();
      setEquipos(data);
    } catch (error) {
      alert("Debes iniciar sesión");
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await createEquipo({ nombre, descripcion });
      setNombre("");
      setDescripcion("");
      cargarEquipos();
    } catch (error) {
      alert("Error, debes iniciar sesión");
    }
  };

  return (
    <div className="perfil-equipo-container">
      <h2>Equipos Registrados</h2>

      <ul className="lista-equipos">
        {equipos.map((e) => (
          <li key={e.id}>{e.nombre} - {e.descripcion}</li>
        ))}
      </ul>

      <h3>Registrar Nuevo Equipo</h3>
      <form className="perfil-equipo-form" onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Nombre del equipo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default PerfilEquipo;
