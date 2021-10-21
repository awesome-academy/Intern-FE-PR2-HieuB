import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentApi from "../api/commentAPI";

export const getComment = createAsyncThunk("comment/get", async (params) => {
    const response = await commentApi.getComment(params);
    return response;
});

export const postComment = createAsyncThunk(
    "comment/post",
    async (body, thunkAPI) => {
        try {
            const response = await commentApi.postComment(body);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const comment = createSlice({
    name: "comment",
    initialState: {
        comments: [],
        loading: false,
        error: ""
    },
    extraReducers: {
        [postComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments.push(action.payload.data);
            state.error = "";
        },
        [postComment.pending]: (state, action) => {
            state.loading = true;
        },
        [postComment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getComment.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload.data;
            state.error = "";
        },
        [getComment.pending]: (state, action) => {
            state.loading = true;
        },
        [getComment.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        }
    }
});

const commentReducer = comment.reducer;
export default commentReducer;
