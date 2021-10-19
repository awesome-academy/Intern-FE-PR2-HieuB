import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import CartItem from "../../Cart/CartPage/CartItem";
import { Link } from "react-router-dom";
import * as S from "./CartSection.style";

function CartSection() {
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col xs="12">
                        <S.CartTable className="table-responsive bg-white shadow">
                            <Table className="table-center table-padding mb-0">
                                <thead>
                                    <tr>
                                        <th
                                            className="py-3"
                                            style={{ minWidth: 20 }}
                                        />
                                        <th
                                            className="py-3 h4"
                                            style={{ minWidth: 300 }}
                                        >
                                            Sản phẩm
                                        </th>
                                        <th
                                            className="text-center py-3 h4"
                                            style={{ minWidth: 160 }}
                                        >
                                            Giá
                                        </th>
                                        <th
                                            className="text-center py-3 h4"
                                            style={{ minWidth: 160 }}
                                        >
                                            Số Lượng
                                        </th>
                                        <th
                                            className="text-center py-3 h4"
                                            style={{ minWidth: 160 }}
                                        >
                                            Tổng Tiền
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartItem></CartItem>
                                </tbody>
                            </Table>
                        </S.CartTable>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" className=" ml-auto mt-4 pt-2">
                        <div className="table-responsive bg-white rounded shadow">
                            <Table className="table table-center table-padding mb-0">
                                <tbody>
                                    <tr>
                                        <td className="h6">Subtotal</td>
                                        <td className="text-center font-weight-bold">
                                            $ 2190
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="h6">Taxes</td>
                                        <td className="text-center font-weight-bold">
                                            $ 219
                                        </td>
                                    </tr>
                                    <tr className="bg-light">
                                        <td className="h6">Total</td>
                                        <td className="text-center font-weight-bold">
                                            $ 2409
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="mt-4 pt-2 text-right">
                            <Link to="/" className="btn btn-primary">
                                Proceed to checkout
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CartSection;
