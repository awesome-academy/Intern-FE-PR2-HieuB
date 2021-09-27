import React from "react";
import * as S from "./HeaderAccountList.style";
import { Link } from "react-router-dom";
import HeaderAccountItem from "./HeaderAccountItem";

function HeaderAccountList() {
    return (
        <S.DropDownMenu className="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-3">
            <HeaderAccountItem></HeaderAccountItem>
            <div className="dropdown-divider my-3 border-top" />
            <Link className="dropdown-item text-dark" to="/">
                <i className="uil uil-sign-out-alt align-middle mr-1" /> Logout
            </Link>
        </S.DropDownMenu>
    );
}

export default HeaderAccountList;
