import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (params) => {
        const response = await productsAPI.getProducts(params);
        return response;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
        },
        [getProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.error = action.error;
        }
    }
});

const productsReducer = productsSlice.reducer;

export default productsReducer;
