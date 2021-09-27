import { createAsyncThunk } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getProductDetail = createAsyncThunk(
    "productDetail",
    async (id) => {
        const response = await productsAPI.getProductDetail(id);
        return response;
    }
);
