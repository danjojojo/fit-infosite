import api from "./apiClient";

export const getEITData = async () => {
  try {
    const response = await api.get("./data/effects-of-illicit-trade-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
