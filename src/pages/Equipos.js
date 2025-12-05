import React, { useEffect, useState } from "react";
import "./Equipos.css";

import fc25Img from "../assets/images/fc25.jpg";
import efootballImg from "../assets/images/efootball-banner.jpg";
import creadoresImg from "../assets/images/creadores-banner.jpg";

import {
  getEquiposRecomendados,
  createEquipoRecomendado,
  deleteEquipoRecomendado
} from "../services/api";

function Equipos() {
  const token = localStorage.getItem("jwtToken");

  const [recomendados, setRecomendados] = useState([]);
  const [nombreRec, setNombreRec] = useState("");
  const [descRec, setDescRec] = useState("");

  // 🔹 SIEMPRE usar axios API !!!
  const cargarRecomendados = async () => {
    try {
      const { data } = await getEquiposRecomendados();
      setRecomendados(data);
    } catch (err) {
      console.log("ERROR AL CARGAR:", err);
    }
  };

  useEffect(() => {
    cargarRecomendados();
  }, []);

  const handleRecAdd = async (e) => {
    e.preventDefault();
    if (!token) return alert("Debes iniciar sesión 🚫");

    try {
      await createEquipoRecomendado({
        nombre: nombreRec,
        descripcion: descRec
      });
      setNombreRec("");
      setDescRec("");
      cargarRecomendados();
    } catch (error) {
      alert("ERROR al crear recomendación ❌");
    }
  };

  const handleRecDelete = async (id) => {
    if (!token) return;
    if (!window.confirm("Eliminar recomendación?")) return;

    try {
      await deleteEquipoRecomendado(id);
      cargarRecomendados();
    } catch (error) {
      alert("ERROR eliminando ❌");
    }
  };

  return (
    <div className="container">

      <h2 className="title">Equipos Oficiales</h2>
      <div className="cardContainer">

        <div className="card">
          <img src={fc25Img} alt="EA Sports FC25" />
          <h3>EA Sports FC 25</h3>
          <p>Equipo competitivo 11x11 y 1vs1</p>
        </div>

        <div className="card">
          <img src={efootballImg} alt="eFootball" />
          <h3>eFootball</h3>
          <p>Campeones nacionales 1vs1</p>
        </div>

        <div className="card">
          <img src={creadoresImg} alt="Creadores" />
          <h3>Creadores de contenido</h3>
          <p>Embajadores del espíritu azul</p>
        </div>

      </div>

      <h2 className="title">Equipos Recomendados por la Comunidad</h2>

      {recomendados.length === 0 ? (
        <p className="noData">Todavía no hay recomendaciones</p>
      ) : (
        recomendados.map((r) => (
          <div key={r.id} className="recItem">
            <strong>{r.nombre}</strong> — {r.descripcion}
            {token && (
              <button className="btnDelete" onClick={() => handleRecDelete(r.id)}>
                🗑️
              </button>
            )}
          </div>
        ))
      )}

      {token && (
        <form className="form" onSubmit={handleRecAdd}>
          <input
            type="text"
            placeholder="Nombre del equipo"
            value={nombreRec}
            onChange={(e) => setNombreRec(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Descripción"
            value={descRec}
            onChange={(e) => setDescRec(e.target.value)}
          />

          <button type="submit">Agregar</button>
        </form>
      )}

    </div>
  );
}

export default Equipos;
