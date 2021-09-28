import React from "react";
import RatingList from "../Rating/RatingList";
import RatingItem from "../Rating/RatingItem";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as S from "./ProductItem.style";
import { Link } from "react-router-dom";

function ProductItem() {
    return (
        <Col xs="12" lg="3" md="6" className="mt-4 pt-2">
            <Card className="shop-list border-0 position-relative">
                <S.CardImage className="shop-image position-relative overflow-hidden rounded shadow">
                    <Link to="/">
                        <img
                            src="https://i.insider.com/5ef34943f34d05768867cb26?width=750&format=jpeg&auto=webp"
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
                    <Link to="/" className="text-dark product-name h5">
                        Branded T-Shirt
                    </Link>
                    <div className="d-flex justify-content-between mt-1">
                        <h6 className="text-muted font-italic mb-0 mt-1">
                            $16.00{" "}
                            <del className="text-danger ml-2">$21.00</del>{" "}
                        </h6>
                        <RatingList>
                            <RatingItem></RatingItem>
                            <RatingItem></RatingItem>
                            <RatingItem></RatingItem>
                        </RatingList>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;
