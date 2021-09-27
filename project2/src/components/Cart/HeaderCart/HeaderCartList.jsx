import React from "react";
import HeaderCartItem from "./HeaderCartItem";
import * as S from "./HeaderCartList.style";
import { NavLink } from "react-router-dom";
import { path } from "../../../Page/constants/path";

function HeaderCartList({ data }) {
    return (
        <S.DropDownMenu className="dd-menu dropdown-menu-cart bg-white shadow rounded border-0 mt-3 p-4">
            <div className="pb-4">
                {data && data.length ? (
                    data.map((item) => {
                        return (
                            <HeaderCartItem
                                product={item}
                                key={item.id}
                            ></HeaderCartItem>
                        );
                    })
                ) : (
                    <h4>Giỏ hàng trống</h4>
                )}
            </div>
            <div className="mt-3 text-center d-flex justify-content-between">
                {data && data.length ? (
                    <NavLink to={path.cart} className="btn btn-primary mr-2">
                        Giỏ hàng
                    </NavLink>
                ) : (
                    ""
                )}
            </div>
        </S.DropDownMenu>
    );
}

export default HeaderCartList;
