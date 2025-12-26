import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        tz: "Europe/Stockholm",
    },
    timeout: 15000,
});

export default apiClient;
