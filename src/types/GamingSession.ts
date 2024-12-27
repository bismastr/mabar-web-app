export interface GamingSession {
    session_id: number;
    is_finish: boolean;
    session_end: string;
    session_start: string;
    created_by: User;
    members?: User[];
    game_info: GameInfo;
    name: string;
}

export interface User {
    user_id: number;
    username: string;
    avatar_url: string;
    discord_uid: number;
}

export interface GameInfo {
    id: number;
    name: string;
    icon_url: string;
}

export interface GetAllGamingSessionsParams {
    rows: number;
    page: number;
}