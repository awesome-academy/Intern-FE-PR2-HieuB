import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as S from "./BreadCrum.style";

function BreadCrum({ title }) {
    return (
        <S.SectionScrumb className="bg-light d-table w-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12" className="text-center">
                        <div className="page-next-level">
                            <S.Title> {title} </S.Title>
                        </div>
                    </Col>
                </Row>
            </Container>
        </S.SectionScrumb>
    );
}

export default BreadCrum;
