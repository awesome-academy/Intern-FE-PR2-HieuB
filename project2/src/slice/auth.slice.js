import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../api/authAPI";
import { LocalStorage } from "../Page/constants/localStorage";

export const postRegister = createAsyncThunk(
    "auth/register",
    async (params, thunkAPI) => {
        try {
            const response = await authAPI.register(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const auth = createSlice({
    name: "auth",
    initialState: {
        profile: localStorage.getItem(LocalStorage.user) || {},
        loading: false,
        error: ""
    },
    extraReducers: {
        [postRegister.fulfilled]: (state, action) => {
            state.profile = action.payload.data;
            localStorage.setItem(
                LocalStorage.user,
                JSON.stringify(state.profile)
            );
        },
        [postRegister.pending]: (state, action) => {
            state.loading = true;
        },
        [postRegister.rejected]: (state, action) => {
            state.profile = action.payload.data;
            state.error = action.payload;
        }
    }
});

const authReducer = auth.reducer;
export default authReducer;
