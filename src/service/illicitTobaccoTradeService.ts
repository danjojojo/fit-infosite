import api from "./apiClient";

export const getITTData = async () => {
    try {
        const response = await api.get("./data/illicit-tobacco-trade-data.json");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}