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

function ProductForm({ setDisplayForm }) {
    const dispatch = useDispatch();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm();

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

    const handleAddProduct = async (data) => {
        console.log(data);
    };

    return (
        <S.Panel>
            <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="panel-title">Thêm sản phẩm</h3>
                <HighlightOffIcon
                    onClick={() => {
                        setDisplayForm(false);
                    }}
                ></HighlightOffIcon>
            </div>
            <div className="panel-body">
                <Form onSubmit={handleSubmit(handleAddProduct)}>
                    <Form.Group className="form-group mb-4 mb-4">
                        <Form.Label>Tên sản phẩm :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("name")}`}
                            name="name"
                            {...register("name", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="name"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Hình ảnh chính :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("image")}`}
                            name="image"
                            {...register("image", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="image"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Hình ảnh phụ 1 :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("image1")}`}
                            name="image1"
                            {...register("image1", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="image1"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Hình ảnh phụ 2 :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("image2")}`}
                            name="image2"
                            {...register("image2", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="image2"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Hình ảnh phụ 3 :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("image3")}`}
                            name="image3"
                            {...register("image3", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="image3"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Hình ảnh phụ 4 :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("image4")}`}
                            name="image4"
                            {...register("image4", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="image4"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Giá :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass("price")}`}
                            name="price"
                            {...register("price", {
                                ...rules.required,
                                validate: {
                                    number: rules.validate.number
                                }
                            })}
                        />

                        <ErrorMessage name="price"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Mô tả :</Form.Label>
                        <input
                            type="text"
                            className={`form-control ${handleClass(
                                "description"
                            )}`}
                            name="description"
                            {...register("description", {
                                ...rules.required
                            })}
                        />
                        <ErrorMessage name="description"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Giá trước khi giảm :</Form.Label>

                        <input
                            type="text"
                            className={`form-control ${handleClass(
                                "priceBeforeDisCount"
                            )}`}
                            name="priceBeforeDisCount"
                            {...register("priceBeforeDisCount", {
                                ...rules.required,
                                validate: {
                                    number: rules.validate.number
                                }
                            })}
                        />
                        <ErrorMessage name="priceBeforeDisCount"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Số lượng :</Form.Label>

                        <input
                            type="text"
                            className={`form-control ${handleClass(
                                "quantity"
                            )}`}
                            name="quantity"
                            {...register("quantity", {
                                ...rules.required,
                                validate: {
                                    number: rules.validate.number
                                }
                            })}
                        />
                        <ErrorMessage name="quantity"></ErrorMessage>
                    </Form.Group>
                    <Form.Group className="form-group mb-4">
                        <Form.Label>Thể loại :</Form.Label>
                        <Form.Select
                            className={`form-control ${handleClass(
                                "category"
                            )}`}
                            name="category"
                            {...register("category")}
                        >
                            <option value={1}>Áo thun</option>
                            <option value={2}>Đồng hồ</option>
                            <option value={3}>Điện thoại</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <Button type="submit">Thêm</Button>
                        &nbsp;
                        <Button type="button" className="btn-danger">
                            Hủy Bỏ
                        </Button>
                    </div>
                </Form>
            </div>
        </S.Panel>
    );
}

export default ProductForm;
