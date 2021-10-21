import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./Page/Auth/Login/Login";
import Register from "./Page/Auth/Register/Register";
import { path } from "./Page/constants/path";
import HomePage from "./Page/Home/HomePage";
import NotFound from "./Page/NotFound/NotFound";
import ProductDetail from "./Page/ProductDetail/ProductDetail";
import ProductList from "./Page/ProductList/ProductList";
import Cart from "./Page/Cart/Cart";
import Checkout from "./Page/Checkout/Checkout";
import ThankYou from "./Page/Checkout/ThankYou";
import UserManager from "./Page/UserManager/UserManager";
import Admin from "./Page/Auth/Admin/Admin";

function Routes() {
    return (
        <Switch>
            <Route path={path.home} exact>
                <MainLayout>
                    <HomePage></HomePage>
                </MainLayout>
            </Route>
            <Route path={path.login}>
                <Login></Login>
            </Route>
            <Route path={path.thankyou}>
                <ThankYou></ThankYou>
            </Route>
            <Route path={path.register}>
                <Register></Register>
            </Route>
            <Route path={path.productList}>
                <MainLayout>
                    <ProductList></ProductList>
                </MainLayout>
            </Route>
            <Route path={path.admin}>
                <MainLayout>
                    <Admin></Admin>
                </MainLayout>
            </Route>
            <Route path={path.productDetail}>
                <MainLayout>
                    <ProductDetail></ProductDetail>
                </MainLayout>
            </Route>
            <Route path={path.cart}>
                <MainLayout>
                    <Cart></Cart>
                </MainLayout>
            </Route>
            <Route path={path.checkout}>
                <MainLayout>
                    <Checkout></Checkout>
                </MainLayout>
            </Route>
            <Route path={path.usermanager}>
                <MainLayout>
                    <UserManager></UserManager>
                </MainLayout>
            </Route>
            <Route path={path.notFound}>
                <MainLayout>
                    <NotFound></NotFound>
                </MainLayout>
            </Route>
        </Switch>
    );
}

export default Routes;
