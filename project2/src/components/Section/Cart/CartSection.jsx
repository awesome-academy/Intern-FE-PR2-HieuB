import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import CartItem from "../../Cart/CartPage/CartItem";
import { Link } from "react-router-dom";
import * as S from "./CartSection.style";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../slice/cart.slice";

function CartSection() {
    const dispatch = useDispatch();
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length) {
            const userId = JSON.parse(localStorage.getItem("user"));
            if (userId) {
                let check = JSON.parse(localStorage.getItem("cart")).find(
                    (e) => {
                        return e.userId === userId.user.id;
                    }
                );
                if (check) {
                    dispatch(setCart(check));
                }
            }
        } else {
            dispatch(setCart([]));
        }
    }, [dispatch]);
    const data = useSelector((value) => value.cart.product);
    const getTotalMoney = () => {
        let totalCost = 0;
        if (data) {
            data.map((item) => {
                return (totalCost += Number(item.price * item.count));
            });
        } else {
            totalCost = 0;
        }
        return totalCost;
    };
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col xs="12">
                        <S.CartTable className="table-responsive bg-white shadow">
                            <Table className="table-center table-padding mb-0">
                                <thead>
                                    <tr>
                                        <th className="py-3 mw-20" />
                                        <th className="py-3 h4 mw-30">
                                            Sản phẩm
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            Giá
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            Số Lượng
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            Tổng Tiền
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((item) => {
                                            return (
                                                <CartItem
                                                    key={item.id}
                                                    product={item}
                                                ></CartItem>
                                            );
                                        })}
                                </tbody>
                            </Table>
                        </S.CartTable>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" className=" ml-auto mt-4 pt-2">
                        <S.CartTable className="table-responsive bg-white rounded shadow">
                            <Table className="table table-center table-padding mb-0">
                                <tbody>
                                    <tr className="bg-light">
                                        <td className="h6">Total</td>
                                        <td className="text-center font-weight-bold h4">
                                            {getTotalMoney()}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </S.CartTable>
                        <div className="mt-4 pt-2 text-right">
                            <Link to="/" className="btn btn-primary">
                                Thanh Toán
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CartSection;
