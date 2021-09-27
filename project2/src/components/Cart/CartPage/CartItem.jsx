import React from "react";
import Button from "react-bootstrap/Button";
import * as S from "./CartItem.styled";
import QuantitySelect from "../../Section/MainSection/QuantitySelect/QuantitySelect";

function CartItem({ product }) {
    const { count, image, price, name } = product;
    return (
        <tr>
            <td className="h6">
                <Button variant="link" className="text-danger">
                    X
                </Button>
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <S.CartImage
                        src={image}
                        className="img-fluid rounded shadow"
                        alt="s"
                    />
                    <h6 className="mb-0 ml-3 h4">{name}</h6>
                </div>
            </td>
            <td className="text-center h4">{price}</td>
            <td className="text-center">
                <QuantitySelect count={count}></QuantitySelect>
            </td>
            <td className="text-center font-weight-bold h4">
                {Number(price * count)}
            </td>
        </tr>
    );
}

export default CartItem;
