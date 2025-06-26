import api from "./apiClient";

export const getLandingData = async () => {
    try {
        const response = await api.get("./data/landing-data.json");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}