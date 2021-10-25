import { createSlice } from "@reduxjs/toolkit";

const filterAdminProductSlice = createSlice({
    name: "filterAdmin", //prefix action type
    initialState: {
        _page: 1,
        _limit: 4,
        q: "",
        _sort: "",
        _order: "",
        name_like: "",
        categoryID: []
    },
    reducers: {
        changePageAdminProduct: (state, action) => {
            state._page = action.payload;
        },
        changeQAdminProduct: (state, action) => {
            state.q = action.payload;
        },
        changeSortAdminProduct: (state, action) => {
            state._sort = action.payload;
        },
        changeOrderAdminProduct: (state, action) => {
            state._order = action.payload;
        },
        changeNameAdminProduct: (state, action) => {
            state.name_like = action.payload;
        },
        changeCategoryAdminProduct: (state, action) => {
            if (action.payload === "all") {
                state.categoryID = [];
            } else {
                state.categoryID = action.payload;
            }
        }
    }
});

const filterAdminProductReducer = filterAdminProductSlice.reducer;

export default filterAdminProductReducer;
export const changePageAdminProduct =
    filterAdminProductSlice.actions.changePageAdminProduct;
export const changeQAdminProduct =
    filterAdminProductSlice.actions.changeQAdminProduct;
export const changeSortAdminProduct =
    filterAdminProductSlice.actions.changeSortAdminProduct;
export const changeOrderAdminProduct =
    filterAdminProductSlice.actions.changeOrderAdminProduct;
export const changeNameAdminProduct =
    filterAdminProductSlice.actions.changeNameAdminProduct;
export const changeCategoryAdminProduct =
    filterAdminProductSlice.actions.changeCategoryAdminProduct;
