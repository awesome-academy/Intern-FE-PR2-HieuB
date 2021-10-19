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

export const postLogin = createAsyncThunk(
    "auth/login",
    async (params, thunkAPI) => {
        try {
            const response = await authAPI.login(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const auth = createSlice({
    name: "auth",
    initialState: {
        profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
        loading: false,
        error: ""
    },
    extraReducers: {
        [postRegister.fulfilled]: (state, action) => {
            state.loading = false;
            state.profile = action.payload.data;
            state.error = "";
        },
        [postRegister.pending]: (state, action) => {
            state.loading = true;
        },
        [postRegister.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [postLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.profile = action.payload.data;
            localStorage.setItem(
                LocalStorage.user,
                JSON.stringify(state.profile)
            );
            state.error = "";
        },
        [postLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [postLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});

const authReducer = auth.reducer;
export default authReducer;
