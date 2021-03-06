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
import { formatCurrency } from "../../../utils/helper";
import { path } from "../../../Page/constants/path";

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
                                        <th className="py-3" />
                                        <th className="py-3 h4 mw-30">
                                            S???n ph???m
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            Gi??
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            S??? L?????ng
                                        </th>
                                        <th className="text-center py-3 h4 mw-160">
                                            T???ng Ti???n
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
                                        <td className="h6">T???ng thanh to??n</td>
                                        <td className="text-center font-weight-bold h4">
                                            {formatCurrency(getTotalMoney())}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </S.CartTable>
                        <div className="mt-4 pt-2 text-right">
                            {data && data.length > 0 ? (
                                <Link
                                    to={path.checkout}
                                    className="btn btn-primary"
                                >
                                    Thanh To??n
                                </Link>
                            ) : (
                                ""
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CartSection;
