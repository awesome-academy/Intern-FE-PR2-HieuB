import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsAPI from "../api/productsAPI";

export const getCategories = createAsyncThunk("Categories", async () => {
    const response = await productsAPI.getCategories();
    return response;
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        loading: false,
        error: "",
        categories: []
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

const categoriesReducer = categoriesSlice.reducer;

export default categoriesReducer;
