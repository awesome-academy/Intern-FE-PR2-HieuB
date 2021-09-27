import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../../Page/constants/path";

function HeaderAccountItem() {
    return (
        <>
            <Link className="dropdown-item text-dark" to={path.usermanager}>
                <i className="uil uil-clipboard-notes align-middle mr-1" />
                Tài khoản của tôi
            </Link>
        </>
    );
}

export default HeaderAccountItem;
