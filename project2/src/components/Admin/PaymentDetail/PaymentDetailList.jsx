import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import * as S from "../Task/TaskList.style";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getCountPagePayment, getPayment } from "../../../slice/admin.slice";
import PaymentDetailItem from "./PaymentDetailItem";
import { updatePayment } from "../../../slice/paymentAdmin.slice";
import { toastAlert } from "../../../utils/helper";
import { changePageAdminPayment } from "../../../slice/filterAdminPayment.slice";

function PaymentDetailList() {
    const paymentList = useSelector((state) => state.paymentAdmin);
    const filter = useSelector((state) => state.filterAdminPayment);

    const dispatch = useDispatch();

    const [listPayment, setListPayment] = useState([]);

    useEffect(() => {
        setListPayment(paymentList.product);
    }, [paymentList]);

    const handleSave = (data) => {
        let result = listPayment.filter((item) => {
            return item.id !== data.id;
        });
        result.push(data);
        setListPayment(result);
        const params = {
            id: paymentList.id,
            body: {
                product: result
            }
        };
        try {
            const data = dispatch(updatePayment(params));
            unwrapResult(data);
            toastAlert("Cập nhật thành công", "success");
        } catch (error) {
            toastAlert("Cập nhật thất bại", "error");
        }
        dispatch(getPayment(filter));
        dispatch(changePageAdminPayment(1));
        dispatch(getCountPagePayment(filter));
    };

    return (
        <S.TaskTable className="table-responsive bg-white shadow mt-5">
            <Table className="table-center table-padding mb-0 table">
                <thead>
                    <tr>
                        <th className="text-center h4 mw-20">Mã sản phẩm:</th>
                        <th className="text-center h4 mw-20">Tên sản phẩm:</th>
                        <th className="text-center h4 mw-20">Hình ảnh:</th>
                        <th className="text-center h4 mw-20">Số lượng:</th>
                        <th className="text-center h4 mw-20">Giá:</th>
                        <th className="text-center h4 mw-20">Trạng thái:</th>
                    </tr>
                </thead>
                <tbody>
                    {listPayment &&
                        listPayment.map((item) => {
                            return (
                                <PaymentDetailItem
                                    key={item.id}
                                    product={item}
                                    handleSave={handleSave}
                                ></PaymentDetailItem>
                            );
                        })}
                </tbody>
            </Table>
        </S.TaskTable>
    );
}

export default PaymentDetailList;
