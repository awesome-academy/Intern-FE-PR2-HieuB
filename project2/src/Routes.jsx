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
            <Route path={path.register}>
                <Register></Register>
            </Route>
            <Route path={path.productList}>
                <MainLayout>
                    <ProductList></ProductList>
                </MainLayout>
            </Route>
            <Route path={path.productDetail}>
                <MainLayout>
                    <ProductDetail></ProductDetail>
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
