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
    addProduct,
    getCountPageProduct,
    updateProduct
} from "../../../slice/admin.slice";
import { useSelector } from "react-redux";
import { getProducts } from "../../../slice/products.slice";
import { changePageAdminProduct } from "../../../slice/filterAdminProduct.slice";

function ProductForm({ setDisplayForm }) {
    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filterAdminProduct);
    const profile = useSelector((state) => state.manager);

    const {
        handleSubmit,
        register,
        reset,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: profile.type === "editProduct" ? profile.product.name : "",
            image: profile.type === "editProduct" ? profile.product.image : "",
            image1:
                profile.type === "editProduct" ? profile.product.images[0] : "",
            image2:
                profile.type === "editProduct" ? profile.product.images[1] : "",
            image3:
                profile.type === "editProduct" ? profile.product.images[2] : "",
            image4:
                profile.type === "editProduct" ? profile.product.images[3] : "",
            price: profile.type === "editProduct" ? profile.product.price : "",
            description:
                profile.type === "editProduct"
                    ? profile.product.description
                    : "",
            price_before_discount:
                profile.type === "editProduct"
                    ? profile.product.price_before_discount
                    : "",
            quantity:
                profile.type === "editProduct" ? profile.product.quantity : "",
            categoryID:
                profile.type === "editProduct" ? profile.product.categoryID : ""
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

    const handleAddProduct = async (data) => {
        const {
            name,
            image,
            image1,
            image2,
            image3,
            image4,
            price,
            description,
            price_before_discount,
            quantity,
            categoryID
        } = data;
        const body = {
            name,
            image,
            images: [image1, image2, image3, image4],
            price: Number(price),
            description,
            price_before_discount: Number(price_before_discount),
            quantity: Number(quantity),
            categoryID: Number(categoryID),
            rating: 0,
            view: 0
        };
        try {
            const data = await dispatch(addProduct(body));
            unwrapResult(data);
            handleClear();
            toastAlert("Thêm sản phẩm thành công", "success");
        } catch (error) {
            toastAlert("Thêm sản phẩm thất bại", "error");
        }
        dispatch(getProducts(filter));
        dispatch(changePageAdminProduct(1));
        dispatch(getCountPageProduct(filter));
    };

    const handleClear = () => {
        reset();
        setDisplayForm(false);
    };

    const handleUpdateProduct = async (data) => {
        const body = {
            name: data.name,
            image: data.image,
            images: [data.image1, data.image2, data.image3, data.image4],
            price: Number(data.price),
            description: data.description,
            price_before_discount: Number(data.price_before_discount),
            quantity: Number(data.quantity),
            categoryID: Number(data.categoryID)
        };
        const params = {
            id: profile.product.id,
            body
        };

        try {
            const data = dispatch(updateProduct(params));
            unwrapResult(data);
            toastAlert("Update thành công", "success");
            handleClear();
        } catch (error) {
            toastAlert("Update thất bại", "error");
        }
        dispatch(getProducts(filter));
        dispatch(changePageAdminProduct(1));
        dispatch(getCountPageProduct(filter));
    };
    return (
        <S.Panel>
            <div className="panel-heading d-flex align-items-center justify-content-between">
                <h3 className="panel-title">
                    {profile.type === "editProduct"
                        ? "Sửa sản phẩm"
                        : "Thêm sản phẩm"}
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
                        profile.type === "editProduct"
                            ? handleUpdateProduct
                            : handleAddProduct
                    )}
                >
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
                                "price_before_discount"
                            )}`}
                            name="price_before_discount"
                            {...register("price_before_discount", {
                                ...rules.required,

                                validate: {
                                    number: rules.validate.number,
                                    checkPrice: (value) =>
                                        Number(value) >
                                            Number(getValues("price")) ||
                                        "Giá trước khi giảm phải lớn hơn giá đã giảm"
                                }
                            })}
                        />
                        <ErrorMessage name="price_before_discount"></ErrorMessage>
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
                                "categoryID"
                            )}`}
                            name="categoryID"
                            {...register("categoryID")}
                        >
                            <option value={1}>Áo thun</option>
                            <option value={2}>Đồng hồ</option>
                            <option value={3}>Điện thoại</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="text-center mt-5">
                        <Button type="submit">
                            {profile.type === "editProduct" ? "Sửa" : "Thêm"}
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

export default ProductForm;
