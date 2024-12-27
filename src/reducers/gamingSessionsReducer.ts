// gamingSessionsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamingSession, GetAllGamingSessionsParams } from '../types/GamingSession';
import { AppDispatch } from "@/store";
import gamingSessionService from "@/services/gamingSessionService";

interface GamingSessionsState {
    sessions: GamingSession[];
}

const initialState: GamingSessionsState = {
    sessions: []
};

const gamingSessionsSlice = createSlice({
    name: "gamingSessions",
    initialState,
    reducers: {
        setGamingSessions: (state, action: PayloadAction<GamingSession[]>) => {
            state.sessions = action.payload;
        },
        addGamingSession: (state, action: PayloadAction<GamingSession>) => {
            state.sessions.push(action.payload);
        }
    }
});

export const { setGamingSessions, addGamingSession } = gamingSessionsSlice.actions;

export default gamingSessionsSlice.reducer;

export const getAllGaming = (param: GetAllGamingSessionsParams) => async (dispatch: AppDispatch) => {
    try {
        const response = await gamingSessionService.fetchGetAllGamingSession(param)
        dispatch(setGamingSessions(response))
    } catch (error) {
        console.error('Failed to fetch gaming sessions:', error);
    }

};