import { createSlice } from "@reduxjs/toolkit";

const filterAdminSlice = createSlice({
    name: "filterAdmin", //prefix action type
    initialState: {
        _page: 1,
        _limit: 4,
        q: "",
        _sort: "",
        _order: "",
        email_like: "",
        firstName_like: "",
        lastName_like: "",
        address_like: "",
        phone_like: "",
        role: []
    },
    reducers: {
        changePageAdmin: (state, action) => {
            state._page = action.payload;
        },
        changeQAdmin: (state, action) => {
            state.q = action.payload;
        },
        changeSortAdmin: (state, action) => {
            state._sort = action.payload;
        },
        changeOrderAdmin: (state, action) => {
            state._order = action.payload;
        },
        changeEmailAdmin: (state, action) => {
            state.email_like = action.payload;
        },
        changeFirstNameAdmin: (state, action) => {
            state.firstName_like = action.payload;
        },
        changeLastNamelAdmin: (state, action) => {
            state.lastName_like = action.payload;
        },
        changeAddressAdmin: (state, action) => {
            state.address_like = action.payload;
        },
        changePhoneAdmin: (state, action) => {
            state.phone_like = action.payload;
        },
        changeRoleAdmin: (state, action) => {
            if (action.payload === "all") {
                state.role = [];
            } else {
                state.role = action.payload;
            }
        }
    }
});

const filterAdminReducer = filterAdminSlice.reducer;

export default filterAdminReducer;
export const changePageAdmin = filterAdminSlice.actions.changePageAdmin;
export const changeQAdmin = filterAdminSlice.actions.changeQAdmin;
export const changeSortAdmin = filterAdminSlice.actions.changeSortAdmin;
export const changeOrderAdmin = filterAdminSlice.actions.changeOrderAdmin;
export const changeEmailAdmin = filterAdminSlice.actions.changeEmailAdmin;
export const changeFirstNameAdmin =
    filterAdminSlice.actions.changeFirstNameAdmin;
export const changeLastNameAdmin = filterAdminSlice.actions.changeLastNameAdmin;
export const changeAddressAdmin = filterAdminSlice.actions.changeAddressAdmin;
export const changePhoneAdmin = filterAdminSlice.actions.changePhoneAdmin;
export const changeRoleAdmin = filterAdminSlice.actions.changeRoleAdmin;
