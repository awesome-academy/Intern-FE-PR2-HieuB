import React from "react";
import * as S from "./HeaderAccountList.style";
import { useHistory } from "react-router-dom";
import HeaderAccountItem from "./HeaderAccountItem";
import { LocalStorage } from "../../../Page/constants/localStorage";
import { path } from "../../../Page/constants/path";

function HeaderAccountList() {
    const history = useHistory();
    const handleLogOut = () => {
        localStorage.removeItem(LocalStorage.user);
        history.push(path.login);
    };
    return (
        <S.DropDownMenu className="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-3">
            <HeaderAccountItem></HeaderAccountItem>
            <div className="dropdown-divider my-3 border-top" />
            <li className="dropdown-item text-dark" onClick={handleLogOut}>
                Đăng xuất
            </li>
        </S.DropDownMenu>
    );
}

export default HeaderAccountList;
