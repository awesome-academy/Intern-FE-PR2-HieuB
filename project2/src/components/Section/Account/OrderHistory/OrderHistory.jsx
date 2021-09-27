import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { LocalStorage } from "../../../../Page/constants/localStorage";
import { getPayment } from "../../../../slice/auth.slice";
import * as S from "./OrderHistory.style";
import OrderHistoryItem from "./OrderHistoryItem";

function OrderHistory() {
    const [payments, setPayments] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem(LocalStorage.user)).user
            .id;
        const params = {
            userId
        };
        const _getPayment = async () => {
            const data = await dispatch(getPayment(params));
            const res = unwrapResult(data);
            setPayments(res.data);
        };
        _getPayment();
    }, [dispatch]);

    return (
        <S.PurChaseTable className="table-responsive bg-white shadow">
            <Table className="table-center table-padding mb-0">
                <thead>
                    <tr>
                        <th className="text-center py-3 h4 mw-30">Mã đơn</th>
                        <th className="py-3 h4 mw-30">Sản phẩm</th>
                        <th className="text-center py-3 h4 mw-30">Giá</th>
                        <th className="text-center py-3 h4 mw-160">Số Lượng</th>
                        <th className="text-center py-3 h4 mw-180">
                            Hình thức thanh toán
                        </th>
                        <th className="text-center py-3 h4 mw-160">
                            Tổng Tiền
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <OrderHistoryItem></OrderHistoryItem>
                </tbody>
            </Table>
        </S.PurChaseTable>
    );
}

export default OrderHistory;
