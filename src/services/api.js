import axios from "axios";
import { openPermissionModal } from "../context/withoutPermissionModalHandler.js";
// função que abre modal (vamos criar abaixo)

const api = axios.create({
    baseURL: import.meta.env.VITE_DATABASE_URL_ROOT,
    withCredentials: true

});

// Interceptor de resposta
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            openPermissionModal(error.response.data?.message || "Não autorizado");
        }
        return Promise.reject(error);
    }
);

export default api;


