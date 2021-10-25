import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import * as S from "./TaskItem.style";
import Button from "react-bootstrap/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { formatCurrency } from "../../../utils/helper";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../slice/manager.slice";

function PaymentTaskItem({ payment, setDisplayForm }) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        id,
        address,
        email,
        fullname,
        paymentType,
        phone,
        userId,
        product
    } = payment;

    const totalPayment = (product) => {
        let total = product.reduce((total, item) => {
            return total + item.count * item.price;
        }, 0);
        return total;
    };

    const renderLabel = (type) => {
        return type === "pay-home" ? "label-danger" : "label-success";
    };
    const renderPaymentType = (type) => {
        return type === "pay-home" ? "Thanh toán tại nhà" : "Chuyển khoản";
    };

    return (
        <tr>
            <td className="text-center h4">{id}</td>
            <td className="text-center h4">{fullname}</td>
            <td className="text-center h4 ">{userId}</td>
            <td className="text-center h4 ">{email}</td>
            <td className="text-center h4">{phone}</td>
            <td className="text-center h4">{address}</td>
            <td className="text-center h4">
                <S.TaskLabel className={`label ${renderLabel(paymentType)}`}>
                    {renderPaymentType(paymentType)}
                </S.TaskLabel>
            </td>
            <td className="text-center h4">
                {formatCurrency(totalPayment(product))}
            </td>
            <td className="text-center">
                <div className="d-flex align-items-center justify-content-center">
                    <Button
                        type="button"
                        className="btn-warning d-flex align-items-center mx-2"
                    >
                        <CreateIcon></CreateIcon>
                        Xem chi tiết
                    </Button>
                </div>
            </td>
        </tr>
    );
}

export default PaymentTaskItem;
