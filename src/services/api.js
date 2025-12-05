import axios from "axios";

const API = axios.create({
baseURL: "http://localhost:8080",
});

// 👉 Interceptor: Agrega el token a todas las peticiones protegidas
API.interceptors.request.use((config) => {
const token = localStorage.getItem("jwtToken");
if (token) {
    config.headers.Authorization = `Bearer ${token}`;
}
return config;
});

// 🔐 AUTENTICACIÓN
export const registerRequest = (username, password) =>
API.post("/api/auth/register", { username, password });

export const loginRequest = async (username, password) => {
const { data } = await API.post("/api/auth/login", { username, password });

  // Guardar token
localStorage.setItem("jwtToken", data.token);
return data;
};

// ⚽ EQUIPOS CRUD
export const getEquipos = () => API.get("/api/equipos");
export const createEquipo = (data) => API.post("/api/equipos", data);

export default API;
