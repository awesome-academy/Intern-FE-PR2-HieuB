import React from "react";
import CategoryItem from "./CategoryItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Category() {
    return (
        <Container className="py-5">
            <Row>
                <Col xs="12">
                    <h5 className="mb-0">Top Categories</h5>
                </Col>
            </Row>
            <Row>
                <CategoryItem></CategoryItem>
            </Row>
        </Container>
    );
}

export default Category;
