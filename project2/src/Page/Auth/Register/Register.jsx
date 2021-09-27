import React from "react";
import { Link, useHistory } from "react-router-dom";
import { path } from "../../constants/path";
import HomeIcon from "@mui/icons-material/Home";
import RegisterBg from "../../../assets/images/categories/signup.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as S from "../auth.style";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/rules";
import { useDispatch } from "react-redux";
import { postRegister } from "../../../slice/auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm();

    const handleRegister = async (data) => {
        const { firstName, lastName, email, password } = data;
        const body = {
            firstName,
            lastName,
            email,
            password,
            address: "",
            phone: ""
        };
        try {
            const res = await dispatch(postRegister(body));
            unwrapResult(res);
            history.push(path.login);
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
        <>
            <div className="back-to-home rounded d-flex align-items-center justify-content-center py-4">
                <Link
                    to={path.home}
                    className="btn btn-icon btn-soft-primary d-flex align-items-center justify-content-center"
                >
                    <HomeIcon></HomeIcon>
                </Link>
            </div>
            <section className="bg-auth-home d-table w-100">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="7" md="6">
                            <div className="mr-lg-5">
                                <img
                                    src={RegisterBg}
                                    className="img-fluid d-block mx-auto"
                                    alt="registerbg"
                                />
                            </div>
                        </Col>
                        <Col lg="5" md="6">
                            <Card className="shadow rounded border-0 p-4">
                                <Card.Body>
                                    <S.CardTitle className="text-center">
                                        Đăng ký
                                    </S.CardTitle>
                                    <Form
                                        className="login-form mt-4"
                                        onSubmit={handleSubmit(handleRegister)}
                                        noValidate
                                    >
                                        <Row>
                                            <Col md="6">
                                                <Form.Group className="py-3">
                                                    <S.FormLabel>
                                                        Họ{" "}
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative">
                                                        <S.FormInput
                                                            type="text"
                                                            className={`pl-5 ${handleClass(
                                                                "firstName"
                                                            )}`}
                                                            placeholder="First Name"
                                                            name="firstName"
                                                            {...register(
                                                                "firstName",
                                                                {
                                                                    ...rules.firstName,
                                                                    validate: {
                                                                        name: rules
                                                                            .validate
                                                                            .name
                                                                    }
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                                <ErrorMessage name="firstName"></ErrorMessage>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="py-3">
                                                    <S.FormLabel>
                                                        Tên
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative">
                                                        <S.FormInput
                                                            type="text"
                                                            className={`pl-5 ${handleClass(
                                                                "lastName"
                                                            )}`}
                                                            placeholder="Last Name"
                                                            name="lastName"
                                                            {...register(
                                                                "lastName",
                                                                {
                                                                    ...rules.lastName,
                                                                    validate: {
                                                                        name: rules
                                                                            .validate
                                                                            .name
                                                                    }
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                                <ErrorMessage name="lastName"></ErrorMessage>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group className="py-3">
                                                    <S.FormLabel>
                                                        Email
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative">
                                                        <S.FormInput
                                                            type="email"
                                                            className={`pl-5 ${handleClass(
                                                                "email"
                                                            )}`}
                                                            placeholder="Email"
                                                            name="email"
                                                            {...register(
                                                                "email",
                                                                {
                                                                    ...rules.email,
                                                                    validate: {
                                                                        name: rules
                                                                            .validate
                                                                            .email
                                                                    }
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                                <ErrorMessage name="email"></ErrorMessage>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group className="py-3">
                                                    <S.FormLabel>
                                                        Mật khẩu
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative">
                                                        <S.FormInput
                                                            type="password"
                                                            className={`pl-5 ${handleClass(
                                                                "password"
                                                            )}`}
                                                            placeholder="Password"
                                                            name="password"
                                                            {...register(
                                                                "password",
                                                                rules.password
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                                <ErrorMessage name="password"></ErrorMessage>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group className="py-3">
                                                    <S.FormLabel>
                                                        Nhập lại mật khẩu
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative">
                                                        <S.FormInput
                                                            type="password"
                                                            className={`pl-5 ${handleClass(
                                                                "confirmPassword"
                                                            )}`}
                                                            placeholder="Password"
                                                            name="confirmPassword"
                                                            {...register(
                                                                "confirmPassword",
                                                                {
                                                                    ...rules.confirmPassword,
                                                                    validate: {
                                                                        confirmPassword:
                                                                            (
                                                                                value
                                                                            ) =>
                                                                                value ===
                                                                                    getValues(
                                                                                        "password"
                                                                                    ) ||
                                                                                "Mật khẩu không khớp"
                                                                    }
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                                <ErrorMessage name="confirmPassword"></ErrorMessage>
                                            </Col>
                                            <Col md="12">
                                                <button
                                                    className="btn btn-primary btn-block"
                                                    type="submit"
                                                >
                                                    Đăng ký
                                                </button>
                                            </Col>
                                            <div className="mx-auto">
                                                <p className="mb-0 mt-3">
                                                    <small className="text-dark mr-2">
                                                        Đã có tài khoản?
                                                    </small>{" "}
                                                    <Link
                                                        to={path.login}
                                                        className="text-dark font-weight-bold"
                                                    >
                                                        Đăng nhập
                                                    </Link>
                                                </p>
                                            </div>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Register;
