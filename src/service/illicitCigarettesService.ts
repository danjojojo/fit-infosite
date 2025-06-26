import api from "./apiClient";

export const getIllicitCigsData = async () => {
  try {
    const response = await api.get("./data/illicit-cigarettes-data.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getIllegalCigsData = async () => {
   try {
     const response = await api.get("./data/illegal-cigarettes-data.json");
     return response.data;
   } catch (error) {
     console.error(error);
   }
}
