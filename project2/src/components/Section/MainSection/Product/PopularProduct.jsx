import React from "react";
import ProductItem from "./ProductItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PopularProduct() {
    return (
        <Container className="mt-100 mt-60">
            <Row>
                <Col md="12">
                    <h5 className="mb-0">Popular Products</h5>
                </Col>
            </Row>
            <Row>
                <ProductItem></ProductItem>
            </Row>
        </Container>
    );
}

export default PopularProduct;
