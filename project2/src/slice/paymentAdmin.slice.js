import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminAPI from "../api/adminAPI";

export const updatePayment = createAsyncThunk(
    "admin/updatePayment",
    async (params, thunkAPI) => {
        try {
            const response = await adminAPI.updatePayment(params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const paymentAdminSlice = createSlice({
    name: "paymentAdmin",
    initialState: {
        id: "",
        product: []
    },
    reducers: {
        showPayment: (state, action) => {
            state.product = action.payload.products;
            state.id = action.payload.id;
        }
    }
});

const paymentAdminReducer = paymentAdminSlice.reducer;

export default paymentAdminReducer;
export const showPayment = paymentAdminSlice.actions.showPayment;
