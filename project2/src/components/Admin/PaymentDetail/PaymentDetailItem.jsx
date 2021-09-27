import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { formatCurrency } from "../../../utils/helper";

function PaymentDetailItem({ product, handleSave }) {
    const { id, name, count, price, image, status } = product;

    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(status);
    }, [status]);

    const handleSavePaymentDetail = (e) => {
        const body = {
            id,
            name,
            count,
            price,
            image,
            status: e.target.value
        };
        handleSave(body);
    };

    return (
        <tr>
            <td className="text-center h4">{id}</td>
            <td className="text-center h4">{name}</td>
            <td className="text-center h4 ">
                <img src={image} alt="s" width={50} height={50} />
            </td>
            <td className="text-center h4 ">{count}</td>
            <td className="text-center h4">{formatCurrency(price)}</td>
            <td className="text-center h4">
                <Form.Select
                    className="form-control"
                    name="filterQuantity"
                    value={value}
                    onChange={handleSavePaymentDetail}
                >
                    <option className="h4" value={0}>
                        Chờ xác nhận
                    </option>
                    <option className="h4" value={1}>
                        Xác nhận
                    </option>
                    <option className="h4" value={2}>
                        Huỷ đơn
                    </option>
                </Form.Select>
            </td>
        </tr>
    );
}

export default PaymentDetailItem;
