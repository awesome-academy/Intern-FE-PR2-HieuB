import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as S from "./TaskForm.style";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { rules } from "../../../Page/constants/rules";
import { toastAlert } from "../../../utils/helper";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
    addUser,
    getTotalCountAdmin,
    getUserAll,
    updateUser
} from "../../../slice/admin.slice";
import { useSelector } from "react-redux";
import { changePageAdmin } from "../../../slice/filterAdmin.slice";

function TaskForm({ setDisplayForm }) {
    const userList = useSelector((state) => state.adminUser.profile);
    const filterAdmin = useSelector((state) => state.filterAdmin);
    const profile = useSelector((state) => state.manager);

    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: profile.type === "edit" ? profile.profile.email : "",
            firstName: profile.type === "edit" ? profile.profile.firstName : "",
            lastName: profile.type === "edit" ? profile.profile.lastName : "",
            phone: profile.type === "edit" ? profile.profile.phone : "",
            address: profile.type === "edit" ? profile.profile.address : "",
            role: profile.type === "edit" ? profile.profile.role : "user"
        }
    });

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

    const handleAddUser = async (body) => {
        let result = userList.filter((item) => {
            return item.email === body.email;
        });
        if (result.length > 0) {
            toastAlert("Địa chỉ email đã tồn tại", "error");
        } else {
            try {
                const data = await dispatch(addUser(body));
                unwrapResult(data);

                handleClear();
                toastAlert("Thêm người dùng thành công", "success");
            } catch (error) {
                toastAlert("Đăng ký thất bại", "error");
            }
        }
        dispatch(getTotalCountAdmin(filterAdmin));
        dispatch(getUserAll(filterAdmin));
        dispatch(changePageAdmin(1));
    };

    const handleClear = () => {
        reset({
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            role: "user"
        });
        setDisplayForm(false);
    };

    const handleUpdate = async (data) => {
        const body = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            address: data.address,
            role: data.role
        };
        const params = {
            id: profile.profile.id,
            body
        };

        try {
            const data = dispatch(updateUser(params));
            unwrapResult(data);
            toastAlert("Update thành công", "success");
            handleClear();
        } catch (error) {
            toastAlert("Update thất bại", "error");
        }
        dispatch(getTotalCountAdmin(filterAdmin));
        dispatch(getUserAll(filterAdmin));
        dispatch(changePageAdmin(1));
    };

    return (
        <S.Panel>
            <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="panel-title">
                    {profile.type === "edit"
                        ? "Sửa người dùng"
                        : "Thêm người dùng"}
                </h3>
                <HighlightOffIcon
                    onClick={() => {
                        setDisplayForm(false);
                    }}
                ></HighlightOffIcon>
            </div>
            <div className="panel-body">
                <Form
                    onSubmit={handleSubmit(
                        profile.type === "edit" ? handleUpdate : handleAddUser
                    )}
                >
                    <Form.Group className="form-group mb-4 mb-4">
                        <Form.Label>Email :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("email")}`}
                            name="email"
                            {...register("email", {
                                ...rules.email,
                                validate: {
                                    email: rules.validate.email
                                }
                            })}
                        />
                        <ErrorMessage name="email"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Họ :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass(
                                "firstName"
                            )}`}
                            name="firstName"
                            {...register("firstName", {
                                ...rules.firstName,
                                validate: {
                                    firstName: rules.validate.name
                                }
                            })}
                        />
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Tên :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass(
                                "lastName"
                            )}`}
                            name="lastName"
                            {...register("lastName", {
                                ...rules.lastName,
                                validate: {
                                    lastName: rules.validate.name
                                }
                            })}
                        />
                        <ErrorMessage name="lastName"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Số điện thoại :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("phone")}`}
                            name="phone"
                            {...register("phone", {
                                ...rules.phone,
                                validate: {
                                    phone: rules.validate.phone
                                }
                            })}
                        />

                        <ErrorMessage name="phone"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Địa chỉ :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("address")}`}
                            name="address"
                            {...register("address", {
                                ...rules.address
                            })}
                        />
                        <ErrorMessage name="address"></ErrorMessage>
                    </Form.Group>
                    {profile.type === "edit" ? (
                        ""
                    ) : (
                        <Form.Group className="form-group mb-4">
                            <Form.Label>Mật khẩu:</Form.Label>
                            <input
                                type="password"
                                className={`form-control ${handleClass(
                                    "password"
                                )}`}
                                name="password"
                                {...register("password", {
                                    ...rules.password
                                })}
                            />
                            <ErrorMessage name="password"></ErrorMessage>
                        </Form.Group>
                    )}

                    <Form.Group className="form-group mb-4">
                        <Form.Label>Vai trò :</Form.Label>
                        <Form.Select
                            className={`form-control ${handleClass("role")}`}
                            name="role"
                            {...register("role")}
                        >
                            <option value="user">Người dùng</option>
                            <option value="admin">Admin</option>
                            <option value="notactive">Huỷ kích hoạt</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <Button type="submit">
                            {profile.type === "edit" ? "Sửa" : "Thêm"}
                        </Button>
                        &nbsp;
                        <Button
                            type="button"
                            className="btn-danger"
                            onClick={handleClear}
                        >
                            Hủy Bỏ
                        </Button>
                    </div>
                </Form>
            </div>
        </S.Panel>
    );
}

export default TaskForm;
