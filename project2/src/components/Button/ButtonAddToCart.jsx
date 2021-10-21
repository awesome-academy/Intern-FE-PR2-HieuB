import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LocalStorage } from "../../Page/constants/localStorage";
import { setCart } from "../../slice/cart.slice";
import { path } from "../../Page/constants/path";
import { toastAlert } from "../../utils/helper";

function ButtonAddToCart({ product }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleAddToCart = (productItem) => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"));
            let cartList =
                JSON.parse(localStorage.getItem(LocalStorage.cart)) || [];
            if (cartList.length < 1) {
                cartList.push({
                    userId: data.user.id,
                    product: [
                        {
                            id: productItem.id,
                            image: productItem.image,
                            price: productItem.price,
                            count: 1,
                            name: productItem.name,
                            status: 0
                        }
                    ]
                });
                dispatch(
                    setCart({
                        userId: data.user.id,
                        product: [
                            {
                                id: productItem.id,
                                image: productItem.image,
                                price: productItem.price,
                                count: 1,
                                name: productItem.name,
                                status: 0
                            }
                        ]
                    })
                );
            } else {
                let userId = cartList.find((user) => {
                    return user.userId === data.user.id;
                });
                if (userId) {
                    cartList.forEach((item) => {
                        if (item.userId === data.user.id) {
                            let itemCart = item.product.find((e) => {
                                return e.id === productItem.id;
                            });
                            if (itemCart) {
                                itemCart.count += 1;
                            } else {
                                item.product.push({
                                    id: productItem.id,
                                    image: productItem.image,
                                    price: productItem.price,
                                    count: 1,
                                    name: productItem.name,
                                    status: 0
                                });
                            }
                            dispatch(setCart(item));
                        }
                    });
                } else {
                    cartList.push({
                        userId: data.user.id,
                        product: [
                            {
                                id: productItem.id,
                                image: productItem.image,
                                price: productItem.price,
                                count: 1,
                                name: productItem.name,
                                status: 0
                            }
                        ]
                    });
                    dispatch(
                        setCart({
                            userId: data.user.id,
                            product: [
                                {
                                    id: productItem.id,
                                    image: productItem.image,
                                    price: productItem.price,
                                    count: 1,
                                    name: productItem.name,
                                    status: 0
                                }
                            ]
                        })
                    );
                }
            }
            toastAlert("Thêm sản phẩm thành công", "success");
            localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
        } else {
            toastAlert("Bạn phải đăng nhập trước", "err");
            history.push(path.login);
        }
    };
    return (
        <li
            className="mt-2"
            onClick={() => {
                handleAddToCart(product);
            }}
        >
            <span className="btn btn-icon btn-pills btn-soft-danger">
                <AddShoppingCartIcon></AddShoppingCartIcon>
            </span>
        </li>
    );
}

export default ButtonAddToCart;
