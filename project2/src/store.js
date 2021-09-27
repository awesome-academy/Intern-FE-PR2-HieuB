import rootReducer from "./slice/reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

export default store;
