import api from "./apiClient";

export const getNewsData = async () => {
  try {
    const response = await api.get("./data/news-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
