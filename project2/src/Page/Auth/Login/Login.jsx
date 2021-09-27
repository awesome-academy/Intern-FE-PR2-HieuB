import React from "react";
import { Link, useHistory } from "react-router-dom";
import LoginBg from "../../../assets/images/categories/login.svg";
import { path } from "../../constants/path";
import HomeIcon from "@mui/icons-material/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as S from "../auth.style";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { rules } from "../../constants/rules";
import { postLogin } from "../../../slice/auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const error = useSelector((value) => value.auth.error);
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const handleLogin = async (data) => {
        const { email, password } = data;
        const body = {
            email,
            password
        };
        try {
            const res = await dispatch(postLogin(body));
            unwrapResult(res);
            history.push(path.home);
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
            <section className="bg-home d-flex align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col lg="7" md="6">
                            <div className="mr-lg-5">
                                <img
                                    src={LoginBg}
                                    className="img-fluid d-block mx-auto"
                                    alt="bg"
                                />
                            </div>
                        </Col>
                        <Col lg="5" md="6">
                            <Card className="login-page bg-white shadow rounded border-0 p-5">
                                <Card.Body>
                                    <S.CardTitle className="card-title text-center">
                                        Đăng nhập
                                    </S.CardTitle>
                                    <Form
                                        className="login-form mt-4"
                                        onSubmit={handleSubmit(handleLogin)}
                                    >
                                        <Row>
                                            <Col xs="12">
                                                <Form.Group>
                                                    <S.FormLabel>
                                                        Your Email{" "}
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative py-2">
                                                        <S.FormInput
                                                            type="email"
                                                            className={`form-control pl-5 pt-3 ${handleClass(
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
                                            <Col xs="12">
                                                <Form.Group className="mt-3">
                                                    <S.FormLabel>
                                                        Password
                                                        <span className="text-danger">
                                                            *
                                                        </span>
                                                    </S.FormLabel>
                                                    <div className="position-relative py-2">
                                                        <S.FormInput
                                                            type="password"
                                                            className={`form-control pl-5 py-3 ${handleClass(
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
                                            <Col xs="12">
                                                <div className="d-flex justify-content-between">
                                                    <p className="forgot-pass mb-0">
                                                        <Link
                                                            to="/"
                                                            className="text-dark font-weight-bold h4"
                                                        >
                                                            Quên mật khẩu ?
                                                        </Link>
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs="12" className="mt-3 mb-0">
                                                <button className="btn btn-primary btn-block">
                                                    Đăng nhập
                                                </button>
                                            </Col>
                                            <Col
                                                xs="12"
                                                className=" text-center"
                                            >
                                                <p className="mb-0 mt-3">
                                                    <small className="text-dark mr-2">
                                                        Bạn chưa có tài khoản ?
                                                    </small>{" "}
                                                    <Link
                                                        to={path.register}
                                                        className="text-dark font-weight-bold"
                                                    >
                                                        Đăng ký
                                                    </Link>
                                                </p>
                                            </Col>
                                            <Form.Control.Feedback
                                                type="invalid"
                                                className="d-block mb-4"
                                            >
                                                {error}
                                            </Form.Control.Feedback>
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

export default Login;
