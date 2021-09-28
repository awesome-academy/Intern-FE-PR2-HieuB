import React from "react";
import HeaderCartItem from "./HeaderCartItem";
import * as S from "./HeaderCartList.style";
import { NavLink } from "react-router-dom";
import { path } from "../../../Page/constants/path";

function HeaderCartList() {
    return (
        <S.DropDownMenu className="dd-menu dropdown-menu-cart bg-white shadow rounded border-0 mt-3 p-4">
            <div className="pb-4">
                <HeaderCartItem></HeaderCartItem>
            </div>
            <div className="media align-items-center justify-content-between pt-4 border-top">
                <h6 className="text-dark mb-0">Total($):</h6>
                <h6 className="text-dark mb-0">$1690</h6>
            </div>
            <div className="mt-3 text-center d-flex justify-content-between">
                <NavLink to={path.home} className="btn btn-primary mr-2">
                    View Cart
                </NavLink>
                <NavLink to={path.home} className="btn btn-primary">
                    Checkout
                </NavLink>
            </div>
            <p className="text-muted text-left mt-1 mb-0">*T&amp;C Apply</p>
        </S.DropDownMenu>
    );
}

export default HeaderCartList;
