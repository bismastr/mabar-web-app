import { GamingSession, GetAllGamingSessionsParams } from "@/types/GamingSession";
import { axiosClient } from "./client"

const fetchGetAllGamingSession = async (req: GetAllGamingSessionsParams) => {
    const res = await axiosClient.get<GamingSession[]>("/gaming-session", {
        headers: {
            "Content-Type": "application/json"
        },
        params: req
    })

    return res.data
}

export default { fetchGetAllGamingSession }