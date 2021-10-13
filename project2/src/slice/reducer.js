import categoriesReducer from "./categories.slice";
import filterReducer from "./filter.slice";
import productsReducer from "./products.slice";

const rootReducer = {
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer
};

export default rootReducer;
