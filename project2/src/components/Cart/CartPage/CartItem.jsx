import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import * as S from "./CartItem.styled";
import QuantitySelect from "../../Section/MainSection/QuantitySelect/QuantitySelect";
import { formatCurrency } from "../../../utils/helper";
import ModalConfirm from "../../Modal/ModalConfirm";

function CartItem({ product }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { count, image, price, name } = product;

    return (
        <>
            <tr>
                <td className="h6">
                    <Button
                        variant="link"
                        className="text-danger"
                        onClick={handleShow}
                    >
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
                <td className="text-center h4">{formatCurrency(price)}</td>
                <td className="text-center">
                    <QuantitySelect
                        count={count}
                        cartItem={true}
                        product={product}
                    ></QuantitySelect>
                </td>
                <td className="text-center font-weight-bold h4">
                    {formatCurrency(Number(price * count))}
                </td>
            </tr>
            <ModalConfirm
                show={show}
                handleClose={handleClose}
                product={product}
            ></ModalConfirm>
        </>
    );
}

export default CartItem;
