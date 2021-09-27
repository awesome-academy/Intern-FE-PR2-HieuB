import { createAsyncThunk } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getPopularProducts = createAsyncThunk(
    "PopularProducts",
    async () => {
        const response = await productsAPI.getPopularProducts();
        return response;
    }
);

export const getProductsMostViewed = createAsyncThunk(
    "MostViewedProducts",
    async () => {
        const response = await productsAPI.getMostViewedProducts();
        return response;
    }
);
