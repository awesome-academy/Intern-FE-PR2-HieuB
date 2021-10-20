import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as S from "./CheckoutSection.style";

function CheckoutSection() {
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col lg="7" md="6">
                        <div className="rounded shadow-lg p-4">
                            <h5 className="mb-0 h3">Thông tin thanh toán:</h5>
                            <Form className="mt-4">
                                <Row>
                                    <Col xs="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="h4">
                                                Họ và tên
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <input
                                                name="name"
                                                id="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Họ và tên"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="h4">
                                                Địa chỉ
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className="form-control"
                                                placeholder="Địa chỉ :"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="h4">
                                                Số điện thoại
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                className="form-control"
                                                placeholder="Số điện thoại"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="h4">
                                                Email:
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <input
                                                name="email"
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Your email :"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="12">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="h4">
                                                Phương thức thanh toán:
                                                <span className="text-danger">
                                                    *
                                                </span>
                                            </Form.Label>
                                            <S.FormCheck
                                                type="radio"
                                                label="Thanh toán tại nhà"
                                                name="paymentType"
                                                id="pay-home"
                                                className="mt-3"
                                            ></S.FormCheck>
                                            <S.FormCheck
                                                type="radio"
                                                label="Chuyển khoản"
                                                name="paymentType"
                                                id="pay-bank"
                                                className="mt-3"
                                            ></S.FormCheck>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="mt-4 pt-2">
                                    <Button type="submit">Thanh Toán</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="rounded shadow-lg p-4">
                            <div className="d-flex mb-4 justify-content-between">
                                <h5>4 sản phẩm</h5>
                            </div>
                            <div className="table-responsive">
                                <Table className="table-center table-padding mb-0">
                                    <tbody>
                                        <tr className="bg-light">
                                            <td className="h5 font-weight-bold">
                                                Tổng thanh toán
                                            </td>
                                            <td className="text-center text-primary h4 font-weight-bold">
                                                $ 2409
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CheckoutSection;
