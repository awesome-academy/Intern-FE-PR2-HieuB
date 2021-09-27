import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../../Page/constants/path";

function HeaderAccountItem() {
    const role = JSON.parse(localStorage.getItem("user")).user.role;
    return (
        <>
            <Link className="dropdown-item text-dark" to={path.usermanager}>
                <i className="uil uil-clipboard-notes align-middle mr-1" />
                Tài khoản của tôi
            </Link>
            {role === "admin" ? (
                <Link className="dropdown-item text-dark" to={path.admin}>
                    <i className="uil uil-clipboard-notes align-middle mr-1" />
                    Quản lý trang web
                </Link>
            ) : (
                ""
            )}
        </>
    );
}

export default HeaderAccountItem;
