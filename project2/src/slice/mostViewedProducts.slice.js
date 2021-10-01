import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProductsMostViewed = createAsyncThunk(
    "MostViewedProducts",
    async () => {
        const response = await productsAPI.getMostViewedProducts();
        return response;
    }
);

const mostViewedProductsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: "",
        products: []
    },
    extraReducers: {
        [getProductsMostViewed.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        [getProductsMostViewed.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getProductsMostViewed.pending]: (state) => {
            state.loading = true;
        }
    }
});

const mostViewedProductsReducer = mostViewedProductsSlice.reducer;

export default mostViewedProductsReducer;
