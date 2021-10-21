import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import * as S from "./ThankYou.style";

function ThankYou() {
    return (
        <section className="bg-home bg-light d-flex align-items-center vh-100">
            <Container>
                <Row className=" justify-content-center">
                    <Col xs="12">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-primary mx-auto">
                                <S.Icon className="btn-soft-primary rounded-circle">
                                    <ThumbUpIcon></ThumbUpIcon>
                                </S.Icon>
                            </div>
                            <h1 className="my-4 font-weight-bold h1">
                                Bạn đã thanh toán thành công
                            </h1>
                            <p className="text-muted para-desc mx-auto">
                                Cảm ơn bạn đã mua sản phẩm của chúng tôi, sản
                                phẩm sẽ được giao tới nhà chủ shop
                            </p>
                            <Link to="/" className="btn btn-soft-primary mt-3">
                                Về trang chủ
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ThankYou;
