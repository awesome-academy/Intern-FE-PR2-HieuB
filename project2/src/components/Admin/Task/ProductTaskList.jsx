import TaskItem from "./TaskItem";
import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import * as S from "./TaskList.style";
import { useDispatch, useSelector } from "react-redux";
import {
    changeAddressAdmin,
    changeEmailAdmin,
    changeFirstNameAdmin,
    changeLastNameAdmin,
    changePhoneAdmin,
    changeRoleAdmin
} from "../../../slice/filterAdmin.slice";
import ProductTaskItem from "./ProductTaskItem";

function ProductTaskList() {
    return (
        <S.TaskTable className="table-responsive bg-white shadow mt-5">
            <Table className="table-center table-padding mb-0 table">
                <thead>
                    <tr>
                        <th className="text-center  h4 mw-5">Id:</th>
                        <th className="text-center h4 mw-20">Tên sản phẩm:</th>
                        <th className="text-center h4 mw-20">Hình ảnh:</th>
                        <th className="text-center h4 mw-20">Mô tả:</th>
                        <th className="text-center h4 mw-10">Giá:</th>
                        <th className="text-center h4 mw-20">
                            Giá trước khi giảm:
                        </th>
                        <th className="text-center h4 mw-10">Số lượng:</th>
                        <th className="text-center h4 mw-10">Thể loại:</th>
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
                                onChange={(e) => {}}
                            />
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                            <Form.Select
                                className="form-control"
                                name="filterPrice"
                                onChange={(e) => {}}
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
                                onChange={(e) => {}}
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
                                onChange={(e) => {}}
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
                                onChange={(e) => {}}
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
                    <ProductTaskItem></ProductTaskItem>
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default ProductTaskList;
