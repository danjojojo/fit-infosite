import api from "./apiClient";

export const getContactUsData = async () => {
  try {
    const response = await api.get("./data/contact-us-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
