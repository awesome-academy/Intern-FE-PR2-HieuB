import adminUserReducer from "./admin.slice";
import authReducer from "./auth.slice";
import cartReducer from "./cart.slice";
import categoriesReducer from "./categories.slice";
import commentReducer from "./comment.slice";
import filterReducer from "./filter.slice";
import filterAdminReducer from "./filterAdmin.slice";
import filterAdminPaymentReducer from "./filterAdminPayment.slice";
import filterAdminProductReducer from "./filterAdminProduct.slice";
import managerReducer from "./manager.slice";
import paymentAdminReducer from "./paymentAdmin.slice";
import productsReducer from "./products.slice";

const rootReducer = {
    categories: categoriesReducer,
    products: productsReducer,
    filter: filterReducer,
    auth: authReducer,
    cart: cartReducer,
    comment: commentReducer,
    filterAdmin: filterAdminReducer,
    adminUser: adminUserReducer,
    manager: managerReducer,
    filterAdminProduct: filterAdminProductReducer,
    filterAdminPayment: filterAdminPaymentReducer,
    paymentAdmin: paymentAdminReducer
};

export default rootReducer;
