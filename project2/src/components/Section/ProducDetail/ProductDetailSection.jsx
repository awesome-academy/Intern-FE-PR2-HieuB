import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GalerryShow from "../GalerryShow/GalerryShow";
import Comment from "../MainSection/Comment/Comment";
import ProductInformation from "../ProductInfomation/ProductInformation";

function ProductDetailSection() {
    return (
        <section className="section pb-0">
            <Container>
                <Row className="align-items-center">
                    <GalerryShow></GalerryShow>
                    <ProductInformation></ProductInformation>
                </Row>
            </Container>
            <Container className="mt-100 mt-60">
                <Row className="mt-5">
                    <Comment></Comment>
                </Row>
            </Container>
        </section>
    );
}

export default ProductDetailSection;
