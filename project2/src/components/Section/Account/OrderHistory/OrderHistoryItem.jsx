import React from "react";
import { formatCurrency } from "../../../../utils/helper";
import * as S from "./OrderHistoryItem.style";

function OrderHistoryItem({ product, paymentId, paymentType }) {
    const renderStatus = (stt) => {
        if (stt === 0) {
            return "Đang chờ xác nhận";
        } else if (stt === 1) {
            return "Đã xác nhận";
        } else {
            return "Huỷ đơn";
        }
    };

    return (
        <tr>
            <td className="h6 text-center">{paymentId}</td>
            <td>
                <div className="d-flex align-items-center">
                    <S.PurChaseImage
                        src={product.image}
                        className="img-fluid rounded shadow"
                        alt="s"
                    />
                    <h6 className="mb-0 ml-3 h4">{product.name}</h6>
                </div>
            </td>
            <td className="text-center h4">{formatCurrency(product.price)}</td>
            <td className="text-center h4">{product.count}</td>
            <td className="text-center h4">
                {renderStatus(Number(product.status))}
            </td>
            <td className="text-center font-weight-bold h4">
                {formatCurrency(Number(product.count * product.price))}
            </td>
        </tr>
    );
}

export default OrderHistoryItem;
