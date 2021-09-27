import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import * as S from "./TaskList.style";
import { useDispatch, useSelector } from "react-redux";
import ProductTaskItem from "./ProductTaskItem";
import { getProducts } from "../../../slice/products.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import {
    changeCategoryAdminProduct,
    changeNameAdminProduct,
    changeOrderAdminProduct,
    changeSortAdminProduct
} from "../../../slice/filterAdminProduct.slice";

function ProductTaskList({ setDisplayForm }) {
    const [productTaskList, setProductTaskList] = useState([]);

    const dispatch = useDispatch();

    const filterAdminProduct = useSelector((state) => state.filterAdminProduct);

    useEffect(() => {
        const _getProduct = async () => {
            const data = await dispatch(getProducts(filterAdminProduct));
            const res = unwrapResult(data);
            setProductTaskList(res);
        };
        _getProduct();
    }, [filterAdminProduct, dispatch]);
    return (
        <S.TaskTable className="table-responsive bg-white shadow mt-5">
            <Table className="table-center table-padding mb-0 table">
                <thead>
                    <tr>
                        <th className="text-center h4 mw-5">Id:</th>
                        <th className="text-center h4 mw-20">Tên sản phẩm:</th>
                        <th className="text-center h4 mw-20">Hình ảnh:</th>
                        <th className="text-center h4 mw-20">Mô tả:</th>
                        <th className="text-center h4 mw-10">Giá:</th>
                        <th className="text-center h4 mw-20">
                            Giá trước khi giảm:
                        </th>
                        <th className="text-center h4 mw-10">Số lượng:</th>
                        <th className="text-center h4 mw-10">Thể loại:</th>
                        <th className="text-center h4 mw-20">Thao tác:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={(e) => {
                                    dispatch(
                                        changeNameAdminProduct(e.target.value)
                                    );
                                }}
                            />
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterPrice"
                                onChange={(e) => {
                                    if (e.target.value === "up") {
                                        dispatch(
                                            changeSortAdminProduct("price")
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("asc")
                                        );
                                    } else if (e.target.value === "down") {
                                        dispatch(
                                            changeSortAdminProduct("price")
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("desc")
                                        );
                                    } else {
                                        dispatch(changeSortAdminProduct(""));
                                        dispatch(changeOrderAdminProduct(""));
                                    }
                                }}
                            >
                                <option className="h4" value="all">
                                    Tất Cả
                                </option>
                                <option className="h4" value="up">
                                    Giá tăng dần
                                </option>
                                <option className="h4" value="down">
                                    Giá giảm dần
                                </option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterPriceBeforeDiscount"
                                onChange={(e) => {
                                    if (e.target.value === "up") {
                                        dispatch(
                                            changeSortAdminProduct(
                                                "price_before_discount"
                                            )
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("asc")
                                        );
                                    } else if (e.target.value === "down") {
                                        dispatch(
                                            changeSortAdminProduct(
                                                "price_before_discount"
                                            )
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("desc")
                                        );
                                    } else {
                                        dispatch(changeSortAdminProduct(""));
                                        dispatch(changeOrderAdminProduct(""));
                                    }
                                }}
                            >
                                <option className="h4" value="all">
                                    Tất Cả
                                </option>
                                <option className="h4" value="up">
                                    Giá tăng dần
                                </option>
                                <option className="h4" value="down">
                                    Giá giảm dần
                                </option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterQuantity"
                                onChange={(e) => {
                                    if (e.target.value === "up") {
                                        dispatch(
                                            changeSortAdminProduct("quantity")
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("asc")
                                        );
                                    } else if (e.target.value === "down") {
                                        dispatch(
                                            changeSortAdminProduct("quantity")
                                        );
                                        dispatch(
                                            changeOrderAdminProduct("desc")
                                        );
                                    } else {
                                        dispatch(changeSortAdminProduct(""));
                                        dispatch(changeOrderAdminProduct(""));
                                    }
                                }}
                            >
                                <option className="h4" value="all">
                                    Tất Cả
                                </option>
                                <option className="h4" value="up">
                                    Số Lượng Tăng Dần
                                </option>
                                <option className="h4" value="down">
                                    Số Lượng Giảm Dần
                                </option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterRole"
                                onChange={(e) => {
                                    dispatch(
                                        changeCategoryAdminProduct(
                                            e.target.value
                                        )
                                    );
                                }}
                            >
                                <option className="h4" value="all">
                                    Tất Cả
                                </option>
                                <option className="h4" value={2}>
                                    Đồng Hồ
                                </option>
                                <option className="h4" value={1}>
                                    Áo Thun
                                </option>
                                <option className="h4" value={3}>
                                    Điện Thoại
                                </option>
                            </Form.Select>
                        </td>
                        <td />
                    </tr>
                    {productTaskList &&
                        productTaskList.map((item) => {
                            return (
                                <ProductTaskItem
                                    key={item.id}
                                    product={item}
                                    setDisplayForm={setDisplayForm}
                                ></ProductTaskItem>
                            );
                        })}
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default ProductTaskList;
