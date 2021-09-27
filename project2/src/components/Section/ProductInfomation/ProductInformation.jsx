import React from "react";
import Col from "react-bootstrap/Col";
import RatingList from "../MainSection/Rating/RatingList";
import Row from "react-bootstrap/Row";
import QuantitySelect from "../MainSection/QuantitySelect/QuantitySelect";
import Button from "react-bootstrap/Button";
function ProductInformation({ product }) {
    const { name, price, price_before_discount, description, rating } = product;
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
                        <QuantitySelect></QuantitySelect>
                    </Col>
                </Row>
                <div className="mt-4 pt-2">
                    <Button className="btn btn-soft-primary mt-4">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </Col>
    );
}

export default ProductInformation;
