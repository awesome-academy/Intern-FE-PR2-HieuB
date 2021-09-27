import React from "react";
import { formatCurrency } from "../../../../utils/helper";
import * as S from "./OrderHistoryItem.style";

function OrderHistoryItem() {
    return (
        <tr>
            <td className="h6 text-center">1</td>
            <td>
                <div className="d-flex align-items-center">
                    <S.PurChaseImage
                        src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg"
                        className="img-fluid rounded shadow"
                        alt="s"
                    />
                    <h6 className="mb-0 ml-3 h4">dddđ</h6>
                </div>
            </td>
            <td className="text-center h4">{formatCurrency(1000)}</td>
            <td className="text-center">1</td>
            <td className="text-center h4">Chuyển khoản</td>
            <td className="text-center font-weight-bold h4">
                {formatCurrency(Number(1 * 2000))}
            </td>
        </tr>
    );
}

export default OrderHistoryItem;
