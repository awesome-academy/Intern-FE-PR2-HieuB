import { createAsyncThunk } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";
import purchaseAPI from "../api/purchaseApi";

export const getProductDetail = createAsyncThunk(
    "productDetail",
    async (id) => {
        const response = await productsAPI.getProductDetail(id);
        return response;
    }
);

export const addToCart = createAsyncThunk("addToCart", async (body) => {
    const res = await purchaseAPI.addToCart(body);
    return res;
});
