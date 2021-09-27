import { createSlice } from "@reduxjs/toolkit";

const filterAdminPaymentSlice = createSlice({
    name: "filterAdminPayment", //prefix action type
    initialState: {
        _page: 1,
        _limit: 4,
        fullname_like: "",
        email_like: "",
        userId_like: "",
        phone_like: "",
        paymentType: []
    },
    reducers: {
        changePageAdminPayment: (state, action) => {
            state._page = action.payload;
        },
        changeFullNameAdminPayment: (state, action) => {
            state.fullname_like = action.payload;
        },
        changeEmailAdminPayment: (state, action) => {
            state.email_like = action.payload;
        },
        changeUserIdNameAdminPayment: (state, action) => {
            state.userId_like = action.payload;
        },
        changePhoneAdminPayment: (state, action) => {
            state.phone_like = action.payload;
        },
        changePaymentTypeAdminPayment: (state, action) => {
            if (action.payload === "all") {
                state.paymentType = [];
            } else {
                state.paymentType = action.payload;
            }
        }
    }
});

const filterAdminPaymentReducer = filterAdminPaymentSlice.reducer;

export default filterAdminPaymentReducer;
export const changePageAdminPayment =
    filterAdminPaymentSlice.actions.changePageAdminPayment;
export const changeFullNameAdminPayment =
    filterAdminPaymentSlice.actions.changeFullNameAdminPayment;
export const changeEmailAdminPayment =
    filterAdminPaymentSlice.actions.changeEmailAdminPayment;
export const changeUserIdNameAdminPayment =
    filterAdminPaymentSlice.actions.changeUserIdNameAdminPayment;
export const changePhoneAdminPayment =
    filterAdminPaymentSlice.actions.changePhoneAdminPayment;
export const changePaymentTypeAdminPayment =
    filterAdminPaymentSlice.actions.changePaymentTypeAdminPayment;
