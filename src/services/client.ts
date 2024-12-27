import axios from 'axios';

// Create an Axios instance with default configuration
export const axiosClient = axios.create({
    baseURL: "https://api-mabar.bism.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
});
