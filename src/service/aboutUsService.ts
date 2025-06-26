import api from "./apiClient";

export const getAboutUsData = async () => {
  try {
    const response = await api.get("./data/about-us-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
