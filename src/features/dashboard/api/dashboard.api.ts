import axios from "axios";

const api = axios.create({
    baseURL: "/api/dashboard"
});

export async function getDashboard() {
    const { data } = await api.get("/");
    return data;
}