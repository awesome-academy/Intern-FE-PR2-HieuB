import React from "react";
import Button from "react-bootstrap/Button";
import * as S from "./CartItem.styled";
import QuantitySelect from "../../Section/MainSection/QuantitySelect/QuantitySelect";
import { formatCurrency } from "../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorage } from "../../../Page/constants/localStorage";
import { setCart } from "../../../slice/cart.slice";

function CartItem({ product }) {
    const dispatch = useDispatch();
    const data = useSelector((value) => value.cart);
    const { count, image, price, name } = product;
    const handleDelete = () => {
        let result = data.product.filter((item) => {
            return item.id !== product.id;
        });
        let body = {
            ...data,
            product: result
        };
        let userId = JSON.parse(localStorage.getItem(LocalStorage.user)).user
            .id;
        let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
        cartList = cartList.filter((item) => {
            return item.userId !== userId;
        });
        cartList.push(body);
        dispatch(setCart(body));
        localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
    };
    return (
        <tr>
            <td className="h6">
                <Button
                    variant="link"
                    className="text-danger"
                    onClick={handleDelete}
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
    );
}

export default CartItem;
