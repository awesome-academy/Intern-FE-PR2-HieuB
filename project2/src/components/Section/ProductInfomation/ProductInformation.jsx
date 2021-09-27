import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import RatingList from "../MainSection/Rating/RatingList";
import Row from "react-bootstrap/Row";
import QuantitySelect from "../MainSection/QuantitySelect/QuantitySelect";
import Button from "react-bootstrap/Button";
import { LocalStorage } from "../../../Page/constants/localStorage";
import { useDispatch } from "react-redux";
import { setCart } from "../../../slice/cart.slice";
import { useHistory } from "react-router";
import { path } from "../../../Page/constants/path";

function ProductInformation({ product }) {
    const { name, price, price_before_discount, description, rating } = product;
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);

    const handleSetQuantity = (value) => {
        setQuantity(value);
    };

    const handleAddToCart = () => {
        if (localStorage.getItem("user")) {
            const data = JSON.parse(localStorage.getItem("user"));
            let cartList =
                JSON.parse(localStorage.getItem(LocalStorage.cart)) || [];
            if (cartList.length < 1) {
                cartList.push({
                    userId: data.user.id,
                    product: [
                        {
                            id: product.id,
                            image: product.image,
                            price: product.price,
                            count: 1
                        }
                    ]
                });
                dispatch(setCart(cartList));
            } else {
                let userId = cartList.find((user) => {
                    return user.userId === data.user.id;
                });
                if (userId) {
                    cartList.forEach((item) => {
                        if (item.userId === data.user.id) {
                            let itemCart = item.product.find((e) => {
                                return e.id === product.id;
                            });
                            if (itemCart) {
                                itemCart.count += quantity;
                            } else {
                                item.product.push({
                                    id: product.id,
                                    image: product.image,
                                    price: product.price,
                                    count: 1
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
                                id: product.id,
                                image: product.image,
                                price: product.price,
                                count: 1
                            }
                        ]
                    });
                    dispatch(setCart(cartList));
                }
            }
            localStorage.setItem(LocalStorage.cart, JSON.stringify(cartList));
        } else {
            history.push(path.login);
        }
    };
    return (
        <Col md="7" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-md-4">
                <h4 className="title h3">{name}</h4>
                <h5 className="text-muted">
                    {price}
                    <del className="text-danger ml-4">
                        {price_before_discount}
                    </del>
                </h5>
                <RatingList rating={rating}></RatingList>
                <h5 className="mt-4 py-2">Overview :</h5>
                <p className="text-muted h4">{description}</p>
                <Row className="mt-4 pt-2">
                    <Col xs="12">
                        <QuantitySelect
                            handleSetQuantity={handleSetQuantity}
                        ></QuantitySelect>
                    </Col>
                </Row>
                <div className="mt-4 pt-2">
                    <Button
                        className="btn btn-soft-primary mt-4"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Button>
                </div>
            </div>
        </Col>
    );
}

export default ProductInformation;
