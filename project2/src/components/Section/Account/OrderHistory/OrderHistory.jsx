import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { LocalStorage } from "../../../../Page/constants/localStorage";
import { getPayment } from "../../../../slice/auth.slice";
import * as S from "./OrderHistory.style";
import OrderHistoryList from "./OrderHistoryList";

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

    const renderOrderItem = () => {
        let result = payments.map((item) => {
            return {
                id: item.id,
                paymentType: item.paymentType,
                products: item.product
            };
        });
        let arr = result.map((item, index) => {
            return (
                <OrderHistoryList
                    paymentId={item.id}
                    paymentType={item.paymentType}
                    list={item.products}
                    key={index}
                ></OrderHistoryList>
            );
        });
        return arr;
    };

    return (
        <S.PurChaseTable className="table-responsive bg-white shadow">
            {payments.length > 0 ? (
                <Table className="table-center table-padding mb-0">
                    <thead>
                        <tr>
                            <th className="text-center py-3 h4 mw-30">
                                Mã đơn
                            </th>
                            <th className="py-3 h4 mw-30">Sản phẩm</th>
                            <th className="text-center py-3 h4 mw-30">Giá</th>
                            <th className="text-center py-3 h4 mw-160">
                                Số Lượng
                            </th>
                            <th className="text-center py-3 h4 mw-180">
                                Trạng thái
                            </th>
                            <th className="text-center py-3 h4 mw-160">
                                Tổng Tiền
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderOrderItem()}</tbody>
                </Table>
            ) : (
                <h3>Chưa có đơn hàng nào</h3>
            )}
        </S.PurChaseTable>
    );
}

export default OrderHistory;
