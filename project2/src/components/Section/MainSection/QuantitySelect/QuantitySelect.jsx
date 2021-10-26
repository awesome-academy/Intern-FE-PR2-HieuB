import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LocalStorage } from "../../../../Page/constants/localStorage";
import { setCart } from "../../../../slice/cart.slice";
import { toastAlert } from "../../../../utils/helper";

function QuantitySelect({ handleSetQuantity, count, cartItem, product }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        count && setQuantity(count);
    }, [count]);

    const handleChangeQuantity = (e) => {
        if (cartItem) {
            let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
            let userId = JSON.parse(localStorage.getItem(LocalStorage.user));
            if (e.target.value < 1) {
            } else {
                if (cartList.find((user) => user.userId === userId.user.id)) {
                    cartList.forEach((item) => {
                        if (item.userId === userId.user.id) {
                            let itemCart = item.product.find((e) => {
                                return e.id === product.id;
                            });
                            if (itemCart) {
                                itemCart.count = Number(e.target.value);
                            } else {
                            }
                            dispatch(setCart(item));
                        }
                    });
                }
                setQuantity(e.target.value);
            }
            localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
        } else {
            if (e.target.value < 1) {
                setQuantity(1);
                handleSetQuantity(1);
            } else {
                setQuantity(e.target.value);
                handleSetQuantity(e.target.value);
            }
        }
    };

    const handleChangeQuantityInput = (type) => {
        if (cartItem) {
            let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
            let userId = JSON.parse(localStorage.getItem(LocalStorage.user));
            if (type === "minus") {
                if (quantity > 1) {
                    if (
                        cartList.find((user) => user.userId === userId.user.id)
                    ) {
                        cartList.forEach((item) => {
                            if (item.userId === userId.user.id) {
                                let itemCart = item.product.find((e) => {
                                    return e.id === product.id;
                                });
                                if (itemCart) {
                                    itemCart.count = Number(quantity) - 1;
                                } else {
                                }
                                dispatch(setCart(item));
                            }
                        });
                    }
                }
            } else {
                if (cartList.find((user) => user.userId === userId.user.id)) {
                    cartList.forEach((item) => {
                        if (item.userId === userId.user.id) {
                            let itemCart = item.product.find((e) => {
                                return e.id === product.id;
                            });
                            if (itemCart) {
                                itemCart.count = Number(quantity) + 1;
                            } else {
                            }
                            dispatch(setCart(item));
                        }
                    });
                }
            }
            toastAlert("Cập nhật số lượng thành công", "success");
            localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
        } else {
            if (type === "minus") {
                if (quantity > 1) {
                    setQuantity(Number(quantity) - 1);
                    handleSetQuantity(Number(quantity) - 1);
                } else {
                    setQuantity(1);
                    handleSetQuantity(1);
                }
            } else {
                setQuantity(Number(quantity) + 1);
                handleSetQuantity(Number(quantity) + 1);
            }
            toastAlert("Cập nhật số lượng thành công", "success");
        }
    };
    return (
        <div className="d-flex shop-list align-items-center">
            <div className="ml-3">
                <input
                    type="button"
                    defaultValue="-"
                    className="minus btn btn-icon btn-soft-primary font-weight-bold"
                    onClick={() => handleChangeQuantityInput("minus")}
                />
                <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    title="Qty"
                    className="btn btn-icon btn-soft-primary font-weight-bold"
                    onChange={handleChangeQuantity}
                />
                <input
                    type="button"
                    defaultValue="+"
                    className="plus btn btn-icon btn-soft-primary font-weight-bold"
                    onClick={() => handleChangeQuantityInput("plus")}
                />
            </div>
        </div>
    );
}

export default QuantitySelect;
