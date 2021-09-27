import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as S from "./Slider.style";

function Slider() {
    return (
        <S.MainSlider className="main-slider">
            <ul className="slides">
                <li
                    className="bg-slider slider-rtl-2 d-flex align-items-center"
                    data-thumb-alt
                >
                    <Container>
                        <Row className=" align-items-center mt-5">
                            <Col md="7" lg="7">
                                <div className="title-heading mt-4">
                                    <h1 className="display-4 title-white font-weight-bold mb-3">
                                        New Accessories <br /> Collections
                                    </h1>
                                    <p className="para-desc text-muted para-dark">
                                        Launch your campaign and benefit from
                                        our expertise on designing and managing
                                        conversion centered bootstrap4 html
                                        page.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </li>
            </ul>
        </S.MainSlider>
    );
}

export default Slider;
