import React from "react";
import { Link } from "react-router-dom";

function HeaderAccountItem() {
    return (
        <Link className="dropdown-item text-dark" to="/">
            <i className="uil uil-clipboard-notes align-middle mr-1" /> Order
            History
        </Link>
    );
}

export default HeaderAccountItem;
