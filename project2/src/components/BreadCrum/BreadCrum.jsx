import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import * as S from "./BreadCrum.style";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadCrum() {
    return (
        <S.SectionScrumb className="bg-light d-table w-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12" className="text-center">
                        <div className="page-next-level">
                            <S.Title> Danh Sách Sản Phẩm </S.Title>
                            <div className="page-next">
                                <S.BreadCrumb
                                    aria-label="breadcrumb"
                                    className="d-inline-block"
                                >
                                    <li className="breadcrumb-item">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <Breadcrumb.Item active>
                                        Products
                                    </Breadcrumb.Item>
                                </S.BreadCrumb>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </S.SectionScrumb>
    );
}

export default BreadCrum;
