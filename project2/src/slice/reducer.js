import authReducer from "./auth.slice";
import cartReducer from "./cart.slice";
import categoriesReducer from "./categories.slice";
import filterReducer from "./filter.slice";
import productsReducer from "./products.slice";

const rootReducer = {
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer,
    auth: authReducer,
    cart: cartReducer
};

export default rootReducer;
