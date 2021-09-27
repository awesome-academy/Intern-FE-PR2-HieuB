import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as S from "./CheckoutSection.style";
import { useForm } from "react-hook-form";
import { formatCurrency, toastAlert } from "../../../utils/helper";
import { rules } from "../../../Page/constants/rules";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { postPayment } from "../../../slice/checkout.slice";
import { path } from "../../../Page/constants/path";
import { useHistory } from "react-router";
import { setCart } from "../../../slice/cart.slice";
import { LocalStorage } from "../../../Page/constants/localStorage";

function CheckoutSection() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            fullname: "",
            address: "",
            phone: "",
            email: "",
            paymentType: "pay-home"
        }
    });

    const info = useSelector((value) => value.cart);
    const getTotalMoney = () => {
        let totalCost = 0;
        if (info) {
            info.product.map((item) => {
                return (totalCost += Number(item.price * item.count));
            });
        } else {
            totalCost = 0;
        }
        return totalCost;
    };
    const handlePayment = async (data) => {
        const { fullname, email, address, phone, paymentType } = data;
        const body = {
            fullname,
            email,
            address,
            phone,
            paymentType,
            ...info
        };
        try {
            const res = await dispatch(postPayment(body));
            unwrapResult(res);
            history.push(path.thankyou);
            const userId = JSON.parse(localStorage.getItem(LocalStorage.user))
                .user.id;
            let cartList = JSON.parse(localStorage.getItem(LocalStorage.cart));
            if (cartList.find((item) => item.userId === userId)) {
                let result = cartList.filter((item) => item.userId !== userId);
                console.log(result);
                localStorage.setItem(LocalStorage.cart, JSON.stringify(result));
            }
            dispatch(
                setCart({
                    userId,
                    product: []
                })
            );
            toastAlert("Thanh toán thành công", "success");
        } catch (error) {
            console.log(error);
        }
    };

    const handleClass = (name, baseClass = "form-control") => {
        return `${baseClass} ${errors[name] ? "is-invalid" : ""}`;
    };

    const ErrorMessage = ({ name }) => {
        if (errors[name]) {
            return (
                <Form.Control.Feedback type="invalid" className="d-block mb-4">
                    {errors[name].message}
                </Form.Control.Feedback>
            );
        }
        return null;
    };

    return (
        <section className="section">
            <Container>
                <Row>
                    <Col lg="7" md="6">
                        <div className="rounded shadow-lg p-4">
                            <h5 className="mb-0 h3">Thông tin thanh toán:</h5>
                            <Form
                                className="mt-4"
                                onSubmit={handleSubmit(handlePayment)}
                            >
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
                                                name="fullname"
                                                id="name"
                                                type="text"
                                                className={`form-control ${handleClass(
                                                    "fullname"
                                                )}`}
                                                placeholder="Họ và tên"
                                                {...register("fullname", {
                                                    ...rules.fullname,
                                                    validate: {
                                                        name: rules.validate
                                                            .name
                                                    }
                                                })}
                                            />
                                        </Form.Group>
                                        <ErrorMessage name="fullname"></ErrorMessage>
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
                                                className={`form-control ${handleClass(
                                                    "address"
                                                )}`}
                                                placeholder="Địa chỉ :"
                                                {...register("address", {
                                                    ...rules.address
                                                })}
                                            />
                                        </Form.Group>
                                        <ErrorMessage name="address"></ErrorMessage>
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
                                                className={`form-control ${handleClass(
                                                    "phone"
                                                )}`}
                                                placeholder="Số điện thoại"
                                                {...register("phone", {
                                                    ...rules.phone,
                                                    validate: {
                                                        phone: rules.validate
                                                            .phone
                                                    }
                                                })}
                                            />
                                        </Form.Group>
                                        <ErrorMessage name="phone"></ErrorMessage>
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
                                                className={`form-control ${handleClass(
                                                    "email"
                                                )}`}
                                                placeholder="Your email :"
                                                {...register("email", {
                                                    ...rules.email,
                                                    validate: {
                                                        email: rules.validate
                                                            .email
                                                    }
                                                })}
                                            />
                                        </Form.Group>
                                        <ErrorMessage name="email"></ErrorMessage>
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
                                                value="pay-home"
                                                {...register("paymentType")}
                                            ></S.FormCheck>
                                            <S.FormCheck
                                                type="radio"
                                                label="Chuyển khoản"
                                                name="paymentType"
                                                id="pay-bank"
                                                className="mt-3"
                                                value="pay-bank"
                                                {...register("paymentType")}
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
                                <h5>{info.product.length} sản phẩm</h5>
                            </div>
                            <div className="table-responsive">
                                <Table className="table-center table-padding mb-0">
                                    <tbody>
                                        <tr className="bg-light">
                                            <td className="h5 font-weight-bold">
                                                Tổng thanh toán
                                            </td>
                                            <td className="text-center text-primary h4 font-weight-bold">
                                                {formatCurrency(
                                                    getTotalMoney()
                                                )}
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
