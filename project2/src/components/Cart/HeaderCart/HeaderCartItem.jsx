import React from "react";
import * as S from "./HeaderCartItem.style";
import { Link } from "react-router-dom";

function HeaderCartItem() {
    return (
        <Link
            to="/"
            className="media align-items-center d-flex justify-content-around"
        >
            <S.MediaImg
                src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"
                className="shadow rounded"
                alt="s1"
            />
            <div className="media-body text-left ml-3">
                <h6 className="text-dark mb-0">T-shirt (M)</h6>
                <p className="text-muted mb-0">$320 X 2</p>
            </div>
            <h6 className="text-dark mb-0">$640</h6>
        </Link>
    );
}

export default HeaderCartItem;
