import React from "react";
import RatingList from "../Rating/RatingList";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as S from "./ProductItem.style";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <Col xs="12" lg="3" md="6" className="mt-4 pt-2">
            <Card className="shop-list border-0 position-relative">
                <S.CardImage className="shop-image position-relative overflow-hidden rounded shadow">
                    <Link to="/">
                        <img
                            src={product.image}
                            className="img-fluid"
                            alt="a"
                        />
                    </Link>
                    <S.ShopIcon className="list-unstyled">
                        <li className="mt-2">
                            <Link
                                to="/"
                                className="btn btn-icon btn-pills btn-soft-danger"
                            >
                                <AddShoppingCartIcon></AddShoppingCartIcon>
                            </Link>
                        </li>
                    </S.ShopIcon>
                </S.CardImage>
                <Card.Body className="content pt-4 p-2">
                    <S.CardName to="/" className="text-dark product-name h5">
                        {product.name}
                    </S.CardName>
                    <div className="d-flex justify-content-between mt-1">
                        <h6 className="text-muted font-italic mb-0 mt-1">
                            {product.price}
                            <del className="text-danger ml-4">
                                {product.price_before_discount}
                            </del>
                        </h6>
                        <RatingList rating={product.rating}></RatingList>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;
