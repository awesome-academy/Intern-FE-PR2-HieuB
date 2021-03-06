import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../api/authAPI";
import purchaseAPI from "../api/purchaseApi";
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

export const getMe = createAsyncThunk("auth/me", async (params, thunkAPI) => {
    try {
        const response = await authAPI.getMe(params);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateMe = createAsyncThunk(
    "auth/updateMe",
    async (params, thunkAPI) => {
        try {
            const response = await authAPI.updateMe(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getPayment = createAsyncThunk(
    "auth/getPayment",
    async (params, thunkAPI) => {
        try {
            const response = await purchaseAPI.getPayment(params);
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
            state.error = action.error.message;
        }
    }
});

const authReducer = auth.reducer;
export default authReducer;
