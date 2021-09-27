import { createSlice } from "@reduxjs/toolkit";

const managerSlice = createSlice({
    name: "manager",
    initialState: {
        profile: {},
        type: "",
        product: {}
    },
    reducers: {
        editUser: (state, action) => {
            state.profile = action.payload;
            state.type = "edit";
        },
        addUser: (state, action) => {
            state.profile = action.payload;
            state.type = "new";
        },
        editProduct: (state, action) => {
            state.product = action.payload;
            state.type = "editProduct";
        },

        refreshUser: (state, action) => {
            state.profile = {
                ...state.profile,
                ...action.payload
            };
        }
    }
});

const managerReducer = managerSlice.reducer;

export default managerReducer;
export const editUser = managerSlice.actions.editUser;
export const addUser = managerSlice.actions.addUser;
export const editProduct = managerSlice.actions.editProduct;
export const refreshUser = managerSlice.actions.refreshUser;
