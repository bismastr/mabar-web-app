import userService from '@/services/userService';
import { AppDispatch } from '@/store';
import { User } from '@/types/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

export const getProfile = () => async (dispatch: AppDispatch) => {
    try {
        const response = await userService.fetchGetProfile()
        dispatch(setUser(response))
    } catch (error) {
        console.error('Failed to fetch gaming sessions:', error);
    }
}