import api from "./apiClient";

export const getNavLinks = async () => {
  try {
    const response = await api.get("./data/nav-links-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
