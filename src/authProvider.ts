import axios from "axios";
import { AuthProvider } from "react-admin";

const API_BASE_URL = "http://localhost:3000";
/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
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