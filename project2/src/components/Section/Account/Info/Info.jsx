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
                "Thay ?????i th??ng tin th??nh c??ng, vui l??ng ????ng nh???p l???i",
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
                            <Form.Label className="h4">H???</Form.Label>
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
                            <Form.Label className="h4">T??n</Form.Label>
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
                            <Form.Label className="h4">?????a ch???</Form.Label>
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
                                S??? ??i???n tho???i
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
                                M???t kh???u c?? :
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
                                M???t kh???u m???i :
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
                                                "M???t kh???u kh??ng ???????c tr??ng v???i m???t kh???u c??"
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
                                Nh???p l???i m???t kh???u m???i :
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
                                                "M???t kh???u ph???i kh???p v???i m???t kh???u m???i"
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="confirmNewPassword"></ErrorMessage>
                    </Col>
                    <Col xs="12" className="mt-2 mb-0">
                        <Button type="submit" className="btn btn-primary">
                            L??u th??ng tin
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Info;
