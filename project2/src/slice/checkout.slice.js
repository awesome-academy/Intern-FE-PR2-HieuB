import { createAsyncThunk } from "@reduxjs/toolkit";
import purchaseAPI from "../api/purchase.api";

export const postPayment = createAsyncThunk("getOrders", async (params) => {
    const res = await purchaseAPI.postPayment(params);
    return res;
});
