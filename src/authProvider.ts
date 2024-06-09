import axios from "axios";
import { AuthProvider } from "react-admin";

const API_BASE_URL = import.meta.env.VITE_API_SERVER_URL;

export const authProvider: AuthProvider = {
  login: (apiKey) => {
    localStorage.setItem("apiKey", apiKey);
    return axios.post(
      API_BASE_URL + "/auth/check-api-key",
      {},
      {
        headers: { "x-api-key": apiKey },
      }
    );
  },
  logout: () => {
    localStorage.removeItem("apiKey");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("apiKey") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const user = { name: "Usuario", id: 1 };

    return Promise.resolve(user);
  },
};

export default authProvider;
