import axios from "axios";
import { stringify } from "query-string";

const API_BASE_URL = import.meta.env.VITE_API_SERVER_URL;

const dataProvider = {
  getList: async (
    resource,
    { filter: { search, ...filter }, sort, pagination }
  ) => {
    const { page, perPage } = pagination;
    const url = `${API_BASE_URL}/${resource}`;

    const queryParams = stringify({
      search,
      sortField: sort.field,
      sortOrder: sort.order,
      page,
      perPage,
      ...filter,
    });
    try {
      const response = await axios.get(`${url}?${queryParams}`, {
        headers: {
          "x-api-key": localStorage.getItem("apiKey"),
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return {
        data: response.data.data,
        total: response.data.total,
      };
    } catch (error) {
      throw new Error(
        `Error al obtener la lista de ${resource}: ${error.message}`
      );
    }
  },

  getOne: async (resource, params) => {
    const { id } = params;
    const url = `${API_BASE_URL}/${resource}/${id}`;
    try {
      const response = await axios.get(url, {
        headers: {
          "x-api-key": localStorage.getItem("apiKey"),
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(
        `Error al obtener ${resource} con ID ${id}: ${error.message}`
      );
    }
  },

  // getMany: async () => {
  //   return [];
  // },
  // getManyReference: async () => {
  //   return [];
  // },

  // create: async (resource, params) => {
  //   const url = `${API_BASE_URL}/${resource}`;
  //   try {
  //     const response = await axios.post(url, params.data, {
  //       headers: { "x-api-key": localStorage.getItem("apiKey") },
  //     });
  //     return { data: { ...params.data, id: response.data.id } };
  //   } catch (error) {
  //     throw new Error(`Error creating ${resource}: ${error.message}`);
  //   }
  // },

  // update: async (resource, params) => {
  //   const url = `${API_BASE_URL}/${resource}/${params.id}`;
  //   try {
  //     await axios.put(url, params.data, {
  //       headers: { "x-api-key": localStorage.getItem("apiKey") },
  //     });
  //     return { data: params.data };
  //   } catch (error) {
  //     throw new Error(
  //       `Error updating ${resource} with ID ${params.id}: ${error.message}`
  //     );
  //   }
  // },

  // updateMany: async (resource, params) => {
  //   const promises = params.ids.map((id) => {
  //     const url = `${API_BASE_URL}/${resource}/${id}`;
  //     return axios.put(url, params.data, {
  //       headers: { "x-api-key": localStorage.getItem("apiKey") },
  //     });
  //   });
  //   await Promise.all(promises);
  //   return { data: params.ids };
  // },

  // delete: async (resource, params) => {
  //   const url = `${API_BASE_URL}/${resource}/${params.id}`;
  //   await axios.delete(url, {
  //     headers: { "x-api-key": localStorage.getItem("apiKey") },
  //   });
  //   return { data: params.previousData };
  // },

  // deleteMany: async (resource, params) => {
  //   const promises = params.ids.map((id) => {
  //     const url = `${API_BASE_URL}/${resource}/${id}`;
  //     return axios.delete(url, {
  //       headers: { "x-api-key": localStorage.getItem("apiKey") },
  //     });
  //   });
  //   await Promise.all(promises);
  //   return { data: params.ids };
  // },
};

export default dataProvider;
