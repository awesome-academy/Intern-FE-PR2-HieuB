import { createAsyncThunk } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getTotalPage = createAsyncThunk("totalCount", async (params) => {
    const response = await productsAPI.getTotalCount(params);
    return response;
});
