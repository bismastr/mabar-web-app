import { User } from "@/types/GamingSession";
import { axiosClient } from "./client";


const fetchGetProfile = async () => {
    const res = await axiosClient.get<User>("/auth/profile", {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    })

    return res.data
}

const loginDiscord = () => {
    window.location.href = axiosClient.defaults.baseURL + "/auth/discord";
};

export default { fetchGetProfile, loginDiscord }