import rootReducer from "./slice/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
});

export default store;
