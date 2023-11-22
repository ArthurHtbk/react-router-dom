import axios from "axios";

const api = import.meta.env.VITE_API_BASE_URL;

export const browseApi = async (endpoint) => {
  const response = await axios.get(`${api}/${endpoint}`);
  return response;
};
