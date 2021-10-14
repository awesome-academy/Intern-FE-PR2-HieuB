import React from "react";
import Col from "react-bootstrap/Col";
import RatingList from "../MainSection/Rating/RatingList";
import Row from "react-bootstrap/Row";
import QuantitySelect from "../MainSection/QuantitySelect/QuantitySelect";
import Button from "react-bootstrap/Button";
function ProductInformation() {
    return (
        <Col md="7" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-md-4">
                <h4 className="title h3">Branded T-Shirts</h4>
                <h5 className="text-muted">
                    $21.00 <del className="text-danger ml-4">$25.00</del>{" "}
                </h5>
                <RatingList rating={5}></RatingList>
                <h5 className="mt-4 py-2">Overview :</h5>
                <p className="text-muted h4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero exercitationem, unde molestiae sint quae inventore
                    atque minima natus fugiat nihil quisquam voluptates ea
                    omnis. Modi laborum soluta tempore unde accusantium.
                </p>
                <Row className="mt-4 pt-2">
                    <Col xs="12" className="mt-4 mt-lg-0">
                        <QuantitySelect></QuantitySelect>
                    </Col>
                </Row>
                <div className="mt-4 pt-2">
                    <Button className="btn btn-primary mr-3 mt-4">
                        Shop Now
                    </Button>
                    <Button className="btn btn-soft-primary mt-4">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </Col>
    );
}

export default ProductInformation;
