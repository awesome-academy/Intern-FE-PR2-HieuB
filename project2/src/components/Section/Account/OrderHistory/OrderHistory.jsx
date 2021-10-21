import React from "react";
import Table from "react-bootstrap/Table";
import * as S from "./OrderHistory.style";
import OrderHistoryItem from "./OrderHistoryItem";

function OrderHistory() {
    return (
        <S.PurChaseTable className="table-responsive bg-white shadow">
            <Table className="table-center table-padding mb-0">
                <thead>
                    <tr>
                        <th className="text-center py-3 h4 mw-30">
                            Mã sản phẩm
                        </th>
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
