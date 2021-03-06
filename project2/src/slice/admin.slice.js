import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminAPI from "../api/adminAPI";
import authAPI from "../api/authAPI";
import productsAPI from "../api/productsAPI";

export const getUserAll = createAsyncThunk(
    "admin/getUser",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.getUser(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const addUser = createAsyncThunk(
    "admin/addUser",
    async (params, thunkAPI) => {
        try {
            const response = await authAPI.register(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getTotalCountAdmin = createAsyncThunk(
    "admin/getCount",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.getTotalCountAdmin(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "admin/deleteProduct",
    async (id, thunkAPI) => {
        try {
            const response = await adminAPI.deleteProduct(id);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateUser = createAsyncThunk(
    "admin/updateUser",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.updateUser(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateProduct = createAsyncThunk(
    "admin/updateProduct",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.updateProduct(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getCountPageProduct = createAsyncThunk(
    "admin/getCountProduct",
    async (params, thunkAPI) => {
        try {
            const response = await productsAPI.getTotalCount(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getCountPagePayment = createAsyncThunk(
    "admin/getCountPayment",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.getTotalCountPayment(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addProduct = createAsyncThunk(
    "admin/addProduct",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.addProduct(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getPayment = createAsyncThunk(
    "admin/getPayment",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.getPayment(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const adminUser = createSlice({
    name: "admin",
    initialState: {
        profile: [],
        loading: false,
        error: "",
        countPage: "",
        countPageProduct: "",
        countPagePayment: ""
    },
    extraReducers: {
        [getUserAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.profile = action.payload.data;
            state.error = "";
        },
        [getUserAll.pending]: (state, action) => {
            state.loading = true;
        },
        [getUserAll.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getTotalCountAdmin.fulfilled]: (state, action) => {
            state.loading = false;
            state.countPage = action.payload;
            state.error = "";
        },
        [getTotalCountAdmin.pending]: (state, action) => {
            state.loading = true;
        },
        [getTotalCountAdmin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getCountPageProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.countPageProduct = action.payload;
            state.error = "";
        },
        [getCountPageProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [getCountPageProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getCountPagePayment.fulfilled]: (state, action) => {
            state.loading = false;
            state.countPagePayment = action.payload;
            state.error = "";
        },
        [getCountPagePayment.pending]: (state, action) => {
            state.loading = true;
        },
        [getCountPagePayment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

const adminUserReducer = adminUser.reducer;
export default adminUserReducer;
