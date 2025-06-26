import api from "./apiClient";

export const getTipsData = async () => {
  try {
    const response = await api.get("./data/tips-data.json");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
