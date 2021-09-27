import React from "react";
import Button from "react-bootstrap/Button";
import * as S from "./CartItem.styled";
import QuantitySelect from "../../Section/MainSection/QuantitySelect/QuantitySelect";

function CartItem() {
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
                        src="https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"
                        className="img-fluid rounded shadow"
                        alt=""
                    />
                    <h6 className="mb-0 ml-3 h4">T-Shirt</h6>
                </div>
            </td>
            <td className="text-center h4">$ 255.00</td>
            <td className="text-center">
                <QuantitySelect></QuantitySelect>
            </td>
            <td className="text-center font-weight-bold h4">$510.00</td>
        </tr>
    );
}

export default CartItem;
