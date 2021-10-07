import { createAsyncThunk } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProductsMostViewed = createAsyncThunk(
    "MostViewedProducts",
    async (params) => {
        const response = await productsAPI.getMostViewedProducts(
            params.limit,
            params.order
        );
        return response;
    }
);

export const getPopularProducts = createAsyncThunk(
    "PopularProducts",
    async (params) => {
        const response = await productsAPI.getPopularProducts(
            params.limit,
            params.order
        );
        return response;
    }
);
