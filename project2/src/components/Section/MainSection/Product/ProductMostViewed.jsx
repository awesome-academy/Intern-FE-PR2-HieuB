import React from "react";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function ProductMostViewed({ products }) {
    return (
        <Container>
            <div className="row">
                <Col md="12">
                    <h5 className="mb-0">Most Viewed Products</h5>
                </Col>
            </div>
            <Row>
                {products &&
                    products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        ></ProductItem>
                    ))}
            </Row>
        </Container>
    );
}

export default ProductMostViewed;
