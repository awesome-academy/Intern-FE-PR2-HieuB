import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import RatingList from "../Rating/RatingList";
import * as S from "./ProductItem.style";
import { path } from "../../../../Page/constants/path";
import { formatCurrency, generateNameId } from "../../../../utils/helper";
import ButtonAddToCart from "../../../Button/ButtonAddToCart";

function ProductItemList({ product }) {
    return (
        <Col xs="12" className="mt-4 pt-2">
            <Card className="border-0 shadow position-relative">
                <Row className="align-items-center no-gutters">
                    <Col lg="4" md="6">
                        <div className="shop-image position-relative overflow-hidden">
                            <Link
                                to={
                                    path.product + `/${generateNameId(product)}`
                                }
                            >
                                <img
                                    src={product.image}
                                    className="img-fluid"
                                    alt="a"
                                />
                            </Link>
                        </div>
                    </Col>
                    <Col md="6" lg="8">
                        <Card.Body className="content p-4">
                            <S.CardName
                                to={
                                    path.product + `/${generateNameId(product)}`
                                }
                                className="text-dark product-name h2"
                            >
                                {product.name}
                            </S.CardName>
                            <div className="d-lg-flex align-items-center mt-2 mb-3 justify-content-between">
                                <h6 className="text-muted font-italic mb-0 mr-3">
                                    {formatCurrency(product.price)}
                                    <del className="text-danger ml-4">
                                        {formatCurrency(
                                            product.price_before_discount
                                        )}
                                    </del>
                                </h6>
                                <RatingList
                                    rating={product.rating}
                                    sidebar={false}
                                ></RatingList>
                            </div>
                            <p className="para-desc text-muted py-3">
                                {product.description}
                            </p>
                            <ul className="list-unstyled mb-0">
                                <ButtonAddToCart
                                    product={product}
                                ></ButtonAddToCart>
                            </ul>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

export default ProductItemList;
