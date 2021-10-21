import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: []
    },
    reducers: {
        setCart: (state, action) => {
            return action.payload;
        }
    }
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
export const setCart = cartSlice.actions.setCart;
