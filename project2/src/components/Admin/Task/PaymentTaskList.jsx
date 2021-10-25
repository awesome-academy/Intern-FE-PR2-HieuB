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
import { getPayment } from "../../../slice/admin.slice";
import PaymentTaskItem from "./PaymentTaskItem";

function PaymentTaskList() {
    const [paymentList, setPaymentList] = useState([]);

    const dispatch = useDispatch();

    const filter = useSelector((state) => state.filterAdminPayment);

    useEffect(() => {
        const _getPayment = async () => {
            const data = await dispatch(getPayment(filter));
            const res = unwrapResult(data);
            setPaymentList(res.data);
        };
        _getPayment();
    }, [filter, dispatch]);

    return (
        <S.TaskTable className="table-responsive bg-white shadow mt-5">
            <Table className="table-center table-padding mb-0 table">
                <thead>
                    <tr>
                        <th className="text-center h4 mw-5">Id:</th>
                        <th className="text-center h4 mw-20">
                            Tên khách hàng:
                        </th>
                        <th className="text-center h4 mw-20">Mã khách hàng:</th>
                        <th className="text-center h4 mw-20">Email:</th>
                        <th className="text-center h4 mw-20">Điện thoại:</th>
                        <th className="text-center h4 mw-30">Địa chỉ:</th>
                        <th className="text-center h4 mw-20">
                            Hình thức thanh toán:
                        </th>
                        <th className="text-center h4 mw-20">
                            Tổng tiền đơn hàng:
                        </th>
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
                                onChange={(e) => {}}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={(e) => {}}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={(e) => {}}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                onChange={(e) => {}}
                            />
                        </td>
                        <td></td>
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
                                    Chuyển khoản
                                </option>
                                <option className="h4" value="down">
                                    Thanh toán tại nhà
                                </option>
                            </Form.Select>
                        </td>
                        <td></td>
                        <td />
                    </tr>
                    {paymentList &&
                        paymentList.map((item) => {
                            return (
                                <PaymentTaskItem
                                    key={item.id}
                                    payment={item}
                                ></PaymentTaskItem>
                            );
                        })}
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default PaymentTaskList;
