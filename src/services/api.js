import axios from "axios";

// instancia de axios apuntando al backend
const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// 🔹 Interceptor: agrega token en todas las requests
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================
 *  AUTH
 * =======================*/

// login
export const loginRequest = (username, password) =>
  API.post("/auth/login", { username, password });

// registro
export const registerRequest = (username, password) =>
  API.post("/auth/register", { username, password });

/* =========================
 *  CRUD EQUIPOS RECOMENDADOS
 * =======================*/

// obtener todos los equipos
export const getEquiposRecomendados = () => API.get("/equipos");

// crear equipo recomendado
export const createEquipoRecomendado = (equipo) =>
  API.post("/equipos", equipo);

// actualizar equipo recomendado
export const updateEquipoRecomendado = (id, equipo) =>
  API.put(`/equipos/${id}`, equipo);

// eliminar equipo recomendado
export const deleteEquipoRecomendado = (id) =>
  API.delete(`/equipos/${id}`);

/* =========================
 *  CONTACTO (Nuevo)
 * =======================*/

export const enviarContacto = (data) =>
  API.post("/contacto", data);

export default API;
