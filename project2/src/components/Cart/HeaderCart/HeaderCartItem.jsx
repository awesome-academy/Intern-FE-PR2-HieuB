import React from "react";
import * as S from "./HeaderCartItem.style";
import { Link } from "react-router-dom";

function HeaderCartItem({ product }) {
    const { name, price, image, count } = product;
    return (
        <Link
            to="/"
            className="media align-items-center d-flex justify-content-around"
        >
            <S.MediaImg src={image} className="shadow rounded" alt="s1" />
            <div className="media-body text-left ml-3">
                <h6 className="text-dark mb-0">{name}</h6>
                <p className="text-muted mb-0">
                    {price} X {count}
                </p>
            </div>
            <h6 className="text-dark mb-0">{Number(price * count)}</h6>
        </Link>
    );
}

export default HeaderCartItem;
