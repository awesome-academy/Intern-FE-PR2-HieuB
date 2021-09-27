import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { rules } from "../../../../Page/constants/rules";
import Button from "react-bootstrap/Button";
import { LocalStorage } from "../../../../Page/constants/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { updateMe } from "../../../../slice/auth.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router";
import { path } from "../../../../Page/constants/path";
import { setCart } from "../../../../slice/cart.slice";
import { toastAlert } from "../../../../utils/helper";

function Info() {
    const info = useSelector((value) => value.auth.profile.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            firstName: info.firstName || "",
            lastName: info.lastName || "",
            phone: info.phone || "",
            address: info.address || ""
        }
    });

    const handleSaveInfo = async (data) => {
        const userId = JSON.parse(localStorage.getItem(LocalStorage.user)).user
            .id;
        const token = JSON.parse(
            localStorage.getItem(LocalStorage.user)
        ).accessToken;
        const { firstName, lastName, phone, address, newPassword } = data;
        const params = {
            id: userId,
            token,
            body: {
                firstName,
                lastName,
                phone,
                address,
                password: newPassword
            }
        };
        try {
            const res = await dispatch(updateMe(params));
            unwrapResult(res);
            history.push(path.login);
            localStorage.removeItem(LocalStorage.user);
            dispatch(setCart({}));
            toastAlert(
                "Thay đổi thông tin thành công, vui lòng đăng nhập lại",
                "success"
            );
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
            <Form onSubmit={handleSubmit(handleSaveInfo)}>
                <Row>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">Họ</Form.Label>
                            <div className="position-relative">
                                <input
                                    name="firstName"
                                    id="first-name"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "first-name"
                                    )}`}
                                    defaultValue={getValues("firstName")}
                                    {...register("firstName", {
                                        ...rules.firstName,
                                        validate: {
                                            name: rules.validate.name
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </Col>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">Tên</Form.Label>
                            <div className="position-relative">
                                <input
                                    name="lastName"
                                    id="last-name"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "last-name"
                                    )}`}
                                    defaultValue={getValues("lastName")}
                                    {...register("lastName", {
                                        ...rules.lastName,
                                        validate: {
                                            name: rules.validate.name
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="lastName"></ErrorMessage>
                    </Col>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">Địa chỉ</Form.Label>
                            <div className="position-relative">
                                <input
                                    name="address"
                                    id="address"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "address"
                                    )}`}
                                    defaultValue={getValues("address")}
                                    {...register("address", {
                                        ...rules.address
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="address"></ErrorMessage>
                    </Col>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">
                                Số điện thoại
                            </Form.Label>
                            <div className="position-relative">
                                <input
                                    name="phone"
                                    id="phone"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "phone"
                                    )}`}
                                    defaultValue={getValues("phone")}
                                    {...register("phone", {
                                        ...rules.phone,
                                        validate: {
                                            phone: rules.validate.phone
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="phone"></ErrorMessage>
                    </Col>
                    <Col xs="12">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">
                                Mật khẩu cũ :
                            </Form.Label>
                            <div className="position-relative">
                                <input
                                    type="password"
                                    className={`form-control pl-5 ${handleClass(
                                        "oldPassword"
                                    )}`}
                                    placeholder="Old password"
                                    name="oldPassword"
                                    {...register("oldPassword", {
                                        ...rules.confirmPassword
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="oldPassword"></ErrorMessage>
                    </Col>
                    <Col xs="12">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">
                                Mật khẩu mới :
                            </Form.Label>
                            <div className="position-relative">
                                <input
                                    type="password"
                                    className={`form-control pl-5 ${handleClass(
                                        "newPassword"
                                    )}`}
                                    placeholder="New password"
                                    name="newPassword"
                                    {...register("newPassword", {
                                        ...rules.confirmPassword,
                                        validate: {
                                            confirmPassword: (value) =>
                                                value !==
                                                    getValues("oldPassword") ||
                                                "Mật khẩu không được trùng với mật khẩu cũ"
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="newPassword"></ErrorMessage>
                    </Col>
                    <Col xs="12">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">
                                Nhập lại mật khẩu mới :
                            </Form.Label>
                            <div className="position-relative">
                                <input
                                    type="password"
                                    className={`form-control pl-5 ${handleClass(
                                        "confirmNewPassword"
                                    )}`}
                                    placeholder="Re-type New password"
                                    name="confirmNewPassword"
                                    {...register("confirmNewPassword", {
                                        ...rules.confirmPassword,
                                        validate: {
                                            confirmPassword: (value) =>
                                                value ===
                                                    getValues("newPassword") ||
                                                "Mật khẩu phải khớp với mật khẩu mới"
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="confirmNewPassword"></ErrorMessage>
                    </Col>
                    <Col xs="12" className="mt-2 mb-0">
                        <Button type="submit" className="btn btn-primary">
                            Lưu thông tin
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Info;
