import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter", //prefix action type
    initialState: {
        _page: 1,
        _limit: 4,
        _sort: "price",
        _order: "asc"
    },
    reducers: {
        setFilter: (state, action) => {
            return action.payload;
        }
    }
});

const filterReducer = filterSlice.reducer;

export default filterReducer;
export const setFilter = filterSlice.actions.setFilter;
