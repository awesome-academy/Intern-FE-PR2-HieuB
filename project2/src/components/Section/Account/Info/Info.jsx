import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-hook-form";
import { rules } from "../../../../Page/constants/rules";
import Button from "react-bootstrap/Button";

function Info() {
    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors }
    } = useForm();
    console.log(errors);
    const handleSaveInfo = async (data) => {
        console.log(data);
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
                                    name="first-name"
                                    id="first-name"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "first-name"
                                    )}`}
                                    defaultValue="Cally"
                                    {...register("first-name", {
                                        ...rules.firstName,
                                        validate: {
                                            name: rules.validate.name
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="first-name"></ErrorMessage>
                    </Col>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">Tên</Form.Label>
                            <div className="position-relative">
                                <input
                                    name="last-name"
                                    id="last-name"
                                    type="text"
                                    className={`form-control pl-5 ${handleClass(
                                        "last-name"
                                    )}`}
                                    defaultValue="Joseph"
                                    {...register("last-name", {
                                        ...rules.lastName,
                                        validate: {
                                            name: rules.validate.name
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="last-name"></ErrorMessage>
                    </Col>
                    <Col md="6">
                        <Form.Group className="mb-4">
                            <Form.Label className="h4">Email</Form.Label>
                            <div className="position-relative">
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    className={`form-control pl-5 ${handleClass(
                                        "email"
                                    )}`}
                                    defaultValue="callyjoseph@gmail.com"
                                    {...register("email", {
                                        ...rules.email,
                                        validate: {
                                            email: rules.validate.email
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="email"></ErrorMessage>
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
                                    defaultValue="0935062414"
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
                                        "password"
                                    )}`}
                                    placeholder="Old password"
                                    name="old-password"
                                    {...register("old-password", {
                                        ...rules.confirmPassword
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="old-password"></ErrorMessage>
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
                                        "new-password"
                                    )}`}
                                    placeholder="New password"
                                    name="new-password"
                                    {...register("new-password", {
                                        ...rules.confirmPassword,
                                        validate: {
                                            confirmPassword: (value) =>
                                                value ===
                                                    getValues("old-password") ||
                                                "Mật khẩu không khớp"
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="new-password"></ErrorMessage>
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
                                        "confirm-newpassword"
                                    )}`}
                                    placeholder="Re-type New password"
                                    name="confirm-newpassword"
                                    {...register("new-password", {
                                        ...rules.confirmPassword,
                                        validate: {
                                            confirmPassword: (value) =>
                                                value ===
                                                    getValues("new-password") ||
                                                "Mật khẩu phải khớp với mật khẩu mới"
                                        }
                                    })}
                                />
                            </div>
                        </Form.Group>
                        <ErrorMessage name="confirm-newpassword"></ErrorMessage>
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
