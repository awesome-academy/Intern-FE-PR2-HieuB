import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Page/Auth/Login/Login";
import Register from "./Page/Auth/Register/Register";
import { path } from "./Page/constants/path";
import HomePage from "./Page/Home/HomePage";
import NotFound from "./Page/NotFound/NotFound";
import ProductList from "./Page/ProductList/ProductList";

function Routes() {
    return (
        <Switch>
            <Route path={path.home} exact>
                <HomePage></HomePage>
            </Route>
            <Route path={path.login}>
                <Login></Login>
            </Route>
            <Route path={path.register}>
                <Register></Register>
            </Route>
            <Route path={path.productList}>
                <ProductList></ProductList>
            </Route>
            <Route path={path.notFound}>
                <NotFound></NotFound>
            </Route>
        </Switch>
    );
}

export default Routes;
